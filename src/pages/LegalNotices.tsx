
import React from 'react';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const LegalNotices = () => {
  return (
    <>
      <SEOHead 
        title="Mentions légales – Antony Addy | Formateur Anglais"
        description="Mentions légales et informations sur la protection des données (RGPD) du site antonyaddy.com"
        canonicalUrl="https://antonyaddy.com/mentions-legales"
        keywords={[
          "mentions légales",
          "site internet",
          "propriété intellectuelle",
          "politique juridique",
          "Antony Addy",
          "conditions générales",
          "formateur indépendant",
          "France",
          "Alpes-Maritimes",
          "RGPD",
          "données personnelles"
        ]}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="max-w-3xl mx-auto text-neutral-800">
              <h1 className="text-3xl font-bold text-primary mb-6">Mentions Légales</h1>

              <p className="mb-2">
                <strong>Nom :</strong> Antony Addy
              </p>
              <p className="mb-2">
                <strong>Statut :</strong> Entrepreneur Individuel
              </p>
              <p className="mb-2">
                <strong>SIRET :</strong> 483 178 893 00028
              </p>
              <p className="mb-2">
                <strong>Responsable de la publication :</strong> Antony Addy
              </p>
              <p className="mb-6">
                <strong>Hébergeur :</strong> Bluehost –{" "}
                <a
                  href="https://www.bluehost.com"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.bluehost.com
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">
                Protection des données (RGPD)
              </h2>

              <p className="mb-4">
                Ce site respecte le <strong>Règlement Général sur la Protection des
                Données (RGPD)</strong>. Les informations collectées via le formulaire
                de contact (nom, email, message) sont utilisées exclusivement pour
                répondre à votre demande et ne sont jamais partagées avec des tiers.
              </p>

              <p className="mb-4">
                Vous pouvez demander l'accès, la modification ou la suppression de vos
                données personnelles à tout moment en écrivant à :
              </p>

              <p>
                📧{" "}
                <a
                  href="mailto:formations@antonyaddy.com"
                  className="text-blue-700 font-medium underline"
                >
                  formations@antonyaddy.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNotices;
