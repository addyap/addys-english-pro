
import React from 'react';
import { Award, MapPin, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const About = () => {
  return (
    <>
      <SEOHead {...seoMetadata.about} />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/lovable-uploads/3a23b0a6-a218-4cdd-b92b-4fbf7beee415.png" alt="Antony Addy, Formateur d'anglais professionnel" className="w-48 h-48 rounded-full object-cover shadow-lg" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Antony Addy</h1>
                <p className="text-xl text-blue-600 mb-4">Formateur Professionnel d'Adultes – anglais, natif du Royaume-Uni</p>
                <p className="text-lg text-gray-600">
                  Prestataire de formation indépendant spécialisé en anglais professionnel
                </p>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certification FPA</h3>
              <p className="text-gray-600">Formateur Professionnel d'Adultes avec NDA actif</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">20+ années</h3>
              <p className="text-gray-600">D'expérience en formation d'anglais professionnel</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Alpes-Maritimes + France</h3>
              <p className="text-gray-600">Présentiel dans les Alpes-Maritimes, distanciel national</p>
            </div>
          </div>

          {/* Biography Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Je propose des formations en anglais adaptées aux adultes, aux centres de formation, aux écoles spécialisées,
                aux universités et aux entreprises. Mon approche repose sur l'écoute, l'adaptation, et une expertise fondée sur
                plusieurs années d'intervention dans des contextes variés.
              </p>
              
              <p className="mb-6">
                Natif anglais, Antony a développé une approche pédagogique unique, centrée sur la 
                communication professionnelle pratique. Son style d'enseignement est reconnu pour 
                être humain, flexible et parfaitement orienté vers les besoins concrets du monde 
                du travail.
              </p>

              <p className="mb-6">
                Titulaire d'un Numéro de Déclaration d'Activité (NDA) actif, Antony collabore 
                exclusivement avec des organismes certifiés Qualiopi pour les formations CPF, 
                garantissant ainsi la qualité et la conformité réglementaire de ses interventions.
              </p>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Domaines d'expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Secteur tertiaire</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Commerce & Vente</li>
                  <li>• Service Client & Accueil</li>
                  <li>• Immobilier</li>
                  <li>• Banque & Assurance</li>
                  <li>• Marketing & Communication</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Tourisme & Hôtellerie</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hôtellerie & Tourisme</li>
                  <li>• Accueil international</li>
                  <li>• Services aux voyageurs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Administration & Gestion</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ressources Humaines</li>
                  <li>• Administration & Secrétariat</li>
                  <li>• Formation & Enseignement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Technique & Industrie</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Logistique & Transport</li>
                  <li>• Industrie & Technique</li>
                  <li>• Informatique & Digital</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Publics spécifiques</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                  <li>• Cadres & Managers</li>
                  <li>• Étudiants & Alternants</li>
                  <li>• Recherche d'emploi / Insertion professionnelle</li>
                  <li>• Secteur Public & Collectivités</li>
                  <li>• Écoles & Centres de Formation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Partners & Certifications */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partenaires et certifications</h2>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Antony intervient en collaboration avec :
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-blue-600 font-medium">
                <span>Centres de Formation</span>
                <span>•</span>
                <span>Écoles de Commerce</span>
                <span>•</span>
                <span>Écoles Spécialisées</span>
                <span>•</span>
                <span>Universités</span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Toutes les formations CPF sont assurées via des organismes certifiés Qualiopi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
