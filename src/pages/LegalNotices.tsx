
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { seoMetadata } from '../utils/seoMetadata';

const LegalNotices = () => {
  return (
    <>
      <SEOHead 
        title="Mentions Légales | antonyaddy.com"
        description="Mentions légales du site antonyaddy.com : éditeur, hébergeur, RGPD et protection des données personnelles."
        canonicalUrl="https://www.antonyaddy.com/mentions-legales"
        keywords={["mentions légales", "RGPD", "données personnelles"]}
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

              {/* Internal Links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-primary mb-3">
                  Explorer le site
                </h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
                  <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                  <Link to="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</Link>
                  <Link to="/offres-de-formation" className="text-blue-600 hover:underline">Formations</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalNotices;
