// Single source of truth for Antony Addy's three activities.
// antonyaddy.com is the hub: the English formation lives on this site (root),
// website creation on its own page here (/creation-site-web-multilingue, which
// links to the /sites-web portfolio) and generative-AI training at /ia (a
// separate app that www forwards to).
// Update links or wording here and the header switcher, homepage hub section
// and footer all follow automatically.

export interface Formation {
  /** Stable key, also used for analytics + React keys. */
  key: 'anglais' | 'ia' | 'creations';
  /** Short label for the nav switcher. */
  navLabel: string;
  /** Full card title. */
  title: string;
  /** One-line description shown on the homepage cards. */
  tagline: string;
  /** Destination. Internal (this site), or /ia and /sites-web. */
  href: string;
  /** True for the other activities, which are separate apps: linked with a
   *  plain <a> (full page load), listed under "Mes autres activités". */
  external: boolean;
  /** lucide-react icon name, used for the compact nav/footer tiles. */
  icon: 'Globe' | 'Sparkles' | 'Code';
  /** CTA label on the homepage card. */
  cta: string;
}

export const FORMATIONS: Formation[] = [
  {
    key: 'anglais',
    navLabel: 'Anglais professionnel',
    title: 'Anglais professionnel',
    tagline:
      "Coaching et formations d'anglais pour professionnels, cadres et entreprises — présentiel sur la Côte d'Azur ou à distance.",
    href: '/',
    external: false,
    icon: 'Globe',
    cta: 'Découvrir la formation anglais',
  },
  {
    key: 'creations',
    navLabel: 'Création de sites web',
    title: 'Sites web multilingues & outils',
    tagline:
      "Sites web multilingues pour les entreprises qui travaillent avec une clientèle internationale, et outils numériques sur mesure, développés avec l'IA.",
    href: '/creation-site-web-multilingue',
    external: true,
    icon: 'Code',
    cta: 'Découvrir mes créations',
  },
  {
    key: 'ia',
    navLabel: 'IA générative',
    title: 'IA générative',
    tagline:
      "Formations à l'IA générative pour gagner en productivité : ChatGPT, prompts et outils IA appliqués à votre métier.",
    href: '/ia',
    external: true,
    icon: 'Sparkles',
    cta: 'Découvrir la formation IA',
  },
];

/** Other domains open in a new tab; /ia and /sites-web are on this domain, so they don't. */
export const opensNewTab = (href: string) => href.startsWith('http');

/** "antonyaddy.com/ia", "antonyaddy.com/sites-web" — shown under menu labels. */
export const displayAddress = (href: string) =>
  href.startsWith('/') ? `antonyaddy.com${href}` : href.replace('https://', '');
