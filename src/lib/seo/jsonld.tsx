
import React from "react";

export function RawJsonLd({ json }: { json: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/** Organization JSON-LD — keep values identical to what you used before */
export function OrgJsonLd({ siteName }: { siteName?: string }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName ?? "Antony Addy",
    url: "https://www.antonyaddy.com",
    logo: "https://www.antonyaddy.com/assets/logo-512.png",
    sameAs: [],
  };
  return <RawJsonLd json={json} />;
}

/** WebSite JSON-LD */
export function WebSiteJsonLd({
  siteName,
  url,
}: {
  siteName?: string;
  url: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName ?? "Antony Addy",
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <RawJsonLd json={json} />;
}

/** Breadcrumb JSON-LD */
export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; item: string }>;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
  return <RawJsonLd json={json} />;
}

/** Article / BlogPosting JSON-LD */
export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  type = "Article",
  url,
}: {
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  type?: "Article" | "BlogPosting" | "NewsArticle";
  url?: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    url,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: authorName ? { "@type": "Person", name: authorName } : undefined,
    mainEntityOfPage: url ? { "@type": "WebPage", "@id": url } : undefined,
  };
  return <RawJsonLd json={json} />;
}

/* Legacy helper factories (return JSON objects) */
export const jsonLdPerson = (opts?: {
  name?: string;
  url?: string;
  image?: string;
  sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: opts?.name ?? "Antony Addy",
  url: opts?.url ?? "https://www.antonyaddy.com",
  image: opts?.image ?? "/og/antonyaddy-card.png",
  sameAs: opts?.sameAs ?? [],
});

export const jsonLdOrganization = (opts?: {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  telephone?: string;
  email?: string;
  address?: object;
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: opts?.name ?? "Antony Addy — English Training",
  url: opts?.url ?? "https://www.antonyaddy.com",
  logo: opts?.logo ?? "https://www.antonyaddy.com/og/antonyaddy-card.png",
  telephone: opts?.telephone ?? "+33 6 XX XX XX XX",
  email: opts?.email ?? "contact@antonyaddy.com",
  address: opts?.address ?? {
    "@type": "PostalAddress",
    addressCountry: "FR",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressLocality: "Alpes-Maritimes",
  },
  sameAs: opts?.sameAs ?? [
    "https://www.linkedin.com/in/antonyaddy",
    "https://twitter.com/antonyaddy",
  ],
});

export const jsonLdWebsite = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Antony Addy — Formateur d'anglais",
  url: "https://www.antonyaddy.com",
  description:
    "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.antonyaddy.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

export const jsonLdProfessionalService = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Formation d'anglais professionnel",
  description:
    "Services de formation en anglais professionnel, coaching linguistique et cours particuliers",
  provider: jsonLdOrganization(),
  areaServed: { "@type": "Place", name: "France" },
  serviceType: [
    "Formation d'anglais professionnel",
    "Coaching linguistique",
    "Cours particuliers d'anglais",
    "Préparation aux certifications",
  ],
});

export const jsonLdBreadcrumbs = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const jsonLdCourse = (opts: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  providerUrl?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: opts.name,
  description: opts.description,
  url: opts.url,
  provider: {
    "@type": "Organization",
    name: opts.providerName ?? "Antony Addy",
    sameAs: opts.providerUrl ?? "https://www.antonyaddy.com",
  },
});

// FAQ Schema
export const jsonLdFAQ = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Review Schema
export const jsonLdReview = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Formation Anglais Professionnel",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    reviewCount: reviews.length,
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
    },
  })),
});
