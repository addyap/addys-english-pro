import React, { useMemo } from 'react';
import { YEARS_OF_EXPERIENCE, EXPERIENCE_FLOOR, getCurrentMonthYearFR } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, Headphones, Sparkles, MessageCircle, Mail, ArrowRight, Handshake, Mic, PenTool, UserCheck, Search, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';

import { trackEvent } from '@/lib/analytics';
import { WHATSAPP_PREFILLED_URL } from '@/lib/whatsapp';


// Stats are aligned with the single source of truth: the anglaisadistance.fr
// exercise platform itself advertises 700+ interactive exercises. Keep this
// number consistent across both sites — bump in lockstep when the platform's
// public count changes.
const EXERCISE_COUNTS = {
  total: 700,
};

// Client logos data for lazy carousel
const CLIENT_LOGOS = [
  { src: "/lovable-uploads/a3da9e3b-1f6c-447a-b308-2ca44d071c67.png", alt: "Logo IGY Vieux-Port de Cannes, partenaire formation anglais", name: "IGY Vieux-Port de Cannes" },
  { src: "/lovable-uploads/694fcb0f-d52b-44f3-8cbc-6c1a051e416b.webp", alt: "Logo ITEC, école partenaire pour formations d'anglais", name: "ITEC" },
  { src: "/lovable-uploads/6668f20c-7d63-477f-a5be-856e631eaaef.webp", alt: "Logo ESCCOM, école de commerce partenaire formations anglais", name: "ESCCOM" },
  { src: "/lovable-uploads/69034832-a004-43a5-b367-f4726a4d126a.webp", alt: "Logo Ingeneria Project, entreprise partenaire pour formations d'anglais professionnel", name: "Ingeneria" },
  { src: "/lovable-uploads/edj-nice-logo.webp", alt: "Logo EDJ Nice, L'école du journalisme, partenaire formation anglais", name: "EDJ Nice" },
];

// Single consolidated JSON-LD @graph for the homepage. Replaces the previous
// 9 separate blocks (Organization ×2, WebSite ×2, Person ×2, ProfessionalService
// ×2, FAQPage) that redundantly re-declared the same business, address and
// service areas. One canonical business node (ProfessionalService — a
// LocalBusiness/Organization subtype, so no separate Organization node is
// needed), one WebSite, one Person, one FAQPage, linked by @id. Every real fact
// from the old markup is preserved; only duplicates are removed. Conflicts were
// resolved to the real value: email formations@ (not the placeholder contact@),
// logo /icon-512.png and image /social-preview.jpg (both real images; the old
// /og/antonyaddy-card.png 404s and /assets/logo-512.png was a text stub).
const HOME_JSONLD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.antonyaddy.com/#business",
      name: "Antony Addy",
      alternateName: "Antony Addy — English Training",
      description: "Services de formation en anglais professionnel, coaching linguistique et cours particuliers dispensés par un formateur natif britannique certifié FPA",
      slogan: "Formations claires, flexibles et efficaces en anglais professionnel",
      url: "https://www.antonyaddy.com",
      logo: "https://www.antonyaddy.com/icon-512.png",
      image: "https://www.antonyaddy.com/social-preview.jpg",
      telephone: "+33649829826",
      email: "formations@antonyaddy.com",
      priceRange: "$$",
      inLanguage: "fr",
      address: {
        "@type": "PostalAddress",
        "@id": "https://www.antonyaddy.com/#address",
        streetAddress: "135 rue Henri Vadon",
        addressLocality: "Fréjus",
        postalCode: "83600",
        addressRegion: "Provence-Alpes-Côte d'Azur",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Var" },
        { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
        { "@type": "Country", name: "France" },
        "Worldwide (remote)",
      ],
      availableLanguage: ["fr", "en"],
      serviceType: [
        "Formation d'anglais professionnel",
        "Coaching linguistique",
        "Cours particuliers d'anglais",
      ],
      availableChannel: [
        { "@type": "ServiceChannel", serviceType: "En présentiel", availableLanguage: ["fr", "en"] },
        { "@type": "ServiceChannel", serviceType: "À distance", availableLanguage: ["fr", "en"] },
      ],
      founder: { "@id": "https://www.antonyaddy.com/#antony-addy" },
      sameAs: [
        "https://www.linkedin.com/in/antonyaddy",
        "https://twitter.com/antonyaddy",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.antonyaddy.com/#antony-addy",
      name: "Antony Addy",
      jobTitle: "Formateur Professionnel d'Adultes en Anglais",
      description: "Spécialiste en anglais professionnel depuis 2017, formations pour particuliers, professionnels et centres de formation",
      url: "https://www.antonyaddy.com",
      image: "https://www.antonyaddy.com/social-preview.jpg",
      knowsLanguage: ["fr", "en"],
      address: { "@id": "https://www.antonyaddy.com/#address" },
      worksFor: { "@id": "https://www.antonyaddy.com/#business" },
      sameAs: [
        "https://www.linkedin.com/in/antonyaddy",
        "https://twitter.com/antonyaddy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.antonyaddy.com/#website",
      name: "Antony Addy — Formateur d'anglais",
      url: "https://www.antonyaddy.com",
      description: "Formations d'anglais professionnel en présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde",
      inLanguage: "fr",
      publisher: { "@id": "https://www.antonyaddy.com/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.antonyaddy.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.antonyaddy.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Où intervient Antony Addy pour les formations d'anglais ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco) et à distance partout en France et dans le monde.",
          },
        },
      ],
    },
  ],
};

