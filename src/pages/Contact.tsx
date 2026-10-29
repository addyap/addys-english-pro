import React, { useEffect, useState } from 'react';
import PhoneNumber from '@/components/PhoneNumber';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { trackFormSubmission, trackFormError, trackWhatsAppClick, trackEmailClick, trackEvent } from '@/lib/analytics';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { Reveal } from '@/components/motion/Reveal';
import { solveFormChallenge, type PowSolution } from '@/lib/formPow';

const trainingTitles = new Set([
  'Anglais général',
  'Anglais professionnel',
  'Anglais téléphonique et email',
  'Anglais spécialisé',
  'Préparation à une certification',
  'Préparation aux entretiens en anglais'
]);

// The three activities of the site (same order and wording as the menu), plus
// a catch-all. `value` is what reaches the notification email's subject line;
// `key` is what links use to pre-select it: /contact?sujet=anglais|ia|sites.
const SUBJECTS = [
  {
    key: 'anglais',
    value: 'Anglais professionnel',
    label: 'Anglais',
    detail: 'Cours et formations',
    training: true,
    hints: [
      'Votre niveau actuel (ou votre score au test de positionnement)',
      'Votre objectif : réunions, présentations, entretien, certification…',
      'Pour vous ou une équipe, en présentiel (Var, Alpes-Maritimes) ou à distance',
    ],
    placeholder: "Ex. : je dois animer des réunions en anglais d'ici trois mois. Niveau intermédiaire, à distance de préférence.",
  },
  {
    key: 'sites',
    value: 'Sites web & outils',
    label: 'Site web ou outil',
    detail: 'Création sur mesure',
    training: false,
    hints: [
      'Le type de projet : site vitrine, refonte, outil métier ou pédagogique',
      'Les langues dont votre site a besoin',
      "L'échéance souhaitée",
      'Une fourchette de budget, si vous en avez une',
    ],
    placeholder: 'Ex. : un site vitrine de quelques pages pour mon activité, en ligne avant le printemps.',
  },
  {
    key: 'ia',
    value: 'IA générative',
    label: 'IA générative',
    detail: 'Formations et ateliers',
    training: true,
    hints: [
      'Votre métier ou secteur, et ce que vous voulez y gagner',
      'Les outils déjà utilisés (ChatGPT, Copilot…), ou aucun',
      'Seul ou en équipe — et combien de personnes',
    ],
    placeholder: 'Ex. : équipe commerciale de six personnes, nous voulons utiliser ChatGPT pour nos emails et nos propositions.',
  },
  {
    key: 'autre',
    value: 'Autre',
    label: 'Autre demande',
    detail: 'Ou plusieurs à la fois',
    training: false,
    hints: [],
    placeholder: 'Décrivez votre besoin en quelques lignes…',
  },
] as const;

// Heading for visitors who arrive from a service-specific link, so the page
// acknowledges what they chose instead of restarting with the general offer.
const ARRIVAL_INTROS: Record<string, { title: string; lead: string }> = {
  anglais: {
    title: 'Votre projet de formation en anglais',
    lead: "Dites-moi en quelques lignes votre niveau, votre objectif et votre contexte. Je vous réponds sous 24 h ouvrées pour en discuter, puis je vous envoie une proposition adaptée.",
  },
  test: {
    title: 'Votre résultat au test de positionnement',
    lead: "Indiquez votre score et le numéro de la question où vous vous êtes arrêté : je vous confirme votre niveau CECRL indicatif sous 24 h ouvrées et je vous propose un parcours adapté.",
  },
  sites: {
    title: 'Votre projet de site web',
    lead: "Quelques lignes suffisent pour commencer : votre activité, ce que le site doit faire, les langues de vos clients et votre échéance. Je vous réponds sous 24 h ouvrées.",
  },
  ia: {
    title: 'Votre projet de formation en IA générative',
    lead: "Dites-moi votre métier, vos outils actuels et ce que vous voulez y gagner. Je vous réponds sous 24 h ouvrées.",
  },
};

