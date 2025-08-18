
import React from "react";

export function composeTitle(baseTitle?: string, siteName?: string) {
  if (!baseTitle && !siteName) return "";
  if (!siteName) return baseTitle ?? "";
  if (!baseTitle) return siteName;
  return `${baseTitle} | ${siteName}`;
}

export function buildCanonical(url: string) {
  return url;
}

export function metaBasics({ description }: { description?: string }) {
  return <>{description && <meta name="description" content={description} />}</>;
}

export function ogTags({ title, description, image, type = "website", url, siteName, locale }: any) {
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

export function twitterTags({ card = "summary_large_image", site, creator, title, description, image }: any) {
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

export function hreflangLinks(hreflangs: Array<{ href: string; hrefLang: string }>) {
  if (!hreflangs?.length) return null;
  return (
    <>
      {hreflangs.map(({ href, hrefLang }) => (
        <link key={`${hrefLang}-${href}`} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
    </>
  );
}

export function robotsDirectives({ noIndex, noFollow }: { noIndex?: boolean; noFollow?: boolean }) {
  if (!noIndex && !noFollow) return "index,follow";
  const d: string[] = [];
  d.push(noIndex ? "noindex" : "index");
  d.push(noFollow ? "nofollow" : "follow");
  return d.join(",");
}
