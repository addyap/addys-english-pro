// Email templates for api/send-contact-email.ts.
//
// Table-based layout with inline styles: the only markup Gmail, Outlook and
// Apple Mail all render consistently. No remote images (often blocked by
// default), so the brand is carried by colour and type. Every email also has a
// plain-text part, which mail clients and spam filters both expect.
//
// Underscore folder: Vercel does not turn files under api/_lib into routes.

const SITE = "https://www.antonyaddy.com";
const NOTIFY_TO = "formations@antonyaddy.com";
// The protected hand-off (api/whatsapp.ts): the number never appears in an email.
const WHATSAPP = "https://www.antonyaddy.com/whatsapp";

const C = {
  page: "#f4f2ee",
  card: "#ffffff",
  navy: "#0b1030",
  ink: "#1a1a4d",
  text: "#3f4463",
  muted: "#6b7085",
  line: "#e6e3dc",
  soft: "#f8f6f2",
  accent: "#c8352a",
  gold: "#f6a463",
};
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

export const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Per-activity copy. Keys are the subject values sent by the contact form. */
export const SUBJECTS: Record<string, { label: string; cta: string; url: string }> = {
  "Anglais professionnel": {
    label: "une formation en anglais",
    cta: "Faire le test de positionnement",
    url: `${SITE}/test-de-positionnement`,
  },
  "IA générative": {
    label: "une formation en IA générative",
    cta: "Découvrir les formations IA",
    url: "https://www.antonyaddy.com/ia",
  },
  "Sites web & outils": {
    label: "un site web ou un outil sur mesure",
    cta: "Voir des réalisations",
    url: "https://www.antonyaddy.com/sites-web",
  },
  Autre: {
    label: "votre projet",
    cta: "Parcourir le site",
    url: SITE,
  },
};

const button = (href: string, label: string, bg = C.accent) => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0;">
    <tr><td bgcolor="${bg}" style="border-radius:8px;">
      <a href="${href}" style="display:inline-block;padding:13px 24px;font-family:${FONT};font-size:15px;font-weight:600;line-height:1;color:#ffffff;text-decoration:none;border-radius:8px;">${label}</a>
    </td></tr>
  </table>`;

function layout({ preheader, body, footer }: { preheader: string; body: string; footer: string }) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Antony Addy</title>
</head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${esc(preheader)}&#8199;&#847;&#8199;&#847;&#8199;&#847;&#8199;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.page}" style="background:${C.page};">
  <tr><td align="center" style="padding:32px 12px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
      <tr><td bgcolor="${C.navy}" style="background:${C.navy};border-radius:12px 12px 0 0;padding:22px 32px;">
        <div style="font-family:${FONT};font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.01em;">Antony Addy</div>
        <div style="font-family:${FONT};font-size:12px;font-weight:600;color:${C.gold};letter-spacing:0.12em;text-transform:uppercase;margin-top:4px;">Anglais · IA · Sites web</div>
      </td></tr>
      <tr><td bgcolor="${C.card}" style="background:${C.card};padding:32px;font-family:${FONT};font-size:15px;line-height:1.6;color:${C.text};">
        ${body}
      </td></tr>
      <tr><td bgcolor="${C.soft}" style="background:${C.soft};border-top:1px solid ${C.line};border-radius:0 0 12px 12px;padding:20px 32px;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};">
        ${footer}
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/**
 * Confirmation sent to the address typed into the form.
 *
 * Contains NO text the visitor typed — not the message, not the name: that
 * address is unverified, so any echoed field would let anyone send their own
 * words from antonyaddy.com to a stranger. The activity label is safe: it is
 * picked from SUBJECTS, never taken from the request.
 */
export function confirmationEmail(sujet: string) {
  const s = SUBJECTS[sujet] ?? SUBJECTS.Autre;
  const subject = "Votre message est bien arrivé — Antony Addy";

  const steps = [
    ["Je lis votre demande", "personnellement, et prépare quelques questions si besoin."],
    ["Je vous réponds sous 24 h ouvrées", "par email, pour convenir d'un premier échange gratuit."],
    ["Vous recevez une proposition adaptée", "à vos objectifs, sans engagement."],
  ];

  const html = layout({
    preheader: "J'ai bien reçu votre demande — je vous réponds sous 24 h ouvrées.",
    body: `
      <h1 style="margin:0 0 12px;font-size:24px;line-height:1.25;font-weight:700;color:${C.ink};">Merci pour votre message</h1>
      <p style="margin:0 0 24px;">Bonjour,<br>J'ai bien reçu votre demande concernant <strong style="color:${C.ink};">${esc(s.label)}</strong>. Voici la suite :</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;">
        ${steps.map(([title, text], i) => `
        <tr>
          <td width="36" valign="top" style="padding:0 0 14px;">
            <div style="width:26px;height:26px;line-height:26px;border-radius:13px;background:${C.navy};color:#ffffff;font-size:13px;font-weight:700;text-align:center;">${i + 1}</div>
          </td>
          <td valign="top" style="padding:2px 0 14px;"><strong style="color:${C.ink};">${title}</strong> ${text}</td>
        </tr>`).join("")}
      </table>
      <p style="margin:0 0 14px;">En attendant :</p>
      ${button(s.url, s.cta)}
      <p style="margin:24px 0 0;">Une question urgente ? <a href="${WHATSAPP}" style="color:${C.accent};font-weight:600;">Écrivez-moi sur WhatsApp</a>.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:32px 0 0;border-top:1px solid ${C.line};width:100%;">
        <tr><td style="padding-top:20px;">
          <div style="font-weight:700;color:${C.ink};">Antony Addy</div>
          <div style="color:${C.muted};font-size:13px;">Formateur d'anglais et d'IA générative · Création de sites web</div>
          <div style="font-size:13px;margin-top:6px;"><a href="mailto:${NOTIFY_TO}" style="color:${C.accent};">${NOTIFY_TO}</a> · <a href="${SITE}" style="color:${C.accent};">antonyaddy.com</a></div>
        </td></tr>
      </table>`,
    footer: `Vous recevez cet email parce qu'un message a été envoyé avec cette adresse depuis le formulaire de contact d'<a href="${SITE}" style="color:${C.muted};">antonyaddy.com</a>. Si ce n'est pas vous, ignorez-le simplement : vous ne recevrez rien d'autre.`,
  });

  const text = [
    "Merci pour votre message",
    "",
    "Bonjour,",
    `J'ai bien reçu votre demande concernant ${s.label}. Voici la suite :`,
    "",
    ...steps.map(([title, t], i) => `${i + 1}. ${title} ${t}`),
    "",
    `En attendant : ${s.cta} — ${s.url}`,
    `Une question urgente ? WhatsApp : ${WHATSAPP}`,
    "",
    "Antony Addy",
    "Formateur d'anglais et d'IA générative · Création de sites web",
    `${NOTIFY_TO} · ${SITE}`,
    "",
    "—",
    "Vous recevez cet email parce qu'un message a été envoyé avec cette adresse depuis le formulaire de contact d'antonyaddy.com. Si ce n'est pas vous, ignorez-le simplement.",
  ].join("\n");

  return { subject, html, text };
}

