import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, MessageSquare, ExternalLink, UserCheck, Building, GraduationCap, Target, Briefcase, Settings, MessageCircle, Mail, School, University, MapPin, Factory } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SEOHead, { jsonLdWebsite, jsonLdOrganization, jsonLdPerson } from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import OptimizedHero from '../components/OptimizedHero';
import { TypingText } from '../components/TypingText';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';

const Home = () => {
  useScrollTracking('home');
  useTimeTracking('home');
  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Antony Addy — Formateur d'anglais",
      "url": "https://www.antonyaddy.com",
      "description": "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.antonyaddy.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Antony Addy - Formateur d'anglais",
      "description": "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes",
      "url": "https://www.antonyaddy.com",
      "email": "formations@antonyaddy.com",
      "areaServed": "France",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Alpes-Maritimes",
        "addressCountry": "FR"
      }
    }
  ];

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
        title="Formateur d'anglais pour adultes – Antony Addy"
        description="Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes. CPF via centres certifiés Qualiopi. Formateur natif britannique certifié FPA."
        canonicalPath="/"
        datePublished="2025-01-15T10:00:00+01:00"
        dateModified="2025-01-15T10:00:00+01:00"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Antony Addy, formateur d'anglais professionnel certifié FPA animant une session de formation"
        keywords={["Anglais professionnel", "Formateur anglais natif", "Antony Addy", "CPF", "Formation d'anglais", "Cours d'anglais en ligne", "Anglais pour adultes", "Alpes-Maritimes", "Formation continue", "Formateur britannique", "FPA certifié"]}
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

        {/* anglaisadistance.fr Block */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border mb-8">
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

            {/* Exercises Block */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                    100 Exercices d'Anglais
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 font-body">
                    Perfectionnez votre anglais avec 100 exercices ciblés sur les pièges les plus courants : grammaire, vocabulaire, faux amis...
                  </p>
                  <Link to="/exercices" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
                    Découvrir les exercices
                  </Link>
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
