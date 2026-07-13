
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
                La présente politique décrit les données personnelles que ce site collecte, pourquoi,
                comment elles sont traitées et les droits dont vous disposez.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Responsable du traitement</h2>
              <p className="mb-6">
                Antony Addy, formateur d'anglais (auto-entrepreneur), 135 rue Henri Vadon, 83600 Fréjus,
                France. Contact : <strong>formations@antonyaddy.com</strong>.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Données collectées</h2>
              <p className="mb-4">
                Les données personnelles ne sont collectées que lorsque vous nous les transmettez volontairement :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Formulaire de contact</strong> : prénom, nom, adresse email et le contenu de votre message.</li>
                <li><strong>Test / questionnaire de positionnement</strong> : prénom, nom, email, téléphone (facultatif) et vos réponses (niveau, objectifs, disponibilités, etc.).</li>
                <li><strong>Échanges directs</strong> : les informations que vous communiquez par email ou WhatsApp.</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Finalité et base légale</h2>
              <p className="mb-6">
                Ces données sont utilisées uniquement pour répondre à vos demandes, établir un devis et organiser
                une éventuelle formation. La base légale est votre consentement et l'exécution de mesures
                précontractuelles prises à votre demande. Aucune prospection commerciale automatisée ni profilage
                n'est réalisé.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Hébergement et sous-traitants</h2>
              <p className="mb-4">
                Vos données ne sont ni vendues ni louées. Elles sont uniquement traitées par les prestataires
                techniques suivants, agissant pour notre compte et à nos instructions :
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Vercel Inc.</strong> (États-Unis) — hébergement du site.</li>
                <li><strong>Supabase</strong> — base de données où sont enregistrées les réponses au questionnaire.</li>
                <li><strong>Resend</strong> — acheminement des emails de notification et de confirmation.</li>
              </ul>
              <p className="mb-6">
                Certains de ces prestataires sont situés hors de l'Union européenne ; les transferts éventuels sont
                encadrés par les garanties appropriées prévues par le RGPD.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Durée de conservation</h2>
              <p className="mb-6">
                Les données de contact et de questionnaire sont conservées le temps nécessaire au traitement de
                votre demande puis, le cas échéant, pendant la durée de notre relation, et au maximum 3 ans après
                le dernier contact, sauf obligation légale contraire.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Cookies et mesures d'audience</h2>
              <p className="mb-6">
                Ce site n'utilise aucun cookie publicitaire ni traceur à des fins de profilage, et ne dépose pas
                de cookie de mesure d'audience nécessitant votre consentement. Seul un stockage technique
                strictement nécessaire au fonctionnement du site (préférences, langue) peut être utilisé.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Vos droits</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez à tout moment :
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Demander l'accès à vos données personnelles</li>
                <li>Demander leur rectification ou leur suppression</li>
                <li>Vous opposer à leur traitement ou en demander la limitation</li>
                <li>Demander la portabilité de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
              <p className="mb-6">
                Pour exercer ces droits, contactez <strong>formations@antonyaddy.com</strong>. Vous disposez
                également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).
              </p>

              <p className="text-sm text-gray-600">
                Hébergement du site : Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com
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
