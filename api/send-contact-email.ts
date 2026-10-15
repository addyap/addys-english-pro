import { SUBJECTS, confirmationEmail, notificationEmail } from "./_lib/contact-emails";

export const config = { runtime: "edge" };

const NOTIFY_TO = "formations@antonyaddy.com";
const FROM_DOMAIN = "antonyaddy.com";
const MIN_SUBMIT_MS = 1500;
// Generous for real enquiries, small enough that a script can't push huge
// payloads through Resend.
const MAX_FIELD = 120;
const MAX_MESSAGE = 5000;

// Best-effort per-IP rate limit, held in memory — no database. Each warm
// edge instance keeps its own counts, so a determined script spread across
// cold starts can exceed it; it stops the casual repeat/flood case. The real
// protection is that nothing a stranger types is ever sent to a third party
// (the visitor confirmation carries no submitted text), so the worst case is
// spam in your own inbox. For a hard limit, add a Vercel Firewall rate-limit
// rule on /api/send-contact-email — still no database.
const MAX_PER_MIN = 3;
const MAX_PER_DAY = 20;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 86_400_000);
  const lastMinute = recent.filter((t) => now - t < 60_000).length;
  if (lastMinute >= MAX_PER_MIN || recent.length >= MAX_PER_DAY) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // bound memory on a long-lived instance
  return false;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.antonyaddy.com",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactEmailRequest {
  prenom: string;
  nom: string;
  email: string;
  sujet?: string;
  message: string;
  _gotcha?: string;
  renderedAt?: number;
}

async function sendEmail(payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => null);
  return { ok: res.ok, json };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body: ContactEmailRequest = await request.json();

    if (body._gotcha) {
      return new Response(JSON.stringify({ error: "rejected" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (typeof body.renderedAt !== "number" || Date.now() - body.renderedAt < MIN_SUBMIT_MS) {
      return new Response(JSON.stringify({ error: "rejected" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const clientIp = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
    if (clientIp && rateLimited(clientIp)) {
      return new Response(JSON.stringify({ error: "rate_limited" }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const stripHeader = (v: string) => (v ?? "").toString().replace(/[\r\n]+/g, " ").trim();
    const prenom = stripHeader(body.prenom);
    const nom = stripHeader(body.nom);
    const email = stripHeader(body.email);
    // Only the form's own subjects are trusted into the email subject line.
    const sujet = SUBJECTS[stripHeader(body.sujet)] ? stripHeader(body.sujet) : "Autre";
    const message = (body.message ?? "").toString().trim();

    if (prenom.length > MAX_FIELD || nom.length > MAX_FIELD || email.length > 254 ||
        sujet.length > MAX_FIELD || message.length > MAX_MESSAGE) {
      return new Response(JSON.stringify({ error: "Message trop long" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!prenom || !nom || !email || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont requis" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Format d'email invalide" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const notice = notificationEmail({ prenom, nom, email, sujet, message });
    const notification = await sendEmail({
      from: `${prenom} ${nom} via antonyaddy.com <contact@${FROM_DOMAIN}>`,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: notice.subject,
      html: notice.html,
      text: notice.text,
    });

    if (!notification.ok) {
      console.error("Resend notification error:", notification.json);
      return new Response(
        JSON.stringify({ success: false, error: "Email sending failed. Please try again later." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Confirmation email to the sender. Non-fatal if it fails — the
    // notification to Antony already succeeded, so still report success.
    //
    // Deliberately contains NO submitted text — not the message, not even
    // the first name: the recipient is whatever address the caller typed, so
    // any echoed field would let anyone send their own text from
    // contact@antonyaddy.com to a third party (spam relay → domain damage).
    const confirm = confirmationEmail(sujet);
    const confirmation = await sendEmail({
      from: `Antony Addy <contact@${FROM_DOMAIN}>`,
      to: [email],
      // Replies reach Antony's real inbox, not the sending-only address.
      reply_to: NOTIFY_TO,
      subject: confirm.subject,
      html: confirm.html,
      text: confirm.text,
    });

    if (!confirmation.ok) {
      console.warn("Resend confirmation error (non-fatal):", confirmation.json);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in send-contact-email:", errorMessage);
    // Internal details stay in the logs, not in the response.
    return new Response(JSON.stringify({ error: "server_error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
}