/** Notification sent to Antony. All visitor input is escaped. */
export function notificationEmail(d: { prenom: string; nom: string; email: string; sujet: string; message: string; source?: string }) {
  const received = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full", timeStyle: "short", timeZone: "Europe/Paris",
  }).format(new Date());
  const fullName = `${d.prenom} ${d.nom}`;
  const subject = `Nouvelle demande · ${d.sujet} · ${fullName}`;
  const replyHref = `mailto:${encodeURIComponent(d.email)}?subject=${encodeURIComponent("Re : votre demande — Antony Addy")}`;

  const row = (label: string, value: string) => `
    <tr>
      <td width="110" valign="top" style="padding:9px 0;border-bottom:1px solid ${C.line};color:${C.muted};font-size:13px;">${label}</td>
      <td valign="top" style="padding:9px 0;border-bottom:1px solid ${C.line};color:${C.ink};font-weight:600;">${value}</td>
    </tr>`;

  const html = layout({
    preheader: `${fullName} — ${d.message.slice(0, 110)}`,
    body: `
      <div style="display:inline-block;padding:5px 12px;border-radius:999px;background:#fbe9e7;color:${C.accent};font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">${esc(d.sujet)}</div>
      <h1 style="margin:14px 0 20px;font-size:22px;line-height:1.3;font-weight:700;color:${C.ink};">Nouvelle demande de ${esc(fullName)}</h1>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
        ${row("Nom", esc(fullName))}
        ${row("Email", `<a href="mailto:${encodeURIComponent(d.email)}" style="color:${C.accent};">${esc(d.email)}</a>`)}
        ${row("Activité", esc(d.sujet))}
        ${row("Reçue le", esc(received))}
        ${d.source ? row("Depuis", esc(d.source)) : ""}
      </table>
      <div style="font-size:13px;color:${C.muted};margin:0 0 8px;">Message</div>
      <div style="background:${C.soft};border-left:3px solid ${C.accent};border-radius:0 8px 8px 0;padding:16px 18px;margin:0 0 28px;color:${C.ink};white-space:pre-wrap;">${esc(d.message)}</div>
      ${button(replyHref, `Répondre à ${esc(d.prenom)}`, C.navy)}
      <p style="margin:14px 0 0;font-size:13px;color:${C.muted};">Ou répondez directement à cet email : la réponse part à ${esc(d.email)}.</p>`,
    footer: `Reçu via le formulaire de contact${d.source ? ` de ${esc(d.source)}` : ""}. Le visiteur a reçu un accusé de réception automatique.`,
  });

  const text = [
    `Nouvelle demande · ${d.sujet}`,
    "",
    `Nom : ${fullName}`,
    `Email : ${d.email}`,
    `Activité : ${d.sujet}`,
    `Reçue le : ${received}`,
    ...(d.source ? [`Depuis : ${d.source}`] : []),
    "",
    "Message :",
    d.message,
    "",
    "—",
    `Répondez directement à cet email : la réponse part à ${d.email}.`,
  ].join("\n");

  return { subject, html, text };
}
