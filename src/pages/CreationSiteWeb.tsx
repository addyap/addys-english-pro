import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion } from '@/components/Effects';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import { trackEvent } from '@/lib/analytics';

// The sales page for website creation. The portfolio itself lives at
// /sites-web (a separate app, so plain <a> links to it); this page carries the
// offer, three relevant projects, the process and the enquiry in French, on
// the main domain where it can rank.
//
// Facts here come from the portfolio (addyap2/showcase): project descriptions
// and its FAQ. No client quotes yet: the portfolio's testimonials are
// placeholders. Add real ones only once a client has agreed to be quoted.

const SCREENSHOTS = 'https://www.antonyaddy.com/sites-web/screenshots';
const ENQUIRY = '/contact?sujet=sites';

const FACTS = [
  { label: 'Plusieurs langues', text: 'Un site dans les langues de vos clients, pas seulement en français.' },
  { label: 'Un devis fixe', text: 'Un prix clair après un premier échange, sans surprise.' },
  { label: 'Un seul interlocuteur', text: 'De la conception à la mise en ligne, et après.' },
];

const PROJECTS = [
  {
    slug: 'ristorante-lola',
    name: 'Ristorante da Lola',
    url: 'https://www.ristorantedalola.it',
    host: 'ristorantedalola.it',
    tag: 'Restaurant · 4 langues',
    need: "Un restaurant familial des Marches, à Fermignano, qui accueille des clients venus de plusieurs pays et voulait faire sentir son identité avant même la première visite.",
    work: 'Un site chaleureux en quatre langues : photographies généreuses, menu, galerie et réservation.',
    outcome: 'Chaque visiteur découvre le lieu et réserve dans sa langue.',
  },
  {
    slug: 'planb-global-connect',
    name: 'Plan B Concept',
    url: 'https://www.planb-concept.com',
    host: 'planb-concept.com',
    tag: 'Gestion de projet · FR / EN',
    need: "Un spécialiste de la gestion de projet de construction sur la Côte d'Azur, avec plus de 30 ans d'expérience du bâtiment et une clientèle francophone et anglophone.",
    work: 'Un site bilingue français-anglais qui présente son parcours et sa méthode, du premier croquis à la livraison finale.',
    outcome: 'Les propriétaires et investisseurs étrangers trouvent la même information que les clients français.',
  },
  {
    slug: 'wall-street',
    name: 'Wall Street Fréjus',
    url: 'https://www.wallstreetfrejus.fr',
    host: 'wallstreetfrejus.fr',
    tag: 'Pub-restaurant · Fréjus',
    need: 'Un pub-restaurant de Fréjus qui vit au rythme des concerts et des matchs, et dont le menu change chaque semaine.',
    work: 'Un site qui met en avant les soirées, les matchs sur écran géant et le menu de la semaine, avec réservation en ligne.',
    outcome: 'Les clients trouvent le programme et réservent sans appeler.',
  },
];

const STEPS = [
  { title: 'On échange', body: 'Votre activité, vos clients, les langues dont vous avez besoin et votre échéance. Une idée approximative suffit.' },
  { title: 'Je vous envoie un devis fixe', body: 'Un périmètre et un prix clairs, avec un délai annoncé avant de commencer.' },
  { title: 'Je conçois le site', body: 'Design, textes et versions linguistiques, avec vos retours à chaque étape.' },
  { title: 'Je le mets en ligne', body: 'Sur un hébergement rapide et fiable, avec votre nom de domaine connecté.' },
  { title: 'Vous restez autonome', body: 'Un contenu simple à modifier, une prise en main si besoin, et une maintenance en option.' },
];

const INCLUDED = [
  'La conception et le design, adaptés à votre activité',
  'Les versions linguistiques dont votre clientèle a besoin',
  'Un site rapide, lisible sur téléphone comme sur ordinateur',
  "L'hébergement et la connexion de votre nom de domaine",
  'Un contenu que vous pouvez mettre à jour vous-même',
  'En option, un forfait mensuel pour les mises à jour et évolutions',
];

