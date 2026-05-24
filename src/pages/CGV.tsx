import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

/**
 * Conditions Générales de Vente — formation professionnelle d'adultes.
 * Markers [À CONFIRMER PAR ANTONY] indicate values to be reviewed/filled.
 */
const CGV = () => {
  return (
    <>
      <SEOHead
        title="Conditions Générales de Vente | Antony Addy"
        description="Conditions générales de vente applicables aux prestations de formation en anglais professionnel d'Antony Addy."
        canonicalPath="/cgv"
      />
      <main className="min-h-screen bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-headings:text-primary prose-headings:font-heading">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">
            Conditions Générales de Vente
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Applicables aux prestations de formation professionnelle dispensées
            par Antony Addy — dernière mise à jour : {new Date().getFullYear()}.
          </p>

          <h2>Article 1 — Objet et champ d'application</h2>
          <p>
            Les présentes Conditions Générales de Vente (ci-après « CGV ») ont
            pour objet de définir les modalités selon lesquelles Antony Addy
            (ci-après « le Prestataire ») fournit ses prestations de formation
            en anglais professionnel à toute personne physique ou morale
            (ci-après « le Client »). Toute commande de formation implique
            l'acceptation sans réserve des présentes CGV, qui prévalent sur
            tout autre document du Client.
          </p>

          <h2>Article 2 — Identification du prestataire</h2>
          <ul>
            <li><strong>Prestataire :</strong> Antony Addy</li>
            <li><strong>Statut juridique :</strong> [À CONFIRMER PAR ANTONY — auto-entrepreneur ou entreprise individuelle]</li>
            <li><strong>Adresse professionnelle :</strong> 135 rue Henri Vadon, 83600 Fréjus, France</li>
            <li><strong>SIRET :</strong> 483 178 893 00028</li>
            <li><strong>Numéro de Déclaration d'Activité (NDA) :</strong> [À CONFIRMER PAR ANTONY] — enregistré auprès de la DREETS Provence-Alpes-Côte d'Azur</li>
            <li><strong>Téléphone :</strong> +33 6 49 82 98 26</li>
            <li><strong>Courriel :</strong> formations@antonyaddy.com</li>
          </ul>
          <p className="text-sm italic">
            Cet enregistrement ne vaut pas agrément de l'État (article L.6352-12
            du Code du travail).
          </p>

          <h2>Article 3 — Description des prestations</h2>
          <p>
            Le Prestataire propose des prestations de formation en anglais
            professionnel à destination d'adultes, sous les formes suivantes :
          </p>
          <ul>
            <li>Cours particuliers individuels (présentiel ou visioconférence) ;</li>
            <li>Sessions collectives en entreprise (présentiel ou distanciel) ;</li>
            <li>Coaching linguistique pour cadres et dirigeants ;</li>
            <li>Préparation à des situations professionnelles ciblées : réunions, présentations, négociations, entretiens, correspondance écrite.</li>
          </ul>
          <p>
            Les prestations sont dispensées en présentiel dans le Var et les
            Alpes-Maritimes, et à distance partout en France et à l'international.
          </p>

          <h2>Article 4 — Modalités d'inscription et acceptation</h2>
          <p>
            Toute demande de formation fait l'objet d'un échange préalable
            (entretien téléphonique, visio ou rendez-vous) permettant d'évaluer
            les besoins du Client. Un devis et, le cas échéant, une convention
            ou un contrat de formation professionnelle sont ensuite adressés au
            Client. La prestation est réputée commandée à compter de la
            réception du devis signé et, lorsque applicable, de l'acompte.
          </p>

          <h2>Article 5 — Tarifs et conditions de paiement</h2>
          <p>
            Les tarifs sont établis sur devis personnalisé en fonction du volume
            horaire, du format (individuel / collectif), du lieu d'intervention
            et du niveau de personnalisation. Sauf mention contraire, les
            tarifs sont indiqués en euros, nets de TVA (TVA non applicable,
            article 293 B du CGI [À CONFIRMER PAR ANTONY selon régime fiscal]).
          </p>
          <p>
            <strong>Modalités de paiement :</strong> [À CONFIRMER PAR ANTONY —
            par exemple : acompte de 30 % à la commande, solde à l'issue de la
            formation ; règlement par virement bancaire à 30 jours pour les
            clients professionnels]. Tout retard de paiement entraîne, de plein
            droit, l'application de pénalités au taux légal en vigueur ainsi
            qu'une indemnité forfaitaire de 40 € pour frais de recouvrement
            (articles L.441-10 et D.441-5 du Code de commerce).
          </p>

          <h2>Article 6 — Convention de formation</h2>
          <p>
            Pour toute prestation à destination d'un Client professionnel, une
            convention de formation professionnelle continue est établie en
            application des articles L.6353-1 et suivants du Code du travail.
            Elle précise l'intitulé, les objectifs, le contenu, la durée, les
            modalités d'évaluation et le prix de la formation. Pour les
            particuliers, un contrat de formation professionnelle est conclu
            conformément à l'article L.6353-3 du Code du travail, avec un délai
            de rétractation de 10 jours à compter de sa signature.
          </p>

          <h2>Article 7 — Annulation et report</h2>
          <p>
            <strong>À l'initiative du Client :</strong> toute annulation ou
            report doit être notifié par écrit (courriel) au moins 7 jours
            calendaires avant la date prévue de la prestation. Au-delà de ce
            délai, les sommes versées restent acquises au Prestataire à titre
            d'indemnité, sauf cas de force majeure dûment justifié.
            [À CONFIRMER PAR ANTONY — adapter les pourcentages d'indemnité si
            besoin : par ex. 50 % entre 7 et 3 jours, 100 % à moins de 3 jours.]
          </p>
          <p>
            <strong>À l'initiative du Prestataire :</strong> en cas
            d'empêchement, le Prestataire proposera une date de report. À
            défaut de date convenue, les sommes versées seront intégralement
            remboursées.
          </p>

          <h2>Article 8 — Propriété intellectuelle</h2>
          <p>
            L'ensemble des supports pédagogiques (documents, enregistrements,
            exercices, méthodes) remis ou mis à disposition dans le cadre des
            formations demeure la propriété exclusive du Prestataire. Toute
            reproduction, diffusion ou exploitation, totale ou partielle, sans
            autorisation écrite préalable est strictement interdite.
          </p>

          <h2>Article 9 — Confidentialité et protection des données</h2>
          <p>
            Le Prestataire s'engage à respecter la confidentialité des
            informations communiquées par le Client dans le cadre de la
            relation contractuelle. Les données personnelles collectées sont
            traitées conformément au Règlement Général sur la Protection des
            Données (RGPD) et à la loi Informatique et Libertés. Pour plus de
            détails, consulter la{" "}
            <Link to="/politique-confidentialite" className="text-primary underline">
              Politique de Confidentialité
            </Link>
            .
          </p>

          <h2>Article 10 — Responsabilité</h2>
          <p>
            Le Prestataire est tenu à une obligation de moyens dans la
            réalisation des prestations. Sa responsabilité ne saurait être
            engagée en cas de mauvaise exécution résultant d'éléments fournis
            par le Client ou imputables à un cas de force majeure. La
            responsabilité éventuelle du Prestataire est, en tout état de
            cause, plafonnée au montant des sommes effectivement perçues au
            titre de la prestation concernée.
          </p>

          <h2>Article 11 — Réclamations et médiation</h2>
          <p>
            Toute réclamation doit être adressée par écrit à
            formations@antonyaddy.com. Le Prestataire s'engage à apporter une
            réponse dans un délai de 15 jours ouvrés. En cas de litige
            persistant avec un consommateur, ce dernier peut recourir
            gratuitement au médiateur de la consommation suivant :
            [À CONFIRMER PAR ANTONY — uniquement obligatoire si vente à des
            consommateurs particuliers ; nom et coordonnées du médiateur à
            renseigner]. Pour les questions relatives aux données
            personnelles, le Client peut introduire une réclamation auprès de
            la Commission Nationale de l'Informatique et des Libertés (CNIL —
            www.cnil.fr).
          </p>

          <h2>Article 12 — Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes CGV sont soumises au droit français. À défaut de
            règlement amiable, tout litige relatif à leur interprétation ou à
            leur exécution sera porté devant les tribunaux compétents du
            ressort de Fréjus / Draguignan, sauf disposition légale impérative
            contraire.
          </p>

          <hr className="my-8" />
          <p className="text-sm text-muted-foreground">
            Pour toute question préalable à la commande, merci de me contacter
            via la <Link to="/contact" className="text-primary underline">page contact</Link>.
          </p>
        </div>
      </main>
    </>
  );
};

export default CGV;
