import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Sophia Antipolis', path: '/cours-anglais-sophia-antipolis' },
];

const CoursAnglaisAntibes = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Antibes & Juan-les-Pins — Formateur natif",
      description: "Cours d'anglais sur-mesure à Antibes, Juan-les-Pins et le bassin antibois. Formateur natif britannique certifié FPA. Présentiel ou distance.",
      canonical: "https://www.antonyaddy.com/cours-anglais-antibes",
    }}
    city="Antibes"
    h1="Cours d'anglais Antibes — Formateur natif britannique"
    intro="Je propose des cours d'anglais sur-mesure à Antibes, Juan-les-Pins, et dans tout le bassin antibois. Formations en présentiel ou à distance, conçues autour de votre situation et de vos objectifs."
    whoIAm="Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de 20 ans d'expérience. Basé à Fréjus, j'interviens régulièrement à Antibes auprès de professionnels, particuliers et étudiants."
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
