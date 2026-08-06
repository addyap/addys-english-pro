// Lighthouse matrix — runs Lighthouse against a small set of representative
// pages instead of one URL. A single-URL run masked real regressions: an
// image-heavy blog post could tank while `/` stayed green, and the score
// nobody read never flagged it. The matrix is 5 pages that together
// represent every page shape the site ships (marketing, index, article,
// audience landing, city landing) — enough to catch a regression without
// blowing 10 minutes of CI.
//
// Runs against an already-serving preview (default http://localhost:4173).
// Boot the server yourself before invoking — this script does not manage
// the server lifecycle (that's serve-dist.mjs' job).
//
// Exit code is 1 if any page misses its per-category threshold. Set
// `LH_STRICT=0` to report scores without failing — useful when adding a new
// page whose baseline hasn't settled yet.

import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import http from "http";

const BASE = process.env.LH_URL || "http://localhost:4173";
const STRICT = process.env.LH_STRICT !== "0";

// Pick one page per template so a regression in any single template surfaces.
// If a new page shape lands (say a course-detail route), add it here — otherwise
// its scores drift silently.
const MATRIX = [
  { path: "/", label: "home", thresholds: { performance: 0.75, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 } },
  { path: "/blog", label: "blog-index", thresholds: { performance: 0.75, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 } },
  { path: "/blog/email-professionnel-en-anglais", label: "blog-post", thresholds: { performance: 0.70, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 } },
  { path: "/anglais-entreprise", label: "audience-landing", thresholds: { performance: 0.75, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 } },
  { path: "/cours-anglais-nice", label: "city-landing", thresholds: { performance: 0.75, accessibility: 0.90, "best-practices": 0.90, seo: 0.90 } },
];

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http
        .get(url, () => resolve(true))
        .on("error", () => {
          if (Date.now() - start > timeoutMs)
            reject(new Error(`Preview server not reachable at ${url}`));
          else setTimeout(check, 500);
        });
    };
    check();
  });
}

async function runOne(url, chromePort) {
  const opts = {
    logLevel: "error",
    output: "json",
    onlyCategories: CATEGORIES,
    port: chromePort,
  };
  const { lhr } = await lighthouse(url, opts);
  const scores = {};
  for (const c of CATEGORIES) scores[c] = lhr.categories[c]?.score ?? 0;
  return scores;
}

function formatRow(label, scores, thresholds) {
  const cells = CATEGORIES.map((c) => {
    const s = Math.round(scores[c] * 100);
    const passed = scores[c] >= thresholds[c];
    return `${passed ? " " : "✗"}${String(s).padStart(3)}`;
  });
  return `  ${label.padEnd(18)} ${cells.join("  ")}`;
}

(async () => {
  await waitForServer(BASE);
  const chrome = await launch({ chromeFlags: ["--headless=new", "--no-sandbox"] });
  const failures = [];
  const rows = [];

  try {
    for (const page of MATRIX) {
      const url = `${BASE}${page.path}`;
      const scores = await runOne(url, chrome.port);
      rows.push(formatRow(page.label, scores, page.thresholds));
      for (const c of CATEGORIES) {
        if (scores[c] < page.thresholds[c]) {
          failures.push({
            label: page.label,
            path: page.path,
            category: c,
            score: Math.round(scores[c] * 100),
            threshold: Math.round(page.thresholds[c] * 100),
          });
        }
      }
    }
  } finally {
    await chrome.kill();
  }

  console.log("\nLighthouse matrix scores (100 = best):");
  console.log("  " + "".padEnd(18) + " " + CATEGORIES.map((c) => c.slice(0, 4).padStart(4)).join("  "));
  for (const r of rows) console.log(r);

  if (failures.length) {
    console.error("\nThreshold misses (✗ above):");
    for (const f of failures)
      console.error(`  ${f.label} · ${f.category}: ${f.score} < ${f.threshold}`);
    if (STRICT) process.exit(1);
    console.warn("\nLH_STRICT=0 — reporting only, not failing.");
  } else {
    console.log("\nAll thresholds met ✅");
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
