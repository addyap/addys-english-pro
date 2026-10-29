import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion } from '@/components/Effects';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import { trackEvent } from '@/lib/analytics';

// The sales page for website creation, in French (/creation-site-web-multilingue)
// and English (/en/multilingual-websites). The portfolio itself lives at
// /sites-web (a separate app, so plain <a> links to it); this page carries the
// offer, three relevant projects, the process and the enquiry on the main
// domain, where it can rank.
//
// Facts here come from the portfolio (addyap2/showcase): project descriptions
// and its FAQ. No client quotes yet: the portfolio's testimonials are
// placeholders. Add real ones only once a client has agreed to be quoted.

const SCREENSHOTS = 'https://www.antonyaddy.com/sites-web/screenshots';
const FR_URL = 'https://www.antonyaddy.com/creation-site-web-multilingue';
const EN_URL = 'https://www.antonyaddy.com/en/multilingual-websites';

type Lang = 'fr' | 'en';
interface Project { slug: string; name: string; url: string; host: string; tag: string; need: string; work: string; outcome: string }
interface Copy {
  seo: { title: string; description: string; canonical: string };
  locale: string;
  // French enquiries use this site's contact form; English ones the
  // portfolio's English short form, so the whole journey stays in English.
  enquiry: string;
  portfolio: string;
  kicker: string; h1: string; sub: string; primary: string; secondary: string; reassurance: string;
  factsLabel: string; facts: { label: string; text: string }[];
  forWhoTitle: string; forWho: string;
  projectsTitle: string; projectsLead: string; labels: { need: string; work: string; outcome: string };
  imgAlt: (name: string) => string; newTab: string; allProjects: string; projects: Project[];
  stepsTitle: string; steps: { title: string; body: string }[];
  includedTitle: string; included: string[];
  faqTitle: string; faqs: { q: string; a: string }[];
  closingTitle: string; closingText: string;
  otherLang: { label: string; href: string; hrefLang: Lang; text: string };
  service: { name: string; serviceType: string; description: string; areaServed: string[] };
}

const PROJECT_LINKS = {
  lola: { slug: 'ristorante-lola', name: 'Ristorante da Lola', url: 'https://www.ristorantedalola.it', host: 'ristorantedalola.it' },
  planb: { slug: 'planb-global-connect', name: 'Plan B Concept', url: 'https://www.planb-concept.com', host: 'planb-concept.com' },
  wall: { slug: 'wall-street', name: 'Wall Street Fréjus', url: 'https://www.wallstreetfrejus.fr', host: 'wallstreetfrejus.fr' },
};

