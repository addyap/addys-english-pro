import React from "react";

type OgInput = {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  url?: string;
  siteName?: string;
  locale?: string;
};

type TwitterInput = {
  card?: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
};

export function composeTitle(baseTitle?: string, siteName?: string) {
  if (!baseTitle && !siteName) return "";
  if (!siteName) return baseTitle ?? "";
  if (!baseTitle) return siteName;
  return `${baseTitle} | ${siteName}`;
}

// Keep whatever normalization you previously had; default pass-through.
export function buildCanonical(url: string) {
  return url;
}

export function metaBasics({ description }: { description?: string }) {
  return <>{description && <meta name="description" content={description} />}</>;
}

export function metaKeywords({ keywords }: { keywords?: string[] }) {
  if (!keywords || keywords.length === 0) return null;
  return <meta name="keywords" content={keywords.join(", ")} />;
}

export function articleDateMeta({
  datePublished,
  dateModified,
}: {
  datePublished?: string;
  dateModified?: string;
}) {
  return (
    <>
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {dateModified && <meta property="article:modified_time" content={dateModified} />}
    </>
  );
}

export function ogTags({
  title,
  description,
  image,
  type = "website",
  url,
  siteName,
  locale,
}: OgInput) {
  return (
    <>
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={type} />
      {siteName && <meta property="og:site_name" content={siteName} />}
      {locale && <meta property="og:locale" content={locale} />}
      {image && <meta property="og:image" content={image} />}
    </>
  );
}

export function twitterTags({
  card = "summary_large_image",
  site,
  creator,
  title,
  description,
  image,
}: TwitterInput) {
  return (
    <>
      <meta name="twitter:card" content={card} />
      {site && <meta name="twitter:site" content={site} />}
      {creator && <meta name="twitter:creator" content={creator} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

export function hreflangLinks(
  hreflangs: Array<{ href: string; hrefLang: string }>
) {
  if (!hreflangs?.length) return null;
  return (
    <>
      {hreflangs.map(({ href, hrefLang }) => (
        <link key={`${hrefLang}-${href}`} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
    </>
  );
}

export function robotsDirectives({
  noIndex,
  noFollow,
}: {
  noIndex?: boolean;
  noFollow?: boolean;
}) {
  if (!noIndex && !noFollow) return "index,follow";
  const d: string[] = [];
  d.push(noIndex ? "noindex" : "index");
  d.push(noFollow ? "nofollow" : "follow");
  return d.join(",");
}
