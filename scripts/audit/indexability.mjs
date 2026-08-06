// Indexability audit — walks every prerendered HTML in dist/ and validates
// the tags that decide whether Google will index a page well: title,
// description, canonical, H1, robots. Plus cross-page checks for
// title/description uniqueness — the single most common SEO regression on
// prerendered sites.
//
// Broadened from scripts/verify-indexability.mjs, which only spot-checked
// three hardcoded routes. This walks the entire prerendered output.
//
// Skips itself with an info finding if dist/ is absent: the audit is
// build-dependent by design, and refusing to run pre-build lets `npm run
// audit` still work locally without a full build.

import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, relative } from "node:path";
import { ROOT, finding } from "./lib.mjs";

const AUDIT = "indexability";
const CANONICAL_DOMAIN = "https://www.antonyaddy.com";
const BUILD_DIRS = ["dist", "out", "build"];

// Length bands lifted from verify-indexability.mjs. Google truncates titles
// past ~60 chars; 70 is a soft cap. Descriptions under 50 are usually
// generic; over 200 get truncated.
const TITLE_MAX = 70;
const DESC_MIN = 50;
const DESC_MAX = 200;

// Pages intentionally excluded from uniqueness checks — legal boilerplate
// tends to share descriptions across privacy / terms / notices and that's
// not a bug worth flagging.
const UNIQUENESS_EXEMPT = new Set([
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
]);

// Pages that are not user-facing content and therefore have no SEO surface
// worth auditing: monitoring endpoints, internal-only redirect placeholders,
// and conversion-confirmation pages carrying a deliberate `noindex`. Skipping
// them here — rather than tolerating a floor of harmless failures — keeps
// real regressions visible against a clean baseline.
const NON_INDEXABLE_ROUTES = new Set([
  "/health",
  "/status",
  "/thank-you",
  "/404", // catch-all NotFound; prerendered by SSG but noindex by design
  // Redirect shims: their prerendered HTML is intentionally empty because
  // React Router's <Navigate> replaces them on mount.
  "/politique-de-confidentialite",
  "/sitemap-page",
]);

function findBuildDir() {
  return BUILD_DIRS
    .map((d) => join(ROOT, d))
    .find((p) => existsSync(p) && statSync(p).isDirectory());
}

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    // Skip Vite asset dir + hidden dirs — no user-facing HTML lives there.
    if (name === "assets" || name.startsWith(".")) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walkHtml(p, out);
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

function htmlPathToRoute(htmlAbs, buildDir) {
  const rel = relative(buildDir, htmlAbs).split(/[\\/]/).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"/index.html".length);
  if (rel.endsWith(".html")) return "/" + rel.slice(0, -".html".length);
  return "/" + rel;
}

// react-helmet-async prefixes its tags with data-rh="true", so attributes are
// not adjacent to the tag name. Attribute content is bounded by the SAME quote
// character on both ends — a naive `[^"']+` character class stops at whichever
// quote comes first, so a description starting `Cours d'anglais…` truncates to
// 7 chars because the apostrophe closes the match early. Match each quote
// style separately to preserve apostrophes inside double-quoted content and
// vice versa.
function matchQuoted(html, attrRe) {
  // replaceAll — attrRe contains three `__Q__` placeholders (open, char-class,
  // close) and String.replace only substitutes the first, which left the
  // pattern half-instantiated and never matched anything.
  const dq = html.match(new RegExp(attrRe.replaceAll("__Q__", '"'), "i"));
  if (dq) return dq[1];
  const sq = html.match(new RegExp(attrRe.replaceAll("__Q__", "'"), "i"));
  return sq?.[1];
}

function matchMetaContent(html, name) {
  return matchQuoted(
    html,
    `<meta[^>]*\\sname=["']${name}["'][^>]*\\scontent=__Q__([^__Q__]+)__Q__`,
  );
}

function matchLinkHref(html, rel) {
  return matchQuoted(
    html,
    `<link[^>]*\\srel=["']${rel}["'][^>]*\\shref=__Q__([^__Q__]+)__Q__`,
  );
}

