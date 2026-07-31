"use client";

import Image from "next/image";
import {
  House,
  MapPin,
  Wifi,
  BedDouble,
  ShowerHead,
  Handshake,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Nosotros
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Tu comodidad es nuestra prioridad
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600 leading-8">
            En <strong>FLOR DE COCA</strong> ofrecemos habitaciones cómodas, un
            ambiente tranquilo y una atención personalizada para que disfrutes
            de una agradable estadía en la ciudad de La Paz.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/hotel/hero2.png"
              alt="Alojamiento Flor de Coca"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-800">
              Bienvenido a FLOR DE COCA
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              Nuestro alojamiento está pensado para brindar descanso, seguridad
              y comodidad a turistas, familias, parejas y viajeros que visitan
              La Paz. Contamos con habitaciones equipadas, conexión WiFi, agua
              caliente y atención personalizada para hacer de tu estadía una
              experiencia agradable.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Nos esforzamos por ofrecer un ambiente limpio, acogedor y
              familiar, donde nuestros huéspedes puedan sentirse como en casa.
            </p>

            <a
              href="https://wa.me/59168011257"
              target="_blank"
              className="mt-8 inline-flex rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={House}
            title="Ambiente familiar"
            description="Disfruta de un lugar tranquilo y acogedor, ideal para descansar durante tu estadía."
          />

          <FeatureCard
            icon={MapPin}
            title="Excelente ubicación"
            description="Ubicados en una zona estratégica de La Paz con fácil acceso al transporte."
          />

          <FeatureCard
            icon={Wifi}
            title="WiFi gratuito"
            description="Todas nuestras habitaciones cuentan con conexión inalámbrica a Internet."
          />

          <FeatureCard
            icon={BedDouble}
            title="Habitaciones cómodas"
            description="Contamos con diferentes tipos de habitaciones para cada necesidad."
          />

          <FeatureCard
            icon={ShowerHead}
            title="Agua caliente"
            description="Servicio de agua caliente disponible para mayor comodidad de nuestros huéspedes."
          />

          <FeatureCard
            icon={Handshake}
            title="Atención personalizada"
            description="Brindamos una atención amable y cercana para ayudarte durante toda tu estadía."
          />
        </div>
      </div>
    </section>
  );
}
