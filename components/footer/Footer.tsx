import { MapPin, Phone, MessageCircle, Clock3, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold">FLOR DE COCA</h2>

            <p className="mt-5 leading-7 text-green-100">
              Habitaciones cómodas, atención personalizada y una excelente
              ubicación en la ciudad de La Paz para que disfrutes una estancia
              tranquila y segura.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Enlaces</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a href="#inicio" className="transition hover:text-green-300">
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#habitaciones"
                  className="transition hover:text-green-300"
                >
                  Habitaciones
                </a>
              </li>

              <li>
                <a href="#nosotros" className="transition hover:text-green-300">
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#ubicacion"
                  className="transition hover:text-green-300"
                >
                  Ubicación
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-green-300">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contacto</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-green-300" />
                <span className="text-green-100">
                  837, Zona 9, Linares
                  <br />
                  La Paz, Bolivia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-green-300" />
                <span className="text-green-100">+591 68011257</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={20} className="text-green-300" />
                <span className="text-green-100">Atención 24 horas</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Reserva ahora</h3>

            <p className="mt-5 leading-7 text-green-100">
              Contáctanos directamente por WhatsApp y consulta la disponibilidad
              de nuestras habitaciones.
            </p>

            <a
              href="https://wa.me/59168011257"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold transition hover:bg-green-500"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-green-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-green-200 md:text-left">
              © {new Date().getFullYear()} FLOR DE COCA. Todos los derechos
              reservados.
            </p>

            <a
              href="#inicio"
              className="flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 transition hover:bg-green-600"
            >
              <ChevronUp size={18} />
              Volver arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
