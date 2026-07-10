// Crawl the preview server and fail on internal links that return 4xx/5xx.
//
// Scope, deliberately narrow: this is an HTTP smoke test. It cannot detect a
// link to a route that does not exist, because `vite preview` serves an SPA
// fallback and answers 200 for every path. `scripts/audit-internal-links.mjs`
// is the deterministic dead-route gate; it resolves links against
// src/routes.tsx and the redirects in vercel.json.
//
// What this catches that the source-level audit cannot: pages that 5xx, that
// fail to render, or that never finish loading.
import { chromium } from "@playwright/test";

const BASE = process.env.PW_BASE_URL || "http://localhost:4173";
const MAX_PAGES = 30;
const NAV_TIMEOUT_MS = 30_000;
const NAV_ATTEMPTS = 3;

const visited = new Set();
const queue = ["/"];

function isInternal(url) {
  try { const u = new URL(url, BASE); return u.origin === new URL(BASE).origin; }
  catch { return false; }
}

const backoff = (page, attempt) => page.waitForTimeout(500 * attempt);

// Navigate, retrying a thrown navigation a bounded number of times. A throw is
// a transient failure (timeout, dropped connection, context torn down), never
// evidence that a link is broken — only an HTTP status can establish that.
async function gotoWithRetry(page, url) {
  let lastError;
  for (let attempt = 1; attempt <= NAV_ATTEMPTS; attempt++) {
    try {
      // Wait for `load`, not `domcontentloaded`. Under `domcontentloaded` the
      // DOM query below can run while React is hydrating; if the router
      // navigates in that window the execution context is destroyed mid-query.
      const resp = await page.goto(url, { waitUntil: "load", timeout: NAV_TIMEOUT_MS });
      return { resp };
    } catch (error) {
      lastError = error;
      if (attempt < NAV_ATTEMPTS) await backoff(page, attempt);
    }
  }
  return { error: lastError };
}

// Read the anchors. Retries the same "execution context was destroyed" race,
// then falls back to the response body — this site is statically generated, so
// every anchor is present in the prerendered HTML even without hydration.
async function anchorsOn(page, resp) {
  for (let attempt = 1; attempt <= NAV_ATTEMPTS; attempt++) {
    try {
      return await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href") || ""));
    } catch {
      if (attempt < NAV_ATTEMPTS) await backoff(page, attempt);
    }
  }
  const html = await resp.text().catch(() => "");
  return [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map((m) => m[1]);
}

const browser = await chromium.launch();
const page = await browser.newPage();

const broken = [];      // genuine 4xx/5xx responses
const unreachable = []; // navigation never completed, after NAV_ATTEMPTS tries

try {
  while (queue.length && visited.size < MAX_PAGES) {
    const path = queue.shift();
    if (!path || visited.has(path)) continue;
    visited.add(path);

    const url = new URL(path, BASE).toString();
    const { resp, error } = await gotoWithRetry(page, url);

    if (error) {
      unreachable.push({ url, error: String(error.message).split("\n")[0] });
      continue;
    }

    // 3xx is fine: several routes legitimately redirect. Only 4xx/5xx is broken.
    const status = resp.status();
    if (status >= 400) {
      broken.push({ url, status });
      continue; // no point harvesting links off an error page
    }

    for (const href of (await anchorsOn(page, resp)).filter(Boolean)) {
      if (!isInternal(href)) continue;
      const { pathname } = new URL(href, BASE);
      if (!visited.has(pathname)) queue.push(pathname);
    }
  }
} finally {
  await browser.close();
}

if (broken.length) {
  console.error("Broken internal links (HTTP 4xx/5xx):", broken);
}
if (unreachable.length) {
  console.error(
    `Unreachable after ${NAV_ATTEMPTS} attempts — a navigation error, not an HTTP status:`,
    unreachable,
  );
}
if (broken.length || unreachable.length) process.exit(1);

console.log(`No broken internal links ✅ (${visited.size} pages checked)`);
if (queue.length) {
  console.log(
    `Note: stopped at the MAX_PAGES cap of ${MAX_PAGES}; ${queue.length} queued page(s) were not crawled.`,
  );
}
