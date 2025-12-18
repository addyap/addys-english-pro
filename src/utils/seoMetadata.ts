
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
    title: "Formateur d'anglais pour adultes – Antony Addy",
    description: "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes. CPF via centres certifiés Qualiopi. Formateur natif britannique certifié FPA.",
    canonical: `${SITE_URL}/`,
    h1: "Formateur d'anglais professionnel pour adultes",
    keywords: ["formation anglais", "formateur FPA", "CPF anglais", "Alpes-Maritimes", "anglais professionnel", "cours anglais adultes"],
    ogImage: DEFAULT_IMAGE
  },
  about: {
    title: "Qui suis-je – Antony Addy, Formateur d'anglais certifié FPA",
    description: "Antony Addy, formateur britannique natif certifié FPA depuis 2017. Plus de 20 ans d'expérience en formation d'anglais professionnel pour adultes et entreprises.",
    canonical: `${SITE_URL}/qui-je-suis`,
    h1: "Antony Addy – Formateur Professionnel d'Adultes certifié",
    keywords: ["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes"],
    ogImage: DEFAULT_IMAGE
  },
  training: {
    title: "Offres de formation en anglais professionnel – Antony Addy",
    description: "Formations d'anglais sur mesure : anglais professionnel, CPF, entreprises, particuliers. En présentiel (Alpes-Maritimes) ou à distance (France entière).",
    canonical: `${SITE_URL}/offres-de-formation`,
    h1: "Offres de formation en anglais",
    keywords: ["formation anglais professionnel", "CPF anglais", "cours entreprise", "formation à distance", "anglais Alpes-Maritimes"],
    ogImage: DEFAULT_IMAGE
  },
  testimonials: {
    title: "Témoignages Clients – Avis sur les formations d'Antony Addy",
    description: "Découvrez les avis authentiques de plus de 15 professionnels ayant suivi les formations d'anglais d'Antony Addy. Retours vérifiés sur la qualité et l'efficacité.",
    canonical: `${SITE_URL}/temoignages`,
    h1: "Témoignages",
    keywords: ["témoignages formation anglais", "avis Antony Addy", "retours clients", "satisfaction apprenants"],
    ogImage: DEFAULT_IMAGE
  },
  contact: {
    title: "Contact – Antony Addy | Formateur d'anglais professionnel",
    description: "Contactez Antony Addy pour vos besoins en formation d'anglais professionnel. Réponse rapide par email, WhatsApp ou formulaire. Devis gratuit sur demande.",
    canonical: `${SITE_URL}/contact`,
    h1: "Contactez-moi pour vos formations d'anglais",
    keywords: ["contact formateur anglais", "devis formation", "WhatsApp", "email formations"],
    ogImage: DEFAULT_IMAGE
  },
  blog: {
    title: "Blog – Conseils et ressources en anglais professionnel | Antony Addy",
    description: "Articles pour progresser en anglais : grammaire, vocabulaire, erreurs courantes, astuces professionnelles. Conseils d'un formateur certifié FPA.",
    canonical: `${SITE_URL}/blog`,
    h1: "Blog Anglais Professionnel",
    keywords: ["blog anglais", "conseils anglais", "grammaire anglaise", "vocabulaire professionnel", "astuces anglais"],
    ogImage: DEFAULT_IMAGE
  },
  exercises: {
    title: "150 Exercices d'anglais gratuits – Grammaire & Vocabulaire | Antony Addy",
    description: "Accédez à 150 exercices d'anglais gratuits créés par un formateur professionnel. Grammaire, vocabulaire, pièges courants et faux-amis.",
    canonical: `${SITE_URL}/exercices`,
    h1: "Exercices d'Anglais",
    keywords: ["exercices anglais gratuits", "grammaire anglaise", "vocabulaire anglais", "quiz anglais", "pièges anglais"],
    ogImage: DEFAULT_IMAGE
  },
  reading: {
    title: "Compréhension Écrite | Reading Comprehension | Antony Addy",
    description: "Améliorez votre compréhension écrite en anglais avec des textes adaptés à tous les niveaux et des questions de compréhension interactives.",
    canonical: `${SITE_URL}/reading`,
    h1: "Compréhension Écrite",
    keywords: ["compréhension écrite anglais", "reading comprehension", "textes anglais", "lecture anglais"],
    ogImage: DEFAULT_IMAGE
  },
  anglaisadistance: {
    title: "anglaisadistance.fr – Ressources gratuites d'anglais | Antony Addy",
    description: "Plateforme gratuite de ressources pédagogiques en anglais : grammaire claire, vocabulaire thématique, dialogues authentiques, quiz interactifs.",
    canonical: `${SITE_URL}/anglaisadistance`,
    h1: "anglaisadistance.fr",
    keywords: ["anglais à distance", "ressources gratuites", "grammaire anglaise", "vocabulaire anglais", "quiz anglais"],
    ogImage: DEFAULT_IMAGE
  },
  dashboard: {
    title: "Mon Tableau de Bord | Antony Addy",
    description: "Suivez votre progression dans les exercices d'anglais. Consultez vos scores, les leçons complétées et continuez votre apprentissage.",
    canonical: `${SITE_URL}/dashboard`,
    h1: "Mon Tableau de Bord",
    keywords: ["tableau de bord", "progression anglais", "suivi apprentissage", "scores exercices"],
    ogImage: DEFAULT_IMAGE
  },
  auth: {
    title: "Connexion – Espace Étudiant | Antony Addy",
    description: "Connectez-vous à votre espace étudiant pour accéder à vos cours d'anglais et suivre votre progression.",
    canonical: `${SITE_URL}/auth`,
    h1: "Connexion",
    keywords: ["connexion", "espace étudiant", "compte apprenant"],
    ogImage: DEFAULT_IMAGE
  },
  legalNotices: {
    title: "Mentions légales – Antony Addy",
    description: "Consultez les mentions légales du site antonyaddy.com, y compris l'identité de l'éditeur, hébergeur et conditions d'utilisation.",
    canonical: `${SITE_URL}/mentions-legales`,
    h1: "Mentions Légales",
    keywords: ["mentions légales", "conditions utilisation", "éditeur site"],
    ogImage: DEFAULT_IMAGE
  },
  privacyPolicy: {
    title: "Politique de confidentialité – Antony Addy",
    description: "Découvrez comment vos données personnelles sont collectées et utilisées sur antonyaddy.com conformément au RGPD.",
    canonical: `${SITE_URL}/politique-confidentialite`,
    h1: "Politique de confidentialité",
    keywords: ["politique confidentialité", "RGPD", "données personnelles", "vie privée"],
    ogImage: DEFAULT_IMAGE
  },
  install: {
    title: "Installer l'application – Antony Addy",
    description: "Installez l'application Antony Addy sur votre appareil pour un accès rapide aux exercices d'anglais, même hors ligne.",
    canonical: `${SITE_URL}/install`,
    h1: "Installer l'application",
    keywords: ["installer application", "PWA", "application mobile", "hors ligne"],
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
