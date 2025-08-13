
import { useEffect } from "react";

type SEOHeadProps = {
  title?: string;
  description?: string;
  canonical?: string;
  canonicalUrl?: string; // Support both for backwards compatibility
  image?: string;
  robots?: string;
  keywords?: string[]; // Add keywords support
  jsonLd?: Record<string, any> | Record<string, any>[];
  twitterCreator?: string; // e.g. @antonyaddy
};

const SITE_URL = "https://antonyaddy.com";

function slugFromPath(pathname: string) {
  if (!pathname || pathname === "/") return "home";
  return pathname.split("?")[0].split("#")[0].replace(/\//g, "-").replace(/^-+/, "").toLowerCase();
}

function upsertMeta(attr: "name" | "property", key: string, value?: string) {
  if (!value) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel: string, href?: string) {
  if (!href) return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function removeAll(selector: string) {
  document.head.querySelectorAll(selector).forEach((n) => n.remove());
}

export default function SEOHead({
  title = "Antony Addy — English Training & Coaching",
  description = "Professional English training for adults: business English, coaching, and online learning.",
  canonical = "https://antonyaddy.com",
  canonicalUrl, // Support backwards compatibility
  image,
  robots = "index,follow",
  keywords,
  jsonLd,
  twitterCreator = "@antonyaddy",
}: SEOHeadProps) {
  useEffect(() => {
    if (title) document.title = title;

    // Use canonicalUrl if provided, otherwise canonical
    const canonicalHref = canonicalUrl || canonical;
    
    // Generate OG image URL based on current path
    const currentPath = window.location.pathname;
    const slug = slugFromPath(currentPath);
    const ogImage = image || `${SITE_URL}/og/${slug}-1200x630.png`;

    // Basics
    upsertMeta("name", "description", description);
    upsertLink("canonical", canonicalHref);
    upsertMeta("name", "robots", robots);
    
    // Keywords
    if (keywords && keywords.length > 0) {
      upsertMeta("name", "keywords", keywords.join(", "));
    }

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalHref);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:creator", twitterCreator);

    // JSON‑LD
    removeAll('script[data-seohead="jsonld"]');
    const items = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
    items.forEach((obj) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seohead = "jsonld";
      s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [title, description, canonical, canonicalUrl, image, robots, keywords, twitterCreator, JSON.stringify(jsonLd)]);

  return null;
}

// JSON‑LD helpers
export const jsonLdPerson = (opts?: {
  name?: string; url?: string; image?: string; sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: opts?.name ?? "Antony Addy",
  url: opts?.url ?? "https://antonyaddy.com",
  image: opts?.image ?? "/og/antonyaddy-card.png",
  sameAs: opts?.sameAs ?? [],
});

export const jsonLdOrganization = (opts?: {
  name?: string; url?: string; logo?: string; sameAs?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: opts?.name ?? "Antony Addy — English Training",
  url: opts?.url ?? "https://antonyaddy.com",
  logo: opts?.logo ?? "/og/antonyaddy-card.png",
  sameAs: opts?.sameAs ?? [],
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
    sameAs: opts.providerUrl ?? "https://antonyaddy.com",
  },
});
