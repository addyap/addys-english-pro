import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { DICT, LANGS, type LangCode, type Dict } from "./questionnaire/i18n";

const STORAGE_KEY = "questionnaire_lang";
const TOTAL_STEPS = 5;

type FormData = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  langue_maternelle: string;
  pays_residence: string;
  niveau_cefr: string;
  competences_faibles: string[];
  derniere_utilisation: string;
  contexte_principal: string;
  objectifs: string[];
  echeance: string;
  notes_objectifs: string;
  format_seance: string;
  type_seance: string;
  heures_par_semaine: number;
  creneaux_preferes: string[];
  date_demarrage: string;
  source: string;
  experience_formation: string;
  style_enseignement: string[];
  notes_finales: string;
};

const emptyForm: FormData = {
  prenom: "", nom: "", email: "", telephone: "",
  langue_maternelle: "", pays_residence: "",
  niveau_cefr: "", competences_faibles: [], derniere_utilisation: "",
  contexte_principal: "", objectifs: [], echeance: "", notes_objectifs: "",
  format_seance: "", type_seance: "", heures_par_semaine: 2,
  creneaux_preferes: [], date_demarrage: "",
  source: "", experience_formation: "", style_enseignement: [], notes_finales: "",
};

const tpl = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));

// ===== Reusable styled primitives (page-local; use semantic colors via inline style) =====
const COLORS = {
  bg: "#F5F0E8",
  text: "#1A1612",
  gold: "#B8935A",
  forest: "#2C4A3E",
  border: "#E5DFD3",
  cardBg: "#FFFFFF",
  muted: "#6B6357",
  error: "#B23A3A",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  border: `1px solid ${COLORS.border}`,
  borderRadius: 8,
  background: COLORS.cardBg,
  color: COLORS.text,
  fontFamily: "DM Sans, system-ui, sans-serif",
  fontSize: 15,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: COLORS.text,
  marginBottom: 6,
};

function Field({
  label, required, error, children,
}: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelStyle}>
        {label}{required && <span style={{ color: COLORS.gold }}> *</span>}
      </label>
      {children}
      {error && <p style={{ color: COLORS.error, fontSize: 12, marginTop: 4 }}>{error}</p>}
    </div>
  );
}

function Chip({
  active, onClick, children,
}: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 14px",
        borderRadius: 999,
        border: `1px solid ${active ? COLORS.forest : COLORS.border}`,
        background: active ? COLORS.forest : COLORS.cardBg,
        color: active ? "#fff" : COLORS.text,
        fontSize: 13,
        fontFamily: "DM Sans, system-ui, sans-serif",
        cursor: "pointer",
        transition: "all .15s",
      }}
    >
      {children}
    </button>
  );
}

function CardChoice({
  active, onClick, title, subtitle, icon,
}: { active: boolean; onClick: () => void; title: string; subtitle?: string; icon?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "start",
        padding: 16,
        borderRadius: 12,
        border: `1.5px solid ${active ? COLORS.forest : COLORS.border}`,
        background: active ? "rgba(44,74,62,0.06)" : COLORS.cardBg,
        cursor: "pointer",
        transition: "all .15s",
        width: "100%",
      }}
    >
      {icon && <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>}
      <div style={{ fontWeight: 600, color: COLORS.text, fontSize: 14 }}>{title}</div>
      {subtitle && <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 4 }}>{subtitle}</div>}
    </button>
  );
}

function CefrButton({
  level, desc, active, onClick,
}: { level: string; desc: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "14px 8px",
        borderRadius: 10,
        border: `1.5px solid ${active ? COLORS.gold : COLORS.border}`,
        background: active ? "rgba(184,147,90,0.1)" : COLORS.cardBg,
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 26, fontWeight: 700, color: active ? COLORS.gold : COLORS.forest, lineHeight: 1 }}>
        {level}
      </div>
      <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 4 }}>{desc}</div>
    </button>
  );
}

// ===================================================================

