import React from 'react';
import AudienceLandingPage from '@/components/pages/AudienceLandingPage';

// Higher education only. This page used to lead with "lycéens" and bac
// preparation; secondary school is out of scope, and mixing it in undercut the
// adult/professional positioning the rest of the site is built on — a company
// evaluating a corporate trainer should not meet school tutoring on the way.
const AnglaisEtudiants = () => (
  <AudienceLandingPage
    seo={{
      title: "Cours d'anglais pour étudiants du supérieur | Antony Addy",
      description: "Accompagnement en anglais pour étudiants du supérieur : BTS, Bachelor, Master, écoles de commerce et d'ingénieurs, universités. Préparation TOEIC et Cambridge.",
      canonical: "https://www.antonyaddy.com/anglais-etudiants",
    }}
    h1="Cours d'anglais pour étudiants du supérieur"
    sub="BTS, Bachelor, Master, écoles de commerce et d'ingénieurs, universités. Anglais académique, professionnel et préparation aux certifications."
    pourQui="J'accompagne des étudiants de l'enseignement supérieur : BTS, Bachelor, Master, écoles de commerce et d'ingénieurs, parcours universitaires et alternants. Que l'anglais soit une matière à valider, la langue de vos cours, ou l'enjeu d'un semestre à l'étranger ou d'un stage international, le contenu est adapté à votre programme et à vos objectifs."
    comment={[
      "On commence par identifier précisément le besoin : préparation à une certification (TOEIC, Cambridge, Linguaskill), anglais académique pour des cours dispensés en anglais, perfectionnement avant un semestre à l'étranger, ou vocabulaire spécialisé selon votre filière.",
      "Je construis un programme cohérent avec votre emploi du temps : créneaux compatibles avec vos cours et votre alternance, séances plus rapprochées en période de partiels, allègement pendant les périodes de stage si besoin. Le format peut être régulier sur l'année ou intensif autour d'échéances précises.",
      "Les contenus suivent votre situation réelle : épreuves blanches au format de votre certification, travail sur les supports de vos cours, préparation aux entretiens d'admission, d'école ou de stage à l'international.",
      "L'approche est celle que j'utilise avec des adultes en poste — concrète et exigeante, loin de l'apprentissage scolaire. J'enseigne à l'École Du Journalisme de Nice et interviens en école de commerce, donc je connais le rythme et les attentes du supérieur.",
    ]}
    benefits={[
      "Un accompagnement calé sur votre filière et votre niveau d'études",
      "Une préparation ciblée aux certifications reconnues par les employeurs",
      "Une flexibilité de planning autour de vos cours, partiels et stages",
      "Un rythme intensif possible avant une échéance ou un départ à l'étranger",
      "Une approche professionnelle, utile bien au-delà du diplôme",
      "L'accès à un formateur natif britannique certifié FPA",
    ]}
    faqs={[
      { q: "Préparez-vous à des certifications spécifiques ?", a: "Oui : TOEIC, Cambridge (B2 First, C1 Advanced), Linguaskill, CLOE et autres sur demande. Le programme est calé sur le format et les exigences de l'épreuve visée." },
      { q: "Présentiel ou distance ?", a: "Les deux sont possibles. Beaucoup d'étudiants choisissent la distance pour la souplesse, surtout pendant les partiels ou une période de stage." },
      { q: "Cours réguliers ou intensifs ?", a: "Selon votre situation. Régulier pendant l'année universitaire, intensif avant une certification ou un départ à l'étranger. On peut basculer d'un format à l'autre selon les périodes." },
      { q: "Intervenez-vous auprès des écoles et des universités elles-mêmes ?", a: "Oui. J'interviens comme formateur pour des écoles de commerce, des écoles spécialisées et des organismes de formation, dans le cadre de leurs propres dispositifs. Voir la page entreprise pour ce type de collaboration." },
    ]}
    closingPitch="Une certification à passer, un semestre à l'étranger en vue, ou l'anglais qui devient l'enjeu de votre filière ? Parlons de votre projet."
    ctaLabel="Réserver un premier échange gratuit"
  />
);

export default AnglaisEtudiants;
