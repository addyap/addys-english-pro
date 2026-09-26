import React, { useMemo } from 'react';
import { YEARS_OF_EXPERIENCE, EXPERIENCE_FLOOR, PRICE_RANGE, CONTENT_LAST_REVIEWED_ISO, formatMonthYearFR } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, Headphones, Sparkles, MessageCircle, Mail, ArrowRight, Handshake, Mic, PenTool, UserCheck, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { FORMATIONS } from '@/data/formations';
import { PLATFORM_COUNT } from '@/data/platforms';

// Map the formation icon names to their lucide components (already imported above).
const FORMATION_ICONS = { Globe, Sparkles, Settings } as const;



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
      priceRange: PRICE_RANGE,
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
      // LinkedIn only. The twitter.com/antonyaddy entry that used to sit here
      // pointed at an account that is not Antony's — a `sameAs` is an identity
      // assertion, so pointing it at someone else's profile actively misleads
      // the entity resolution it exists to help.
      sameAs: ["https://www.linkedin.com/in/antonyaddy"],
    },
    {
      "@type": "Person",
      "@id": "https://www.antonyaddy.com/#antony-addy",
      name: "Antony Addy",
      jobTitle: "Formateur Professionnel d'Adultes en Anglais",
      // "depuis 2017" alone read as five years' experience, contradicting the
      // 21+ figure shown on the page. 2017 is the FPA certification date, not
      // the start of the career.
      description: `Formateur britannique natif, certifié Formateur Professionnel d'Adultes depuis 2017, ${EXPERIENCE_FLOOR}+ ans d'enseignement de l'anglais en France auprès d'adultes, d'entreprises et de l'enseignement supérieur`,
      url: "https://www.antonyaddy.com",
      image: "https://www.antonyaddy.com/social-preview.jpg",
      knowsLanguage: ["fr", "en"],
      address: { "@id": "https://www.antonyaddy.com/#address" },
      worksFor: { "@id": "https://www.antonyaddy.com/#business" },
      sameAs: ["https://www.linkedin.com/in/antonyaddy"],
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
    // No FAQPage node. The one that used to sit here declared a question and
    // answer that appear nowhere in the rendered page — Google requires FAQ
    // content to be visible, and FAQ rich results were withdrawn for sites like
    // this one in 2023, so it carried risk with no upside. The city landing
    // pages keep their FAQPage markup because their questions *are* rendered.
  ],
};

