import React from 'react';
import AudienceLandingPage from '@/components/pages/AudienceLandingPage';
import { EXPERIENCE_FLOOR } from '@/lib/utils';

const AnglaisParticuliers = () => (
  <AudienceLandingPage
    seo={{
      title: "Cours d'anglais pour particuliers — Var & Alpes-Maritimes",
      description: "Cours d'anglais sur-mesure pour adultes, à votre rythme et selon vos objectifs. Présentiel ou distance, avec un formateur natif britannique.",
      canonical: "https://www.antonyaddy.com/anglais-particuliers",
    }}
    h1="Cours d'anglais pour particuliers"
    sub="Cours sur-mesure pour adultes, à votre rythme et selon vos objectifs personnels. En présentiel dans le Var et les Alpes-Maritimes, ou à distance."
    pourQui="Je travaille avec des adultes de tous niveaux et de tous profils : ceux qui reprennent l'anglais après des années sans pratique, ceux qui veulent gagner en confiance pour voyager, ceux qui préparent un déménagement ou un projet professionnel, ceux qui veulent simplement apprendre une langue qu'ils aiment. Chaque parcours est unique."
    comment={[
      "La première séance sert à faire connaissance et à comprendre où vous en êtes : votre niveau actuel, vos objectifs personnels, vos préférences d'apprentissage, le temps que vous pouvez y consacrer. Pas de test scolaire stressant — une vraie conversation.",
      "Je construis ensuite un programme adapté à votre situation. L'approche est conversationnelle et progressive : on parle vraiment anglais dès le début, à votre niveau, avec des sujets qui vous intéressent. La grammaire et le vocabulaire arrivent au service de la communication, pas l'inverse.",
      "Le rythme s'adapte à votre vie : hebdomadaire pour une progression régulière, bimensuel pour un entretien, ou intensif sur une période donnée si vous avez un projet précis (voyage, expatriation, prise de poste). Présentiel ou distance, selon ce qui vous convient.",
      `Vous bénéficiez d'un suivi régulier de votre progression. Pas de pression d'examen, pas de jugement — juste un accompagnement bienveillant et exigeant d'un formateur natif britannique avec plus de ${EXPERIENCE_FLOOR} ans d'expérience auprès d'adultes.`,
    ]}
    benefits={[
      "Un programme conçu autour de vos objectifs personnels",
      "Un rythme adapté à votre vie et à vos disponibilités",
      "Une approche conversationnelle, vivante et progressive",
      "Un suivi régulier de votre progression",
      "Une formation avec un natif britannique expérimenté",
      "La possibilité de combiner présentiel et distance",
    ]}
    faqs={[
      { q: "Quel niveau faut-il avoir pour commencer ?", a: "Aucun prérequis. Je travaille avec tous les niveaux, du grand débutant au niveau avancé. Le programme s'adapte exactement à votre point de départ." },
      { q: "À quel rythme se passent les cours ?", a: "À votre rythme. Hebdomadaire, bimensuel, ou intensif selon votre projet et votre disponibilité. On définit ensemble le rythme qui tient dans la durée." },
      { q: "Présentiel ou distance ?", a: "Les deux sont possibles, selon votre préférence. Le présentiel se fait dans le Var et les Alpes-Maritimes ; la distance fonctionne partout en France et dans le monde." },
      { q: "Combien de temps pour progresser ?", a: "Variable, cela dépend de votre engagement et de vos objectifs. Une progression visible se mesure généralement sur quelques mois d'engagement régulier — mais les premiers résultats sont souvent ressentis dès les premières séances." },
    ]}
    closingPitch="Vous voulez reprendre l'anglais à votre rythme, sans pression et avec un vrai formateur natif ? Parlons de votre projet."
    ctaLabel="Réserver un premier échange gratuit"
  />
);

export default AnglaisParticuliers;
