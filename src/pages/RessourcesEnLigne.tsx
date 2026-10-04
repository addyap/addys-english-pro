import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ArrowRight, Gift, RefreshCw } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Reveal } from '@/components/motion/Reveal';
import { EXPERIENCE_FLOOR } from '@/lib/utils';
import { PLATFORMS } from '@/data/platforms';

const RessourcesEnLigne = () => {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fluentory by Antony Addy',
    alternateName: "Ressources et plateformes d'apprentissage en ligne",
    description:
      "Fluentory by Antony Addy : la suite de plateformes d'entraînement à l'anglais conçues par Antony Addy, formateur professionnel d'adultes certifié FPA.",
    url: 'https://www.antonyaddy.com/ressources-en-ligne',
    hasPart: PLATFORMS.map((p) => ({
      '@type': 'WebSite',
      name: p.name,
      url: p.url,
      description: p.raison,
    })),
  };

  return (
    <>
      <SEOHead
        title="Fluentory by Antony Addy — mes plateformes d'anglais en ligne"
        description="Plateformes d'entraînement à l'anglais conçues par Antony Addy, formateur certifié FPA : grammaire, compréhension orale, préparation TOEIC et CLOE. Gratuit."
        canonicalUrl="https://www.antonyaddy.com/ressources-en-ligne"
        image="/og/fluentory-og.jpg"
        imageAlt="Fluentory by Antony Addy — mes plateformes d'apprentissage de l'anglais : CLOE, expression orale, TOEIC, compréhension orale, Anglais à Distance et grammaire."
        imageWidth={1200}
        imageHeight={600}
        jsonLd={collectionJsonLd}
      />

      <div className="inner-page inner-page--resources min-h-screen bg-background">
        {/* Hero */}
        <section className="inner-hero bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-4 py-1.5 text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Conçues par un formateur certifié FPA
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3 font-heading leading-tight">
                Fluentory <span className="text-accent">by Antony Addy</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-primary max-w-2xl mx-auto mb-4">
                Free tools for grammar, listening, speaking and exam prep — built by a
                certified trainer.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                En complément de mes formations, je conçois des plateformes d'entraînement à
                l'anglais : progression, exercices et corrections reposent sur ma pédagogie et
                sur {EXPERIENCE_FLOOR} ans de salle de classe. Chacune répond à un besoin précis —
                progresser en autonomie, comprendre la grammaire, préparer une certification.{' '}
                <span className="font-semibold text-primary">Toutes sont gratuites et enrichies en continu.</span>
              </p>
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Fluentory banner — the platform collection at a glance */}
          <Reveal>
            <img
              src="/fluentory-plateformes.webp"
              alt="Fluentory — mes plateformes d'apprentissage de l'anglais : CLOE Prep, SpeakUp AI, TOEIC, ListenUp, Anglais à Distance et Grammatica."
              width={1774}
              height={887}
              loading="lazy"
              className="mb-12 sm:mb-14 w-full rounded-2xl border border-border shadow-sm"
            />
          </Reveal>

          {/* Platform grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {PLATFORMS.map((p) => {
              const inner = (
                <>
                  {/* Coloured band */}
                  <div className={`h-2 w-full bg-gradient-to-r ${p.accent}`} />

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                        {p.tag}
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading">
                      {p.name}
                    </h2>
                    <p className="mb-4 text-sm font-medium text-accent">
                      {p.host}
                    </p>

                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                      {p.raison}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent">
                      Découvrir le site
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </>
              );

              return (
                <Reveal key={p.host}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {inner}
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Why AI note */}
          <Reveal>
            <section className="mt-14 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-primary font-heading">
                Pourquoi ces outils ?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Parce qu'une heure de cours ne suffit pas : ce qui fait progresser, c'est ce
                que vous faites entre deux séances. Chaque plateforme prolonge mon
                accompagnement — mêmes explications, mêmes priorités, mêmes pièges traités en
                cours — et donne à mes apprenants, comme à tous ceux qui apprennent l'anglais,
                de quoi s'entraîner en autonomie ou préparer un examen.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Je m'appuie sur l'intelligence artificielle pour les développer, ce qui me permet
                d'aller vite et de les enrichir en continu. Le contenu pédagogique, lui, reste le
                mien : c'est ma progression, mes exemples et mes corrections — pas ceux d'un
                algorithme anonyme.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <p className="flex flex-1 items-start gap-3 rounded-xl bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  <Gift className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span><strong>Gratuit.</strong> Toutes ces plateformes sont actuellement en accès libre : vous pouvez les utiliser dès maintenant, sans inscription payante.</span>
                </p>
                <p className="flex flex-1 items-start gap-3 rounded-xl bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  <RefreshCw className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span><strong>En évolution constante.</strong> Je les enrichis en continu — nouveaux contenus, exercices et améliorations sont ajoutés régulièrement.</span>
                </p>
              </div>
            </section>
          </Reveal>

          {/* Closing CTA back to the main site */}
          <Reveal>
            <section className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 sm:p-10 text-center text-white">
              <h2 className="mb-3 text-2xl sm:text-3xl font-bold font-heading">
                Envie d'un accompagnement sur-mesure ?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/90">
                Les plateformes sont un excellent complément, mais rien ne remplace un
                formateur. Découvrez mes formations ou parlons directement de votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/offres-de-formation"
                  className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Voir mes formations
                </Link>
                <Link
                  to="/contact"
                  className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Me contacter
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default RessourcesEnLigne;