const FAQS = [
  {
    q: 'En combien de temps livrez-vous un site ?',
    a: 'Un site simple en quelques jours, une plateforme plus complète en deux semaines environ, et les projets plus ambitieux selon un calendrier défini ensemble. Dans tous les cas, vous avez un délai clair avant de commencer.',
  },
  {
    q: 'Combien coûte un site ?',
    a: 'Cela dépend du périmètre : nombre de pages, de langues et de fonctions (réservation, commande…). Après un premier échange, je propose un devis clair et fixe, sans surprise.',
  },
  {
    q: 'Dans quelles langues ?',
    a: "Celles de vos clients. Je rédige et relis moi-même le français et l'anglais. Pour les autres langues, nous convenons ensemble, dès le devis, de la façon dont elles sont produites et relues.",
  },
  {
    q: 'Puis-je mettre à jour le site moi-même ensuite ?',
    a: 'Oui. Je conçois le site pour que le contenu soit simple à modifier, et je peux vous former ou assurer la maintenance. Pour les mises à jour régulières, je propose aussi, en option, un forfait mensuel ajusté à vos besoins réels.',
  },
  {
    q: "Gérez-vous l'hébergement et le nom de domaine ?",
    a: 'Oui, je déploie sur un hébergement rapide et fiable et je connecte votre nom de domaine.',
  },
  {
    q: 'Travaillez-vous uniquement sur la Côte d’Azur ?',
    a: "Non. Je suis basé à Fréjus et je peux vous rencontrer dans le Var et les Alpes-Maritimes, mais je travaille aussi à distance avec des clients partout en France et à l'étranger.",
  },
];