const Contact = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Antony Addy",
    "description": "Contactez Antony Addy pour une formation en anglais, la création d'un site web ou d'un outil sur mesure, ou un atelier d'IA générative",
    "url": "https://www.antonyaddy.com/contact"
  };

  useScrollTracking('/contact');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const whatsappLink = useWhatsAppLink();
  const [arrivalKey, setArrivalKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: '',
    honeypot: '' // Anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitErrorBanner, setSubmitErrorBanner] = useState<string | null>(null);
  const lastSubmitRef = React.useRef<number>(0);
  const MIN_SUBMIT_INTERVAL_MS = 10000; // rate limit: 1 submission per 10s

  // Proof of work (see src/lib/formPow.ts): solved in the background as soon
  // as the form loads, and again after every attempt (each one is single-use).
  const powRef = React.useRef<Promise<PowSolution | null> | null>(null);
  // When the current challenge was requested. The server refuses a solution
  // used less than 2 s after it issued the challenge (MIN_AGE_MS in
  // api/_lib/form-guard.ts), so a very fast send (browser autofill) waits out
  // the difference instead of being rejected as a bot. 3 s leaves room for
  // network delay on the challenge request.
  const powStartedRef = React.useRef<number>(0);
  const POW_MIN_WAIT_MS = 3000;
  const startPow = React.useCallback(() => {
    powStartedRef.current = Date.now();
    powRef.current = solveFormChallenge();
    powRef.current.catch(() => undefined); // surfaced at submit time
    return powRef.current;
  }, []);
  useEffect(() => { startPow(); }, [startPow]);

  // Pre-select from the link the visitor followed: ?sujet=anglais|ia|sites, or
  // ?formation=<title> from the training page. Applied after hydration — the
  // prerendered HTML has no query string, so reading it during render made the
  // server and client trees differ.
  useEffect(() => {
    const requestedTraining = searchParams.get('formation');
    const training = requestedTraining && trainingTitles.has(requestedTraining) ? requestedTraining : null;
    const subject = training ? SUBJECTS[0] : SUBJECTS.find((s) => s.key === searchParams.get('sujet') && s.key !== 'autre');
    if (!subject) return;
    // From the positioning test: a ready-made layout for the result, so the
    // visitor doesn't have to remember what to send.
    const fromTest = subject.key === 'anglais' && searchParams.get('test') === '1';
    setArrivalKey(fromTest ? 'test' : subject.key);
    setFormData((prev) => ({
      ...prev,
      sujet: prev.sujet || subject.value,
      message: prev.message || (training
        ? `Bonjour, je souhaite en savoir plus sur la formation « ${training} ».\n\nMon besoin : `
        : fromTest
          ? "Bonjour, j'ai fait le test de positionnement.\n\nMon score : \nQuestion où je me suis arrêté(e) : \nMon objectif : "
          : ''),
    }));
  }, [searchParams]);

  const selectedSubject = SUBJECTS.find((s) => s.value === formData.sujet);

  // Strip CR/LF to prevent email header injection in subject/from/reply-to
  const stripHeaderChars = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Merci de saisir une adresse email valide';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Merci de saisir une adresse email valide';
    }
    if (!formData.sujet) {
      newErrors.sujet = 'Merci de choisir ce que concerne votre demande';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Merci de décrire votre demande en 20 caractères minimum';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Merci de décrire votre demande en 20 caractères minimum';
    }

    setErrors(newErrors);
    const firstInvalid = ['prenom', 'nom', 'email', 'sujet', 'message'].find((f) => newErrors[f]);
    if (firstInvalid) document.getElementById(firstInvalid)?.focus();
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (spam prevention) — silently reject
    if (formData.honeypot) {
      trackFormError('contact', 'spam_detected');
      setSubmitSuccess(true); // fake success to deter bots
      return;
    }

    // Client-side rate limiting / debounce
    const now = Date.now();
    if (isSubmitting) return;
    if (now - lastSubmitRef.current < MIN_SUBMIT_INTERVAL_MS) {
      trackFormError('contact', 'rate_limited');
      setSubmitErrorBanner('⏳ Merci de patienter quelques secondes avant de renvoyer le formulaire.');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    if (!validateForm()) {
      trackFormError('contact', 'validation_failed');
      return;
    }

    lastSubmitRef.current = now;
    setIsSubmitting(true);
    setSubmitErrorBanner(null);

    try {
      // Normally already solved while the visitor was typing.
      const pow = await (powRef.current ?? startPow()).catch(() => null);
      const wait = powStartedRef.current + POW_MIN_WAIT_MS - Date.now();
      if (wait > 0) await new Promise((resolve) => setTimeout(resolve, wait));
      startPow();

      // Call the Vercel edge function to send email — sanitize header-bearing fields
      const res = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: stripHeaderChars(formData.prenom),
          nom: stripHeaderChars(formData.nom),
          email: stripHeaderChars(formData.email),
          sujet: stripHeaderChars(formData.sujet),
          message: formData.message.trim(),
          _gotcha: formData.honeypot,
          pow
        })
      });
      const data = await res.json().catch(() => null);

      if (data?.error === 'email_domain') {
        trackFormError('contact', 'email_domain');
        setErrors({ email: "Cette adresse ne semble pas pouvoir recevoir d'email. Merci de la vérifier." });
        document.getElementById('email')?.focus();
        lastSubmitRef.current = 0; // let them correct it and resend at once
        return;
      }
      if (data?.error === 'rate_limited') {
        trackFormError('contact', 'rate_limited_server');
        setSubmitErrorBanner('⏳ Plusieurs messages viennent d\'être envoyés depuis votre connexion. Réessayez dans une minute, ou écrivez-moi sur WhatsApp.');
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || 'Erreur lors de l\'envoi');
      }

      trackFormSubmission('contact', true);
      trackEvent('contact_submit_success', { page: 'contact' });

      setSubmitSuccess(true);
      // Captured before the reset below, so the thank-you page can follow the
      // service the visitor asked about.
      const sentSubjectKey = SUBJECTS.find((sub) => sub.value === formData.sujet)?.key ?? 'autre';
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        sujet: '',
        message: '',
        honeypot: ''
      });

      // Scroll to top so the persistent success banner is visible
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

      // Redirect to /thank-you after 2 seconds (banner stays visible until then)
      window.setTimeout(() => {
        navigate(`/thank-you?sujet=${sentSubjectKey}`);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      trackFormError('contact', 'submission_failed');
      trackEvent('contact_submit_error', { page: 'contact', reason: 'submission_failed' });
      const msg = '❌ Une erreur est survenue. Réessayez ou contactez-moi sur WhatsApp.';
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
      setSubmitErrorBanner(msg);
      // Scroll to top so the error banner is visible
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Live inline validation: only re-validate fields that already showed an error
    setErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      const v = value.trim();
      if (name === 'email') {
        if (v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) delete next.email;
      } else if (name === 'message') {
        if (v.length >= 20) delete next.message;
      } else if (name === 'prenom' || name === 'nom' || name === 'sujet') {
        if (v) delete next[name];
      }
      return next;
    });
  };

  return <>
      <SEOHead 
        title="Contact | Anglais, sites web & IA générative"
        description="Contactez Antony Addy pour une formation en anglais, un site web ou un outil numérique, ou un atelier d'IA générative. Réponse sous 24 h ouvrées. Devis gratuit."
        keywords={["contact formateur anglais", "devis création site web", "contact formateur IA", "devis formation", "WhatsApp", "email formations"]}
        canonicalUrl="https://www.antonyaddy.com/contact"
        image="https://www.antonyaddy.com/og/antonyaddy-hub.jpg"
        imageAlt="Antony Addy — formateur d'anglais, créateur de sites web et formateur en IA générative"
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={[contactJsonLd, {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "formations@antonyaddy.com",
            availableLanguage: ["French", "English"],
            areaServed: "FR"
          }
        }]}
      />
      
      <div className="inner-page inner-page--contact min-h-screen bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4">

          {/* Persistent top banners (success / error) */}
          {submitSuccess && (
            <div
              role="status"
              aria-live="polite"
              className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800 flex items-center gap-3 shadow-sm animate-fade-in"
            >
              <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" aria-hidden="true" />
              <span className="font-medium">
                ✅ Message bien reçu ! Je vous réponds sous 24 h ouvrées.
              </span>
            </div>
          )}

          {submitErrorBanner && !submitSuccess && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg text-red-800 flex items-center gap-3 shadow-sm animate-fade-in"
            >
              <AlertCircle className="h-6 w-6 text-red-600 shrink-0" aria-hidden="true" />
              <span className="font-medium">{submitErrorBanner}</span>
            </div>
          )}

          {/* Header */}
          <Reveal as="header" className="inner-intro text-center mb-12">
            <span className="inner-kicker">Contact · Premier échange gratuit</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
              {arrivalKey && ARRIVAL_INTROS[arrivalKey] ? ARRIVAL_INTROS[arrivalKey].title : 'Prenons contact'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {arrivalKey && ARRIVAL_INTROS[arrivalKey]
                ? ARRIVAL_INTROS[arrivalKey].lead
                : "Premier échange gratuit et sans engagement pour parler d'anglais, d'un site web, d'un outil sur mesure ou d'IA"}
            </p>
            <span className="heading-rule" aria-hidden="true" />
          </Reveal>

          <div className="contact-grid grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="contact-form-card bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Envoyez-moi un message
              </h2>
              <p className="text-sm text-muted-foreground mb-6">Tous les champs sont obligatoires ; quelques lignes suffisent.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot field - hidden from real users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-muted-foreground mb-2">
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      id="prenom" 
                      name="prenom" 
                      aria-invalid={!!errors.prenom}
                      aria-describedby={errors.prenom ? 'prenom-error' : undefined}
                      autoComplete="given-name"
                      maxLength={120}
                      value={formData.prenom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.prenom ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.prenom && <p id="prenom-error" className="text-red-700 text-sm mt-1">{errors.prenom}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-muted-foreground mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      aria-invalid={!!errors.nom}
                      aria-describedby={errors.nom ? 'nom-error' : undefined}
                      autoComplete="family-name"
                      maxLength={120}
                      value={formData.nom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.nom ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.nom && <p id="nom-error" className="text-red-700 text-sm mt-1">{errors.nom}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                    maxLength={254}
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.email ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.email && <p id="email-error" className="text-red-700 text-sm mt-1">{errors.email}</p>}
                </div>

                <fieldset aria-describedby={errors.sujet ? 'sujet-error' : undefined}>
                  <legend className="block text-sm font-medium text-muted-foreground mb-2">
                    Votre demande concerne *
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {SUBJECTS.map((subject, i) => {
                      const checked = formData.sujet === subject.value;
                      return (
                        <label
                          key={subject.key}
                          className={`flex cursor-pointer items-start gap-2.5 rounded-lg border p-3 transition-colors focus-within:ring-2 focus-within:ring-accent ${checked ? 'border-primary bg-primary/5' : errors.sujet ? 'border-red-500' : 'border-border hover:border-primary/40'}`}
                        >
                          <input
                            type="radio"
                            id={i === 0 ? 'sujet' : undefined}
                            name="sujet"
                            value={subject.value}
                            checked={checked}
                            onChange={handleChange}
                            className="mt-1 accent-[hsl(var(--primary))]"
                          />
                          <span className="flex flex-col leading-tight">
                            <span className="font-semibold text-foreground">{subject.label}</span>
                            <span className="text-xs text-muted-foreground mt-0.5">{subject.detail}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.sujet && <p id="sujet-error" className="text-red-700 text-sm mt-1">{errors.sujet}</p>}
                </fieldset>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-invalid={!!errors.message}
                    aria-describedby={[selectedSubject?.hints.length ? 'message-hints' : '', errors.message ? 'message-error' : ''].filter(Boolean).join(' ') || undefined}
                    maxLength={5000}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={selectedSubject?.placeholder ?? 'Décrivez votre besoin ou votre projet, et vos objectifs…'}
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.message && <p id="message-error" className="text-red-700 text-sm mt-1">{errors.message}</p>}
                  {selectedSubject && selectedSubject.hints.length > 0 && (
                    <div id="message-hints" className="mt-3 rounded-lg bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Pour une réponse précise, indiquez si possible :</p>
                      <ul className="mt-1.5 list-disc space-y-0.5 pl-5">
                        {selectedSubject.hints.map((hint) => <li key={hint}>{hint}</li>)}
                      </ul>
                      {selectedSubject.training && (
                        <p className="mt-2 text-xs">
                          Financement possible par votre entreprise (sur fonds propres) ou à titre personnel. Non éligible au CPF.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* RGPD art. 13 — information must be given AT the point of
                    collection, not only in the footer policy. */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Les informations saisies ci-dessus sont utilisées uniquement pour répondre à
                  votre demande et, le cas échéant, établir un devis. Elles ne sont ni vendues ni
                  cédées, et sont conservées au maximum 3 ans après notre dernier contact. Vous
                  disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de
                  portabilité, que vous pouvez exercer à{' '}
                  <a href="mailto:formations@antonyaddy.com" className="text-accent underline underline-offset-2 hover:decoration-2">
                    formations@antonyaddy.com
                  </a>
                  . Détails dans la{' '}
                  <Link to="/politique-confidentialite" className="text-accent underline underline-offset-2 hover:decoration-2">
                    politique de confidentialité
                  </Link>
                  .
                </p>

                {errors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {errors.submit}
                  </div>
                )}

                {/* The success confirmation is the banner at the top of the page,
                    which is where the form scrolls to on submit. A second inline
                    copy here meant two different success messages rendered at
                    once, in two different languages. */}

                <button
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg" 
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Envoi en cours…
                    </span>
                  ) : (
                    'Envoyer mon message'
                  )}
                </button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Réponse sous 24 h ouvrées • Présentiel Var & Alpes-Maritimes • Distanciel France entière et international
              </p>
            </div>

            {/* Contact Info */}
            <div className="contact-details space-y-8">
              
              {/* WhatsApp CTA */}
              <div className="contact-whatsapp-card bg-white border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-7 w-7 text-accent mr-3" />
                  <h3 className="text-xl font-semibold text-primary">
                    Contact rapide via WhatsApp
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Écrivez-moi directement sur WhatsApp. Réponse sous 24 h ouvrées.
                </p>
                <a
                  href={whatsappLink}
                  className="inline-flex items-center border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ouvrir WhatsApp pour me contacter (nouvel onglet)"
                  onClick={(e) => {
                    trackWhatsAppClick();
                  }}
                >
                  <MessageSquare className="h-5 w-5 mr-2" aria-hidden="true" />
                  Ouvrir WhatsApp
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:formations@antonyaddy.com"
                        className="text-accent hover:text-accent/80 transition-colors"
                        onClick={trackEmailClick}
                      >
                        formations@antonyaddy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <PhoneNumber className="text-accent hover:text-accent/80 transition-colors" />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Zone d'intervention</p>
                      <p className="text-muted-foreground">
                        Présentiel : Var & Alpes-Maritimes (basé à Fréjus)<br />
                        Distanciel : France entière et international
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Horaires</p>
                      <p className="text-muted-foreground">
                        Lun-Ven : 9h-18h<br />
                        Réponse sous 24 h ouvrées
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust testimonial — placed at point of friction */}
              {/* The real LinkedIn recommendation from Loan MIRMONT, matching
                  /temoignages. It previously showed an English quote attributed to
                  "Loan Mirmont — Student / Professional learner" that exists nowhere
                  else on the site or in his actual recommendation, alongside a
                  5-star graphic that LinkedIn recommendations do not carry. */}
              <figure className="bg-white p-5 rounded-lg border-l-4 border-accent bg-accent/5 rounded-r-md px-4 py-3">
                <blockquote className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
                  «&nbsp;Antony est un super professeur. À l'écoute, dans l'échange et très
                  pédagogue, il s'adapte à nos besoins (anglais travail, anglais courant). Je
                  recommande vivement.&nbsp;»
                </blockquote>
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">Loan MIRMONT</span> — Préparateur
                  physique, gérant de PPR-Formance ·{' '}
                  <Link to="/temoignages" className="text-accent hover:underline">
                    voir les autres recommandations
                  </Link>
                </figcaption>
              </figure>

            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Contact;
