import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/lib/seo/jsonld';

const SITE_URL = "https://www.antonyaddy.com";

// Route to section/label mapping
const routeConfig: Record<string, { label: string; section?: string; sectionPath?: string }> = {
  '/': { label: 'Accueil' },
  '/qui-je-suis': { label: 'Qui je suis' },
  '/offres-de-formation': { label: 'Offres de formation' },
  '/temoignages': { label: 'Témoignages' },
  '/contact': { label: 'Contact' },
  '/blog': { label: 'Blog' },
  '/exercices': { label: 'Exercices' },
  '/reading': { label: 'Compréhension écrite' },
  '/anglaisadistance': { label: 'Ressources en ligne' },
  '/dashboard': { label: 'Tableau de bord' },
  '/mentions-legales': { label: 'Mentions légales' },
  '/politique-confidentialite': { label: 'Politique de confidentialité' },
  '/sitemap-page': { label: 'Plan du site' },
  '/auth': { label: 'Connexion' },
  '/install': { label: 'Installer' },
};

// Section mappings for nested routes
const sectionMappings: Record<string, { section: string; sectionPath: string }> = {
  '/blog/': { section: 'Blog', sectionPath: '/blog' },
  '/exercices/': { section: 'Exercices', sectionPath: '/exercices' },
  '/reading/': { section: 'Compréhension écrite', sectionPath: '/reading' },
  '/story/': { section: 'Histoires interactives', sectionPath: '/reading' },
  '/grammar/': { section: 'Grammaire', sectionPath: '/exercices' },
  '/drag-drop/': { section: 'Exercices', sectionPath: '/exercices' },
  '/writing/': { section: 'Exercices', sectionPath: '/exercices' },
};

interface BreadcrumbsProps {
  customTitle?: string;
  customSection?: { label: string; path: string };
}

export default function Breadcrumbs({ customTitle, customSection }: BreadcrumbsProps) {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't render on home page
  if (pathname === '/') return null;

  const crumbs: Array<{ name: string; path: string }> = [
    { name: 'Accueil', path: '/' }
  ];

  // Check if this is a nested route
  let sectionInfo: { section: string; sectionPath: string } | null = null;
  for (const [prefix, info] of Object.entries(sectionMappings)) {
    if (pathname.startsWith(prefix)) {
      sectionInfo = info;
      break;
    }
  }

  // Add custom section if provided
  if (customSection) {
    crumbs.push({ name: customSection.label, path: customSection.path });
  } else if (sectionInfo) {
    // Add section crumb for nested routes
    crumbs.push({ name: sectionInfo.section, path: sectionInfo.sectionPath });
  }

  // Get current page label
  let currentLabel = customTitle;
  if (!currentLabel) {
    const config = routeConfig[pathname];
    currentLabel = config?.label || 'Page';
  }

  // Add current page (not as a link)
  crumbs.push({ name: currentLabel, path: pathname });

  // Generate JSON-LD breadcrumb items
  const jsonLdItems = crumbs.map(crumb => ({
    name: crumb.name,
    item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`
  }));

  return (
    <>
      {/* JSON-LD for SEO */}
      <BreadcrumbJsonLd items={jsonLdItems} />

      {/* Visual breadcrumbs */}
      <nav 
        aria-label="Fil d'Ariane" 
        className="py-3 px-4 bg-muted/30 border-b border-border"
      >
        <div className="max-w-7xl mx-auto">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              const isFirst = index === 0;

              return (
                <li key={crumb.path + index} className="flex items-center gap-1">
                  {index > 0 && (
                    <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                  )}
                  
                  {isLast ? (
                    <span 
                      className="font-medium text-foreground"
                      aria-current="page"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.path}
                      className="hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {isFirst && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                      <span>{crumb.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
