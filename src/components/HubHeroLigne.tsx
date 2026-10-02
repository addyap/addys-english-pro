import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import anglaisLogo from '@/assets/brand/anglais-logo.png';
import iaLogo from '@/assets/brand/ia-logo.svg';
import creationsLogo from '@/assets/brand/creations-logo.png';

// "La Ligne" homepage hero — the départ sequence: a single line ignites, draws
// to the Antony Addy interchange, and branches into the three routes. The SEO
// H1 (all three activities) and the three real links are kept so nothing the
// site ranks for is lost; the animation is progressive enhancement, gated by
// `html.js` + the motion media query, so no-JS and reduced-motion both render
// the complete hero at rest.
const ROUTES = [
  { key: 'anglais', label: 'Anglais professionnel', tagline: 'Coaching et formations pour cadres, équipes et particuliers.', href: '#anglais', external: false, logo: anglaisLogo, cls: 'ang' },
  { key: 'ia', label: 'IA générative', tagline: 'Gagner en productivité : ChatGPT, prompts et outils IA.', href: 'https://ia.antonyaddy.com', external: true, logo: iaLogo, cls: 'ia' },
  { key: 'creations', label: 'Création de sites web', tagline: "Sites et outils sur mesure, conçus et développés avec l'IA.", href: 'https://creations.antonyaddy.com', external: true, logo: creationsLogo, cls: 'cre' },
] as const;

