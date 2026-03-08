interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string[];
  h1?: string;
}

const SITE_URL = "https://www.antonyaddy.com";
const DEFAULT_IMAGE = `${SITE_URL}/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png`;

// Section-specific OG images for better social sharing
const OG_EXERCISES = `${SITE_URL}/og/og-exercises.png`;
const OG_BLOG = `${SITE_URL}/og/og-blog.png`;
const OG_CLOE = `${SITE_URL}/og/og-cloe.png`;

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Formateur Anglais Professionnel | Antony Addy",
    description: "Formations d'anglais professionnel sur mesure avec un formateur britannique certifié FPA. CPF, entreprises, particuliers. Alpes-Maritimes ou distanciel France.",
    canonical: `${SITE_URL}/`,
    h1: "Formateur d'anglais professionnel pour adultes",
    keywords: ["formateur anglais", "formation anglais professionnel", "CPF anglais", "formateur FPA", "cours anglais adultes", "Alpes-Maritimes"],
    ogImage: DEFAULT_IMAGE
  },
  about: {
    title: "Qui suis-je | Antony Addy, Formateur FPA",
    description: "Britannique natif certifié Formateur Professionnel d'Adultes depuis 2017. Plus de 20 ans d'expérience en formation d'anglais professionnel.",
    canonical: `${SITE_URL}/qui-je-suis`,
    h1: "Antony Addy – Formateur Professionnel d'Adultes",
    keywords: ["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes"],
    ogImage: DEFAULT_IMAGE
  },
  training: {
    title: "Formations Anglais Professionnel | Antony Addy",
    description: "Formations d'anglais professionnel sur mesure : CPF, entreprises, particuliers. Présentiel Alpes-Maritimes ou distanciel France entière. Devis gratuit.",
    canonical: `${SITE_URL}/offres-de-formation`,
    h1: "Offres de formation en anglais",
    keywords: ["formation anglais", "CPF anglais", "cours entreprise", "formation à distance", "anglais Alpes-Maritimes"],
    ogImage: DEFAULT_IMAGE
  },
  testimonials: {
    title: "Avis Clients | Formations Anglais Antony Addy",
    description: "15+ témoignages authentiques de professionnels satisfaits. Avis vérifiés sur la qualité des formations d'anglais d'Antony Addy.",
    canonical: `${SITE_URL}/temoignages`,
    h1: "Témoignages",
    keywords: ["témoignages formation anglais", "avis Antony Addy", "retours clients", "satisfaction apprenants"],
    ogImage: DEFAULT_IMAGE
  },
  contact: {
    title: "Contact | Antony Addy Formateur Anglais",
    description: "Contactez Antony Addy pour vos formations d'anglais professionnel. Réponse sous 24h par email, WhatsApp ou formulaire. Devis gratuit.",
    canonical: `${SITE_URL}/contact`,
    h1: "Contactez-moi",
    keywords: ["contact formateur anglais", "devis formation", "WhatsApp", "email formations"],
    ogImage: DEFAULT_IMAGE
  },
  blog: {
    title: "Blog Anglais Professionnel | Antony Addy",
    description: "Conseils d'expert pour progresser en anglais : grammaire, vocabulaire, erreurs courantes. Articles par un formateur FPA certifié.",
    canonical: `${SITE_URL}/blog`,
    h1: "Blog Anglais Professionnel",
    keywords: ["blog anglais", "conseils anglais", "grammaire anglaise", "vocabulaire professionnel"],
    ogImage: OG_BLOG
  },
  exercises: {
    title: "150+ Exercices Anglais Gratuits | Antony Addy",
    description: "Plus de 150 exercices interactifs gratuits : grammaire, vocabulaire, lecture, écoute. Créés par un formateur professionnel certifié FPA.",
    canonical: `${SITE_URL}/exercices`,
    h1: "Exercices d'Anglais Interactifs",
    keywords: ["exercices anglais gratuits", "grammaire anglaise", "vocabulaire anglais", "quiz anglais"],
    ogImage: OG_EXERCISES
  },
  reading: {
    title: "Compréhension Écrite Anglais | Antony Addy",
    description: "Améliorez votre compréhension écrite avec 12 textes et histoires interactives en anglais. Niveaux A2 à C1, créés par un formateur FPA certifié.",
    canonical: `${SITE_URL}/reading`,
    h1: "Compréhension Écrite",
    keywords: ["compréhension écrite anglais", "reading comprehension", "textes anglais", "lecture anglais"],
    ogImage: DEFAULT_IMAGE
  },
  listening: {
    title: "Listening Lab – Exercices Écoute Anglais | Antony Addy",
    description: "Améliorez votre compréhension orale anglaise avec des exercices d'écoute interactifs. Transcriptions avec traductions instantanées.",
    canonical: `${SITE_URL}/exercices/listening`,
    h1: "Listening Lab",
    keywords: ["compréhension orale anglais", "listening anglais", "exercices écoute", "audio anglais"],
    ogImage: DEFAULT_IMAGE
  },
  dashboard: {
    title: "Mon Tableau de Bord | Antony Addy",
    description: "Suivez votre progression dans les exercices d'anglais. Scores, leçons complétées et statistiques.",
    canonical: `${SITE_URL}/dashboard`,
    h1: "Mon Tableau de Bord",
    keywords: ["tableau de bord", "progression anglais", "suivi apprentissage"],
    ogImage: DEFAULT_IMAGE
  },
  auth: {
    title: "Connexion | Espace Étudiant Antony Addy",
    description: "Connectez-vous à votre espace étudiant pour accéder à vos cours et suivre votre progression.",
    canonical: `${SITE_URL}/auth`,
    h1: "Connexion",
    keywords: ["connexion", "espace étudiant", "compte apprenant"],
    ogImage: DEFAULT_IMAGE
  },
  legalNotices: {
    title: "Mentions Légales | antonyaddy.com",
    description: "Mentions légales du site antonyaddy.com : éditeur, hébergeur, RGPD et protection des données personnelles.",
    canonical: `${SITE_URL}/mentions-legales`,
    h1: "Mentions Légales",
    keywords: ["mentions légales", "RGPD", "données personnelles"],
    ogImage: DEFAULT_IMAGE
  },
  privacyPolicy: {
    title: "Politique de Confidentialité | antonyaddy.com",
    description: "Politique de confidentialité et gestion des données personnelles conformément au RGPD sur antonyaddy.com.",
    canonical: `${SITE_URL}/politique-confidentialite`,
    h1: "Politique de confidentialité",
    keywords: ["politique confidentialité", "RGPD", "données personnelles", "vie privée"],
    ogImage: DEFAULT_IMAGE
  },
  install: {
    title: "Installer l'Application | Antony Addy",
    description: "Installez l'application Antony Addy sur votre appareil pour accéder aux exercices d'anglais hors ligne.",
    canonical: `${SITE_URL}/install`,
    h1: "Installer l'application",
    keywords: ["installer application", "PWA", "application mobile"],
    ogImage: DEFAULT_IMAGE
  },
  emailTrainer: {
    title: "AI Email Reply Trainer — Professional Email Writing | Antony Addy",
    description: "Améliorez vos e-mails professionnels en anglais avec un feedback IA détaillé. Entraînez-vous à rédiger des réponses claires et professionnelles.",
    canonical: `${SITE_URL}/email-trainer`,
    h1: "AI Email Reply Trainer",
    keywords: ["email anglais professionnel", "rédaction email business English", "AI email feedback", "professional email writing"],
    ogImage: DEFAULT_IMAGE
  },
  presentationTrainer: {
    title: "AI Presentation Trainer | Business English Practice",
    description: "Practice professional presentations in English and receive instant AI feedback on clarity, structure, vocabulary, and persuasion.",
    canonical: `${SITE_URL}/presentation-trainer`,
    h1: "AI Presentation Trainer",
    keywords: ["presentation anglais", "business English presentation", "AI presentation feedback", "professional speaking practice"],
    ogImage: DEFAULT_IMAGE
  },
  negotiationTrainer: {
    title: "AI Negotiation Trainer | Business English Practice",
    description: "Practice professional negotiations in English and receive instant AI feedback on persuasion, vocabulary, and negotiation strategy.",
    canonical: `${SITE_URL}/negotiation-trainer`,
    h1: "AI Negotiation Trainer",
    keywords: ["negotiation anglais", "business English negotiation", "AI negotiation feedback", "professional negotiation practice"],
    ogImage: DEFAULT_IMAGE
  },
  speakingPractice: {
    title: "AI Speaking Practice — Entraînement Oral Anglais | Antony Addy",
    description: "Parlez en anglais avec un partenaire IA. Reconnaissance vocale, synthèse vocale et feedback sur la prononciation et la fluidité.",
    canonical: `${SITE_URL}/speaking-practice`,
    h1: "AI Speaking Practice",
    keywords: ["speaking practice anglais", "prononciation anglais", "entraînement oral", "AI speaking feedback"],
    ogImage: DEFAULT_IMAGE
  },
  writingCoach: {
    title: "AI Writing Coach — Correction Anglais Écrit | Antony Addy",
    description: "Soumettez un texte en anglais et recevez un feedback IA détaillé : grammaire, vocabulaire, style et version améliorée.",
    canonical: `${SITE_URL}/writing-coach`,
    h1: "AI Writing Coach",
    keywords: ["writing coach anglais", "correction texte anglais", "AI writing feedback", "améliorer rédaction anglais"],
    ogImage: DEFAULT_IMAGE
  },
  interviewSimulator: {
    title: "AI Interview Simulator — Entretien Anglais | Antony Addy",
    description: "Simulez un entretien d'embauche en anglais avec un recruteur IA. 8 secteurs, 3 types d'entretien, feedback CECRL détaillé.",
    canonical: `${SITE_URL}/interview-simulator`,
    h1: "AI Interview Simulator",
    keywords: ["entretien anglais", "interview simulator", "AI job interview", "préparation entretien anglais"],
    ogImage: DEFAULT_IMAGE
  },
  grammarExplainer: {
    title: "AI Grammar Explainer — Analyse Grammaticale | Antony Addy",
    description: "Collez une phrase en anglais et obtenez une analyse grammaticale complète par IA : nature des mots, règles et conseils pratiques.",
    canonical: `${SITE_URL}/grammar-explainer`,
    h1: "AI Grammar Explainer",
    keywords: ["grammar explainer", "analyse grammaticale anglais", "AI grammar", "règles grammaire anglaise"],
    ogImage: DEFAULT_IMAGE
  }
};

/**
 * Get SEO metadata for a page
 */
export function getPageSEO(pageKey: string): SEOMetadata | undefined {
  return seoMetadata[pageKey];
}

/**
 * Generate breadcrumb items for a page
 */
export function generateBreadcrumbs(pagePath: string, pageTitle: string): Array<{ name: string; item: string }> {
  const breadcrumbs = [
    { name: "Accueil", item: SITE_URL }
  ];
  
  if (pagePath !== "/" && pagePath !== "") {
    breadcrumbs.push({
      name: pageTitle,
      item: `${SITE_URL}${pagePath}`
    });
  }
  
  return breadcrumbs;
}
