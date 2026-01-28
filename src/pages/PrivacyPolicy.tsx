
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Politique de Confidentialité | antonyaddy.com"
        description="Politique de confidentialité et gestion des données personnelles conformément au RGPD sur antonyaddy.com."
        canonicalUrl="https://www.antonyaddy.com/politique-confidentialite"
        keywords={["politique confidentialité", "RGPD", "données personnelles", "vie privée"]}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Politique de confidentialité
            </h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.
              </p>
              
              <p className="mb-6">
                Les seules informations collectées le sont via le formulaire de contact ou les échanges directs
                par email ou WhatsApp. Ces données sont utilisées uniquement pour répondre à vos demandes de
                formation, et ne sont jamais transmises à des tiers.
              </p>

              <p className="mb-6">
                Aucune donnée de navigation, de géolocalisation, ni de profilage n'est stockée ou analysée à
                des fins commerciales.
              </p>

              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez à tout moment :
              </p>

              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Demander l'accès à vos données personnelles</li>
                <li>Demander leur rectification ou suppression</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>

              <p className="mb-6">
                Pour toute demande relative à vos données personnelles, contactez :
                <strong> formations@antonyaddy.com</strong>
              </p>

              <p className="text-sm text-gray-600">
                Hébergement du site : Bluehost – www.bluehost.com
              </p>

              {/* Internal Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Explorer le site
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
                  <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                  <Link to="/mentions-legales" className="text-blue-600 hover:underline">Mentions légales</Link>
                  <Link to="/offres-de-formation" className="text-blue-600 hover:underline">Formations</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
