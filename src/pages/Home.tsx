import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, MessageSquare, ExternalLink, UserCheck, Building, GraduationCap, Target, Briefcase, Settings, MessageCircle, Mail, School, University, MapPin, Factory, Headphones, GripVertical, PenLine, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SEOHead, { jsonLdWebsite, jsonLdOrganization, jsonLdPerson } from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import { grammarCategories } from '@/data/grammarExercises';
import { allExercisesData } from '@/data/allExercises';
import { readingPassages } from '@/data/readingPassages';
import { listeningExercises } from '@/data/listeningExercises';
import { dragDropExercises } from '@/data/dragDropExercises';
import { sentenceTransformExercises, errorCorrectionExercises, fillParagraphExercises } from '@/data/writingExercises';
import { idiomExercises } from '@/data/idiomExercises';

// Exercise counts from actual data
const EXERCISE_COUNTS = {
  grammar: grammarCategories.length,
  vocabulary: allExercisesData.length,
  reading: readingPassages.length,
  listening: listeningExercises.length,
  dragDrop: dragDropExercises.length,
  writing: sentenceTransformExercises.length + errorCorrectionExercises.length + fillParagraphExercises.length,
  idioms: idiomExercises.length,
  get total() {
    return this.grammar + this.vocabulary + this.reading + this.listening + this.dragDrop + this.writing + this.idioms;
  }
};

