import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SEOHead from '../components/SEOHead';
import { EXPERIENCE_FLOOR, PRICE_RANGE, CONTENT_LAST_REVIEWED_ISO } from '@/lib/utils';
import { TypingText } from '../components/TypingText';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';
import { TestimonialSkeleton } from '../components/SkeletonLoader';
import { testimonials } from '@/data/testimonials';
import { PLATFORM_COUNT } from '@/data/platforms';

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading testimonials
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);


  // Business node for this page. Shares the @id of the canonical ProfessionalService
  // declared in Home.tsx's @graph, so Google resolves one business rather than two
  // competing entities.
  //
  // ⚠️ This used to carry `aggregateRating: 5/5` and stamp `ratingValue: "5"` on
  // every review. Those stars were invented: the quotes below are LinkedIn
  // recommendations, and LinkedIn recommendations carry no rating at all. That
  // breached Google's review-snippet policy on two counts (self-serving reviews
  // about your own business, and ratings not supplied by the reviewer), and sat
  // badly with art. L.111-7-2 C. conso., which requires a stated verification
  // method and a date per review. Do not reintroduce ratings unless they come
  // from a real rated source (Google Business Profile, Trustpilot, Pages Jaunes),
  // in which case use that platform's own widget instead.
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.antonyaddy.com/#business",
    "name": "Antony Addy",
    "description": "Formations d'anglais professionnel par un formateur britannique certifié FPA",
    "url": "https://www.antonyaddy.com",
    "telephone": "+33649829826",
    "address": {
      "@type": "PostalAddress",
      "@id": "https://www.antonyaddy.com/#address",
      "streetAddress": "135 rue Henri Vadon",
      "addressLocality": "Fréjus",
      "postalCode": "83600",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "addressCountry": "FR"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Var" },
      { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
      { "@type": "Country", "name": "France" }
    ],
    "priceRange": PRICE_RANGE
  };

  // Plain list of quotations — no @type: Review, so no rating is implied.
  const testimonialsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Recommandations LinkedIn reçues par Antony Addy",
    "numberOfItems": testimonials.length,
    "itemListElement": testimonials.map((t, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Quotation",
        "text": t.quote,
        "spokenByCharacter": { "@type": "Person", "name": t.name },
      },
    })),
  };

  return (
    <>
      <SEOHead 
        title="Avis Clients | Formations Anglais Antony Addy"
        description="Recommandations LinkedIn de professionnels formés par Antony Addy : cadres, étudiants, notaires, conseillers de vente. Formations d'anglais professionnel, Var et Alpes-Maritimes."
        keywords={["témoignages formation anglais", "avis Antony Addy", "retours clients", "satisfaction apprenants", "avis formation anglais"]}
        canonicalUrl="https://www.antonyaddy.com/temoignages"
        dateModified={CONTENT_LAST_REVIEWED_ISO}
        enableOrgJsonLd
        enableWebSiteJsonLd
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Témoignages clients formations anglais Antony Addy"
        jsonLd={[businessSchema, testimonialsJsonLd]}
      />
      
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Header */}
          <Reveal className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading leading-tight">
              Témoignages
            </h1>
            <TypingText
              texts={[
                "Ce qu'ils disent de mes formations...",
                "Des retours authentiques.",
                "Ils m'ont fait confiance.",
              ]}
              speed={50}
              pause={1800}
              className="text-lg font-medium text-center text-muted-foreground mb-6 block"
            />
            <span className="heading-rule" aria-hidden="true" />
          </Reveal>

          {/* Intro Section */}
          <Reveal as="div" variant="scale" className="bg-card border border-border rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-3 font-heading">
              Des avis authentiques de professionnels
            </h2>
            <div className="text-muted-foreground space-y-3 font-body">
              <p>
                Depuis plus de <strong className="text-primary">{EXPERIENCE_FLOOR} ans</strong>, j'accompagne des adultes de tous horizons dans leur apprentissage de l'anglais. Ces témoignages proviennent de <strong className="text-primary">LinkedIn</strong> et reflètent l'expérience réelle de mes apprenants : cadres, étudiants en école de commerce, conseillers de vente, assistants de direction, notaires, préparateurs physiques...
              </p>
              <p>
                Ce qui revient souvent dans leurs retours : une <strong className="text-primary">pédagogie adaptée</strong> à chaque profil, une <strong className="text-primary">atmosphère bienveillante</strong> et motivante, et des <strong className="text-primary">progrès concrets</strong> dans leur pratique professionnelle de l'anglais.
              </p>
            </div>
            {/* No "avis vérifiés" and no average score: these are LinkedIn
                recommendations, not rated reviews, and art. L.111-7-2 C. conso.
                requires a stated verification method and a date per review before
                either claim can be made. Naming the source is both honest and,
                since LinkedIn recommendations are publicly checkable under a real
                name, more convincing than an unsourced 5/5. */}
            <div className="flex flex-wrap gap-3 mt-4 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{testimonials.length} recommandations LinkedIn</span>
              <span className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full">Formateur FPA certifié</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Chaque recommandation ci-dessous a été publiée par son auteur sur LinkedIn, sous son
              nom et son profil professionnel, et est consultable publiquement depuis{' '}
              <a
                href="https://www.linkedin.com/in/antonyaddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                mon profil
              </a>
              . Elles sont reproduites ici telles quelles, sans modification.
            </p>
          </Reveal>

          {/* Testimonials */}
          <RevealStagger className="space-y-6">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TestimonialSkeleton key={index} />
              ))
            ) : (
              testimonials.map((testimonial, index) => (
                <Reveal as={Card} key={index} variant="up" className="border-red-500 border-2 bg-card transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="text-red-500 text-4xl mb-2">"</div>
                    <p className="text-lg italic text-card-foreground leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold text-primary text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </Reveal>
              ))
            )}
          </RevealStagger>

          {/* CTA Section */}
          <Reveal as="div" variant="scale" className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">
              Prêt à rejoindre ces apprenants satisfaits ?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Découvrez mes <Link to="/offres-de-formation" className="text-accent hover:underline font-medium">formations d'anglais personnalisées</Link> ou entraînez-vous sur mes <Link to="/ressources-en-ligne" className="text-accent hover:underline font-medium">{PLATFORM_COUNT} plateformes gratuites</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Me contacter
              </Link>
              <Link to="/ressources-en-ligne" className="bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
                Explorer les plateformes gratuites
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
