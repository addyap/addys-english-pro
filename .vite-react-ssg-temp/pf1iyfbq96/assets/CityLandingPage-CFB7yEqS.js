import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { d as SEOHead, F as FadeInSection, A as Accordion } from "../main.mjs";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "135 rue Henri Vadon",
  addressLocality: "Fréjus",
  postalCode: "83600",
  addressRegion: "Provence-Alpes-Côte d'Azur",
  addressCountry: "FR"
};
const CityLandingPage = ({
  seo,
  city,
  h1,
  intro,
  whoIAm,
  howItWorks,
  areaServed,
  faqs,
  otherCities
}) => {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.antonyaddy.com${seo.canonical.replace(/^https?:\/\/[^/]+/, "")}#localbusiness`,
    name: `Antony Addy — Cours d'anglais ${city}`,
    description: seo.description,
    url: seo.canonical,
    telephone: "+33649829826",
    email: "formations@antonyaddy.com",
    address: ADDRESS,
    areaServed: areaServed.map((a) => ({ "@type": "City", name: a })),
    priceRange: "€€"
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: seo.title,
        description: seo.description,
        canonicalUrl: seo.canonical,
        jsonLd: [localBusinessJsonLd, faqJsonLd]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary/5 to-accent/5 py-14 sm:py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(FadeInSection, { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading leading-tight", children: h1 }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: intro })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-3 font-heading", children: "Qui je suis" }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: whoIAm })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4 font-heading", children: "Pour qui" }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed mb-4", children: "J'interviens auprès de tous les profils. Voir le détail selon votre situation :" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/anglais-entreprise", className: "block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Entreprises" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Formations sur-mesure pour vos équipes." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/anglais-cadres", className: "block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Cadres & dirigeants" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Coaching individuel et confidentiel." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/anglais-particuliers", className: "block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Particuliers" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Cours adaptés à vos objectifs personnels." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/anglais-etudiants", className: "block p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Étudiants" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Lycéens, supérieur, préparation aux examens." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-10 bg-white rounded-lg shadow-sm p-6 border border-border", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-3 font-heading", children: "Comment ça se passe" }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: howItWorks })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4 font-heading", children: "Questions fréquentes" }),
          /* @__PURE__ */ jsx("div", { children: faqs.map((f, i) => /* @__PURE__ */ jsx(Accordion, { title: f.q, children: /* @__PURE__ */ jsx("p", { children: f.a }) }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center mb-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3 font-heading", children: "Discutons de votre projet" }),
          /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Premier échange gratuit pour évaluer vos besoins et construire un programme adapté." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors", children: "Me contacter" }),
            /* @__PURE__ */ jsx(Link, { to: "/questionnaire", className: "bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors", children: "Évaluer mes besoins" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-primary mb-4 font-heading", children: "Autres zones d'intervention" }),
          /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-2", children: otherCities.map((c) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: c.path,
              className: "inline-block px-4 py-2 bg-white border border-border rounded-full text-sm text-primary hover:border-accent hover:text-accent-foreground hover:bg-accent transition-colors",
              children: c.name
            }
          ) }, c.path)) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  CityLandingPage as C
};
