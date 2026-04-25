import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, MapPin, Headphones, Sparkles, MessageCircle, Mail, ArrowRight, Handshake, Mic, PenTool, UserCheck, Search } from 'lucide-react';
import SEOHead, { jsonLdWebsite, jsonLdOrganization, jsonLdPerson } from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';
import FloatingExerciseCTA from '@/components/FloatingExerciseCTA';
import { trackEvent } from '@/lib/analytics';


// Accurate exercise counts based on actual data files
const EXERCISE_COUNTS = {
  grammar: 60,        // grammarCategories - 60 lessons
  vocabulary: 150,    // exercises 1-150 in allExercises
  reading: 12,        // readingPassages
  listening: 20,      // listeningExercises  
  dragDrop: 12,       // dragDropExercises
  writing: 9,         // writingExercises
  idioms: 6,          // idiomExercises (6 sets)
  phrasalVerbs: 5,    // phrasalVerbExercises (5 sets)
  collocations: 6,    // collocationExercises (6 sets)
  dictation: 6,       // dictationExercises
  translation: 6,     // translationExercises
  stories: 5,         // interactiveStories
  crossword: 6,       // crosswordExercises
  matching: 6,        // matchingExercises
  dialogue: 6,        // dialogueExercises
  prepositions: 4,    // prepositionExercises
  get total() {
    return this.grammar + this.vocabulary + this.reading + this.listening + 
           this.dragDrop + this.writing + this.idioms + this.phrasalVerbs + 
           this.collocations + this.dictation + this.translation + this.stories +
           this.crossword + this.matching + this.dialogue + this.prepositions;
  },
  get questions() {
    // Rough estimate: 10 questions per exercise on average
    return this.total * 10;
  }
};

