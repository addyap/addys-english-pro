
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  jsonLd?: object;
  robots?: string;
}

export const SEOHead = ({
  title = "Antony Addy – Formateur d'anglais pour adultes",
  description = "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes. CPF via centres certifiés Qualiopi.",
  keywords = ["Anglais professionnel", "Formateur anglais", "Antony Addy", "CPF", "Formation d'anglais", "Cours d'anglais en ligne", "Anglais pour adultes"],
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : "https://antonyaddy.com",
  ogImage = "/social-preview.jpg",
  jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Antony Addy",
    "url": "https://antonyaddy.com"
  },
  robots = "index, follow"
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
