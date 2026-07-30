import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "¿Cómo puedo realizar una reserva?",
    answer:
      "Selecciona la habitación que deseas, completa tus datos y presiona 'Consultar disponibilidad por WhatsApp'. El propietario responderá confirmando si la habitación está disponible.",
  },
  {
    question: "¿Debo realizar un pago para reservar?",
    answer:
      "No. Primero se verifica la disponibilidad. Si deseas asegurar la reserva con un anticipo, el propietario te indicará el procedimiento y podrás utilizar el código QR mostrado en el formulario.",
  },
  {
    question: "¿Todas las habitaciones tienen baño privado?",
    answer:
      "No. Algunas habitaciones cuentan con baño privado y otras tienen baño compartido. Esta información se encuentra detallada en cada habitación.",
  },
  {
    question: "¿Las habitaciones cuentan con WiFi?",
    answer:
      "Sí. Todas nuestras habitaciones disponen de conexión WiFi gratuita para nuestros huéspedes.",
  },
  {
    question: "¿Las habitaciones tienen cocina?",
    answer: "No. Ninguna de nuestras habitaciones dispone de cocina.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Atendemos las 24 horas del día, todos los días del año. Si deseas realizar una reserva o tienes alguna consulta, puedes contactarnos por WhatsApp en cualquier momento.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-700">
            Preguntas Frecuentes
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Resolvemos tus dudas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Aquí encontrarás respuestas a las consultas más comunes de nuestros
            huéspedes.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
