/**
 * Client half of the contact form's proof of work (server: api/_lib/form-guard.ts).
 *
 * Fetches a signed challenge and searches for the number whose SHA-256 matches,
 * in small batches so the page stays responsive. Starts when the form mounts,
 * so it is normally finished long before the visitor clicks "Envoyer".
 */
export interface PowSolution {
  algorithm: string;
  challenge: string;
  salt: string;
  signature: string;
  number: number;
}

interface Challenge {
  algorithm: string;
  challenge: string;
  salt: string;
  maxnumber: number;
  signature: string;
  disabled?: boolean;
}

const enc = new TextEncoder();

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text));
  let out = '';
  for (const b of new Uint8Array(buf)) out += b.toString(16).padStart(2, '0');
  return out;
}

/** Resolves to a solution, or null when the server has proof of work switched off. */
export async function solveFormChallenge(endpoint = '/api/form-challenge'): Promise<PowSolution | null> {
  const res = await fetch(endpoint, { cache: 'no-store' });
  if (!res.ok) throw new Error(`challenge ${res.status}`);
  const c = (await res.json()) as Challenge;
  if (c.disabled) return null;

  const BATCH = 500;
  for (let start = 0; start <= c.maxnumber; start += BATCH) {
    const end = Math.min(start + BATCH, c.maxnumber + 1);
    const hashes = await Promise.all(
      Array.from({ length: end - start }, (_, i) => sha256Hex(c.salt + (start + i))),
    );
    const hit = hashes.indexOf(c.challenge);
    if (hit !== -1) {
      return { algorithm: c.algorithm, challenge: c.challenge, salt: c.salt, signature: c.signature, number: start + hit };
    }
    // Yield to the browser between batches.
    await new Promise((r) => setTimeout(r, 0));
  }
  throw new Error('challenge unsolved');
}
