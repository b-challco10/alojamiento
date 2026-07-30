export function generateWhatsappUrl(
  phone: string,
  roomName: string,
  startDate: string,
  endDate: string,
  customerName: string
) {

  const message =
    `Hola, quiero reservar la ${roomName} del ${startDate} al ${endDate} a nombre de ${customerName}. ¿Está disponible?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

}