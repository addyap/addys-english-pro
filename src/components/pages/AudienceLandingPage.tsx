import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { FadeInSection, Accordion } from '@/components/Effects';
import SocialProof from '@/components/SocialProof';

export interface AudienceFAQ { q: string; a: string }
export interface AudiencePageProps {
  seo: { title: string; description: string; canonical: string };
  h1: string;
  sub: string;
  pourQui: string;
  comment: string[];
  benefits: string[];
  faqs: AudienceFAQ[];
  closingPitch: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export const AudienceLandingPage: React.FC<AudiencePageProps> = ({
  seo, h1, sub, pourQui, comment, benefits, faqs, closingPitch,
  ctaHref = '/contact', ctaLabel = 'Demander un devis',
}) => {
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
        jsonLd={faqJsonLd}
      />
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeInSection>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading leading-tight">
                {h1}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={ctaHref}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  {ctaLabel}
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Pour qui */}
          <FadeInSection>
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">Pour qui</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{pourQui}</p>
            </section>
          </FadeInSection>

          {/* Comment je travaille */}
          <FadeInSection>
            <section className="mb-12 bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Comment je travaille</h2>
              <div className="space-y-4">
                {comment.map((para, i) => (
                  <p key={i} className="text-base text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Ce que vous obtenez */}
          <FadeInSection>
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Ce que vous obtenez</h2>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base text-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Questions fréquentes</h2>
              <div>
                {faqs.map((f, i) => (
                  <Accordion key={i} title={f.q}>
                    <p>{f.a}</p>
                  </Accordion>
                ))}
              </div>
            </section>
          </FadeInSection>

          {/* Closing CTA */}
          <FadeInSection>
            <SocialProof />
          </FadeInSection>

          <FadeInSection>
            <section className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center">
              <p className="text-lg sm:text-xl mb-6 leading-relaxed">{closingPitch}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={ctaHref}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  {ctaLabel}
                </Link>
              </div>
            </section>
          </FadeInSection>
        </div>
      </div>
    </>
  );
};

export default AudienceLandingPage;
