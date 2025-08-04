
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Globe, Users, Award, BookOpen, MessageSquare } from 'lucide-react';
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Formations d'anglais professionnel pour adultes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              En ligne ou en présentiel — CPF via centres partenaires agréés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/offres-de-formation"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Découvrir mes offres
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi choisir mes formations ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Témoignages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/temoignages"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
      </section>

      {/* Zone Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Zone d'intervention</h2>
            <p className="text-lg text-gray-700">
              <span className="font-semibold">Présentiel :</span> Var (Fréjus, Saint-Raphaël, Draguignan)<br />
              <span className="font-semibold">Distanciel :</span> France entière
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer votre anglais professionnel ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-moi pour discuter de vos besoins en formation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Me contacter
            </Link>
            <a
              href="https://wa.me/33649829826"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2"
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
