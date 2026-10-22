import { allowedOrigin } from "./_lib/form-guard";

export const config = { runtime: "edge" };

// The single way into WhatsApp from every antonyaddy.com page, section, app and
// email: links point at www.antonyaddy.com/whatsapp?c=<context>, never at
// wa.me/<number>. The number lives only in the WHATSAPP_NUMBER environment
// variable (the repository is public, so it must not be in the code), and it
// is handed out only to a person who actually clicked:
//
//   1. GET from a real, user-activated browser navigation (the browser sets
//      Sec-Fetch-User: ?1 only when a person clicked or tapped) → 302 to WhatsApp.
//   2. Anything else (scrapers, link checkers, previews, old browsers) gets a
//      small "Continue to WhatsApp" page instead. Its button POSTs back here,
//      and a POST is redirected only when its Origin is one of our sites.
//   3. Known bots never get the number, and each IP is rate-limited.
//   4. ?phone=1 serves the number as text for the legal pages' "show number"
//      button: same-origin fetches only, same limits.
//
// Every response is no-store and noindex, and robots.txt disallows /whatsapp.

const MESSAGES: Record<string, string> = {
  // Header, footer, home, contact: the visitor may want any of the three
  // services, so the message lets them keep the line that applies.
  default: `Bonjour Antony,

Ma demande concerne (gardez la bonne ligne) :
• Anglais professionnel (cours, formation)
• IA générative (formation, atelier)
• Site web ou outil sur mesure

Mon besoin en quelques mots :

Merci !`,
  // English-only pages (training offer, blog, positioning test).
  anglais: `Bonjour Antony,

Je souhaite améliorer mon anglais.

• Mon niveau actuel :
• Mon objectif (ex : travail, entretien, examen) :
• Mon délai :
• Format souhaité (visio / présentiel) :

Pouvez-vous me proposer une solution adaptée ?`,
  score: `Bonjour Antony,

Je viens de faire le test de positionnement en anglais.

• Mon score : … / 120
• Question où j'ai commencé à bloquer : n° …
• Mon objectif :

Pouvez-vous m'indiquer mon niveau et me proposer une solution adaptée ?`,
  ia: "Bonjour Antony, j'aimerais parler d'une formation en IA générative.",
  "ia-en": "Hi Antony, I'd like to talk about generative AI training.",
  sites: "Bonjour Antony, j'aimerais discuter d'un projet.",
  "sites-en": "Hi Antony, I'd like to discuss a project.",
  plain: "",
};

const BOT_UA = /bot|crawl|spider|slurp|scrap|curl|wget|python|httpclient|http-client|headless|phantom|puppeteer|playwright|selenium|go-http|java\/|libwww|axios|node-fetch|undici|okhttp|postman|insomnia|facebookexternalhit|preview|monitor|checker|validator/i;

// Best-effort per-IP limit, in memory (like the contact form): stops a script
// hammering the endpoint from one address. Generous for real people.
const MAX_PER_HOUR = 20;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  if (!ip) return false;
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  const limited = recent.length >= MAX_PER_HOUR;
  if (!limited) recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return limited;
}

const number = () => (process.env.WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

function waUrl(context: string): string | null {
  const n = number();
  if (!n) return null;
  const text = MESSAGES[context] ?? MESSAGES.default;
  return `https://wa.me/${n}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** "33612345678" → "+33 6 12 34 56 78" (French mobile layout; others left grouped). */
function display(n: string): string {
  return n.startsWith("33") && n.length === 11
    ? `+33 ${n[2]} ${n.slice(3, 5)} ${n.slice(5, 7)} ${n.slice(7, 9)} ${n.slice(9, 11)}`
    : `+${n}`;
}

const PRIVATE = {
  "Cache-Control": "no-store, max-age=0",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "Referrer-Policy": "no-referrer",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function interstitial(context: string, status = 200): Response {
  const en = context.endsWith("-en");
  const t = en
    ? { title: "Continue to WhatsApp", lead: "Tap the button to open a WhatsApp chat with Antony Addy.", go: "Open WhatsApp", alt: "Or use the contact form" }
    : { title: "Continuer vers WhatsApp", lead: "Touchez le bouton pour ouvrir une conversation WhatsApp avec Antony Addy.", go: "Ouvrir WhatsApp", alt: "Ou passez par le formulaire de contact" };
  const html = `<!doctype html><html lang="${en ? "en" : "fr"}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>${t.title} | Antony Addy</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#FAF8F5;color:#111731;font:16px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
main{max-width:26rem;padding:2rem 1.5rem;text-align:center}h1{font-size:1.5rem;margin:0 0 .5rem}p{margin:0 0 1.5rem;color:#4b5068}
button{font:inherit;font-weight:600;color:#fff;background:#1f9d55;border:0;border-radius:.6rem;padding:.8rem 1.6rem;cursor:pointer}
button:focus-visible{outline:3px solid #f6a463;outline-offset:3px}a{color:#bb3c30}</style></head>
<body><main><h1>${t.title}</h1><p>${t.lead}</p>
<form method="post" action="/whatsapp"><input type="hidden" name="c" value="${esc(context)}"><button type="submit">${t.go}</button></form>
<p style="margin-top:1.5rem"><a href="https://www.antonyaddy.com/contact" rel="nofollow">${t.alt}</a></p></main></body></html>`;
  return new Response(html, { status, headers: { "Content-Type": "text/html; charset=utf-8", ...PRIVATE } });
}

const toContact = () => new Response(null, { status: 302, headers: { Location: "https://www.antonyaddy.com/contact", ...PRIVATE } });

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
  const ua = request.headers.get("user-agent") ?? "";
  const h = (k: string) => request.headers.get(k) ?? "";
  const isBot = !ua || BOT_UA.test(ua);

  if (!number()) {
    console.warn("WHATSAPP_NUMBER is not set — sending visitors to the contact page");
    return toContact();
  }

  if (request.method === "POST") {
    // The interstitial's button. Browsers always send Origin on a form POST.
    if (isBot || !allowedOrigin(request) || rateLimited(ip)) return toContact();
    const form = await request.formData().catch(() => null);
    const context = String(form?.get("c") ?? "default");
    return new Response(null, { status: 303, headers: { Location: waUrl(context)!, ...PRIVATE } });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response(null, { status: 405, headers: { Allow: "GET, POST", ...PRIVATE } });
  }

  // Legal pages' "show number" button: a same-origin fetch from our own page.
  if (url.searchParams.get("phone") === "1") {
    const sameSite = h("sec-fetch-site") === "same-origin" || h("sec-fetch-site") === "same-site";
    if (isBot || !sameSite || h("sec-fetch-mode") === "navigate" || rateLimited(ip)) {
      return new Response(JSON.stringify({ error: "forbidden" }), { status: 403, headers: { "Content-Type": "application/json", ...PRIVATE } });
    }
    const n = number();
    return new Response(JSON.stringify({ display: display(n), tel: `+${n}` }), { headers: { "Content-Type": "application/json", ...PRIVATE } });
  }

  const context = (url.searchParams.get("c") ?? "default").slice(0, 20);

  // A person clicked a link: the browser marks user-activated top-level
  // navigations, and scripts that just fetch the URL don't send these.
  const humanClick =
    h("sec-fetch-user") === "?1" && h("sec-fetch-mode") === "navigate" && h("sec-fetch-dest") === "document";

  if (humanClick && !isBot && request.method === "GET" && !rateLimited(ip)) {
    return new Response(null, { status: 302, headers: { Location: waUrl(context)!, ...PRIVATE } });
  }
  return interstitial(context);
}
