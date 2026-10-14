// Wiring audit — catches content that ships but never gets wired to a page.
//
// The existing gates all look outward: given a link, does the target exist?
// They never look inward: given a piece of content, does anything link TO it?
// That gap is exactly how a legacy blog post can prerender + sit in the sitemap
// while never being listed on /blog, and no one notices for months.
//
// What this checks, per dataset (see AUDIT_TARGETS below):
//   1. Every item that implies a dynamic URL is in public/sitemap.xml.
//   2. Every implied URL matches a declared route in src/routes.tsx.
//   3. Every item is reachable from at least one declared index page — either
//      the export flows into the page (iterated) or the id appears literally
//      (byId), depending on how the page uses the data.
//   4. Reverse orphans: internal cross-references (topicClusters, blogTitles)
//      point at ids that actually exist in the dataset.
//
// Also validates route ↔ sitemap parity for the site as a whole:
//   5. Every static route (minus documented exclusions) is in the sitemap.
//   6. Every sitemap URL is matched by some declared route.
//
// Returns { audit, findings, summary } — no console.log, no process.exit. The
// runner (scripts/audit/index.mjs) aggregates and prints.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  ROOT,
  walk,
  rel,
  extractRoutePatterns,
  extractRedirectSources,
  patternToRegex,
  loadSitemapPaths,
  loadDataModule,
  finding,
} from "./lib.mjs";

const AUDIT = "wiring";

// Datasets to audit. Each entry declares how the data flows to a page so the
// audit can tell "unwired content" from "wired via a different code path". Add
// a new dataset here in ~5 lines the moment you introduce one.
const AUDIT_TARGETS = [
  {
    name: "grammarBlogPosts",
    file: "src/data/grammarBlogPosts.ts",
    exportName: "grammarBlogPosts",
    // grammarBlogPosts is re-exported as `grammarArticles` — Blog.tsx imports
    // that derived name, not the original. Both count as evidence of wiring.
    derivedExports: ["grammarArticles"],
    shape: "array",
    idField: "id",
    urlPattern: "/blog/:id",
    indexPages: ["src/pages/Blog.tsx"],
    wiring: "iterated",
  },
  {
    name: "legacyBlogPosts",
    file: "src/data/legacyBlogPosts.ts",
    exportName: "legacyBlogPosts",
    // Record<id, ArticleData>: the key is the id, not a field on the value.
    shape: "record",
    urlPattern: "/blog/:id",
    // Blog.tsx derives its index from Object.entries(legacyBlogPosts).
    indexPages: ["src/pages/Blog.tsx"],
    wiring: "iterated",
  },
  {
    name: "FORMATIONS",
    file: "src/data/formations.ts",
    exportName: "FORMATIONS",
    shape: "array",
    idField: "key",
    urlPattern: null, // no per-item route
    indexPages: [
      "src/components/Layout.tsx",
      "src/pages/Home.tsx",
    ],
    wiring: "iterated",
  },
  {
    name: "testimonials",
    file: "src/data/testimonials.ts",
    exportName: "testimonials",
    shape: "array",
    idField: null, // no stable id; can only verify the dataset is consumed
    urlPattern: null,
    indexPages: [
      "src/pages/Testimonials.tsx",
      "src/components/TestimonialCarousel.tsx",
      "src/components/AvisClients.tsx",
    ],
    wiring: "iterated",
  },
];

// Routes that intentionally do not belong in the sitemap. Anything else in
// routes.tsx but absent from public/sitemap.xml is a real drift.
const SITEMAP_EXCLUDED = new Set([
  "/thank-you", // conversion confirmation, disallowed in robots
  "/blog/:id",  // dynamic; per-item URLs are added separately
  "/politique-de-confidentialite", // internal redirect, canonical is the other spelling
  "/sitemap-page", // internal redirect to /
]);

// Sitemap URLs that shouldn't have a route declaration (e.g. root). Empty for
// now, but the seam is here for future edge cases.
const ROUTE_EXCLUDED_FROM_SITEMAP = new Set();

// ---------- helpers ----------

function itemIds(data, target) {
  if (target.shape === "record") return Object.keys(data);
  if (!Array.isArray(data)) return [];
  if (!target.idField) return []; // no id field, item-level checks skipped
  return data.map((item) => item?.[target.idField]).filter((v) => v != null);
}

function urlFor(pattern, id) {
  return pattern.replace(/:[^/]+/g, String(id));
}