export default function Questionnaire() {
  const [lang, setLang] = useState<LangCode>(() => {
    if (typeof window === "undefined") return "fr";
    const stored = localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (stored && DICT[stored]) return stored;
    return "fr";
  });
  const t: Dict = DICT[lang];
  const isRTL = useMemo(() => LANGS.find((l) => l.code === lang)?.rtl ?? false, [lang]);

  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Persist lang + apply dir
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
  }, [lang]);

  useEffect(() => {
    // Apply RTL only while this page is mounted
    const prev = document.documentElement.getAttribute("dir");
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    return () => {
      if (prev) document.documentElement.setAttribute("dir", prev);
      else document.documentElement.removeAttribute("dir");
    };
  }, [isRTL]);

  // Inject Google Fonts once
  useEffect(() => {
    const id = "questionnaire-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,700;1,500&family=DM+Sans:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleArr = (key: keyof FormData, val: string) => {
    setData((d) => {
      const arr = (d[key] as string[]) ?? [];
      const next = arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];
      return { ...d, [key]: next as never };
    });
  };

  const validateStep = (s: number): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!data.prenom.trim()) e.prenom = t.errors.required;
      if (!data.nom.trim()) e.nom = t.errors.required;
      if (!data.email.trim()) e.email = t.errors.required;
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = t.errors.email;
    }
    if (s === 2) {
      if (!data.niveau_cefr) e.niveau_cefr = t.errors.required;
    }
    if (s === 3) {
      if (!data.contexte_principal) e.contexte_principal = t.errors.required;
    }
    if (s === 4) {
      if (!data.format_seance) e.format_seance = t.errors.required;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    setStep((s) => Math.max(1, s - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async () => {
    if (!validateStep(5)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const payload = { ...data, langue_completion: lang };

      // 1) Insert in DB (non-blocking for email — but we still try)
      const { error: dbError } = await supabase
        .from("reponses_questionnaire")
        .insert(payload as never);
      if (dbError) console.error("DB insert error:", dbError);

      // 2) Notification email
      const { error: fnError } = await supabase.functions.invoke(
        "send-questionnaire-email",
        { body: payload },
      );
      if (fnError) {
        console.error("Email function error:", fnError);
        // If both DB succeeded? Still show success if DB worked. Otherwise fail.
        if (dbError) throw new Error("submit failed");
      }

      setSubmitted(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setSubmitError(t.errors.submit);
    } finally {
      setSubmitting(false);
    }
  };

  // ============ Render ============
  const fontFamily =
    lang === "ar"
      ? "'Noto Sans Arabic', 'DM Sans', system-ui, sans-serif"
      : lang === "zh"
      ? "'Noto Sans SC', 'DM Sans', system-ui, sans-serif"
      : "'DM Sans', system-ui, sans-serif";

  const headingFont =
    lang === "ar"
      ? "'Noto Sans Arabic', 'Cormorant Garamond', serif"
      : lang === "zh"
      ? "'Noto Sans SC', 'Cormorant Garamond', serif"
      : "'Cormorant Garamond', Georgia, serif";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Helmet>
        <title>{t.meta.title} — antonyaddy.com</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content={t.meta.subtitle} />
      </Helmet>

      {/* Radial halo decorations */}
      <div aria-hidden style={{
        position: "absolute", top: -200, left: -200, width: 500, height: 500,
        background: "radial-gradient(circle, rgba(184,147,90,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: -200, right: -200, width: 500, height: 500,
        background: "radial-gradient(circle, rgba(44,74,62,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Top bar: signature + lang switcher */}
      <header style={{
        maxWidth: 760, margin: "0 auto", padding: "20px 20px 0",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
      }}>
        <Link
          to="/"
          style={{
            fontFamily: headingFont, fontStyle: "italic",
            fontSize: 16, color: COLORS.text, textDecoration: "none",
            letterSpacing: 0.3,
          }}
        >
          antonyaddy.com
        </Link>

        <select
          aria-label="Language"
          value={lang}
          onChange={(e) => setLang(e.target.value as LangCode)}
          style={{
            padding: "6px 10px",
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            background: COLORS.cardBg,
            color: COLORS.text,
            fontSize: 13,
            fontFamily,
            cursor: "pointer",
          }}
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>
              {l.flag} {l.label}
            </option>
          ))}
        </select>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "32px 20px 80px", position: "relative" }}>
        {!submitted ? (
          <>
            {/* Title */}
            <div style={{ marginBottom: 28 }}>
              <h1 style={{
                fontFamily: headingFont,
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 500,
                lineHeight: 1.15,
                margin: 0,
                color: COLORS.text,
              }}>
                {t.meta.title}
              </h1>
              <p style={{ color: COLORS.muted, marginTop: 10, fontSize: 15, lineHeight: 1.55 }}>
                {t.meta.subtitle}
              </p>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: COLORS.muted, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
                  {tpl(t.progress.step, { n: step, total: TOTAL_STEPS })}
                </span>
                <span style={{ fontSize: 12, color: COLORS.gold, fontWeight: 600 }}>
                  {Math.round((step / TOTAL_STEPS) * 100)}%
                </span>
              </div>
              <div style={{ height: 4, background: COLORS.border, borderRadius: 999, overflow: "hidden" }}>
                <motion.div
                  initial={false}
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  style={{ height: "100%", background: COLORS.gold }}
                />
              </div>
            </div>

            {/* Card */}
            <div style={{
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
              padding: "28px 24px",
              boxShadow: "0 1px 3px rgba(26,22,18,0.04)",
            }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {step === 1 && <Step1 t={t} data={data} update={update} errors={errors} />}
                  {step === 2 && <Step2 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                  {step === 3 && <Step3 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                  {step === 4 && <Step4 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                  {step === 5 && <Step5 t={t} data={data} update={update} toggleArr={toggleArr} />}
                </motion.div>
              </AnimatePresence>

              {/* Nav */}
              <div style={{
                marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap",
              }}>
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 1 || submitting}
                  style={{
                    padding: "10px 18px",
                    border: `1px solid ${COLORS.border}`,
                    background: "transparent",
                    color: COLORS.text,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily,
                    cursor: step === 1 ? "not-allowed" : "pointer",
                    opacity: step === 1 ? 0.4 : 1,
                  }}
                >
                  ← {t.cta.back}
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={next}
                    style={{
                      padding: "12px 22px",
                      background: COLORS.forest,
                      color: "#fff",
                      borderRadius: 8,
                      border: "none",
                      fontWeight: 600,
                      fontSize: 14,
                      fontFamily,
                      cursor: "pointer",
                    }}
                  >
                    {t.cta.continue} →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={submitting}
                    style={{
                      padding: "12px 22px",
                      background: COLORS.gold,
                      color: "#fff",
                      borderRadius: 8,
                      border: "none",
                      fontWeight: 700,
                      fontSize: 14,
                      fontFamily,
                      cursor: submitting ? "wait" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "…" : t.cta.submit}
                  </button>
                )}
              </div>

              {submitError && (
                <p style={{ color: COLORS.error, fontSize: 13, marginTop: 12 }}>{submitError}</p>
              )}
            </div>

            <p style={{ marginTop: 20, fontSize: 12, color: COLORS.muted, textAlign: "center", lineHeight: 1.55 }}>
              {t.meta.privacy}
            </p>
          </>
        ) : (
          <ThanksScreen t={t} data={data} headingFont={headingFont} />
        )}
      </main>
    </div>
  );
}

// =============== STEP COMPONENTS ===============

type StepProps = {
  t: Dict;
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  toggleArr: (key: keyof FormData, val: string) => void;
  errors: Partial<Record<keyof FormData, string>>;
};

function StepHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "Cormorant Garamond, Georgia, serif",
      fontSize: 24, fontWeight: 600, margin: "0 0 20px",
      color: COLORS.text,
    }}>{children}</h2>
  );
}

