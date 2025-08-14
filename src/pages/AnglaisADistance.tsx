import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, MessageCircle, Brain, Trophy, Target, AlertTriangle, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AnglaisADistance = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Grammaire essentielle',
      description: 'Les règles de grammaire anglaise expliquées simplement avec exercices pratiques',
      link: 'https://anglaisadistance.fr/grammaire-essentielle'
    },
    {
      icon: Target,
      title: 'Vocabulaire thématique',
      description: 'Listes de mots par thème professionnel et général avec audio',
      link: 'https://anglaisadistance.fr/vocabulaire'
    },
    {
      icon: MessageCircle,
      title: 'Dialogues par niveau',
      description: 'Conversations authentiques du niveau A1 au C2 avec transcriptions',
      link: 'https://anglaisadistance.fr/dialogues'
    },
    {
      icon: Brain,
      title: 'Jeux interactifs',
      description: 'Exercices ludiques pour apprendre en s\'amusant',
      link: 'https://anglaisadistance.fr/quizz'
    },
    {
      icon: Trophy,
      title: 'Tests de niveau',
      description: 'Évaluez votre niveau d\'anglais avec nos tests gratuits',
      link: 'https://anglaisadistance.fr/test-de-niveau'
    },
    {
      icon: AlertTriangle,
      title: 'Pièges classiques',
      description: 'Les erreurs fréquentes en anglais expliquées simplement avec exemples et quiz',
      link: 'https://anglaisadistance.fr/pieges-classiques'
    }
  ];

  return (
    <>
      <SEOHead
        title="anglaisadistance.fr – Ressources gratuites pour apprendre l'anglais"
        description="Explorez grammaire, vocabulaire, dialogues, quiz et plus encore sur anglaisadistance.fr – la plateforme gratuite dédiée à l'apprentissage de l'anglais."
        canonicalPath="/anglaisadistance"
        keywords={[
          "anglais à distance",
          "grammaire anglaise", 
          "vocabulaire anglais",
          "dialogues anglais",
          "quiz anglais",
          "formation anglais à distance",
          "cours d'anglais en ligne",
          "anglais professionnel",
          "formateur anglais",
          "CPF",
          "anglais pour adultes",
          "apprendre l'anglais",
          "Alpes-Maritimes",
          "formation en visioconférence"
        ]}
      />

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/d96440ab-4b9c-4f42-9910-75051d4f8b0e.png"
              alt="anglaisadistance.fr"
              className="h-32 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-heading">
            Ressources gratuites d'anglais
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-body">
            Accédez à une bibliothèque complète de supports pédagogiques gratuits pour apprendre l'anglais à votre rythme. 
            Tous les contenus sont créés par Antony Addy, formateur professionnel certifié.
          </p>
          <a
            href="https://anglaisadistance.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-lg font-body"
          >
            Visiter anglaisadistance.fr
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-muted rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-full group-hover:scale-110 transition-transform">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors font-body"
                >
                  Accéder aux ressources
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center font-heading">
              Pourquoi utiliser anglaisadistance.fr ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                  ✅ Contenu pédagogique de qualité
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Tous les supports sont créés par un formateur professionnel certifié avec plus de 20 ans d'expérience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                  ✅ Apprentissage autonome
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Progressez à votre rythme avec des ressources adaptées à tous les niveaux, du débutant au confirmé.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                  ✅ Gratuit et accessible
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Toutes les ressources sont entièrement gratuites et accessibles 24h/24, 7j/7.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3 font-heading">
                  ✅ Régulièrement mis à jour
                </h3>
                <p className="text-muted-foreground mb-4 font-body">
                  De nouveaux contenus sont ajoutés régulièrement pour enrichir votre apprentissage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80 font-body">
            Complétez vos ressources gratuites avec une formation sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/offres-de-formation"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-body"
            >
              Voir mes formations
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors font-body"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnglaisADistance;
