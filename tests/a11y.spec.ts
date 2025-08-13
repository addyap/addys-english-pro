
import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

const BASE = process.env.PW_BASE_URL || "http://localhost:4173";

async function checkA11y(page: any, path: string) {
  await page.goto(BASE + path, { waitUntil: "domcontentloaded" });
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

test("homepage passes axe", async ({ page }) => { await checkA11y(page, "/"); });
test("contact passes axe", async ({ page }) => { await checkA11y(page, "/contact"); });
