// Assets audit — reports files under public/{assets,images,og} that no
// source file references. Migrated from scripts/audit-assets.mjs into the
// unified runner so its findings live in audit-report.json alongside every
// other audit and follow the shared severity/exit-code contract.
//
// Detection is deliberately loose (substring match on basename + several path
// forms) so a file referenced anywhere — src/, public/, root index.html —
// counts as used. False negatives (an unused asset marked used) are cheap;
// false positives (a used asset marked unused) would delete live files.

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename, relative } from "node:path";
import { ROOT, finding } from "./lib.mjs";

const AUDIT = "assets";

const ASSET_EXTS = new Set([
  ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp",
  ".ico", ".pdf", ".mp4", ".webm",
]);
const CODE_EXTS = new Set([".tsx", ".ts", ".jsx", ".js", ".html", ".css", ".md"]);

// Scan every static-asset directory under public/, not just public/assets —
// stubs also accumulate in public/images and public/og.
const ASSET_SUBDIRS = ["assets", "images", "og"];

function scanDir(dir, extSet) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) out.push(...scanDir(p, extSet));
    else if (extSet.has(extname(p))) out.push(p);
  }
  return out;
}

function extname(p) {
  const i = p.lastIndexOf(".");
  return i >= 0 ? p.slice(i).toLowerCase() : "";
}

function relForward(abs) {
  return relative(ROOT, abs).split(/[\\/]/).join("/");
}

function findReferences(assetPaths, codeFiles) {
  const refs = Object.fromEntries(assetPaths.map((p) => [relForward(p), []]));
  for (const codeAbs of codeFiles) {
    let src;
    try {
      src = readFileSync(codeAbs, "utf8");
    } catch {
      continue;
    }
    const codeRel = relForward(codeAbs);
    for (const assetRel of Object.keys(refs)) {
      const base = basename(assetRel);
      // Match any plausible way the asset could be spelled in code:
      //   - full repo-relative path                (public/assets/foo.png)
      //   - basename                               (foo.png)
      //   - Vite public-dir style                  (/foo.png, stripped public/)
      //   - leading-slash absolute                 (/public/assets/foo.png)
      const candidates = [
        assetRel,
        base,
        assetRel.replace(/^public\//, "/"),
        "/" + assetRel,
      ];
      if (candidates.some((c) => src.includes(c))) {
        if (!refs[assetRel].includes(codeRel)) refs[assetRel].push(codeRel);
      }
    }
  }
  return refs;
}

export async function runAssetsAudit() {
  const publicDir = join(ROOT, "public");
  const srcDir = join(ROOT, "src");
  const rootHtml = join(ROOT, "index.html");

  const assetDirs = ASSET_SUBDIRS
    .map((d) => join(publicDir, d))
    .filter((d) => existsSync(d));

  if (assetDirs.length === 0) {
    return {
      audit: AUDIT,
      findings: [],
      summary: { total: 0, used: 0, unused: 0 },
    };
  }

  const assets = assetDirs.flatMap((d) => scanDir(d, ASSET_EXTS));
  const codeFiles = [
    ...scanDir(srcDir, CODE_EXTS),
    ...scanDir(publicDir, CODE_EXTS),
    ...(existsSync(rootHtml) ? [rootHtml] : []),
  ];

  const refs = findReferences(assets, codeFiles);
  const unused = [];
  const used = [];
  for (const [asset, refList] of Object.entries(refs)) {
    if (refList.length > 0) used.push(asset);
    else unused.push(asset);
  }

  // Unused assets are a warning, not an error: the substring heuristic can
  // miss a reference (dynamic filename built at runtime, a template literal
  // split across lines), so failing the build on this alone would eventually
  // block a merge over a false positive.
  const findings = unused.map((asset) =>
    finding(
      AUDIT,
      "warn",
      "unreferenced-asset",
      `${asset} appears unreferenced by any code file`,
      { path: asset },
    ),
  );

  return {
    audit: AUDIT,
    findings,
    summary: {
      total: assets.length,
      used: used.length,
      unused: unused.length,
    },
  };
}
