
import React from 'react';
import { Users, Building, GraduationCap, CheckCircle, AlertCircle, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { FadeInSection, Accordion } from '../components/Effects';
import { CourseSchema } from '@/lib/seo/structuredData';
import { seoMetadata } from '../utils/seoMetadata';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';

const Training = () => {
  useScrollTracking('training');
  useTimeTracking('training');
  const trainingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formations d'anglais professionnel",
    "description": "Formations d'anglais personnalisées pour adultes, en ligne ou en présentiel",
    "provider": {
      "@type": "Person",
      "name": "Antony Addy",
      "jobTitle": "Formateur Professionnel d'Adultes certifié"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H"
      },
      {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Alpes-Maritimes",
            "addressCountry": "FR"
          }
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "eligibleRegion": {
        "@type": "Place",
        "name": "France"
      }
    }
  };

  const formations = [
    {
      title: 'Anglais général',
      description: 'Pour améliorer votre fluidité, votre compréhension et votre confiance dans les échanges quotidiens.'
    },
    {
      title: 'Anglais professionnel',
      description: 'Pour travailler efficacement en anglais dans votre métier (réunions, appels, présentations, rédaction).'
    },
    {
      title: 'Anglais téléphonique et email',
      description: 'Pour parler avec clarté au téléphone et rédiger des messages professionnels sans stress.'
    },
    {
      title: 'Anglais spécialisé',
      description: 'Formation adaptée à votre secteur : Vente, RH, Immobilier, Hôtellerie, Accueil, etc.'
    },
    {
      title: 'Préparation à une certification',
      description: 'Accompagnement structuré pour réussir le TOEIC, CLOE, Bright ou autre test selon vos objectifs.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Offres de formation en anglais – Antony Addy"
        description="Découvrez les formations d'anglais proposées par Antony Addy : anglais professionnel, CPF, entreprises, particuliers en présentiel et à distance."
        canonicalUrl="https://antonyaddy.com/offres-de-formation"
        keywords={[
          "formation anglais",
          "anglais professionnel",
          "CPF",
          "cours individuels",
          "anglais pour entreprises",
          "formation continue",
          "cours à distance",
          "Antony Addy",
          "anglais Alpes-Maritimes",
          "formateur natif britannique",
          "anglais des affaires",
          "présentiel et visioconférence"
        ]}
        jsonLd={trainingJsonLd}
      />
      <CourseSchema
        name="Formations d'anglais professionnel"
        description="Formations personnalisées en anglais professionnel pour adultes, éligibles CPF, en ligne ou en présentiel dans les Alpes-Maritimes."
        provider={{
          name: "Antony Addy",
          url: "https://antonyaddy.com"
        }}
      />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <FadeInSection>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Offres de formation en anglais
              </h1>
              <p className="text-xl text-muted-foreground">
                Formations en face à face ou à distance, avec un formateur professionnel, natif britannique
              </p>
            </div>
          </FadeInSection>

          <hr className="border-t border-border mb-12" />

          {/* Je vous accompagne */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">👋</span>
                <h2 className="text-2xl font-bold text-primary">Je vous accompagne en anglais</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Je propose des formations d'anglais sur mesure pour adultes, avec un accompagnement sérieux, motivant et professionnel.
              </p>
              
              <p className="text-muted-foreground">
                <span className="text-lg mr-2">👉</span>
                Que vous soyez salarié·e, indépendant·e, étudiant·e ou en reconversion, je vous aide à progresser efficacement.
              </p>
            </div>
          </FadeInSection>

          {/* Formation categories with Accordion */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📚</span>
                <h2 className="text-2xl font-bold text-primary">Types de formations</h2>
              </div>
              
              <Accordion title="Formations CPF">
                <p>Formations éligibles au <span className="transition duration-300 hover:bg-yellow-100 rounded px-1">CPF</span>, personnalisées selon votre métier et vos besoins professionnels.</p>
              </Accordion>
              <Accordion title="Formations en entreprise">
                <p>Sessions de formation adaptées à vos équipes, sur site ou à distance, avec contenus sur mesure.</p>
              </Accordion>
              <Accordion title="Centres de formation et écoles">
                <p>Interventions dans des établissements comme ESCCOM, ITEC, et universités, avec approche certifiée.</p>
              </Accordion>
            </div>
          </FadeInSection>

          {/* Ce que je propose */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🎯</span>
                <h2 className="text-2xl font-bold text-primary">Ce que je propose</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Chaque formation est pensée pour vous aider dans votre vie professionnelle, tout en prenant en compte vos besoins personnels : confiance, aisance à l'oral, progression visible.
              </p>
              
              <p className="font-medium text-primary mb-6">
                Voici quelques exemples de formations possibles :
              </p>
              
              <div className="space-y-6">
                {formations.map((formation, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-primary mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {formation.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                <p className="text-accent-foreground">
                  <span className="text-lg mr-2">🛠️</span>
                  <strong>Toutes les formations sont personnalisées, flexibles et orientées vers des résultats concrets.</strong>
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Où et comment */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">📍</span>
                <h2 className="text-2xl font-bold text-primary">Où et comment ?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">En ligne</h3>
                    <p className="text-muted-foreground text-sm">toute la France et à l'international</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">En présentiel</h3>
                    <p className="text-muted-foreground text-sm">Cannes, Antibes, Nice, Monaco</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2 text-muted-foreground">
                <p>• Séances individuelles ou petits groupes</p>
                <p>• Rythme flexible, selon vos besoins</p>
              </div>
            </div>
          </FadeInSection>

          {/* Et en attendant */}
          <FadeInSection>
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">🌐</span>
                <h2 className="text-2xl font-bold text-primary">Et en attendant ?</h2>
              </div>
              
              <p className="text-muted-foreground">
                <span className="text-lg mr-2">🎓</span>
                En parallèle de mes formations, je mets à disposition des ressources gratuites sur{' '}
                <a 
                  href="https://anglaisadistance.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  anglaisadistance.fr
                </a>
                {' '}— un site dédié à l'apprentissage de l'anglais en autonomie : grammaire claire, vocabulaire utile, dialogues pratiques, quiz interactifs, et bien plus.
              </p>
            </div>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-2xl mr-3">📞</span>
                <h2 className="text-2xl font-bold text-primary">Discutons ensemble de vos besoins</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Je réponds rapidement à toutes vos demandes. Vous pouvez me contacter directement ici :
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-muted-foreground">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>formations@antonyaddy.com</span>
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>WhatsApp : +33 6 49 82 98 26</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  <span className="mr-2">💬</span>
                  Parlons de votre projet
                </Link>
                <a href="https://wa.me/33649829826" className="animate-pulse ring ring-yellow-400 ring-offset-2 bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-3 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default Training;