const CreationSiteWeb = () => {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de sites web multilingues',
    serviceType: 'Création de site web',
    provider: { '@type': 'Person', name: 'Antony Addy', url: 'https://www.antonyaddy.com' },
    areaServed: ['Var', 'Alpes-Maritimes', 'France'],
    url: 'https://www.antonyaddy.com/creation-site-web-multilingue',
    description: 'Sites web multilingues pour les entreprises qui travaillent avec une clientèle internationale : conception, versions linguistiques, mise en ligne et suivi.',
  };

  const enquiryClick = (location: string) => () =>
    trackEvent('websites_enquiry_click', { page: 'creation-site-web-multilingue', location, target: ENQUIRY });

  return (
    <>
      <SEOHead
        title="Création de site web multilingue — Côte d'Azur et à distance | Antony Addy"
        description="Sites web multilingues pour les entreprises qui accueillent une clientèle internationale : conception, versions linguistiques, mise en ligne. Devis fixe. Basé à Fréjus, clients partout."
        canonicalUrl="https://www.antonyaddy.com/creation-site-web-multilingue"
        jsonLd={[faqJsonLd, serviceJsonLd]}
      />
      <div className="inner-page inner-page--websites min-h-screen bg-background">
        {/* Hero */}
        <section className="inner-hero relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="aurora" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker">Création de sites web</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                Des sites web multilingues, pour une clientèle internationale
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Restaurants, hébergements, commerces, indépendants : je crée des sites qui parlent la langue
                de vos clients, et je vous accompagne jusqu'à la mise en ligne. Basé sur la Côte d'Azur,
                j'accompagne des clients partout en France et à l'étranger.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={ENQUIRY}
                  onClick={enquiryClick('hero')}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Parlez-moi de votre projet
                </Link>
                <a
                  href="/sites-web"
                  onClick={() => trackEvent('websites_portfolio_click', { page: 'creation-site-web-multilingue', location: 'hero', target: '/sites-web' })}
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Voir toutes mes réalisations
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="inner-scan" aria-label="En bref">
            {FACTS.map((fact, index) => (
              <div key={fact.label}>
                <span>0{index + 1} · {fact.label}</span>
                <p>{fact.text}</p>
              </div>
            ))}
          </section>

          {/* Pour qui */}
          <Reveal as="section" className="mb-14 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">Pour qui</h2>
            <span className="heading-rule is-left" aria-hidden="true" />
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Pour les entreprises dont les clients ne parlent pas tous français : un restaurant qui reçoit des
              touristes, une location saisonnière, un artisan ou un cabinet qui travaille avec des propriétaires
              étrangers, un indépendant qui vise une clientèle internationale. Votre site est souvent leur
              premier contact avec vous ; dans leur langue, il inspire confiance tout de suite.
            </p>
          </Reveal>

          {/* Réalisations */}
          <section className="mb-14" aria-labelledby="realisations-title">
            <Reveal>
              <h2 id="realisations-title" className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-heading">Quelques réalisations</h2>
              <p className="text-muted-foreground mb-8">Trois sites en ligne, avec le besoin de départ et ce que le site apporte.</p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {PROJECTS.map((p) => (
                <Reveal key={p.slug} as="article" className="flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm [overflow-wrap:anywhere]">
                  <img
                    src={`${SCREENSHOTS}/responsive/${p.slug}-960.webp`}
                    srcSet={`${SCREENSHOTS}/responsive/${p.slug}-480.webp 480w, ${SCREENSHOTS}/responsive/${p.slug}-960.webp 960w`}
                    sizes="(max-width: 768px) calc(100vw - 32px), 320px"
                    alt={`Page d'accueil du site ${p.name}`}
                    width="960" height="600" loading="lazy" decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top border-b border-border"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                    <h3 className="mt-1 text-lg font-bold text-primary font-heading">{p.name}</h3>
                    <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                      <div><dt className="font-semibold text-foreground">Le besoin</dt><dd className="text-muted-foreground">{p.need}</dd></div>
                      <div><dt className="font-semibold text-foreground">Ce que j'ai réalisé</dt><dd className="text-muted-foreground">{p.work}</dd></div>
                      <div><dt className="font-semibold text-foreground">Ce que le site permet</dt><dd className="text-muted-foreground">{p.outcome}</dd></div>
                    </dl>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('websites_project_click', { project: p.slug, target: p.url })}
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2"
                    >
                      {p.host} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <a href="/sites-web#work" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
              Voir les vingt projets du portfolio <ArrowRight size={16} aria-hidden="true" />
            </a>
          </section>

          {/* Comment je travaille */}
          <Reveal as="section" variant="scale" className="mb-14 bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Comment je travaille</h2>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-accent/40 pt-3">
                  <span className="text-xs font-semibold tracking-wider text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <strong className="mt-1 block text-base text-primary leading-snug">{step.title}</strong>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Ce qui est inclus */}
          <section className="mb-14">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Ce qui est inclus</h2>
            </Reveal>
            <RevealStagger as="ul" className="grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <Reveal key={item} as="li" variant="left" className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </Reveal>
              ))}
            </RevealStagger>
          </section>

          {/* FAQ */}
          <Reveal as="section" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Questions fréquentes</h2>
            <div>
              {FAQS.map((f) => (
                <Accordion key={f.q} title={f.q}>
                  <p>{f.a}</p>
                </Accordion>
              ))}
            </div>
          </Reveal>

          {/* Closing CTA */}
          <Reveal as="section" variant="scale" className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-heading">Un site à créer ou à traduire ?</h2>
            <p className="text-lg mb-6 leading-relaxed text-white/90">
              Quelques lignes suffisent : votre activité, ce que le site doit faire, les langues de vos clients
              et votre échéance. Je vous réponds sous 24 h ouvrées.
            </p>
            <Link
              to={ENQUIRY}
              onClick={enquiryClick('closing')}
              className="inline-flex bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Parlez-moi de votre projet
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default CreationSiteWeb;