function inspectPage(htmlAbs, buildDir) {
  const route = htmlPathToRoute(htmlAbs, buildDir);
  const html = readFileSync(htmlAbs, "utf8");
  const localFindings = [];

  const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim();
  const desc = matchMetaContent(html, "description")?.trim();
  const robots = matchMetaContent(html, "robots");
  const canonical = matchLinkHref(html, "canonical");
  // H1 may wrap parts of the text in <span>; strip tags before checking.
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const h1 = h1Match?.replace(/<[^>]*>/g, "").trim();

  const push = (severity, code, message, meta) =>
    localFindings.push(
      finding(AUDIT, severity, code, message, {
        path: relative(ROOT, htmlAbs).split(/[\\/]/).join("/"),
        meta: { route, ...meta },
      }),
    );

  if (!title) push("error", "missing-title", `${route}: missing <title>`);
  else if (title.length > TITLE_MAX)
    push("warn", "title-too-long", `${route}: title ${title.length} chars > ${TITLE_MAX}`, { titleLength: title.length });

  if (!desc)
    push("error", "missing-description", `${route}: missing meta description`);
  else if (desc.length < DESC_MIN || desc.length > DESC_MAX)
    push("warn", "description-length", `${route}: description ${desc.length} chars (want ${DESC_MIN}-${DESC_MAX})`, { descLength: desc.length });

  if (robots && robots.includes("noindex"))
    // The page shipped a noindex directive. If intentional, add it to
    // UNIQUENESS_EXEMPT — worth surfacing every time so a stray noindex on a
    // marketing page doesn't sit unnoticed.
    push("warn", "noindex", `${route}: contains noindex directive`);

  if (!canonical)
    push("error", "missing-canonical", `${route}: missing canonical link`);
  else if (!canonical.startsWith(CANONICAL_DOMAIN))
    push(
      "error",
      "wrong-canonical",
      `${route}: canonical ${canonical} does not start with ${CANONICAL_DOMAIN}`,
      { canonical },
    );

  if (!h1) push("error", "missing-h1", `${route}: no visible <h1>`);

  return { route, title, desc, findings: localFindings };
}

function checkRobotsTxt() {
  const findings = [];
  const p = join(ROOT, "public/robots.txt");
  if (!existsSync(p)) {
    findings.push(finding(AUDIT, "error", "missing-robots-txt", "public/robots.txt is missing"));
    return findings;
  }
  const src = readFileSync(p, "utf8");
  if (!src.includes("Allow: /"))
    findings.push(finding(AUDIT, "warn", "robots-no-allow", "public/robots.txt is missing 'Allow: /'", { path: "public/robots.txt" }));
  if (!src.includes(`Sitemap: ${CANONICAL_DOMAIN}/sitemap.xml`))
    findings.push(
      finding(
        AUDIT,
        "warn",
        "robots-no-sitemap",
        `public/robots.txt is missing 'Sitemap: ${CANONICAL_DOMAIN}/sitemap.xml'`,
        { path: "public/robots.txt" },
      ),
    );
  return findings;
}

function checkSitemapPresent() {
  if (!existsSync(join(ROOT, "public/sitemap.xml"))) {
    return [finding(AUDIT, "error", "missing-sitemap", "public/sitemap.xml is missing — run `npm run prebuild`")];
  }
  return [];
}

// Duplicate titles or descriptions across pages is the single most common
// SEO regression on a prerendered site — every page ends up with the fallback
// meta because a page forgot to set its own SEOHead. Flag as warnings so a
// deliberately shared description on legal pages isn't a merge blocker.
function findDuplicates(pages, field, code, label) {
  const groups = new Map();
  for (const p of pages) {
    if (UNIQUENESS_EXEMPT.has(p.route)) continue;
    const v = p[field];
    if (!v) continue;
    if (!groups.has(v)) groups.set(v, []);
    groups.get(v).push(p.route);
  }
  const out = [];
  for (const [value, routes] of groups) {
    if (routes.length < 2) continue;
    out.push(
      finding(
        AUDIT,
        "warn",
        code,
        `Duplicate ${label} shared by ${routes.length} pages: ${routes.slice(0, 3).join(", ")}${routes.length > 3 ? ` (+${routes.length - 3} more)` : ""} — "${value.slice(0, 60)}${value.length > 60 ? "…" : ""}"`,
        { meta: { value, routes } },
      ),
    );
  }
  return out;
}

export async function runIndexabilityAudit() {
  const findings = [];
  findings.push(...checkRobotsTxt());
  findings.push(...checkSitemapPresent());

  const buildDir = findBuildDir();
  if (!buildDir) {
    findings.push(
      finding(
        AUDIT,
        "info",
        "no-build-dir",
        `No build directory (${BUILD_DIRS.join(", ")}) — per-page checks skipped. Run \`npm run build\` first.`,
      ),
    );
    return {
      audit: AUDIT,
      findings,
      summary: { pagesInspected: 0, robotsOk: findings.filter((f) => f.code?.startsWith("robots")).length === 0 },
    };
  }

  const htmlFiles = walkHtml(buildDir);
  const pages = htmlFiles
    .map((h) => inspectPage(h, buildDir))
    .filter((p) => !NON_INDEXABLE_ROUTES.has(p.route));

  for (const p of pages) findings.push(...p.findings);
  findings.push(...findDuplicates(pages, "title", "duplicate-title", "title"));
  findings.push(...findDuplicates(pages, "desc", "duplicate-description", "description"));

  return {
    audit: AUDIT,
    findings,
    summary: {
      pagesInspected: pages.length,
      missingTitle: findings.filter((f) => f.code === "missing-title").length,
      missingDescription: findings.filter((f) => f.code === "missing-description").length,
      duplicateTitles: findings.filter((f) => f.code === "duplicate-title").length,
      duplicateDescriptions: findings.filter((f) => f.code === "duplicate-description").length,
    },
  };
}
