
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

/**
 * Date of the privacy policy version currently published. Bump by hand in the
 * same commit as any change to what is collected, why, or by whom.
 */
const PRIVACY_VERSION_DATE = '18 août 2026';

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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Politique de confidentialité
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Version du {PRIVACY_VERSION_DATE}.
            </p>

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
                Les données personnelles ne sont collectées que lorsque vous me les transmettez volontairement :
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Formulaire de contact</strong> : prénom, nom, adresse email et le contenu de votre message.</li>
                <li>
                  <strong>Adresse IP</strong> : lors de l'envoi du formulaire uniquement, votre
                  adresse IP est enregistrée quelques heures afin de limiter le nombre d'envois par
                  visiteur. Cette mesure anti-spam est nécessaire : chaque envoi déclenche deux
                  emails, dont un vers l'adresse saisie, ce qui sans garde-fou permettrait à un
                  robot de se servir du formulaire pour relayer du courrier. L'adresse IP n'est
                  associée ni à votre message ni à votre identité, et sert exclusivement à ce
                  comptage.
                </li>
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
                techniques suivants, agissant pour mon compte et selon mes instructions :
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li><strong>Vercel Inc.</strong> (États-Unis) — hébergement du site.</li>
                <li><strong>Resend</strong> — acheminement des emails de notification et de confirmation.</li>
                <li><strong>Umami</strong> — mesure d'audience du site, sans cookie et sans identifiant publicitaire (voir « Cookies et mesures d'audience » ci-dessous).</li>
                <li><strong>Supabase</strong> — base de données hébergeant le compteur anti-spam décrit ci-dessus (adresses IP uniquement, à durée de vie très courte).</li>
              </ul>
              <p className="mb-6">
                Certains de ces prestataires sont situés hors de l'Union européenne ; les transferts éventuels sont
                encadrés par les garanties appropriées prévues par le RGPD.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Services tiers vers lesquels ce site peut vous rediriger</h2>
              <p className="mb-4">
                Certaines pages proposent des liens vers des services extérieurs. Dès que vous les
                utilisez, vos données sont traitées par ces services selon <em>leurs</em> propres
                politiques, sur lesquelles je n'ai pas la main :
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>
                  <strong>WhatsApp (Meta Platforms Ireland Ltd.)</strong> — si vous me contactez via
                  les boutons WhatsApp du site. Votre numéro de téléphone et le contenu de vos
                  messages transitent alors par Meta.
                </li>
                <li>
                  <strong>Kahoot! AS</strong> (Norvège) — si vous lancez le test de positionnement
                  gratuit, qui est hébergé sur kahoot.it. Le test se fait sans compte, avec le
                  pseudonyme de votre choix : évitez d'y saisir votre nom complet si vous ne le
                  souhaitez pas.
                </li>
              </ul>
              <p className="mb-6">
                Aucune de ces redirections n'est automatique : elles n'ont lieu que si vous cliquez
                sur le lien correspondant.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Durée de conservation</h2>
              <p className="mb-6">
                Les données de contact sont conservées le temps nécessaire au traitement de
                votre demande puis, le cas échéant, pendant la durée de notre collaboration, et au maximum 3 ans après
                le dernier contact, sauf obligation légale contraire.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Cookies et mesures d'audience</h2>
              <p className="mb-6">
                Ce site n'utilise aucun cookie publicitaire ni traceur à des fins de profilage. La
                mesure d'audience est assurée par <strong>Umami</strong>, un outil sans cookie qui
                ne collecte que des statistiques agrégées (pages vues, provenance, type d'appareil)
                sans permettre de vous identifier ni de vous suivre d'un site à l'autre. Ce type de
                mesure entre dans les exemptions de consentement prévues par la CNIL, ce qui est la
                raison pour laquelle aucune bannière cookies ne vous est présentée. Seul un stockage
                technique strictement nécessaire au fonctionnement du site (préférences, langue)
                peut par ailleurs être utilisé.
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
                  <Link to="/" className="text-accent hover:underline">Accueil</Link>
                  <Link to="/contact" className="text-accent hover:underline">Contact</Link>
                  <Link to="/mentions-legales" className="text-accent hover:underline">Mentions légales</Link>
                  <Link to="/offres-de-formation" className="text-accent hover:underline">Formations</Link>
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
