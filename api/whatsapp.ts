export const config = { runtime: "edge" };

// Kept server-side only — never shipped to the client bundle, so static
// scrapers/crawlers that just fetch page HTML/JS can't harvest the number.
const WHATSAPP_NUMBER = "33649829826";

const MESSAGES: Record<string, string> = {
  default: `Bonjour Antony,

Je souhaite améliorer mon anglais.

• Mon niveau actuel :
• Mon objectif (ex : travail, entretien, examen) :
• Mon délai :
• Format souhaité (visio / présentiel) :

Pouvez-vous me proposer une solution adaptée ?`,
  score: `Bonjour Antony,

Je viens de faire le test de positionnement en anglais.

• Mon score : … / 120
• Question où j'ai commencé à bloquer : n° …
• Mon objectif :

Pouvez-vous m'indiquer mon niveau et me proposer une solution adaptée ?`,
};

export default function handler(request: Request) {
  const url = new URL(request.url);
  const context = url.searchParams.get("context") || "default";

  let whatsapp: string;
  if (context === "plain") {
    whatsapp = `https://wa.me/${WHATSAPP_NUMBER}`;
  } else {
    const message = MESSAGES[context] || MESSAGES.default;
    whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return new Response(JSON.stringify({ whatsapp }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}
