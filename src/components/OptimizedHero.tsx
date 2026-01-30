import React from "react";
import { Link } from "react-router-dom";

export default function OptimizedHero() {
  return (
    <section
      className="relative hero-section overflow-hidden text-primary-foreground"
      role="banner"
      aria-label="Section principale de présentation"
    >
      {/* Background image with WebP optimization */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary">
        <picture>
          <source srcSet="/assets/hero-image.webp" type="image/webp" />
          <img
            src="/assets/hero-image.png"
            alt="Formation en anglais professionnel avec Antony Addy"
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns opacity-80"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            // @ts-ignore - fetchpriority is valid HTML but not typed in React 18
            fetchpriority="high"
          />
        </picture>
      </div>

      {/* Overlay to optimize text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/35 to-primary/70 z-5" />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu principal
      </a>

      {/* Content (height now driven by content, not min-h-screen) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-20 text-center hero-title-wrap">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 hero-title drop-shadow-2xl text-primary-foreground">
            Formateur d'anglais pour adultes – Antony Addy
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-body drop-shadow-xl max-w-4xl mx-auto text-primary-foreground/90">
            Communiquez avec confiance en anglais dans votre vie professionnelle. Formations personnalisées par un formateur britannique certifié FPA depuis 2017.
          </p>

          <p className="text-lg mb-8 font-body drop-shadow-lg max-w-3xl mx-auto text-primary-foreground/80">
            Présentiel Alpes-Maritimes • Distanciel France entière • CPF & entreprises
          </p>
        </header>

        <nav
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
          aria-label="Actions principales"
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 hover:shadow-2xl transition-all duration-300 shadow-xl font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 active:scale-100"
            aria-label="Réserver un premier échange gratuit avec Antony Addy"
          >
            <span className="relative z-10">Réserver un premier échange</span>
            <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>

          <Link
            to="/offres-de-formation"
            className="group relative overflow-hidden border-2 border-primary-foreground/80 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 active:scale-100"
            aria-label="Voir les offres de formation en anglais professionnel"
          >
            <span className="relative z-10">Voir les formations</span>
            <span className="absolute inset-0 bg-primary-foreground/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>

          <Link
            to="/exercices"
            className="group relative overflow-hidden bg-accent/95 text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:shadow-2xl transition-all duration-300 shadow-xl font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/30 active:scale-100"
            aria-label="Accéder aux exercices gratuits d'anglais"
          >
            <span className="relative z-10">300+ exercices gratuits</span>
            <span className="absolute inset-0 bg-background/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
        </nav>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Antony Addy",
          jobTitle: "Formateur Professionnel d'Adultes en Anglais",
          description:
            "Spécialiste en anglais professionnel depuis 2017, formations pour particuliers, professionnels et centres de formation",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Alpes-Maritimes",
            addressCountry: "FR",
          },
          offers: {
            "@type": "Service",
            name: "Formation en anglais professionnel",
            description:
              "Formations claires, flexibles et efficaces en anglais professionnel",
          },
        })}
      </script>
    </section>
  );
}
