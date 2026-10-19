// Single source of truth for the free English-learning platforms Antony builds
// alongside his training. /ressources-en-ligne renders the full list; other
// pages link to it and derive the count from PLATFORM_COUNT rather than writing
// a number in prose that silently goes stale.
//
// Some platforms are served on this domain (www.antonyaddy.com/grammatica …):
// vercel.json forwards their path to a separate app. They're linked with a
// plain <a> (full page load, same tab), never a router <Link>.

export interface Platform {
  name: string;
  url?: string;
  host: string;
  tag: string;
  raison: string;
  accent: string; // tailwind gradient classes for the card header band
  /** Screenshot of the platform's home page (960×600, from the studio portfolio). */
  image: string;
  /** An app you sign in to and use (CLOE, SpeakUp), not a website you browse. */
  app?: true;
}

export const PLATFORMS: Platform[] = [
  {
    name: 'Anglais à distance',
    image: '/projects/anglais-a-distance.webp',
    url: 'https://www.anglaisadistance.fr',
    host: 'anglaisadistance.fr',
    tag: 'Pour les francophones',
    raison:
      "Une plateforme d'exercices d'anglais pensée pour les francophones : des centaines d'activités interactives, corrigées instantanément, pour progresser à son rythme et là où l'on se trouve.",
    accent: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Grammatica',
    image: '/projects/grammatica.webp',
    url: 'https://www.antonyaddy.com/grammatica',
    host: 'antonyaddy.com/grammatica',
    tag: 'Guide multilingue',
    raison:
      "Un guide de grammaire anglaise multilingue : des explications claires, dans la langue maternelle de l'apprenant, pour comprendre enfin les règles qui bloquent les élèves du monde entier.",
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'ListenUp',
    image: '/projects/listening-english.webp',
    url: 'https://www.antonyaddy.com/listening',
    host: 'antonyaddy.com/listening',
    tag: 'Compréhension orale',
    raison:
      "Une plateforme d'entraînement à la compréhension orale de l'anglais : exercices audio interactifs, voix générées par IA, quiz et traductions en plus de dix langues, pour habituer l'oreille à l'anglais réel.",
    accent: 'from-violet-500 to-purple-600',
  },
  {
    name: 'ToeicPath',
    image: '/projects/toeic-success-hub.webp',
    url: 'https://www.antonyaddy.com/toeic',
    host: 'antonyaddy.com/toeic',
    tag: 'Préparation TOEIC',
    raison:
      "Une préparation complète au TOEIC : entraînements ciblés, tests blancs au format réel et stratégies concrètes pour viser le score dont on a besoin.",
    accent: 'from-amber-500 to-orange-600',
  },
  {
    name: 'English Reading Adventures',
    image: '/projects/adventure-books.webp',
    url: 'https://www.antonyaddy.com/books',
    host: 'antonyaddy.com/books',
    tag: 'Lecture interactive',
    raison:
      "Des histoires interactives dont l'apprenant est le héros : chaque choix change la suite. Trois niveaux de lecture (A2, B1, B2) et le sens des mots disponible en huit langues, pour lire en anglais avec plaisir.",
    accent: 'from-teal-600 to-cyan-800',
  },
  {
    name: 'CLOE Prep',
    image: '/projects/cloe-prep-path.webp',
    url: 'https://cloe.antonyaddy.com',
    host: 'cloe.antonyaddy.com',
    tag: 'Application · Préparation CLOE',
    app: true,
    raison:
      "Une application de préparation à la certification CLOE : exercices calés sur le format de l'épreuve pour aborder l'examen avec méthode et confiance.",
    accent: 'from-rose-500 to-pink-600',
  },
  {
    name: 'SpeakUp AI',
    image: '/projects/speakup.webp',
    url: 'https://speak.antonyaddy.com',
    host: 'speak.antonyaddy.com',
    tag: 'Application · Expression orale',
    app: true,
    raison:
      "Une application d'expression orale propulsée par l'IA : dialoguez à voix haute, entraînez-vous à de vraies situations et recevez un retour instantané sur votre prononciation et votre aisance.",
    accent: 'from-cyan-500 to-sky-600',
  },
];

const SITE_ORIGIN = 'https://www.antonyaddy.com';

/** "/grammatica" for a platform served on this domain, null for other sites. */
export const onSitePath = (p: Platform): string | null =>
  p.url?.startsWith(`${SITE_ORIGIN}/`) ? p.url.slice(SITE_ORIGIN.length) : null;

/** The platforms served on this domain. */
export const ON_SITE_PLATFORMS = PLATFORMS.filter((p) => onSitePath(p) !== null);

/** My own training tools, on this domain or an antonyaddy.com subdomain
 *  (CLOE and SpeakUp keep their subdomains: their logins are bound to them).
 *  Listed in the Ressources menu, the footer and the home tools block. */
export const MY_TOOLS = PLATFORMS.filter((p) => {
  try { return /(^|\.)antonyaddy\.com$/.test(new URL(p.url ?? '').hostname); }
  catch { return false; }
});

/** Link for a tool: its path when on this domain, else its own address. */
export const toolHref = (p: Platform): string => onSitePath(p) ?? p.url ?? '/ressources-en-ligne';

/** Subdomain tools open in a new tab; the ones on this domain don't. */
export const toolOpensNewTab = (p: Platform): boolean => onSitePath(p) === null;

/** Number of platforms currently live. Derived — never hardcode this in copy. */
export const PLATFORM_COUNT = PLATFORMS.length;
