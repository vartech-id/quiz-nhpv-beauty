const WHATSAPP_BASE_URL = "https://wa.me/919082002625";

export function createWhatsAppLink(message = "") {
  const encodedMessage = encodeURIComponent(message.trim());

  return `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;
}