type WhatsAppContext = "default" | "anglais" | "plain" | "score";

/**
 * WhatsApp link for a CTA. It points at the protected hand-off
 * (api/whatsapp.ts, served at /whatsapp), never at wa.me/<number>: the number
 * is not in the page, the bundle or the repository, so scrapers can't harvest
 * it. The hand-off sends a person who clicked straight on to WhatsApp, with
 * the prefilled message for `context`:
 * "default" (any of the three services: English, AI, websites), "anglais"
 * (English training), "plain" (no prefilled text), or "score"
 * (test-de-positionnement result report).
 */
export function useWhatsAppLink(context: WhatsAppContext = "default"): string {
  return context === "default" ? "/whatsapp" : `/whatsapp?c=${context}`;
}
