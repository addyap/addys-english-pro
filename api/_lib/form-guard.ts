// Spam protection for the contact form — no third-party service, no account.
//
//   1. Origin allowlist   only antonyaddy.com and its subdomains may post.
//   2. Proof of work      the browser must find a number whose SHA-256 matches
//                         a server-signed challenge (Altcha-style). Invisible to
//                         people (~0.5 s of background work), costly at scale
//                         for scripts, and it carries a server-issued timestamp,
//                         so "submitted too fast" can no longer be faked.
//   3. Content filter     link-stuffed messages and URLs in name fields.
//   4. Email domain       the visitor's domain must exist and accept mail
//                         (public DNS-over-HTTPS lookup; fails open).
//
// Web Crypto only, so it runs on Vercel's edge runtime.

// ---------- 1. Origins ----------

const ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?antonyaddy\.com$/;
const DEV_ORIGIN_RE = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

/** The request's Origin if it is one of our sites, else null. */
export function allowedOrigin(request: Request): string | null {
  const origin = request.headers.get("origin") ?? "";
  if (ORIGIN_RE.test(origin)) return origin;
  if (process.env.VERCEL_ENV !== "production" && DEV_ORIGIN_RE.test(origin)) return origin;
  return null;
}

export function corsHeaders(origin: string | null, methods: string): Record<string, string> {
  return origin
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": methods,
        Vary: "Origin",
      }
    : { Vary: "Origin" };
}

// ---------- 2. Proof of work ----------

/** Search space. Average work is half of it: ~0.3 s desktop, ~1 s on a phone. */
const MAX_NUMBER = 60_000;
/** A challenge must be at least this old when used (replaces the client timestamp). */
export const MIN_AGE_MS = 2_000;
/** …and no older than this (a form left open over lunch still works). */
const MAX_AGE_MS = 2 * 60 * 60 * 1000;

const enc = new TextEncoder();
const hex = (buf: ArrayBuffer) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function sha256(text: string) {
  return hex(await crypto.subtle.digest("SHA-256", enc.encode(text)));
}

/**
 * Signing key. FORM_SECRET if set; otherwise derived from RESEND_API_KEY,
 * which is already a server-only secret — so this works with no extra setup.
 * Never sent to the browser; HMAC does not reveal it.
 */
function secret(): string | null {
  return process.env.FORM_SECRET || process.env.RESEND_API_KEY || null;
}

async function hmac(text: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw", enc.encode(`form-guard:${secret()}`), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode(text)));
}

export interface Challenge {
  algorithm: "SHA-256";
  challenge: string;
  salt: string;
  maxnumber: number;
  signature: string;
}

export async function createChallenge(): Promise<Challenge | null> {
  if (!secret()) return null;
  const nonce = hex(crypto.getRandomValues(new Uint8Array(12)).buffer);
  const salt = `${Date.now()}.${nonce}.`;
  const number = crypto.getRandomValues(new Uint32Array(1))[0] % (MAX_NUMBER + 1);
  const challenge = await sha256(salt + number);
  return { algorithm: "SHA-256", challenge, salt, maxnumber: MAX_NUMBER, signature: await hmac(challenge) };
}

// Each solved challenge is accepted once per warm instance (best effort,
// like the rate limit) so one solution can't be replayed in a loop.
const used = new Map<string, number>();

export type PowResult = "ok" | "missing" | "invalid" | "too_fast" | "expired" | "replayed" | "disabled";

export async function verifySolution(p: unknown): Promise<PowResult> {
  if (!secret()) return "disabled";
  const s = p as Partial<Challenge & { number: number }> | undefined;
  if (!s || typeof s.salt !== "string" || typeof s.challenge !== "string" ||
      typeof s.signature !== "string" || typeof s.number !== "number") return "missing";

  if ((await hmac(s.challenge)) !== s.signature) return "invalid";
  if ((await sha256(s.salt + s.number)) !== s.challenge) return "invalid";

  const issuedAt = Number(s.salt.split(".")[0]);
  const age = Date.now() - issuedAt;
  if (!Number.isFinite(issuedAt) || age > MAX_AGE_MS) return "expired";
  if (age < MIN_AGE_MS) return "too_fast";

  const now = Date.now();
  for (const [k, t] of used) if (now - t > MAX_AGE_MS) used.delete(k);
  if (used.has(s.challenge)) return "replayed";
  used.set(s.challenge, now);
  return "ok";
}

// ---------- 3. Content ----------

const URL_RE = /(https?:\/\/|www\.)\S+/gi;

/** Reason string if the submission looks like spam, else null. */
export function spamReason(f: { prenom: string; nom: string; message: string }): string | null {
  if (/https?:|www\.|\.(com|net|ru|xyz)\b|@/i.test(`${f.prenom} ${f.nom}`)) return "url_in_name";
  if ((f.message.match(URL_RE) ?? []).length > 3) return "too_many_links";
  if (/\[url=|<a\s+href/i.test(f.message)) return "link_markup";
  return null;
}

// ---------- 4. Email domain ----------

/**
 * false only when DNS says the domain cannot receive mail (doesn't exist, or
 * has neither MX nor A records). Any lookup failure or timeout returns true:
 * a DNS hiccup must never block a real enquiry.
 */
export async function emailDomainAcceptsMail(email: string): Promise<boolean> {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  const lookup = async (type: "MX" | "A") => {
    const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}&type=${type}`, {
      headers: { accept: "application/dns-json" },
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok) throw new Error(`DoH ${res.status}`);
    return (await res.json()) as { Status: number; Answer?: unknown[] };
  };
  try {
    const mx = await lookup("MX");
    if (mx.Status === 3) return false; // NXDOMAIN: the domain does not exist
    if (mx.Answer?.length) return true;
    const a = await lookup("A"); // no MX: mail falls back to the A record
    return !!a.Answer?.length;
  } catch {
    return true;
  }
}