const Home = () => {
  useScrollTracking('home');
  useTimeTracking('home');

  const features = [{
    icon: Globe,
    title: 'Anglais authentique avec un formateur britannique natif',
    description: 'Apprenez avec un native speaker pour une prononciation et une expression naturelles'
  }, {
    icon: Target,
    title: 'Cours adaptés aux besoins concrets des adultes',
    description: 'Formations ciblées selon vos objectifs professionnels et personnels'
  }, {
    icon: Award,
    title: 'Formateur Professionnel d\'Adultes certifié',
    description: 'Certification officielle FPA pour une pédagogie adaptée aux adultes'
  }, {
    icon: Users,
    title: 'Approche humaine et motivante',
    description: 'Un accompagnement personnalisé qui respecte votre rythme d\'apprentissage'
  }, {
    icon: Building,
    title: 'Expérience avec écoles, entreprises, et centres de formation',
    description: 'Partenariats établis avec de nombreuses institutions et organismes'
  }, {
    icon: CheckCircle,
    title: 'Disponible en présentiel (PACA) ou à distance (France entière)',
    description: 'Flexibilité géographique pour s\'adapter à vos contraintes'
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

      {/* Optimized Hero Section */}
      <OptimizedHero />

      <main id="main-content">
        {/* Qui je suis Section - Updated with split layout */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center font-heading">Qui je suis</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
                <div className="relative">
                  <img src="/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png" alt="Antony Addy animant une formation en anglais professionnel avec des apprenants adultes" className="w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200" width="350" height="auto" loading="lazy" />
                  <p className="text-sm text-muted-foreground mt-3 text-center lg:text-left font-body italic">
                    Formateur en action
                  </p>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="order-1 lg:order-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">
                  <TypingText texts={["Formateur Professionnel d'Adultes depuis 2017, avec plus de 20 ans d'expérience dans l'enseignement de l'anglais."]} speed={40} pause={3000} className="text-muted-foreground" />
                  {" "}Mon approche ? L'humour, l'adaptabilité, et la clarté. Je travaille avec tous types de profils — des écoles de commerce aux auto-entrepreneurs — toujours dans un esprit pratique et motivant.
                </p>
                <div className="text-center lg:text-left">
                  <Link to="/qui-je-suis" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Exercises CTA Banner */}
        <section className="py-8 bg-accent text-accent-foreground">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-full p-3">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">🎯 Pratiquez votre anglais maintenant !</p>
                  <p className="text-sm text-accent-foreground/90">{EXERCISE_COUNTS.total}+ exercices interactifs gratuits — Grammaire, Vocabulaire, Écoute, Lecture</p>
                </div>
              </div>
              <Link 
                to="/exercices" 
                className="bg-white text-accent px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
              >
                Commencer les exercices
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

            {/* Existing client logos carousel */}
            <Swiper spaceBetween={40} slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 4
            }
          }} loop={false} autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }} modules={[Autoplay]} className="pb-8">
              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/a3da9e3b-1f6c-447a-b308-2ca44d071c67.png" alt="Logo IGY Vieux-Port de Cannes, partenaire formation anglais" className="h-24 object-contain mb-2" width="96" height="96" loading="lazy" />
                  <p className="text-sm font-medium text-primary">IGY Vieux-Port de Cannes</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/694fcb0f-d52b-44f3-8cbc-6c1a051e416b.png" alt="Logo ITEC, école partenaire pour formations d'anglais" className="h-24 object-contain mb-2" width="96" height="96" loading="lazy" />
                  <p className="text-sm font-medium text-primary">ITEC</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/6668f20c-7d63-477f-a5be-856e631eaaef.png" alt="Logo ESCCOM, école de commerce partenaire formations anglais" className="h-24 object-contain mb-2" width="96" height="96" loading="lazy" />
                  <p className="text-sm font-medium text-primary">ESCCOM</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex flex-col items-center">
                  <img src="/lovable-uploads/69034832-a004-43a5-b367-f4726a4d126a.png" alt="Logo Ingeneria Project, entreprise partenaire pour formations d'anglais professionnel" className="h-24 object-contain mb-2" width="96" height="96" loading="lazy" />
                  <p className="text-sm font-medium text-primary">Ingeneria</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Interactive Exercises Section - PROMINENT */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <BookOpen className="h-10 w-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Exercices d'Anglais Interactifs
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-body">
                6 types d'exercices pour maîtriser l'anglais : grammaire, vocabulaire, lecture, écoute, et plus encore
              </p>
            </div>

            {/* Exercise Category Cards - Clickable with animated icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              <Link 
                to="/exercices?tab=grammar" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <GraduationCap className="h-6 w-6 animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.grammar}</p>
                <p className="text-sm font-medium">Grammar</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Leçons & exercices</p>
              </Link>
              
              <Link 
                to="/exercices?tab=vocabulary" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Sparkles className="h-6 w-6 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.vocabulary}</p>
                <p className="text-sm font-medium">Vocabulary</p>
                <p className="text-xs text-primary-foreground/70 mt-1">QCM interactifs</p>
              </Link>
              
              <Link 
                to="/reading" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <BookOpen className="h-6 w-6 animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.reading}</p>
                <p className="text-sm font-medium">Reading</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Compréhension écrite</p>
              </Link>
              
              <Link 
                to="/exercices/listening" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Headphones className="h-6 w-6 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '0.9s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.listening}</p>
                <p className="text-sm font-medium">Listening</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Compréhension orale</p>
              </Link>
              
              <Link 
                to="/exercices?tab=dragdrop" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <GripVertical className="h-6 w-6 animate-[bounce_2s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.dragDrop}</p>
                <p className="text-sm font-medium">Drag & Drop</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Ordre des mots</p>
              </Link>
              
              <Link 
                to="/exercices?tab=writing" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/25 hover:scale-105 transition-all cursor-pointer group border border-white/10 hover:border-white/30"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <PenLine className="h-6 w-6 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
                </div>
                <p className="text-2xl font-bold mb-1">{EXERCISE_COUNTS.writing}</p>
                <p className="text-sm font-medium">Writing</p>
                <p className="text-xs text-primary-foreground/70 mt-1">Expression écrite</p>
              </Link>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Explications bilingues</p>
                  <p className="text-sm text-primary-foreground/80">Anglais avec traduction française</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Feedback immédiat</p>
                  <p className="text-sm text-primary-foreground/80">Correction et explications instantanées</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Suivi de progression</p>
                  <p className="text-sm text-primary-foreground/80">Tableau de bord personnel</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/exercices" 
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <GraduationCap className="h-6 w-6" />
                Tous les exercices
              </Link>
              <Link 
                to="/exercices/listening" 
                className="inline-flex items-center gap-3 bg-white/20 text-primary-foreground border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
              >
                <Headphones className="h-6 w-6" />
                Écoute & Compréhension
              </Link>
            </div>
          </div>
        </section>

        {/* anglaisadistance.fr Block */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img src="/lovable-uploads/d96440ab-4b9c-4f42-9910-75051d4f8b0e.png" alt="Logo anglaisadistance.fr - Plateforme gratuite de ressources pédagogiques en anglais créée par Antony Addy" className="h-24 w-auto" width="96" height="96" loading="lazy" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                    Des ressources gratuites en anglais — à votre rythme
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 font-body">
                    J'ai créé anglaisadistance.fr pour offrir gratuitement des ressources fiables et accessibles à tous : grammaire, vocabulaire, dialogues, jeux...
                  </p>
                  <a href="https://anglaisadistance.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors font-body">
                    Découvrir les ressources
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
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

        {/* Avis Clients Section */}
        <AvisClients />

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
