import React from 'react';
import { Users, Building, GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const Training = () => {
  const directTraining = [{
    title: 'Emailing professionnel',
    description: 'Maîtrisez la rédaction d\'emails efficaces en anglais',
    duration: '10-15 heures',
    level: 'Tous niveaux'
  }, {
    title: 'Réunions en anglais',
    description: 'Participez activement et animez vos réunions internationales',
    duration: '15-20 heures',
    level: 'Intermédiaire+'
  }, {
    title: 'Communication téléphonique',
    description: 'Gérez vos appels professionnels avec assurance',
    duration: '8-12 heures',
    level: 'Tous niveaux'
  }, {
    title: 'Entretiens et négociation',
    description: 'Préparez vos entretiens et négociations en anglais',
    duration: '12-18 heures',
    level: 'Intermédiaire+'
  }];

  return <>
      <SEOHead {...seoMetadata.training} />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Offres de formation en anglais
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formations adaptées à vos besoins, en direct ou via CPF avec organismes agréés
            </p>
          </div>

          {/* Training Types */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Direct Training */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-accent mr-3" />
                <h2 className="text-2xl font-bold text-primary">Formations en direct</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Pour qui ?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Particuliers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Entreprises
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Écoles et institutions
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Modalités</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>En ligne :</strong> Toute la France
                </p>
                <p className="text-muted-foreground">
                  <strong>En présentiel :</strong> Var (Fréjus, Saint-Raphaël, Draguignan)
                </p>
              </div>
            </div>

            {/* CPF Training */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-primary">Formations CPF</h2>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Formations CPF assurées uniquement via organismes certifiés Qualiopi
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Antony intervient en tant que prestataire pédagogique
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">Processus</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-sm font-medium rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
                    Le centre certifié gère l'enregistrement CPF
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-sm font-medium rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
                    Le centre assure le suivi administratif
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent text-sm font-medium rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
                    Antony assure la prestation pédagogique
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Sectors */}
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Secteurs d'activité couverts
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Building className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Commerce & Vente</h3>
                <p className="text-sm text-muted-foreground">Négociation, relation client, présentation produits</p>
              </div>
              
              <div className="text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Ressources Humaines</h3>
                <p className="text-sm text-muted-foreground">Entretiens, formation, communication interne</p>
              </div>
              
              <div className="text-center">
                <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Hôtellerie & Luxe</h3>
                <p className="text-sm text-muted-foreground">Accueil client, service premium, événementiel</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Intéressé par une formation ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contactez-moi pour discuter de vos besoins spécifiques et créer un programme 
              de formation sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Me contacter
              </a>
              <a href="https://wa.me/33649829826" className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Training;
