
import React from 'react';

const PrivacyPolicy = () => {
  return (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
