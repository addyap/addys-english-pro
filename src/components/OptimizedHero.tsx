import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { YEARS_OF_EXPERIENCE } from "@/lib/utils";

/**
 * "Le Déclic" — the signature homepage hero.
 *
 * One idea, made physical: English comes into focus under a light you
 * control. Real business-English phrases float, blurred and hesitant, in a
 * parallax depth field; the cursor carries a warm Riviera light that snaps
 * whatever it touches into sharp, confident focus. The headline performs the
 * same promise — resolving from blur to crisp, with "assurance" igniting in
 * gold. The first scroll lets the day break: the light dilates, the horizon
 * glows, every word resolves, and the dark band hands off into the light
 * section below.
 *
 * SSG / no-JS safe: headline, copy and CTAs render server-side and animate
 * with CSS alone. The cursor-light, parallax and scroll "dawn" are layered on
 * only after mount, and prefers-reduced-motion falls back to a static scene.
 */

// Phrases a French professional actually needs — the fog the light turns into
// fluency. Plane drives font size, parallax strength and haze.
const PHRASES: Array<[string, "near" | "mid" | "far"]> = [
  ["Nice to meet you", "near"], ["Let's close the deal", "near"],
  ["I'd like to propose…", "mid"], ["Could we schedule a call?", "mid"],
  ["fluent", "near"], ["confident", "mid"], ["Let's circle back", "far"],
  ["negotiate", "mid"], ["I'm on board", "far"], ["Shall we get started?", "far"],
  ["present with clarity", "mid"], ["no problem", "far"], ["I look forward to it", "far"],
  ["make it happen", "near"], ["absolutely", "far"], ["Great to connect", "mid"],
  ["Let me walk you through", "far"], ["assurance", "near"], ["speak up", "far"],
  ["with confidence", "mid"], ["Happy to help", "far"], ["exactly", "far"],
];

