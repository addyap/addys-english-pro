import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Head as Helmet } from "vite-react-ssg";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { DICT, LANGS, type LangCode, type Dict } from "./questionnaire/i18n";
import SiteLogo from "@/components/SiteLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

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

// ===== Reusable primitives using design tokens =====

function Field({
  label, required, error, htmlFor, children,
}: { label: string; required?: boolean; error?: string; htmlFor?: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor} className="text-sm font-medium text-foreground mb-1.5 block">
        {label}{required && <span className="text-accent ms-0.5">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
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
      className={cn(
        "px-3.5 py-2 rounded-full border text-sm font-body transition-colors",
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-foreground border-border hover:border-primary/50"
      )}
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
      className={cn(
        "text-start p-4 rounded-lg border-2 w-full transition-colors bg-card",
        active ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
      )}
    >
      {icon && <div className="text-2xl mb-1.5">{icon}</div>}
      <div className="font-semibold text-foreground text-sm font-body">{title}</div>
      {subtitle && <div className="text-muted-foreground text-xs mt-1 font-body">{subtitle}</div>}
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
      className={cn(
        "p-3 rounded-lg border-2 text-center transition-colors bg-card",
        active ? "border-accent bg-accent/10" : "border-border hover:border-accent/40"
      )}
    >
      <div className={cn("font-heading text-2xl font-bold leading-none", active ? "text-accent" : "text-primary")}>
        {level}
      </div>
      <div className="text-[11px] text-muted-foreground mt-1 font-body">{desc}</div>
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
  const [emailFailed, setEmailFailed] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const lastSubmitRef = React.useRef<number>(0);
  const MIN_SUBMIT_INTERVAL_MS = 10000;

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  useEffect(() => {
    const prev = document.documentElement.getAttribute("dir");
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    return () => {
      if (prev) document.documentElement.setAttribute("dir", prev);
      else document.documentElement.removeAttribute("dir");
    };
  }, [isRTL]);

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
    // Honeypot — silently abort if filled (bot)
    if (honeypot) {
      setSubmitted(true);
      return;
    }
    // Client-side cooldown
    const now = Date.now();
    if (submitting) return;
    if (now - lastSubmitRef.current < MIN_SUBMIT_INTERVAL_MS) {
      return;
    }
    if (!validateStep(5)) return;
    lastSubmitRef.current = now;
    setSubmitting(true);
    setSubmitError(null);
    setEmailFailed(false);
    try {
      const payload = { ...data, langue_completion: lang };

      const { error: dbError } = await supabase
        .from("reponses_questionnaire")
        .insert(payload as never);
      if (dbError) console.error("DB insert error:", dbError);

      const { error: fnError } = await supabase.functions.invoke(
        "send-questionnaire-email",
        { body: payload },
      );
      if (fnError) {
        console.error("Email function error:", fnError);
        setEmailFailed(true);
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

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-background text-foreground font-body">
      <Helmet
        title={`${t.meta.title} — antonyaddy.com`}
        meta={[
          { name: "robots", content: "noindex,nofollow" },
          { name: "description", content: t.meta.subtitle },
        ]}
      >
        <></>
      </Helmet>

      {/* Top bar: logo + lang switcher */}
      <header className="border-b border-border bg-white">
        <div className="max-w-[760px] mx-auto px-5 py-4 flex justify-between items-center gap-3">
          <Link to="/" aria-label="Antony Addy — accueil" className="flex items-center gap-2 group">
            <SiteLogo height={36} alt="Antony Addy" />
            <span className="font-heading font-bold text-primary text-base group-hover:opacity-80 transition-opacity">
              Antony Addy
            </span>
          </Link>

          <Select value={lang} onValueChange={(v) => setLang(v as LangCode)}>
            <SelectTrigger className="w-auto min-w-[120px] h-9 text-sm" aria-label="Language">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGS.map((l) => (
                <SelectItem key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <main className="max-w-[760px] mx-auto px-5 py-8 sm:py-12">
        {!submitted ? (
          <>
            {/* Title */}
            <div className="mb-7">
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary leading-tight">
                {t.meta.title}
              </h1>
              <p className="text-muted-foreground mt-2.5 text-base leading-relaxed">
                {t.meta.subtitle}
              </p>
            </div>

            {/* Progress */}
            <div className="mb-7">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {tpl(t.progress.step, { n: step, total: TOTAL_STEPS })}
                </span>
                <span className="text-xs text-primary font-semibold">
                  {Math.round((step / TOTAL_STEPS) * 100)}%
                </span>
              </div>
              <Progress value={(step / TOTAL_STEPS) * 100} className="h-2" />
            </div>

            {/* Card */}
            <Card>
              <CardContent className="p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step === 1 && <Step1 t={t} data={data} update={update} errors={errors} />}
                    {step === 2 && <Step2 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                    {step === 3 && <Step3 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                    {step === 4 && <Step4 t={t} data={data} update={update} toggleArr={toggleArr} errors={errors} />}
                    {step === 5 && <Step5 t={t} data={data} update={update} toggleArr={toggleArr} />}
                  </motion.div>
                </AnimatePresence>

                {/* Nav */}
                <div className="mt-7 flex justify-between items-center gap-3 flex-wrap">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={back}
                    disabled={step === 1 || submitting}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t.cta.back}
                  </Button>

                  {step < TOTAL_STEPS ? (
                    <Button type="button" onClick={next}>
                      {t.cta.continue}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="button" onClick={submit} disabled={submitting}>
                      {submitting ? "…" : t.cta.submit}
                    </Button>
                  )}
                </div>

                {submitError && (
                  <p className="text-destructive text-sm mt-3">{submitError}</p>
                )}
              </CardContent>
            </Card>

            <p className="mt-5 text-xs text-muted-foreground text-center leading-relaxed">
              {t.meta.privacy}
            </p>
          </>
        ) : (
          <ThanksScreen t={t} data={data} emailFailed={emailFailed} />
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
    <h2 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-5">
      {children}
    </h2>
  );
}

function Step1({ t, data, update, errors }: Omit<StepProps, "toggleArr">) {
  const s1 = t.step1;
  return (
    <>
      <StepHeading>{s1.title}</StepHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label={s1.firstName} required error={errors.prenom} htmlFor="q-prenom">
          <Input id="q-prenom" value={data.prenom} onChange={(e) => update("prenom", e.target.value)} />
        </Field>
        <Field label={s1.lastName} required error={errors.nom} htmlFor="q-nom">
          <Input id="q-nom" value={data.nom} onChange={(e) => update("nom", e.target.value)} />
        </Field>
      </div>
      <Field label={s1.email} required error={errors.email} htmlFor="q-email">
        <Input id="q-email" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
      </Field>
      <Field label={s1.phone} htmlFor="q-tel">
        <Input id="q-tel" value={data.telephone} onChange={(e) => update("telephone", e.target.value)} />
      </Field>
      <Field label={s1.nativeLang}>
        <Select value={data.langue_maternelle} onValueChange={(v) => update("langue_maternelle", v)}>
          <SelectTrigger><SelectValue placeholder={s1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s1.natives) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field label={s1.country}>
        <Select value={data.pays_residence} onValueChange={(v) => update("pays_residence", v)}>
          <SelectTrigger><SelectValue placeholder={s1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s1.countries) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
        <div className="grid grid-cols-3 gap-2">
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
        <div className="flex flex-wrap gap-2">
          {(Object.entries(s2.weakAreasOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.competences_faibles.includes(v)} onClick={() => toggleArr("competences_faibles", v)}>
              {v}
            </Chip>
          ))}
        </div>
      </Field>

      <Field label={s2.lastUse}>
        <Select value={data.derniere_utilisation} onValueChange={(v) => update("derniere_utilisation", v)}>
          <SelectTrigger><SelectValue placeholder={t.step1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s2.lastUseOpts) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
        <div className="flex flex-wrap gap-2">
          {(Object.entries(s3.goalsOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.objectifs.includes(v)} onClick={() => toggleArr("objectifs", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s3.deadline}>
        <Select value={data.echeance} onValueChange={(v) => update("echeance", v)}>
          <SelectTrigger><SelectValue placeholder={t.step1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s3.deadlineOpts) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label={s3.notes} htmlFor="q-notes-objectifs">
        <Textarea
          id="q-notes-objectifs"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {(Object.entries(s4.formats) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.format_seance === v} onClick={() => update("format_seance", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={s4.sessionType}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {(Object.entries(s4.sessionTypes) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.type_seance === v} onClick={() => update("type_seance", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={tpl(s4.hoursPerWeek, { n: data.heures_par_semaine })}>
        <Slider
          min={1}
          max={10}
          step={1}
          value={[data.heures_par_semaine]}
          onValueChange={(v) => update("heures_par_semaine", v[0] ?? 1)}
          className="mt-2"
        />
      </Field>

      <Field label={s4.slots}>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(s4.slotsOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.creneaux_preferes.includes(v)} onClick={() => toggleArr("creneaux_preferes", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s4.startDate}>
        <Select value={data.date_demarrage} onValueChange={(v) => update("date_demarrage", v)}>
          <SelectTrigger><SelectValue placeholder={t.step1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s4.startDateOpts) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
        <Select value={data.source} onValueChange={(v) => update("source", v)}>
          <SelectTrigger><SelectValue placeholder={t.step1.chooseOption} /></SelectTrigger>
          <SelectContent>
            {(Object.entries(s5.sourceOpts) as [string, string][]).map(([k, v]) => (
              <SelectItem key={k} value={v}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label={s5.pastExperience}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {(Object.entries(s5.pastExperienceOpts) as [string, string][]).map(([k, v]) => (
            <CardChoice key={k} active={data.experience_formation === v} onClick={() => update("experience_formation", v)} title={v} />
          ))}
        </div>
      </Field>

      <Field label={s5.teachingStyle}>
        <div className="flex flex-wrap gap-2">
          {(Object.entries(s5.teachingStyleOpts) as [string, string][]).map(([k, v]) => (
            <Chip key={k} active={data.style_enseignement.includes(v)} onClick={() => toggleArr("style_enseignement", v)}>{v}</Chip>
          ))}
        </div>
      </Field>

      <Field label={s5.notes} htmlFor="q-notes-finales">
        <Textarea
          id="q-notes-finales"
          value={data.notes_finales}
          onChange={(e) => update("notes_finales", e.target.value)}
        />
      </Field>

      <p className="text-xs text-muted-foreground mt-2">{s5.privacy}</p>
    </>
  );
}

// =============== THANKS SCREEN ===============

function ThanksScreen({ t, data, emailFailed }: { t: Dict; data: FormData; emailFailed?: boolean }) {
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className="w-[72px] h-[72px] rounded-full bg-accent/10 text-accent inline-flex items-center justify-center mb-4 border-2 border-accent">
        <CheckCircle2 size={36} />
      </div>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-2">
        {tpl(t.thanks.title, { name: data.prenom })}
      </h1>
      {emailFailed ? (
        <div className="mx-auto max-w-[540px] mb-7">
          <p className="text-destructive text-base leading-relaxed">
            {t.thanks.subtitleEmailFailed}
          </p>
          <p className="mt-2">
            <a
              href="https://wa.me/33649829826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
            >
              WhatsApp →
            </a>
          </p>
        </div>
      ) : (
        <p className="text-muted-foreground text-base leading-relaxed mx-auto max-w-[540px] mb-7">
          {t.thanks.subtitle}
        </p>
      )}

      <Card className="text-start">
        <CardContent className="p-6">
          <h2 className="font-heading text-xl font-bold text-primary mb-4">
            {t.thanks.summary}
          </h2>
          <dl className="m-0">
            {rows.map(([k, v], i) => (
              <div
                key={i}
                className={cn(
                  "grid grid-cols-[1fr_1.5fr] gap-3 py-2.5",
                  i < rows.length - 1 && "border-b border-border"
                )}
              >
                <dt className="text-sm text-muted-foreground font-medium">{k}</dt>
                <dd className="text-sm text-foreground m-0">{v}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      <p className="mt-6 text-sm text-muted-foreground">
        {t.thanks.contactLabel}:{" "}
        <a href="mailto:formations@antonyaddy.com" className="text-primary font-semibold hover:underline">
          formations@antonyaddy.com
        </a>
      </p>

      <div className="mt-6">
        <Button asChild variant="outline">
          <Link to="/">← antonyaddy.com</Link>
        </Button>
      </div>
    </motion.div>
  );
}
