import React from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_PREFILLED_URL } from "@/lib/whatsapp";

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 sm:py-14 md:py-20 text-center hero-title-wrap">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 hero-title drop-shadow-2xl text-primary-foreground">
            Formateur d'anglais pour adultes – <span className="whitespace-nowrap">Antony Addy</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 font-body drop-shadow-xl max-w-4xl mx-auto text-primary-foreground/90 leading-snug">
            Communiquez avec confiance en anglais dans votre vie professionnelle. Formations personnalisées par un formateur britannique certifié FPA depuis 2017.
          </p>

          <p className="text-sm sm:text-lg mb-4 sm:mb-6 font-body drop-shadow-lg max-w-3xl mx-auto text-primary-foreground/80">
            Présentiel Var & Alpes-Maritimes • Distanciel France entière et international • Particuliers, cadres & entreprises
          </p>

          {/* Credential strip — authority signals */}
          <ul
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base font-body text-primary-foreground/85"
            aria-label="Qualifications"
          >
            <li className="inline-flex items-center gap-2">
              <span aria-hidden="true">🇬🇧</span>
              <span>Britannique natif</span>
            </li>
            <li aria-hidden="true" className="hidden md:inline text-primary-foreground/40">•</li>
            <li className="inline-flex items-center gap-2">
              <span aria-hidden="true">🎓</span>
              <span>Certifié FPA depuis 2017</span>
            </li>
            <li aria-hidden="true" className="hidden md:inline text-primary-foreground/40">•</li>
            <li className="inline-flex items-center gap-2">
              <span aria-hidden="true">📅</span>
              <span>20+ ans d'enseignement en France</span>
            </li>
          </ul>
        </header>

        {/* Trust metric — strongest credibility signal, above the fold */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background/15 border border-primary-foreground/30 backdrop-blur-sm text-xs sm:text-sm md:text-base font-medium text-primary-foreground shadow-lg text-center"
            aria-label="Indicateur de confiance"
          >
            <span aria-hidden="true">⭐</span>
            Premier échange gratuit · Sans engagement · Réponse sous 24h
          </span>
        </div>

        <nav
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap items-stretch sm:items-center"
          aria-label="Actions principales"
        >
          {/* PRIMARY CTA — WhatsApp with prefilled message, lowest-friction conversion */}
          <a
            href={WHATSAPP_PREFILLED_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_cta_click', { page: 'home', location: 'hero', prefilled: true })}
            className="group relative overflow-hidden bg-accent text-accent-foreground px-6 py-3.5 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-accent/90 hover:shadow-2xl transition-all duration-300 shadow-2xl font-body transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 active:scale-100 ring-2 ring-accent/40 inline-flex items-center justify-center gap-2"
            aria-label="Prendre contact sur WhatsApp avec Antony Addy (message pré-rempli)"
          >
            <span aria-hidden="true">💬</span>
            <span className="relative z-10">Prendre contact sur WhatsApp</span>
          </a>

          {/* SECONDARY CTA — Évaluer mon niveau gratuitement */}
          <Link
            to="/test-de-positionnement"
            onClick={() => trackEvent('hero_secondary_cta_click', { page: 'home', target: '/test-de-positionnement' })}
            className="group relative overflow-hidden border-2 border-primary-foreground/80 text-primary-foreground bg-transparent px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 active:scale-100"
            aria-label="Évaluer mon niveau d'anglais gratuitement avec le test de positionnement"
          >
            <span className="relative z-10">Évaluer mon niveau gratuitement</span>
          </Link>
        </nav>

        {/* Microcopy reassurance under CTAs */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-primary-foreground/85 font-body drop-shadow">
          100% personnalisé · Adapté à votre niveau · Réponse rapide garantie
        </p>

        {/* Tertiary discovery link */}
        <div className="mt-3">
          <Link
            to="/offres-de-formation"
            className="inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4 font-body focus:outline-none focus:ring-2 focus:ring-ring/30 rounded"
            aria-label="Voir les offres de formation en anglais professionnel"
          >
            Voir les formations →
          </Link>
        </div>
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
            streetAddress: "135 rue Henri Vadon",
            addressLocality: "Fréjus",
            postalCode: "83600",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Var" },
            { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
            { "@type": "Country", name: "France" },
          ],
          knowsLanguage: ["fr", "en"],
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
