// Single source of truth for Antony Addy's three activities.
// antonyaddy.com is the hub: the English formation lives on this site (root),
// while the IA and website-creation activities live on their own subdomains.
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
  /** Destination. Internal (this site) or absolute subdomain URL. */
  href: string;
  /** True when href points to another domain (opens in a new tab). */
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
    key: 'ia',
    navLabel: 'IA générative',
    title: 'IA générative',
    tagline:
      "Formations à l'IA générative pour gagner en productivité : ChatGPT, prompts et outils IA appliqués à votre métier.",
    href: 'https://ia.antonyaddy.com',
    external: true,
    icon: 'Sparkles',
    cta: 'Découvrir la formation IA',
  },
  {
    key: 'creations',
    navLabel: 'Création de sites web',
    title: 'Création de sites web',
    tagline:
      "Sites web et outils métier sur mesure (applications, automatisations) pour entreprises et indépendants, développés avec l'IA.",
    href: 'https://creations.antonyaddy.com',
    external: true,
    icon: 'Code',
    cta: 'Découvrir mes créations web',
  },
];