function importsSymbol(fileSrc, symbols) {
  // Match `import { A, B as C } from '...'` OR `import * as X from '...'`.
  // We look for any symbol name appearing between `import {` and `}` up to the
  // matching `from`. False positives on non-import mentions don't matter — an
  // index page mentioning the symbol name in a comment is evidence enough that
  // the page knows about the dataset.
  const importRe = /import\s+(?:type\s+)?\{([^}]+)\}\s+from/g;
  let m;
  while ((m = importRe.exec(fileSrc)) !== null) {
    const named = m[1]
      .split(",")
      .map((s) => s.trim().split(/\s+as\s+/)[0].trim())
      .filter(Boolean);
    if (symbols.some((s) => named.includes(s))) return true;
  }
  // Also match `import X from '...'` (default import — none of our data files
  // ship one today, but the check is cheap).
  const defRe = /import\s+(\w+)\s+from/g;
  while ((m = defRe.exec(fileSrc)) !== null) {
    if (symbols.includes(m[1])) return true;
  }
  return false;
}

function containsLiteralId(fileSrc, id) {
  // Ids are kebab-case slugs; a bare-word match would false-positive on any
  // substring. Wrap in quote/backtick delimiters so we match the string as it
  // would appear in a `to="/blog/foo"` or `id: 'foo'` literal.
  const q = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`["'\`]${q}["'\`]`).test(fileSrc);
}

function readIfExists(path) {
  try {
    return readFileSync(path, "utf8");
  } catch {
    return null;
  }
}

// ---------- per-dataset audit ----------

async function auditDataset(target, sitemapSet, routeRegexes) {
  const findings = [];
  const mod = await loadDataModule(target.file);
  const data = mod[target.exportName];
  if (data == null) {
    findings.push(
      finding(
        AUDIT,
        "error",
        "missing-export",
        `Dataset ${target.name}: export '${target.exportName}' not found in ${target.file}`,
        { path: target.file },
      ),
    );
    return { findings, ids: [] };
  }

  const ids = itemIds(data, target);

  // 1 + 2. URL-level checks (skip if the dataset produces no per-item URL).
  if (target.urlPattern && ids.length > 0) {
    for (const id of ids) {
      const url = urlFor(target.urlPattern, id);
      if (!sitemapSet.has(url.replace(/\/$/, ""))) {
        findings.push(
          finding(
            AUDIT,
            "error",
            "missing-from-sitemap",
            `${target.name}: ${url} not in public/sitemap.xml`,
            { path: target.file, meta: { id, url } },
          ),
        );
      }
      if (!routeRegexes.some((r) => r.test(url))) {
        findings.push(
          finding(
            AUDIT,
            "error",
            "no-matching-route",
            `${target.name}: ${url} has no matching route in src/routes.tsx`,
            { path: target.file, meta: { id, url } },
          ),
        );
      }
    }
  }

  // 3. Reachability from index pages.
  if (target.indexPages?.length > 0) {
    const indexSrcs = target.indexPages
      .map((p) => ({ path: p, src: readIfExists(join(ROOT, p)) }))
      .filter((e) => e.src != null);

    if (indexSrcs.length !== target.indexPages.length) {
      const missing = target.indexPages.filter(
        (p) => !indexSrcs.find((e) => e.path === p),
      );
      for (const p of missing) {
        findings.push(
          finding(
            AUDIT,
            "warn",
            "index-page-missing",
            `${target.name}: declared index page not found: ${p}`,
            { path: p },
          ),
        );
      }
    }

    if (target.wiring === "iterated" || target.wiring === "both") {
      const symbols = [target.exportName, ...(target.derivedExports ?? [])];
      const anyImports = indexSrcs.some((e) =>
        importsSymbol(e.src, symbols),
      );
      if (!anyImports) {
        findings.push(
          finding(
            AUDIT,
            "error",
            "not-imported-by-index",
            `${target.name}: no declared index page imports ${symbols.join(" / ")}`,
            {
              path: target.file,
              meta: { indexPages: target.indexPages, symbols },
            },
          ),
        );
      }
    }

    if ((target.wiring === "byId" || target.wiring === "both") && ids.length > 0) {
      for (const id of ids) {
        const wired = indexSrcs.some((e) => containsLiteralId(e.src, id));
        if (!wired) {
          findings.push(
            finding(
              AUDIT,
              "error",
              "orphan-on-index",
              `${target.name}: id '${id}' not referenced by any index page (${target.indexPages.join(", ")})`,
              { path: target.file, meta: { id } },
            ),
          );
        }
      }
    }
  }

  return { findings, ids };
}

// ---------- cross-cutting checks ----------

