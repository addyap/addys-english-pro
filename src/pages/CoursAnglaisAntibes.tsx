import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';
import { EXPERIENCE_FLOOR } from '@/lib/utils';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Sophia Antipolis', path: '/cours-anglais-sophia-antipolis' },
];

const CoursAnglaisAntibes = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Antibes — Formateur natif britannique",
      description: "Cours d'anglais sur-mesure à Antibes, Juan-les-Pins et le bassin antibois. Formateur natif britannique certifié FPA. Présentiel ou distance.",
      canonical: "https://www.antonyaddy.com/cours-anglais-antibes",
      geoRegion: "FR-06",
      geoPlacename: "Antibes, Alpes-Maritimes, France",
    }}
    city="Antibes"
    h1="Apprenez l'anglais à Antibes avec un formateur britannique"
    intro="Je propose des cours d'anglais sur-mesure à Antibes, Juan-les-Pins, et dans tout le bassin antibois. Formations en présentiel ou à distance, conçues autour de votre situation et de vos objectifs."
    localSections={[
      {
        h2: "Antibes, un pôle du yachting où l'anglais est la langue de travail",
        body: "Avec le port Vauban, Antibes abrite l'une des plus grandes marinas d'Europe et un véritable écosystème autour du yachting : équipages, sociétés de gestion, brokers, chantiers de refit et services associés. Dans ce milieu profondément international, l'anglais n'est pas optionnel — c'est la langue quotidienne du travail, à l'écrit comme à l'oral. Les professionnels de la mer qui veulent progresser dans le secteur, ou simplement communiquer sereinement avec équipages et propriétaires, ont besoin d'un anglais fluide et opérationnel.\n\nAu-delà du nautisme, le bassin antibois mêle tourisme (Juan-les-Pins), technologies autour de Biot et une clientèle résidentielle très internationale. J'adapte le vocabulaire et les mises en situation à votre univers professionnel précis plutôt qu'à un programme générique.",
      },
      {
        h2: "Une communauté internationale, des besoins très concrets",
        body: "Antibes compte une importante communauté d'expatriés et de professionnels francophones travaillant en anglais au quotidien. Les besoins que je rencontre le plus souvent : gagner en aisance à l'oral, sécuriser les échanges écrits professionnels, et lever le blocage qui empêche de parler spontanément. Je travaille aussi bien avec des particuliers, à leur domicile ou à distance, qu'avec des entreprises antiboises dans le cadre d'une convention de formation.",
      },
    ]}
    whoIAm={`Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de ${EXPERIENCE_FLOOR} ans d'expérience. Basé à Fréjus, j'interviens régulièrement à Antibes auprès de professionnels, particuliers et étudiants.`}
    howItWorks="Présentiel à Antibes, Juan-les-Pins et communes proches, ou à distance. Première séance dédiée à l'évaluation et à la définition d'un programme adapté. Planning flexible. Pour les entreprises antiboises, intervention dans vos locaux dans le cadre d'une convention de formation."
    areaServed={['Antibes', 'Juan-les-Pins', 'Biot', 'Vallauris', 'Villeneuve-Loubet']}
    faqs={[
      { q: "Vous déplacez-vous à Juan-les-Pins et Biot ?", a: "Oui, tout le bassin antibois est inclus : Antibes, Juan-les-Pins, Biot, Vallauris, Villeneuve-Loubet et communes voisines." },
      { q: "Cours sur la communauté internationale d'Antibes ?", a: "Oui, j'accompagne souvent des profils internationaux installés sur la Côte d'Azur — francophones travaillant en anglais, ou expatriés ayant besoin de pratique professionnelle." },
      { q: "Formation entreprise à Antibes ?", a: "Oui, intervention sur site dans le cadre d'une convention de formation. Voir la page entreprise pour le détail." },
    ]}
    otherCities={OTHER_CITIES}
  />
);

export default CoursAnglaisAntibes;
