import React from 'react';
import AudienceLandingPage from '@/components/pages/AudienceLandingPage';

const AnglaisCadres = () => (
  <AudienceLandingPage
    seo={{
      title: "Coaching anglais pour cadres et dirigeants | Antony Addy",
      description: "Accompagnement individuel et confidentiel en anglais pour cadres, dirigeants et professions libérales. Planning adapté, présentiel ou distance.",
      canonical: "https://www.antonyaddy.com/anglais-cadres",
    }}
    h1="Coaching d'anglais pour cadres et dirigeants"
    sub="Accompagnement individuel et confidentiel, conçu autour de vos objectifs professionnels. Présentiel ou distance, planning adapté à vos contraintes."
    pourQui="J'accompagne des cadres, dirigeants, fondateurs, et professions libérales qui doivent maîtriser l'anglais dans un contexte exigeant : négociations, présentations, comités de direction, relations internationales. Chaque programme est strictement personnalisé."
    comment={[
      "Tout commence par une session d'évaluation pour cerner précisément le contexte : votre poste, vos interlocuteurs, les situations à fort enjeu, votre niveau actuel, vos points de blocage. À partir de là, je construis un parcours strictement individuel.",
      "Le planning s'adapte à votre charge de travail réelle : matin tôt, fin de journée, week-end si nécessaire. Les séances peuvent être hebdomadaires régulières, intensives autour d'une échéance précise, ou ponctuelles pour préparer un évènement particulier (deal, comité, prise de poste).",
      "Les contenus sont construits autour de vos situations réelles. Un pitch à préparer, un comité international à animer, une négociation en cours, une présentation devant un board : je travaille avec votre matière, pas avec des manuels génériques.",
      "Confidentialité absolue par défaut. Formateur natif britannique, plus de 20 ans d'expérience auprès de profils exécutifs, certifié FPA. Je m'engage sur des résultats concrets, mesurés sur les situations professionnelles que vous m'identifiez.",
    ]}
    benefits={[
      "Un accompagnement strictement individuel et confidentiel",
      "Un planning qui s'adapte à vos contraintes, pas l'inverse",
      "Des contenus construits sur vos situations professionnelles réelles",
      "Un rythme cohérent avec votre charge de travail",
      "Une progression mesurable et orientée résultats",
      "L'accès à un formateur natif britannique expérimenté en contexte exécutif",
    ]}
    faqs={[
      { q: "Combien de séances par semaine ?", a: "Variable selon vos objectifs et votre disponibilité. Certains clients préfèrent une séance hebdomadaire régulière, d'autres un rythme intensif sur quelques semaines avant une échéance précise." },
      { q: "Présentiel ou distance ?", a: "Les deux sont possibles, vous choisissez. Le présentiel se fait dans le Var et les Alpes-Maritimes ; la distance fonctionne partout et permet souvent plus de souplesse." },
      { q: "Peut-on commencer par une session d'évaluation ?", a: "Oui, c'est même recommandé. Une première session permet de poser le diagnostic, comprendre vos enjeux, et définir ensemble un cadre de travail réaliste." },
      { q: "Confidentialité ?", a: "Totale, par défaut. Aucune mention de votre nom, de votre entreprise, ni des sujets travaillés ne sera communiquée à un tiers." },
    ]}
    closingPitch="Vous avez besoin d'un accompagnement en anglais à la hauteur de votre poste ? Échangeons sur votre contexte et vos objectifs."
  />
);

export default AnglaisCadres;
