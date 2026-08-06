// Content-quality audit — inspects the HTML body of every blog post for
// the class of defect the other audits don't catch: an image without alt
// text, a stray <h1> nested inside content (the page already renders one),
// an empty heading, an internal link pointing at a slug that no longer
// exists, or a post so short it likely never got finished. Also carries a
// freshness signal — an old date isn't a bug, but the report should
// surface it so the author decides.
//
// All findings are informational (warn / info). Nothing here blocks CI —
// a "too short" post is a judgment call, and the last thing the wiring
// audit needs is content-quality noise breaking merges.

import { join } from "node:path";
import { ROOT, loadDataModule, finding } from "./lib.mjs";

const AUDIT = "content-quality";

// Anything older than this is surfaced as a soft freshness prompt. Two
// years is deliberate — grammar guidance rarely rots faster than that.
const FRESHNESS_MONTHS_INFO = 12;
const FRESHNESS_MONTHS_WARN = 24;
// Below this, the post reads as a stub — small enough that shipping it
// probably wasn't intentional. Long-form is 500+.
const WORD_COUNT_INFO = 300;

function stripTags(html) {
  // Preserve inter-tag whitespace so word count doesn't accidentally join
  // two paragraphs into one big word.
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(html) {
  const text = stripTags(html);
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function collectImages(html) {
  // Iterate real <img> tags; ignore <img> inside comments. Regex is fine
  // because the content is authored HTML, not adversarial input, and the
  // audit only reads it.
  const out = [];
  const re = /<img\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const alt = attrs.match(/\balt\s*=\s*(["'])([\s\S]*?)\1/i);
    const src = attrs.match(/\bsrc\s*=\s*(["'])([\s\S]*?)\1/i)?.[2] ?? "";
    out.push({ src, alt: alt?.[2], raw: m[0] });
  }
  return out;
}

function collectHeadings(html) {
  const out = [];
  const re = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    out.push({ level: Number(m[1]), text: stripTags(m[2]) });
  }
  return out;
}

function collectInternalAnchors(html) {
  const out = [];
  // Match every href="/…" in the post body. Skip mailto:, tel:, //, and
  // anchors — we only care about links back into the site.
  const re = /href\s*=\s*["'](\/[^"'#][^"']*)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  return out;
}

function monthsBetween(a, b) {
  return (a.getFullYear() - b.getFullYear()) * 12 + (a.getMonth() - b.getMonth());
}

function auditPost(post, knownBlogIds, now) {
  const findings = [];
  const push = (severity, code, message, meta = {}) =>
    findings.push(
      finding(AUDIT, severity, code, `[${post.id}] ${message}`, {
        path: post._source,
        meta: { id: post.id, ...meta },
      }),
    );

  const content = post.content ?? "";
  if (!content.trim()) {
    push("warn", "empty-content", "post body is empty");
    return findings;
  }

  // 1. Word count.
  const words = wordCount(content);
  if (words < WORD_COUNT_INFO) {
    push("info", "thin-content", `only ${words} words (soft floor ${WORD_COUNT_INFO})`, { words });
  }

  // 2. Headings — no h1 inside body, no empty headings.
  for (const h of collectHeadings(content)) {
    if (h.level === 1) {
      push("warn", "nested-h1", `body contains an <h1> ("${h.text.slice(0, 40)}…") — the page title already occupies h1`);
    }
    if (!h.text) {
      push("warn", "empty-heading", `empty <h${h.level}> in body`);
    }
  }

  // 3. Images — every one needs alt text (empty string is allowed for
  //    decorative images and passes here; missing attribute is the bug).
  for (const img of collectImages(content)) {
    if (img.alt === undefined) {
      push("warn", "img-missing-alt", `<img src="${img.src.slice(0, 60)}"> has no alt attribute`, { src: img.src });
    }
  }

  // 4. Internal anchors — a /blog/foo link where foo is not a known post id
  //    is dead. This is one class of drift the runtime routes-check misses,
  //    because the link only exists inside an authored HTML string.
  for (const href of collectInternalAnchors(content)) {
    const blogMatch = href.match(/^\/blog\/([^/?#]+)/);
    if (blogMatch && !knownBlogIds.has(blogMatch[1])) {
      push("error", "dead-blog-anchor", `link to ${href} — no post with id "${blogMatch[1]}"`, { href });
    }
  }

  // 5. Freshness — soft prompt only.
  if (post.date && /^\d{4}-\d{2}-\d{2}/.test(post.date)) {
    const posted = new Date(post.date);
    if (!Number.isNaN(posted.getTime())) {
      const months = monthsBetween(now, posted);
      if (months >= FRESHNESS_MONTHS_WARN) {
        push("warn", "stale-post", `dated ${post.date} (${months} months old) — consider a refresh`, { months });
      } else if (months >= FRESHNESS_MONTHS_INFO) {
        push("info", "aging-post", `dated ${post.date} (${months} months old)`, { months });
      }
    }
  }

  return findings;
}

export async function runContentQualityAudit() {
  const [grammar, legacy] = await Promise.all([
    loadDataModule("src/data/grammarBlogPosts.ts"),
    loadDataModule("src/data/legacyBlogPosts.ts"),
  ]);

  const grammarPosts = (grammar.grammarBlogPosts ?? []).map((p) => ({
    ...p,
    _source: "src/data/grammarBlogPosts.ts",
  }));
  const legacyPosts = Object.entries(legacy.legacyBlogPosts ?? {}).map(
    ([id, p]) => ({ id, ...p, _source: "src/data/legacyBlogPosts.ts" }),
  );
  const posts = [...grammarPosts, ...legacyPosts];

  const knownIds = new Set(posts.map((p) => p.id));
  const now = new Date();

  const findings = posts.flatMap((p) => auditPost(p, knownIds, now));

  return {
    audit: AUDIT,
    findings,
    summary: {
      postsInspected: posts.length,
      totalWords: posts.reduce((n, p) => n + wordCount(p.content ?? ""), 0),
      thinPosts: findings.filter((f) => f.code === "thin-content").length,
      staleImages: findings.filter((f) => f.code === "img-missing-alt").length,
      deadAnchors: findings.filter((f) => f.code === "dead-blog-anchor").length,
    },
  };
}
