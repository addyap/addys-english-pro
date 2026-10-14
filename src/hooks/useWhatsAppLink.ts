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

// Works before (and without) the API call: rendered into the prerendered HTML
// so the CTA is never a dead "#" link. The number is already public on the
// site (JSON-LD telephone, legal notices, contact page), so hiding it here
// protected nothing and only cost conversions when /api/whatsapp was slow.
export const WHATSAPP_FALLBACK = "https://wa.me/33649829826";

/**
 * Returns a WhatsApp contact link. Starts as the plain wa.me link so the CTA
 * works in the static HTML and when the API is unreachable, then upgrades to
 * the server-side prefilled-message variant once /api/whatsapp answers.
 *
 * `context` selects a server-side prefilled-message variant:
 * "default" (general enquiry), "plain" (no prefilled text), or
 * "score" (test-de-positionnement result report).
 */
export function useWhatsAppLink(context: WhatsAppContext = "default"): string {
  const [link, setLink] = useState<string>(WHATSAPP_FALLBACK);

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