const COPY: Record<Lang, Copy> = {
  fr: {
    seo: {
      title: "Création de site web multilingue — Côte d'Azur et à distance | Antony Addy",
      description: 'Sites web multilingues pour les entreprises qui accueillent une clientèle internationale : conception, versions linguistiques, mise en ligne. Devis fixe. Basé à Fréjus, clients partout.',
      canonical: FR_URL,
    },
    locale: 'fr_FR',
    enquiry: '/contact?sujet=sites',
    portfolio: '/sites-web',
    kicker: 'Création de sites web',
    h1: 'Des sites web multilingues, pour une clientèle internationale',
    sub: "Restaurants, hébergements, commerces, indépendants : je crée des sites qui parlent la langue de vos clients, et je vous accompagne jusqu'à la mise en ligne. Basé sur la Côte d'Azur, j'accompagne des clients partout en France et à l'étranger.",
    primary: 'Parlez-moi de votre projet',
    secondary: 'Voir toutes mes réalisations',
    reassurance: 'Premier échange gratuit · Réponse sous 24 h ouvrées',
    factsLabel: 'En bref',
    facts: [
      { label: 'Plusieurs langues', text: 'Un site dans les langues de vos clients, pas seulement en français.' },
      { label: 'Un devis fixe', text: 'Un prix clair après un premier échange, sans surprise.' },
      { label: 'Un seul interlocuteur', text: 'De la conception à la mise en ligne, et après.' },
    ],
    forWhoTitle: 'Pour qui',
    forWho: "Pour les entreprises dont les clients ne parlent pas tous français : un restaurant qui reçoit des touristes, une location saisonnière, un artisan ou un cabinet qui travaille avec des propriétaires étrangers, un indépendant qui vise une clientèle internationale. Votre site est souvent leur premier contact avec vous ; dans leur langue, il inspire confiance tout de suite.",
    projectsTitle: 'Quelques réalisations',
    projectsLead: 'Trois sites en ligne, avec le besoin de départ et ce que le site apporte.',
    labels: { need: 'Le besoin', work: "Ce que j'ai réalisé", outcome: 'Ce que le site permet' },
    imgAlt: (name) => `Page d'accueil du site ${name}`,
    newTab: "(s'ouvre dans un nouvel onglet)",
    allProjects: 'Voir les vingt projets du portfolio',
    projects: [
      { ...PROJECT_LINKS.lola, tag: 'Restaurant · 4 langues',
        need: 'Un restaurant familial des Marches, à Fermignano, qui accueille des clients venus de plusieurs pays et voulait faire sentir son identité avant même la première visite.',
        work: 'Un site chaleureux en quatre langues : photographies généreuses, menu, galerie et réservation.',
        outcome: 'Chaque visiteur découvre le lieu et réserve dans sa langue.' },
      { ...PROJECT_LINKS.planb, tag: 'Gestion de projet · FR / EN',
        need: "Un spécialiste de la gestion de projet de construction sur la Côte d'Azur, avec plus de 30 ans d'expérience du bâtiment et une clientèle francophone et anglophone.",
        work: 'Un site bilingue français-anglais qui présente son parcours et sa méthode, du premier croquis à la livraison finale.',
        outcome: 'Les propriétaires et investisseurs étrangers trouvent la même information que les clients français.' },
      { ...PROJECT_LINKS.wall, tag: 'Pub-restaurant · Fréjus',
        need: 'Un pub-restaurant de Fréjus qui vit au rythme des concerts et des matchs, et dont le menu change chaque semaine.',
        work: 'Un site qui met en avant les soirées, les matchs sur écran géant et le menu de la semaine, avec réservation en ligne.',
        outcome: 'Les clients trouvent le programme et réservent sans appeler.' },
    ],
    stepsTitle: 'Comment je travaille',
    steps: [
      { title: 'On échange', body: 'Votre activité, vos clients, les langues dont vous avez besoin et votre échéance. Une idée approximative suffit.' },
      { title: 'Je vous envoie un devis fixe', body: 'Un périmètre et un prix clairs, avec un délai annoncé avant de commencer.' },
      { title: 'Je conçois le site', body: 'Design, textes et versions linguistiques, avec vos retours à chaque étape.' },
      { title: 'Je le mets en ligne', body: 'Sur un hébergement rapide et fiable, avec votre nom de domaine connecté.' },
      { title: 'Vous restez autonome', body: 'Un contenu simple à modifier, une prise en main si besoin, et une maintenance en option.' },
    ],
    includedTitle: 'Ce qui est inclus',
    included: [
      'La conception et le design, adaptés à votre activité',
      'Les versions linguistiques dont votre clientèle a besoin',
      'Un site rapide, lisible sur téléphone comme sur ordinateur',
      "L'hébergement et la connexion de votre nom de domaine",
      'Un contenu que vous pouvez mettre à jour vous-même',
      'En option, un forfait mensuel pour les mises à jour et évolutions',
    ],
    faqTitle: 'Questions fréquentes',
    faqs: [
      { q: 'En combien de temps livrez-vous un site ?', a: 'Un site simple en quelques jours, une plateforme plus complète en deux semaines environ, et les projets plus ambitieux selon un calendrier défini ensemble. Dans tous les cas, vous avez un délai clair avant de commencer.' },
      { q: 'Combien coûte un site ?', a: 'Cela dépend du périmètre : nombre de pages, de langues et de fonctions (réservation, commande…). Après un premier échange, je propose un devis clair et fixe, sans surprise.' },
      { q: 'Dans quelles langues ?', a: "Celles de vos clients. Je rédige et relis moi-même le français et l'anglais. Pour les autres langues, nous convenons ensemble, dès le devis, de la façon dont elles sont produites et relues." },
      { q: 'Puis-je mettre à jour le site moi-même ensuite ?', a: 'Oui. Je conçois le site pour que le contenu soit simple à modifier, et je peux vous former ou assurer la maintenance. Pour les mises à jour régulières, je propose aussi, en option, un forfait mensuel ajusté à vos besoins réels.' },
      { q: "Gérez-vous l'hébergement et le nom de domaine ?", a: 'Oui, je déploie sur un hébergement rapide et fiable et je connecte votre nom de domaine.' },
      { q: 'Travaillez-vous uniquement sur la Côte d’Azur ?', a: "Non. Je suis basé à Fréjus et je peux vous rencontrer dans le Var et les Alpes-Maritimes, mais je travaille aussi à distance avec des clients partout en France et à l'étranger." },
    ],
    closingTitle: 'Un site à créer ou à traduire ?',
    closingText: 'Quelques lignes suffisent : votre activité, ce que le site doit faire, les langues de vos clients et votre échéance. Je vous réponds sous 24 h ouvrées.',
    otherLang: { label: 'English version', href: '/en/multilingual-websites', hrefLang: 'en', text: 'This page in English' },
    service: {
      name: 'Création de sites web multilingues', serviceType: 'Création de site web',
      description: 'Sites web multilingues pour les entreprises qui travaillent avec une clientèle internationale : conception, versions linguistiques, mise en ligne et suivi.',
      areaServed: ['Var', 'Alpes-Maritimes', 'France'],
    },
  },
  en: {
    seo: {
      title: 'Multilingual websites — French Riviera and remote | Antony Addy',
      description: 'Multilingual websites for businesses with international customers: design, language versions and launch. Fixed quote. Based in Fréjus, working with clients anywhere.',
      canonical: EN_URL,
    },
    locale: 'en_GB',
    enquiry: '/sites-web/en#contact',
    portfolio: '/sites-web/en',
    kicker: 'Website design',
    h1: 'Multilingual websites for an international clientele',
    sub: "Restaurants, holiday lets, shops and independent professionals: I build websites that speak your customers' language, and see you through to launch. Based on the French Riviera, I work with clients across France and abroad.",
    primary: 'Tell me about your project',
    secondary: 'See all my work',
    reassurance: 'First conversation free · Reply within one working day',
    factsLabel: 'At a glance',
    facts: [
      { label: 'Several languages', text: "A site in your customers' languages, not just one." },
      { label: 'A fixed quote', text: 'A clear price after a first conversation, with no surprises.' },
      { label: 'One point of contact', text: 'From design to launch, and afterwards.' },
    ],
    forWhoTitle: "Who it's for",
    forWho: "For businesses whose customers don't all speak the same language: a restaurant that welcomes tourists, a holiday let, a tradesperson or practice working with overseas property owners, a freelancer with an international clientele. Your website is often their first contact with you; in their own language, it earns their trust straight away.",
    projectsTitle: 'Selected work',
    projectsLead: 'Three live sites, with the brief and what each site does for the business.',
    labels: { need: 'The brief', work: 'What I built', outcome: 'What it does' },
    imgAlt: (name) => `Home page of the ${name} website`,
    newTab: '(opens in a new tab)',
    allProjects: 'See all twenty projects in the portfolio',
    projects: [
      { ...PROJECT_LINKS.lola, tag: 'Restaurant · 4 languages',
        need: 'A family restaurant in Fermignano, in Italy\'s Marche region, welcoming guests from several countries and wanting them to feel its character before their first visit.',
        work: 'A warm site in four languages: generous photography, the menu, a gallery and booking.',
        outcome: 'Every visitor can explore the restaurant and book in their own language.' },
      { ...PROJECT_LINKS.planb, tag: 'Project management · FR / EN',
        need: 'A construction project manager on the French Riviera, with more than 30 years in building and both French- and English-speaking clients.',
        work: "A bilingual French-English site setting out the firm's experience and method, from first sketch to final handover.",
        outcome: 'Overseas owners and investors get the same information as French clients.' },
      { ...PROJECT_LINKS.wall, tag: 'Pub & restaurant · Fréjus',
        need: 'A pub-restaurant in Fréjus built around live music and big matches, with a menu that changes every week.',
        work: "A site that puts the nights out, the big-screen matches and this week's menu up front, with online booking.",
        outcome: "Customers find what's on and book without picking up the phone." },
    ],
    stepsTitle: 'How I work',
    steps: [
      { title: 'We talk', body: 'Your business, your customers, the languages you need and your deadline. A rough idea is enough.' },
      { title: 'I send a fixed quote', body: 'A clear scope and price, with a timeline agreed before we start.' },
      { title: 'I design the site', body: 'Design, copy and language versions, with your feedback at each stage.' },
      { title: 'I put it live', body: 'On fast, reliable hosting, with your domain name connected.' },
      { title: 'You stay in control', body: 'Content that is easy to edit, a walkthrough if you want one, and optional maintenance.' },
    ],
    includedTitle: "What's included",
    included: [
      'Design tailored to your business',
      'The language versions your customers need',
      'A fast site that reads well on phones and computers',
      'Hosting and connecting your domain name',
      'Content you can update yourself',
      'Optionally, a monthly plan for updates and new features',
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'How fast can you deliver a site?', a: 'A simple site in a few days, a fuller platform in a couple of weeks, and bigger projects on a schedule we agree up front. Either way, you get a clear timeline before we start.' },
      { q: 'How much does a site cost?', a: 'It depends on scope: the number of pages, languages and features (booking, ordering and so on). After a short conversation I give a clear, fixed quote, with no surprises.' },
      { q: 'Which languages?', a: "Your customers'. I write and check the English and French myself. For other languages, we agree at the quote stage how they will be produced and checked." },
      { q: 'Can I update the site myself afterwards?', a: 'Yes. I build the site so the content is easy to edit, and I can show you how or look after it for you. For regular updates I also offer an optional monthly plan, sized to what you actually need.' },
      { q: 'Do you handle hosting and the domain?', a: 'Yes, I deploy to fast, reliable hosting and connect your domain name.' },
      { q: 'Do you only work on the French Riviera?', a: "No. I'm based in Fréjus and can meet you in the Var and Alpes-Maritimes, but I also work remotely with clients across France and abroad." },
    ],
    closingTitle: 'A site to build or translate?',
    closingText: "A few lines are enough: your business, what the site needs to do, your customers' languages and your deadline. I'll reply within one working day.",
    otherLang: { label: 'Version française', href: '/creation-site-web-multilingue', hrefLang: 'fr', text: 'Cette page en français' },
    service: {
      name: 'Multilingual website design', serviceType: 'Website design',
      description: 'Multilingual websites for businesses with an international clientele: design, language versions, launch and support.',
      areaServed: ['Var', 'Alpes-Maritimes', 'France'],
    },
  },
};

