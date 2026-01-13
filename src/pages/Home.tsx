import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, ExternalLink, Building, GraduationCap, Target, Briefcase, Settings, School, University, MapPin, Headphones, Sparkles, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import SEOHead, { jsonLdWebsite, jsonLdOrganization, jsonLdPerson } from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { LazyClientCarousel } from '@/components/LazySwiper';
import FloatingExerciseCTA from '@/components/FloatingExerciseCTA';


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
  crossword: 4,       // crosswordExercises
  matching: 4,        // matchingExercises
  dialogue: 4,        // dialogueExercises
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
        title="Formateur Anglais Professionnel | Antony Addy"
        description="Formations d'anglais sur mesure avec un formateur britannique certifié FPA. CPF, entreprises, particuliers. Présentiel Alpes-Maritimes ou distanciel France."
        canonicalUrl="https://www.antonyaddy.com/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified="2025-12-26T10:00:00+01:00"
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
      {/* Floating CTA for mobile */}
      <FloatingExerciseCTA />

      {/* Optimized Hero Section */}
      <OptimizedHero />

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
                    fetchPriority="high"
                  />
                  <p className="text-sm text-muted-foreground mt-3 text-center lg:text-left font-body italic">
                    En formation avec des professionnels
                  </p>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-body">
                  <strong className="text-primary">Antony Addy</strong> — Britannique, certifié Formateur Professionnel d'Adultes depuis 2017, plus de 20 ans d'expérience en formation d'anglais.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">
                  J'aide les professionnels à communiquer avec confiance en anglais : réunions, négociations, présentations. Mon approche est directe, bienveillante et adaptée à vos enjeux réels.
                </p>
                <div className="text-center lg:text-left">
                  <Link to="/qui-je-suis" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
                    En savoir plus sur mon parcours
                  </Link>
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
                <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">55+</p>
                <p className="text-indigo-200 text-sm">Exercices écrits</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
                <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">380+</p>
                <p className="text-indigo-200 text-sm">Questions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
                <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">5</p>
                <p className="text-indigo-200 text-sm">Compétences</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 hover:border-yellow-500/40 transition-colors group">
                <p className="text-4xl font-bold text-yellow-400 mb-1 group-hover:scale-110 transition-transform">A1→C1</p>
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

        {/* Interactive Exercises Section - ENGAGING & VALUE-FOCUSED */}
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
                <p className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">12</p>
                <p className="text-gray-400 text-sm font-medium">Catégories</p>
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
                className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-blue-600/30 hover:to-blue-800/30 transition-all cursor-pointer group border border-blue-500/20 hover:border-blue-500/40 hover:scale-[1.02]"
              >
                <GraduationCap className="h-7 w-7 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.grammar}</p>
                <p className="text-xs text-gray-400">Grammaire</p>
              </Link>
              
              <Link 
                to="/exercices?tab=vocabulary" 
                className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-emerald-600/30 hover:to-emerald-800/30 transition-all cursor-pointer group border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-[1.02]"
              >
                <Sparkles className="h-7 w-7 mx-auto mb-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.vocabulary}</p>
                <p className="text-xs text-gray-400">Vocabulaire</p>
              </Link>
              
              <Link 
                to="/exercices/listening" 
                className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-purple-600/30 hover:to-purple-800/30 transition-all cursor-pointer group border border-purple-500/20 hover:border-purple-500/40 hover:scale-[1.02]"
              >
                <Headphones className="h-7 w-7 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-bold mb-0.5">{EXERCISE_COUNTS.listening}</p>
                <p className="text-xs text-gray-400">Écoute</p>
              </Link>
              
              <Link 
                to="/reading" 
                className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm rounded-xl p-4 text-center hover:from-amber-600/30 hover:to-amber-800/30 transition-all cursor-pointer group border border-amber-500/20 hover:border-amber-500/40 hover:scale-[1.02]"
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
                <a href="https://wa.me/33649829826" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-5 py-3 rounded-full text-base font-semibold shadow transition">
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


        {/* Post-Testimonials CTA - Capture warm leads */}
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
              <a href="https://wa.me/33649829826" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 font-body" target="_blank" rel="noopener noreferrer">
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
      </main>
    </>;
};

export default Home;
