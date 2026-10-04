import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { Accordion } from '@/components/Effects';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import SocialProof from '@/components/SocialProof';
import { PRICE_RANGE } from '@/lib/utils';

export interface CityFAQ { q: string; a: string }
export interface CitySection { h2: string; body: string }
export interface CityPageProps {
  seo: { title: string; description: string; canonical: string; geoRegion?: string; geoPlacename?: string };
  city: string;
  h1: string;
  intro: string;
  /**
   * City-specific context (local economy, sectors, why professional English
   * matters here). Rendered right below the hero. Kept genuinely unique per
   * city so the location pages don't read as near-duplicate templates.
   */
  localSections?: CitySection[];
  whoIAm: string;
  howItWorks: string;
  areaServed: string[];
  faqs: CityFAQ[];
  otherCities: { name: string; path: string }[];
}

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '135 rue Henri Vadon',
  addressLocality: 'Fréjus',
  postalCode: '83600',
  addressRegion: 'Provence-Alpes-Côte d\'Azur',
  addressCountry: 'FR',
};

export const CityLandingPage: React.FC<CityPageProps> = ({
  seo, city, h1, intro, localSections = [], whoIAm, howItWorks, areaServed, faqs, otherCities,
}) => {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://www.antonyaddy.com${seo.canonical.replace(/^https?:\/\/[^/]+/, '')}#localbusiness`,
    name: `Antony Addy — Cours d'anglais ${city}`,
    description: seo.description,
    url: seo.canonical,
    telephone: '+33649829826',
    email: 'formations@antonyaddy.com',
    address: ADDRESS,
    areaServed: areaServed.map(a => ({ '@type': 'City', name: a })),
    priceRange: PRICE_RANGE,
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalUrl={seo.canonical}
        geoRegion={seo.geoRegion}
        geoPlacename={seo.geoPlacename}
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
      />
      <div className="inner-page inner-page--city min-h-screen bg-background">
        <section className="inner-hero relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="aurora" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker">Ligne anglais · {city}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                {h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{intro}</p>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {localSections.map((s, i) => (
            <Reveal as="section" key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-3 font-heading">{s.h2}</h2>
              <span className="heading-rule is-left" aria-hidden="true" />
              <p className="mt-4 text-base text-muted-foreground leading-relaxed whitespace-pre-line">{s.body}</p>
            </Reveal>
          ))}

          <Reveal as="section" className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-3 font-heading">Qui je suis</h2>
            <span className="heading-rule is-left" aria-hidden="true" />
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">{whoIAm}</p>
          </Reveal>

          <section className="mb-10">
            <Reveal>
              <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Pour qui</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                J'interviens auprès de tous les profils. Voir le détail selon votre situation :
              </p>
            </Reveal>
            <RevealStagger className="grid sm:grid-cols-2 gap-3">
              <Reveal variant="up" as={Link} to="/anglais-entreprise" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="font-semibold text-primary">Entreprises</span>
                <p className="text-sm text-muted-foreground mt-1">Formations sur-mesure pour vos équipes.</p>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-cadres" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="font-semibold text-primary">Cadres &amp; dirigeants</span>
                <p className="text-sm text-muted-foreground mt-1">Coaching individuel et confidentiel.</p>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-particuliers" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="font-semibold text-primary">Particuliers</span>
                <p className="text-sm text-muted-foreground mt-1">Cours adaptés à vos objectifs personnels.</p>
              </Reveal>
              <Reveal variant="up" as={Link} to="/anglais-etudiants" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <span className="font-semibold text-primary">Étudiants</span>
                <p className="text-sm text-muted-foreground mt-1">Supérieur : BTS, Bachelor, Master, certifications.</p>
              </Reveal>
            </RevealStagger>
          </section>

          <Reveal as="section" variant="scale" className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-border">
            <h2 className="text-2xl font-bold text-primary mb-3 font-heading">Comment ça se passe</h2>
            <p className="text-base text-muted-foreground leading-relaxed">{howItWorks}</p>
          </Reveal>

          <Reveal as="section" className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Questions fréquentes</h2>
            <div>
              {faqs.map((f, i) => (
                <Accordion key={i} title={f.q}>
                  <p>{f.a}</p>
                </Accordion>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <SocialProof />
          </Reveal>

          <Reveal as="section" variant="scale" className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 font-heading">Discutons de votre projet</h2>
            <p className="mb-6">Premier échange gratuit pour évaluer vos besoins et construire un programme adapté.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                Me contacter
              </Link>
            </div>
          </Reveal>

          <Reveal as="section">
            <h2 className="text-xl font-bold text-primary mb-4 font-heading">Autres zones d'intervention</h2>
            <ul className="flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <li key={c.path}>
                  <Link
                    to={c.path}
                    className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm text-primary hover:border-accent hover:text-accent-foreground hover:bg-accent hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default CityLandingPage;
