"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Room } from "@/types/room";
import Modal from "@/components/common/Modal";
import { generateWhatsappUrl } from "@/utils/whatsapp";

interface Props {
  room: Room | null;
  open: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  room,
  open,
  onClose
}: Props) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [error, setError] = useState("");
  const [showQr, setShowQr] = useState(false);

  if (!room) return null;

  const resetForm = () => {
    setName("");
    setPhone("");
    setEntryDate("");
    setExitDate("");
    setError("");
    setShowQr(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = () => {

    if (!name || !phone || !entryDate || !exitDate) {
      setError("Completa todos los campos para continuar.");
      return;
    }

    const whatsappNumber = "59168011257";

    const url = generateWhatsappUrl(
      whatsappNumber,
      room.name,
      entryDate,
      exitDate,
      name
    );

    window.open(url, "_blank");

    resetForm();

  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >

      <div className="max-h-[90vh] overflow-y-auto p-8">

        <div className="flex items-center gap-4">

          <div className="relative h-20 w-20 overflow-hidden rounded-xl">

            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-green-800">
              {room.name}
            </h2>

            <p className="text-gray-500">
              Bs {room.price} / noche
            </p>

          </div>

        </div>

        <p className="mt-6 text-gray-600">
          Ingresa tus datos para consultar disponibilidad. La confirmación será realizada por WhatsApp.
        </p>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 focus:border-green-600 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border px-4 py-3 focus:border-green-600 focus:outline-none"
          />

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="text-sm text-gray-500">
                Fecha entrada
              </label>

              <input
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
                className="mt-1 w-full rounded-xl border px-3 py-3"
              />

            </div>

            <div>

              <label className="text-sm text-gray-500">
                Fecha salida
              </label>

              <input
                type="date"
                value={exitDate}
                onChange={(e) => setExitDate(e.target.value)}
                className="mt-1 w-full rounded-xl border px-3 py-3"
              />

            </div>

          </div>

        </div>

        {error && (

          <div className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>

        )}

<div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-5">

  <h3 className="font-semibold text-green-800">
    Confirmación por WhatsApp
  </h3>

  <p className="mt-2 text-sm leading-6 text-green-700">
    La reserva se confirma por WhatsApp. Si la habitación está disponible y deseas asegurar tu reserva con un anticipo, puedes pagar con QR.
  </p>

  <button
    type="button"
    onClick={() => setShowQr(!showQr)}
    className="mt-4 flex w-full items-center justify-between rounded-xl border border-green-200 bg-white px-4 py-3 text-left font-medium text-green-800 shadow-sm transition-all duration-300 hover:bg-green-100"
  >

    <span>
      {showQr ? "Ocultar QR" : "Pagar con QR (Opcional)"}
    </span>

    <div className={`transition-transform duration-300 ${showQr ? "rotate-180" : ""}`}>
      <ChevronDown size={20} />
    </div>

  </button>

  <div
    className={`grid transition-all duration-300 ease-in-out ${
      showQr ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
    }`}
  >

    <div className="overflow-hidden">

      <div className="rounded-2xl border bg-white p-5 text-center">

        <Image
          src="/qr/qr.jpeg"
          alt="QR de pago"
          width={220}
          height={220}
          className="mx-auto rounded-xl"
        />

        <p className="mt-4 text-sm leading-6 text-gray-600">
          Una vez realizado el pago, envía el comprobante por WhatsApp.
        </p>

      </div>

    </div>

  </div>

</div>

        <button
          onClick={handleSubmit}
          className="mt-8 w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Consultar disponibilidad por WhatsApp
        </button>

      </div>

    </Modal>
  );
}