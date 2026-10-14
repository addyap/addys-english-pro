import { test, expect } from "@playwright/test";

const BASE = process.env.PW_BASE_URL || "http://localhost:4173";

// A hydration mismatch makes React discard the prerendered HTML and re-render
// the whole page client-side: the site still "works", so it goes unnoticed,
// but the SSG benefit (fast first paint, no layout shift) is lost. This caught
// a <style>{css}</style> whose quotes the server render entity-escaped.
const HYDRATION = /Minified React error #(418|419|422|423|425)|did not match|hydrat/i;

for (const path of [
  "/",
  "/contact",
  "/qui-je-suis",
  "/offres-de-formation",
  "/blog",
  "/blog/lie-vs-lay",
  "/test-de-positionnement",
  "/anglais-entreprise",
  "/cours-anglais-nice",
]) {
  test(`${path} hydrates without mismatch`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => { if (m.type() === "error" && HYDRATION.test(m.text())) errors.push(m.text().slice(0, 200)); });
    page.on("pageerror", (e) => { if (HYDRATION.test(e.message)) errors.push(e.message.slice(0, 200)); });
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    expect(errors, `hydration errors on ${path}`).toEqual([]);
  });
}
