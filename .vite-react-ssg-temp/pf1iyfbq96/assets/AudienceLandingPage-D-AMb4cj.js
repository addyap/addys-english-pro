import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { d as SEOHead, F as FadeInSection, A as Accordion } from "../main.mjs";
const AudienceLandingPage = ({
  seo,
  h1,
  sub,
  pourQui,
  comment,
  benefits,
  faqs,
  closingPitch,
  ctaHref = "/contact",
  ctaLabel = "Demander un devis"
}) => {
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
        jsonLd: faqJsonLd
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: /* @__PURE__ */ jsxs(FadeInSection, { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 font-heading leading-tight", children: h1 }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed", children: sub }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: ctaHref,
              className: "bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors",
              children: ctaLabel
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/questionnaire",
              className: "bg-white text-primary border border-primary/20 px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors",
              children: "Évaluer mes besoins"
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16", children: [
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-primary mb-4 font-heading", children: "Pour qui" }),
          /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground leading-relaxed", children: pourQui })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-12 bg-white rounded-lg shadow-sm p-6 sm:p-8 border border-border", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading", children: "Comment je travaille" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: comment.map((para, i) => /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: para }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading", children: "Ce que vous obtenez" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: benefits.map((b, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-accent shrink-0 mt-0.5", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "text-base text-foreground leading-relaxed", children: b })
          ] }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-primary mb-6 font-heading", children: "Questions fréquentes" }),
          /* @__PURE__ */ jsx("div", { children: faqs.map((f, i) => /* @__PURE__ */ jsx(Accordion, { title: f.q, children: /* @__PURE__ */ jsx("p", { children: f.a }) }, i)) })
        ] }) }),
        /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 sm:p-10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl mb-6 leading-relaxed", children: closingPitch }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: ctaHref,
                className: "bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors",
                children: ctaLabel
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/questionnaire",
                className: "bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors",
                children: "Évaluer mes besoins"
              }
            )
          ] })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  AudienceLandingPage as A
};
