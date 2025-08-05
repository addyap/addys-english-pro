
interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  keywords?: string;
}

export const seoMetadata: Record<string, SEOMetadata> = {
  home: {
    title: "Formateur d'anglais pour adultes – Antony Addy",
    description: "Formations d'anglais en ligne ou en présentiel dans le Var. CPF via centres certifiés Qualiopi.",
    canonical: "https://antonyaddy.com/",
    keywords: "formation anglais, formateur FPA, CPF anglais, Var, professionnel"
  },
  about: {
    title: "Qui suis-je – Antony Addy, Prestataire de formation certifié",
    description: "Antony Addy, formateur certifié FPA, expert en anglais professionnel pour adultes et institutions.",
    canonical: "https://antonyaddy.com/qui-je-suis"
  },
  training: {
    title: "Offres de formation en anglais – Antony Addy",
    description: "Formations en direct ou via CPF avec organismes agréés. Présentiel Var ou distanciel en France.",
    canonical: "https://antonyaddy.com/offres-de-formation"
  },
  testimonials: {
    title: "Témoignages – Antony Addy | Formateur Anglais",
    description: "Avis authentiques d'anciens apprenants et professionnels sur la qualité des formations d'anglais animées par Antony Addy.",
    canonical: "https://antonyaddy.com/temoignages"
  },
  contact: {
    title: "Contact – Antony Addy, Prestataire d'anglais",
    description: "Contactez-moi pour une formation en anglais professionnel.",
    canonical: "https://antonyaddy.com/contact"
  },
  blog: {
    title: "Blog – Conseils et ressources en anglais professionnel",
    description: "Articles pour progresser en anglais, éviter les pièges, et mieux communiquer au travail.",
    canonical: "https://antonyaddy.com/blog"
  },
  anglaisadistance: {
    title: "anglaisadistance.fr – Ressources gratuites pour apprendre l'anglais",
    description: "Explorez grammaire, vocabulaire, dialogues, quiz et plus encore sur anglaisadistance.fr – la plateforme gratuite dédiée à l'apprentissage de l'anglais.",
    canonical: "https://antonyaddy.com/anglaisadistance",
    keywords: "anglais à distance, grammaire anglaise, vocabulaire anglais, dialogues anglais, quiz anglais"
  }
};