const Home = () => {
  useScrollTracking('home');
  useTimeTracking('home');

  const features = [{
    icon: Globe,
    title: 'Formateur britannique natif',
    description: 'Prononciation authentique, expressions naturelles et compréhension culturelle d\'un anglophone de naissance'
  }, {
    icon: Target,
    title: 'Formations orientées résultats',
    description: 'Objectifs concrets : réunions, présentations, emails, appels — vous progressez sur ce qui compte pour votre métier'
  }, {
    icon: Award,
    title: 'Certifié Formateur Professionnel d\'Adultes',
    description: 'Pédagogie adaptée aux adultes actifs : méthodes actives, progression mesurable, respect de votre temps'
  }, {
    icon: Users,
    title: `${YEARS_OF_EXPERIENCE}+ ans d'expérience avec des professionnels`,
    description: 'Cadres, indépendants, équipes commerciales — des profils variés avec des besoins exigeants'
  }, {
    icon: Building,
    title: 'Partenaire d\'écoles et d\'entreprises',
    description: 'ESCCOM, ITEC, IGY Vieux-Port, et de nombreux centres de formation me font confiance'
  }, {
    icon: CheckCircle,
    title: 'Présentiel ou distanciel, selon vos contraintes',
    description: 'Var et Alpes-Maritimes en face à face, toute la France et le monde à distance — flexibilité totale'
  }];

  const services = [{
    icon: Building,
    title: 'Formations en Entreprise',
    description: 'Sessions personnalisées pour renforcer les compétences linguistiques de vos équipes (anglais professionnel, techniques, ou sectoriels).'
  }, {
    icon: Briefcase,
    title: 'Formations Individuelles',
    description: 'Parcours personnalisés adaptés à vos objectifs individuels et votre rythme d\'apprentissage.'
  }, {
    icon: Target,
    title: 'Sous-traitance pour organismes de formation',
    description: 'J\'interviens comme formateur pour des organismes et centres de formation partenaires, dans le cadre de leurs propres dispositifs.'
  }, {
    icon: Users,
    title: 'Reconversion & recherche d\'emploi',
    description: 'Formations pour les personnes en reconversion ou en recherche d\'emploi souhaitant valoriser leur anglais professionnel.'
  }, {
    icon: GraduationCap,
    title: 'Formations Bachelor & Master',
    description: 'Soutien aux étudiants et alternants pour maîtriser l\'anglais académique et professionnel, en formation continue.'
  }, {
    icon: Settings,
    title: 'Préparation aux certifications',
    description: 'Préparation ciblée aux certifications d\'anglais (Cambridge, TOEIC, etc.) selon vos objectifs.'
  }];

  const clientCategories = [{
    icon: Building,
    title: 'Entreprises'
  }, {
    icon: GraduationCap,
    title: 'Organismes de formation'
  }, {
    icon: School,
    title: 'Écoles de Commerce'
  }, {
    icon: BookOpen,
    title: 'Écoles privées spécialisées'
  }, {
    icon: University,
    title: 'Universités'
  }, {
    icon: Globe,
    title: 'Écoles de langues'
  }];

  return <>
      <SEOHead 
        title="Cours d'anglais professionnel — Var & Alpes-Maritimes"
        description="Cours d'anglais professionnel avec un formateur britannique certifié FPA, pour entreprises, cadres et particuliers. Var, Alpes-Maritimes ou à distance."
        canonicalUrl="https://www.antonyaddy.com/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified="2026-05-24T10:00:00+01:00"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Antony Addy, formateur d'anglais professionnel certifié FPA"
        keywords={["formateur anglais", "formation anglais professionnel", "formateur FPA", "cours anglais adultes", "Var", "Alpes-Maritimes", "Côte d'Azur", "Fréjus", "Saint-Raphaël", "Nice", "Cannes", "Antibes", "Sophia Antipolis", "Monaco", "anglais à distance", "formateur britannique", "anglais entreprises", "anglais cadres", "anglais étudiants"]}
        jsonLd={HOME_JSONLD_GRAPH}
      />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50">
        Aller au contenu principal
      </a>



      {/* Main brand hero — service-first positioning */}
      <OptimizedHero />

      {/* Trust / authority strip — instant credibility under the hero */}
      <section className="bg-background py-6 sm:py-8 border-b border-border" aria-label="Indicateurs de confiance">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">{YEARS_OF_EXPERIENCE}+</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Années d'expérience</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">500+</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Apprenants accompagnés</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">FPA</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Certifié depuis 2017</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">24h</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Réponse garantie</p>
          </div>
        </div>
        <p className="max-w-4xl mx-auto px-4 mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
          Particuliers, salariés, étudiants (BTS, Bachelor, Master), cadres et équipes : préparation aux entretiens, examens, réunions et présentations en anglais.
        </p>
      </section>

      {/* SEO: Crawlable introductory text for search engines */}
      <section className="bg-muted py-6 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Antony Addy propose des <strong className="text-primary">formations d'anglais pour adultes</strong> adaptées aux professionnels, 
            en présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco) ou à distance partout en France et dans le monde. 
            Britannique natif basé à Fréjus, certifié Formateur Professionnel d'Adultes depuis 2017 et fort de plus de {EXPERIENCE_FLOOR} ans d'enseignement (notamment à l'EDJ Nice), il accompagne particuliers, 
            cadres, entreprises et centres de formation dans l'amélioration de leurs compétences en anglais professionnel.{' '}
            <Link to="/offres-de-formation" className="text-accent hover:underline font-medium">Découvrir les formations</Link>{' • '}
            <Link to="/contact" className="text-accent hover:underline font-medium">Demander un devis gratuit</Link>
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Qui je suis Section - Updated with split layout */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-heading">Votre formateur</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png" 
                    alt="Antony Addy animant une formation en anglais professionnel avec des apprenants adultes" 
                    className="w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200" 
                    width="350" 
                    height="350"
                    loading="eager"
                    decoding="async"
                    // @ts-expect-error - fetchpriority is valid HTML but not typed in React 18
                    fetchpriority="high"
                  />
                  <p className="text-sm text-muted-foreground mt-3 text-center lg:text-left font-body italic">
                    En formation avec des professionnels
                  </p>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-body">
                  <strong className="text-primary">Antony Addy</strong> — Britannique, certifié{' '}
                  <a 
                    href="https://www.afpa.fr/formation-qualifiante/formateur-professionnel-d-adultes"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Formateur Professionnel d'Adultes
                  </a>{' '}
                  depuis 2017, plus de {EXPERIENCE_FLOOR} ans d'expérience en formation d'anglais.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">
                  J'aide les professionnels à communiquer avec confiance en anglais : réunions, négociations, présentations. Mon approche est directe, bienveillante et adaptée à vos enjeux réels.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-center lg:text-left">
                  <Link to="/qui-je-suis" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
                    En savoir plus sur mon parcours
                  </Link>
                  <a 
                    href="https://www.linkedin.com/in/antonyaddy/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors font-body flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Exercises CTA Banner - More subtle, value-focused */}
        <section className="py-5 sm:py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
                <div className="bg-white/20 rounded-full p-2 sm:p-2.5 animate-pulse shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-base sm:text-lg flex flex-wrap items-center gap-x-2 gap-y-1 leading-tight">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs sm:text-sm">100% GRATUIT</span>
                    <span>Ressources pédagogiques en accès libre</span>
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">{EXERCISE_COUNTS.total}+ exercices interactifs • Créés par un formateur certifié</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Link
                  to="/test-de-positionnement"
                  onClick={() => trackEvent('home_placement_test_cta_click', { target: '/test-de-positionnement' })}
                  className="bg-white/20 text-white border border-white/30 px-5 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-white/30 transition-all flex items-center gap-2 whitespace-nowrap w-full md:w-auto justify-center"
                >
                  <Zap className="h-4 w-4" />
                  Test de positionnement
                </Link>
                <a
                  href="https://anglaisadistance.fr/grammaire-essentielle/contrastes"
                  target="_blank"
                  rel="noopener"
                  className="bg-white text-emerald-700 px-5 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-white/90 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 w-full md:w-auto justify-center"
                >
                  Commencer maintenant ↗
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Questionnaire CTA — qualified-lead capture */}
        <section className="py-10 bg-background border-b border-border" aria-labelledby="questionnaire-cta-heading">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5 font-body">Première étape</p>
                <h2 id="questionnaire-cta-heading" className="text-xl md:text-2xl font-bold text-primary font-heading mb-2">
                  Commencez par évaluer vos besoins
                </h2>
                <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                  Un questionnaire de 5 minutes pour me transmettre votre niveau, vos objectifs et vos contraintes. Je vous réponds avec une proposition adaptée.
                </p>
              </div>
              <Link
                to="/questionnaire"
                onClick={() => trackEvent('home_questionnaire_cta_click', { target: '/questionnaire' })}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body whitespace-nowrap"
              >
                Démarrer le questionnaire
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* AI English Training — positioned as Antony's own training system, not a standalone tool */}
        <section className="py-12 bg-background" aria-labelledby="ai-training-heading">
          <div className="max-w-4xl mx-auto px-4">
            <article className="relative overflow-hidden bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <Sparkles className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                    Ma méthode · Entraînement IA
                  </div>
                  <h2 id="ai-training-heading" className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2">
                    Mon système d'entraînement IA pour l'anglais professionnel
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground/90 font-body mb-3 italic">
                    Formateur Professionnel d'Adultes certifié depuis 2017 · Coaching structuré · Approche adaptée aux apprenants francophones
                  </p>
                  <p className="text-muted-foreground font-body mb-4">
                    Entraînez-vous avec mon système IA, conçu autour de situations professionnelles réelles : réunions, négociations, entretiens, présentations.
                  </p>
                  <p className="text-sm text-foreground/80 font-body mb-4">
                    Mon système d'entraînement IA combine pédagogie, correction ciblée et mises en situation professionnelles pour développer une communication naturelle et efficace.
                  </p>
                  <ul className="text-sm text-muted-foreground font-body space-y-2 mb-5 list-disc pl-5">
                    <li>Scénarios professionnels réalistes (ACOM, VPL, AD)</li>
                    <li>Feedback et corrections immédiats, adaptés à mon approche pédagogique</li>
                    <li>Adapté à votre niveau, du A1 au C2</li>
                  </ul>
                  <a
                    href="https://anglaisadistance.fr/dialogues"
                    target="_blank"
                    rel="noopener"
                    onClick={() => trackEvent('home_ai_card_cta_click', { target: 'https://anglaisadistance.fr/dialogues' })}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Démarrer avec mon système IA ↗
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground font-body" aria-label="Garanties">
                    <li className="inline-flex items-center gap-1.5"><span className="text-primary" aria-hidden="true">✓</span>Exercices pratiques</li>
                    <li className="inline-flex items-center gap-1.5"><span className="text-primary" aria-hidden="true">✓</span>Feedback personnalisé</li>
                    <li className="inline-flex items-center gap-1.5"><span className="text-primary" aria-hidden="true">✓</span>Progression adaptée à votre niveau</li>
                  </ul>
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-sm text-muted-foreground font-body mb-3">
                      Vous souhaitez un accompagnement plus structuré ? Découvrez mes formations individuelles et professionnelles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <Link
                        to="/offres-de-formation"
                        onClick={() => trackEvent('home_ai_secondary_cta_click', { target: '/offres-de-formation' })}
                        className="inline-flex items-center justify-center gap-2 border border-primary text-primary bg-transparent px-5 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm"
                      >
                        Découvrir mes formations
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => trackEvent('home_ai_secondary_cta_click', { target: '/contact' })}
                        className="inline-flex items-center justify-center gap-2 text-primary px-3 py-3 min-h-[44px] rounded-lg font-semibold hover:underline text-sm"
                      >
                        Me contacter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Features Section - 6 blocks in 2x3 grid */}
        <section className="py-12 sm:py-16 bg-muted" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-center text-primary mb-8 sm:mb-12 font-heading">
              Pourquoi choisir mes formations ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" role="list">
              {features.map((feature, index) => (
                <article key={index} className="text-center p-5 sm:p-6 rounded-lg bg-white hover:shadow-lg transition-shadow" role="listitem">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 text-accent rounded-full mb-3 sm:mb-4" aria-hidden="true">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-heading">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui — per-audience landing page links */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="audience-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="audience-heading" className="text-2xl sm:text-3xl font-bold text-center text-primary mb-3 font-heading">
              Pour qui je travaille
            </h2>
            <p className="text-center text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto">
              Chaque formation est conçue sur mesure. Voici les quatre profils que j'accompagne le plus souvent.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/anglais-entreprise" className="block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Entreprises</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Formations sur-mesure pour vos équipes, encadrées par convention de formation.</p>
                <span className="text-sm font-medium text-accent">En savoir plus →</span>
              </Link>
              <Link to="/anglais-cadres" className="block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Cadres &amp; dirigeants</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Accompagnement individuel et confidentiel autour de vos enjeux professionnels.</p>
                <span className="text-sm font-medium text-accent">En savoir plus →</span>
              </Link>
              <Link to="/anglais-particuliers" className="block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Particuliers</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Cours adaptés à votre niveau, votre rythme, et vos objectifs personnels.</p>
                <span className="text-sm font-medium text-accent">En savoir plus →</span>
              </Link>
              <Link to="/anglais-etudiants" className="block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Étudiants</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Lycéens, étudiants du supérieur, préparation aux examens (TOEIC, Cambridge, bac).</p>
                <span className="text-sm font-medium text-accent">En savoir plus →</span>
              </Link>
            </div>
          </div>
        </section>


        {/* Ils me font confiance Section - Updated with client categories */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">Ils me font confiance</h2>
            
            {/* Client Categories */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {clientCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <category.icon className="h-5 w-5 text-accent mr-2" />
                  <span className="font-medium text-primary text-sm">{category.title}</span>
                </div>
              ))}
            </div>

            {/* Lazy-loaded client logos carousel - fixed height prevents CLS */}
            <div className="min-h-[140px]">
              <LazyClientCarousel logos={CLIENT_LOGOS} />
            </div>
          </div>
        </section>

        {/* Avis Clients Section - Testimonials right after trust signals */}
        <AvisClients />

        <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
              Prêt à progresser ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-body">
              Rejoignez des centaines d'apprenants. Commencez par un exercice gratuit — sans inscription.
            </p>
            <a
              href="https://anglaisadistance.fr/grammaire-essentielle/contrastes"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              Essayer un exercice maintenant ↗
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>


        {/* Contact CTA Section - Conversion-focused, WhatsApp-first */}
        <section className="py-12 sm:py-16 bg-red-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-heading leading-tight">Prêt à améliorer votre anglais professionnel ?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-3 font-body leading-relaxed">
              Expliquez-moi votre objectif, je vous réponds rapidement avec une proposition adaptée.
            </p>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 font-body text-white/90">
              💬 Premier échange gratuit · Sans engagement · Réponse sous 24h
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={WHATSAPP_PREFILLED_URL}
                onClick={() => trackEvent('whatsapp_cta_click', { page: 'Home', location: 'final-cta', prefilled: true })}
                className="bg-white text-red-600 px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 font-body shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter Antony Addy sur WhatsApp (message pré-rempli)"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Contact WhatsApp · Réponse sous 24h
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 font-body"
                aria-label="Aller au formulaire de contact"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                Formulaire de contact
              </Link>
            </div>
            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-white/80 font-body">
              100% personnalisé · Adapté à votre niveau
            </p>
          </div>
        </section>
        
        {/* Footer Authority Links - E-E-A-T Signals */}
        <section className="py-8 bg-muted/50 border-t">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Références officielles</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="https://www.coe.int/en/web/common-european-framework-reference-languages/home" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cadre Européen CECRL ↗</a></li>
                  <li><a href="https://dictionary.cambridge.org/grammar/british-grammar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cambridge Grammar ↗</a></li>
                  <li><a href="https://learnenglish.britishcouncil.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">British Council ↗</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Certifications reconnues</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="https://www.cambridgeenglish.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cambridge English ↗</a></li>
                  <li><a href="https://www.ets.org/toeic.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">TOEIC ↗</a></li>
                  <li><a href="https://www.cambridgeenglish.org/exams-and-tests/linguaskill/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Linguaskill ↗</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dernière mise à jour</h3>
                <p className="text-muted-foreground">{getCurrentMonthYearFR()}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Contenu créé par <a href="https://www.linkedin.com/in/antonyaddy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Antony Addy</a>, formateur certifié FPA.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>;
};

export default Home;
