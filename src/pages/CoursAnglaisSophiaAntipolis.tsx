import React from 'react';
import CityLandingPage from '@/components/pages/CityLandingPage';
import { EXPERIENCE_FLOOR } from '@/lib/utils';

const OTHER_CITIES = [
  { name: 'Fréjus', path: '/cours-anglais-frejus' },
  { name: 'Nice', path: '/cours-anglais-nice' },
  { name: 'Cannes', path: '/cours-anglais-cannes' },
  { name: 'Antibes', path: '/cours-anglais-antibes' },
];

const CoursAnglaisSophiaAntipolis = () => (
  <CityLandingPage
    seo={{
      title: "Cours d'anglais Sophia Antipolis",
      description: "Formations d'anglais sur-mesure à Sophia Antipolis pour équipes tech et professionnels internationaux. Présentiel sur site ou distance.",
      canonical: "https://www.antonyaddy.com/cours-anglais-sophia-antipolis",
      geoRegion: "FR-06",
      geoPlacename: "Sophia Antipolis, Alpes-Maritimes, France",
    }}
    city="Sophia Antipolis"
    h1="Anglais professionnel à Sophia Antipolis avec un formateur britannique"
    intro="Je propose des cours d'anglais sur-mesure aux professionnels et entreprises de Sophia Antipolis, premier technopôle d'Europe. Formations en présentiel sur site ou à distance, particulièrement adaptées aux équipes internationales et environnements technologiques."
    localSections={[
      {
        h2: "Le premier technopôle d'Europe fonctionne en anglais",
        body: "Sophia Antipolis rassemble des milliers d'entreprises et de laboratoires sur les télécoms, l'informatique, les sciences de la vie et la R&D, avec une très forte densité de groupes internationaux. Dans ces environnements, l'anglais est de fait la langue de travail : réunions d'équipe, échanges avec les sièges à l'étranger, documentation technique et recrutement de profils venus de toute l'Europe. Un ingénieur ou un chef de projet peut maîtriser parfaitement son métier tout en perdant en impact dès qu'il faut le présenter en anglais.\n\nC'est précisément là que j'interviens. Je ne fais pas un cours d'anglais général : je travaille l'anglais tel qu'il est utilisé sur le plateau — animer un stand-up, présenter une architecture technique, participer à une code review, rédiger une spec claire, ou échanger avec une équipe distribuée sur plusieurs pays.",
      },
      {
        h2: "Des formats pensés pour les équipes tech internationales",
        body: "J'interviens en présentiel dans vos bureaux à Sophia Antipolis et Valbonne, ou à distance — une formule qui fonctionne particulièrement bien pour les équipes réparties entre la France et d'autres pays. Sessions individuelles pour les managers et référents, ateliers collectifs pour monter le niveau d'une équipe entière, ou formule hybride. Le tout dans le cadre d'une convention de formation classique, avec un contenu calé sur votre stack, vos process et vos échéances.",
      },
    ]}
    whoIAm={`Antony Addy, formateur d'anglais natif britannique, certifié FPA, plus de ${EXPERIENCE_FLOOR} ans d'expérience. Basé à Fréjus, j'interviens régulièrement sur Sophia Antipolis auprès d'équipes techniques, R&D, et de profils internationaux.`}
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