function Step1({ t, data, update, errors }: Omit<StepProps, "toggleArr">) {
  const s1 = t.step1;
  return (
    <>
      <StepHeading>{s1.title}</StepHeading>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label={s1.firstName} required error={errors.prenom}>
          <input style={inputStyle} value={data.prenom} onChange={(e) => update("prenom", e.target.value)} />
        </Field>
        <Field label={s1.lastName} required error={errors.nom}>
          <input style={inputStyle} value={data.nom} onChange={(e) => update("nom", e.target.value)} />
        </Field>
      </div>
      <Field label={s1.email} required error={errors.email}>
        <input type="email" style={inputStyle} value={data.email} onChange={(e) => update("email", e.target.value)} />
      </Field>
      <Field label={s1.phone}>
        <input style={inputStyle} value={data.telephone} onChange={(e) => update("telephone", e.target.value)} />
      </Field>
      <Field label={s1.nativeLang}>
        <select style={inputStyle} value={data.langue_maternelle} onChange={(e) => update("langue_maternelle", e.target.value)}>
          <option value="">{s1.chooseOption}</option>
          {(Object.entries(s1.natives) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>
      <Field label={s1.country}>
        <select style={inputStyle} value={data.pays_residence} onChange={(e) => update("pays_residence", e.target.value)}>
          <option value="">{s1.chooseOption}</option>
          {(Object.entries(s1.countries) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>
    </>
  );
}

function Step2({ t, data, update, toggleArr, errors }: StepProps) {
  const s2 = t.step2;
  const levels: Array<keyof typeof s2.cefrDesc> = ["A1", "A2", "B1", "B2", "C1", "C2"];
  return (
    <>
      <StepHeading>{s2.title}</StepHeading>
      <Field label={s2.cefr} required error={errors.niveau_cefr}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {levels.map((lvl) => (
            <CefrButton
              key={lvl}
              level={lvl}
              desc={s2.cefrDesc[lvl]}
              active={data.niveau_cefr === lvl}
              onClick={() => update("niveau_cefr", lvl)}
            />
          ))}
        </div>
      </Field>

      <Field label={s2.weakAreas}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(Object.entries(s2.weakAreasOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.competences_faibles.includes(v)} onClick={() => toggleArr("competences_faibles", v)}>
              {v}
            </Chip>
          ))}
        </div>
      </Field>

      <Field label={s2.lastUse}>
        <select style={inputStyle} value={data.derniere_utilisation} onChange={(e) => update("derniere_utilisation", e.target.value)}>
          <option value="">{t.step1.chooseOption}</option>
          {(Object.entries(s2.lastUseOpts) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>
    </>
  );
}

function Step3({ t, data, update, toggleArr, errors }: StepProps) {
  const s3 = t.step3;
  const ctxs = [
    { k: "pro", icon: "💼", v: s3.contexts.pro },
    { k: "travel", icon: "✈️", v: s3.contexts.travel },
    { k: "exam", icon: "📝", v: s3.contexts.exam },
    { k: "social", icon: "🌍", v: s3.contexts.social },
    { k: "academic", icon: "🎓", v: s3.contexts.academic },
    { k: "other", icon: "💡", v: s3.contexts.other },
  ];
  return (
    <>
      <StepHeading>{s3.title}</StepHeading>
      <Field label={s3.context} required error={errors.contexte_principal}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
          {ctxs.map((c) => (
            <CardChoice
              key={c.k}
              active={data.contexte_principal === c.v.t}
              onClick={() => update("contexte_principal", c.v.t)}
              title={c.v.t}
              subtitle={c.v.s}
              icon={c.icon}
            />
          ))}
        </div>
      </Field>

      <Field label={s3.goals}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(Object.entries(s3.goalsOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.objectifs.includes(v)} onClick={() => toggleArr("objectifs", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s3.deadline}>
        <select style={inputStyle} value={data.echeance} onChange={(e) => update("echeance", e.target.value)}>
          <option value="">{t.step1.chooseOption}</option>
          {(Object.entries(s3.deadlineOpts) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>

      <Field label={s3.notes}>
        <textarea
          style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
          value={data.notes_objectifs}
          onChange={(e) => update("notes_objectifs", e.target.value)}
        />
      </Field>
    </>
  );
}

function Step4({ t, data, update, toggleArr, errors }: StepProps) {
  const s4 = t.step4;
  return (
    <>
      <StepHeading>{s4.title}</StepHeading>
      <Field label={s4.format} required error={errors.format_seance}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10 }}>
          {(Object.entries(s4.formats) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.format_seance === v} onClick={() => update("format_seance", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={s4.sessionType}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10 }}>
          {(Object.entries(s4.sessionTypes) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.type_seance === v} onClick={() => update("type_seance", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={tpl(s4.hoursPerWeek, { n: data.heures_par_semaine })}>
        <input
          type="range"
          min={1}
          max={10}
          value={data.heures_par_semaine}
          onChange={(e) => update("heures_par_semaine", Number(e.target.value))}
          style={{ width: "100%", accentColor: COLORS.gold }}
        />
      </Field>

      <Field label={s4.slots}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(Object.entries(s4.slotsOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.creneaux_preferes.includes(v)} onClick={() => toggleArr("creneaux_preferes", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s4.startDate}>
        <select style={inputStyle} value={data.date_demarrage} onChange={(e) => update("date_demarrage", e.target.value)}>
          <option value="">{t.step1.chooseOption}</option>
          {(Object.entries(s4.startDateOpts) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>
    </>
  );
}

function Step5({ t, data, update, toggleArr }: Omit<StepProps, "errors">) {
  const s5 = t.step5;
  return (
    <>
      <StepHeading>{s5.title}</StepHeading>
      <Field label={s5.source}>
        <select style={inputStyle} value={data.source} onChange={(e) => update("source", e.target.value)}>
          <option value="">{t.step1.chooseOption}</option>
          {(Object.entries(s5.sourceOpts) as [string, string][]).map(([k, v]) => (
            <option key={k} value={v}>{v}</option>
          ))}
        </select>
      </Field>

      <Field label={s5.pastExperience}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
          {(Object.entries(s5.pastExperienceOpts) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.experience_formation === v} onClick={() => update("experience_formation", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={s5.teachingStyle}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(Object.entries(s5.teachingStyleOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.style_enseignement.includes(v)} onClick={() => toggleArr("style_enseignement", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s5.notes}>
        <textarea
          style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
          value={data.notes_finales}
          onChange={(e) => update("notes_finales", e.target.value)}
        />
      </Field>

      <p style={{ fontSize: 12, color: COLORS.muted, marginTop: 8 }}>{s5.privacy}</p>
    </>
  );
}

// =============== THANKS SCREEN ===============

function ThanksScreen({ t, data, headingFont }: { t: Dict; data: FormData; headingFont: string }) {
  const rows: Array<[string, string]> = [
    [t.step1.firstName, data.prenom],
    [t.step1.lastName, data.nom],
    [t.step1.email, data.email],
    [t.step1.phone, data.telephone],
    [t.step1.nativeLang, data.langue_maternelle],
    [t.step1.country, data.pays_residence],
    [t.step2.cefr, data.niveau_cefr],
    [t.step2.weakAreas, data.competences_faibles.join(", ")],
    [t.step2.lastUse, data.derniere_utilisation],
    [t.step3.context, data.contexte_principal],
    [t.step3.goals, data.objectifs.join(", ")],
    [t.step3.deadline, data.echeance],
    [t.step3.notes, data.notes_objectifs],
    [t.step4.format, data.format_seance],
    [t.step4.sessionType, data.type_seance],
    [t.step4.hoursPerWeek.replace("{n}", String(data.heures_par_semaine)), ""],
    [t.step4.slots, data.creneaux_preferes.join(", ")],
    [t.step4.startDate, data.date_demarrage],
    [t.step5.source, data.source],
    [t.step5.pastExperience, data.experience_formation],
    [t.step5.teachingStyle, data.style_enseignement.join(", ")],
    [t.step5.notes, data.notes_finales],
  ].filter(([, v]) => v && v.length > 0) as Array<[string, string]>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      style={{ textAlign: "center" }}
    >
      <div style={{
        width: 72, height: 72, borderRadius: 999,
        background: "rgba(184,147,90,0.15)", color: COLORS.gold,
        display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
        border: `1.5px solid ${COLORS.gold}`,
      }}>
        <CheckCircle2 size={36} />
      </div>
      <h1 style={{
        fontFamily: headingFont, fontSize: "clamp(28px, 5vw, 38px)",
        fontWeight: 500, margin: "0 0 8px", color: COLORS.text,
      }}>
        {tpl(t.thanks.title, { name: data.prenom })}
      </h1>
      <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.6, margin: "0 auto 28px", maxWidth: 540 }}>
        {t.thanks.subtitle}
      </p>

      <div style={{
        background: COLORS.cardBg, border: `1px solid ${COLORS.border}`,
        borderRadius: 16, padding: 24, textAlign: "start",
        boxShadow: "0 1px 3px rgba(26,22,18,0.04)",
      }}>
        <h2 style={{
          fontFamily: headingFont, fontSize: 20, fontWeight: 600,
          margin: "0 0 16px", color: COLORS.text,
        }}>
          {t.thanks.summary}
        </h2>
        <dl style={{ margin: 0 }}>
          {rows.map(([k, v], i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1.5fr",
              gap: 12, padding: "10px 0", borderBottom: i < rows.length - 1 ? `1px solid ${COLORS.border}` : "none",
            }}>
              <dt style={{ fontSize: 13, color: COLORS.muted, fontWeight: 500 }}>{k}</dt>
              <dd style={{ fontSize: 14, color: COLORS.text, margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p style={{ marginTop: 24, fontSize: 13, color: COLORS.muted }}>
        {t.thanks.contactLabel}:{" "}
        <a href="mailto:formations@antonyaddy.com" style={{ color: COLORS.forest, fontWeight: 600 }}>
          formations@antonyaddy.com
        </a>
      </p>
    </motion.div>
  );
}
