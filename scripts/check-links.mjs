
// Crawl preview server and fail on 4xx/5xx internal links
import { chromium } from "@playwright/test";
const BASE = process.env.PW_BASE_URL || "http://localhost:4173";
const MAX_PAGES = 30;
const visited = new Set();
const queue = ["/"];

function isInternal(url) {
  try { const u = new URL(url, BASE); return u.origin === new URL(BASE).origin; }
  catch { return false; }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const bad = [];
  while (queue.length && visited.size < MAX_PAGES) {
    const path = queue.shift();
    if (!path || visited.has(path)) continue;
    visited.add(path);
    const url = new URL(path, BASE).toString();
    const resp = await page.goto(url, { waitUntil: "domcontentloaded" }).catch(()=>null);
    if (!resp || !resp.ok()) bad.push({ url, status: resp ? resp.status() : "NO_RESP" });
    const links = await page.$$eval("a[href]", as => as.map(a => (a as HTMLAnchorElement).getAttribute("href")||""));
    links.filter(Boolean).forEach(href => {
      if (!isInternal(href)) return;
      const u = new URL(href, BASE);
      if (!visited.has(u.pathname)) queue.push(u.pathname);
    });
  }
  await browser.close();
  if (bad.length) {
    console.error("Broken internal links:", bad);
    process.exit(1);
  } else {
    console.log("No broken internal links ✅");
  }
})();
