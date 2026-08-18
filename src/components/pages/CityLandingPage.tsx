import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { FadeInSection, Accordion } from '@/components/Effects';
import SocialProof from '@/components/SocialProof';
import { PRICE_RANGE } from '@/lib/utils';

export interface CityFAQ { q: string; a: string }
export interface CityPageProps {
  seo: { title: string; description: string; canonical: string; geoRegion?: string; geoPlacename?: string };
  city: string;
  h1: string;
  intro: string;
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
  seo, city, h1, intro, whoIAm, howItWorks, areaServed, faqs, otherCities,
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
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading leading-tight">
                {h1}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{intro}</p>
            </FadeInSection>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeInSection>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-3 font-heading">Qui je suis</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{whoIAm}</p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Pour qui</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                J'interviens auprès de tous les profils. Voir le détail selon votre situation :
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link to="/anglais-entreprise" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all">
                  <span className="font-semibold text-primary">Entreprises</span>
                  <p className="text-sm text-muted-foreground mt-1">Formations sur-mesure pour vos équipes.</p>
                </Link>
                <Link to="/anglais-cadres" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all">
                  <span className="font-semibold text-primary">Cadres &amp; dirigeants</span>
                  <p className="text-sm text-muted-foreground mt-1">Coaching individuel et confidentiel.</p>
                </Link>
                <Link to="/anglais-particuliers" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all">
                  <span className="font-semibold text-primary">Particuliers</span>
                  <p className="text-sm text-muted-foreground mt-1">Cours adaptés à vos objectifs personnels.</p>
                </Link>
                <Link to="/anglais-etudiants" className="block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all">
                  <span className="font-semibold text-primary">Étudiants</span>
                  <p className="text-sm text-muted-foreground mt-1">Lycéens, supérieur, préparation aux examens.</p>
                </Link>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="mb-10 bg-white rounded-lg shadow-sm p-6 border border-border">
              <h2 className="text-2xl font-bold text-primary mb-3 font-heading">Comment ça se passe</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{howItWorks}</p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-heading">Questions fréquentes</h2>
              <div>
                {faqs.map((f, i) => (
                  <Accordion key={i} title={f.q}>
                    <p>{f.a}</p>
                  </Accordion>
                ))}
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <SocialProof />
          </FadeInSection>

          <FadeInSection>
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 font-heading">Discutons de votre projet</h2>
              <p className="mb-6">Premier échange gratuit pour évaluer vos besoins et construire un programme adapté.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Me contacter
                </Link>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 className="text-xl font-bold text-primary mb-4 font-heading">Autres zones d'intervention</h2>
              <ul className="flex flex-wrap gap-2">
                {otherCities.map((c) => (
                  <li key={c.path}>
                    <Link
                      to={c.path}
                      className="inline-block px-4 py-2 bg-white border border-border rounded-full text-sm text-primary hover:border-accent hover:text-accent-foreground hover:bg-accent transition-colors"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default CityLandingPage;
