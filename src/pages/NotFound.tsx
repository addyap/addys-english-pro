import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Home, BookOpen, Sparkles, Globe, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

type RecoveryAction = {
  href: string;
  label: string;
  icon: typeof Home;
  variant: 'default' | 'outline' | 'ghost';
  /** Forwarded apps (e.g. /ia) are served by another project, so they need a
      real page load, not a client-side <Link>. */
  external?: boolean;
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Mirrors the five routes on the static public/404.html so both 404s send
  // people to the same three activities, not just the English training.
  const recoveryActions: RecoveryAction[] = [
    { href: '/', label: 'Accueil', icon: Home, variant: 'default' },
    { href: '/offres-de-formation', label: "Formations d'anglais", icon: BookOpen, variant: 'outline' },
    { href: '/ia', label: 'Formations IA', icon: Sparkles, variant: 'outline', external: true },
    { href: '/creation-site-web-multilingue', label: 'Sites web', icon: Globe, variant: 'outline' },
    { href: '/contact', label: 'Me contacter', icon: Mail, variant: 'ghost' },
  ];

  const onPick = (a: RecoveryAction) =>
    trackEvent('404_cta_click', {
      source: 'not_found_page',
      from: location.pathname,
      target: a.href,
      label: a.label,
    });

  return (
    <>
      <SEOHead
        title="Page introuvable — 404 | Antony Addy"
        description="Cette page n'existe pas ou a été déplacée. Retrouvez les formations d'anglais, les formations IA et la création de sites web d'Antony Addy, ou contactez-le directement."
        noIndex={true}
      />

      <div className="flex items-center justify-center bg-muted/30 px-4 py-20 sm:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            to="/"
            aria-label="Antony Addy — accueil"
            className="inline-block mb-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img
              src="/brand/antony-addy-logo.svg"
              alt="Antony Addy"
              width={150}
              height={76}
              className="mx-auto h-auto w-[130px] sm:w-[150px]"
            />
          </Link>

          <p className="text-7xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl font-semibold text-foreground mb-3">Page introuvable</h1>
          <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Cette page n'existe pas ou a été déplacée.
            Choisissez l'une des options ci-dessous pour continuer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {recoveryActions.map((a) =>
              a.external ? (
                <Button
                  key={a.href}
                  asChild
                  variant={a.variant}
                  className="w-full justify-start"
                >
                  <a href={a.href} onClick={() => onPick(a)}>
                    <a.icon className="w-4 h-4 mr-2" />
                    {a.label}
                  </a>
                </Button>
              ) : (
                <Button
                  key={a.href}
                  asChild
                  variant={a.variant}
                  className="w-full justify-start"
                >
                  <Link to={a.href} onClick={() => onPick(a)}>
                    <a.icon className="w-4 h-4 mr-2" />
                    {a.label}
                  </Link>
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
