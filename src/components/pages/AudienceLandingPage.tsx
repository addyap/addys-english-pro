import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Accordion } from '@/components/Effects';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
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
      <div className="inner-page inner-page--training min-h-screen bg-background">
        {/* Hero */}
        <section className="inner-hero relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-12 sm:py-16">
          <div className="aurora" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <span className="inner-kicker">Ligne anglais · Selon votre profil</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
                {h1}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={ctaHref}
                  className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  {ctaLabel}
                </Link>
              </div>
              <span className="heading-rule" aria-hidden="true" />
            </Reveal>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="inner-scan" aria-label="Les bénéfices en bref">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={benefit}>
                <span>0{index + 1} · Votre progression</span>
                <p>{benefit}</p>
              </div>
            ))}
          </section>
          {/* Pour qui */}
          <Reveal as="section" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading">Pour qui</h2>
            <span className="heading-rule is-left" aria-hidden="true" />
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{pourQui}</p>
          </Reveal>

          {/* Comment je travaille */}
          <Reveal as="section" variant="scale" className="mb-12 bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Comment je travaille</h2>
            <div className="space-y-4">
              {comment.map((para, i) => (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </div>
          </Reveal>

          {/* Ce que vous obtenez */}
          <section className="mb-12">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Ce que vous obtenez</h2>
            </Reveal>
            <RevealStagger as="ul" className="space-y-3">
              {benefits.map((b, i) => (
                <Reveal key={i} as="li" variant="left" className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-foreground leading-relaxed">{b}</span>
                </Reveal>
              ))}
            </RevealStagger>
          </section>

          {/* FAQ */}
          <Reveal as="section" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading">Questions fréquentes</h2>
            <div>
              {faqs.map((f, i) => (
                <Accordion key={i} title={f.q}>
                  <p>{f.a}</p>
                </Accordion>
              ))}
            </div>
          </Reveal>

          {/* Closing CTA */}
          <Reveal>
            <SocialProof />
          </Reveal>

          <Reveal as="section" variant="scale" className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">{closingPitch}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to={ctaHref}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default AudienceLandingPage;
