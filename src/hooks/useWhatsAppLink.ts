import { useEffect, useState } from "react";

/**
 * Fetches the WhatsApp contact link from a server-side edge function
 * instead of bundling the phone number into client code, so static
 * scrapers/crawlers can't harvest it from the page source.
 * Returns null until the fetch resolves (fails closed, not open).
 *
 * `context` selects a server-side prefilled-message variant:
 * "default" (general enquiry), "plain" (no prefilled text), or
 * "score" (test-de-positionnement result report).
 */
export function useWhatsAppLink(context: "default" | "plain" | "score" = "default"): string | null {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/whatsapp?context=${context}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.whatsapp) setLink(data.whatsapp);
      })
      .catch(() => {
        // Network/API failure: link stays hidden, nothing to do.
      });
  }, [context]);

  return link;
}
