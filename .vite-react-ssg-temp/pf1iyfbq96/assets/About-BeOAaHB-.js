import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Award, Target, Factory, Briefcase, School, University, Building, Globe, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { d as SEOHead, F as FadeInSection, b as WHATSAPP_PREFILLED_URL, t as trackEvent } from "../main.mjs";
import "vite-react-ssg";
import "react";
import "@tanstack/react-query";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "framer-motion";
import "i18next";
import "react-i18next";
import "i18next-browser-languagedetector";
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const About = () => {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antony Addy",
    "jobTitle": "Formateur Professionnel d'Adultes certifié",
    "description": "Formateur d'anglais professionnel avec plus de 20 ans d'expérience",
    "url": "https://www.antonyaddy.com/qui-je-suis",
    "email": "formations@antonyaddy.com",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Var" },
      { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
      { "@type": "Country", "name": "France" }
    ],
    "knowsLanguage": ["fr", "en"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "English Language Trainer",
      "occupationLocation": {
        "@type": "AdministrativeArea",
        "name": "Var & Alpes-Maritimes, France"
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Antony Addy | Formateur Anglais FPA Certifié",
        description: "Britannique natif certifié Formateur Professionnel d'Adultes depuis 2017. Plus de 20 ans d'expérience en formation anglais professionnel.",
        keywords: ["Antony Addy", "formateur anglais", "FPA certifié", "britannique natif", "formation adultes", "Var", "Alpes-Maritimes", "Fréjus"],
        canonicalUrl: "https://www.antonyaddy.com/qui-je-suis",
        image: "https://www.antonyaddy.com/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png",
        imageAlt: "Antony Addy, formateur d'anglais certifié FPA",
        enableOrgJsonLd: true,
        enableWebSiteJsonLd: true,
        jsonLd: [aboutJsonLd, {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntity: {
            "@type": "Person",
            name: "Antony Addy",
            jobTitle: "Formateur Professionnel d'Adultes certifié",
            description: "Formateur britannique natif avec plus de 20 ans d'expérience dans l'enseignement de l'anglais professionnel",
            nationality: "British",
            knowsLanguage: ["en", "fr"],
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Certification",
              name: "Formateur Professionnel d'Adultes (FPA)"
            }
          }
        }, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Qui est Antony Addy ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Antony Addy est un formateur britannique natif certifié Formateur Professionnel d'Adultes (FPA) depuis 2017, avec plus de 20 ans d'expérience dans l'enseignement de l'anglais professionnel."
              }
            },
            {
              "@type": "Question",
              name: "Quelles sont ses qualifications ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Il possède la certification FPA (Formateur Professionnel d'Adultes), une licence en langues et civilisations étrangères, et une spécialisation en anglais des affaires et TOEIC."
              }
            }
          ]
        }]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary mb-6", children: "Qui je suis" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Formateur britannique certifié, spécialisé dans l'anglais professionnel pour adultes en France" })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center mb-6", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Antony Addy" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("img", { src: "/lovable-uploads/4cd831d2-27d6-4dbd-abcf-edcee4b0d28a.png", alt: "Antony Addy, Formateur Professionnel d'Adultes certifié depuis 2017, spécialisé en anglais professionnel", className: "w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200", width: "350", height: "auto", loading: "lazy" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-lg text-muted-foreground leading-relaxed mb-6 font-body space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Britannique de naissance" }),
            ", je vis et travaille en France depuis plus de vingt ans. J'enseigne l'anglais à des adultes dans des contextes professionnels exigeants : entreprises, écoles de commerce, organismes de formation, et accompagnement de demandeurs d'emploi via France Travail."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Ma certification ",
            /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Formateur Professionnel d'Adultes (FPA)" }),
            ", obtenue en 2017, atteste d'une pédagogie rigoureuse, centrée sur les résultats. Je ne vous fais pas mémoriser des règles abstraites — je vous aide à ",
            /* @__PURE__ */ jsx("em", { children: "parler, écrire et comprendre" }),
            " l'anglais dans votre quotidien professionnel."
          ] }),
          /* @__PURE__ */ jsx("p", { children: "J'attends de mes apprenants une implication active. Pas de formule magique : vous progresserez parce que vous pratiquerez. En retour, je m'engage à créer un cadre exigeant mais bienveillant, où chaque erreur devient un levier d'apprentissage." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-accent pl-4 mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-2", children: "Ce que je crois" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "L'anglais professionnel ne s'apprend pas dans un manuel. Il se construit dans la pratique : simuler une réunion, rédiger un email réel, répondre à un appel difficile. C'est cette approche concrète qui fait la différence pour des adultes occupés." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-primary mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" }),
              "Certifications"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Titre professionnel FPA (niveau 5, 2017)" }),
              /* @__PURE__ */ jsx("li", { children: "• 20+ années d'enseignement en France" }),
              /* @__PURE__ */ jsx("li", { children: "• Anglophone natif (Royaume-Uni)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-accent/5 rounded-lg p-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-primary mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
              "Spécialisations"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Anglais des affaires et commercial" }),
              /* @__PURE__ */ jsx("li", { children: "• Préparation aux certifications professionnelles" }),
              /* @__PURE__ */ jsx("li", { children: "• Communication téléphonique et écrite" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Pour vous entraîner en autonomie" }),
          ", j'ai créé une plateforme dédiée d'exercices interactifs : ",
          /* @__PURE__ */ jsx("a", { href: "https://anglaisadistance.fr/", target: "_blank", rel: "noopener noreferrer", className: "text-accent hover:underline font-semibold", children: "anglaisadistance.fr" }),
          ". Accès libre, sans inscription."
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mt-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🏢" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Ils me font confiance" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Factory, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Entreprises" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Organismes de formation" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Écoles de Commerce" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(School, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Écoles privées spécialisées" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(University, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Universités" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Centres de formation France Travail" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-accent mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Écoles de langues" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-6", children: "J'interviens auprès de structures variées, de la PME aux grands groupes, en passant par les écoles de commerce et les organismes de formation professionnelle." })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mt-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "📍" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Zone d'intervention" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-primary mb-2", children: [
              /* @__PURE__ */ jsx(Globe, { className: "inline-block h-5 w-5 mr-1 align-middle" }),
              "En ligne"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Partout en France et à l'étranger" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-primary mb-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "inline-block h-5 w-5 mr-1 align-middle" }),
              "En présentiel"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Var et Alpes-Maritimes : Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mt-12 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4", children: "Prêt à progresser ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-xl mx-auto", children: "Un premier échange sans engagement pour comprendre vos besoins et voir si nous pouvons travailler ensemble." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-8 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { children: "formations@antonyaddy.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { children: "WhatsApp : +33 6 49 82 98 26" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors", children: "Prendre contact" }),
          /* @__PURE__ */ jsx("a", { href: WHATSAPP_PREFILLED_URL, onClick: () => trackEvent("whatsapp_cta_click", { page: "About", target: WHATSAPP_PREFILLED_URL, prefilled: true }), className: "bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-3 rounded-lg font-semibold transition-colors", target: "_blank", rel: "noopener noreferrer", children: "WhatsApp direct" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Réponse sous 24h • Aucun engagement" })
      ] }) })
    ] }) })
  ] });
};
export {
  About as default
};
