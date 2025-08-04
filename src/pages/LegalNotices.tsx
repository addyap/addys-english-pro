
import React from 'react';

const LegalNotices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Mentions légales
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg text-gray-600 mb-8">
              Page des mentions légales en cours de rédaction.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Informations générales
            </h2>
            <p>
              <strong>Raison sociale :</strong> Antony Addy - Formateur indépendant<br />
              <strong>Activité :</strong> Formation professionnelle continue<br />
              <strong>Email :</strong> hello@antonyaddy.com
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Numéro de déclaration d'activité
            </h2>
            <p>
              Organisme de formation déclaré sous le numéro [NDA à compléter].
              Cet enregistrement ne vaut pas agrément de l'État.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;
