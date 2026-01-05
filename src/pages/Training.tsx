
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
        title="Formations Anglais Professionnel | Antony Addy"
        description="Formations d'anglais sur mesure : CPF, entreprises, particuliers. Présentiel Alpes-Maritimes ou distanciel France entière. Devis gratuit."
        canonicalUrl="https://www.antonyaddy.com/offres-de-formation"
        enableOrgJsonLd
        enableWebSiteJsonLd
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Formations d'anglais professionnel par Antony Addy"
        keywords={[
          "formation anglais",
          "CPF anglais",
          "cours entreprise",
          "formation à distance",
          "anglais Alpes-Maritimes",
          "préparation TOEIC"
        ]}
        jsonLd={[trainingJsonLd, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Quels types de formations d'anglais proposez-vous ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Je propose plusieurs types de formations : anglais général, anglais professionnel, anglais téléphonique et email, anglais spécialisé (vente, RH, immobilier, hôtellerie), et préparation aux certifications (TOEIC, CLOE, Bright)."
              }
            },
            {
              "@type": "Question",
              name: "Les formations sont-elles disponibles en ligne ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, toutes les formations sont disponibles en ligne (visioconférence) pour toute la France, ou en présentiel dans les Alpes-Maritimes (Cannes, Antibes, Nice, Monaco)."
              }
            },
            {
              "@type": "Question",
              name: "Puis-je financer ma formation avec mon CPF ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, les formations peuvent être financées via le CPF en passant par des organismes de formation certifiés Qualiopi partenaires."
              }
            }
          ]
        }]}
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
                Formations d'anglais professionnel
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des formations concrètes pour communiquer avec confiance en anglais dans votre vie professionnelle
              </p>
            </div>
          </FadeInSection>

          <hr className="border-t border-border mb-12" />

          {/* Pour qui */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Pour qui ?</h2>
              
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">Professionnels en poste</strong> qui ont besoin de l'anglais au quotidien : réunions, emails, appels clients, présentations.
              </p>
              
              <p className="text-muted-foreground mb-4">
                <strong className="text-primary">Personnes en reconversion</strong> ou recherche d'emploi, accompagnées par France Travail ou un OPCO, qui veulent valoriser leur profil.
              </p>
              
              <p className="text-muted-foreground">
                <strong className="text-primary">Étudiants en école de commerce ou formation continue</strong> qui préparent leur entrée dans le monde professionnel.
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
                En parallèle de mes formations, je mets à disposition des{' '}
                <Link 
                  to="/exercices"
                  className="font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  ressources gratuites
                </Link>
                {' '}— grammaire claire, vocabulaire utile, dialogues pratiques, quiz interactifs, et bien plus.
              </p>
            </div>
          </FadeInSection>

          {/* Contact */}
          <FadeInSection>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Commencer</h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Prenez contact pour un premier échange gratuit. Je vous aide à définir vos objectifs et à choisir la formule adaptée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
                  Réserver un premier échange
                </Link>
                <a href="https://wa.me/33649829826" className="bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-4 rounded-lg font-semibold transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp direct
                </a>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>formations@antonyaddy.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+33 6 49 82 98 26</span>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Réponse sous 24h • Sans engagement • Devis gratuit
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default Training;
