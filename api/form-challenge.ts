import { allowedOrigin, corsHeaders, createChallenge } from "./_lib/form-guard";

export const config = { runtime: "edge" };

// Issues a signed proof-of-work challenge for the contact form
// (see api/_lib/form-guard.ts). The form fetches one when it loads.
export default async function handler(request: Request): Promise<Response> {
  const origin = allowedOrigin(request);
  const cors = corsHeaders(origin, "GET, OPTIONS");
  if (request.method === "OPTIONS") return new Response(null, { status: origin ? 204 : 403, headers: cors });

  // Same-origin GETs may omit Origin, so only a foreign Origin is refused.
  if (request.headers.get("origin") && !origin) {
    return new Response(JSON.stringify({ error: "forbidden" }), { status: 403, headers: { "Content-Type": "application/json", ...cors } });
  }

  const challenge = await createChallenge();
  return new Response(JSON.stringify(challenge ?? { disabled: true }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors },
  });
}
