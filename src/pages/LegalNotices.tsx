import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const LegalNotices = () => {
  return (
    <>
      <SEOHead
        title="Mentions Légales | antonyaddy.com"
        description="Mentions légales du site antonyaddy.com : éditeur, hébergeur, organisme de formation, RGPD et protection des données personnelles."
        canonicalUrl="https://www.antonyaddy.com/mentions-legales"
        keywords={["mentions légales", "RGPD", "organisme de formation", "données personnelles"]}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <section className="max-w-3xl mx-auto text-neutral-800">
              <h1 className="text-3xl font-bold text-primary mb-6">Mentions Légales</h1>

              <h2 className="text-2xl font-semibold text-primary mb-4">Éditeur du site</h2>
              <p className="mb-2"><strong>Nom :</strong> Antony Addy</p>
              <p className="mb-2"><strong>Statut juridique :</strong> Entrepreneur individuel — Auto-Entrepreneur (travailleur indépendant)</p>
              <p className="mb-2"><strong>Adresse professionnelle :</strong> 135 rue Henri Vadon, Résidence des Arènes, 83600 Fréjus, France</p>
              <p className="mb-2"><strong>SIRET :</strong> 48317889300028</p>
              <p className="mb-2"><strong>Code NAF/APE :</strong> 8559B — Autres enseignements</p>
              <p className="mb-2"><strong>TVA :</strong> TVA non applicable, art. 293 B du CGI</p>
              <p className="mb-2"><strong>Téléphone :</strong> +33 6 49 82 98 26</p>
              <p className="mb-2">
                <strong>Courriel :</strong>{" "}
                <a href="mailto:formations@antonyaddy.com" className="text-blue-700 font-medium underline">
                  formations@antonyaddy.com
                </a>
              </p>
              <p className="mb-6"><strong>Directeur de la publication :</strong> Antony Addy</p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Organisme de formation</h2>
              <p className="mb-2">
                <strong>Numéro de Déclaration d'Activité (NDA) :</strong>{" "}
                93830738883
              </p>
              <p className="mb-2">
                <strong>Autorité d'enregistrement :</strong> DREETS
                Provence-Alpes-Côte d'Azur
              </p>
              <p className="mb-6 text-sm italic text-gray-600">
                Cet enregistrement ne vaut pas agrément de l'État (article
                L.6352-12 du Code du travail).
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Hébergement</h2>
              <p className="mb-6">
                <strong>Hébergeur :</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Site web :{" "}
                <a
                  href="https://vercel.com"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://vercel.com
                </a>
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Propriété intellectuelle</h2>
              <p className="mb-6">
                L'ensemble du contenu de ce site (textes, images, supports
                pédagogiques, méthodes) est protégé par le droit de la
                propriété intellectuelle et demeure la propriété exclusive
                d'Antony Addy. Toute reproduction, représentation ou diffusion,
                totale ou partielle, sans autorisation écrite préalable est
                strictement interdite.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Limitation de responsabilité</h2>
              <p className="mb-6">
                Les informations diffusées sur ce site sont fournies à titre
                indicatif. Antony Addy met tout en œuvre pour en assurer
                l'exactitude et la mise à jour, sans toutefois pouvoir en
                garantir l'exhaustivité. L'utilisateur reconnaît utiliser ces
                informations sous sa responsabilité exclusive.
              </p>

              <h2 className="text-2xl font-semibold text-primary mb-4">Protection des données (RGPD)</h2>
              <p className="mb-4">
                Ce site respecte le <strong>Règlement Général sur la Protection
                des Données (RGPD)</strong>. Les informations collectées via le
                formulaire de contact sont utilisées
                exclusivement pour répondre à votre demande et ne sont ni
                vendues ni louées. Elles sont uniquement traitées par nos
                prestataires techniques (hébergement, base de données, envoi
                d'emails). Le détail figure dans notre{' '}
                <Link to="/politique-confidentialite" className="text-blue-600 hover:underline">
                  politique de confidentialité
                </Link>.
              </p>
              <p className="mb-4">
                Vous pouvez demander l'accès, la modification ou la suppression
                de vos données personnelles à tout moment en écrivant à :
              </p>
              <p>
                📧{" "}
                <a href="mailto:formations@antonyaddy.com" className="text-blue-700 font-medium underline">
                  formations@antonyaddy.com
                </a>
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Vous disposez également du droit d'introduire une réclamation
                auprès de la Commission Nationale de l'Informatique et des
                Libertés (CNIL) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.cnil.fr</a>.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-xl font-semibold text-primary mb-3">Explorer le site</h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
                  <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                  <Link to="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de confidentialité</Link>
                  <Link to="/cgv" className="text-blue-600 hover:underline">CGV</Link>
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
