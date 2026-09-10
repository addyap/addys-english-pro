import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';
import { EXPERIENCE_FLOOR } from '@/lib/utils';

const OTHER_CITIES = [
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Antibes', path: '/cours-anglais-antibes' },
  { name: 'Sophia Antipolis', path: '/cours-anglais-sophia-antipolis' },
];

const CoursAnglaisFrejus = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Fréjus — Formateur natif britannique",
      description: "Cours d'anglais sur-mesure à Fréjus et dans l'Est-Var. Formateur natif britannique certifié FPA. Présentiel ou distance, entreprises et particuliers.",
      canonical: "https://www.antonyaddy.com/cours-anglais-frejus",
      // FR-83 = Var. This was the only city page missing its geo tags, and it is
      // the home base — the one page where local signals matter most.
      geoRegion: "FR-83",
      geoPlacename: "Fréjus, Var, France",
    }}
    city="Fréjus"
    h1="Apprenez l'anglais à Fréjus avec un formateur britannique"
    intro="Basé à Fréjus, je propose des cours d'anglais sur-mesure pour les habitants et professionnels de Fréjus et de l'Est-Var (Saint-Raphaël, Roquebrune-sur-Argens, Puget-sur-Argens, Les Adrets-de-l'Estérel). Présentiel ou distance, formation adaptée à votre profil et vos objectifs."
    localSections={[
      {
        h2: "L'anglais professionnel dans l'agglomération de Fréjus",
        body: "Fréjus et Saint-Raphaël forment un bassin tourné vers le tourisme du littoral de l'Estérel, avec une saison estivale qui attire une clientèle largement internationale. Hôtellerie, restauration, commerces, activités nautiques et professions de l'accueil sont en contact direct avec des visiteurs anglophones une bonne partie de l'année. À côté de cette économie touristique, le tissu local est fait de TPE, de PME et de professions libérales qui échangent de plus en plus avec des clients, fournisseurs ou partenaires à l'étranger.\n\nDans ce contexte, l'anglais n'est pas un supplément décoratif : c'est ce qui permet d'accueillir sereinement un client étranger, de répondre à un e-mail commercial sans hésiter, ou de tenir une conversation professionnelle au téléphone. Je construis chaque programme autour de ces situations concrètes plutôt qu'autour de règles de grammaire hors contexte.",
      },
      {
        h2: "Un formateur ancré localement, pas un passage ponctuel",
        body: "Fréjus est ma ville de résidence et ma zone de prédilection. Concrètement, cela veut dire une vraie disponibilité, pas de frais de déplacement à rallonge, et une connaissance du terrain : je me déplace facilement dans vos locaux, à votre domicile ou sur un lieu neutre à Fréjus, Saint-Raphaël et dans les communes voisines. Pour les indépendants et les particuliers de l'Est-Var qui veulent avancer à leur rythme, cette proximité permet une régularité difficile à obtenir avec un formateur venu de loin.",
      },
    ]}
    whoIAm={`Antony Addy, formateur d'anglais natif britannique, certifié Formateur Professionnel d'Adultes (FPA), plus de ${EXPERIENCE_FLOOR} ans d'expérience. Basé à Fréjus, j'interviens directement sur place chez vous ou dans vos locaux dans tout l'Est-Var. J'enseigne également à l'École Du Journalisme de Nice.`}
    howItWorks="Le présentiel à Fréjus et dans les communes voisines est ma zone de prédilection — pas de déplacement à organiser pour vous. La distance reste évidemment possible si vous préférez. Tout démarre par une première séance pour évaluer votre niveau, comprendre vos objectifs, et construire un programme adapté. Planning flexible selon vos disponibilités."
    areaServed={['Fréjus', 'Saint-Raphaël', 'Roquebrune-sur-Argens', 'Puget-sur-Argens', "Les Adrets-de-l'Estérel"]}
    faqs={[
      { q: "Vous déplacez-vous à Saint-Raphaël et alentour ?", a: "Oui, je me déplace dans tout l'Est-Var : Saint-Raphaël, Roquebrune-sur-Argens, Puget-sur-Argens, Les Adrets, et les communes proches." },
      { q: "Cours individuels ou en groupe à Fréjus ?", a: "Les deux. J'interviens en cours individuels au domicile ou en entreprise, et en cours collectifs pour les équipes professionnelles." },
      { q: "Et si je préfère la distance ?", a: "La distance fonctionne parfaitement, en visio. Beaucoup de clients combinent les deux : présentiel pour démarrer, distance pour la régularité." },
    ]}
    otherCities={OTHER_CITIES}
  />
);

export default CoursAnglaisFrejus;
