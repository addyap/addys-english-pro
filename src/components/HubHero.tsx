import React from 'react';
import { ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import { FORMATIONS } from '@/data/formations';
import { trackEvent } from '@/lib/analytics';
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink';
import anglaisLogo from '@/assets/brand/anglais-logo.png';
import iaLogo from '@/assets/brand/ia-logo.svg';
import creationsLogo from '@/assets/brand/creations-logo.png';

// antonyaddy.com is the hub. This hero gives all three activities equal billing
// on the first screen, each with its own brand mark, before the page's English
// chapter (the metro hero + the formations/city content) begins below.
const LOGOS: Record<string, string> = {
  anglais: anglaisLogo,
  ia: iaLogo,
  creations: creationsLogo,
};

// Per-activity hover accent: English = accent red, IA = secondary purple
// (≈ the subdomain's #5B3DF5), Créations = its wordmark's orange.
const ACCENTS: Record<string, string> = {
  anglais: 'hover:border-accent/50',
  ia: 'hover:border-secondary/50',
  creations: 'hover:border-[#E08A2B]/60',
};

export default function HubHero() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section
      className="ll-hero relative overflow-hidden text-primary-foreground"
      aria-labelledby="hub-hero-heading"
    >
      {/* Brand-colour ground — deep navy with soft purple depth */}
      <div className="absolute inset-0 z-0 ll-bg" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-9 pb-14 sm:pt-11 sm:pb-16 md:pt-12 md:pb-20 text-center">
        <p className="ll-eyebrow">Antony Addy · Côte d'Azur &amp; à distance</p>

        <h1 id="hub-hero-heading" className="ll-h1 max-w-4xl mx-auto">
          Formateur d'<span className="ll-hot">anglais</span>, formateur en{' '}
          <span className="ll-hot">IA générative</span> &amp; créateur de{' '}
          <span className="ll-hot">sites web</span>
        </h1>

        <p className="mt-4 mb-2 font-body max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-snug drop-shadow">
          J'aide les professionnels et les entreprises à monter en compétences —
          en anglais comme en IA — et je conçois leurs sites web avec l'IA, sur la
          Côte d'Azur et partout à distance.
        </p>

        {/* The three activities, equal billing, each with its own logo */}
        <h2 className="sr-only">Mes trois activités</h2>
        <RevealStagger
          className="mt-8 sm:mt-9 grid gap-4 sm:gap-5 md:grid-cols-3 text-left"
          role="list"
        >
          {FORMATIONS.map((f) => {
            const inner = (
              <>
                <div className="flex items-center justify-center h-16 mb-4" aria-hidden="true">
                  <img
                    src={LOGOS[f.key]}
                    alt=""
                    className="max-h-12 w-auto object-contain"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary font-heading mb-1.5 flex items-center gap-2">
                  {f.title}
                  {f.external && (
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                  )}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">
                  {f.tagline}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-auto">
                  {f.cta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </>
            );

            const cardClass =
              'group flex flex-col h-full p-5 rounded-2xl bg-white shadow-xl transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-2xl ' +
              ACCENTS[f.key];

            // The English activity lives on this same site: scroll down to its
            // chapter rather than leaving. The other two open their subdomains.
            return f.external ? (
              <Reveal
                key={f.key}
                variant="scale"
                as="a"
                href={f.href}
                target="_blank"
                rel="noopener"
                role="listitem"
                onClick={() => trackEvent('hub_hero_card_click', { formation: f.key, target: f.href })}
                className={cardClass}
              >
                {inner}
              </Reveal>
            ) : (
              <Reveal
                key={f.key}
                variant="scale"
                as="a"
                href="#anglais"
                role="listitem"
                onClick={() => trackEvent('hub_hero_card_click', { formation: f.key, target: '#anglais' })}
                className={cardClass}
              >
                {inner}
              </Reveal>
            );
          })}
        </RevealStagger>

        {/* One brand-level CTA — lowest-friction contact for any of the three */}
        <div className="mt-8 sm:mt-9">
          <a
            href={whatsappLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!whatsappLink) { e.preventDefault(); return; }
              trackEvent('whatsapp_cta_click', { page: 'home', location: 'hub-hero', prefilled: true });
            }}
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 sm:px-9 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-accent/90 hover:shadow-2xl transition-all duration-300 shadow-xl font-body transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 active:scale-100 ring-2 ring-accent/40"
            aria-label="Prendre contact sur WhatsApp avec Antony Addy (message pré-rempli)"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Prendre contact sur WhatsApp</span>
          </a>
          <p className="mt-3 text-xs sm:text-sm text-primary-foreground/75 font-body drop-shadow">
            Premier échange gratuit · Réponse sous 24 h ouvrées
          </p>
        </div>
      </div>

      {/* Soft fade so the navy hero melts into the light section below */}
      <div className="ll-fade" aria-hidden="true" />
    </section>
  );
}
