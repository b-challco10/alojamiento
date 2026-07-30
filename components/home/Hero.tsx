"use client";

import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">
      <HeroCarousel />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-lg font-medium text-green-300">
            Alojamiento en La Paz
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Bienvenido a
            <br />
            FLOR DE COCA
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-200">
            Habitaciones cómodas, tranquilidad y atención personalizada para tu
            estadía.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#habitaciones"
              className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
            >
              Ver habitaciones
            </a>

            <a
              href="https://wa.me/59168011257"
              target="_blank"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 hover:bg-gray-100"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
