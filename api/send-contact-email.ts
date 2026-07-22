import { createClient } from "@supabase/supabase-js";

export const config = { runtime: "edge" };

const NOTIFY_TO = "formations@antonyaddy.com";
const FROM_DOMAIN = "antonyaddy.com";
const MIN_SUBMIT_MS = 1500;

// Service-role client used only for the consume_rate_limit() RPC, which is
// locked to the service_role grant (see the migration that defines it).
// SUPABASE_SERVICE_ROLE_KEY must be added in Vercel project settings —
// it's a secret, distinct from the publishable/anon key already there.
const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.antonyaddy.com",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactEmailRequest {
  prenom: string;
  nom: string;
  email: string;
  message: string;
  _gotcha?: string;
  renderedAt?: number;
}

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

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

    // Per-IP rate limit. The honeypot and timing checks above are both
    // client-suppliable and trivial for a script to satisfy directly, and
    // this function triggers two outbound emails per call (one of them to
    // whatever address the caller supplies) — without this, a bot could
    // both spam Antony's inbox and use the confirmation email to relay
    // mail to an arbitrary third party. Vercel edge functions set
    // x-forwarded-for on every incoming request.
    const clientIp = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
    if (clientIp) {
      const { data: limit, error: limitError } = await supabaseAdmin.rpc("consume_rate_limit", {
        _identifier: clientIp,
        _bucket: "send-contact-email",
        _max_per_min: 3,
        _max_per_day: 20,
      });
      if (limitError) {
        console.error("Rate limit check failed (allowing request):", limitError.message);
      } else if (limit?.[0] && !limit[0].allowed) {
        return new Response(
          JSON.stringify({ error: "rate_limited", retryAfter: limit[0].retry_after }),
          { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } },
        );
      }
    }

    const stripHeader = (v: string) => (v ?? "").toString().replace(/[\r\n]+/g, " ").trim();
    const prenom = stripHeader(body.prenom);
    const nom = stripHeader(body.nom);
    const email = stripHeader(body.email);
    const message = (body.message ?? "").toString().trim();

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

    const notification = await sendEmail({
      from: `${prenom} ${nom} via Contact <contact@${FROM_DOMAIN}>`,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `Nouveau message de ${prenom} ${nom} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nouveau message depuis le formulaire de contact
          </h1>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Prénom :</strong> ${esc(prenom)}</p>
            <p><strong>Nom :</strong> ${esc(nom)}</p>
            <p><strong>Email :</strong> <a href="mailto:${encodeURIComponent(email)}">${esc(email)}</a></p>
          </div>
          <div style="background-color: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
            <h2 style="color: #374151; margin-top: 0;">Message :</h2>
            <p style="white-space: pre-wrap; color: #4b5563;">${esc(message)}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact de antonyaddy.com
          </p>
        </div>
      `,
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
    const confirmation = await sendEmail({
      from: `Antony Addy <contact@${FROM_DOMAIN}>`,
      to: [email],
      subject: "Merci pour votre message - Antony Addy Formations",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e40af;">Merci pour votre message, ${esc(prenom)} !</h1>
          <p>J'ai bien reçu votre demande et je vous recontacterai dans les plus brefs délais (généralement sous 24h).</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #374151; margin-top: 0;">Récapitulatif de votre message :</h2>
            <p style="white-space: pre-wrap; color: #4b5563;">${esc(message)}</p>
          </div>
          <p>En attendant, n'hésitez pas à :</p>
          <ul>
            <li><a href="https://www.antonyaddy.com/exercices" style="color: #1e40af;">Découvrir nos exercices gratuits</a></li>
            <li><a href="https://www.antonyaddy.com/blog" style="color: #1e40af;">Lire nos articles sur la grammaire anglaise</a></li>
            <li><a href="https://wa.me/33649829826" style="color: #16a34a;">Me contacter sur WhatsApp</a> pour une réponse plus rapide</li>
          </ul>
          <p>À très bientôt !</p>
          <p><strong>Antony Addy</strong><br>Formateur d'anglais professionnel</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Antony Addy - Formations d'anglais professionnel<br>
            Email: ${NOTIFY_TO}<br>
            Site: <a href="https://www.antonyaddy.com" style="color: #1e40af;">antonyaddy.com</a>
          </p>
        </div>
      `,
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
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
}
