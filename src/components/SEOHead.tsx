import React from "react";
// Use vite-react-ssg's <Head> wrapper so we share the same react-helmet-async
// module instance (and HelmetProvider context) as the SSG runtime.
// IMPORTANT: react-helmet-async@1.3.0 silently drops meta/link passed as JSX
// children. Always pass them through the `meta` / `link` props arrays — the
// v1 API renders those deterministically.
import { Head as Helmet } from "vite-react-ssg";


import { useLocation } from "react-router-dom";
import { composeTitle, buildCanonical } from "@/lib/seo/utils";
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
  canonicalPath?: string;
  canonicalUrl?: string;
  image?: string;
  ogImage?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  locale?: string;
  type?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;
  twitterCreator?: string;
  hreflangs?: Hreflang[];
  noIndex?: boolean;
  noFollow?: boolean;
  noindex?: boolean;
  enableOrgJsonLd?: boolean;
  enableWebSiteJsonLd?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
  article?: ArticleData;
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
  jsonLd?: unknown | unknown[];
  author?: string;
  section?: string;
  tags?: string[];
};

function normalizeCanonicalUrl(url: string): string {
  try {
    const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
    const parsed = new URL(fullUrl);
    parsed.protocol = "https:";
    parsed.search = "";
    parsed.hash = "";
    let pathname = parsed.pathname;
    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    return `${parsed.origin}${pathname}`;
  } catch {
    const cleanPath =
      url === "/" ? "/" : url.replace(/\/$/, "").split("?")[0].split("#")[0];
    return `${SITE_URL}${cleanPath}`;
  }
}

function generateCanonicalUrl(path: string): string {
  return normalizeCanonicalUrl(path);
}

function generateDefaultHreflangs(canonicalUrl: string): Hreflang[] {
  return [
    { href: canonicalUrl, hrefLang: DEFAULT_LANG },
    { href: canonicalUrl, hrefLang: "x-default" },
  ];
}

function robotsValue(noIndex?: boolean, noFollow?: boolean) {
  if (!noIndex && !noFollow) return "index,follow";
  return `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;
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
    ogImage,
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
    noindex = false,
    enableOrgJsonLd = false,
    enableWebSiteJsonLd = false,
    breadcrumbItems,
    article,
    datePublished,
    dateModified,
    jsonLd,
    author = "Antony Addy",
    section,
    tags,
  } = props;

  const computedTitle = composeTitle(title, siteName);

  let finalCanonicalUrl: string;
  if (canonicalUrl) finalCanonicalUrl = buildCanonical(canonicalUrl);
  else if (canonical) finalCanonicalUrl = buildCanonical(canonical);
  else if (canonicalPath) finalCanonicalUrl = generateCanonicalUrl(canonicalPath);
  else finalCanonicalUrl = generateCanonicalUrl(location.pathname);

  const finalHreflangs =
    hreflangs && hreflangs.length > 0
      ? hreflangs
      : generateDefaultHreflangs(finalCanonicalUrl);

  const robots = robotsValue(noIndex || noindex, noFollow);

  const finalImage =
    image ||
    ogImage ||
    `${SITE_URL}/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png`;
  const finalImageAlt =
    imageAlt || "Antony Addy - Formateur d'anglais professionnel";

  // Build meta array — react-helmet-async v1.3.0 reliably renders meta
  // passed through props but silently drops it when passed as JSX children.
  type MetaTag =
    | { name: string; content: string }
    | { property: string; content: string };

  const metaTags: MetaTag[] = [];
  const push = (tag: MetaTag) => {
    const content = (tag as { content?: string }).content;
    if (content !== undefined && content !== null && content !== "") {
      metaTags.push(tag);
    }
  };

  if (description) push({ name: "description", content: description });
  if (robots) push({ name: "robots", content: robots });

  // Open Graph
  push({ property: "og:title", content: computedTitle });
  if (description) push({ property: "og:description", content: description });
  push({ property: "og:url", content: finalCanonicalUrl });
  push({ property: "og:type", content: type });
  if (siteName) push({ property: "og:site_name", content: siteName });
  if (locale) push({ property: "og:locale", content: locale });
  push({ property: "og:image", content: finalImage });
  push({ property: "og:image:alt", content: finalImageAlt });
  push({ property: "og:image:width", content: String(imageWidth) });
  push({ property: "og:image:height", content: String(imageHeight) });

  if (author) push({ property: "article:author", content: author });
  if (section) push({ property: "article:section", content: section });
  if (tags) {
    tags.forEach((t) => push({ property: "article:tag", content: t }));
  }
  if (datePublished)
    push({ property: "article:published_time", content: datePublished });
  if (dateModified)
    push({ property: "article:modified_time", content: dateModified });

  // Twitter
  push({ name: "twitter:card", content: twitterCard });
  if (twitterSite) push({ name: "twitter:site", content: twitterSite });
  if (twitterCreator) push({ name: "twitter:creator", content: twitterCreator });
  push({ name: "twitter:title", content: computedTitle });
  if (description) push({ name: "twitter:description", content: description });
  push({ name: "twitter:image", content: finalImage });
  push({ name: "twitter:image:alt", content: finalImageAlt });

  // Additional
  if (author) push({ name: "author", content: author });
  push({ name: "geo.region", content: "FR-83" });
  push({
    name: "geo.placename",
    content: "Fréjus, Var & Alpes-Maritimes, France",
  });

  // Link tags (canonical + hreflangs) — also via props for v1 reliability.
  const linkTags: Array<Record<string, string>> = [
    { rel: "canonical", href: finalCanonicalUrl },
    ...finalHreflangs.map(({ href, hrefLang }) => ({
      rel: "alternate",
      hreflang: hrefLang,
      href,
    })),
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: DEFAULT_LANG }}
        title={computedTitle}
        meta={metaTags}
        link={linkTags}
      >
        {/* children required by Head's TS signature; meta/link are passed via props */}
        <></>
      </Helmet>

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

      {Array.isArray(jsonLd)
        ? jsonLd.map((block, i) => <RawJsonLd key={i} json={block} />)
        : jsonLd
        ? <RawJsonLd json={jsonLd} />
        : null}
    </>
  );
}

export {
  jsonLdPerson,
  jsonLdOrganization,
  jsonLdWebsite,
  jsonLdProfessionalService,
  jsonLdBreadcrumbs,
  jsonLdCourse,
};
