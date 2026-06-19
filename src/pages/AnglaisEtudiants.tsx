import React from 'react';
import AudienceLandingPage from '@/components/pages/AudienceLandingPage';

const AnglaisEtudiants = () => (
  <AudienceLandingPage
    seo={{
      title: "Cours d'anglais pour étudiants et lycéens | Antony Addy",
      description: "Accompagnement personnalisé en anglais pour lycéens, étudiants du supérieur, et préparation aux examens (TOEIC, Cambridge, bac). Présentiel ou distance.",
      canonical: "https://www.antonyaddy.com/anglais-etudiants",
    }}
    h1="Cours d'anglais pour étudiants"
    sub="Accompagnement personnalisé pour lycéens, étudiants du supérieur, et préparation aux examens. Sur-mesure selon votre programme et vos objectifs."
    pourQui="J'accompagne des étudiants à tous les niveaux : lycéens préparant le bac, étudiants en école de commerce ou d'ingénieurs, étudiants en parcours universitaire qui ont besoin de l'anglais pour leurs études ou un projet international. Le contenu est toujours adapté à votre programme et à vos objectifs."
    comment={[
      "On commence par identifier précisément le besoin : préparation à un examen (TOEIC, Cambridge, bac, autres), rattrapage d'un retard, perfectionnement avant un semestre à l'étranger, anglais académique pour des cours en anglais, ou vocabulaire spécialisé selon votre filière.",
      "Je construis un programme cohérent avec votre emploi du temps d'étudiant : créneaux compatibles avec vos cours, séances plus rapprochées en période d'examens, allègement pendant les vacances si besoin. Le format peut être régulier toute l'année ou intensif autour d'échéances précises.",
      "Les contenus suivent votre situation réelle : épreuves blanches dans le format de votre examen, travail sur les supports que vous utilisez en cours, préparation aux entretiens d'admission ou de stage à l'international.",
      "L'approche reste vivante et engageante, loin de l'apprentissage purement scolaire. J'enseigne également à l'École Du Journalisme de Nice, donc je connais bien les enjeux et le rythme des étudiants du supérieur.",
    ]}
    benefits={[
      "Un accompagnement adapté à votre niveau d'études",
      "Une préparation ciblée aux examens si nécessaire",
      "Une flexibilité de planning autour de vos cours et examens",
      "Un rythme intensif possible avant les échéances importantes",
      "Une approche vivante et engageante, loin de l'apprentissage scolaire classique",
      "L'accès à un formateur natif britannique expérimenté",
    ]}
    faqs={[
      { q: "Préparez-vous à des examens spécifiques ?", a: "Oui, selon les besoins : TOEIC, Cambridge (B2 First, C1 Advanced), bac, et autres certifications sur demande. Le programme est calé sur le format et les exigences de l'examen visé." },
      { q: "Présentiel ou distance ?", a: "Les deux sont possibles. Beaucoup d'étudiants choisissent la distance pour la souplesse, surtout pendant les périodes de partiels ou de stage." },
      { q: "Cours réguliers ou intensifs ?", a: "Selon votre situation. Régulier pendant l'année universitaire, intensif avant un examen ou un départ à l'étranger. On peut basculer d'un format à l'autre selon les périodes." },
      { q: "Travaillez-vous avec des lycéens ?", a: "Oui, j'accompagne aussi bien des lycéens (préparation au bac, oraux, soutien) que des étudiants du supérieur (écoles, universités, prépas)." },
    ]}
    closingPitch="Vous avez un examen à préparer, un semestre à l'étranger en vue, ou simplement besoin de prendre une longueur d'avance ? Parlons de votre projet."
    ctaLabel="Réserver un premier échange gratuit"
  />
);

export default AnglaisEtudiants;
