interface QuizJsonLdProps {
  name: string;
  description: string;
  educationalLevel?: string;
  about?: string;
  numberOfQuestions?: number;
  url: string;
}

/**
 * JSON-LD structured data for Quiz/LearningResource
 * Helps Google understand the educational content for rich snippets
 */
export function QuizJsonLd({
  name,
  description,
  educationalLevel,
  about,
  numberOfQuestions,
  url,
}: QuizJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Quiz", "LearningResource"],
    name,
    description,
    url,
    inLanguage: "en",
    isAccessibleForFree: true,
    learningResourceType: "Practice problem",
    educationalUse: "Self-assessment",
    interactivityType: "active",
    ...(educationalLevel && { educationalLevel }),
    ...(about && { about: { "@type": "Thing", name: about } }),
    ...(numberOfQuestions && { 
      hasPart: {
        "@type": "Question",
        numberOfItems: numberOfQuestions
      }
    }),
    provider: {
      "@type": "Organization",
      name: "Antony Addy - Formation Anglais",
      url: "https://www.antonyaddy.com"
    },
    author: {
      "@type": "Person",
      name: "Antony Addy",
      jobTitle: "Formateur d'anglais professionnel",
      url: "https://www.antonyaddy.com/qui-je-suis"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default QuizJsonLd;
