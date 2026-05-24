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
const OG_BLOG = `${SITE_URL}/og/og-blog.png`;


export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Cours d'anglais professionnel – Var & Alpes-Maritimes | Antony Addy",
    description: "Formateur d'anglais natif britannique, certifié FPA. Cours pour entreprises, cadres et particuliers. En présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde.",
    canonical: `${SITE_URL}/`,
    h1: "Formateur d'anglais professionnel pour adultes",
    keywords: ["formateur anglais", "formation anglais professionnel", "formateur FPA", "cours anglais adultes", "Var", "Alpes-Maritimes", "Côte d'Azur", "Fréjus", "Saint-Raphaël", "Nice", "Cannes", "Antibes", "Sophia Antipolis", "Monaco", "anglais à distance", "anglais entreprises", "anglais cadres", "anglais étudiants"],
    ogImage: DEFAULT_IMAGE
  },
  about: {
    title: "Qui suis-je | Antony Addy, Formateur FPA",
    description: "Britannique natif certifié Formateur Professionnel d'Adultes depuis 2017. Plus de 20 ans d'expérience en formation d'anglais professionnel.",
    canonical: `${SITE_URL}/qui-je-suis`,
    h1: "Antony Addy – Formateur Professionnel d'Adultes",
    keywords: ["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes", "Var", "Alpes-Maritimes"],
    ogImage: DEFAULT_IMAGE
  },
  training: {
    title: "Formations Anglais Professionnel | Antony Addy",
    description: "Formations d'anglais professionnel sur mesure pour entreprises, cadres et particuliers. Présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde. Devis gratuit.",
    canonical: `${SITE_URL}/offres-de-formation`,
    h1: "Offres de formation en anglais",
    keywords: ["formation anglais", "cours entreprise", "formation à distance", "anglais Var", "anglais Alpes-Maritimes", "anglais Fréjus"],
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
