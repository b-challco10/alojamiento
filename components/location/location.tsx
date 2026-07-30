import { MapPin, Clock3, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Ubicación
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Encuéntranos fácilmente
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Estamos ubicados en una zona accesible de la ciudad de La Paz, cerca
            de transporte público y diferentes puntos de interés.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 rounded-3xl bg-white p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-green-700" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">Dirección</h3>
                <p className="mt-1 text-gray-600">
                  837, Zona 9, Linares
                  <br />
                  La Paz, Bolivia
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock3 className="mt-1 text-green-700" size={24} />

              <div>
                <h3 className="font-semibold text-gray-800">
                  Horario de atención
                </h3>

                <p className="mt-1 text-gray-600">Atención las 24 horas</p>

                <p className="text-gray-600">Todos los días del año</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-green-700" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">Contacto</h3>

                <p className="mt-1 text-gray-600">+591 68011257</p>
              </div>
            </div>

            <a
              href="https://wa.me/59168011257"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.1622416856017!2d-68.13958621190264!3d-16.496339171784552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2191b959a4c7%3A0x4ede4ab302732ca0!2sAlojamiento%20Flor%20de%20coca!5e1!3m2!1ses-419!2sbo!4v1785444785960!5m2!1ses-419!2sbo"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
