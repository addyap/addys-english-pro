// Check external (cross-origin) links in the built site for 404s.
//
// This is the layer the other two gates deliberately skip:
//   - audit-internal-links.mjs resolves internal links against routes/redirects.
//   - check-links.mjs crawls the build but never leaves the origin.
// Neither follows a link to anglaisadistance.fr, afpa.fr, etc. That blind spot
// is exactly how a homepage CTA to a retired /conversation-trainer page, and
// later four more dead external links, shipped unnoticed.
//
// What it does: extract every off-site URL from dist/**/*.html plus the off-site
// redirect destinations in vercel.json, then request each one.
//
// What it fails on: ONLY HTTP 404 and 410 — a page that is definitively gone.
// Everything else (403/401/429/999, 5xx, network/timeout) is reported as
// INCONCLUSIVE and never fails the build: institutional sites (LinkedIn, the
// Council of Europe, the British Council) return anti-bot statuses to scripted
// requests, and a third party being briefly down must not block a merge. The
// rot we actually care about — a removed page — always answers 404/410.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const TIMEOUT_MS = 15000;
const CONCURRENCY = 8;

// Our own origins — checked by the internal gates, skip here.
const OWN_HOSTS = new Set(["antonyaddy.com", "www.antonyaddy.com"]);
// Namespace / asset / embed / API origins that are never user-facing
// navigations. Their bare origin often 404s by design (e.g. youtube-nocookie
// only serves /embed/…, a Supabase project root only serves /rest, /auth, …),
// so checking them is meaningless noise, not a broken link.
const SKIP_HOSTS = new Set([
  "schema.org",
  "www.w3.org",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "i.ytimg.com",
  "www.youtube.com",
  "youtube.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "vercel.com",
]);

// Hosts to skip by suffix (dynamic subdomains we can't enumerate).
const SKIP_HOST_SUFFIXES = [".supabase.co"];
const isSkippedHost = (host) =>
  OWN_HOSTS.has(host) ||
  SKIP_HOSTS.has(host) ||
  SKIP_HOST_SUFFIXES.some((s) => host.endsWith(s));

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function collectUrls() {
  const urls = new Set();

  // 1) Off-site URLs in the built HTML (href/src and anything absolute).
  for (const file of walk(DIST)) {
    const html = readFileSync(file, "utf8");
    const matches = html.match(/https?:\/\/[^"'<>)\s]+/g) || [];
    for (let u of matches) {
      u = u.replace(/&amp;/g, "&").replace(/[.,;]+$/, "");
      try {
        const host = new URL(u).hostname;
        if (isSkippedHost(host)) continue;
        urls.add(u);
      } catch {
        /* malformed URL literal, ignore */
      }
    }
  }

  // 2) Off-site redirect destinations in vercel.json — user-facing (someone
  //    hits the antonyaddy.com source and lands on the destination), but they
  //    live in no HTML page, so they must be added explicitly.
  try {
    const cfg = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
    for (const r of cfg.redirects ?? []) {
      if (/^https?:\/\//.test(r.destination || "")) urls.add(r.destination);
    }
  } catch {
    /* no vercel.json */
  }

  return [...urls].sort();
}

// Hard guard: some hosts leave fetch hanging past the AbortController (a dead
// TLS/DNS path never rejects cleanly), so race every request against a timer
// that always resolves. Returns an HTTP status, or 0 for network/timeout.
function request(url, method) {
  const ctrl = new AbortController();
  const fetchP = fetch(url, {
    method,
    redirect: "follow",
    signal: ctrl.signal,
    headers: { "user-agent": UA, accept: "*/*" },
  })
    .then((res) => res.status)
    .catch(() => 0);
  const timeoutP = new Promise((res) =>
    setTimeout(() => {
      try {
        ctrl.abort();
      } catch {
        /* ignore */
      }
      res(0);
    }, TIMEOUT_MS)
  );
  return Promise.race([fetchP, timeoutP]);
}

async function checkUrl(url) {
  // HEAD first (cheap). Retry with GET only when HEAD is rejected (405) or the
  // server didn't answer (0) — some hosts block HEAD but answer GET.
  let status = await request(url, "HEAD");
  if (status === 405 || status === 0) status = await request(url, "GET");
  return status;
}

async function run() {
  const urls = collectUrls();
  console.log("──────────────────────────────────────────────");
  console.log(" External Link Check (404 detection)");
  console.log("──────────────────────────────────────────────");
  console.log(`Off-site URLs found : ${urls.length}\n`);

  const broken = [];
  const inconclusive = [];

  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const url = urls[i++];
      const status = await checkUrl(url);
      if (status === 404 || status === 410) {
        broken.push({ url, status });
        console.log(`  ✗ ${status}  ${url}`);
      } else if (status >= 200 && status < 400) {
        // ok — stay quiet to keep the log readable
      } else {
        inconclusive.push({ url, status: status || "network/timeout" });
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  if (inconclusive.length) {
    console.log(
      `\nℹ️  ${inconclusive.length} inconclusive (bot-block / transient, not failed):`
    );
    for (const { url, status } of inconclusive) console.log(`     [${status}] ${url}`);
  }

  console.log("");
  if (broken.length) {
    console.error(`❌ ${broken.length} dead external link(s) (HTTP 404/410):`);
    for (const { url, status } of broken) console.error(`   ${status}  ${url}`);
    process.exit(1);
  }
  console.log(
    `✅ No dead external links (${urls.length} checked, ${inconclusive.length} inconclusive).`
  );
}

run().catch((err) => {
  // A failure of the checker itself must not masquerade as a clean result.
  console.error("External link check crashed:", err);
  process.exit(2);
});
