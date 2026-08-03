import { useEffect, useState } from "react";

type WhatsAppContext = "default" | "plain" | "score";

// Multiple components on the same page (header, footer, CTAs) use this hook
// with the same context; share one in-flight request instead of firing one
// fetch per instance.
const linkRequests = new Map<WhatsAppContext, Promise<string | null>>();

function fetchWhatsAppLink(context: WhatsAppContext): Promise<string | null> {
  let request = linkRequests.get(context);
  if (!request) {
    request = fetch(`/api/whatsapp?context=${context}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data?.whatsapp ?? null)
      .catch(() => null);
    linkRequests.set(context, request);
  }
  return request;
}

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
export function useWhatsAppLink(context: WhatsAppContext = "default"): string | null {
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchWhatsAppLink(context).then((whatsapp) => {
      if (!cancelled && whatsapp) setLink(whatsapp);
    });
    return () => {
      cancelled = true;
    };
  }, [context]);

  return link;
}
