import React, { useMemo } from 'react';
import { YEARS_OF_EXPERIENCE, EXPERIENCE_FLOOR, PRICE_RANGE, CONTENT_LAST_REVIEWED_ISO, formatMonthYearFR } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, Headphones, MessageCircle, Mail, ArrowRight, Handshake, Mic, PenTool, UserCheck, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import HubHeroLigne from '../components/HubHeroLigne';
import './HomeVisual.css';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { featuredTestimonials } from '@/data/testimonials';



// Client logos data for lazy carousel
const CLIENT_LOGOS = [
  { src: "/lovable-uploads/a3da9e3b-1f6c-447a-b308-2ca44d071c67.png", alt: "Logo IGY Vieux-Port de Cannes, partenaire formation anglais", name: "IGY Vieux-Port de Cannes" },
  { src: "/lovable-uploads/694fcb0f-d52b-44f3-8cbc-6c1a051e416b.webp", alt: "Logo ITEC, école partenaire pour formations d'anglais", name: "ITEC" },
  { src: "/lovable-uploads/6668f20c-7d63-477f-a5be-856e631eaaef.webp", alt: "Logo ESCCOM, école de commerce partenaire formations anglais", name: "ESCCOM" },
  { src: "/lovable-uploads/69034832-a004-43a5-b367-f4726a4d126a.webp", alt: "Logo Ingeneria Project, entreprise partenaire pour formations d'anglais professionnel", name: "Ingeneria" },
  { src: "/lovable-uploads/edj-nice-logo.webp", alt: "Logo EDJ Nice, L'école du journalisme, partenaire formation anglais", name: "EDJ Nice" },
];

const FEATURED_PROJECTS = [
  {
    name: 'Ristorante da Lola',
    type: 'Site web · Restaurant',
    need: 'Présenter le restaurant à une clientèle internationale.',
    solution: 'Menu, galerie et réservation en quatre langues.',
    url: 'https://www.ristorantedalola.it',
    image: 'https://creations.antonyaddy.com/screenshots/ristorante-lola.jpg',
  },
  {
    name: 'Filton Athletic FC',
    type: 'Site web · Association',
    need: 'Rassembler les informations utiles aux supporters.',
    solution: 'Calendrier, résultats, classements et actualités du club.',
    url: 'https://filtonathletic.co.uk',
    image: 'https://creations.antonyaddy.com/screenshots/filton-athletic-fc.jpg',
  },
  {
    name: 'Grammatica',
    type: 'Outil pédagogique · Grammaire',
    need: 'Comprendre une règle dans la langue que l’on maîtrise.',
    solution: 'Explications en huit langues et exercices autocorrigés.',
    url: 'https://grammatica.antonyaddy.com',
    image: 'https://creations.antonyaddy.com/screenshots/grammatica.jpg',
  },
  {
    name: 'SpeakUp AI',
    type: 'Outil pédagogique · Expression orale',
    need: 'Pratiquer l’anglais oral entre deux cours.',
    solution: 'Conversations guidées et retour immédiat.',
    url: 'https://speak.antonyaddy.com',
    image: 'https://creations.antonyaddy.com/screenshots/speakup.jpg',
  },
] as const;

