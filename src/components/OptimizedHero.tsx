
import React from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";

export default function OptimizedHero() {
  return (
    <section 
      className="relative hero-section overflow-hidden text-white min-h-screen"
      role="banner"
      aria-label="Section principale de présentation"
    >
      {/* Optimized background image with Ken Burns animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/assets/hero-image.png"
          alt="Formation en anglais professionnel avec Antony Addy"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Enhanced overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-5" />

      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu principal
      </a>

      {/* Optimized content with better semantic structure */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-heading leading-tight mb-6 hero-title drop-shadow-2xl">
            <TypingText
              texts={[
                "Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017",
              ]}
              speed={50}
              pause={3000}
              className="text-white drop-shadow-2xl"
              prioritizeLCP
            />
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white font-body drop-shadow-xl max-w-4xl mx-auto">
            Des formations sur-mesure et plus de 300 exercices gratuits pour progresser à votre rythme.
          </p>
          
          <p className="text-lg mb-8 text-white/90 italic font-body drop-shadow-lg max-w-3xl mx-auto">
            Formateur britannique – Présentiel dans les Alpes-Maritimes, à
            distance partout en France
          </p>
        </header>

        <nav className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap" aria-label="Actions principales">
          <Link
            to="/offres-de-formation"
            className="group relative overflow-hidden bg-white/95 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white hover:shadow-2xl transition-all duration-300 shadow-xl font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-100"
            aria-label="Découvrir les offres de formation en anglais professionnel"
          >
            <span className="relative z-10">
              Découvrir mes offres
            </span>
            <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
          
          <Link
            to="/exercices"
            className="group relative overflow-hidden bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:shadow-2xl transition-all duration-300 shadow-xl font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50 active:scale-100"
            aria-label="Accéder aux exercices gratuits d'anglais"
          >
            <span className="relative z-10">
              Exercices gratuits
            </span>
            <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
          
          <Link
            to="/contact"
            className="group relative overflow-hidden border-2 border-white/90 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-100"
            aria-label="Contacter Antony Addy pour une formation personnalisée"
          >
            <span className="relative z-10">
              Me contacter
            </span>
            <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
        </nav>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Antony Addy",
          "jobTitle": "Formateur Professionnel d'Adultes en Anglais",
          "description": "Spécialiste en anglais professionnel depuis 2017, formations pour particuliers, professionnels et centres de formation",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Alpes-Maritimes",
            "addressCountry": "FR"
          },
          "offers": {
            "@type": "Service",
            "name": "Formation en anglais professionnel",
            "description": "Formations claires, flexibles et efficaces en anglais professionnel"
          }
        })}
      </script>
    </section>
  );
}
