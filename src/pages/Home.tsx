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

      {/* Trust / authority strip — instant credibility under the hero */}
      <section className="bg-background py-8 border-b border-border" aria-label="Indicateurs de confiance">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading">20+</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Années d'expérience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading">500+</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Apprenants accompagnés</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading">FPA</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Certifié depuis 2017</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-primary font-heading">24h</p>
            <p className="text-sm text-muted-foreground font-body mt-1">Réponse garantie</p>
          </div>
        </div>
        <p className="max-w-4xl mx-auto px-4 mt-6 text-center text-sm text-muted-foreground font-body">
          Particuliers, salariés, étudiants (BTS, Bachelor, Master), cadres et équipes : préparation aux entretiens, examens, réunions et présentations en anglais.
        </p>
      </section>

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
                  <p className="text-muted-foreground font-body mb-2">
                    Pratiquez l'expression orale, l'écrit, les entretiens et l'anglais professionnel avec un feedback IA instantané.
                  </p>
                  <p className="text-sm font-semibold text-accent font-body mb-4">
                    ✨ Testez gratuitement votre niveau — sans inscription
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


        {/* Contact CTA Section - Conversion-focused, WhatsApp-first */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Prêt à améliorer votre anglais professionnel ?</h2>
            <p className="text-xl mb-2 font-body">
              Discutons de votre projet de formation — premier échange gratuit et sans engagement.
            </p>
            <p className="text-base mb-8 font-body text-white/90">
              💬 Réponse rapide sous 24h · 100% personnalisé · Adapté à votre niveau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/33649829826" onClick={() => trackEvent('whatsapp_cta_click', { page: 'Home', target: 'https://wa.me/33649829826', location: 'final-cta' })} className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 font-body shadow-lg" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Contact WhatsApp · Réponse sous 24h
              </a>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 font-body">
                <Mail className="h-5 w-5" />
                Formulaire de contact
              </Link>
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
