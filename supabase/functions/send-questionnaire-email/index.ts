import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const LANG_LABELS: Record<string, string> = {
  fr: "Français", en: "English", es: "Español", de: "Deutsch",
  it: "Italiano", pt: "Português", zh: "中文", ar: "العربية",
};

interface Payload {
  langue_completion: string;
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  langue_maternelle?: string;
  pays_residence?: string;
  niveau_cefr: string;
  competences_faibles?: string[];
  derniere_utilisation?: string;
  contexte_principal: string;
  objectifs?: string[];
  echeance?: string;
  notes_objectifs?: string;
  format_seance: string;
  type_seance?: string;
  heures_par_semaine?: number;
  creneaux_preferes?: string[];
  date_demarrage?: string;
  source?: string;
  experience_formation?: string;
  style_enseignement?: string[];
  notes_finales?: string;
}

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const row = (label: string, value: unknown) => {
  const v = Array.isArray(value) ? value.join(", ") : value;
  if (v === undefined || v === null || v === "" || (Array.isArray(value) && value.length === 0)) return "";
  return `<p style="margin:6px 0;"><strong>${esc(label)} :</strong> ${esc(v)}</p>`;
};

const section = (title: string, body: string) =>
  `<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin:16px 0;">
     <h2 style="color:#1A1612;margin:0 0 10px;font-size:16px;">${esc(title)}</h2>${body}
   </div>`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const d: Payload = await req.json();

    if (!d.prenom || !d.nom || !d.email || !d.niveau_cefr || !d.contexte_principal || !d.format_seance) {
      return new Response(JSON.stringify({ error: "Champs obligatoires manquants" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const langLabel = LANG_LABELS[d.langue_completion] ?? d.langue_completion;

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#1A1612;">
        <p style="background:#B8935A;color:#fff;padding:8px 14px;border-radius:6px;display:inline-block;font-size:13px;">
          Langue de complétion : <strong>${esc(langLabel)}</strong>
        </p>
        <h1 style="color:#2C4A3E;border-bottom:2px solid #B8935A;padding-bottom:8px;">
          Nouveau profil de formation — ${esc(d.prenom)} ${esc(d.nom)}
        </h1>

        ${section("À propos", [
          row("Prénom", d.prenom),
          row("Nom", d.nom),
          row("Email", d.email),
          row("Téléphone", d.telephone),
          row("Langue maternelle", d.langue_maternelle),
          row("Pays de résidence", d.pays_residence),
        ].join(""))}

        ${section("Niveau actuel", [
          row("Niveau CEFR", d.niveau_cefr),
          row("Compétences les plus faibles", d.competences_faibles),
          row("Dernière utilisation régulière", d.derniere_utilisation),
        ].join(""))}

        ${section("Objectifs et besoins", [
          row("Contexte principal", d.contexte_principal),
          row("Objectifs", d.objectifs),
          row("Échéance", d.echeance),
          row("Notes objectifs", d.notes_objectifs),
        ].join(""))}

        ${section("Format et disponibilités", [
          row("Format de séance", d.format_seance),
          row("Type de séance", d.type_seance),
          row("Heures par semaine", d.heures_par_semaine),
          row("Créneaux préférés", d.creneaux_preferes),
          row("Date de démarrage", d.date_demarrage),
        ].join(""))}

        ${section("Derniers détails", [
          row("Source", d.source),
          row("Expérience de formation", d.experience_formation),
          row("Style d'enseignement", d.style_enseignement),
          row("Notes finales", d.notes_finales),
        ].join(""))}

        <p style="color:#6b7280;font-size:12px;margin-top:24px;">
          Soumis depuis antonyaddy.com/questionnaire
        </p>
      </div>
    `;

    const result = await resend.emails.send({
      from: `Questionnaire <contact@antonyaddy.com>`,
      to: ["formations@antonyaddy.com"],
      reply_to: d.email,
      subject: `Nouveau profil de formation — ${d.prenom} ${d.nom}`,
      html,
    });

    console.log("Questionnaire email response:", result);

    if (result?.error) {
      console.error("Resend questionnaire error:", result.error);
      return new Response(
        JSON.stringify({
          success: false,
          error: result.error?.message || "Email sending failed. Please try again later.",
        }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    console.error("send-questionnaire-email error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500, headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
