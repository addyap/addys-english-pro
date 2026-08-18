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
const { EXPIRES_ON, PIN, WARN_WITHIN_DAYS, daysUntilExpiry, isExpired } = await import(
  pathToFileURL(resolve(__dirname, "../src/config/positioningTest.ts")).href
);

const days = daysUntilExpiry();

if (isExpired()) {
  console.error(`
❌ The Kahoot positioning test has EXPIRED.

   Deadline : ${EXPIRES_ON}  (${Math.abs(days)} day(s) ago)
   PIN      : ${PIN}

   /test-de-positionnement, the homepage hero's secondary CTA, the footer link
   and the 404 page all point at this challenge. Shipping now would publish a
   free offer that leads nowhere.

   Fix: create a fresh challenge in Kahoot, then update CHALLENGE_URL, PIN and
   EXPIRES_ON in src/config/positioningTest.ts. Full steps are in that file.

   To ship anyway (the page will show its expired-state fallback):
     ALLOW_EXPIRED_POSITIONING_TEST=1 npm run build
`);

  if (!process.env.ALLOW_EXPIRED_POSITIONING_TEST) {
    process.exit(1);
  }
  console.error("⚠️  ALLOW_EXPIRED_POSITIONING_TEST set — continuing anyway.\n");
} else if (days <= WARN_WITHIN_DAYS) {
  console.warn(
    `⚠️  Kahoot positioning test closes in ${days} day(s) (${EXPIRES_ON}). Regenerate it soon — see src/config/positioningTest.ts.`,
  );
} else {
  console.log(`✅ Kahoot positioning test valid for another ${days} day(s) (until ${EXPIRES_ON}).`);
}
