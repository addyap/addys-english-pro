import React from 'react';
import { Link } from 'react-router-dom';
import { MapIcon, Home, User, GraduationCap, MessageSquare, BookOpen, FileText, Shield } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const SitemapPage = () => {
  const mainPages = [
    { href: '/', label: 'Accueil', icon: Home, description: 'Page d\'accueil du site' },
    { href: '/qui-je-suis', label: 'Qui je suis', icon: User, description: 'À propos d\'Antony Addy' },
    { href: '/offres-de-formation', label: 'Offres de formation', icon: GraduationCap, description: 'Formations d\'anglais professionnel' },
    { href: '/temoignages', label: 'Témoignages', icon: MessageSquare, description: 'Avis des clients' },
    { href: '/contact', label: 'Contact', icon: MessageSquare, description: 'Contactez Antony Addy' },
  ];

  const resourcePages = [
    { href: '/exercices', label: 'Exercices d\'anglais', description: '300+ exercices interactifs' },
    { href: '/reading', label: 'Compréhension écrite', description: 'Textes et questions' },
    { href: '/exercices/listening', label: 'Écoute & Compréhension', description: 'Exercices audio' },
    { href: '/blog', label: 'Blog', description: 'Articles et conseils' },
    { href: '/dashboard', label: 'Tableau de bord', description: 'Suivi de progression' },
  ];

  const legalPages = [
    { href: '/mentions-legales', label: 'Mentions légales' },
    { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  ];

  return (
    <>
      <SEOHead
        title="Plan du site – Antony Addy"
        description="Retrouvez toutes les pages du site antonyaddy.com : formations, exercices, blog, et ressources pour apprendre l'anglais."
        keywords={["plan du site", "sitemap", "navigation", "antonyaddy"]}
        noIndex={true}
      />

      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MapIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Plan du site</h1>
            <p className="text-muted-foreground">
              Retrouvez toutes les pages disponibles sur antonyaddy.com
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Pages principales
              </h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <page.icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground block">{page.label}</span>
                        <span className="text-sm text-muted-foreground">{page.description}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource Pages */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Ressources gratuites
              </h2>
              <ul className="space-y-3">
                {resourcePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="flex flex-col p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <span className="font-medium text-foreground">{page.label}</span>
                      <span className="text-sm text-muted-foreground">{page.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="bg-card border border-border rounded-lg p-6 md:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Informations légales
              </h2>
              <ul className="flex flex-wrap gap-4">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="text-primary hover:underline"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contactez Antony Addy pour vos besoins en formation d'anglais professionnel.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
