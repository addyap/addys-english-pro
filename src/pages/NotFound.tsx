
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, BookOpen, MessageSquare, User, GraduationCap } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/exercices', label: 'Exercices gratuits', icon: BookOpen },
    { href: '/offres-de-formation', label: 'Formations', icon: GraduationCap },
    { href: '/qui-je-suis', label: 'À propos', icon: User },
    { href: '/contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <>
      <SEOHead 
        title="Page non trouvée - 404 | Antony Addy"
        description="La page que vous cherchez n'existe pas. Retournez à l'accueil du site d'Antony Addy, formateur d'anglais professionnel."
        noIndex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page non trouvée</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          
          {/* Primary CTA */}
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-10"
          >
            Retour à l'accueil
          </Link>
          
          {/* Popular Pages */}
          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Pages populaires
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <page.icon className="h-4 w-4" />
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