export default function OptimizedHero() {
  const whatsappLink = useWhatsAppLink();
  const stageRef = useRef<HTMLElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const field = fieldRef.current;
    const root = rootRef.current;
    if (!stage || !field || !root) return;
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Build the depth field (client-only: decorative, aria-hidden, random —
    // kept out of SSR so there's no hydration mismatch).
    type W = { el: HTMLSpanElement; depth: number; cx: number; cy: number };
    const words: W[] = [];
    for (const [text, plane] of PHRASES) {
      const el = document.createElement("span");
      el.className = `word dl-${plane}`;
      el.textContent = text;
      // Keep clear of the center where the headline sits.
      let x = 0, y = 0;
      do { x = 6 + Math.random() * 88; y = 8 + Math.random() * 84; }
      while (x > 30 && x < 70 && y > 30 && y < 70);
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
      field.appendChild(el);
      words.push({ el, depth: plane === "near" ? 1 : plane === "mid" ? 0.6 : 0.3, cx: 0, cy: 0 });
    }

    const measure = () => {
      for (const w of words) {
        const r = w.el.getBoundingClientRect();
        w.cx = r.left + r.width / 2;
        w.cy = r.top + r.height / 2;
      }
    };
    measure();

    // Reveal the light. Under reduced motion we stop here: the field is shown
    // resolved by CSS, no cursor tracking, no parallax, no rAF loop.
    stage.style.setProperty("--dl-spot-op", "1");

    let raf = 0;
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / (window.innerHeight * 0.85));
      stage.style.setProperty("--dl-dawn", p.toFixed(3));
      stage.style.setProperty("--dl-spot-scale", (1 + p * 2.4).toFixed(3));
      stage.style.setProperty("--dl-rise", (-p * 60).toFixed(1));
      if (!reduce && p > 0) {
        for (const w of words) {
          const base = parseFloat(w.el.style.getPropertyValue("--focus")) || 0;
          w.el.style.setProperty("--focus", Math.max(base, p).toFixed(3));
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    onScroll();

    if (reduce) {
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", measure);
      };
    }

    const R = Math.min(window.innerWidth, 620) * 0.7; // focus radius
    let mx = window.innerWidth / 2, my = window.innerHeight * 0.45;
    let px = mx, py = my;      // last pointer position
    let lastMove = -1e9;       // timestamp of last real pointer move
    const t0 = performance.now();

    const onMove = (e: PointerEvent) => { px = e.clientX; py = e.clientY; lastMove = performance.now(); };
    window.addEventListener("pointermove", onMove, { passive: true });

    const frame = (now: number) => {
      // Until the pointer takes over, the light drifts on its own along a slow
      // path — so the field is alive on load and on touch devices with no
      // cursor. The moment the pointer moves, it hands off to you.
      const held = now - lastMove < 2400;
      let tx: number, ty: number;
      if (held) {
        tx = px; ty = py;
      } else {
        const s = (now - t0) / 1000;
        tx = window.innerWidth * (0.5 + 0.30 * Math.sin(s * 0.16));
        ty = window.innerHeight * (0.46 + 0.24 * Math.cos(s * 0.11));
      }
      const ease = held ? 0.14 : 0.03; // weighty when held, gentle when drifting
      mx += (tx - mx) * ease;
      my += (ty - my) * ease;
      stage.style.setProperty("--dl-mx", `${mx}px`);
      stage.style.setProperty("--dl-my", `${my}px`);
      // Sharp core + hidden OS cursor only while you're actually holding it.
      stage.style.setProperty("--dl-core-op", held ? "1" : "0");
      root.classList.toggle("is-interactive", held);
      for (const w of words) {
        const dist = Math.hypot(w.cx - mx, w.cy - my);
        const focus = Math.max(0, 1 - dist / R);
        w.el.style.setProperty("--focus", (focus * focus).toFixed(3)); // ease-in
        w.el.style.setProperty("--px", (-(mx - window.innerWidth / 2) / window.innerWidth * 46 * w.depth).toFixed(1) + "px");
        w.el.style.setProperty("--py", (-(my - window.innerHeight / 2) / window.innerHeight * 46 * w.depth).toFixed(1) + "px");
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    /* No role="banner": the site header already exposes that landmark; a
       plain labelled section is correct here. The skip link lives in Home.tsx,
       before this hero. The homepage Person schema lives in the consolidated
       @graph in Home.tsx (node @id .../#antony-addy), not here. */
    <div className="declic" ref={rootRef}>
      <section
        ref={stageRef}
        className="stage overflow-hidden"
        aria-label="Section principale de présentation"
      >
        {/* Ambient atmosphere + progressive-enhancement light + depth field
            (all decorative). */}
        <div className="aura" aria-hidden="true" />
        <div className="spot" aria-hidden="true" />
        <div className="spot__core" aria-hidden="true" />
        <div className="field" ref={fieldRef} aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <div className="content">
          <p className="eyebrow">Formateur d'anglais · Côte d'Azur &amp; à distance</p>

          {/* One flowing line: sits on a single line from tablet up and wraps
              to two on narrow phones, keeping the hero compact. */}
          <h1 className="dl-h1">
            <span className="ln"><span>Parlez anglais avec <em className="ignite">assurance<i className="spark" aria-hidden="true" /></em>.</span></span>
          </h1>

          <p className="sub">
            De l'hésitation à la fluidité. Formations sur mesure avec un{" "}
            <b>formateur britannique natif</b>, certifié FPA depuis 2017 — pour que
            l'anglais de votre travail devienne un réflexe, pas un effort.
          </p>

          <p className="geo">
            Présentiel Var &amp; Alpes-Maritimes · Distanciel France entière &amp; international
          </p>

          <nav className="cta" aria-label="Actions principales">
            {/* PRIMARY — WhatsApp with prefilled message, lowest-friction conversion */}
            <a
              href={whatsappLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!whatsappLink) { e.preventDefault(); return; }
                trackEvent("whatsapp_cta_click", { page: "home", location: "hero", prefilled: true });
              }}
              className="btn btn--primary"
              aria-label="Prendre contact sur WhatsApp avec Antony Addy (message pré-rempli)"
            >
              <span aria-hidden="true">💬</span> Prendre contact
              <span className="arrow" aria-hidden="true">→</span>
            </a>

            {/* SECONDARY — free level assessment */}
            <Link
              to="/test-de-positionnement"
              onClick={() => trackEvent("hero_secondary_cta_click", { page: "home", target: "/test-de-positionnement" })}
              className="btn btn--ghost"
              aria-label="Évaluer mon niveau d'anglais gratuitement avec le test de positionnement"
            >
              Évaluer mon niveau
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </nav>

          <p className="micro">Premier échange gratuit · Sans engagement · Réponse sous 24 h ouvrées</p>

          <ul className="trust" aria-label="Qualifications">
            <li><span aria-hidden="true">🇬🇧</span> Britannique natif</li>
            <li className="dot" aria-hidden="true" />
            <li><span aria-hidden="true">🎓</span> Certifié FPA depuis 2017</li>
            <li className="dot" aria-hidden="true" />
            <li><span aria-hidden="true">📅</span> {YEARS_OF_EXPERIENCE}+ ans d'enseignement en France</li>
          </ul>

          <div className="disco">
            <Link
              to="/offres-de-formation"
              aria-label="Voir les offres de formation en anglais professionnel"
            >
              Voir les formations →
            </Link>
            <Link
              to="/ressources-en-ligne"
              onClick={() => trackEvent("hero_resources_click", { page: "home", target: "/ressources-en-ligne" })}
              aria-label="Explorer les ressources gratuites d'anglais"
            >
              Explorer les ressources gratuites →
            </Link>
          </div>
        </div>

        <div className="cue" aria-hidden="true">
          <span className="mouse" />
          Faites lever le jour
        </div>
      </section>
    </div>
  );
}
