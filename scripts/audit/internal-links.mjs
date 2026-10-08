// Internal-links audit — resolves every internal link literal in src/
// against the route patterns in src/routes.tsx and the redirect sources in
// vercel.json. Migrated from scripts/audit-internal-links.mjs into the
// unified runner. The extraction and pattern logic is unchanged; only the
// reporting shape now conforms to the shared Finding contract.
//
// Complements the wiring audit: this one asks "does the target of a link
// exist?", the wiring audit asks "does anything link to this content?".

import { readFileSync } from "node:fs";
import {
  ROOT,
  walk,
  rel,
  extractRoutePatterns,
  extractRedirectSources,
  patternToRegex,
  finding,
} from "./lib.mjs";
import { join } from "node:path";

const AUDIT = "internal-links";

// Match three forms:
//   to="/path"          | to={`/path/${x}`}          (Link)
//   href="/path"        | href={`/path`}             (anchors)
//   navigate("/path")   | navigate(`/path/${x}`)     (router hook)
const LINK_RE =
  /(?:\bto|\bhref)=\{?[`"']([/][^"'`)}\s${]*)|navigate\(\s*[`"']([/][^"'`)\s${]*)/g;

function isStaticPath(p) {
  // A path is "concrete enough to test" when it contains no template opener.
  // Dynamic segments built from `${...}` are already stripped at extraction
  // time; anything with `$` or `{` left over is a template that we cannot
  // resolve without evaluating.
  return !p.includes("$") && !p.includes("{");
}

function matchesAnyRoute(path, regexes) {
  if (regexes.some((r) => r.test(path))) return true;
  // A dynamic parent (`/exercices/:id`) matches when we append a placeholder
  // segment. Handles the case where the literal prefix was extracted but the
  // dynamic tail was stripped.
  if (regexes.some((r) => r.test(path + "/1"))) return true;
  return false;
}

function extractLinksFromFile(file) {
  const src = readFileSync(file, "utf8");
  const out = [];
  let m;
  while ((m = LINK_RE.exec(src)) !== null) {
    const path = m[1] || m[2];
    if (!path || !path.startsWith("/")) continue;
    if (path.startsWith("//")) continue; // protocol-relative
    const clean = path.replace(/\$$/, "");
    const line = src.slice(0, m.index).split("\n").length;
    out.push({ path: clean, file, line });
  }
  return out;
}

export async function runInternalLinksAudit() {
  const routePatterns = extractRoutePatterns();
  const redirectSources = extractRedirectSources();
  const regexes = [...routePatterns, ...redirectSources].map(patternToRegex);

  const files = walk(join(ROOT, "src"));
  const all = files.flatMap(extractLinksFromFile);

  // Deduplicate on (path, file, line) — the same link literal reported twice
  // by overlapping regex alternatives adds no signal.
  const seen = new Set();
  const links = all.filter((l) => {
    const k = `${l.path}::${l.file}::${l.line}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  const findings = [];
  let staticCount = 0;
  let dynamicCount = 0;

  for (const link of links) {
    const norm = link.path.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
    if (!isStaticPath(norm)) {
      dynamicCount++;
      continue;
    }
    staticCount++;
    if (!matchesAnyRoute(norm, regexes)) {
      findings.push(
        finding(
          AUDIT,
          "error",
          "broken-internal-link",
          `Link to ${norm} has no matching route or redirect`,
          {
            path: rel(link.file),
            location: `${rel(link.file)}:${link.line}`,
            meta: { path: norm, line: link.line },
          },
        ),
      );
    }
  }

  return {
    audit: AUDIT,
    findings,
    summary: {
      routes: routePatterns.length,
      redirects: redirectSources.length,
      filesScanned: files.length,
      linksFound: links.length,
      staticTested: staticCount,
      dynamicSkipped: dynamicCount,
    },
  };
}
