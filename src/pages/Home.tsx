import React, { useMemo } from 'react';
import { YEARS_OF_EXPERIENCE, EXPERIENCE_FLOOR, PRICE_RANGE, CONTENT_LAST_REVIEWED_ISO, formatMonthYearFR } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, Headphones, MessageCircle, Mail, ArrowRight, Handshake, Mic, PenTool, UserCheck, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import HubHeroLigne from '../components/HubHeroLigne';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import { PLATFORM_COUNT } from '@/data/platforms';



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
        "Créateur de sites web",
      ],
      // "depuis 2017" alone read as five years' experience, contradicting the
      // 21+ figure shown on the page. 2017 is the FPA certification date, not
      // the start of the career.
      description: `Britannique natif, certifié Formateur Professionnel d'Adultes depuis 2017 (${EXPERIENCE_FLOOR}+ ans d'enseignement de l'anglais), également formateur en IA générative et créateur de sites web par IA. Côte d'Azur et à distance.`,
      knowsAbout: [
        "Anglais professionnel",
        "Coaching linguistique",
        "IA générative",
        "ChatGPT",
        "Ingénierie de prompts",
        "Création de sites web",
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
      name: "Antony Addy — Formateur d'anglais, IA générative & création de sites web",
      url: "https://www.antonyaddy.com",
      description: "Le point de rencontre des trois activités d'Antony Addy : formation en anglais professionnel, formation en IA générative et création de sites web par IA — sur la Côte d'Azur et à distance.",
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
      name: "Création de sites web par IA",
      serviceType: "Conception et développement de sites web",
      description: "Sites web et outils sur mesure pour entreprises et indépendants, conçus et développés avec l'IA — rapides, soignés et abordables.",
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
        title="Antony Addy — Formateur d'anglais, formateur IA & création de sites web"
        description="Antony Addy : formateur d'anglais professionnel (britannique, certifié FPA), formateur en IA générative et créateur de sites web par IA. Côte d'Azur et à distance."
        canonicalUrl="https://www.antonyaddy.com/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified={CONTENT_LAST_REVIEWED_ISO}
        image="https://www.antonyaddy.com/og/antonyaddy-hub.jpg"
        imageAlt="Antony Addy — formateur d'anglais, formateur en IA générative et créateur de sites web"
        keywords={["formateur anglais", "formation anglais professionnel", "formateur FPA", "cours anglais adultes", "formateur IA générative", "formation ChatGPT entreprise", "création site web IA", "Var", "Alpes-Maritimes", "Côte d'Azur", "Fréjus", "Saint-Raphaël", "Nice", "Cannes", "Antibes", "Sophia Antipolis", "Monaco", "anglais à distance", "formateur britannique", "anglais entreprises", "anglais cadres", "anglais étudiants"]}
        jsonLd={HOME_JSONLD_GRAPH}
      />
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50">
        Aller au contenu principal
      </a>



      {/* Hub hero — "La Ligne" départ sequence: the three activities as one
          branching line. Keeps the keyword H1 and the three real links. */}
      <HubHeroLigne />

      {/* ===== STATION 01 · L'INTERCHANGE — La Ligne dark treatment.
           Folds the old trust strip + SEO intro into one station; every metric,
           the full crawlable text and both links are preserved. ===== */}
      <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-interchange">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(246,164,99,.10), transparent 55%), radial-gradient(120% 90% at 50% 120%, rgba(11,16,48,.9), transparent 55%)' }} />
        {/* the line — spine + interchange node */}
        <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px opacity-50" aria-hidden="true"
          style={{ background: 'linear-gradient(180deg,#E8473B,#7A62FF 55%,#F0974A)' }} />
        <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#E8473B]" aria-hidden="true"
          style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(232,71,59,.55)' }} />

        <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">01 · L'Interchange</span>
          <h2 id="station-interchange" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
            Une ligne, trois destinations.
          </h2>
          <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
            antonyaddy.com est le point de rencontre de mes trois activités : un formateur, trois façons d'avancer — en anglais, en IA générative, et en ligne.
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

      <main id="main-content">
        {/* ===== STATION 02 · LIGNE ANGLAIS — the English chapter opens here.
             The hub hero's "Anglais" card scrolls to this #anchor. Audience and
             city pages are surfaced as "served stations" (real internal links). ===== */}
        <div id="anglais" className="scroll-mt-20">
          <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-anglais">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true"
              style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(232,71,59,.10), transparent 55%)' }} />
            <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#E8473B] opacity-50" aria-hidden="true" />
            <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#E8473B]" aria-hidden="true"
              style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(232,71,59,.55)' }} />
            <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 pt-14 sm:pt-20 pb-2">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">02 · Ligne Anglais</span>
                <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#E8473B] border border-[#E8473B]/45 rounded-full px-3 py-1.5">Red line</span>
              </div>
              <h2 id="station-anglais" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
                L'anglais qui vous met en mouvement
              </h2>
              <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
                Britannique natif, certifié Formateur Professionnel d'Adultes. Je ne vous fais pas réciter des règles — je vous mets en mouvement : réunions, présentations, emails, appels. En présentiel sur la Côte d'Azur ou à distance.
              </p>

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
            </div>
          </section>
          <OptimizedHero />
        </div>

        {/* ===== LE CONDUCTEUR — who's at the controls (dark La Ligne station) ===== */}
        <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-conducteur">
          <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#CBCFE4] opacity-30" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#CBCFE4]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22' }} />
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
                  depuis 2017, plus de {EXPERIENCE_FLOOR} ans d'expérience — aujourd'hui aussi formateur en IA générative et créateur de sites web par IA.
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

        {/* Platforms showcase — the single free-resources moment on the page
            (the emerald "Quick Exercises" banner that used to sit above this was
            a duplicate CTA to the same /ressources-en-ligne, in an off-brand
            teal; its "gratuit / accès libre" message now lives in the badge
            below). Free is stated in the present ("en accès libre"), never as a
            permanent promise; the AI angle stays a discreet aside, not the pitch. */}
        <section className="py-14 sm:py-20 bg-[#070b22] text-[#F2EDE1]" aria-labelledby="platforms-heading">
          <Reveal className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F6A463] mb-2">
              Fluentory <span className="text-[#8b93b6] normal-case tracking-normal">by Antony Addy</span>
            </p>
            <p className="text-sm sm:text-base italic text-[#9aa2c0] mb-4">
              Free tools for grammar, listening, speaking and exam prep — built by a certified trainer.
            </p>
            <h2 id="platforms-heading" className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-heading tracking-tight">
              Un formateur, {PLATFORM_COUNT} plateformes d'entraînement
            </h2>
            <p className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-[#E8473B]/15 text-[#E8473B] text-xs font-semibold uppercase tracking-wide">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Gratuit · sans inscription
            </p>
            <p className="text-base sm:text-lg text-[#9aa2c0] max-w-2xl mx-auto mb-8 leading-relaxed">
              Grammaire, TOEIC, CLOE, compréhension et expression orales : je conçois
              et enrichis mes propres outils d'entraînement, en accès libre. Ma
              pédagogie, prolongée par les outils d'aujourd'hui.
            </p>
            <Link
              to="/ressources-en-ligne"
              onClick={() => trackEvent('home_platforms_banner_click', { page: 'home', target: '/ressources-en-ligne' })}
              className="group block rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6A463] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b22]"
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
                className="group/cta inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#F6A463]"
              >
                Découvrir les {PLATFORM_COUNT} plateformes
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </section>

        {/* Features Section - 6 blocks in 2x3 grid */}
        <section className="py-14 sm:py-20 bg-[#070b22] text-[#F2EDE1]" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-8 sm:mb-12">
              <h2 id="features-heading" className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                Pourquoi choisir mes formations ?
              </h2>
            </Reveal>
            <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list">
              {features.map((feature, index) => (
                <Reveal
                  key={index}
                  variant="up"
                  as="article"
                  role="listitem"
                  className="group text-center p-5 sm:p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#E8473B]/15 text-[#E8473B] rounded-full mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 font-heading">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-[#9aa2c0] font-body leading-relaxed">{feature.description}</p>
                </Reveal>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Pour qui — per-audience landing page links */}
        <section className="py-14 sm:py-20 bg-[#070b22] text-[#F2EDE1]" aria-labelledby="audience-heading">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal className="text-center mb-8 sm:mb-10">
              <h2 id="audience-heading" className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-3">
                Pour qui je travaille
              </h2>
              <p className="text-[#9aa2c0] max-w-2xl mx-auto">
                Chaque formation est conçue sur mesure. Voici les quatre profils que j'accompagne le plus souvent.
              </p>
            </Reveal>
            <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Reveal variant="up" as={Link} to="/anglais-entreprise" className="group block p-5 rounded-xl bg-white/[0.03] hover:bg-[#E8473B]/10 border border-white/10 hover:border-[#E8473B] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">Entreprises</h3>
                <p className="text-sm text-[#9aa2c0] mb-3 leading-relaxed">Formations sur-mesure pour vos équipes, encadrées par convention de formation.</p>
                <span className="text-sm font-medium text-[#E8473B] inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-cadres" className="group block p-5 rounded-xl bg-white/[0.03] hover:bg-[#E8473B]/10 border border-white/10 hover:border-[#E8473B] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">Cadres &amp; dirigeants</h3>
                <p className="text-sm text-[#9aa2c0] mb-3 leading-relaxed">Accompagnement individuel et confidentiel autour de vos enjeux professionnels.</p>
                <span className="text-sm font-medium text-[#E8473B] inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-particuliers" className="group block p-5 rounded-xl bg-white/[0.03] hover:bg-[#E8473B]/10 border border-white/10 hover:border-[#E8473B] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">Particuliers</h3>
                <p className="text-sm text-[#9aa2c0] mb-3 leading-relaxed">Cours adaptés à votre niveau, votre rythme, et vos objectifs personnels.</p>
                <span className="text-sm font-medium text-[#E8473B] inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-etudiants" className="group block p-5 rounded-xl bg-white/[0.03] hover:bg-[#E8473B]/10 border border-white/10 hover:border-[#E8473B] hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 font-heading">Étudiants</h3>
                <p className="text-sm text-[#9aa2c0] mb-3 leading-relaxed">BTS, Bachelor, Master, écoles et universités — préparation TOEIC et Cambridge.</p>
                <span className="text-sm font-medium text-[#E8473B] inline-flex items-center gap-1">En savoir plus <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
              </Reveal>
            </RevealStagger>
          </div>
        </section>

        {/* ===== STATION 03 · LIGNE IA (violet) — links the ia. subdomain ===== */}
        <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-ia">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true"
            style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(122,98,255,.12), transparent 55%)' }} />
          <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#7A62FF] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#7A62FF]" aria-hidden="true"
            style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(122,98,255,.55)' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">03 · Ligne IA</span>
              <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#7A62FF] border border-[#7A62FF]/45 rounded-full px-3 py-1.5">Violet line</span>
            </div>
            <h2 id="station-ia" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
              L'IA générative, appliquée à votre métier
            </h2>
            <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
              Des formations concrètes à l'IA générative pour les professionnels et les équipes : ChatGPT, ingénierie de prompts et outils IA, branchés directement sur vos tâches réelles — du gain de temps dès la première session.
            </p>
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
        <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-creations">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true"
            style={{ background: 'radial-gradient(60% 70% at 92% 0%, rgba(240,151,74,.12), transparent 55%)' }} />
          <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#F0974A] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#F0974A]" aria-hidden="true"
            style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(240,151,74,.55)' }} />
          <div className="relative max-w-6xl mx-auto pl-12 sm:pl-20 pr-4 py-14 sm:py-20">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">04 · Ligne Créations</span>
              <span className="font-heading text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#F0974A] border border-[#F0974A]/45 rounded-full px-3 py-1.5">Amber line</span>
            </div>
            <h2 id="station-creations" className="mt-3 font-heading font-extrabold tracking-tight text-2xl sm:text-4xl leading-tight">
              Votre présence en ligne, construite avec l'IA
            </h2>
            <p className="mt-3 max-w-2xl text-[#CBCFE4] font-body leading-relaxed">
              Des sites web et des outils sur mesure pour entreprises et indépendants, conçus et développés avec l'IA — rapides, soignés et abordables. De la page qui convertit à l'outil interne qui fait gagner des heures.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Sites</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Vitrine &amp; conversion</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Outils</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">Sur mesure</h3></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="font-heading text-[0.6rem] uppercase tracking-[0.16em] text-[#8b93b6]">Méthode</p><h3 className="mt-1.5 font-heading font-semibold text-white text-base">L'IA au service du métier</h3></div>
            </div>
            <a href="https://creations.antonyaddy.com" target="_blank" rel="noopener"
               onClick={() => trackEvent('station_route_click', { formation: 'creations', target: 'https://creations.antonyaddy.com' })}
               className="mt-8 inline-flex items-center gap-2 bg-[#F0974A] text-[#1a1200] font-heading font-bold uppercase tracking-[0.12em] text-xs px-6 py-3.5 rounded-full hover:-translate-y-0.5 transition-transform">
              Ouvrir creations.antonyaddy.com <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ===== LES PASSAGERS — proof, as people who rode the line (dark station) ===== */}
        <section className="relative overflow-hidden bg-[#070b22] text-[#F2EDE1]" aria-labelledby="station-passagers">
          <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#CBCFE4] opacity-30" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#CBCFE4]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22' }} />
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

        <section className="relative overflow-hidden py-14 sm:py-16 bg-[#0b1030] text-[#F2EDE1] border-t border-white/5">
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
          <span className="pointer-events-none absolute top-0 bottom-0 left-5 sm:left-8 w-px bg-[#F6A463] opacity-50" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 sm:left-8 -ml-[6px] top-[72px] w-3 h-3 rounded-full bg-[#070b22] border-2 border-[#F6A463]" aria-hidden="true" style={{ boxShadow: '0 0 0 4px #070b22, 0 0 12px rgba(246,164,99,.6)' }} />
          <div className="relative max-w-3xl mx-auto pl-12 sm:pl-20 pr-4 py-16 sm:py-24">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#8b93b6]">Prochain arrêt</span>
            <h2 id="station-contact" className="mt-3 font-heading font-extrabold tracking-tight text-3xl sm:text-5xl leading-[1.03]">
              Un projet en anglais, en IA ou un site web ?<br /><span className="text-[#F6A463]">Mind the gap.</span>
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
