// Shared WhatsApp contact configuration.
// Keeps the prefilled message in sync across all CTAs.

const WHATSAPP_NUMBER = "33649829826";

const WHATSAPP_PREFILLED_MESSAGE = `Bonjour Antony,

Je souhaite améliorer mon anglais.

• Mon niveau actuel : 
• Mon objectif (ex : travail, entretien, examen) : 
• Mon délai : 
• Format souhaité (visio / présentiel) : 

Pouvez-vous me proposer une solution adaptée ?`;

export const WHATSAPP_PREFILLED_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILLED_MESSAGE
)}`;
