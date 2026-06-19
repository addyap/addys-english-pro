import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Antibes', path: '/cours-anglais-antibes' },
  { name: 'Sophia Antipolis', path: '/cours-anglais-sophia-antipolis' },
];

const CoursAnglaisNice = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Nice — Formateur natif britannique",
      description: "Cours d'anglais sur-mesure à Nice et dans la métropole niçoise. Formateur natif britannique certifié FPA. Entreprises, cadres, particuliers, étudiants.",
      canonical: "https://www.antonyaddy.com/cours-anglais-nice",
    }}
    city="Nice"
    h1="Apprenez l'anglais à Nice avec un formateur britannique"
    intro="Je propose des cours d'anglais sur-mesure à Nice et dans toute la métropole niçoise. Formations en présentiel pour les entreprises, cadres, particuliers et étudiants niçois, ou à distance selon votre préférence."
    whoIAm="Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de 20 ans d'expérience. Basé à Fréjus mais régulièrement présent à Nice — j'enseigne notamment à l'École Du Journalisme de Nice, donc le déplacement fait partie de mon quotidien."
    howItWorks="Présentiel à Nice ou distance, vous choisissez. Pour le présentiel, je me déplace sur place — dans vos locaux d'entreprise, à votre domicile, ou sur un lieu neutre. Première séance dédiée à l'évaluation et à la construction du programme. Planning adaptable, y compris créneaux tôt le matin ou en fin de journée pour les cadres."
    areaServed={['Nice', 'Saint-Laurent-du-Var', 'Cagnes-sur-Mer', 'Villefranche-sur-Mer', 'Beaulieu-sur-Mer']}
    faqs={[
      { q: "Vous déplacez-vous dans Nice intra-muros ?", a: "Oui, je me déplace dans tout Nice et la métropole : centre, Cimiez, port, Magnan, ainsi que les communes voisines (Saint-Laurent-du-Var, Cagnes-sur-Mer, Villefranche)." },
      { q: "Travaillez-vous avec des entreprises niçoises ?", a: "Oui, j'accompagne des entreprises de la métropole niçoise dans le cadre de conventions de formation. Voir la page entreprise pour le détail." },
      { q: "Cours étudiants à Nice ?", a: "Oui, j'enseigne à l'École Du Journalisme de Nice et accompagne par ailleurs des étudiants individuels (universités, écoles, prépas)." },
    ]}
    otherCities={OTHER_CITIES}
  />
);

export default CoursAnglaisNice;
