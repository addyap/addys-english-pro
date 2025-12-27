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

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Formateur Anglais Professionnel | Antony Addy",
    description: "Formations d'anglais sur mesure avec un formateur britannique certifié FPA. CPF, entreprises, particuliers. Présentiel Alpes-Maritimes ou distanciel France.",
    canonical: `${SITE_URL}/`,
    h1: "Formateur d'anglais professionnel pour adultes",
    keywords: ["formateur anglais", "formation anglais professionnel", "CPF anglais", "formateur FPA", "cours anglais adultes", "Alpes-Maritimes"],
    ogImage: DEFAULT_IMAGE
  },
  about: {
    title: "Qui suis-je | Antony Addy, Formateur FPA",
    description: "Britannique natif certifié FPA depuis 2017, plus de 20 ans d'expérience en formation d'anglais professionnel. Découvrez mon parcours.",
    canonical: `${SITE_URL}/qui-je-suis`,
    h1: "Antony Addy – Formateur Professionnel d'Adultes",
    keywords: ["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes"],
    ogImage: DEFAULT_IMAGE
  },
  training: {
    title: "Formations Anglais Professionnel | Antony Addy",
    description: "Formations d'anglais sur mesure : CPF, entreprises, particuliers. Présentiel Alpes-Maritimes ou distanciel France entière. Devis gratuit.",
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
    description: "Contactez Antony Addy pour vos formations d'anglais. Réponse sous 24h par email, WhatsApp ou formulaire. Devis gratuit.",
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
    ogImage: DEFAULT_IMAGE
  },
  exercises: {
    title: "150+ Exercices Anglais Gratuits | Antony Addy",
    description: "Exercices interactifs gratuits : grammaire, vocabulaire, lecture, écoute. Créés par un formateur professionnel certifié.",
    canonical: `${SITE_URL}/exercices`,
    h1: "Exercices d'Anglais Interactifs",
    keywords: ["exercices anglais gratuits", "grammaire anglaise", "vocabulaire anglais", "quiz anglais"],
    ogImage: DEFAULT_IMAGE
  },
  reading: {
    title: "Compréhension Écrite Anglais | Antony Addy",
    description: "12 textes et histoires interactives pour améliorer votre lecture en anglais. Niveaux A2 à C1, créés par un formateur FPA.",
    canonical: `${SITE_URL}/reading`,
    h1: "Compréhension Écrite",
    keywords: ["compréhension écrite anglais", "reading comprehension", "textes anglais", "lecture anglais"],
    ogImage: DEFAULT_IMAGE
  },
  listening: {
    title: "Listening Lab – Exercices Écoute Anglais | Antony Addy",
    description: "Améliorez votre compréhension orale avec des exercices d'écoute interactifs. Transcriptions avec traductions instantanées.",
    canonical: `${SITE_URL}/exercices/listening`,
    h1: "Listening Lab",
    keywords: ["compréhension orale anglais", "listening anglais", "exercices écoute", "audio anglais"],
    ogImage: DEFAULT_IMAGE
  },
  anglaisadistance: {
    title: "anglaisadistance.fr – Ressources Gratuites | Antony Addy",
    description: "Plateforme gratuite : grammaire, vocabulaire, dialogues, quiz interactifs. Créée par Antony Addy, formateur professionnel.",
    canonical: `${SITE_URL}/anglaisadistance`,
    h1: "Ressources gratuites d'anglais",
    keywords: ["anglais à distance", "ressources gratuites", "grammaire anglaise", "vocabulaire anglais"],
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
