import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';
import './HubHeroLigne.css';

const routes = [
  { key: 'anglais', number: '01', label: 'Anglais professionnel', detail: 'Prenez la parole avec confiance.', href: '#anglais', external: false },
  { key: 'creations', number: '02', label: 'Sites web multilingues', detail: 'Pour une clientèle internationale.', href: '/creation-site-web-multilingue', external: false },
  { key: 'ia', number: '03', label: 'IA générative', detail: 'Faites travailler les outils pour vous.', href: '/ia', external: false },
] as const;

export default function HubHeroLigne() {
  return (
    <section className="llx" aria-labelledby="llx-title">
      <div className="llx-atmosphere" aria-hidden="true" />
      <div className="llx-inner">
        <div className="llx-copy">
          <p className="llx-eyebrow"><span className="llx-signal" aria-hidden="true" />Antony Addy · Côte d’Azur &amp; à distance</p>
          <h1 id="llx-title" className="llx-title">
            <span className="llx-services">L’anglais<br />professionnel.</span>
            <span className="llx-promise">À vous d’avancer.</span>
          </h1>
          <p className="llx-description">
            Réunions, appels, présentations, emails : des formations sur mesure pour les équipes et les
            professionnels, sur la Côte d’Azur ou à distance. Je crée aussi des sites web multilingues.
          </p>
          <div className="llx-actions">
            <Link
              to="/contact?sujet=anglais"
              className="llx-primary"
              onClick={() => trackEvent('hub_hero_primary_click', { formation: 'anglais', target: '/contact?sujet=anglais' })}
            >
              Parlons de votre formation <ArrowRight size={19} aria-hidden="true" />
            </Link>
            <Link
              to="/creation-site-web-multilingue"
              className="llx-secondary"
              onClick={() => trackEvent('hub_hero_secondary_click', { formation: 'creations', target: '/creation-site-web-multilingue' })}
            >
              Découvrir mes sites web <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="llx-reassurance">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
        </div>

        <div id="hero-routes" className="llx-board">
          <figure className="visual-hero-portrait">
            <img src="/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png" alt="Antony Addy à son bureau" width="960" height="960" />
            <figcaption>Antony Addy <span>Votre formateur, votre interlocuteur.</span></figcaption>
          </figure>
          <div className="llx-board-top"><span>Choisissez votre parcours</span><span>01 — 03</span></div>
          <div className="llx-interchange">
            <span className="llx-interchange-line" aria-hidden="true" />
            <span className="llx-interchange-node" aria-hidden="true" />
            <strong>Antony Addy</strong>
            <small>Votre interlocuteur, du premier échange à la réalisation.</small>
            <img className="llx-portrait" src="/brand/antony-addy-portrait-128.webp" alt="" width="64" height="64" decoding="async" />
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
