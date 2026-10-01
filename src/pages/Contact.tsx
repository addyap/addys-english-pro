import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { trackFormSubmission, trackFormError, trackWhatsAppClick, trackEmailClick, trackEvent } from '@/lib/analytics';
import { useScrollTracking } from '@/hooks/useScrollTracking';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { Reveal } from '@/components/motion/Reveal';

const Contact = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Antony Addy",
    "description": "Contactez Antony Addy pour vos besoins en formation d'anglais professionnel",
    "url": "https://www.antonyaddy.com/contact"
  };

  useScrollTracking('/contact');
  const navigate = useNavigate();
  const whatsappLink = useWhatsAppLink();

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
  const [formRenderedAt] = useState(() => Date.now());

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
      newErrors.sujet = "Merci de choisir l'objet de votre demande";
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Merci de décrire votre demande en 20 caractères minimum';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Merci de décrire votre demande en 20 caractères minimum';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (spam prevention) — silently reject
    if (formData.honeypot) {
      console.log('Spam detected');
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
          renderedAt: formRenderedAt
        })
      });
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || 'Erreur lors de l\'envoi');
      }

      console.log('Contact form submitted successfully:', data);
      trackFormSubmission('contact', true);
      trackEvent('contact_submit_success', { page: 'contact' });

      setSubmitSuccess(true);
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
        navigate('/thank-you');
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
      } else if (name === 'prenom' || name === 'nom') {
        if (v) delete next[name];
      }
      return next;
    });
  };

  return <>
      <SEOHead 
        title="Contact | Anglais, IA générative & création de sites web"
        description="Contactez Antony Addy pour une formation en anglais, une formation en IA générative ou la création d'un site web. Réponse sous 24 h ouvrées par email, WhatsApp ou formulaire. Devis gratuit."
        keywords={["contact formateur anglais", "contact formateur IA", "devis création site web", "devis formation", "WhatsApp", "email formations"]}
        canonicalUrl="https://www.antonyaddy.com/contact"
        image="https://www.antonyaddy.com/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png"
        imageAlt="QR Code LinkedIn pour contacter Antony Addy"
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
      
      <div className="min-h-screen bg-muted py-12">
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
          <Reveal as="header" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Prenons contact
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premier échange gratuit et sans engagement pour définir votre besoin — anglais, IA générative ou création de site web
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
              Formation finançable directement par votre entreprise (convention de formation sur fonds propres)
              ou à titre personnel. Non éligible au CPF.
            </p>
            <span className="heading-rule" aria-hidden="true" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Trust testimonial — placed at point of friction */}
              {/* The real LinkedIn recommendation from Loan MIRMONT, matching
                  /temoignages. It previously showed an English quote attributed to
                  "Loan Mirmont — Student / Professional learner" that exists nowhere
                  else on the site or in his actual recommendation, alongside a
                  5-star graphic that LinkedIn recommendations do not carry. */}
              <figure className="mb-6 border-l-4 border-accent bg-accent/5 rounded-r-md px-4 py-3">
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

              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-moi un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      value={formData.prenom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.prenom ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-muted-foreground mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      value={formData.nom} 
                      onChange={handleChange} 
                      required 
                      className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.nom ? 'border-red-500' : 'border-border'}`}
                    />
                    {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.email ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-muted-foreground mb-2">
                    Objet de votre demande *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg bg-white transition-all focus:ring-2 focus:ring-accent focus:border-transparent ${errors.sujet ? 'border-red-500' : 'border-border'}`}
                  >
                    <option value="" disabled>— Choisissez —</option>
                    <option value="Anglais professionnel">Formation en anglais</option>
                    <option value="IA générative">Formation en IA générative</option>
                    <option value="Création de site web">Création de site web</option>
                    <option value="Autre">Autre</option>
                  </select>
                  {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre besoin ou votre projet, et vos objectifs..."
                    className={`w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-accent focus:border-transparent resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* RGPD art. 13 — information must be given AT the point of
                    collection, not only in the footer policy. */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Les informations saisies ci-dessus sont utilisées uniquement pour répondre à
                  votre demande et, le cas échéant, établir un devis. Elles ne sont ni vendues ni
                  cédées, et sont conservées au maximum 3 ans après notre dernier contact. Vous
                  disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de
                  portabilité, que vous pouvez exercer à{' '}
                  <a href="mailto:formations@antonyaddy.com" className="text-accent hover:underline">
                    formations@antonyaddy.com
                  </a>
                  . Détails dans la{' '}
                  <Link to="/politique-confidentialite" className="text-accent hover:underline">
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
                  aria-label="Envoyer le message de contact"
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
            <div className="space-y-8">
              
              {/* WhatsApp CTA */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-900">
                    Contact rapide via WhatsApp
                  </h3>
                </div>
                <p className="text-green-800 mb-4">
                  Pour une réponse immédiate, contactez-moi directement sur WhatsApp
                </p>
                <a
                  href={whatsappLink || "#"}
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:scale-105 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactez-moi via WhatsApp"
                  onClick={(e) => {
                    if (!whatsappLink) { e.preventDefault(); return; }
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
                      <a
                        href="tel:+33649829826"
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        +33 6 49 82 98 26
                      </a>
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

              {/* WhatsApp QR Code */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contactez-moi sur WhatsApp
                </h3>
                <img src="/lovable-uploads/whatsapp-qr-antony-addy.png" alt="QR Code WhatsApp Business permettant de contacter Antony Addy" className="mx-auto mb-4 max-w-48" width="192" height="192" loading="lazy" />
                <p className="text-sm text-muted-foreground">
                  Scannez ce QR code pour m'écrire directement sur WhatsApp
                </p>
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    className="inline-block mt-4 text-green-700 hover:text-green-800 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ouvrir la conversation WhatsApp (ouvre dans un nouvel onglet)"
                    onClick={trackWhatsAppClick}
                  >
                    Ouvrir WhatsApp →
                  </a>
                )}
              </div>

              {/* LinkedIn QR Code */}
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Connectons-nous sur LinkedIn
                </h3>
                <img src="/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png" alt="QR Code LinkedIn permettant de se connecter au profil d'Antony Addy" className="mx-auto mb-4 max-w-48" width="192" height="192" loading="lazy" />
                <p className="text-sm text-muted-foreground">
                  Scannez ce QR code pour me suivre sur LinkedIn
                </p>
                <a href="https://linkedin.com/in/antonyaddy" className="inline-block mt-4 text-accent hover:text-accent/80 font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:rounded" target="_blank" rel="noopener noreferrer" aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)">
                  Voir mon profil LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Contact;
