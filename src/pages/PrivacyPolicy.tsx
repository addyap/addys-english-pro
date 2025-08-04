
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
            <p className="text-lg text-gray-600 mb-8">
              Page de politique de confidentialité en cours de rédaction.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Collecte des données
            </h2>
            <p>
              Les données personnelles collectées via le formulaire de contact 
              (nom, prénom, email, message) sont utilisées uniquement dans le cadre 
              de la prise de contact pour les formations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Conservation et traitement
            </h2>
            <p>
              Vos données sont conservées de manière sécurisée et ne sont pas 
              transmises à des tiers sans votre consentement explicite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
