
import React from 'react';
import { Users, Building, GraduationCap, CheckCircle, AlertCircle, Globe, MapPin, Phone, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Training = () => {
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
      <SEOHead {...seoMetadata.training} />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Offres de formation en anglais
            </h1>
            <p className="text-xl text-muted-foreground">
              Formations en face à face ou à distance, avec un formateur professionnel, natif britannique
            </p>
          </div>

          <hr className="border-t border-border mb-12" />

          {/* Je vous accompagne */}
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

          {/* Ce que je propose */}
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

          {/* Où et comment */}
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

          {/* Et en attendant */}
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

          {/* Contact */}
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
              <a href="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                <span className="mr-2">👉</span>
                Envoyer un message
              </a>
              <a href="https://wa.me/33649829826" className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
