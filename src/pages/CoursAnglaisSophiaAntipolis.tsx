import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Antibes', path: '/cours-anglais-antibes' },
];

const CoursAnglaisSophiaAntipolis = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Sophia Antipolis — Formateur natif britannique",
      description: "Formations d'anglais sur-mesure à Sophia Antipolis pour équipes tech et professionnels internationaux. Présentiel sur site ou distance.",
      canonical: "https://www.antonyaddy.com/cours-anglais-sophia-antipolis",
    }}
    city="Sophia Antipolis"
    h1="Cours d'anglais Sophia Antipolis — Formateur natif britannique"
    intro="Je propose des cours d'anglais sur-mesure aux professionnels et entreprises de Sophia Antipolis, premier technopôle d'Europe. Formations en présentiel sur site ou à distance, particulièrement adaptées aux équipes internationales et environnements technologiques."
    whoIAm="Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de 20 ans d'expérience. Basé à Fréjus, j'interviens régulièrement sur Sophia Antipolis auprès d'équipes techniques, R&D, et de profils internationaux."
    howItWorks="Présentiel sur site à Sophia Antipolis (dans vos bureaux) ou à distance — la distance fonctionne particulièrement bien pour les équipes distribuées. Convention de formation pour les entreprises. Programmes adaptés aux contextes tech : standups en anglais, présentations techniques, communication avec équipes internationales, documentation."
    areaServed={['Sophia Antipolis', 'Valbonne', 'Mougins', 'Antibes', 'Biot']}
    faqs={[
      { q: "Travaillez-vous avec des équipes tech / R&D ?", a: "Oui, c'est une grande partie de mon activité sur Sophia. Standups, présentations techniques, communication écrite (specs, docs, code review) — j'adapte le contenu à votre stack et à vos process." },
      { q: "Formats possibles pour une équipe internationale ?", a: "Sessions individuelles, ateliers collectifs, ou hybride. Distance souvent privilégiée pour les équipes mixtes France / autres pays. Convention de formation classique." },
      { q: "Intervention dans nos locaux ?", a: "Oui, je me déplace sur Sophia Antipolis, Valbonne, et alentour. Précisez vos contraintes d'accès au site lors du premier échange." },
    ]}
    otherCities={OTHER_CITIES}
  />
);

export default CoursAnglaisSophiaAntipolis;
