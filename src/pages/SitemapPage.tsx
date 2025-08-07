
import React from 'react';
import SEOHead from '../components/SEOHead';

export default function SitemapPage() {
  return (
    <>
      <SEOHead
        title="Plan du site – Antony Addy"
        description="Toutes les pages disponibles sur antonyaddy.com"
        canonicalUrl="https://antonyaddy.com/sitemap-page"
      />
      <main className="p-8">
        <h1 className="text-3xl font-heading font-bold mb-6 text-primary">Plan du site</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="/" className="text-primary hover:text-accent transition-colors">Accueil</a></li>
          <li><a href="/qui-je-suis" className="text-primary hover:text-accent transition-colors">Qui je suis</a></li>
          <li><a href="/offres-de-formation" className="text-primary hover:text-accent transition-colors">Offres de formation</a></li>
          <li><a href="/temoignages" className="text-primary hover:text-accent transition-colors">Témoignages</a></li>
          <li><a href="/contact" className="text-primary hover:text-accent transition-colors">Contact</a></li>
          <li><a href="/blog" className="text-primary hover:text-accent transition-colors">Blog</a></li>
          <li><a href="/blog/anglais-professionnel-2025" className="text-primary hover:text-accent transition-colors">Anglais Professionnel 2025</a></li>
          <li><a href="/blog/erreurs-francophones" className="text-primary hover:text-accent transition-colors">Erreurs Francophones</a></li>
          <li><a href="/blog/oral-vs-ecrit" className="text-primary hover:text-accent transition-colors">Oral vs Écrit</a></li>
          <li><a href="/anglaisadistance" className="text-primary hover:text-accent transition-colors">Anglais à Distance</a></li>
          <li><a href="/mentions-legales" className="text-primary hover:text-accent transition-colors">Mentions légales</a></li>
          <li><a href="/politique-confidentialite" className="text-primary hover:text-accent transition-colors">Politique de confidentialité</a></li>
        </ul>
      </main>
    </>
  );
}
