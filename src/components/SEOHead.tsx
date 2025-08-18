
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  composeTitle,
  buildCanonical,
  metaBasics,
  ogTags,
  twitterTags,
  hreflangLinks,
  robotsDirectives,
} from "@/lib/seo/utils";
import {
  OrgJsonLd,
  WebSiteJsonLd,
  BreadcrumbJsonLd,
  ArticleJsonLd,
} from "@/lib/seo/jsonld";

export type Hreflang = { href: string; hrefLang: string };
export type BreadcrumbItem = { name: string; item: string };
export type ArticleData = {
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  type?: "Article" | "BlogPosting" | "NewsArticle";
};

export type SEOProps = {
  title?: string;
  siteName?: string;
  description?: string;
  canonical?: string;
  image?: string;
  locale?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;
  twitterCreator?: string;
  hreflangs?: Hreflang[];
  noIndex?: boolean;
  noFollow?: boolean;
  enableOrgJsonLd?: boolean;
  enableWebSiteJsonLd?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  article?: ArticleData;
};

export default function SEOHead(props: SEOProps) {
  const {
    title,
    siteName,
    description,
    canonical,
    image,
    locale = "en_GB",
    type = "website",
    twitterCard = "summary_large_image",
    twitterSite,
    twitterCreator,
    hreflangs = [],
    noIndex = false,
    noFollow = false,
    enableOrgJsonLd = false,
    enableWebSiteJsonLd = false,
    breadcrumbItems,
    article,
  } = props;

  const computedTitle = composeTitle(title, siteName);
  const canonicalUrl = canonical ? buildCanonical(canonical) : undefined;
  const robots = robotsDirectives({ noIndex, noFollow });

  return (
    <>
      <Helmet>
        <title>{computedTitle}</title>
        {metaBasics({ description })}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        {robots && <meta name="robots" content={robots} />}
        {ogTags({ title: computedTitle, description, image, type, url: canonicalUrl, siteName, locale })}
        {twitterTags({ card: twitterCard, site: twitterSite, creator: twitterCreator, title: computedTitle, description, image })}
        {hreflangLinks(hreflangs)}
      </Helmet>

      {enableOrgJsonLd && <OrgJsonLd siteName={siteName} />}
      {enableWebSiteJsonLd && canonicalUrl && <WebSiteJsonLd siteName={siteName} url={canonicalUrl} />}
      {breadcrumbItems && breadcrumbItems.length > 0 && <BreadcrumbJsonLd items={breadcrumbItems} />}
      {type === "article" && article && (
        <ArticleJsonLd
          headline={article.headline}
          description={article.description}
          image={article.image}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          authorName={article.authorName}
          type={article.type}
          url={canonicalUrl}
        />
      )}
    </>
  );
}

// Export legacy helpers for backward compatibility
export const jsonLdPerson = (opts?: {
  name?: string; url?: string; image?: string; sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: opts?.name ?? "Antony Addy",
  url: opts?.url ?? "https://www.antonyaddy.com",
  image: opts?.image ?? "/og/antonyaddy-card.png",
  sameAs: opts?.sameAs ?? [],
});

export const jsonLdOrganization = (opts?: {
  name?: string; url?: string; logo?: string; sameAs?: string[]; telephone?: string; email?: string; address?: object;
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
    addressLocality: "Alpes-Maritimes"
  },
  sameAs: opts?.sameAs ?? [
    "https://www.linkedin.com/in/antonyaddy",
    "https://twitter.com/antonyaddy"
  ],
});

export const jsonLdWebsite = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Antony Addy — Formateur d'anglais",
  url: "https://www.antonyaddy.com",
  description: "Formations d'anglais professionnel à distance ou en présentiel dans les Alpes-Maritimes",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.antonyaddy.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const jsonLdProfessionalService = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Formation d'anglais professionnel",
  description: "Services de formation en anglais professionnel, coaching linguistique et cours particuliers",
  provider: jsonLdOrganization(),
  areaServed: {
    "@type": "Place",
    name: "France"
  },
  serviceType: [
    "Formation d'anglais professionnel",
    "Coaching linguistique",
    "Cours particuliers d'anglais",
    "Préparation aux certifications"
  ]
});

export const jsonLdBreadcrumbs = (items: Array<{ name: string; url: string }>) => ({
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
  name: string; description: string; url: string; providerName?: string; providerUrl?: string;
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
