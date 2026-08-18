// Build guard for the free CECRL positioning test.
//
// The Kahoot challenge behind /test-de-positionnement has a hard deadline. Once it
// passes, the page, the homepage hero CTA, the footer link and the 404 recovery
// links all point at a dead PIN — with nothing on the site to say so. That went
// unnoticed for five weeks in 2026.
//
// This runs on `prebuild` and refuses to ship a build that advertises a lapsed
// test. Regeneration instructions live in src/config/positioningTest.ts.

import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Imported directly as TS, same as generate-sitemap.mjs does, so the constants
// cannot drift from what the app actually renders.
const { EXPIRES_AT, PIN, WARN_WITHIN_DAYS, daysUntilExpiry, isExpired } = await import(
  pathToFileURL(resolve(__dirname, "../src/config/positioningTest.ts")).href
);

const days = daysUntilExpiry();

// This check WARNS. It does not block any deploy. That is deliberate, and it is
// a correction of how this script originally shipped.
//
// It was first written to fail the build, on the reasoning that a dead free-test
// link must never reach visitors. But TestPositionnement.tsx already prevents
// that at runtime: useIsPositioningTestOpen() flips the page to an
// expired-state fallback that explains the situation and routes people to a
// real evaluation. Nobody is ever shown the dead PIN. The fallback IS the
// safety mechanism — so failing the build protected no one and instead:
//
//   - blocked the production deploy entirely, holding every unrelated change
//     (the legal disclosures, the RGPD fixes) hostage to renewing a quiz link;
//   - emailed a deploy failure on every attempt.
//
// A nag that stops unrelated work from shipping gets silenced, not obeyed. So
// the deadline is surfaced loudly in the build log and on the page itself, and
// the deploy proceeds.
//
// To restore hard-blocking — only sensible if the runtime fallback is ever
// removed — set this to true. ALLOW_EXPIRED_POSITIONING_TEST=1 then overrides
// it for a one-off deploy.
const BLOCK_BUILD_WHEN_EXPIRED = false;

const allowExpired = Boolean(process.env.ALLOW_EXPIRED_POSITIONING_TEST);
const shouldBlock = BLOCK_BUILD_WHEN_EXPIRED && !allowExpired;

if (isExpired()) {
  console.error(`
❌ The Kahoot positioning test has EXPIRED.

   Deadline : ${EXPIRES_AT}  (${Math.abs(days)} day(s) ago)
   PIN      : ${PIN}

   /test-de-positionnement, the homepage hero's secondary CTA, the footer link
   and the 404 page all point at this challenge. Until it is renewed, the site
   is advertising a free positioning test it cannot actually give anyone.

   Fix: create a fresh challenge in Kahoot, then update CHALLENGE_URL, PIN and
   EXPIRES_AT in src/config/positioningTest.ts. Full steps are in that file.

   The build continues: /test-de-positionnement detects this at runtime and
   renders its expired-state fallback instead of the dead PIN, so visitors are
   told the session is closed and offered a direct evaluation.
`);

  if (shouldBlock) {
    process.exit(1);
  }
} else if (days <= WARN_WITHIN_DAYS) {
  console.warn(
    `⚠️  Kahoot positioning test closes in ${days} day(s) (${EXPIRES_AT}). Regenerate it soon — see src/config/positioningTest.ts.`,
  );
} else {
  console.log(`✅ Kahoot positioning test valid for another ${days} day(s) (until ${EXPIRES_AT}).`);
}
