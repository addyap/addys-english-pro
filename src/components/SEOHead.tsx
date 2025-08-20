
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
  metaKeywords,
  articleDateMeta,
} from "@/lib/seo/utils";
import {
  OrgJsonLd,
  WebSiteJsonLd,
  BreadcrumbJsonLd,
  ArticleJsonLd,
  RawJsonLd,
  jsonLdPerson,
  jsonLdOrganization,
  jsonLdWebsite,
  jsonLdProfessionalService,
  jsonLdBreadcrumbs,
  jsonLdCourse,
} from "@/lib/seo/jsonld";

export type Hreflang = { href: string; hrefLang: string };
export type BreadcrumbItem = { name: string; item: string };
export type ArticleData = {
  headline: string;
  description?: string;
  image?: string;
  datePublished?: string; // ISO
  dateModified?: string;  // ISO
  authorName?: string;
  type?: "Article" | "BlogPosting" | "NewsArticle";
};

export type SEOProps = {
  title?: string;
  siteName?: string;
  description?: string;
  canonical?: string;       // legacy support
  canonicalPath?: string;   // legacy support
  canonicalUrl?: string;    // preferred
  image?: string;
  locale?: string;          // e.g. "en_GB"
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;     // @handle
  twitterCreator?: string;  // @handle
  hreflangs?: Hreflang[];
  noIndex?: boolean;
  noFollow?: boolean;
  noindex?: boolean;        // legacy boolean
  enableOrgJsonLd?: boolean;
  enableWebSiteJsonLd?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  article?: ArticleData;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
  jsonLd?: unknown | unknown[]; // optional raw JSON-LD object(s)
};

export default function SEOHead(props: SEOProps) {
  const {
    title,
    siteName = "Antony Addy",
    description,
    canonical,
    canonicalPath,
    canonicalUrl,
    image,
    locale = "fr_FR",
    type = "website",
    twitterCard = "summary_large_image",
    twitterSite,
    twitterCreator,
    hreflangs = [],
    noIndex = false,
    noFollow = false,
    noindex = false, // legacy
    enableOrgJsonLd = true, // Enable by default for better SEO
    enableWebSiteJsonLd = true, // Enable by default for better SEO
    breadcrumbItems,
    article,
    keywords,
    datePublished,
    dateModified,
    jsonLd,
  } = props;

  const computedTitle = composeTitle(title, siteName);

  // Canonical URL (single source of truth) — FIX: use proper base URL
  let finalCanonicalUrl: string | undefined;
  if (canonicalUrl) {
    finalCanonicalUrl = buildCanonical(canonicalUrl);
  } else if (canonical) {
    finalCanonicalUrl = buildCanonical(canonical);
  } else if (canonicalPath) {
    // Ensure canonical path starts with base domain
    const baseUrl = "https://www.antonyaddy.com";
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    finalCanonicalUrl = buildCanonical(`${baseUrl}${cleanPath}`);
  }

  const robots = robotsDirectives({ noIndex: noIndex || noindex, noFollow });

  return (
    <>
      <Helmet>
        {/* Title + basics - NO stray variables */}
        <title>{computedTitle}</title>
        {metaBasics({ description })}
        {metaKeywords({ keywords })}

        {/* Canonical + robots - properly wrapped */}
        {finalCanonicalUrl && <link rel="canonical" href={finalCanonicalUrl} />}
        {robots && <meta name="robots" content={robots} />}

        {/* Open Graph + Twitter - all properly wrapped */}
        {ogTags({
          title: computedTitle,
          description,
          image,
          type,
          url: finalCanonicalUrl,
          siteName,
          locale,
        })}
        {twitterTags({
          card: twitterCard,
          site: twitterSite,
          creator: twitterCreator,
          title: computedTitle,
          description,
          image,
        })}

        {/* Hreflang - properly wrapped */}
        {hreflangLinks(hreflangs)}

        {/* Optional article dates - properly wrapped */}
        {articleDateMeta({ datePublished, dateModified })}
      </Helmet>

      {/* JSON-LD blocks that the project already used */}
      {enableOrgJsonLd && <OrgJsonLd siteName={siteName} />}
      {enableWebSiteJsonLd && finalCanonicalUrl && (
        <WebSiteJsonLd siteName={siteName} url={finalCanonicalUrl} />
      )}
      {breadcrumbItems && breadcrumbItems.length > 0 && (
        <BreadcrumbJsonLd items={breadcrumbItems} />
      )}
      {type === "article" && article && (
        <ArticleJsonLd
          headline={article.headline}
          description={article.description}
          image={article.image}
          datePublished={article.datePublished}
          dateModified={article.dateModified}
          authorName={article.authorName}
          type={article.type}
          url={finalCanonicalUrl}
        />
      )}

      {/* Optional raw JSON-LD passthrough(s) */}
      {Array.isArray(jsonLd)
        ? jsonLd.map((block, i) => <RawJsonLd key={i} json={block} />)
        : jsonLd
        ? <RawJsonLd json={jsonLd} />
        : null}
    </>
  );
}

// Re-export legacy factories if other code imports them from here
export {
  jsonLdPerson,
  jsonLdOrganization,
  jsonLdWebsite,
  jsonLdProfessionalService,
  jsonLdBreadcrumbs,
  jsonLdCourse,
};
