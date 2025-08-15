
import { useEffect } from "react";

type SEOHeadProps = {
  title?: string;
  description?: string;
  canonicalPath?: string; // Use path only, we'll make it absolute
  canonical?: string; // Legacy support
  canonicalUrl?: string; // Legacy support
  image?: string;
  robots?: string;
  noindex?: boolean; // Cleaner API
  keywords?: string[];
  jsonLd?: Record<string, any> | Record<string, any>[];
  twitterCreator?: string;
};

const SITE_URL = "https://www.antonyaddy.com";

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

function upsertLink(rel: string, href?: string, attr?: string, value?: string) {
  if (!href) return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${attr ? `[${attr}="${value}"]` : ''}`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (attr && value) el.setAttribute(attr, value);
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
  canonicalPath,
  canonical, // Legacy
  canonicalUrl, // Legacy
  image,
  robots,
  noindex = false,
  keywords,
  jsonLd,
  twitterCreator = "@antonyaddy",
  datePublished,
  dateModified,
}: SEOHeadProps & { datePublished?: string; dateModified?: string }) {
  useEffect(() => {
    if (title && title.length > 60) {
      console.warn(`SEO Warning: Title "${title}" is ${title.length} chars (max 60 recommended)`);
    }
    if (description && (description.length < 120 || description.length > 160)) {
      console.warn(`SEO Warning: Description "${description}" is ${description.length} chars (120-160 recommended)`);
    }
    
    if (title) document.title = title;

    // Compute absolute canonical URL - always use canonicalPath for proper URL generation
    let canonicalHref = "";
    if (canonicalPath) {
      canonicalHref = SITE_URL + (canonicalPath.startsWith("/") ? canonicalPath : "/" + canonicalPath);
    } else if (canonicalUrl) {
      canonicalHref = canonicalUrl; // Legacy support
    } else if (canonical) {
      canonicalHref = canonical; // Legacy support
    } else {
      canonicalHref = SITE_URL + window.location.pathname;
    }

    // Get current path for multiple uses
    const currentPath = window.location.pathname;

    // International SEO - hreflang tags
    removeAll('link[rel="alternate"]');
    upsertLink("alternate", `${SITE_URL}${currentPath}`, "hreflang", "fr");
    upsertLink("alternate", `${SITE_URL}/en${currentPath}`, "hreflang", "en");
    upsertLink("alternate", `${SITE_URL}${currentPath}`, "hreflang", "x-default");

    // Set robots meta
    const robotsContent = noindex ? "noindex,follow" : (robots || "index,follow");
    
    // Generate OG image URL based on current path
    const slug = slugFromPath(currentPath);
    const ogImage = image || `${SITE_URL}/og/${slug}-1200x630.png`;

    // Basics
    upsertMeta("name", "description", description);
    upsertLink("canonical", canonicalHref);
    upsertMeta("name", "robots", robotsContent);
    
    // Keywords
    if (keywords && keywords.length > 0) {
      upsertMeta("name", "keywords", keywords.join(", "));
    }

    // Date meta tags for blog posts and key pages
    if (datePublished) {
      upsertMeta("property", "article:published_time", datePublished);
    }
    if (dateModified) {
      upsertMeta("property", "article:modified_time", dateModified);
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
      try {
        s.text = JSON.stringify(obj);
        document.head.appendChild(s);
      } catch (e) {
        console.error("Invalid JSON-LD:", obj, e);
      }
    });
  }, [title, description, canonicalPath, canonical, canonicalUrl, image, robots, noindex, keywords, twitterCreator, JSON.stringify(jsonLd)]);

  return null;
}

// JSON‑LD helpers
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
