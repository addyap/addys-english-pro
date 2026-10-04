import { ArrowDownRight, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

const routes = [
  { key: 'anglais', number: '01', label: 'Anglais professionnel', detail: 'Prenez la parole avec confiance.', href: '#anglais', external: false },
  { key: 'ia', number: '02', label: 'IA générative', detail: 'Faites travailler les outils pour vous.', href: 'https://ia.antonyaddy.com', external: true },
  { key: 'creations', number: '03', label: 'Création de sites web', detail: 'Donnez de l’élan à votre présence en ligne.', href: 'https://creations.antonyaddy.com', external: true },
] as const;

export default function HubHeroLigne() {
  return (
    <section className="llx" aria-labelledby="llx-title">
      <style>{styles}</style>
      <div className="llx-atmosphere" aria-hidden="true" />
      <div className="llx-inner">
        <div className="llx-copy">
          <p className="llx-eyebrow"><span className="llx-signal" aria-hidden="true" />Antony Addy · Côte d’Azur &amp; à distance</p>
          <h1 id="llx-title" className="llx-title">
            L’anglais.<br />L’IA.<br />Le web.<br /><span>À vous d’avancer.</span>
          </h1>
          <p className="llx-description">
            Formations d’anglais professionnel, ateliers d’IA générative et création de sites web.
            Trois façons d’avancer, avec un seul interlocuteur.
          </p>
          <div className="llx-actions">
            <Link to="/contact" className="llx-primary">Parler de mon projet <ArrowRight size={19} aria-hidden="true" /></Link>
            <a href="#hero-routes" className="llx-secondary">Voir les parcours <ArrowDownRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="llx-reassurance">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
        </div>

        <div id="hero-routes" className="llx-board">
          <div className="llx-board-top"><span>Le plan de ligne</span><span>3 parcours</span></div>
          <div className="llx-interchange">
            <span className="llx-interchange-line" aria-hidden="true" />
            <span className="llx-interchange-node" aria-hidden="true" />
            <strong>Antony Addy</strong>
            <small>Un point de départ. Trois directions.</small>
            <img className="llx-portrait" src="/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png" alt="" width="64" height="64" decoding="async" />
          </div>
          <ol className="llx-routes">
            {routes.map((route) => (
              <li key={route.key} className={`llx-route llx-route--${route.key}`}>
                <a
                  href={route.href}
                  target={route.external ? '_blank' : undefined}
                  rel={route.external ? 'noopener noreferrer' : undefined}
                  onClick={() => trackEvent('hub_hero_card_click', { formation: route.key, target: route.href })}
                >
                  <span className="llx-route-stop" aria-hidden="true" />
                  <span className="llx-route-number" aria-hidden="true">{route.number}</span>
                  <span className="llx-route-text"><strong>{route.label}</strong><span>{route.detail}</span></span>
                  {route.external ? <ExternalLink size={19} className="llx-route-arrow" aria-hidden="true" /> : <ArrowRight size={20} className="llx-route-arrow" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ol>
          <div className="llx-board-bottom"><span className="llx-board-pulse" aria-hidden="true" />Choisissez votre direction <span aria-hidden="true">→</span></div>
        </div>
      </div>
      <div className="llx-footer" aria-hidden="true"><span>Trois activités</span><span className="llx-footer-line" /><span>Un même élan</span></div>
    </section>
  );
}

const styles = `
.llx{--red:#e8473b;--violet:#8f78ff;--amber:#f6a463;--cream:#f4f0e7;position:relative;isolation:isolate;overflow:hidden;color:var(--cream);background:#090e29;border-bottom:1px solid rgba(244,240,231,.12)}
.llx-atmosphere{position:absolute;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(48% 58% at 80% 16%,rgba(143,120,255,.14),transparent 75%),radial-gradient(42% 58% at 10% 95%,rgba(232,71,59,.12),transparent 70%),linear-gradient(155deg,#0d1232 0%,#090e29 62%,#070b20 100%)}
.llx-atmosphere:after{content:'';position:absolute;inset:0;opacity:.24;background-image:linear-gradient(rgba(244,240,231,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(244,240,231,.09) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(90deg,transparent 5%,#000 60%)}
.llx-inner{width:min(100% - 48px,1216px);min-height:min(760px,calc(100svh - 72px));margin:auto;padding:clamp(64px,8vw,112px) 0 74px;display:grid;grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);align-items:center;gap:clamp(44px,7vw,116px)}
.llx-copy{position:relative;z-index:1;max-width:620px;animation:llxEnter .8s cubic-bezier(.16,1,.3,1) both}
.llx-eyebrow{display:inline-flex;align-items:center;gap:12px;margin:0 0 32px;color:#bac0d8;font:700 .7rem/1.4 'Inter',sans-serif;letter-spacing:.16em;text-transform:uppercase}
.llx-signal{flex:none;width:9px;height:9px;border-radius:50%;background:var(--amber);box-shadow:0 0 0 5px rgba(246,164,99,.13),0 0 22px rgba(246,164,99,.7)}
.llx-title{margin:0;max-width:12ch;font-family:'Bricolage Grotesque','Poppins',sans-serif;font-size:clamp(3.4rem,5.3vw,5.9rem);font-weight:800;letter-spacing:-.058em;line-height:.96;text-wrap:balance}
.llx-title span{display:inline-block;margin-top:.12em;color:var(--amber)}
.llx-description{max-width:52ch;margin:34px 0 0;color:#c7cce0;font:400 clamp(1rem,1.4vw,1.15rem)/1.65 'Inter',sans-serif}
.llx-actions{display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px;margin-top:36px}
.llx-primary,.llx-secondary{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:52px;font:700 .95rem/1 'Inter',sans-serif;transition:transform .3s cubic-bezier(.16,1,.3,1),background-color .3s,color .3s,box-shadow .3s}
.llx-primary{padding:0 24px;border-radius:10px;color:#fff;background:var(--red);box-shadow:0 14px 35px rgba(232,71,59,.2)}
.llx-primary:hover{transform:translateY(-3px);background:#ce392d;box-shadow:0 18px 40px rgba(232,71,59,.32)}
.llx-secondary{color:var(--cream);text-decoration:underline;text-decoration-color:rgba(244,240,231,.45);text-underline-offset:6px}
.llx-secondary:hover{color:var(--amber);transform:translateY(-2px)}
.llx-primary:focus-visible,.llx-secondary:focus-visible,.llx-route a:focus-visible{outline:3px solid var(--amber);outline-offset:4px}
.llx-reassurance{margin:16px 0 0;color:#aeb5d0;font:500 .79rem/1.5 'Inter',sans-serif}
.llx-board{position:relative;border:1px solid rgba(244,240,231,.17);border-radius:24px;background:rgba(19,25,58,.78);box-shadow:0 28px 80px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.07);backdrop-filter:blur(12px);overflow:hidden;animation:llxEnter .9s .14s cubic-bezier(.16,1,.3,1) both}
.llx-board:before{content:'';position:absolute;width:260px;height:260px;top:-170px;right:-110px;border:1px solid rgba(244,240,231,.11);border-radius:50%;box-shadow:0 0 0 48px rgba(244,240,231,.018),0 0 0 96px rgba(244,240,231,.012);pointer-events:none}
.llx-board-top,.llx-board-bottom{display:flex;align-items:center;justify-content:space-between;padding:22px 28px;border-bottom:1px solid rgba(244,240,231,.12);color:#aeb5d0;font:700 .66rem/1.3 'Inter',sans-serif;letter-spacing:.17em;text-transform:uppercase}
.llx-board-top span:last-child{color:var(--amber)}
.llx-interchange{position:relative;display:grid;grid-template-columns:40px 1fr;column-gap:14px;padding:34px 30px 28px}
.llx-interchange-line{position:absolute;top:57px;bottom:-303px;left:47px;width:2px;background:linear-gradient(var(--cream) 0 16%,var(--red) 16% 44%,var(--violet) 44% 72%,var(--amber) 72%);opacity:.7}
.llx-interchange-node{grid-row:span 2;align-self:start;width:18px;height:18px;margin:3px 0 0 8px;border:4px solid var(--cream);border-radius:50%;background:#121935;box-shadow:0 0 0 5px rgba(244,240,231,.09)}
.llx-interchange strong{font:800 1.35rem/1.15 'Bricolage Grotesque','Poppins',sans-serif;letter-spacing:-.02em}
.llx-interchange small{grid-column:2;margin-top:4px;color:#aeb5d0;font:400 .83rem/1.4 'Inter',sans-serif}
.llx-interchange small{max-width:23ch}
.llx-portrait{position:absolute;right:28px;top:22px;width:62px;height:62px;object-fit:cover;object-position:center 25%;border:3px solid var(--cream);border-radius:16px;transform:rotate(6deg);box-shadow:0 12px 26px rgba(0,0,0,.3)}
.llx-routes{position:relative;list-style:none;display:grid;gap:8px;margin:0;padding:0 22px 24px 74px}
.llx-route{position:relative;--route:var(--red)}
.llx-route--ia{--route:var(--violet)}.llx-route--creations{--route:var(--amber)}
.llx-route-stop{position:absolute;z-index:2;top:50%;left:-34px;width:13px;height:13px;border:3px solid var(--route);border-radius:50%;background:#121935;transform:translateY(-50%)}
.llx-route a{position:relative;display:flex;align-items:center;gap:16px;min-height:92px;padding:16px 18px;border:1px solid rgba(244,240,231,.14);border-radius:14px;background:rgba(255,255,255,.035);color:var(--cream);transition:transform .35s cubic-bezier(.16,1,.3,1),border-color .3s,background-color .3s,box-shadow .3s}
.llx-route a:hover,.llx-route a:focus-visible{transform:translateX(5px);border-color:var(--route);background:rgba(255,255,255,.075);box-shadow:0 12px 30px rgba(0,0,0,.15)}
.llx-route-number{align-self:flex-start;color:var(--route);font:800 .8rem/1.2 'Bricolage Grotesque','Poppins',sans-serif;letter-spacing:.04em}
.llx-route-text{min-width:0;display:flex;flex:1;flex-direction:column;gap:4px}
.llx-route-text strong{font:700 1.08rem/1.2 'Bricolage Grotesque','Poppins',sans-serif;letter-spacing:-.02em}
.llx-route-text span{color:#bec4db;font:400 .79rem/1.45 'Inter',sans-serif}
.llx-route-arrow{flex:none;color:var(--route)}
.llx-board-bottom{justify-content:flex-start;gap:10px;padding:19px 28px;border-top:1px solid rgba(244,240,231,.12);border-bottom:0}
.llx-board-pulse{width:7px;height:7px;border-radius:50%;background:var(--amber);box-shadow:0 0 0 4px rgba(246,164,99,.12);animation:llxPulse 2.4s ease-in-out infinite}
.llx-board-bottom span:last-child{margin-left:auto;color:var(--amber);font-size:1.1rem}
.llx-footer{display:flex;align-items:center;gap:18px;width:min(100% - 48px,1216px);margin:auto;padding:0 0 28px;color:#7f88a9;font:700 .63rem/1.3 'Inter',sans-serif;letter-spacing:.19em;text-transform:uppercase}
.llx-footer-line{width:48px;height:1px;background:linear-gradient(90deg,var(--red),var(--violet),var(--amber))}
@keyframes llxEnter{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes llxPulse{50%{box-shadow:0 0 0 8px rgba(246,164,99,0)}}
@media(max-width:1050px){.llx-inner{grid-template-columns:minmax(0,1fr) minmax(370px,.95fr);gap:40px}.llx-title{font-size:clamp(3.1rem,5.3vw,4.7rem)}}
@media(max-width:800px){.llx-inner{min-height:0;grid-template-columns:1fr;gap:50px;padding:58px 0 50px}.llx-copy{max-width:640px}.llx-title{max-width:14ch;font-size:clamp(3.4rem,9vw,5rem)}.llx-board{max-width:640px;width:100%}}
@media(max-width:520px){.llx-inner,.llx-footer{width:min(100% - 40px,1216px)}.llx-inner{padding-top:48px;gap:38px}.llx-eyebrow{margin-bottom:24px;font-size:.63rem;letter-spacing:.1em}.llx-title{font-size:clamp(2.75rem,11.4vw,3.75rem)}.llx-description{margin-top:26px;font-size:.98rem}.llx-actions{align-items:stretch;flex-direction:column;gap:8px;margin-top:28px}.llx-primary{width:100%}.llx-secondary{justify-content:flex-start;min-height:44px}.llx-board{border-radius:18px}.llx-board-top,.llx-board-bottom{padding:18px 20px}.llx-interchange{padding:28px 20px 22px}.llx-interchange-line{left:37px;top:50px;bottom:-284px}.llx-portrait{right:18px;top:20px;width:48px;height:48px;border-radius:12px}.llx-routes{padding:0 14px 20px 62px}.llx-route-stop{left:-31px}.llx-route a{min-height:90px;padding:14px 12px;gap:12px}.llx-route-text strong{font-size:.98rem}.llx-route-text span{font-size:.73rem}.llx-footer{padding-bottom:22px;font-size:.56rem}}
@media(prefers-reduced-motion:reduce){.llx-copy,.llx-board,.llx-board-pulse{animation:none}.llx-primary,.llx-secondary,.llx-route a{transition:none}}
`;
