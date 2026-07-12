
import React from "react";

export function RawJsonLd({ json }: { json: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }}
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
    logo: "https://www.antonyaddy.com/icon-512.png",
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

