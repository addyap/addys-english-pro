// Single source of truth for Antony Addy's three training domains.
// antonyaddy.com is the hub: the English formation lives on this site (root),
// while the IA and SAP formations live on their own subdomains. Update links
// or wording here and the header switcher, homepage section and footer all
// follow automatically.

export interface Formation {
  /** Stable key, also used for analytics + React keys. */
  key: 'anglais' | 'ia' | 'sap';
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
  /** lucide-react icon name, resolved by each consumer. */
  icon: 'Globe' | 'Sparkles' | 'Settings';
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
    navLabel: 'Intelligence Artificielle',
    title: 'Intelligence Artificielle',
    tagline:
      "Formations à l'IA générative pour gagner en productivité : ChatGPT, prompts et outils IA appliqués à votre métier.",
    href: 'https://ia.antonyaddy.com',
    external: true,
    icon: 'Sparkles',
    cta: 'Découvrir la formation IA',
  },
  {
    key: 'sap',
    navLabel: 'SAP',
    title: 'SAP',
    tagline:
      "Formations SAP pour maîtriser l'ERP de référence et accompagner votre montée en compétences ou celle de vos équipes.",
    href: 'https://sap.antonyaddy.com',
    external: true,
    icon: 'Settings',
    cta: 'Découvrir la formation SAP',
  },
];
