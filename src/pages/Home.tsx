import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, MessageSquare, ExternalLink, UserCheck, Building, GraduationCap, Target, Briefcase, Settings, MessageCircle, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SEOHead from '../components/SEOHead';
import AvisClients from '../components/AvisClients';
import { seoMetadata } from '../utils/seoMetadata';

const Home = () => {
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
    title: 'CPF (Compte Personnel de Formation)',
    description: 'Parcours éligibles au CPF, assurés via partenaires certifiés Qualiopi. Formations adaptées à vos objectifs individuels.'
  }, {
    icon: Target,
    title: 'AFC – Actions de Formation Conventionnées',
    description: 'Financement par France Travail et les Régions. Je peux intervenir sous-traité par des organismes certifiés, selon les nouvelles règles 2025.'
  }, {
    icon: Users,
    title: 'Dispositifs d\'Accès à l\'Emploi (POE, POEI, AFPR)',
    description: 'Préparation des publics en reconversion dans le cadre des dispositifs pilotés par les OPCO ou France Travail.'
  }, {
    icon: GraduationCap,
    title: 'Formations Bachelor & Master',
    description: 'Soutien aux étudiants et alternants pour maîtriser l\'anglais académique et professionnel, en formation continue.'
  }, {
    icon: Settings,
    title: 'Autres Dispositifs (VAE, Pro-A, etc.)',
    description: 'Je suis mobilisable par le biais d\'organismes partenaires Qualiopi sur les dispositifs comme la VAE, l\'Agefiph, les missions locales, etc.'
  }];

  return <>
      <SEOHead {...seoMetadata.home} />
      
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe src="https://www.youtube.com/embed/p5UG08OsMGw?autoplay=1&mute=1&loop=1&playlist=p5UG08OsMGw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&start=0" className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover" style={{
          width: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          minWidth: '177.78vh'
        }} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={false} title="Hero Background Video" />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Fallback background for when video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary -z-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg font-heading leading-tight">
              Formateur d'anglais britannique pour adultes
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-body">
              Des formations claires, flexibles et efficaces — pour particuliers, professionnels et centres de formation.
            </p>
            <p className="text-lg mb-8 text-blue-200 italic font-body">Formateur britannique – Présentiel dans les Alpes-Maritimes, à distance partout en France</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offres-de-formation" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md font-body">
                Découvrir mes offres
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all font-body">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qui je suis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-heading">Qui je suis</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-body">
            Formateur d'anglais certifié, je suis natif britannique et j'accompagne des adultes en formation continue, CPF ou en reconversion. Mon approche ? L'humour, l'adaptabilité, et la clarté. Je travaille avec tous types de profils — des écoles de commerce aux auto-entrepreneurs — toujours dans un esprit pratique et motivant.
          </p>
          <div className="mt-8">
            <Link to="/qui-je-suis" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - 6 blocks in 2x3 grid */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">
            Pourquoi choisir mes formations ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="text-center p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">{feature.title}</h3>
                <p className="text-muted-foreground font-body">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Ils me font confiance Section - Swiper Carousel */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-primary mb-12">Ils me font confiance</h2>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            className="pb-8"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/IGY Vieux-Port de Cannes.png"
                  alt="IGY Vieux-Port de Cannes"
                  className="h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-primary">IGY Vieux-Port de Cannes</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/ITEC Logo.png"
                  alt="ITEC"
                  className="h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-primary">ITEC</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/Esccom logo.png"
                  alt="ESCCOM"
                  className="h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-primary">ESCCOM</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center">
                <img
                  src="/assets/Ingeneria Project Logo.png"
                  alt="Ingeneria"
                  className="h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-primary">Ingeneria</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* anglaisadistance.fr Block */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/lovable-uploads/d96440ab-4b9c-4f42-9910-75051d4f8b0e.png" alt="anglaisadistance.fr" className="h-24 w-auto" />
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
            {services.map((service, index) => <div key={index} className="text-center p-6 rounded-lg bg-muted hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">{service.title}</h3>
                <p className="text-muted-foreground font-body">{service.description}</p>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/offres-de-formation" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body">
              Voir toutes mes offres
            </Link>
          </div>
        </div>
      </section>

      {/* CPF Section - Discrete */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 border border-border/50">
            <h3 className="text-lg font-medium mb-2 text-primary font-heading">CPF, financement ou formation via organisme</h3>
            <p className="text-sm text-muted-foreground font-body">
              Je peux intervenir en tant que formateur dans le cadre de dispositifs tels que le CPF ou via des organismes de formation partenaires. N'hésitez pas à me contacter pour en discuter.
            </p>
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
                <img src="/lovable-uploads/de1467b6-7694-4b1e-b2c8-e4cb04b71b21.png" alt="Carte de la zone d'intervention - Côte d'Azur" className="w-full h-auto rounded-lg" />
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
    </>;
};

export default Home;
