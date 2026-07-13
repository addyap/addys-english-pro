import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Home, BookOpen, Sparkles, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const recoveryActions = [
    { href: '/', label: 'Retour à l\'accueil', icon: Home, variant: 'default' as const },
    { href: '/offres-de-formation', label: 'Voir les formations', icon: BookOpen, variant: 'outline' as const },
    { href: '/test-de-positionnement', label: 'Test de niveau gratuit', icon: Sparkles, variant: 'outline' as const },
    { href: '/contact', label: 'Contacter Antony', icon: Mail, variant: 'ghost' as const },
  ];

  return (
    <>
      <SEOHead
        title="Page introuvable — 404 | Antony Addy"
        description="Cette page n'existe pas ou a été déplacée. Retrouvez les formations d'anglais d'Antony Addy, le test de niveau gratuit, ou contactez-le directement."
        noIndex={true}
      />

      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-7xl font-bold text-primary mb-4">404</p>
          <h1 className="text-2xl font-semibold text-foreground mb-3">Page introuvable</h1>
          <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Cette page n'existe pas ou a été déplacée.
            Choisissez l'une des options ci-dessous pour continuer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            {recoveryActions.map((a) => (
              <Button
                key={a.href}
                asChild
                variant={a.variant}
                className="w-full justify-start"
              >
                <Link
                  to={a.href}
                  onClick={() =>
                    trackEvent('404_cta_click', {
                      source: 'not_found_page',
                      from: location.pathname,
                      target: a.href,
                      label: a.label,
                    })
                  }
                >
                  <a.icon className="w-4 h-4 mr-2" />
                  {a.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
