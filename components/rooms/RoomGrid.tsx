"use client";

import { useState } from "react";
import { rooms } from "@/data/rooms";
import { Room } from "@/types/room";
import RoomCard from "./RoomCard";
import RoomDetailsModal from "./RoomDetailsModal";
import ReservationModal from "@/components/reservation/ReservationModal";
export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [open, setOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  const handleDetails = (room: Room) => {
    setSelectedRoom(room);
    setOpen(true);
  };
  const handleReserve = (room: Room) => {
  setSelectedRoom(room);
  setReservationOpen(true);
};

  return (
    <section id="habitaciones" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Habitaciones
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Encuentra la habitación ideal para ti
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Contamos con habitaciones cómodas y equipadas para brindarte una estancia agradable.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rooms.map((room) => (
<RoomCard
  key={room.id}
  room={room}
  onDetails={() => handleDetails(room)}
  onReserve={() => handleReserve(room)}
/>
          ))}
        </div>

<RoomDetailsModal
  room={selectedRoom}
  open={open}
  onClose={() => setOpen(false)}
  onReserve={(room) => {
    setOpen(false);
    setSelectedRoom(room);
    setReservationOpen(true);
  }}
/>
        <ReservationModal
  room={selectedRoom}
  open={reservationOpen}
  onClose={()=>setReservationOpen(false)}
/>
      </div>
    </section>
  );
}