// Single consolidated JSON-LD @graph for the homepage. Replaces the previous
// 9 separate blocks (Organization ×2, WebSite ×2, Person ×2, ProfessionalService
// ×2, FAQPage) that redundantly re-declared the same business, address and
// service areas. One canonical business node (ProfessionalService — a
// LocalBusiness/Organization subtype, so no separate Organization node is
// needed) for the English arm, one WebSite, one Person carrying the full
// three-activity identity, and two Service nodes for the IA and website-creation
// activities on their subdomains, linked by @id. Every real fact
// from the old markup is preserved; only duplicates are removed. Conflicts were
// resolved to the real value: email formations@ (not the placeholder contact@),
// logo /icon-512.png and image /og/antonyaddy-hub.jpg (the hub social card; the
// old /og/antonyaddy-card.png 404s and /assets/logo-512.png was a text stub).
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
      image: "https://www.antonyaddy.com/og/antonyaddy-hub.jpg",
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
      // Antony's three activities. antonyaddy.com is the hub; the IA and
      // website-creation services live on their own subdomains, modelled as
      // Service nodes below with this Person as their provider.
      jobTitle: [
        "Formateur d'anglais professionnel",
        "Formateur en IA générative",
        "Créateur de sites web et d'outils pédagogiques",
      ],
      // "depuis 2017" alone read as five years' experience, contradicting the
      // 21+ figure shown on the page. 2017 is the FPA certification date, not
      // the start of the career.
      description: `Britannique natif, certifié Formateur Professionnel d'Adultes depuis 2017 (${EXPERIENCE_FLOOR}+ ans d'enseignement de l'anglais), également formateur en IA générative et créateur de sites web et d'outils pédagogiques avec l'IA. Côte d'Azur et à distance.`,
      knowsAbout: [
        "Anglais professionnel",
        "Coaching linguistique",
        "IA générative",
        "ChatGPT",
        "Ingénierie de prompts",
        "Création de sites web",
        "Création d'outils pédagogiques",
        "Développement web assisté par IA",
      ],
      url: "https://www.antonyaddy.com",
      image: "https://www.antonyaddy.com/og/antonyaddy-hub.jpg",
      knowsLanguage: ["fr", "en"],
      address: { "@id": "https://www.antonyaddy.com/#address" },
      worksFor: { "@id": "https://www.antonyaddy.com/#business" },
      sameAs: ["https://www.linkedin.com/in/antonyaddy"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.antonyaddy.com/#website",
      name: "Antony Addy — Anglais, IA générative, sites web & outils pédagogiques",
      url: "https://www.antonyaddy.com",
      description: "Le point de rencontre des trois activités d'Antony Addy : formation en anglais professionnel, formation en IA générative et création de sites web et d'outils pédagogiques avec l'IA — sur la Côte d'Azur et à distance.",
      inLanguage: "fr",
      publisher: { "@id": "https://www.antonyaddy.com/#business" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.antonyaddy.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    // Antony's two other activities, each provided by the Person above and
    // living on its own subdomain. Modelling them here lets the hub declare the
    // full three-activity offer without the English ProfessionalService node
    // having to pretend to cover them.
    {
      "@type": "Service",
      "@id": "https://www.antonyaddy.com/#service-ia",
      name: "Formation en IA générative",
      serviceType: "Formation professionnelle à l'IA générative",
      description: "Formations à l'IA générative pour gagner en productivité : ChatGPT, prompts et outils IA appliqués à votre métier.",
      provider: { "@id": "https://www.antonyaddy.com/#antony-addy" },
      url: "https://ia.antonyaddy.com",
      areaServed: [
        { "@type": "Country", name: "France" },
        "Worldwide (remote)",
      ],
      availableLanguage: ["fr"],
    },
    {
      "@type": "Service",
      "@id": "https://www.antonyaddy.com/#service-web",
      name: "Création de sites web et d'outils numériques",
      serviceType: ["Conception et développement de sites web", "Création d'outils métier et pédagogiques"],
      description: "Création de sites web, d'outils métier et d'outils pédagogiques sur mesure pour entreprises, indépendants et acteurs de l'éducation, avec l'IA.",
      provider: { "@id": "https://www.antonyaddy.com/#antony-addy" },
      url: "https://creations.antonyaddy.com",
      areaServed: [
        { "@type": "Country", name: "France" },
        "Worldwide (remote)",
      ],
      availableLanguage: ["fr"],
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
  const earlyRecommendation = featuredTestimonials.find((item) => item.name === 'Adrien KOWALSKI') ?? featuredTestimonials[0];
  useScrollTracking('home');
  useTimeTracking('home');

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
        title="Antony Addy — Anglais, IA, sites web & outils pédagogiques"
        description="Antony Addy : formateur d'anglais professionnel, formateur en IA générative et créateur de sites web et d'outils pédagogiques avec l'IA. Côte d'Azur et à distance."
        canonicalUrl="https://www.antonyaddy.com/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified={CONTENT_LAST_REVIEWED_ISO}
        image="https://www.antonyaddy.com/og/antonyaddy-hub.jpg"
        imageAlt="Antony Addy — formateur d'anglais, formateur en IA générative et créateur de sites web et d'outils pédagogiques"
        keywords={["formateur anglais", "formation anglais professionnel", "formateur FPA", "cours anglais adultes", "formateur IA générative", "formation ChatGPT entreprise", "création site web IA", "outils pédagogiques", "Var", "Alpes-Maritimes", "Côte d'Azur", "Fréjus", "Saint-Raphaël", "Nice", "Cannes", "Antibes", "Sophia Antipolis", "Monaco", "anglais à distance", "formateur britannique", "anglais entreprises", "anglais cadres", "anglais étudiants"]}
        jsonLd={HOME_JSONLD_GRAPH}
      />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50">
        Aller au contenu principal
      </a>



      {/* Hub hero — "La Ligne" départ sequence: the three activities as one
          branching line. Keeps the keyword H1 and the three real links. */}
      <HubHeroLigne />

      <main id="main-content">
        <section className="home-early-proof" aria-label="Un avis et des repères sur mon expérience">
          <div className="home-early-proof-inner">
            <div className="home-early-quote">
              <span>Recommandation LinkedIn</span>
              <blockquote>« {earlyRecommendation.quote} »</blockquote>
              <p>{earlyRecommendation.name} · {earlyRecommendation.role}</p>
            </div>
            <div className="home-early-facts">
              <div><strong>{YEARS_OF_EXPERIENCE}+</strong><span>années d’expérience</span></div>
              <div><strong>FPA</strong><span>certifié depuis 2017</span></div>
              <Link to="/temoignages">Lire les témoignages <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
        {/* ===== STATION 02 · LIGNE ANGLAIS — the English chapter opens here.
             The hub hero's "Anglais" card scrolls to this #anchor. Audience and
             city pages are surfaced as "served stations" (real internal links). ===== */}
        <div id="anglais" className="scroll-mt-20">
          <section className="home-chapter home-chapter--english relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-anglais">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true"
              style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(232,71,59,.10), transparent 55%)' }} />
            <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#E8473B] opacity-50" aria-hidden="true" />
            <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#E8473B]" aria-hidden="true"
              style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(232,71,59,.55)' }} />
            <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 pt-14 sm:pt-20 pb-2">
              <div className="home-chapter-intro">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">01 · Ligne Anglais</span>
                    <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#E8473B] border border-[#E8473B]/45 rounded-full px-3 py-1.5">Red line</span>
                  </div>
                  <h2 id="station-anglais" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
                    L'anglais qui vous met en mouvement
                  </h2>
                  <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
                    Britannique natif, certifié Formateur Professionnel d'Adultes. Je ne vous fais pas réciter des règles — je vous mets en mouvement : réunions, présentations, emails, appels. En présentiel sur la Côte d'Azur ou à distance.
                  </p>
                </div>
                <img className="home-chapter-art" src="/illustrations/english-conversation.webp" alt="Illustration de deux bulles de conversation reliées par une ligne rouge, avec un discret motif britannique" width="1200" height="800" loading="lazy" decoding="async" />
              </div>

              <p className="mt-7 font-heading text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8b93b6]">Stations desservies</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/anglais-entreprise" className="font-heading text-xs uppercase tracking-[0.08em] text-[#CBCFE4] border border-[#E8473B]/30 rounded-full px-3.5 py-2 hover:border-[#E8473B] hover:text-white transition-colors">Entreprises</Link>
                <Link to="/anglais-cadres" className="font-heading text-xs uppercase tracking-[0.08em] text-[#CBCFE4] border border-[#E8473B]/30 rounded-full px-3.5 py-2 hover:border-[#E8473B] hover:text-white transition-colors">Cadres &amp; dirigeants</Link>
                <Link to="/anglais-particuliers" className="font-heading text-xs uppercase tracking-[0.08em] text-[#CBCFE4] border border-[#E8473B]/30 rounded-full px-3.5 py-2 hover:border-[#E8473B] hover:text-white transition-colors">Particuliers</Link>
                <Link to="/anglais-etudiants" className="font-heading text-xs uppercase tracking-[0.08em] text-[#CBCFE4] border border-[#E8473B]/30 rounded-full px-3.5 py-2 hover:border-[#E8473B] hover:text-white transition-colors">Étudiants</Link>
                <Link to="/cours-anglais-frejus" className="font-heading text-xs uppercase tracking-[0.08em] text-[#9aa2c0] border border-white/10 rounded-full px-3.5 py-2 hover:border-white/40 hover:text-white transition-colors">Fréjus</Link>
                <Link to="/cours-anglais-nice" className="font-heading text-xs uppercase tracking-[0.08em] text-[#9aa2c0] border border-white/10 rounded-full px-3.5 py-2 hover:border-white/40 hover:text-white transition-colors">Nice</Link>
                <Link to="/cours-anglais-cannes" className="font-heading text-xs uppercase tracking-[0.08em] text-[#9aa2c0] border border-white/10 rounded-full px-3.5 py-2 hover:border-white/40 hover:text-white transition-colors">Cannes</Link>
                <Link to="/cours-anglais-antibes" className="font-heading text-xs uppercase tracking-[0.08em] text-[#9aa2c0] border border-white/10 rounded-full px-3.5 py-2 hover:border-white/40 hover:text-white transition-colors">Antibes</Link>
                <Link to="/cours-anglais-sophia-antipolis" className="font-heading text-xs uppercase tracking-[0.08em] text-[#9aa2c0] border border-white/10 rounded-full px-3.5 py-2 hover:border-white/40 hover:text-white transition-colors">Sophia Antipolis</Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/offres-de-formation" className="inline-flex items-center gap-2 rounded-lg bg-[#E8473B] px-5 py-3 font-semibold text-white hover:bg-[#c9362b] transition-colors">
                  Voir les formations <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/ressources-en-ligne" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
                  Découvrir les ressources gratuites
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* "Le Conducteur" lives below now — after the three routes (Créations). */}

        {/* ===== STATION 03 · LIGNE IA (violet) — links the ia. subdomain ===== */}
        <section className="home-chapter home-chapter--ai relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-ia">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true"
            style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(122,98,255,.12), transparent 55%)' }} />
          <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#7A62FF] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#7A62FF]" aria-hidden="true"
            style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(122,98,255,.55)' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <div className="home-chapter-intro">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">02 · Ligne IA</span>
                  <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#7A62FF] border border-[#7A62FF]/45 rounded-full px-3 py-1.5">Violet line</span>
                </div>
                <h2 id="station-ia" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
                  L'IA générative, appliquée à votre métier
                </h2>
                <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
                  Des formations concrètes à l'IA générative pour les professionnels et les équipes : ChatGPT, ingénierie de prompts et outils IA, branchés directement sur vos tâches réelles — du gain de temps dès la première session.
                </p>
              </div>
              <img className="home-chapter-art" src="/illustrations/ai-workflow.webp" alt="Illustration d'une tâche transformée en document utile grâce à un parcours d'IA guidé" width="1200" height="800" loading="lazy" decoding="async" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Pour qui</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Équipes &amp; indépendants</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Format</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Atelier sur mesure</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Résultat</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Productivité réelle</h3></div>
            </div>
            <a href="https://ia.antonyaddy.com" target="_blank" rel="noopener"
               onClick={() => trackEvent('station_route_click', { formation: 'ia', target: 'https://ia.antonyaddy.com' })}
               className="mt-8 inline-flex items-center gap-2 bg-[#7A62FF] text-white font-heading font-bold uppercase tracking-[0.12em] text-xs px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform">
              Ouvrir ia.antonyaddy.com <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ===== STATION 04 · LIGNE CRÉATIONS (amber) — links the creations. subdomain ===== */}
        <section className="home-chapter home-chapter--web relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-creations">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true"
            style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(240,151,74,.12), transparent 55%)' }} />
          <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#F0974A] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#F0974A]" aria-hidden="true"
            style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(240,151,74,.55)' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <div className="home-chapter-intro">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">03 · Ligne Créations</span>
                  <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#F0974A] border border-[#F0974A]/45 rounded-full px-3 py-1.5">Amber line</span>
                </div>
                <h2 id="station-creations" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
                  Des sites et des outils faits pour avancer
                </h2>
                <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
                  Je crée des <strong className="text-white">sites web</strong> pour présenter votre activité et des <strong className="text-white">outils numériques sur mesure</strong> : applications métier, automatisations et outils pédagogiques pour l'éducation et la formation. Avec l'IA, de la conception à la mise en ligne.
                </p>
              </div>
              <img className="home-chapter-art" src="/illustrations/web-and-learning-tools.webp" alt="Illustration d'un site web et d'un outil pédagogique sur tablette, reliés par une ligne orange" width="1200" height="800" loading="lazy" decoding="async" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Sites web</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Vitrines &amp; conversion</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Outils métier</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Apps &amp; automatisations</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Éducation</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Outils pédagogiques sur mesure</h3></div>
            </div>
            <a href="https://creations.antonyaddy.com" target="_blank" rel="noopener"
               onClick={() => trackEvent('station_route_click', { formation: 'creations', target: 'https://creations.antonyaddy.com' })}
               className="mt-8 inline-flex items-center gap-2 bg-[#F0974A] text-[#1a1200] font-heading font-bold uppercase tracking-[0.12em] text-xs px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform">
              Ouvrir creations.antonyaddy.com <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>

            <div className="home-showcase">
              <div className="home-showcase-intro">
                <div>
                  <span className="home-showcase-kicker">Réalisations en ligne</span>
                  <h3>Des projets que vous pouvez explorer.</h3>
                </div>
                <a href="https://creations.antonyaddy.com/#work" target="_blank" rel="noopener noreferrer">
                  Voir toutes les réalisations <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="home-showcase-grid">
                {FEATURED_PROJECTS.map((project) => (
                  <a key={project.name} className="home-project" href={project.url} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackEvent('home_project_click', { project: project.name, target: project.url })}>
                    <div className="home-project-image">
                      <img src={project.image} alt={`Aperçu de ${project.name}`} loading="lazy" decoding="async" />
                      <span aria-hidden="true"><ExternalLink size={19} /></span>
                    </div>
                    <div className="home-project-copy">
                      <span>{project.type}</span>
                      <strong>{project.name}</strong>
                      <p><b>Le besoin</b>{project.need}</p>
                      <p><b>La réponse</b>{project.solution}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* ===== PROOF · THREE SERVICES — La Ligne dark treatment.
           Folds the old trust strip + SEO intro into one station; every metric,
           the full crawlable text and both links are preserved. ===== */}
      <section className="home-proof relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-interchange">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(246,164,99,.10), transparent 55%), radial-gradient(120% 90% at 50% 120%, rgba(11,16,48,.9), transparent 55%)' }} />
        {/* the line — spine + interchange node */}
        <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px opacity-50" aria-hidden="true"
          style={{ background: 'linear-gradient(180deg,#E8473B,#7A62FF 55%,#F0974A)' }} />
        <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#E8473B]" aria-hidden="true"
          style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(232,71,59,.55)' }} />

        <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">En quelques chiffres</span>
          <h2 id="station-interchange" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
            Un formateur, trois savoir-faire.
          </h2>
          <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
            Un parcours de formateur, au service de vos projets en anglais, en IA et sur le web.
          </p>

          <RevealStagger className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <Reveal variant="up">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading"><CountUp value={YEARS_OF_EXPERIENCE} suffix="+" /></p>
              <p className="mt-1 font-heading text-[0.62rem] uppercase tracking-[0.14em] text-[#8b93b6]">Années d'expérience</p>
            </Reveal>
            <Reveal variant="up">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading"><CountUp value={500} suffix="+" /></p>
              <p className="mt-1 font-heading text-[0.62rem] uppercase tracking-[0.14em] text-[#8b93b6]">Apprenants accompagnés</p>
            </Reveal>
            <Reveal variant="up">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">FPA</p>
              <p className="mt-1 font-heading text-[0.62rem] uppercase tracking-[0.14em] text-[#8b93b6]">Certifié depuis 2017</p>
            </Reveal>
            <Reveal variant="up">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading"><CountUp value={24} suffix=" h" /></p>
              <p className="mt-1 font-heading text-[0.62rem] uppercase tracking-[0.14em] text-[#8b93b6]">Réponse en jours ouvrés</p>
            </Reveal>
          </RevealStagger>

          <p className="mt-9 max-w-4xl text-sm text-[#9aa2c0] font-body leading-relaxed">
            Antony Addy propose des <strong className="text-[#F2EDE1] font-semibold">formations d'anglais pour adultes</strong> adaptées aux professionnels,
            en présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco) ou à distance partout en France et dans le monde.
            Britannique natif basé à Fréjus, certifié Formateur Professionnel d'Adultes depuis 2017 et fort de plus de {EXPERIENCE_FLOOR} ans d'enseignement (notamment à l'EDJ Nice), il accompagne particuliers,
            cadres, entreprises et centres de formation dans l'amélioration de leurs compétences en anglais professionnel.{' '}
            <Link to="/offres-de-formation" className="text-[#F6A463] hover:underline font-medium">Découvrir les formations</Link>{' • '}
            <Link to="/contact" className="text-[#F6A463] hover:underline font-medium">Demander un devis gratuit</Link>
          </p>
        </div>
      </section>


        {/* ===== LE CONDUCTEUR — who's at the controls (after the three routes) ===== */}
        <section className="home-person relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-conducteur">
          <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#CBCFE4] opacity-30" aria-hidden="true" />
          <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#CBCFE4]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">Le Conducteur</span>
            <h2 id="station-conducteur" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">Qui est aux commandes</h2>
            <div className="mt-8 grid lg:grid-cols-[320px_1fr] gap-10 items-start">
              <Reveal variant="left" className="flex flex-col items-center lg:items-start">
                <img
                  src="/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
                  alt="Antony Addy animant une formation en anglais professionnel avec des apprenants adultes"
                  className="w-full max-w-[300px] h-auto rounded-2xl shadow-2xl border border-white/10"
                  width="300" height="300" loading="lazy" decoding="async"
                />
                <p className="text-sm text-[#8b93b6] mt-3 text-center lg:text-left font-body italic">En formation avec des professionnels</p>
              </Reveal>
              <Reveal variant="right" className="max-w-xl">
                <p className="text-lg text-[#CBCFE4] leading-relaxed mb-4 font-body">
                  <strong className="text-white">Antony Addy</strong> — Britannique, certifié{' '}
                  <a href="https://www.afpa.fr/formation-qualifiante/formateur-professionnel-d-adultes" target="_blank" rel="noopener noreferrer" className="text-[#F6A463] hover:underline">Formateur Professionnel d'Adultes</a>{' '}
                  depuis 2017, plus de {EXPERIENCE_FLOOR} ans d'expérience — aujourd'hui aussi formateur en IA générative et créateur de sites et d'outils pédagogiques avec l'IA.
                </p>
                <p className="text-lg text-[#CBCFE4] leading-relaxed mb-6 font-body">
                  Le fil conducteur n'a jamais changé : faire passer les gens de l'hésitation à l'assurance — en réunion, face à un outil IA, ou au lancement d'un site.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/qui-je-suis" className="bg-white text-[#070b22] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors font-body text-center">En savoir plus sur mon parcours</Link>
                  <a href="https://www.linkedin.com/in/antonyaddy/" target="_blank" rel="noopener noreferrer" className="border border-white/25 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors font-body flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== LES PASSAGERS — proof, as people who rode the line (dark station) ===== */}
        <section className="home-clients relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-passagers">
          <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#CBCFE4] opacity-30" aria-hidden="true" />
          <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#CBCFE4]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">Les Passagers</span>
            <h2 id="station-passagers" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">Ils me font confiance</h2>

            {/* Client categories — served stations */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {clientCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-2 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
                  <category.icon className="h-5 w-5 text-[#E8473B]" />
                  <span className="font-heading font-medium text-white text-sm">{category.title}</span>
                </div>
              ))}
            </div>

            {/* Client logos on a light plate so the marks stay legible on navy */}
            <div className="mt-8 rounded-2xl bg-white/95 px-6 py-5 min-h-[140px] flex items-center">
              <LazyClientCarousel logos={CLIENT_LOGOS} />
            </div>
          </div>
        </section>

        {/* Avis Clients Section - Testimonials right after trust signals */}
        <AvisClients />

        <section className="home-assessment relative overflow-hidden lg-section py-14 sm:py-16 bg-[#0b1030] text-[#F2EDE1] border-t border-white/5">
          <Reveal className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 font-heading tracking-tight">
              Quel est votre niveau d'anglais aujourd'hui ?
            </h3>
            <p className="text-lg text-[#9aa2c0] mb-6 font-body">
              Faites le test de positionnement : un résultat sur l'échelle CECRL (A1 → C1)
              et des repères concrets pour progresser. Gratuit, sans inscription, en quelques minutes.
            </p>
            <Link
              to="/test-de-positionnement"
              onClick={() => trackEvent('home_assessment_cta_click', { page: 'home', location: 'assessment-cta', target: '/test-de-positionnement' })}
              className="inline-flex items-center gap-2 bg-[#E8473B] text-white px-8 py-4 rounded-xl font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
            >
              <Target className="h-5 w-5" aria-hidden="true" />
              Évaluer mon niveau — test gratuit
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Reveal>
        </section>


        {/* ===== PROCHAIN ARRÊT — the closing stop (dark La Ligne, WhatsApp-first) ===== */}
        <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-contact">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'radial-gradient(70% 120% at 50% 120%, rgba(246,164,99,.16), transparent 60%)' }} />
          <span className="pointer-events-none absolute top-0 bottom-0 lg-x w-px bg-[#F6A463] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute lg-x -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#F6A463]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(246,164,99,.6)' }} />
          <div className="relative max-w-3xl mx-auto pl-12 sm:pl-20 pr-4 py-16 sm:py-24">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">Prochain arrêt</span>
            <h2 id="station-contact" className="mt-3 font-heading font-extrabold tracking-tight text-3xl sm:text-5xl leading-[1.03]">
              Un projet en anglais, en IA, un site ou un outil ?<br /><span className="text-[#F6A463]">Mind the gap.</span>
            </h2>
            <p className="mt-5 text-lg text-[#CBCFE4] font-body leading-relaxed max-w-xl">
              Dites-moi où vous voulez aller — je vous réponds rapidement avec une proposition adaptée. Premier échange gratuit, réponse sous 24 h ouvrées.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={whatsappLink || "#"}
                onClick={(e) => { if (!whatsappLink) { e.preventDefault(); return; } trackEvent('whatsapp_cta_click', { page: 'Home', location: 'final-cta', prefilled: true }); }}
                className="bg-[#E8473B] text-white px-7 py-4 rounded-xl font-bold text-base sm:text-lg hover:-translate-y-0.5 transition-transform flex items-center justify-center gap-2 font-heading shadow-xl"
                target="_blank" rel="noopener noreferrer"
                aria-label="Contacter Antony Addy sur WhatsApp (message pré-rempli)"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />Contact WhatsApp
              </a>
              <Link to="/contact" className="border border-white/25 text-white px-7 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-heading" aria-label="Aller au formulaire de contact">
                <Mail className="h-5 w-5" aria-hidden="true" />Formulaire de contact
              </Link>
            </div>
            <p className="mt-5 text-sm text-[#8b93b6] font-body">Premier échange gratuit · Sans engagement · Réponse sous 24 h ouvrées</p>
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
