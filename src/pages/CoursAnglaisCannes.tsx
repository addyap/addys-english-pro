import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Antibes', path: '/cours-anglais-antibes' },
  { name: 'Sophia Antipolis', path: '/cours-anglais-sophia-antipolis' },
];

const CoursAnglaisCannes = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Cannes — Formateur natif britannique",
      description: "Cours d'anglais sur-mesure à Cannes, Mougins, Mandelieu et Le Cannet. Formateur natif britannique certifié FPA. Présentiel ou distance.",
      canonical: "https://www.antonyaddy.com/cours-anglais-cannes",
    }}
    city="Cannes"
    h1="Cours d'anglais Cannes — Formateur natif britannique"
    intro="Je propose des cours d'anglais sur-mesure à Cannes et dans le bassin cannois (Mougins, Mandelieu, Le Cannet). Formations en présentiel ou à distance, adaptées à votre profil et vos objectifs."
    whoIAm="Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de 20 ans d'expérience. Basé à Fréjus, j'interviens régulièrement sur le bassin cannois pour des entreprises, cadres, et particuliers."
    howItWorks="Présentiel à Cannes et alentour (Mougins, Mandelieu, Le Cannet) ou distance, selon ce qui vous convient. Première séance d'évaluation, puis programme construit autour de votre situation. Planning flexible, particulièrement utile pendant les périodes de forte activité événementielle à Cannes."
    areaServed={['Cannes', 'Mougins', 'Mandelieu-la-Napoule', 'Le Cannet', 'Vallauris']}
    faqs={[
      { q: "Vous déplacez-vous à Mougins et Mandelieu ?", a: "Oui, l'ensemble du bassin cannois est inclus : Cannes, Mougins, Mandelieu, Le Cannet, Vallauris et communes proches." },
      { q: "Préparation à des événements professionnels (festivals, salons) ?", a: "Oui, je prépare régulièrement des clients à des prises de parole, négociations ou interactions clients dans le cadre d'événements internationaux." },
      { q: "Cours pour particuliers à Cannes ?", a: "Oui, j'accompagne des particuliers à votre domicile ou à distance, selon votre préférence et votre planning." },
    ]}
    otherCities={OTHER_CITIES}
  />
);

export default CoursAnglaisCannes;