const Home = () => {
  const whatsappLink = useWhatsAppLink();
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
        dateModified={CONTENT_LAST_REVIEWED_ISO}
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
        <RevealStagger className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <Reveal variant="up">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">
              <CountUp value={YEARS_OF_EXPERIENCE} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Années d'expérience</p>
          </Reveal>
          <Reveal variant="up">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">
              <CountUp value={500} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Apprenants accompagnés</p>
          </Reveal>
          <Reveal variant="up">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">FPA</p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Certifié depuis 2017</p>
          </Reveal>
          <Reveal variant="up">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading">
              <CountUp value={24} suffix=" h" />
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1">Réponse en jours ouvrés</p>
          </Reveal>
        </RevealStagger>
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
        {/* Mes 3 formations — hub access to English (this site), IA & SAP subdomains */}
        <section className="py-12 sm:py-16 bg-white border-b border-border" aria-labelledby="formations-hub-heading">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-8 sm:mb-10">
              <h2 id="formations-hub-heading" className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-2">
                Mes trois domaines de formation
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Formateur Professionnel d'Adultes certifié, j'accompagne particuliers et entreprises sur trois expertises complémentaires.
              </p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
            <RevealStagger className="grid gap-5 sm:gap-6 md:grid-cols-3" role="list">
              {FORMATIONS.map((f) => {
                const Icon = FORMATION_ICONS[f.icon];
                const isCurrent = !f.external;
                const inner = (
                  <>
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4" aria-hidden="true">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary font-heading mb-2 flex items-center gap-2">
                      {f.title}
                      {f.external && <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">{f.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-auto">
                      {isCurrent ? 'Vous y êtes' : f.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </>
                );
                const cardClass =
                  'group flex flex-col h-full text-left p-6 rounded-2xl border transition-all duration-300 ' +
                  (isCurrent
                    ? 'bg-primary/5 border-primary/30'
                    : 'bg-card border-border hover:shadow-xl hover:border-primary/40 hover:-translate-y-1');
                return isCurrent ? (
                  <Reveal key={f.key} variant="scale" as="div" className={cardClass} role="listitem" aria-current="page">
                    {inner}
                  </Reveal>
                ) : (
                  <Reveal
                    key={f.key}
                    variant="scale"
                    as="a"
                    href={f.href}
                    target="_blank"
                    rel="noopener"
                    role="listitem"
                    onClick={() => trackEvent('home_formation_card_click', { formation: f.key, target: f.href })}
                    className={cardClass}
                  >
                    {inner}
                  </Reveal>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Qui je suis Section - Updated with split layout */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary font-heading">Votre formateur</h2>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <Reveal variant="left" className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png" 
                    alt="Antony Addy animant une formation en anglais professionnel avec des apprenants adultes" 
                    className="w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-border" 
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
              </Reveal>

              {/* Content Side */}
              <Reveal variant="right" className="order-1 lg:order-2">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* Platforms showcase — the single free-resources moment on the page
            (the emerald "Quick Exercises" banner that used to sit above this was
            a duplicate CTA to the same /ressources-en-ligne, in an off-brand
            teal; its "gratuit / accès libre" message now lives in the badge
            below). Free is stated in the present ("en accès libre"), never as a
            permanent promise; the AI angle stays a discreet aside, not the pitch. */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="platforms-heading">
          <Reveal className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-foreground mb-2">
              Fluentory <span className="text-muted-foreground normal-case tracking-normal">by Antony Addy</span>
            </p>
            <p className="text-sm sm:text-base italic text-muted-foreground mb-4">
              Free tools for grammar, listening, speaking and exam prep — built by a certified trainer.
            </p>
            <h2 id="platforms-heading" className="text-2xl sm:text-3xl font-bold text-primary mb-3 font-heading">
              Un formateur, {PLATFORM_COUNT} plateformes d'entraînement
            </h2>
            <p className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Gratuit · sans inscription
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Grammaire, TOEIC, CLOE, compréhension et expression orales : je conçois
              et enrichis mes propres outils d'entraînement, en accès libre. Ma
              pédagogie, prolongée par les outils d'aujourd'hui.
            </p>
            <Link
              to="/ressources-en-ligne"
              onClick={() => trackEvent('home_platforms_banner_click', { page: 'home', target: '/ressources-en-ligne' })}
              className="group block rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <img
                src="/fluentory-plateformes.webp"
                alt="Fluentory — mes plateformes d'apprentissage de l'anglais : CLOE Prep, SpeakUp AI, TOEIC, ListenUp, Anglais à Distance et Grammatica."
                width={1774}
                height={887}
                loading="lazy"
                className="w-full"
              />
            </Link>
            <p className="mt-6">
              <Link
                to="/ressources-en-ligne"
                onClick={() => trackEvent('home_platforms_cta_click', { page: 'home', target: '/ressources-en-ligne' })}
                className="group/cta inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent-foreground"
              >
                Découvrir les {PLATFORM_COUNT} plateformes
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </section>

        {/* Features Section - 6 blocks in 2x3 grid */}
        <section className="py-12 sm:py-16 bg-muted" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-8 sm:mb-12">
              <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-primary font-heading">
                Pourquoi choisir mes formations ?
              </h2>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
            <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8" role="list">
              {features.map((feature, index) => (
                <Reveal
                  key={index}
                  variant="up"
                  as="article"
                  role="listitem"
                  className="group text-center p-5 sm:p-6 rounded-xl bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 text-accent rounded-full mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/15" aria-hidden="true">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-heading">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">{feature.description}</p>
                </Reveal>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Pour qui — per-audience landing page links */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="audience-heading">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-8 sm:mb-10">
              <h2 id="audience-heading" className="text-2xl sm:text-3xl font-bold text-primary font-heading mb-3">
                Pour qui je travaille
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chaque formation est conçue sur mesure. Voici les quatre profils que j'accompagne le plus souvent.
              </p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
            <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Reveal variant="up" as={Link} to="/anglais-entreprise" className="group block p-5 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Entreprises</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Formations sur-mesure pour vos équipes, encadrées par convention de formation.</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-cadres" className="group block p-5 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Cadres &amp; dirigeants</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Accompagnement individuel et confidentiel autour de vos enjeux professionnels.</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-particuliers" className="group block p-5 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Particuliers</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Cours adaptés à votre niveau, votre rythme, et vos objectifs personnels.</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-etudiants" className="group block p-5 rounded-xl bg-muted hover:bg-accent/10 border border-border hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-primary mb-2 font-heading">Étudiants</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">BTS, Bachelor, Master, écoles et universités — préparation TOEIC et Cambridge.</p>
                <span className="text-sm font-medium text-accent inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
            </RevealStagger>
          </div>
        </section>


        {/* Ils me font confiance Section - Updated with client categories */}
        <section className="bg-muted py-16 px-4 sm:px-6 lg:px-8">
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

        <section className="relative overflow-hidden py-12 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="aurora" aria-hidden="true" />
          <Reveal className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
              Quel est votre niveau d'anglais aujourd'hui ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-body">
              Faites le test de positionnement : un résultat sur l'échelle CECRL (A1 → C1)
              et des repères concrets pour progresser. Gratuit, sans inscription, en quelques minutes.
            </p>
            <Link
              to="/test-de-positionnement"
              onClick={() => trackEvent('home_assessment_cta_click', { page: 'home', location: 'assessment-cta', target: '/test-de-positionnement' })}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
            >
              <Target className="h-5 w-5" aria-hidden="true" />
              Évaluer mon niveau — test gratuit
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </section>


        {/* Contact CTA Section - Conversion-focused, WhatsApp-first */}
        <section className="py-12 sm:py-16 bg-red-600 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-heading leading-tight">Prêt à améliorer votre anglais professionnel ?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-3 font-body leading-relaxed">
              Expliquez-moi votre objectif, je vous réponds rapidement avec une proposition adaptée.
            </p>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 font-body text-white/90">
              💬 Premier échange gratuit · Sans engagement · Réponse sous 24 h ouvrées
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={whatsappLink || "#"}
                onClick={(e) => {
                  if (!whatsappLink) { e.preventDefault(); return; }
                  trackEvent('whatsapp_cta_click', { page: 'Home', location: 'final-cta', prefilled: true });
                }}
                className="bg-white text-red-600 px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-muted transition-all hover:scale-105 flex items-center justify-center gap-2 font-body shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter Antony Addy sur WhatsApp (message pré-rempli)"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Contact WhatsApp · Réponse sous 24 h ouvrées
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
                  <li><a href="https://www.coe.int/en/web/common-european-framework-reference-languages" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cadre Européen CECRL ↗</a></li>
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
                <p className="text-muted-foreground">{formatMonthYearFR()}</p>
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
