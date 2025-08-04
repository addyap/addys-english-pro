
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, keywords, ogImage }: SEOHeadProps) => {
  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Antony Addy",
          "jobTitle": "Formateur Professionnel d'Adultes certifié",
          "description": "Prestataire de formation indépendant spécialisé en anglais professionnel",
          "url": "https://antonyaddy.com",
          "email": "hello@antonyaddy.com",
          "areaServed": {
            "@type": "Place",
            "name": "France"
          },
          "hasOccupation": {
            "@type": "Occupation",
            "name": "English Language Trainer",
            "occupationLocation": {
              "@type": "AdministrativeArea",
              "name": "Var, France"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
