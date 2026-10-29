
import { test, expect, type Page } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = process.env.PW_BASE_URL || "http://localhost:4173";

async function checkA11y(page: Page, path: string) {
  // networkidle: let hydration and the hero intro settle so axe sees the
  // page a visitor actually interacts with, not the first paint.
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  const results = await new AxeBuilder({ page }).withTags(["wcag2a","wcag2aa"]).analyze();
  const violations = results.violations || [];
  if (violations.length) {
    console.log(`\nA11y violations on ${path}:`);
    for (const v of violations) {
      console.log(`- ${v.id}: ${v.help} (${v.impact})`);
      v.nodes.slice(0, 5).forEach((n) => console.log(`  • ${n.target.join(" ")}`));
    }
  }
  expect(violations.length, `Accessibility issues found on ${path}`).toBe(0);
}

// One page per template: home, contact form, about, offers, blog index,
// blog article, assessment, audience landing, city landing, resources,
// testimonials, thank-you, websites landing.
for (const path of [
  "/",
  "/contact",
  "/qui-je-suis",
  "/offres-de-formation",
  "/blog",
  "/blog/email-professionnel-en-anglais",
  "/test-de-positionnement",
  "/anglais-entreprise",
  "/cours-anglais-nice",
  "/ressources-en-ligne",
  "/temoignages",
  "/thank-you?sujet=anglais",
  "/creation-site-web-multilingue",
]) {
  test(`${path} passes axe`, async ({ page }) => { await checkA11y(page, path); });
  test(`${path} passes axe on a phone`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await checkA11y(page, path);
  });
}
