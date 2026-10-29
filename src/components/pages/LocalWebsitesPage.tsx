import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion } from '@/components/Effects';
import { Reveal } from '@/components/motion/Reveal';
import { trackEvent } from '@/lib/analytics';

// Local versions of the websites page (/creation-site-web-multilingue), one per
// area, the way the English training has its city pages. Each carries its own
// local context and, where there is any, local work; the full offer, process and
// FAQ stay on the main websites page, linked from here.

const SCREENSHOTS = 'https://www.antonyaddy.com/sites-web/screenshots';
const ENQUIRY = '/contact?sujet=sites';

export interface LocalProject { slug: string; name: string; url: string; host: string; tag: string; text: string }
export interface LocalWebsitesPageProps {
  seo: { title: string; description: string; canonical: string; geoRegion: string; geoPlacename: string };
  area: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
  projectsTitle: string;
  projectsLead: string;
  projects: LocalProject[];
  areaServed: string[];
  faqs: { q: string; a: string }[];
  otherAreas: { name: string; path: string }[];
}

export const LocalWebsitesPage: React.FC<LocalWebsitesPageProps> = ({
  seo, area, h1, intro, sections, projectsTitle, projectsLead, projects, areaServed, faqs, otherAreas,
}) => {
  const page = seo.canonical.replace('https://www.antonyaddy.com/', '');
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Création de sites web multilingues — ${area}`,
      serviceType: 'Création de site web',
      provider: { '@type': 'Person', name: 'Antony Addy', url: 'https://www.antonyaddy.com' },
      areaServed: areaServed.map((name) => ({ '@type': 'City', name })),
      url: seo.canonical,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  const enquiry = (location: string) => () => trackEvent('websites_enquiry_click', { page, location, target: ENQUIRY });
  const cta = 'bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300';

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalUrl={seo.canonical}
        geoRegion={seo.geoRegion}
        geoPlacename={seo.geoPlacename}
        jsonLd={jsonLd}
      />
      <div className="inner-page inner-page--websites min-h-screen bg-background">
        <section className="inner-hero relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="aurora" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker">Création de sites web · {area}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">{h1}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={ENQUIRY} onClick={enquiry('hero')} className={cta}>Parlez-moi de votre projet</Link>
                <Link to="/creation-site-web-multilingue" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  L'offre complète
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Premier échange gratuit · Réponse sous 24 h ouvrées</p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {sections.map((s) => (
            <Reveal key={s.h2} as="section" className="mb-12 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">{s.h2}</h2>
              <span className="heading-rule is-left" aria-hidden="true" />
              {s.body.split('\n\n').map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </Reveal>
          ))}

          <section className="mb-14" aria-labelledby="local-projects-title">
            <Reveal>
              <h2 id="local-projects-title" className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-heading">{projectsTitle}</h2>
              <p className="text-muted-foreground mb-8">{projectsLead}</p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((p) => (
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
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('websites_project_click', { page, project: p.slug, target: p.url })}
                      className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2"
                    >
                      {p.host} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">(s'ouvre dans un nouvel onglet)</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/creation-site-web-multilingue" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
              Ma façon de travailler, ce qui est inclus et les délais <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </section>

          <Reveal as="section" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Questions fréquentes</h2>
            {faqs.map((f) => (
              <Accordion key={f.q} title={f.q}><p>{f.a}</p></Accordion>
            ))}
          </Reveal>

          <Reveal as="section" variant="scale" className="mb-10 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-heading">Un site à créer ou à traduire ?</h2>
            <p className="text-lg mb-6 leading-relaxed text-white/90">
              Quelques lignes suffisent : votre activité, ce que le site doit faire, les langues de vos clients
              et votre échéance. Je vous réponds sous 24 h ouvrées.
            </p>
            <Link to={ENQUIRY} onClick={enquiry('closing')} className={`inline-flex ${cta}`}>Parlez-moi de votre projet</Link>
          </Reveal>

          <nav aria-label="Autres secteurs" className="text-sm text-muted-foreground">
            Également :{' '}
            {otherAreas.map((o, i) => (
              <React.Fragment key={o.path}>
                {i > 0 && ' · '}
                <Link to={o.path} className="text-primary underline underline-offset-2 hover:text-accent">{o.name}</Link>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default LocalWebsitesPage;
