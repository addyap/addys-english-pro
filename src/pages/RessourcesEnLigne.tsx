import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, ArrowRight, Gift, RefreshCw } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { FadeInSection } from '@/components/Effects';
import { PLATFORMS } from '@/data/platforms';

const RessourcesEnLigne = () => {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: "Ressources et plateformes d'apprentissage en ligne",
    description:
      "Plateformes d'apprentissage de l'anglais conçues et développées par Antony Addy à l'aide de l'intelligence artificielle.",
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
        title="Ressources & plateformes d'anglais en ligne | Antony Addy"
        description="Plateformes d'apprentissage de l'anglais conçues par Antony Addy : Anglais à distance, Grammatica, préparation TOEIC et CLOE."
        canonicalUrl="https://www.antonyaddy.com/ressources-en-ligne"
        jsonLd={collectionJsonLd}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent-foreground px-4 py-1.5 text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Conçu et développé avec l'IA
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading leading-tight">
                Mes plateformes d'apprentissage en ligne
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                En complément de mes formations, je conçois et développe — à l'aide de
                l'intelligence artificielle — des plateformes d'apprentissage de l'anglais.
                Chacune répond à un besoin précis : progresser en autonomie, comprendre la
                grammaire, ou préparer une certification.{' '}
                <span className="font-semibold text-primary">Toutes sont gratuites et enrichies en continu.</span>
              </p>
            </FadeInSection>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
                        className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-foreground"
                        aria-hidden="true"
                      />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-primary font-heading">
                      {p.name}
                    </h2>
                    <p className="mb-4 text-sm font-medium text-accent-foreground/80">
                      {p.host}
                    </p>

                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                      {p.raison}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent-foreground">
                      Découvrir le site
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </>
              );

              return (
                <FadeInSection key={p.host}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {inner}
                  </a>
                </FadeInSection>
              );
            })}
          </div>

          {/* Why AI note */}
          <FadeInSection>
            <section className="mt-14 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-primary font-heading">
                Pourquoi ces outils ?
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                L'intelligence artificielle me permet de créer rapidement des ressources
                pédagogiques de qualité, pensées par un formateur et non par un algorithme
                anonyme. Chaque plateforme prolonge mon accompagnement : elle donne à mes
                apprenants — et à tous ceux qui apprennent l'anglais — de quoi s'entraîner
                en autonomie, entre deux séances ou en préparation d'un examen.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <p className="flex flex-1 items-start gap-3 rounded-xl bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  <Gift className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span><strong>Gratuit.</strong> Toutes ces plateformes sont actuellement en accès libre : vous pouvez les utiliser dès maintenant, sans inscription payante.</span>
                </p>
                <p className="flex flex-1 items-start gap-3 rounded-xl bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  <RefreshCw className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span><strong>En évolution constante.</strong> Je les enrichis en continu — nouveaux contenus, exercices et améliorations sont ajoutés régulièrement.</span>
                </p>
              </div>
            </section>
          </FadeInSection>

          {/* Closing CTA back to the main site */}
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default RessourcesEnLigne;
