
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, MessageSquare, ExternalLink } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Prestataire certifié FPA',
      description: 'Formateur Professionnel d\'Adultes certifié avec NDA actif'
    },
    {
      icon: Users,
      title: '20 ans d\'expérience',
      description: 'Expert en formation d\'anglais pour adultes et professionnels'
    },
    {
      icon: Globe,
      title: 'Anglais ciblé par secteur',
      description: 'Formations adaptées aux besoins spécifiques de votre domaine'
    },
    {
      icon: CheckCircle,
      title: 'CPF via partenaires',
      description: 'Formations CPF assurées via organismes certifiés Qualiopi'
    },
    {
      icon: BookOpen,
      title: 'Ressources complémentaires',
      description: 'Accès aux outils et supports via anglaisadistance.fr'
    }
  ];

  const testimonials = [
    {
      text: "Une formation vraiment adaptée à mes besoins en anglais commercial. Antony a su identifier mes points faibles et m'aider à progresser rapidement.",
      author: "Marie L.",
      role: "Responsable Export"
    },
    {
      text: "Excellent formateur, très pédagogue. Les modules sur l'anglais des réunions m'ont été particulièrement utiles.",
      author: "Thomas B.",
      role: "Chef de projet"
    },
    {
      text: "Professional training that really made a difference in my daily work. Highly recommend Antony's approach.",
      author: "Sarah M.",
      role: "Marketing Manager"
    }
  ];

  return (
    <>
      <SEOHead {...seoMetadata.home} />
      
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/p5UG08OsMGw?autoplay=1&mute=1&loop=1&playlist=p5UG08OsMGw&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&start=0"
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
            style={{
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.78vh', // 16:9 aspect ratio
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Hero Background Video"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Fallback background for when video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary -z-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg font-heading">
              Formations d'anglais professionnel pour adultes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-body">
              En ligne ou en présentiel — CPF via centres partenaires agréés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offres-de-formation"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md font-body"
              >
                Découvrir mes offres
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all font-body"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* anglaisadistance.fr Block */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/d96440ab-4b9c-4f42-9910-75051d4f8b0e.png"
                  alt="anglaisadistance.fr"
                  className="h-24 w-auto"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
                  Ressources gratuites en anglais
                </h2>
                <p className="text-lg text-muted-foreground mb-6 font-body">
                  Découvrez mes supports de grammaire, vocabulaire, dialogues, et jeux interactifs gratuitement sur anglaisadistance.fr.
                </p>
                <a
                  href="https://anglaisadistance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors font-body"
                >
                  Explorer les ressources
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">
            Pourquoi choisir mes formations ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-muted hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">{feature.title}</h3>
                <p className="text-muted-foreground font-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">
            Témoignages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-muted-foreground mb-4 italic font-body">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-primary font-heading">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/temoignages"
              className="text-accent hover:text-accent/80 font-medium font-body"
            >
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* Zone Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Zone d'intervention</h2>
            <p className="text-lg text-primary font-body">
              <span className="font-semibold">Présentiel :</span> Var (Fréjus, Saint-Raphaël, Draguignan)<br />
              <span className="font-semibold">Distanciel :</span> France entière
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Prêt à améliorer votre anglais professionnel ?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 font-body">
            Contactez-moi pour discuter de vos besoins en formation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-body"
            >
              Me contacter
            </Link>
            <a
              href="https://wa.me/33649829826"
              className="border-2 border-green-500 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:border-green-600 transition-colors flex items-center justify-center gap-2 font-body"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
