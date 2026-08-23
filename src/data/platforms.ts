// Single source of truth for the free English-learning platforms Antony builds
// alongside his training. /ressources-en-ligne renders the full list; other
// pages link to it and derive the count from PLATFORM_COUNT rather than writing
// a number in prose that silently goes stale.

export interface Platform {
  name: string;
  url?: string;
  host: string;
  tag: string;
  raison: string;
  accent: string; // tailwind gradient classes for the card header band
}

export const PLATFORMS: Platform[] = [
  {
    name: 'Anglais à distance',
    url: 'https://anglaisadistance.fr',
    host: 'anglaisadistance.fr',
    tag: 'Pour les francophones',
    raison:
      "Une plateforme d'exercices d'anglais pensée pour les francophones : des centaines d'activités interactives, corrigées instantanément, pour progresser à son rythme et là où l'on se trouve.",
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Grammatica',
    url: 'https://grammatica.antonyaddy.com',
    host: 'grammatica.antonyaddy.com',
    tag: 'Guide multilingue',
    raison:
      "Un guide de grammaire anglaise multilingue : des explications claires, dans la langue maternelle de l'apprenant, pour comprendre enfin les règles qui bloquent les élèves du monde entier.",
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'ListenUp',
    url: 'https://listening.antonyaddy.com',
    host: 'listening.antonyaddy.com',
    tag: 'Compréhension orale',
    raison:
      "Une plateforme d'entraînement à la compréhension orale de l'anglais : exercices audio interactifs, voix générées par IA, quiz et traductions en plus de dix langues, pour habituer l'oreille à l'anglais réel.",
    accent: 'from-violet-500 to-purple-600',
  },
  {
    name: 'ToeicPath',
    url: 'https://toeic.antonyaddy.com',
    host: 'toeic.antonyaddy.com',
    tag: 'Préparation TOEIC',
    raison:
      "Une préparation complète au TOEIC : entraînements ciblés, tests blancs au format réel et stratégies concrètes pour viser le score dont on a besoin.",
    accent: 'from-amber-500 to-orange-600',
  },
  {
    name: 'CLOE Prep',
    url: 'https://cloe.antonyaddy.com',
    host: 'cloe.antonyaddy.com',
    tag: 'Préparation CLOE',
    raison:
      "Une préparation dédiée à la certification CLOE : exercices calés sur le format de l'épreuve pour aborder l'examen avec méthode et confiance.",
    accent: 'from-rose-500 to-pink-600',
  },
  {
    name: 'SpeakUp AI',
    url: 'https://speak.antonyaddy.com',
    host: 'speak.antonyaddy.com',
    tag: 'Expression orale',
    raison:
      "Un entraîneur d'expression orale propulsé par l'IA : dialoguez à voix haute, entraînez-vous à de vraies situations et recevez un retour instantané sur votre prononciation et votre aisance.",
    accent: 'from-cyan-500 to-sky-600',
  },
];

/** Number of platforms currently live. Derived — never hardcode this in copy. */
export const PLATFORM_COUNT = PLATFORMS.length;
