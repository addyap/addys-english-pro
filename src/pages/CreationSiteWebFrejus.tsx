import React from 'react';
import LocalWebsitesPage from '@/components/pages/LocalWebsitesPage';

// Projects and descriptions from the portfolio (addyap2/showcase): the three
// local sites in Fréjus and Saint-Raphaël.
const CreationSiteWebFrejus = () => (
  <LocalWebsitesPage
    seo={{
      title: "Création de site web à Fréjus et Saint-Raphaël — sites multilingues | Antony Addy",
      description: "Création de sites web pour les commerces, restaurants et indépendants de Fréjus, Saint-Raphaël et de l'Est-Var, en plusieurs langues si vos clients en ont besoin. Rendez-vous sur place, devis fixe.",
      canonical: "https://www.antonyaddy.com/creation-site-web-frejus",
      geoRegion: "FR-83",
      geoPlacename: "Fréjus, Var, France",
    }}
    area="Fréjus & Saint-Raphaël"
    h1="Création de site web à Fréjus et Saint-Raphaël"
    intro="Je vis à Fréjus et je crée des sites pour les commerces, restaurants et indépendants de l'Est-Var : en français, et dans les langues de vos clients quand ils viennent d'ailleurs. On se rencontre sur place, et vous gardez le même interlocuteur du premier rendez-vous à la mise en ligne."
    sections={[
      {
        h2: "Un site pour une clientèle qui change avec les saisons",
        body: "Entre l'Estérel et la mer, Fréjus et Saint-Raphaël vivent au rythme du tourisme : une clientèle locale toute l'année, et l'été des visiteurs venus de toute l'Europe. Un restaurant, une location, une activité nautique ou un praticien y gagnent à présenter leurs horaires, leur carte ou leurs prestations dans la langue de ces visiteurs, au moment où ils choisissent où aller.\n\nJe vous aide à décider ce qui est utile : souvent le français et l'anglais suffisent, parfois l'italien, l'allemand ou le néerlandais ont plus de sens selon votre clientèle. Le site reste simple à mettre à jour, pour que le menu de la semaine ou les dates d'été ne restent pas figés.",
      },
      {
        h2: "Un interlocuteur à deux pas",
        body: "Basé à Fréjus, je viens vous voir dans votre établissement à Fréjus, Saint-Raphaël, Roquebrune-sur-Argens ou Puget-sur-Argens, pour voir les lieux et prendre les photos de départ si besoin. Ensuite, on avance à distance ou sur place, comme vous préférez, et je reste joignable après la mise en ligne.",
      },
    ]}
    projectsTitle="Des sites créés à Fréjus et Saint-Raphaël"
    projectsLead="Trois établissements de l'Est-Var, en ligne aujourd'hui."
    projects={[
      { slug: 'wall-street', name: 'Wall Street Fréjus', url: 'https://www.wallstreetfrejus.fr', host: 'wallstreetfrejus.fr', tag: 'Pub-restaurant · Fréjus',
        text: "Un pub-restaurant à Fréjus : concerts, matchs sur écran géant et cuisine faite maison, avec le menu de la semaine et la réservation en ligne." },
      { slug: 'stephanie', name: 'SR Bien-être', url: 'https://www.srbienetre.fr', host: 'srbienetre.fr', tag: 'Bien-être · Saint-Raphaël',
        text: "Le site d'une praticienne du bien-être à Saint-Raphaël : sophrologie, soins énergétiques, drainage lymphatique et yoga enfants, avec réservation en ligne." },
      { slug: 'so-good-diner', name: 'So Good Diner', url: 'https://so-good-diner.vercel.app', host: 'so-good-diner.vercel.app', tag: 'Diner · Fréjus',
        text: "Un diner gourmet à Fréjus : burgers maison et kumpir, pain du boulanger et viande du boucher. Menu, avis et itinéraire." },
    ]}
    areaServed={['Fréjus', 'Saint-Raphaël', 'Roquebrune-sur-Argens', 'Puget-sur-Argens', "Les Adrets-de-l'Estérel"]}
    faqs={[
      { q: "Vous déplacez-vous dans l'Est-Var ?", a: "Oui : Fréjus, Saint-Raphaël, Roquebrune-sur-Argens, Puget-sur-Argens, Les Adrets-de-l'Estérel et les communes voisines. Le premier rendez-vous peut se faire dans votre établissement." },
      { q: "Mon site doit-il vraiment être en plusieurs langues ?", a: "Pas forcément. Si votre clientèle est surtout locale, un site en français suffit. Si vous recevez des visiteurs étrangers, une version anglaise est souvent le premier pas ; on regarde ensemble ce qui est utile pour vous." },
      { q: "Combien de temps faut-il ?", a: "Un site simple en quelques jours, une plateforme plus complète en deux semaines environ. Vous avez un délai clair avant de commencer, utile si vous visez l'ouverture de la saison." },
      { q: "Pouvez-vous reprendre un site existant ?", a: "Oui. Je peux refaire un site vieillissant ou lui ajouter des versions dans d'autres langues. On part de ce qui existe et de ce qui fonctionne déjà." },
    ]}
    otherAreas={[
      { name: 'Nice et Cannes', path: '/creation-site-web-nice-cannes' },
      { name: 'Toute la France et à distance', path: '/creation-site-web-multilingue' },
    ]}
  />
);

export default CreationSiteWebFrejus;
