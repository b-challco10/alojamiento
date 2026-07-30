"use client";

import Image from "next/image";
import { Users, ArrowRight } from "lucide-react";
import { Room } from "@/types/room";
import ServiceBadge from "@/components/common/ServiceBadge";

interface Props {
  room: Room;
  onDetails: () => void;
  onReserve: () => void;
}

export default function RoomCard({ room, onDetails, onReserve }: Props) {
  return (
    <article
      onClick={onDetails}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2 shadow-lg">
          <p className="text-xl font-bold text-green-700">
            Bs {room.price}
          </p>

          <p className="text-xs text-gray-500">
            por noche
          </p>
        </div>
      </div>


      <div className="space-y-5 p-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {room.name}
          </h2>

          <p className="mt-2 text-gray-500">
            {room.description}
          </p>
        </div>


        <div className="flex items-center gap-2 text-gray-600">
          <Users size={18}/>
          Hasta {room.capacity} personas
        </div>


        <div className="flex flex-wrap gap-2">

          <ServiceBadge
            icon="bed"
            text={room.beds.join(", ")}
          />

          {room.androidTv && (
            <ServiceBadge
              icon="tv"
              text="Android TV"
            />
          )}

          {room.bathroom && (
            <ServiceBadge
              icon="bath"
              text="Baño privado"
            />
          )}

          {room.wifi && (
            <ServiceBadge
              icon="wifi"
              text="WiFi"
            />
          )}

          {room.hotWater && (
            <ServiceBadge
              icon="water"
              text="Agua caliente"
            />
          )}

        </div>


        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={(e)=>{
              e.stopPropagation();
              onDetails();
            }}
            className="rounded-xl border border-green-700 py-3 font-medium text-green-700 transition hover:bg-green-50"
          >
            Ver detalles
          </button>


          <button
            onClick={(e)=>{
              e.stopPropagation();
              onReserve();
            }}
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Reservar
            <ArrowRight size={18}/>
          </button>

        </div>

      </div>

    </article>
  );
}