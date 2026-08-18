// Single source of truth for the free CECRL positioning test (Kahoot challenge).
//
// Kahoot challenges EXPIRE. When the deadline passes the PIN stops resolving and
// every CTA pointing here — the /test-de-positionnement page, the homepage hero's
// secondary button, the footer link and the 404 recovery links — silently leads to
// a dead end. That is exactly what happened between 2026-07-10 and 2026-08-18.
//
// Two guards now make that failure loud instead of silent:
//   1. `scripts/check-positioning-test.mjs` runs on `prebuild` and FAILS the build
//      if the challenge has already lapsed (and warns when it is close).
//   2. `useIsPositioningTestOpen()` re-checks in the browser, so a challenge that
//      lapses *between* deploys degrades to a graceful fallback instead of a 404.
//
// ─── HOW TO REGENERATE ────────────────────────────────────────────────────────
// 1. Open the quiz in Kahoot → "Assign" / "Challenge".
// 2. Set the deadline as far out as your plan allows.
// 3. Copy the challenge link and the PIN into CHALLENGE_URL / PIN below.
// 4. Set EXPIRES_ON to the deadline you chose (YYYY-MM-DD, the day it CLOSES).
// 5. Redeploy. The prebuild check will confirm the dates are sane.
//
// To verify a challenge is still live without opening a browser:
//   curl -s https://kahoot.it/rest/challenges/pin/<PIN>
// A live challenge returns JSON with an `endTime`; a dead one returns NOT_FOUND.

import { useEffect, useState } from 'react';

/** Full Kahoot challenge URL, including the `challenge-id` query parameter. */
export const CHALLENGE_URL =
  'https://kahoot.it/challenge/04602749?challenge-id=1f8df03b-4a67-425e-a134-6e557d14c7e2_1781270780609';

/** The PIN shown on the page for people who prefer to type it into kahoot.it. */
export const PIN = '04602749';

/**
 * Date the Kahoot challenge closes, as `YYYY-MM-DD`.
 *
 * Treated as end-of-day UTC: the test counts as open right up to 23:59 on this
 * date. Keep it in sync with the deadline actually set in Kahoot — this constant
 * is what both guards read, not Kahoot itself.
 */
export const EXPIRES_ON = '2026-07-10';

/** Warn during the build once the challenge is within this many days of closing. */
export const WARN_WITHIN_DAYS = 14;

/** Millisecond timestamp at which the challenge stops accepting players. */
export function expiryTimestamp(): number {
  return Date.parse(`${EXPIRES_ON}T23:59:59Z`);
}

/** True when the challenge deadline has passed. */
export function isExpired(now: Date | number = Date.now()): boolean {
  const at = typeof now === 'number' ? now : now.getTime();
  return at > expiryTimestamp();
}

/** Whole days left before the challenge closes. Negative once it has lapsed. */
export function daysUntilExpiry(now: Date | number = Date.now()): number {
  const at = typeof now === 'number' ? now : now.getTime();
  return Math.floor((expiryTimestamp() - at) / 86_400_000);
}

/**
 * Whether the test is currently playable, checked in the browser.
 *
 * Deliberately starts as `true` and only flips inside an effect. The site is
 * prerendered by vite-react-ssg, so evaluating the date during render would bake
 * the build-time answer into the HTML and then disagree with the client on the
 * first paint — a hydration mismatch. Returning the optimistic value for the
 * server render and correcting after mount keeps the markup identical.
 */
export function useIsPositioningTestOpen(): boolean {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(!isExpired());
  }, []);
  return open;
}
