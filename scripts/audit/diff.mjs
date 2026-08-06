// Audit-report diff — compares two audit-report.json files (base vs head),
// classifies each finding as new / resolved / unchanged, and renders a
// GitHub-flavoured markdown block ready to post as a PR comment.
//
// Signature identity: findings are matched on `audit|code|message`. Messages
// are constructed by each sub-audit to include the specific identifier
// (path, id, URL), so identical strings across two reports mean the same
// concrete finding — a code+path+meta.id compound key would be more precise
// but the message check has held up on every current sub-audit and needs no
// per-audit knowledge.
//
// Usage:
//   node scripts/audit/diff.mjs base.json head.json > comment.md
//   node scripts/audit/diff.mjs base.json head.json --exit-on-new
//
// --exit-on-new returns 1 when the head report introduces any new
// error-severity finding — useful as a belt-and-braces gate around the
// runner's own exit code.

import { readFileSync } from "node:fs";

// Sticky-comment marker. The PR-comment workflow greps for this and
// edits the existing comment in place instead of stacking new ones.
export const MARKER = "<!-- audit-diff:v1 -->";

const SEV_ICON = { error: "❌", warn: "⚠️", info: "ℹ️" };

function loadReport(path) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    return null;
  }
}

function collectFindings(report) {
  if (!report?.results) return [];
  return report.results.flatMap((r) => r.findings ?? []);
}

function keyOf(f) {
  return `${f.audit}|${f.code}|${f.message}`;
}

export function diff(baseReport, headReport) {
  const base = collectFindings(baseReport);
  const head = collectFindings(headReport);
  const baseMap = new Map(base.map((f) => [keyOf(f), f]));
  const headMap = new Map(head.map((f) => [keyOf(f), f]));

  const added = head.filter((f) => !baseMap.has(keyOf(f)));
  const removed = base.filter((f) => !headMap.has(keyOf(f)));
  const unchanged = head.filter((f) => baseMap.has(keyOf(f)));

  return {
    added,
    removed,
    unchanged,
    totals: {
      base: { total: base.length, errors: base.filter((f) => f.severity === "error").length, warns: base.filter((f) => f.severity === "warn").length },
      head: { total: head.length, errors: head.filter((f) => f.severity === "error").length, warns: head.filter((f) => f.severity === "warn").length },
    },
  };
}

// A markdown row for one finding. Keep it single-line so the <details>
// section stays scannable. Truncate long messages so a hostile-length
// finding can't blow out the comment.
function row(f, { strike = false } = {}) {
  const icon = SEV_ICON[f.severity] ?? "•";
  const where = f.path ? ` \`${f.path}\`` : "";
  const msg = f.message.length > 140 ? f.message.slice(0, 137) + "…" : f.message;
  const line = `${icon} **${f.audit}/${f.code}**${where}: ${msg}`;
  return strike ? `- ~~${line}~~` : `- ${line}`;
}

function section(title, items, opts = {}) {
  if (items.length === 0) return "";
  // A three-digit finding list is fine to show in full; anything larger
  // gets truncated with a count so the comment stays under GitHub's 65k
  // character limit even in a runaway.
  const CAP = 30;
  const shown = items.slice(0, CAP);
  const overflow = items.length - shown.length;
  const body =
    shown.map((f) => row(f, opts)).join("\n") +
    (overflow > 0 ? `\n- _…and ${overflow} more_` : "");
  return `<details><summary>${title}</summary>\n\n${body}\n\n</details>\n`;
}

function totalsLine(t) {
  const delta = (a, b) => (a === b ? String(b) : `${a}→${b}`);
  return `**vs base**: +${t.added} new · −${t.removed} resolved · ${t.unchanged} unchanged · errors ${delta(t.baseErrors, t.headErrors)} · warnings ${delta(t.baseWarns, t.headWarns)}`;
}

export function render(baseReport, headReport, { context = "" } = {}) {
  // If we have no base report, we can still post the current findings
  // without a diff. Useful for the very first run before an artifact exists.
  const hasBase = baseReport != null;
  const d = diff(baseReport ?? { results: [] }, headReport);
  const t = {
    added: d.added.length,
    removed: d.removed.length,
    unchanged: d.unchanged.length,
    baseErrors: d.totals.base.errors,
    baseWarns: d.totals.base.warns,
    headErrors: d.totals.head.errors,
    headWarns: d.totals.head.warns,
  };

  const parts = [MARKER, "## 🧭 Site audit"];
  if (context) parts.push(`_${context}_`);

  if (hasBase) {
    parts.push(totalsLine(t));
  } else {
    parts.push(
      `**Baseline unavailable** — showing current findings only (${t.headErrors} error(s), ${t.headWarns} warning(s)).`,
    );
  }

  // Without a base, every finding would show as "new" — misleading. Skip the
  // added/removed sections and let the per-audit summary below carry the load.
  if (hasBase) {
    if (t.added > 0) parts.push(section(`➕ ${t.added} new finding${t.added === 1 ? "" : "s"}`, d.added));
    if (t.removed > 0) parts.push(section(`✅ ${t.removed} resolved`, d.removed, { strike: true }));
    if (t.added === 0 && t.removed === 0) {
      parts.push("No change vs base. Nothing to fix, nothing regressed. 🎉");
    }
  }

  // Per-audit summary from the head report, so the reader always sees the
  // current shape of the site even when the diff is quiet.
  const perAudit = (headReport?.results ?? [])
    .map((r) => {
      const e = r.findings.filter((f) => f.severity === "error").length;
      const w = r.findings.filter((f) => f.severity === "warn").length;
      const icon = e > 0 ? "❌" : w > 0 ? "⚠️" : "✅";
      return `- ${icon} \`${r.audit}\` — ${e} error(s), ${w} warning(s)`;
    })
    .join("\n");
  if (perAudit) parts.push(`<details><summary>Current per-audit totals</summary>\n\n${perAudit}\n\n</details>`);

  return parts.filter(Boolean).join("\n\n") + "\n";
}

// ---- CLI ----

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const flags = new Set(args.filter((a) => a.startsWith("--")));
  const paths = args.filter((a) => !a.startsWith("--"));
  if (paths.length < 2) {
    console.error("usage: node scripts/audit/diff.mjs <base.json> <head.json> [--exit-on-new] [--context 'text']");
    process.exit(2);
  }
  const [basePath, headPath] = paths;
  // `args.indexOf('--context') + 1` collapses to 0 when the flag is absent,
  // which then reads args[0] — the base path — as the context. Guard the
  // lookup explicitly.
  const ctxIdx = args.indexOf("--context");
  const context =
    ctxIdx >= 0 && args[ctxIdx + 1] && !args[ctxIdx + 1].startsWith("--")
      ? args[ctxIdx + 1]
      : "";
  const base = loadReport(basePath);
  const head = loadReport(headPath);
  if (!head) {
    console.error(`could not read head report: ${headPath}`);
    process.exit(2);
  }
  process.stdout.write(render(base, head, { context }));
  if (flags.has("--exit-on-new")) {
    const d = diff(base ?? { results: [] }, head);
    const newErrors = d.added.filter((f) => f.severity === "error").length;
    if (newErrors > 0) process.exit(1);
  }
}
