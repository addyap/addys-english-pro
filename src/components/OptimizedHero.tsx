import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { YEARS_OF_EXPERIENCE } from "@/lib/utils";

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

// The journey path — one gentle wave across the band, in the 800×120 viewBox.
const PATH = "M40,70 C220,10 320,10 400,60 C480,110 580,110 760,50";

export default function OptimizedHero() {
  const whatsappLink = useWhatsAppLink();
  const metroRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const drawRef = useRef<SVGPathElement>(null);
  const riderRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const draw = drawRef.current;
    const rider = riderRef.current;
    const metro = metroRef.current;
    if (!track || !draw) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const len = track.getTotalLength();

    // Draw the line in on mount (no-JS / reduced-motion keep it fully drawn).
    if (!reduce) {
      draw.style.transition = "none";
      draw.style.strokeDasharray = `${len}`;
      draw.style.strokeDashoffset = `${len}`;
      // next frame: release the transition so it animates from empty to full
      requestAnimationFrame(() => {
        draw.style.transition = "stroke-dashoffset 1.6s cubic-bezier(.5,0,.2,1) .2s";
        draw.style.strokeDashoffset = "0";
      });
    }

    if (reduce || !rider || !metro) return;

    // The red "rider" eases along the line toward the cursor's x while the
    // pointer is over the band — the visitor drives their own progress.
    let raf = 0;
    let pos = 0;
    let target = 0;
    const onMove = (e: PointerEvent) => {
      const r = metro.getBoundingClientRect();
      if (e.clientY > r.top - 80 && e.clientY < r.bottom + 100) {
        target = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const frame = () => {
      pos += (target - pos) * 0.12;
      const p = track.getPointAtLength(pos * len);
      rider.setAttribute("cx", p.x.toFixed(1));
      rider.setAttribute("cy", p.y.toFixed(1));
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    /* No role="banner": the site header already exposes that landmark, and a
       second one leaves screen-reader users with two "banner" regions and no way
       to tell which is the site header. A plain labelled section is correct here. */
    <section
      className="ll-hero relative overflow-hidden text-primary-foreground"
      aria-label="Section principale de présentation"
    >
      {/* Background image with WebP optimization */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary">
        <picture>
          <source srcSet="/assets/hero-image.webp" type="image/webp" />
          <img
            src="/assets/hero-image.jpg"
            alt="Formation en anglais professionnel avec Antony Addy"
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            style={{ objectPosition: "62% 30%" }}
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            // @ts-expect-error - fetchpriority is valid HTML but not typed in React 18
            fetchpriority="high"
          />
        </picture>
      </div>

      {/* Deep-navy scrim so the photo reads as warm context, not foreground */}
      <div className="absolute inset-0 z-[1] ll-scrim" aria-hidden="true" />

      {/* The skip link lives in Home.tsx, before this hero. */}

      {/* Content (height driven by content, not min-h-screen) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <header>
          <p className="ll-eyebrow">Formateur d'anglais professionnel · Britannique natif · Antony&nbsp;Addy</p>

          <h1 className="ll-h1">
            De l'hésitation à l'<span className="ll-hot">assurance</span>, ligne&nbsp;directe.
          </h1>

          {/* The signature line: hésitation → aisance → assurance, drawn in the
              brand colours. SVG is decorative; the three stop names below carry
              the meaning for assistive tech. */}
          <div className="ll-metro" ref={metroRef}>
            <svg viewBox="0 0 800 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="ll-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8E8CE0" />
                  <stop offset="48%" stopColor="#8A6FC8" />
                  <stop offset="100%" style={{ stopColor: "hsl(var(--accent))" }} />
                </linearGradient>
              </defs>
              <path ref={trackRef} className="ll-track" d={PATH} />
              <path ref={drawRef} className="ll-draw" d={PATH} stroke="url(#ll-grad)" />
              <circle className="ll-stn ll-s1" cx="40" cy="70" r="8.5" />
              <circle className="ll-stn ll-s2" cx="400" cy="60" r="8.5" />
              <circle className="ll-stn ll-s3" cx="760" cy="50" r="9.5" />
              <circle ref={riderRef} className="ll-rider" cx="40" cy="70" r="6.5" />
            </svg>
            <span className="ll-lbl" style={{ left: "5%" }}>
              <span className="sm">Départ</span>Hésitation
            </span>
            <span className="ll-lbl" style={{ left: "50%" }}>
              <span className="sm">En chemin</span>Aisance
            </span>
            <span className="ll-lbl hot" style={{ left: "95%" }}>
              <span className="sm">Terminus</span>Assurance
            </span>
          </div>

          <p className="text-base sm:text-xl md:text-2xl mt-2 mb-3 sm:mb-4 font-body drop-shadow-xl max-w-3xl mx-auto text-primary-foreground/90 leading-snug">
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
              <span>{YEARS_OF_EXPERIENCE}+ ans d'enseignement en France</span>
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
            Premier échange gratuit · Sans engagement · Réponse sous 24 h ouvrées
          </span>
        </div>

        <nav
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap items-stretch sm:items-center"
          aria-label="Actions principales"
        >
          {/* PRIMARY CTA — WhatsApp with prefilled message, lowest-friction conversion */}
          <a
            href={whatsappLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!whatsappLink) { e.preventDefault(); return; }
              trackEvent('whatsapp_cta_click', { page: 'home', location: 'hero', prefilled: true });
            }}
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
          100% personnalisé · Adapté à votre niveau · Sans engagement
        </p>

        {/* Tertiary discovery links */}
        <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <Link
            to="/offres-de-formation"
            className="inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4 font-body focus:outline-none focus:ring-2 focus:ring-ring/30 rounded"
            aria-label="Voir les offres de formation en anglais professionnel"
          >
            Voir les formations →
          </Link>
          <Link
            to="/ressources-en-ligne"
            onClick={() => trackEvent('hero_resources_click', { page: 'home', target: '/ressources-en-ligne' })}
            className="inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4 font-body focus:outline-none focus:ring-2 focus:ring-ring/30 rounded"
            aria-label="Explorer les ressources gratuites d'anglais"
          >
            Explorer les ressources gratuites →
          </Link>
        </div>
      </div>

      {/* The homepage Person schema lives in the consolidated @graph in
          Home.tsx (node @id .../#antony-addy), so it is not emitted here. */}
    </section>
  );
}
