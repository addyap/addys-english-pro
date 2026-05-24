
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
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

// Site-wide constants
const SITE_URL = "https://www.antonyaddy.com";
const SITE_NAME = "Antony Addy";
const DEFAULT_LOCALE = "fr_FR";
const DEFAULT_LANG = "fr";

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
  imageAlt?: string;        // Alt text for social image
  imageWidth?: number;      // Image dimensions for OG
  imageHeight?: number;
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
  author?: string;          // Author name for articles
  section?: string;         // Article section/category
  tags?: string[];          // Article tags
};

/**
 * Normalizes a URL for canonical usage:
 * - Always https
 * - No trailing slash (except root)
 * - Strip query params and hash
 */
function normalizeCanonicalUrl(url: string): string {
  try {
    // Handle relative paths
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
    const parsed = new URL(fullUrl);
    
    // Ensure https
    parsed.protocol = 'https:';
    
    // Strip query params and hash
    parsed.search = '';
    parsed.hash = '';
    
    // Remove trailing slash except for root
    let pathname = parsed.pathname;
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    
    return `${parsed.origin}${pathname}`;
  } catch {
    // Fallback for invalid URLs
    const cleanPath = url === "/" ? "/" : url.replace(/\/$/, "").split('?')[0].split('#')[0];
    return `${SITE_URL}${cleanPath}`;
  }
}

/**
 * Generates a clean canonical URL from a path
 */
function generateCanonicalUrl(path: string): string {
  return normalizeCanonicalUrl(path);
}

/**
 * Generates default self-referencing hreflangs
 * Site is primarily French, so we use fr + x-default
 */
function generateDefaultHreflangs(canonicalUrl: string): Hreflang[] {
  return [
    { href: canonicalUrl, hrefLang: DEFAULT_LANG },
    { href: canonicalUrl, hrefLang: "x-default" },
  ];
}

export default function SEOHead(props: SEOProps) {
  const location = useLocation();
  const {
    title,
    siteName = SITE_NAME,
    description,
    canonical,
    canonicalPath,
    canonicalUrl,
    image,
    imageAlt,
    imageWidth = 1200,
    imageHeight = 630,
    locale = DEFAULT_LOCALE,
    type = "website",
    twitterCard = "summary_large_image",
    twitterSite = "@antonyaddy",
    twitterCreator = "@antonyaddy",
    hreflangs,
    noIndex = false,
    noFollow = false,
    noindex = false, // legacy
    enableOrgJsonLd = false,
    enableWebSiteJsonLd = false,
    breadcrumbItems,
    article,
    keywords,
    datePublished,
    dateModified,
    jsonLd,
    author = "Antony Addy",
    section,
    tags,
  } = props;

  const computedTitle = composeTitle(title, siteName);

  // Auto-generate canonical URL from current path if not provided
  let finalCanonicalUrl: string;
  if (canonicalUrl) {
    finalCanonicalUrl = buildCanonical(canonicalUrl);
  } else if (canonical) {
    finalCanonicalUrl = buildCanonical(canonical);
  } else if (canonicalPath) {
    finalCanonicalUrl = generateCanonicalUrl(canonicalPath);
  } else {
    // Auto-generate from current location
    finalCanonicalUrl = generateCanonicalUrl(location.pathname);
  }

  // Auto-generate hreflangs if not provided
  const finalHreflangs = hreflangs && hreflangs.length > 0 
    ? hreflangs 
    : generateDefaultHreflangs(finalCanonicalUrl);

  const robots = robotsDirectives({ noIndex: noIndex || noindex, noFollow });

  // Default image if not provided
  const finalImage = image || `${SITE_URL}/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png`;
  const finalImageAlt = imageAlt || "Antony Addy - Formateur d'anglais professionnel";

  return (
    <>
      <Helmet htmlAttributes={{ lang: DEFAULT_LANG }}>
        {/* Title + basics */}
        <title>{computedTitle}</title>
        {metaBasics({ description })}
        {metaKeywords({ keywords })}

        {/* Canonical (always present) */}
        <link rel="canonical" href={finalCanonicalUrl} />
        
        {/* Robots */}
        {robots && <meta name="robots" content={robots} />}

        {/* Open Graph */}
        {ogTags({
          title: computedTitle,
          description,
          image: finalImage,
          type,
          url: finalCanonicalUrl,
          siteName,
          locale,
        })}
        <meta property="og:image:alt" content={finalImageAlt} />
        <meta property="og:image:width" content={String(imageWidth)} />
        <meta property="og:image:height" content={String(imageHeight)} />
        {author && <meta property="article:author" content={author} />}
        {section && <meta property="article:section" content={section} />}
        {tags && tags.map((tag, i) => <meta key={i} property="article:tag" content={tag} />)}

        {/* Twitter Cards */}
        {twitterTags({
          card: twitterCard,
          site: twitterSite,
          creator: twitterCreator,
          title: computedTitle,
          description,
          image: finalImage,
        })}
        <meta name="twitter:image:alt" content={finalImageAlt} />

        {/* Hreflangs (always present for self-referencing) */}
        {hreflangLinks(finalHreflangs)}

        {/* Article dates */}
        {articleDateMeta({ datePublished, dateModified })}

        {/* Additional SEO meta tags */}
        <meta name="author" content={author} />
        <meta name="geo.region" content="FR-83" />
        <meta name="geo.placename" content="Fréjus, Var & Alpes-Maritimes, France" />
      </Helmet>

      {/* JSON-LD blocks */}
      {enableOrgJsonLd && <OrgJsonLd siteName={siteName} />}
      {enableWebSiteJsonLd && (
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
