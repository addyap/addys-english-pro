import { useEffect } from 'react';

const SRC = import.meta.env.VITE_UMAMI_SRC as string | undefined;
const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined;

declare global {
  interface Window {
    umami?: {
      track: (
        event?: string | Record<string, unknown>,
        data?: Record<string, unknown>
      ) => void;
    };
  }
}

/**
 * Loads the self-hosted Umami analytics script — cookieless, first-party, no
 * personal data and no cross-site cookies, so no consent banner is required
 * (this is why GA was removed; Umami keeps the cookieless posture).
 *
 * INERT until BOTH VITE_UMAMI_SRC and VITE_UMAMI_WEBSITE_ID are set at build
 * time. The site therefore ships analytics-free until you point it at your own
 * Umami instance via Vercel env vars — no code change needed to switch it on.
 *
 * Injected client-side (post-hydration) so it can never cause an SSG hydration
 * mismatch. Umami auto-tracks the initial pageview on load and subsequent SPA
 * route changes; custom events flow through src/lib/analytics.ts → window.umami.
 */
export default function UmamiAnalytics() {
  useEffect(() => {
    if (!SRC || !WEBSITE_ID) return;
    if (document.querySelector('script[data-umami]')) return;
    const s = document.createElement('script');
    s.defer = true;
    s.src = SRC;
    s.setAttribute('data-website-id', WEBSITE_ID);
    s.setAttribute('data-umami', 'true');
    document.head.appendChild(s);
  }, []);
  return null;
}
