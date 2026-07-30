"use client";

import Image from "next/image";
import Modal from "@/components/common/Modal";
import ServiceBadge from "@/components/common/ServiceBadge";
import { Users } from "lucide-react";
import { Room } from "@/types/room";
import ImageCarousel from "@/components/common/ImageCarousel";

interface Props {
  room: Room | null;
  open: boolean;
  onClose: () => void;
  onReserve: (room: Room) => void;
}

export default function RoomDetailsModal({ room, open, onClose, onReserve }: Props) {
  if (!room) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid lg:grid-cols-2">
        <ImageCarousel images={room.gallery} />

        <div className="p-8">
          <h2 className="text-3xl font-bold text-green-800">{room.name}</h2>

          <p className="mt-2 text-2xl font-semibold">Bs {room.price} / noche</p>

          <p className="mt-6 text-gray-600">{room.description}</p>

          <div className="mt-6 flex items-center gap-2 text-gray-700">
            <Users size={18} />
            Hasta {room.capacity} personas
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <ServiceBadge icon="bed" text={room.beds.join(", ")} />

            {room.androidTv && <ServiceBadge icon="tv" text="Android TV" />}

            {room.bathroom && <ServiceBadge icon="bath" text="Baño privado" />}

            {room.wifi && <ServiceBadge icon="wifi" text="WiFi" />}

            {room.hotWater && (
              <ServiceBadge icon="water" text="Agua caliente" />
            )}
          </div>

<button
  onClick={() => {
    onClose();
    onReserve(room);
  }}
  className="mt-10 w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
>
  Reservar ahora
</button>
        </div>
      </div>
    </Modal>
  );
}
