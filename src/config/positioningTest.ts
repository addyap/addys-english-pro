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
  'https://kahoot.it/challenge/03125050?challenge-id=1f8df03b-4a67-425e-a134-6e557d14c7e2_1792589858879';

/** The PIN shown on the page for people who prefer to type it into kahoot.it. */
export const PIN = '03125050';

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
export const EXPIRES_AT = '2026-11-18T11:00:00Z';

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
 * Starts from the answer at BUILD time, then re-checks inside an effect. The
 * site is prerendered by vite-react-ssg, so evaluating `Date.now()` during
 * render would disagree with the prerendered HTML on the first paint — a
 * hydration mismatch. `__BUILD_TIME__` is the same constant in the SSR and
 * client bundles, so both agree; the effect then corrects for a challenge that
 * lapsed after the deploy.
 *
 * This used to start as a hard-coded `true`, which meant that once the
 * challenge expired, every prerendered page (what crawlers and no-JS visitors
 * see, and what everyone sees until hydration) still advertised the dead test.
 */
export function useIsPositioningTestOpen(): boolean {
  const [open, setOpen] = useState(() => !isExpired(__BUILD_TIME__));
  useEffect(() => {
    setOpen(!isExpired());
  }, []);
  return open;
}
