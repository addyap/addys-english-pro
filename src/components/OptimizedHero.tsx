import React from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

/**
 * "La Ligne" — the signature homepage hero.
 *
 * The real classroom photo sits behind a deep-navy scrim; a metro-style line
 * gradients from navy (hésitation) through purple (aisance) to red (assurance)
 * — the brand's core promise, drawn as a single direct line. The line, its
 * three stops, the headline, copy and CTAs all render server-side and read
 * with no JS (SSG-safe). The draw-in animation and the cursor-led red "rider"
 * are progressive enhancement layered on after mount; prefers-reduced-motion
 * falls back to a static, fully-drawn scene.
 *
 * Colours are the brand tokens throughout: --primary (navy), --secondary
 * (purple), --accent (red).
 */

export default function OptimizedHero() {

  return (
    /* No role="banner": the site header already exposes that landmark, and a
       second one leaves screen-reader users with two "banner" regions and no way
       to tell which is the site header. A plain labelled section is correct here. */
    <section
      className="ll-hero relative overflow-hidden text-primary-foreground"
      aria-label="Section principale de présentation"
    >
      {/* Brand-colour ground: deep navy with soft purple depth — lets the line,
          type and motion carry the hero (no stock photo). */}
      <div className="absolute inset-0 z-0 ll-bg" aria-hidden="true" />

      {/* Soft fade so the navy hero melts into the light section below */}
      <div className="ll-fade" aria-hidden="true" />

      {/* The skip link lives in Home.tsx, before this hero. */}

      {/* Content (height driven by content, not min-h-screen) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-4 pb-8 sm:pt-5 sm:pb-10 md:pt-6 md:pb-14 text-center">
        <header>
          <p className="ll-eyebrow">Formateur d'anglais · Britannique natif</p>

          <h2 className="ll-h1">
            De l'hésitation à l'<span className="ll-hot">assurance</span>, ligne&nbsp;directe.
          </h2>
          {/* The hésitation→assurance "line" motif now lives once, in the hub
              hero above; this English chapter leads with its words + CTAs. */}
        </header>

        {/* One tight value line — carries the credentials without the bulk */}
        <p className="mt-1 mb-6 font-body max-w-xl mx-auto text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-snug drop-shadow">
          Formations sur mesure avec un <b className="font-semibold text-primary-foreground">formateur britannique natif</b>, certifié FPA depuis 2017.
        </p>

        <nav
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap items-stretch sm:items-center"
          aria-label="Actions principales"
        >
          {/* PRIMARY CTA — the free level test (this hero's distinct job; WhatsApp
              is carried by the hub hero and the closing station, not repeated here) */}
          <Link
            to="/test-de-positionnement"
            onClick={() => trackEvent('hero_secondary_cta_click', { page: 'home', target: '/test-de-positionnement' })}
            className="group relative overflow-hidden bg-accent text-accent-foreground px-6 py-3.5 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-accent/90 hover:shadow-2xl transition-all duration-300 shadow-2xl font-body transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 active:scale-100 ring-2 ring-accent/40 inline-flex items-center justify-center gap-2"
            aria-label="Évaluer mon niveau d'anglais gratuitement avec le test de positionnement"
          >
            <span className="relative z-10">Évaluer mon niveau — test gratuit</span>
          </Link>

          {/* SECONDARY CTA — the English offer */}
          <Link
            to="/offres-de-formation"
            onClick={() => trackEvent('hero_secondary_cta_click', { page: 'home', target: '/offres-de-formation' })}
            className="group relative overflow-hidden border-2 border-primary-foreground/80 text-primary-foreground bg-transparent px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 active:scale-100"
            aria-label="Voir les offres de formation en anglais"
          >
            <span className="relative z-10">Voir les formations</span>
          </Link>
        </nav>

        {/* One compact reassurance + local-SEO line */}
        <p className="mt-3 text-xs sm:text-sm text-primary-foreground/75 font-body drop-shadow">
          Présentiel Var &amp; Alpes-Maritimes · Distanciel partout · Premier échange gratuit, réponse sous 24 h
        </p>
      </div>

      {/* The homepage Person schema lives in the consolidated @graph in
          Home.tsx (node @id .../#antony-addy), so it is not emitted here. */}
    </section>
  );
}