export const WebsitesLanding = ({ lang }: { lang: Lang }) => {
  const c = COPY[lang];
  const page = lang === 'fr' ? 'creation-site-web-multilingue' : 'en/multilingual-websites';
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: c.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...c.service,
    provider: { '@type': 'Person', name: 'Antony Addy', url: 'https://www.antonyaddy.com' },
    url: c.seo.canonical,
  };
  const internalEnquiry = c.enquiry.startsWith('/contact');
  const enquiryClick = (location: string) => () =>
    trackEvent('websites_enquiry_click', { page, location, target: c.enquiry });
  const enquiryClass = 'bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300';
  const EnquiryLink = ({ location, className }: { location: string; className: string }) =>
    internalEnquiry
      ? <Link to={c.enquiry} onClick={enquiryClick(location)} className={className}>{c.primary}</Link>
      : <a href={c.enquiry} onClick={enquiryClick(location)} className={className}>{c.primary}</a>;

  return (
    <>
      <SEOHead
        title={c.seo.title}
        description={c.seo.description}
        canonicalUrl={c.seo.canonical}
        lang={lang}
        locale={c.locale}
        hreflangs={[
          { href: FR_URL, hrefLang: 'fr' },
          { href: EN_URL, hrefLang: 'en' },
          { href: FR_URL, hrefLang: 'x-default' },
        ]}
        jsonLd={[faqJsonLd, serviceJsonLd]}
      />
      <div className="inner-page inner-page--websites min-h-screen bg-background" lang={lang}>
        {/* Hero */}
        <section className="inner-hero relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="aurora" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker">{c.kicker}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">{c.h1}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">{c.sub}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <EnquiryLink location="hero" className={enquiryClass} />
                <a
                  href={c.portfolio}
                  onClick={() => trackEvent('websites_portfolio_click', { page, location: 'hero', target: c.portfolio })}
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  {c.secondary}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.reassurance}</p>
              <p className="mt-2 text-sm">
                <Link to={c.otherLang.href} hrefLang={c.otherLang.hrefLang} lang={c.otherLang.hrefLang} className="text-primary underline underline-offset-2 hover:text-accent">
                  {c.otherLang.text}
                </Link>
              </p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="inner-scan" aria-label={c.factsLabel}>
            {c.facts.map((fact, index) => (
              <div key={fact.label}>
                <span>0{index + 1} · {fact.label}</span>
                <p>{fact.text}</p>
              </div>
            ))}
          </section>

          {/* Who it's for */}
          <Reveal as="section" className="mb-14 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">{c.forWhoTitle}</h2>
            <span className="heading-rule is-left" aria-hidden="true" />
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{c.forWho}</p>
          </Reveal>

          {/* Projects */}
          <section className="mb-14" aria-labelledby="realisations-title">
            <Reveal>
              <h2 id="realisations-title" className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-heading">{c.projectsTitle}</h2>
              <p className="text-muted-foreground mb-8">{c.projectsLead}</p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {c.projects.map((p) => (
                <Reveal key={p.slug} as="article" className="flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm [overflow-wrap:anywhere]">
                  <img
                    src={`${SCREENSHOTS}/responsive/${p.slug}-960.webp`}
                    srcSet={`${SCREENSHOTS}/responsive/${p.slug}-480.webp 480w, ${SCREENSHOTS}/responsive/${p.slug}-960.webp 960w`}
                    sizes="(max-width: 768px) calc(100vw - 32px), 320px"
                    alt={c.imgAlt(p.name)}
                    width="960" height="600" loading="lazy" decoding="async"
                    className="aspect-[16/10] w-full object-cover object-top border-b border-border"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
                    <h3 className="mt-1 text-lg font-bold text-primary font-heading">{p.name}</h3>
                    <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                      <div><dt className="font-semibold text-foreground">{c.labels.need}</dt><dd className="text-muted-foreground">{p.need}</dd></div>
                      <div><dt className="font-semibold text-foreground">{c.labels.work}</dt><dd className="text-muted-foreground">{p.work}</dd></div>
                      <div><dt className="font-semibold text-foreground">{c.labels.outcome}</dt><dd className="text-muted-foreground">{p.outcome}</dd></div>
                    </dl>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('websites_project_click', { page, project: p.slug, target: p.url })}
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2"
                    >
                      {p.host} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">{c.newTab}</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <a href={`${c.portfolio}#work`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
              {c.allProjects} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </section>

          {/* How I work */}
          <Reveal as="section" variant="scale" className="mb-14 bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">{c.stepsTitle}</h2>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {c.steps.map((step, i) => (
                <li key={step.title} className="border-t-2 border-accent/40 pt-3">
                  <span className="text-xs font-semibold tracking-wider text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <strong className="mt-1 block text-base text-primary leading-snug">{step.title}</strong>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* What's included */}
          <section className="mb-14">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">{c.includedTitle}</h2>
            </Reveal>
            <RevealStagger as="ul" className="grid gap-3 sm:grid-cols-2">
              {c.included.map((item) => (
                <Reveal key={item} as="li" variant="left" className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </Reveal>
              ))}
            </RevealStagger>
          </section>

          {/* FAQ */}
          <Reveal as="section" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">{c.faqTitle}</h2>
            <div>
              {c.faqs.map((f) => (
                <Accordion key={f.q} title={f.q}>
                  <p>{f.a}</p>
                </Accordion>
              ))}
            </div>
          </Reveal>

          {lang === 'fr' && (
            <nav aria-label="Près de chez vous" className="mb-10 text-sm text-muted-foreground">
              Près de chez vous :{' '}
              <Link to="/creation-site-web-frejus" className="text-primary underline underline-offset-2 hover:text-accent">Fréjus et Saint-Raphaël</Link>
              {' · '}
              <Link to="/creation-site-web-nice-cannes" className="text-primary underline underline-offset-2 hover:text-accent">Nice et Cannes</Link>
            </nav>
          )}

          {/* Closing CTA */}
          <Reveal as="section" variant="scale" className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-heading">{c.closingTitle}</h2>
            <p className="text-lg mb-6 leading-relaxed text-white/90">{c.closingText}</p>
            <EnquiryLink location="closing" className={`inline-flex ${enquiryClass}`} />
          </Reveal>
        </div>
      </div>
    </>
  );
};

const CreationSiteWeb = () => <WebsitesLanding lang="fr" />;

export default CreationSiteWeb;