export default function HubHeroLigne() {
  const whatsappLink = useWhatsAppLink();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lines = Array.from(root.querySelectorAll<SVGPathElement>('.llx-line'));
    const reveals = Array.from(root.querySelectorAll<HTMLElement | SVGGElement>('[data-r]'));
    const scene = root.querySelector('.llx-scene');
    const show = (el: Element | null) => el && el.classList.remove('llx-pre');
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    if (reduce) {
      lines.forEach((l) => { l.style.strokeDasharray = 'none'; l.style.strokeDashoffset = '0'; l.classList.remove('llx-pre'); });
      reveals.forEach((r) => r.classList.remove('llx-pre'));
      return;
    }

    // hide for intro
    lines.forEach((l) => {
      const len = l.getTotalLength();
      l.style.transition = 'none';
      l.style.strokeDasharray = String(len);
      l.style.strokeDashoffset = String(len);
      l.classList.remove('llx-pre');
    });
    reveals.forEach((r) => { (r as HTMLElement).style.transition = 'none'; r.classList.add('llx-pre'); });
    void root.offsetWidth; // flush
    lines.forEach((l) => { l.style.transition = ''; });
    reveals.forEach((r) => { (r as HTMLElement).style.transition = ''; });

    const [trunk, bAng, bIa, bCre] = lines;
    const gEyebrow = root.querySelector('.llx-eyebrow');
    const gDot = root.querySelector('.llx-dot');
    const gHub = root.querySelector('.llx-hub');
    const gPlate = root.querySelector('.llx-plate');
    const dests = Array.from(root.querySelectorAll('.llx-dest'));
    const h1 = root.querySelector('.llx-h1');
    const promise = root.querySelector('.llx-promise');
    const routes = root.querySelector('.llx-routes');
    const cta = root.querySelector('.llx-cta');

    at(200, () => { show(gEyebrow); show(gDot); });
    at(600, () => { if (trunk) trunk.style.strokeDashoffset = '0'; scene?.classList.add('llx-riding'); });
    at(1950, () => { scene?.classList.remove('llx-riding'); show(gHub); });
    at(2200, () => show(gPlate));
    // the three routes draw one after another — the eye follows the line
    // from Anglais → IA → Créations rather than all branches firing at once.
    at(2800, () => { if (bAng) bAng.style.strokeDashoffset = '0'; show(dests[0]); });
    at(3200, () => { if (bIa) bIa.style.strokeDashoffset = '0'; show(dests[1]); });
    at(3600, () => { if (bCre) bCre.style.strokeDashoffset = '0'; show(dests[2]); });
    at(4450, () => { show(h1); show(promise); });
    at(4800, () => { show(routes); show(cta); });

    // 3D depth — the diagram is a plane that parallaxes to the pointer while the
    // ground shifts behind it: camera-like dimensionality, no WebGL dependency.
    // (Unreachable under reduced motion: that path returned above.)
    let raf = 0;
    const plane = root.querySelector('.llx-plane') as HTMLElement | null;
    const ground = root.querySelector('.llx-bg') as HTMLElement | null;
    let tgX = 0, tgY = 0, curX = 0, curY = 0;
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tgX = (e.clientX - r.left) / r.width - 0.5;
      tgY = (e.clientY - r.top) / r.height - 0.5;
    };
    const reset = () => { tgX = 0; tgY = 0; };
    const loop = () => {
      curX += (tgX - curX) * 0.06;
      curY += (tgY - curY) * 0.06;
      if (plane) plane.style.transform = `rotateX(${(-curY * 7).toFixed(2)}deg) rotateY(${(curX * 10).toFixed(2)}deg)`;
      if (ground) ground.style.transform = `translate(${(-curX * 16).toFixed(1)}px, ${(-curY * 12).toFixed(1)}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', reset);
    raf = requestAnimationFrame(loop);

    return () => {
      timers.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', reset);
    };
  }, []);

  return (
    <section ref={rootRef} className="llx" aria-label="Antony Addy — trois activités">
      <style>{LLX_CSS}</style>
      <div className="llx-bg" aria-hidden="true" />

      <div className="llx-inner">
        <p className="llx-eyebrow llx-pre" data-r>
          <span className="llx-pip" aria-hidden="true" />
          <span>antonyaddy.com · Côte d'Azur &amp; à distance</span>
        </p>

        <div className="llx-scene" aria-hidden="true">
         <div className="llx-plane">
          <svg viewBox="0 0 1000 476" role="presentation">
            <defs>
              <linearGradient id="llxTg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(255,255,255,.35)" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <filter id="llxGl" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="3.2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path className="llx-line llx-trunk llx-pre" d="M500,44 V284" />
            <g className="llx-dot llx-pre" data-r>
              <circle cx="500" cy="44" r="8" fill="#0b1030" stroke="#F6A463" strokeWidth="3" filter="url(#llxGl)" />
              <circle cx="500" cy="44" r="2.6" fill="#F6A463" />
            </g>
            <circle className="llx-rider" r="5.5" fill="#fff" filter="url(#llxGl)" style={{ offsetPath: "path('M500,44 V284')" } as React.CSSProperties} />
            <path className="llx-line llx-bang llx-pre" d="M500,284 C430,284 350,410 250,432" />
            <path className="llx-line llx-bia llx-pre" d="M500,284 C500,344 500,376 500,452" />
            <path className="llx-line llx-bcre llx-pre" d="M500,284 C570,284 650,410 750,432" />
            <g className="llx-hub llx-pre" data-r>
              <circle cx="500" cy="284" r="12.5" fill="#0b1030" stroke="#F2EDE1" strokeWidth="3.4" />
              <circle cx="500" cy="284" r="4" fill="#F2EDE1" />
            </g>
            <g className="llx-plate llx-pre" data-r>
              <rect x="384" y="198" width="232" height="48" rx="10" fill="rgba(9,13,35,.9)" stroke="rgba(233,236,255,.14)" />
              <text className="llx-plate-t" x="500" y="224" textAnchor="middle">Antony Addy</text>
              <text className="llx-plate-s" x="500" y="239" textAnchor="middle">Interchange</text>
            </g>
            {/* Terminus nodes only — the three routes are named by the cards
                below, so the diagram stays clean rather than repeating them. */}
            <g className="llx-dest llx-pre" data-r>
              <circle cx="250" cy="432" r="8" fill="#0b1030" stroke="#E8473B" strokeWidth="3.1" filter="url(#llxGl)" />
            </g>
            <g className="llx-dest llx-pre" data-r>
              <circle cx="500" cy="452" r="8" fill="#0b1030" stroke="#7A62FF" strokeWidth="3.1" filter="url(#llxGl)" />
            </g>
            <g className="llx-dest llx-pre" data-r>
              <circle cx="750" cy="432" r="8" fill="#0b1030" stroke="#F0974A" strokeWidth="3.1" filter="url(#llxGl)" />
            </g>
          </svg>
         </div>
        </div>

        <h1 className="llx-h1 llx-pre" data-r>
          Formateur d'<span className="llx-k llx-ang">anglais</span>, formateur en <span className="llx-k llx-ia">IA générative</span> &amp; créateur de <span className="llx-k llx-cre">sites web</span>
        </h1>
        <p className="llx-promise llx-pre" data-r>De l'hésitation à <span className="llx-hot">l'assurance</span> — sur la Côte d'Azur et à distance.</p>

        <div className="llx-routes llx-pre" data-r role="list">
          {ROUTES.map((r) => {
            const inner = (
              <>
                <span className="llx-rtile" aria-hidden="true"><img src={r.logo} alt="" loading="eager" decoding="async" /></span>
                <span className="llx-rtext">
                  <span className="llx-rlabel">{r.label}{r.external && <ExternalLink className="llx-ext" aria-hidden="true" />}</span>
                  <span className="llx-rtag">{r.tagline}</span>
                </span>
                <ArrowRight className="llx-rarrow" aria-hidden="true" />
              </>
            );
            const cls = `llx-route llx-r-${r.cls}`;
            return r.external ? (
              <a key={r.key} className={cls} href={r.href} target="_blank" rel="noopener" role="listitem"
                 onClick={() => trackEvent('hub_hero_card_click', { formation: r.key, target: r.href })}>{inner}</a>
            ) : (
              <a key={r.key} className={cls} href={r.href} role="listitem"
                 onClick={() => trackEvent('hub_hero_card_click', { formation: r.key, target: r.href })}>{inner}</a>
            );
          })}
        </div>

        <div className="llx-cta llx-pre" data-r>
          <a
            href={whatsappLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (!whatsappLink) { e.preventDefault(); return; } trackEvent('whatsapp_cta_click', { page: 'home', location: 'hub-hero', prefilled: true }); }}
            className="llx-wa"
            aria-label="Prendre contact sur WhatsApp avec Antony Addy (message pré-rempli)"
          >
            <MessageCircle className="llx-waicon" aria-hidden="true" />
            <span>Prendre contact sur WhatsApp</span>
          </a>
          <Link to="/contact" className="llx-contact">Formulaire de contact</Link>
          <p className="llx-reassure">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
        </div>
      </div>
    </section>
  );
}

const LLX_CSS = `
.llx{position:relative;overflow:hidden;isolation:isolate;color:#F2EDE1;
  --ang:#E8473B;--ia:#7A62FF;--cre:#F0974A;--horizon:#F6A463;
  font-family:inherit;border-bottom:1px solid rgba(233,236,255,.07)}
.llx-bg{position:absolute;inset:-26px;z-index:-1;pointer-events:none;will-change:transform;transition:transform .5s cubic-bezier(.2,.7,.2,1);
  background:
    radial-gradient(46% 55% at 86% 0%,rgba(246,164,99,.20),transparent 55%),
    radial-gradient(44% 55% at 98% 14%,rgba(232,101,122,.15),transparent 60%),
    radial-gradient(120% 90% at 50% 125%,rgba(11,16,48,.92),transparent 55%),
    linear-gradient(165deg,#0b1030 0%,#070b22 100%)}
.llx-inner{position:relative;max-width:1000px;margin:0 auto;padding:clamp(26px,4vw,48px) 20px clamp(34px,5vw,56px);text-align:center;display:flex;flex-direction:column;align-items:center;gap:clamp(14px,2.2vw,22px)}
.llx-eyebrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center;margin:0;
  font-family:'Poppins',system-ui,sans-serif;text-transform:uppercase;letter-spacing:.22em;font-size:.7rem;font-weight:700;color:#8b93b6}
.llx-pip{width:8px;height:8px;border-radius:50%;background:var(--horizon);box-shadow:0 0 0 4px rgba(246,164,99,.16),0 0 14px rgba(246,164,99,.8)}
.llx-scene{width:100%;max-width:960px;perspective:1100px}
.llx-plane{transform-style:preserve-3d;transition:transform .5s cubic-bezier(.2,.7,.2,1);will-change:transform}
@media (prefers-reduced-motion:reduce){ .llx-plane,.llx-bg{transition:none} }
.llx-scene svg{width:100%;height:auto;max-height:46vh;display:block;overflow:visible}
.llx-line{fill:none;stroke-linecap:round;transition:stroke-dashoffset 1.5s cubic-bezier(.6,0,.2,1)}
.llx-trunk{stroke:url(#llxTg);stroke-width:3.4}
.llx-bang{stroke:var(--ang);stroke-width:3.4}.llx-bia{stroke:var(--ia);stroke-width:3.4}.llx-bcre{stroke:var(--cre);stroke-width:3.4}
.llx-plate-t{fill:#F2EDE1;font-weight:700;letter-spacing:.14em;font-size:24px;text-transform:uppercase;font-family:'Poppins',sans-serif}
.llx-plate-s{fill:#8b93b6;font-weight:600;letter-spacing:.26em;font-size:10px;text-transform:uppercase;font-family:'Poppins',sans-serif}
.llx-dt{font-weight:700;letter-spacing:.1em;font-size:20px;text-transform:uppercase;font-family:'Poppins',sans-serif}
.llx-rider{opacity:0}
.llx-riding .llx-rider{opacity:1;animation:llxRide 1.5s cubic-bezier(.65,0,.3,1) forwards}
@keyframes llxRide{from{offset-distance:0%}to{offset-distance:100%}}
.llx-h1{font-family:'Bricolage Grotesque','Poppins',system-ui,sans-serif;font-weight:800;letter-spacing:-.02em;line-height:1.02;
  font-size:clamp(1.9rem,5vw,3.4rem);max-width:18ch;margin:0;text-wrap:balance}
.llx-k{color:var(--horizon)}
.llx-promise{font-style:italic;color:#CBCFE4;font-size:clamp(1rem,2.4vw,1.25rem);margin:0;max-width:44ch}
.llx-hot{color:var(--horizon);font-style:normal;font-weight:600}
.llx-routes{display:grid;gap:12px;grid-template-columns:repeat(3,1fr);width:100%;max-width:900px;margin-top:4px}
.llx-route{display:flex;align-items:center;gap:14px;text-align:left;background:#fff;border-radius:16px;padding:16px;
  border:1px solid transparent;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;box-shadow:0 10px 30px rgba(0,0,0,.28)}
.llx-route:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,0,0,.4)}
.llx-r-ang:hover{border-color:var(--ang)}.llx-r-ia:hover{border-color:var(--ia)}.llx-r-cre:hover{border-color:var(--cre)}
.llx-rtile{flex:none;width:52px;height:52px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:#fff}
.llx-rtile img{max-width:46px;max-height:46px;object-fit:contain}
.llx-rtext{display:flex;flex-direction:column;gap:3px;min-width:0}
.llx-rlabel{font-family:'Poppins',sans-serif;font-weight:700;color:#1A1A4D;font-size:.98rem;display:flex;align-items:center;gap:6px;line-height:1.1}
.llx-ext{width:13px;height:13px;color:#8b93b6}
.llx-rtag{font-size:.8rem;color:#5b6180;line-height:1.35}
.llx-rarrow{margin-left:auto;flex:none;width:18px;height:18px;color:#1A1A4D;transition:transform .2s ease}
.llx-route:hover .llx-rarrow{transform:translateX(3px)}
.llx-cta{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:6px}
.llx-wa{display:inline-flex;align-items:center;gap:10px;background:var(--ang);color:#fff;font-family:'Poppins',sans-serif;
  font-weight:700;font-size:clamp(.95rem,2vw,1.05rem);padding:14px 28px;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,.35);
  transition:transform .25s ease,box-shadow .25s ease}
.llx-wa:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(232,71,59,.3)}
.llx-waicon{width:20px;height:20px}
.llx-contact{font-family:'Poppins',sans-serif;font-weight:600;font-size:.9rem;color:#CBCFE4;text-decoration:underline;text-underline-offset:3px}
.llx-contact:hover{color:#fff}
.llx-reassure{font-family:'Poppins',sans-serif;font-size:.78rem;color:#8b93b6;margin:0}
.llx-reveal,[data-r]{transition:opacity .75s ease,transform .75s cubic-bezier(.2,.7,.2,1)}
@media (prefers-reduced-motion:no-preference){
  html.js .llx-pre{opacity:0}
  html.js g.llx-plate.llx-pre{transform:translateY(12px)}
  html.js g.llx-dest.llx-pre{transform:translateY(8px)}
  html.js .llx-routes.llx-pre,html.js .llx-cta.llx-pre{transform:translateY(10px)}
}
@media (max-width:760px){
  .llx-inner{gap:14px;padding-top:18px;padding-bottom:28px}
  .llx-scene svg{max-height:34vh}
  .llx-routes{grid-template-columns:1fr;gap:10px}
  .llx-route{padding:12px;gap:12px;border-radius:14px}
  .llx-rtile{width:44px;height:44px}
  .llx-rtile img{max-width:38px;max-height:38px}
  .llx-rtag{font-size:.78rem}
}
`;
