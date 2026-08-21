// Single source of truth for the free CECRL positioning test (Kahoot challenge).
//
// Kahoot challenges EXPIRE. When the deadline passes the PIN stops resolving and
// every CTA pointing here — the /test-de-positionnement page, the homepage hero's
// secondary button, the footer link and the 404 recovery links — silently leads to
// a dead end. That is exactly what happened between 2026-07-10 and 2026-08-18.
//
// Two things now make that failure visible instead of silent:
//   1. `useIsPositioningTestOpen()` checks in the browser, so an expired
//      challenge — including one that lapses *between* deploys — degrades to a
//      fallback telling the visitor the session is closed and offering a direct
//      evaluation. This is the real safety mechanism: the dead PIN is never shown.
//   2. `scripts/check-positioning-test.mjs` runs on `prebuild` and warns loudly
//      once the challenge has lapsed, or is within 14 days of doing so. It does
//      NOT fail the build — see the comment in that file for why not.
//
// ─── HOW TO REGENERATE ────────────────────────────────────────────────────────
// 1. Open the quiz in Kahoot → "Assign" / "Challenge".
// 2. Set the deadline as far out as your plan allows.
// 3. Copy the challenge link and the PIN into CHALLENGE_URL / PIN below.
// 4. Set EXPIRES_AT to the deadline Kahoot reports (full ISO instant, see below).
// 5. Redeploy. The prebuild check will confirm the dates are sane.
//
// To verify a challenge is still live without opening a browser:
//   curl -s https://kahoot.it/rest/challenges/pin/<PIN>
// A live challenge returns JSON with an `endTime`; a dead one returns NOT_FOUND.

import { useEffect, useState } from 'react';

/** Full Kahoot challenge URL, including the `challenge-id` query parameter. */
export const CHALLENGE_URL =
  'https://kahoot.it/challenge/03348422?challenge-id=1f8df03b-4a67-425e-a134-6e557d14c7e2_1787049427063';

/** The PIN shown on the page for people who prefer to type it into kahoot.it. */
export const PIN = '03348422';

/**
 * The exact instant the Kahoot challenge closes, as an ISO 8601 timestamp.
 *
 * A full timestamp, not a date: Kahoot deadlines carry a time of day. The
 * current challenge closes at 11:00 UTC, so treating the date as end-of-day —
 * which an earlier version of this file did — would have left a 13-hour window
 * where the site advertised a test that had already stopped accepting players.
 *
 * Read it straight off the API rather than transcribing from the UI:
 *   curl -s https://kahoot.it/rest/challenges/pin/<PIN> | python3 -c \
 *     "import json,sys,datetime; d=json.load(sys.stdin); \
 *      print(datetime.datetime.fromtimestamp(d['endTime']/1000, datetime.UTC).isoformat())"
 */
export const EXPIRES_AT = '2026-09-15T11:00:00Z';

/** Warn during the build once the challenge is within this many days of closing. */
export const WARN_WITHIN_DAYS = 14;

/** Millisecond timestamp at which the challenge stops accepting players. */
export function expiryTimestamp(): number {
  return Date.parse(EXPIRES_AT);
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