function checkRouteSitemapParity(routePatterns, sitemapPaths) {
  const findings = [];
  // Normalize once — root stays "/", everything else loses its trailing slash.
  // The prior version stripped root to "" and then looked it up as "/", which
  // guaranteed a false "route missing" for every deployment.
  const norm = (p) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  const sitemapSet = new Set(sitemapPaths.map(norm));

  // 5. Every static route (no `:` placeholder) should be in the sitemap.
  for (const p of routePatterns) {
    if (SITEMAP_EXCLUDED.has(p)) continue;
    if (p.includes(":")) continue; // dynamic — handled per-dataset
    if (!sitemapSet.has(norm(p))) {
      findings.push(
        finding(
          AUDIT,
          "warn",
          "route-missing-from-sitemap",
          `Route '${p}' is declared in src/routes.tsx but absent from public/sitemap.xml`,
          { path: "public/sitemap.xml", meta: { route: p } },
        ),
      );
    }
  }

  // 6. Every sitemap URL should be matched by some declared route.
  const regexes = routePatterns.map(patternToRegex);
  for (const path of sitemapPaths) {
    if (ROUTE_EXCLUDED_FROM_SITEMAP.has(path)) continue;
    const norm = path.startsWith("/") ? path : "/" + path;
    if (!regexes.some((r) => r.test(norm))) {
      findings.push(
        finding(
          AUDIT,
          "error",
          "sitemap-url-unroutable",
          `Sitemap URL '${norm}' has no matching route in src/routes.tsx`,
          { path: "public/sitemap.xml", meta: { url: norm } },
        ),
      );
    }
  }

  return findings;
}

// Inline validation for the blog cross-reference tables in
// src/utils/blogInternalLinks.ts. Both tables hardcode blog ids; a rename in
// the data file leaves stale ids that silently vanish from related-posts UI.
function checkBlogCrossRefs(knownBlogIds) {
  const findings = [];
  const src = readIfExists(join(ROOT, "src/utils/blogInternalLinks.ts"));
  if (!src) return findings;

  // Extract quoted string keys/values from the two Record literals. This is
  // deliberately regex-based, not a real parser — we tolerate rare misses over
  // dragging in a TS parser dependency for one file.
  const known = new Set(knownBlogIds);
  // Blog ids are always kebab slugs with at least one hyphen (see
  // grammarBlogPosts + legacyBlogPosts). Requiring a hyphen kills obvious
  // false positives like the 'default' fallback key without needing to parse
  // the file's Record blocks.
  const stringRe = /['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]/g;
  const seen = new Set();
  let m;
  while ((m = stringRe.exec(src)) !== null) {
    const id = m[1];
    if (seen.has(id)) continue;
    seen.add(id);
    // Only treat this as a blog-id claim if the same id also appears elsewhere
    // in the file — one-off strings (config keys, URL fragments) shouldn't
    // trip the check.
    const occurrences = (src.match(new RegExp(`["']${id}["']`, "g")) || []).length;
    if (occurrences < 2) continue;
    if (!known.has(id)) {
      findings.push(
        finding(
          AUDIT,
          "warn",
          "stale-blog-id-reference",
          `blogInternalLinks references id '${id}' which is not in the blog datasets`,
          { path: "src/utils/blogInternalLinks.ts", meta: { id } },
        ),
      );
    }
  }
  return findings;
}

// ---------- entrypoint ----------

export async function runWiringAudit() {
  const findings = [];
  const routePatterns = extractRoutePatterns();
  const redirectSources = extractRedirectSources();
  const routeRegexes = [...routePatterns, ...redirectSources].map(
    patternToRegex,
  );
  const sitemapPaths = loadSitemapPaths();
  const sitemapSet = new Set(sitemapPaths.map((p) => p.replace(/\/$/, "")));

  const allBlogIds = [];
  for (const target of AUDIT_TARGETS) {
    const { findings: f, ids } = await auditDataset(
      target,
      sitemapSet,
      routeRegexes,
    );
    findings.push(...f);
    if (target.urlPattern === "/blog/:id") allBlogIds.push(...ids);
  }

  findings.push(...checkRouteSitemapParity(routePatterns, sitemapPaths));
  findings.push(...checkBlogCrossRefs(allBlogIds));

  const summary = {
    datasets: AUDIT_TARGETS.length,
    routesDeclared: routePatterns.length,
    sitemapUrls: sitemapPaths.length,
    findings: findings.length,
    errors: findings.filter((f) => f.severity === "error").length,
    warnings: findings.filter((f) => f.severity === "warn").length,
  };

  return { audit: AUDIT, findings, summary };
}

// Allow direct invocation for quick debugging without the runner.
if (import.meta.url === `file://${process.argv[1]}`) {
  runWiringAudit().then((r) => {
    console.log(JSON.stringify(r, null, 2));
    process.exit(r.summary.errors > 0 ? 1 : 0);
  });
}
