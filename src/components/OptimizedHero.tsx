import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";

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

// The three stops sit at 1/6, 1/2 and 5/6 of the rail — the rider stays between
// the outer two.
const RIDE_MIN = 1 / 6;
const RIDE_MAX = 5 / 6;

export default function OptimizedHero() {
  const whatsappLink = useWhatsAppLink();
  const metroRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const riderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fill = fillRef.current;
    const rider = riderRef.current;
    const metro = metroRef.current;
    if (!metro) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Draw the gradient rail in on mount (no-JS / reduced-motion keep it full).
    if (fill && !reduce) {
      fill.style.transition = "none";
      fill.style.transform = "translateY(-50%) scaleX(0)";
      requestAnimationFrame(() => {
        fill.style.transition = "transform 1.5s cubic-bezier(.5,0,.2,1) .2s";
        fill.style.transform = "translateY(-50%) scaleX(1)";
      });
    }

    if (reduce || !rider) return;

    // At rest the rider keeps travelling Départ → Terminus and loops — the
    // journey from hesitation to assurance, always quietly in motion. The
    // moment the pointer is over the band it takes the wheel; when it leaves,
    // the ambient journey resumes seamlessly.
    const span = RIDE_MAX - RIDE_MIN;
    let raf = 0;
    let pos = RIDE_MIN;
    let target = RIDE_MIN;
    let lastMove = -1e9;
    let auto = 0; // journey phase 0..1
    let prev = performance.now();

    const onMove = (e: PointerEvent) => {
      const r = metro.getBoundingClientRect();
      if (e.clientY > r.top - 80 && e.clientY < r.bottom + 100) {
        const f = (e.clientX - r.left) / r.width;
        target = Math.max(RIDE_MIN, Math.min(RIDE_MAX, f));
        lastMove = performance.now();
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const frame = (now: number) => {
      const dt = Math.min(64, now - prev);
      prev = now;
      const active = now - lastMove < 2500;
      if (active) {
        pos += (target - pos) * 0.12;
        rider.style.opacity = "1";
        auto = (pos - RIDE_MIN) / span; // stay in sync for a seamless hand-back
      } else {
        auto += dt / 4200; // ~4.2s per journey, then loop
        if (auto >= 1) auto -= 1;
        pos = RIDE_MIN + auto * span;
        const edge = Math.min(auto, 1 - auto); // fade in/out at the ends
        rider.style.opacity = Math.max(0, Math.min(1, edge / 0.1)).toFixed(2);
      }
      rider.style.left = `${(pos * 100).toFixed(2)}%`;
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

          {/* The signature route: hésitation → aisance → assurance, on a level
              rail in the brand colours (navy → purple → red). The rail is
              decorative; the three-step row below carries the meaning. */}
          <div className="ll-metro" ref={metroRef}>
            <div className="ll-rail" aria-hidden="true">
              <span className="ll-rail-track" />
              <span className="ll-rail-fill" ref={fillRef} />
              <span className="ll-dot ll-dot--a" />
              <span className="ll-dot ll-dot--b" />
              <span className="ll-dot ll-dot--c" />
              <span className="ll-rider" ref={riderRef} />
            </div>
            <div className="ll-stops">
              <div className="ll-stop ll-lbl--a">
                <span className="sm">Départ</span><span className="nm">Hésitation</span>
              </div>
              <div className="ll-stop ll-lbl--b">
                <span className="sm">En chemin</span><span className="nm">Aisance</span>
              </div>
              <div className="ll-stop ll-lbl--c">
                <span className="sm">Terminus</span><span className="nm">Assurance</span>
              </div>
            </div>
          </div>
        </header>

        {/* One tight value line — carries the credentials without the bulk */}
        <p className="mt-1 mb-6 font-body max-w-xl mx-auto text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-snug drop-shadow">
          Formations sur mesure avec un <b className="font-semibold text-primary-foreground">formateur britannique natif</b>, certifié FPA depuis 2017.
        </p>

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
