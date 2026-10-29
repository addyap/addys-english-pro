import React from 'react';
import LocalWebsitesPage from '@/components/pages/LocalWebsitesPage';

// No client sites in Nice or Cannes yet, so the projects shown are the
// multilingual ones, presented as such rather than as local work.
const CreationSiteWebNiceCannes = () => (
  <LocalWebsitesPage
    seo={{
      title: "Création de site web multilingue à Nice et Cannes | Antony Addy",
      description: "Sites web multilingues pour les entreprises de Nice, Cannes, Antibes et Sophia Antipolis qui travaillent avec une clientèle internationale. Rendez-vous sur place ou à distance, devis fixe.",
      canonical: "https://www.antonyaddy.com/creation-site-web-nice-cannes",
      geoRegion: "FR-06",
      geoPlacename: "Nice, Cannes, Alpes-Maritimes, France",
    }}
    area="Nice & Cannes"
    h1="Création de site web multilingue à Nice et Cannes"
    intro="Hôtels, restaurants, agences immobilières, cabinets et indépendants des Alpes-Maritimes : je crée des sites dans les langues de vos clients internationaux. Je viens vous voir à Nice, Cannes, Antibes ou Sophia Antipolis, et le reste du projet avance à distance aussi bien que sur place."
    sections={[
      {
        h2: "Une clientèle internationale toute l'année",
        body: "Sur la Côte d'Azur, la clientèle étrangère n'est pas qu'estivale : congrès et festivals à Cannes, aéroport international à Nice, entreprises internationales à Sophia Antipolis, propriétaires étrangers sur tout le littoral. Pour beaucoup d'entreprises des Alpes-Maritimes, une partie des clients découvre le site avant de parler à qui que ce soit, et pas toujours en français.\n\nUn site dans leur langue rassure tout de suite : il répond aux questions pratiques, donne envie de réserver ou de demander un devis, et évite les malentendus. Je rédige et relis moi-même le français et l'anglais, et nous convenons ensemble de la façon de produire les autres langues.",
      },
      {
        h2: "Sur place ou à distance",
        body: "Je suis basé à Fréjus, à une heure de Cannes et de Nice. Je me déplace pour le premier rendez-vous ou les étapes où il vaut mieux être ensemble ; le reste se fait très bien en visio et par e-mail. Vous avez un seul interlocuteur, de la conception à la mise en ligne.",
      },
    ]}
    projectsTitle="Des sites pensés pour plusieurs langues"
    projectsLead="Trois réalisations, dont deux multilingues : un restaurant en Italie et un chef de projet de construction sur la Côte d'Azur."
    projects={[
      { slug: 'ristorante-lola', name: 'Ristorante da Lola', url: 'https://www.ristorantedalola.it', host: 'ristorantedalola.it', tag: 'Restaurant · 4 langues',
        text: "Un restaurant familial à Fermignano, en Italie : un site chaleureux en quatre langues, avec menu, galerie et réservation." },
      { slug: 'planb-global-connect', name: 'Plan B Concept', url: 'https://www.planb-concept.com', host: 'planb-concept.com', tag: "Gestion de projet · Côte d'Azur · FR / EN",
        text: "Un site bilingue pour la gestion de projet de construction sur la Côte d'Azur : plus de 30 ans d'expérience du bâtiment, du premier croquis à la livraison finale." },
      { slug: 'wall-street', name: 'Wall Street Fréjus', url: 'https://www.wallstreetfrejus.fr', host: 'wallstreetfrejus.fr', tag: 'Pub-restaurant · Fréjus',
        text: "Un pub-restaurant à Fréjus : concerts, matchs sur écran géant et cuisine faite maison, avec le menu de la semaine et la réservation en ligne." },
    ]}
    areaServed={['Nice', 'Cannes', 'Antibes', 'Sophia Antipolis', 'Mandelieu-la-Napoule']}
    faqs={[
      { q: "Vous déplacez-vous à Nice et Cannes ?", a: "Oui, pour le premier rendez-vous et les étapes où il est utile de se voir. Je suis basé à Fréjus ; le reste du projet avance aussi bien à distance." },
      { q: "Dans quelles langues ?", a: "Celles de vos clients. Je rédige et relis moi-même le français et l'anglais. Pour les autres langues, nous convenons ensemble, dès le devis, de la façon dont elles sont produites et relues." },
      { q: "Combien coûte un site ?", a: "Cela dépend du nombre de pages, de langues et de fonctions (réservation, formulaire de devis…). Après un premier échange, je vous envoie un devis clair et fixe." },
      { q: "Pouvez-vous traduire un site existant ?", a: "Oui. Je peux ajouter des versions dans d'autres langues à un site existant, ou le refaire s'il est difficile à faire évoluer." },
    ]}
    otherAreas={[
      { name: 'Fréjus et Saint-Raphaël', path: '/creation-site-web-frejus' },
      { name: 'Toute la France et à distance', path: '/creation-site-web-multilingue' },
    ]}
  />
);

export default CreationSiteWebNiceCannes;
