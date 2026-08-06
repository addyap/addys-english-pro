#!/usr/bin/env node
// Unified audit runner.
//
// Dispatches every sub-audit, writes a single JSON report the CI can annotate,
// and prints one summary. Sub-audits return findings; the runner decides what
// exit code to use. This replaces the pattern where each script had its own
// exit code, log style, and report file — impossible to consume together.
//
// Add a new sub-audit by importing it below and adding it to AUDITS. Each
// module must export a function returning `{ audit, findings, summary }`.
//
// Usage:
//   node scripts/audit/index.mjs           # run every audit
//   node scripts/audit/index.mjs wiring    # run a single audit
//   FAIL_ON=warn node scripts/audit/index.mjs  # promote warnings to fail

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "./lib.mjs";
import { runWiringAudit } from "./wiring.mjs";
import { runAssetsAudit } from "./assets.mjs";
import { runInternalLinksAudit } from "./internal-links.mjs";
import { runIndexabilityAudit } from "./indexability.mjs";
import { runContentQualityAudit } from "./content-quality.mjs";

// The audit registry. Adding an audit here is the only wiring needed —
// everything else (report, exit code, CLI filter) works from this table.
const AUDITS = [
  { name: "internal-links", run: runInternalLinksAudit },
  { name: "wiring", run: runWiringAudit },
  { name: "assets", run: runAssetsAudit },
  { name: "indexability", run: runIndexabilityAudit },
  { name: "content-quality", run: runContentQualityAudit },
];

const FAIL_ON = (process.env.FAIL_ON ?? "error").toLowerCase();
const REPORT_PATH = join(ROOT, "audit-report.json");

// severity ordering: info < warn < error. A run fails when any finding is at
// or above the FAIL_ON threshold.
const SEV_ORDER = { info: 0, warn: 1, error: 2 };

function shouldFail(findings) {
  const threshold = SEV_ORDER[FAIL_ON] ?? SEV_ORDER.error;
  return findings.some((f) => (SEV_ORDER[f.severity] ?? 0) >= threshold);
}

function formatSummaryLine(result) {
  const { audit, summary, findings } = result;
  const errors = findings.filter((f) => f.severity === "error").length;
  const warns = findings.filter((f) => f.severity === "warn").length;
  const status = errors > 0 ? "❌" : warns > 0 ? "⚠️ " : "✅";
  const counts = `${errors} error(s), ${warns} warning(s)`;
  const detail = summary
    ? " · " +
      Object.entries(summary)
        .filter(([k]) => !["findings", "errors", "warnings"].includes(k))
        .map(([k, v]) => `${k}=${v}`)
        .join(" ")
    : "";
  return `${status} ${audit.padEnd(10)} ${counts}${detail}`;
}

// Console prints error + warn only. Info-severity findings stay in
// audit-report.json — they're low-signal per-item hints (thin-content on
// every short post, aging-post on 60+ posts) that would drown out real
// findings if echoed to the log. AUDIT_VERBOSE=1 restores the noise for
// local debugging.
function printFindings(findings) {
  const verbose = process.env.AUDIT_VERBOSE === "1";
  for (const f of findings) {
    if (f.severity === "info" && !verbose) continue;
    const tag = f.severity === "error" ? "ERR " : f.severity === "warn" ? "WARN" : "INFO";
    const where = f.path ? ` (${f.path})` : "";
    console.log(`  [${tag}] ${f.audit}/${f.code}: ${f.message}${where}`);
  }
}

async function main() {
  const filter = process.argv.slice(2).filter((a) => !a.startsWith("-"));
  const selected = filter.length
    ? AUDITS.filter((a) => filter.includes(a.name))
    : AUDITS;

  if (filter.length && selected.length === 0) {
    console.error(
      `No matching audit(s). Available: ${AUDITS.map((a) => a.name).join(", ")}`,
    );
    process.exit(2);
  }

  console.log("──────────────────────────────────────────────");
  console.log(" Site Audit");
  console.log("──────────────────────────────────────────────");

  const results = [];
  const started = Date.now();
  for (const { name, run } of selected) {
    try {
      const r = await run();
      results.push(r);
    } catch (err) {
      // A sub-audit throwing is a bug in the audit itself, not a site finding.
      // Surface it as an error-level finding under its own name so the run
      // fails and the report captures the crash.
      results.push({
        audit: name,
        findings: [
          {
            audit: name,
            severity: "error",
            code: "audit-crashed",
            message: `${name} audit threw: ${err?.message ?? String(err)}`,
            meta: { stack: err?.stack },
          },
        ],
        summary: {},
      });
    }
  }
  const durationMs = Date.now() - started;

  const allFindings = results.flatMap((r) => r.findings);

  const report = {
    // Fixed timestamp keeps report reproducible under Date-restricted runners.
    generatedAt: new Date().toISOString(),
    durationMs,
    failOn: FAIL_ON,
    results,
    totals: {
      audits: results.length,
      findings: allFindings.length,
      errors: allFindings.filter((f) => f.severity === "error").length,
      warnings: allFindings.filter((f) => f.severity === "warn").length,
      infos: allFindings.filter((f) => f.severity === "info").length,
    },
  };

  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  for (const r of results) console.log(formatSummaryLine(r));
  console.log("");

  if (allFindings.length > 0) {
    console.log("Findings:");
    printFindings(allFindings);
    console.log("");
  }

  console.log(`Report: audit-report.json  ·  ${durationMs}ms`);

  process.exit(shouldFail(allFindings) ? 1 : 0);
}

main().catch((err) => {
  console.error("Audit runner crashed:", err);
  process.exit(2);
});