// Client logos data for lazy carousel
const CLIENT_LOGOS = [
  { src: "/lovable-uploads/a3da9e3b-1f6c-447a-b308-2ca44d071c67.png", alt: "Logo IGY Vieux-Port de Cannes, partenaire formation anglais", name: "IGY Vieux-Port de Cannes" },
  { src: "/lovable-uploads/694fcb0f-d52b-44f3-8cbc-6c1a051e416b.png", alt: "Logo ITEC, école partenaire pour formations d'anglais", name: "ITEC" },
  { src: "/lovable-uploads/6668f20c-7d63-477f-a5be-856e631eaaef.png", alt: "Logo ESCCOM, école de commerce partenaire formations anglais", name: "ESCCOM" },
  { src: "/lovable-uploads/69034832-a004-43a5-b367-f4726a4d126a.png", alt: "Logo Ingeneria Project, entreprise partenaire pour formations d'anglais professionnel", name: "Ingeneria" },
  { src: "/lovable-uploads/edj-nice-logo.png", alt: "Logo EDJ Nice, L'école du journalisme, partenaire formation anglais", name: "EDJ Nice" },
];

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
    title: '20+ ans d\'expérience avec des professionnels',
    description: 'Cadres, indépendants, équipes commerciales — des profils variés avec des besoins exigeants'
  }, {
    icon: Building,
    title: 'Partenaire d\'écoles et d\'entreprises',
    description: 'ESCCOM, ITEC, IGY Vieux-Port, et de nombreux centres de formation me font confiance'
  }, {
    icon: CheckCircle,
    title: 'Présentiel ou distanciel, selon vos contraintes',
    description: 'Alpes-Maritimes en face à face, toute la France à distance — flexibilité totale'
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
    title: 'Actions de Formation Conventionnées',
    description: 'Interventions via des organismes certifiés pour répondre aux besoins spécifiques des entreprises et institutions.'
  }, {
    icon: Users,
    title: 'Dispositifs d\'Accès à l\'Emploi',
    description: 'Préparation des publics en reconversion dans le cadre des dispositifs pilotés par les OPCO ou France Travail.'
  }, {
    icon: GraduationCap,
    title: 'Formations Bachelor & Master',
    description: 'Soutien aux étudiants et alternants pour maîtriser l\'anglais académique et professionnel, en formation continue.'
  }, {
    icon: Settings,
    title: 'Autres Dispositifs Spécialisés',
    description: 'Interventions via organismes partenaires sur les dispositifs VAE, Agefiph, missions locales, etc.'
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
    icon: MapPin,
    title: 'Centres de formation France Travail'
  }, {
    icon: Globe,
    title: 'Écoles de langues'
  }];

  return <>
      <SEOHead 
        title="Anglais Professionnel | Formateur FPA Certifié"
        description="Formations d'anglais professionnel sur mesure avec un formateur britannique certifié FPA. CPF, entreprises, particuliers. Alpes-Maritimes ou distanciel France."
        canonicalUrl="https://www.antonyaddy.com/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified="2026-03-08T10:00:00+01:00"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        enableOrgJsonLd
        enableWebSiteJsonLd
        imageAlt="Antony Addy, formateur d'anglais professionnel certifié FPA"
        keywords={["formateur anglais", "formation anglais professionnel", "CPF anglais", "formateur FPA", "cours anglais adultes", "Alpes-Maritimes", "formateur britannique"]}
        jsonLd={[
          jsonLdWebsite(),
          jsonLdOrganization(),
          jsonLdPerson(),
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Formation d'anglais professionnel",
            description: "Services de formation en anglais professionnel, coaching linguistique et cours particuliers dispensés par un formateur natif britannique certifié",
            provider: jsonLdOrganization(),
            areaServed: { "@type": "Place", name: "France" },
            serviceType: ["Formation d'anglais professionnel", "Coaching linguistique", "Cours particuliers d'anglais"],
            priceRange: "$$",
            availableChannel: [
              { "@type": "ServiceChannel", serviceType: "En présentiel", availableLanguage: "fr" },
              { "@type": "ServiceChannel", serviceType: "À distance", availableLanguage: "fr" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Où intervient Antony Addy pour les formations d'anglais ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En présentiel dans les Alpes-Maritimes (Cannes, Antibes, Nice, Monaco) et à distance partout en France."
                }
              },
              {
                "@type": "Question",
                name: "Les formations sont-elles éligibles au CPF ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, les formations peuvent être financées via le CPF en passant par des centres de formation certifiés Qualiopi partenaires."
                }
              }
            ]
          }
        ]}
      />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50">
        Aller au contenu principal
      </a>
      {/* Floating CTA for mobile — main free resources */}
      <FloatingExerciseCTA />

      {/* Main brand hero — service-first positioning */}
      <OptimizedHero />

      {/* SEO: Crawlable introductory text for search engines */}
      <section className="bg-muted py-6 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm leading-relaxed font-body">
            Antony Addy propose des <strong className="text-primary">formations d'anglais pour adultes</strong> adaptées aux professionnels, 
            en présentiel dans les Alpes-Maritimes (Cannes, Antibes, Nice, Monaco) ou à distance partout en France. 
            Britannique natif et certifié Formateur Professionnel d'Adultes depuis 2017, il accompagne particuliers, 
            entreprises et centres de formation dans l'amélioration de leurs compétences en anglais professionnel. 
            Formations éligibles CPF via des organismes partenaires certifiés Qualiopi.{' '}
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
                    // @ts-ignore - fetchpriority is valid HTML but not typed in React 18
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
                    href="https://www.afpa.fr/formation/titre-professionnel-formateur-professionnel-adultes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Formateur Professionnel d'Adultes
                  </a>{' '}
                  depuis 2017, plus de 20 ans d'expérience en formation d'anglais.
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
        <section className="py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-2.5 animate-pulse">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-lg flex items-center gap-2">
                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm">100% GRATUIT</span>
                    Ressources pédagogiques en accès libre
                  </p>
                  <p className="text-sm text-white/90">{EXERCISE_COUNTS.total}+ exercices • {EXERCISE_COUNTS.questions.toLocaleString()}+ questions • Créés par un formateur certifié</p>
                </div>
              </div>
              <Link 
                to="/exercices" 
                className="bg-white text-emerald-700 px-5 py-2.5 rounded-lg font-bold hover:bg-white/90 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg hover:scale-105"
              >
                Commencer maintenant
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* AI English Training — supporting feature card */}
        <section className="py-12 bg-background" aria-labelledby="ai-training-heading">
          <div className="max-w-4xl mx-auto px-4">
            <article className="relative overflow-hidden bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shrink-0">
                  <Sparkles className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-2">
                    Nouveauté · 100% gratuit
                  </div>
                  <h2 id="ai-training-heading" className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2">
                    Entraînement à l'anglais avec l'IA
                  </h2>
                  <p className="text-muted-foreground font-body mb-4">
                    Pratiquez l'expression orale, l'écrit, les entretiens et l'anglais professionnel avec un feedback IA instantané — une ressource gratuite pour soutenir votre apprentissage.
                  </p>
                  <Link
                    to="/speaking-practice"
                    onClick={() => trackEvent('home_ai_card_cta_click', { target: '/speaking-practice' })}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Essayer les outils IA
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Features Section - 6 blocks in 2x3 grid */}
        <section className="py-16 bg-muted" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="features-heading" className="text-3xl font-bold text-center text-primary mb-12 font-heading">
              Pourquoi choisir mes formations ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {features.map((feature, index) => (
                <article key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow" role="listitem">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4" aria-hidden="true">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground font-body">{feature.description}</p>
                </article>
              ))}
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

        {/* ──────────────────────────────────────────────────────────────
            AI ENGLISH TRAINING — Positioning block (mobile-first)
            Purpose: make the offer immediately clear in <5 seconds.
            Sections: Promise → Who it's for → How it works → Benefits → Use cases → Trainer → CTA
        ────────────────────────────────────────────────────────────── */}
        <section
          id="ai-english-training"
          aria-labelledby="ai-training-positioning-heading"
          className="py-16 sm:py-20 bg-background border-y border-border"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Promise */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" aria-hidden="true" /> AI English Training
              </span>
              <h2
                id="ai-training-positioning-heading"
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight"
              >
                Parlez anglais avec confiance dans les vraies situations
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Entraînez-vous avec des conversations IA conçues pour des scénarios réels :
                travail, entretiens, ventes et communication quotidienne.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/ressources-gratuites"
                  onClick={() => trackEvent('positioning_cta_click', { target: 'start_practice', location: 'home_positioning_hero' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-sm"
                >
                  <Sparkles className="w-4 h-4" /> Commencer à pratiquer
                </Link>
                <Link
                  to="/contact"
                  onClick={() => trackEvent('positioning_cta_click', { target: 'contact', location: 'home_positioning_hero' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
                >
                  <MessageCircle className="w-4 h-4" /> Contacter Antony
                </Link>
              </div>
            </div>

            {/* Who it's for */}
            <div className="mb-14 sm:mb-16">
              <h3 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6">
                Pour qui&nbsp;?
              </h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                {[
                  {
                    icon: GraduationCap,
                    title: 'Étudiants',
                    desc: 'Préparez-vous aux examens, aux présentations et aux conversations réelles.',
                  },
                  {
                    icon: Briefcase,
                    title: 'Professionnels',
                    desc: 'Améliorez votre anglais pour les réunions, les e-mails et votre carrière.',
                  },
                  {
                    icon: Handshake,
                    title: 'Vente & relation client',
                    desc: 'Maîtrisez l\'anglais pour les interactions clients et les situations commerciales.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-5 sm:p-6 rounded-xl border border-border bg-card hover:shadow-md transition"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-1.5">{title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="mb-14 sm:mb-16">
              <h3 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6">
                Comment ça marche
              </h3>
              <ol className="grid gap-4 sm:gap-6 md:grid-cols-3 list-none">
                {[
                  { n: '1', title: 'Choisissez un scénario', desc: 'Conversation, entretien, vente, présentation…' },
                  { n: '2', title: 'Parlez ou écrivez en anglais', desc: 'Au micro ou au clavier, à votre rythme.' },
                  { n: '3', title: 'Recevez un feedback IA', desc: 'Corrections instantanées et personnalisées.' },
                ].map((step) => (
                  <li
                    key={step.n}
                    className="relative p-5 sm:p-6 rounded-xl bg-muted/40 border border-border"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                        {step.n}
                      </span>
                      <h4 className="font-heading font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-11">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Benefits + Use cases — 2 columns on desktop, stacked on mobile */}
            <div className="grid gap-8 md:grid-cols-2 mb-14 sm:mb-16">
              {/* Benefits */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Pourquoi cet entraînement
                </h3>
                <ul className="space-y-3">
                  {[
                    'Vraie pratique conversationnelle, pas de la théorie',
                    'Feedback personnalisé et instantané',
                    'Pratiquez quand vous voulez, où vous voulez',
                    'Conçu par un vrai formateur d\'anglais',
                    'Support multilingue pour comprendre les retours',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use cases */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Cas d'usage concrets
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: UserCheck, label: 'Entretiens d\'embauche' },
                    { icon: Handshake, label: 'Conversations de vente' },
                    { icon: MessageCircle, label: 'Service client' },
                    { icon: Users, label: 'Réunions & présentations' },
                    { icon: GraduationCap, label: 'Préparation aux examens' },
                    { icon: Mail, label: 'E-mails professionnels' },
                  ].map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* About the trainer — text-only, credibility-focused */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 p-6 sm:p-8 rounded-2xl bg-muted/40 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
                Conçu par un vrai formateur d'anglais
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                AI English Training conçu par <strong className="text-foreground">Antony Addy</strong>,
                formateur d'anglais avec une véritable expérience en classe et auprès de professionnels.
                Approche pédagogique ancrée dans la vie réelle&nbsp;: ce qui marche en cours marche ici.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                  Étudiants &amp; professionnels
                </span>
                <span className="px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                  Formateur Professionnel d'Adultes certifié
                </span>
                <span className="px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                  20+ ans d'expérience
                </span>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Prêt à parler anglais avec confiance&nbsp;?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
                Commencez gratuitement, ou contactez Antony pour une session personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/ressources-gratuites"
                  onClick={() => trackEvent('positioning_cta_click', { target: 'start_free', location: 'home_positioning_final' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-sm"
                >
                  <Sparkles className="w-4 h-4" /> Pratiquer gratuitement
                </Link>
                <a
                  href="https://wa.me/33649829826"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('positioning_cta_click', { target: 'whatsapp', location: 'home_positioning_final' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Contacter via WhatsApp
                </a>
                <Link
                  to="/contact"
                  onClick={() => trackEvent('positioning_cta_click', { target: 'book_session', location: 'home_positioning_final' })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
                >
                  <Mail className="w-4 h-4" /> Réserver une session
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: CLOE Certification Preparation - Featured Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-[15%] w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 left-[10%] w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* NEW badge */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-5 py-2 mb-6 animate-pulse">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Nouveau • Certification professionnelle</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 font-heading bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                Préparation Certification CLOE
              </h2>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto font-body leading-relaxed">
                Préparez-vous <strong className="text-white">gratuitement</strong> à la certification CLOE (Compétences Linguistiques Orales et Écrites) 
                avec des exercices inspirés du format réel de l'examen. <strong className="text-white">Éligible CPF</strong>.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
              <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">90+</p>
                <p className="text-indigo-200 text-sm">Exercices</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
              <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">620+</p>
                <p className="text-indigo-200 text-sm">Questions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
                <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">5</p>
                <p className="text-indigo-200 text-sm">Compétences</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
              <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">A1→C2</p>
                <p className="text-indigo-200 text-sm">Tous niveaux</p>
              </div>
            </div>

            {/* Content categories */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500/30 rounded-full p-2">
                    <Briefcase className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h3 className="font-bold text-lg">Vocabulaire professionnel</h3>
                </div>
                <p className="text-sm text-indigo-200">Contrats, terminologie juridique, reporting financier, expressions professionnelles</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500/30 rounded-full p-2">
                    <GraduationCap className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h3 className="font-bold text-lg">Grammaire & syntaxe</h3>
                </div>
                <p className="text-sm text-indigo-200">Temps verbaux, structures complexes, correction d'erreurs, style professionnel</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500/30 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h3 className="font-bold text-lg">Compréhension écrite</h3>
                </div>
                <p className="text-sm text-indigo-200">E-mails, rapports financiers, contrats de service, comptes-rendus de réunion</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/exercices/cloe-preparation" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105"
              >
                <Award className="h-6 w-6" />
                Commencer la préparation CLOE
              </Link>
              <Link 
                to="/exercices/cloe-preparation/overview" 
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                En savoir plus sur CLOE
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* AI Training Hub — Unified Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Entraînement IA — Gratuit
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                8 outils IA pour progresser en anglais professionnel
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Pratiquez des situations réelles avec un partenaire IA et recevez un feedback détaillé instantané — vocabulaire, grammaire, ton et plus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { to: "/conversation-trainer", icon: MessageCircle, title: "Conversation professionnelle", desc: "Accueil client, réunion, réclamation, networking — 15 scénarios réalistes avec feedback CECRL." },
                { to: "/email-trainer", icon: Mail, title: "Rédaction d'e-mails", desc: "Répondez à des e-mails professionnels réalistes. Feedback IA sur la clarté, le ton et la structure." },
                { to: "/presentation-trainer", icon: Sparkles, title: "Présentation professionnelle", desc: "Rédigez des présentations en anglais et recevez un feedback sur la structure et le vocabulaire." },
                { to: "/negotiation-trainer", icon: Handshake, title: "Négociation commerciale", desc: "Pratiquez des négociations réalistes avec feedback sur la persuasion et la stratégie." },
                { to: "/speaking-practice", icon: Mic, title: "Speaking Practice 🎙️", desc: "Parlez en anglais avec reconnaissance vocale et synthèse vocale. Feedback prononciation et fluidité." },
                { to: "/writing-coach", icon: PenTool, title: "Writing Coach ✍️", desc: "Soumettez un texte et recevez un feedback détaillé avec version améliorée automatique." },
                { to: "/interview-simulator", icon: UserCheck, title: "Interview Simulator 💼", desc: "Simulez un entretien d'embauche en anglais. 8 secteurs, 3 types d'entretien, feedback CECRL." },
                { to: "/grammar-explainer", icon: Search, title: "Grammar Explainer 📖", desc: "Collez une phrase et obtenez une analyse grammaticale complète avec règles et conseils." },
              ].map(item => (
                <Link key={item.to} to={item.to} className="group bg-background/80 backdrop-blur-sm rounded-2xl border border-primary/15 p-6 md:p-8 flex items-start gap-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1 active:scale-[0.98] cursor-pointer relative min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                      Essayer <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Header with FREE badge */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">Accès libre • Aucune inscription requise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 font-heading bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Améliorez votre anglais gratuitement
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-body leading-relaxed">
                Des centaines d'exercices interactifs conçus par un formateur britannique certifié. 
                Grammaire, vocabulaire, compréhension — progressez à votre rythme.
              </p>
            </div>

            {/* Big stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors group">
                <p className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">{EXERCISE_COUNTS.total}+</p>
                <p className="text-gray-400 text-sm font-medium">Exercices</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-colors group">
                <p className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">{EXERCISE_COUNTS.questions.toLocaleString()}+</p>
                <p className="text-gray-400 text-sm font-medium">Questions</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-purple-500/30 transition-colors group">
                <p className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">8</p>
                <p className="text-gray-400 text-sm font-medium">Outils IA</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-amber-500/30 transition-colors group">
                <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">A1→C1</p>
                <p className="text-gray-400 text-sm font-medium">Tous niveaux</p>
              </div>
            </div>

            {/* Exercise Category Cards - Clean grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              <Link 
                to="/exercices?tab=grammar" 
                className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-blue-600/30 hover:to-blue-800/30 transition-all cursor-pointer group border border-blue-500/20 hover:border-blue-500/40 hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Exercices de grammaire — ${EXERCISE_COUNTS.grammar} disponibles`}
              >
                <GraduationCap className="h-7 w-7 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.grammar}</p>
                <p className="text-xs text-gray-400">Grammaire</p>
              </Link>
              
              <Link 
                to="/exercices?tab=vocabulary" 
                className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-emerald-600/30 hover:to-emerald-800/30 transition-all cursor-pointer group border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Exercices de vocabulaire — ${EXERCISE_COUNTS.vocabulary} disponibles`}
              >
                <Sparkles className="h-7 w-7 mx-auto mb-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.vocabulary}</p>
                <p className="text-xs text-gray-400">Vocabulaire</p>
              </Link>
              
              <Link 
                to="/exercices/listening" 
                className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-purple-600/30 hover:to-purple-800/30 transition-all cursor-pointer group border border-purple-500/20 hover:border-purple-500/40 hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Exercices d'écoute — ${EXERCISE_COUNTS.listening} disponibles`}
              >
                <Headphones className="h-7 w-7 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.listening}</p>
                <p className="text-xs text-gray-400">Écoute</p>
              </Link>
              
              <Link 
                to="/reading" 
                className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-amber-600/30 hover:to-amber-800/30 transition-all cursor-pointer group border border-amber-500/20 hover:border-amber-500/40 hover:scale-[1.02] active:scale-[0.98] min-h-[44px] flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                aria-label={`Exercices de lecture — ${EXERCISE_COUNTS.reading + EXERCISE_COUNTS.stories} disponibles`}
              >
                <BookOpen className="h-7 w-7 mx-auto mb-2 text-amber-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.reading + EXERCISE_COUNTS.stories}</p>
                <p className="text-xs text-gray-400">Lecture</p>
              </Link>
            </div>

            {/* Value props - subtle expertise positioning */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-10">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Bilingue EN/FR</p>
                    <p className="text-xs text-gray-400">Explications claires</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Feedback instantané</p>
                    <p className="text-xs text-gray-400">Apprenez de vos erreurs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Sans inscription</p>
                    <p className="text-xs text-gray-400">Commencez tout de suite</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Conçu par un pro</p>
                    <p className="text-xs text-gray-400">Formateur certifié FPA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/exercices" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                <GraduationCap className="h-6 w-6" />
                Explorer les exercices gratuits
              </Link>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <BookOpen className="h-6 w-6" />
                Lire les articles
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">
              Mes offres de formation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-muted hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 font-heading">{service.title}</h3>
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <a href="https://wa.me/33649829826" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_cta_click', { page: 'Home', target: 'https://wa.me/33649829826', location: 'mid-section' })} className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-5 py-3 rounded-full text-base font-semibold shadow transition">
                  💬 Discutons sur WhatsApp
                </a>
                <Link to="/contact" className="text-[#1A1A63] hover:underline text-base font-medium">
                  📬 Remplir le formulaire de contact
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">Zone d'intervention</h2>
            <div className="bg-muted rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 font-heading">Présentiel</h3>
                      <p className="text-muted-foreground font-body">Cannes, Antibes, Nice, Monaco (Alpes-Maritimes)</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2 font-heading">Distanciel</h3>
                      <p className="text-muted-foreground font-body">France entière</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img src="/lovable-uploads/de1467b6-7694-4b1e-b2c8-e4cb04b71b21.png" alt="Carte de la zone d'intervention d'Antony Addy formateur d'anglais - Cannes, Antibes, Nice, Monaco, Côte d'Azur et toute la France à distance" className="w-full h-auto rounded-lg" width="600" height="auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
              Prêt à progresser ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-body">
              Rejoignez des centaines d'apprenants. Commencez par un exercice gratuit — sans inscription.
            </p>
            <Link
              to="/exercices"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              Essayer un exercice maintenant
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>


        {/* Contact CTA Section - Appel à l'action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Prêt à améliorer votre anglais professionnel ?</h2>
            <p className="text-xl mb-8 font-body">
              Discutons de votre projet de formation. Je suis à votre écoute !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/33649829826" onClick={() => trackEvent('whatsapp_cta_click', { page: 'Home', target: 'https://wa.me/33649829826', location: 'final-cta' })} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-body" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a href="mailto:formations@antonyaddy.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 font-body">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
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
                <h3 className="font-semibold text-foreground mb-3">Certifications & Financement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Mon Compte Formation (CPF) ↗</a></li>
                  <li><a href="https://www.certificat-cloe.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Certification CLOE ↗</a></li>
                  <li><a href="https://www.francecompetences.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">France Compétences ↗</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dernière mise à jour</h3>
                <p className="text-muted-foreground">Mars 2026</p>
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
