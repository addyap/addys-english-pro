import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Globe, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { d as SEOHead, F as FadeInSection, A as Accordion, b as WHATSAPP_PREFILLED_URL, t as trackEvent } from "../main.mjs";
import { C as CourseSchema } from "./structuredData-5fUoonNT.js";
import { u as useScrollTracking, a as useTimeTracking } from "./useScrollTracking-DLDULcDn.js";
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
const Training = () => {
  useScrollTracking("training");
  useTimeTracking("training");
  const trainingJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Formations d'anglais professionnel",
    "description": "Formations d'anglais personnalisées pour adultes, en ligne ou en présentiel",
    "provider": {
      "@type": "Person",
      "name": "Antony Addy",
      "jobTitle": "Formateur Professionnel d'Adultes certifié"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H"
      },
      {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "135 rue Henri Vadon",
            "addressLocality": "Fréjus",
            "postalCode": "83600",
            "addressRegion": "Provence-Alpes-Côte d'Azur",
            "addressCountry": "FR"
          }
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "category": "Professional Training",
      "eligibleRegion": {
        "@type": "Place",
        "name": "France"
      }
    }
  };
  const formations = [
    {
      title: "Anglais général",
      pourQui: "Adultes souhaitant gagner en aisance au quotidien.",
      objectif: "Améliorer fluidité, compréhension et confiance.",
      format: "Visio ou présentiel · individuel ou petit groupe.",
      resultat: "Conversations naturelles sans blocage."
    },
    {
      title: "Anglais professionnel",
      pourQui: "Professionnels en poste utilisant l'anglais au travail.",
      objectif: "Maîtriser réunions, appels, présentations, rédaction.",
      format: "Sessions ciblées sur vos situations réelles.",
      resultat: "Communication efficace avec clients et collègues."
    },
    {
      title: "Anglais téléphonique et email",
      pourQui: "Métiers en relation client, support, commerce.",
      objectif: "Parler clairement au téléphone et écrire sans stress.",
      format: "Mises en situation et modèles d'emails utiles.",
      resultat: "Échanges pros plus rapides et plus clairs."
    },
    {
      title: "Anglais spécialisé",
      pourQui: "Vente, RH, immobilier, hôtellerie, accueil, etc.",
      objectif: "Acquérir le vocabulaire métier et les bons réflexes.",
      format: "Contenus 100% adaptés à votre secteur.",
      resultat: "Crédibilité immédiate dans votre domaine."
    },
    {
      title: "Préparation à une certification",
      pourQui: "Candidats TOEIC, Linguaskill, Cambridge ou équivalent.",
      objectif: "Atteindre le score visé avec une méthode structurée.",
      format: "Plan d'entraînement + tests blancs corrigés.",
      resultat: "Certification obtenue avec confiance."
    },
    {
      title: "Préparation aux entretiens en anglais",
      pourQui: "Candidats à un poste, une école ou une promotion.",
      objectif: "Répondre avec aisance aux questions clés en anglais.",
      format: "Simulations d'entretien + feedback personnalisé.",
      resultat: "Entretien passé sereinement et avec impact."
    }
  ];
  const audienceShortcuts = [
    {
      emoji: "💼",
      title: "Professionnels",
      desc: "Réunions, emails, appels clients en anglais.",
      target: "formations"
    },
    {
      emoji: "🎓",
      title: "Étudiants",
      desc: "Préparer vos études et votre entrée en entreprise.",
      target: "formations"
    },
    {
      emoji: "🎤",
      title: "Entretiens",
      desc: "Réussir un entretien d'embauche ou d'école en anglais.",
      target: "formations"
    }
  ];
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Formations d'anglais professionnel | Antony Addy",
        description: "Formations d'anglais professionnel sur mesure pour entreprises, cadres et particuliers. Présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde. Devis gratuit.",
        canonicalUrl: "https://www.antonyaddy.com/offres-de-formation",
        enableOrgJsonLd: true,
        enableWebSiteJsonLd: true,
        image: "https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
        imageAlt: "Formations d'anglais professionnel par Antony Addy",
        keywords: [
          "formation anglais",
          "cours entreprise",
          "formation à distance",
          "anglais Var",
          "anglais Alpes-Maritimes",
          "anglais Fréjus",
          "préparation TOEIC"
        ],
        jsonLd: [trainingJsonLd, {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Quels types de formations d'anglais proposez-vous ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Je propose plusieurs types de formations : anglais général, anglais professionnel, anglais téléphonique et email, anglais spécialisé (vente, RH, immobilier, hôtellerie), et préparation aux certifications professionnelles (TOEIC, Linguaskill, Cambridge)."
              }
            },
            {
              "@type": "Question",
              name: "Les formations sont-elles disponibles en ligne ?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Oui, toutes les formations sont disponibles en ligne (visioconférence) partout en France et dans le monde, ou en présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco)."
              }
            }
          ]
        }]
      }
    ),
    /* @__PURE__ */ jsx(
      CourseSchema,
      {
        name: "Formations d'anglais professionnel",
        description: "Formations personnalisées en anglais professionnel pour adultes, en ligne partout en France et dans le monde ou en présentiel dans le Var et les Alpes-Maritimes.",
        provider: {
          name: "Antony Addy",
          url: "https://www.antonyaddy.com"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-primary mb-4", children: "Formations d'anglais professionnel" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "Des formations concrètes pour communiquer avec confiance en anglais dans votre vie professionnelle" })
      ] }) }),
      /* @__PURE__ */ jsx("hr", { className: "border-t border-border mb-12" }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4 mb-12", children: audienceShortcuts.map((a) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => handleScrollTo(a.target),
          className: "text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-border",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl mr-2", "aria-hidden": "true", children: a.emoji }),
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-primary", children: a.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3", children: a.desc }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-accent", children: "Voir les formations ↓" })
          ]
        },
        a.title
      )) }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "mb-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 sm:p-8 border border-border", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-primary mb-2 font-heading", children: "Voir le détail par profil" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-5", children: "Chaque profil a sa propre page dédiée avec FAQ et exemples concrets." }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/anglais-entreprise", className: "block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary text-sm", children: "Entreprises →" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/anglais-cadres", className: "block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary text-sm", children: "Cadres & dirigeants →" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/anglais-particuliers", className: "block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary text-sm", children: "Particuliers →" }) }),
          /* @__PURE__ */ jsx(Link, { to: "/anglais-etudiants", className: "block p-3 bg-white rounded-lg border border-border hover:border-accent transition-colors", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary text-sm", children: "Étudiants →" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { id: "formations-professionnelles", className: "bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", "aria-hidden": "true", children: "🎯" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Formations professionnelles spécialisées" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Entraînez-vous à votre métier avec un partenaire IA qui adapte le vocabulaire, le ton et les scénarios à votre secteur." }),
        /* @__PURE__ */ jsxs("ul", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://anglaisadistance.fr/conversation-trainer?ctx=ACOM",
              target: "_blank",
              rel: "noopener",
              className: "flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl shrink-0", "aria-hidden": "true", children: "💼" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: "ACOM — Salons & commerce international ↗" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Accueil visiteurs, prospection B2B, négociation." })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://anglaisadistance.fr/conversation-trainer?ctx=VPL",
              target: "_blank",
              rel: "noopener",
              className: "flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl shrink-0", "aria-hidden": "true", children: "💎" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: "VPL — Vente luxe ↗" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Conseil clientèle haut de gamme en boutique." })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://anglaisadistance.fr/conversation-trainer?ctx=AD",
              target: "_blank",
              rel: "noopener",
              className: "flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl shrink-0", "aria-hidden": "true", children: "📞" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: "Assistant de Direction ↗" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Téléphone professionnel, prise de message, agenda." })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://anglaisadistance.fr/conversation-trainer?ctx=MEDICAL",
              target: "_blank",
              rel: "noopener",
              className: "flex items-start gap-3 p-4 min-h-[64px] rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl shrink-0", "aria-hidden": "true", children: "🩺" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-primary", children: "Secrétaire Médicale ↗" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Accueil patient, prise de rendez-vous, réassurance." })
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 pt-5 border-t border-border", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://anglaisadistance.fr/conversation-trainer",
            target: "_blank",
            rel: "noopener",
            className: "inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline",
            children: "→ IA d'entraînement professionnel (tous contextes) ↗"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4", children: "Pour qui ?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Professionnels en poste" }),
          " qui ont besoin de l'anglais au quotidien : réunions, emails, appels clients, présentations."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Personnes en reconversion" }),
          " ou recherche d'emploi, accompagnées par France Travail ou un OPCO, qui veulent valoriser leur profil."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Étudiants en école de commerce ou formation continue" }),
          " qui préparent leur entrée dans le monde professionnel."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { id: "formations", className: "bg-white rounded-lg shadow-lg p-8 mb-12 scroll-mt-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "📚" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Types de formations" })
        ] }),
        /* @__PURE__ */ jsx(Accordion, { title: "Formations individuelles & sur mesure", children: /* @__PURE__ */ jsx("p", { children: "Parcours personnalisés selon votre métier, vos objectifs et votre niveau, en présentiel ou à distance." }) }),
        /* @__PURE__ */ jsx(Accordion, { title: "Formations en entreprise", children: /* @__PURE__ */ jsx("p", { children: "Sessions de formation adaptées à vos équipes, sur site ou à distance, avec contenus sur mesure." }) }),
        /* @__PURE__ */ jsx(Accordion, { title: "Centres de formation et écoles", children: /* @__PURE__ */ jsx("p", { children: "Interventions dans des établissements comme ESCCOM, ITEC, et universités, avec approche certifiée." }) })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🎯" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Ce que je propose" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Chaque formation est pensée pour vous aider dans votre vie professionnelle, tout en prenant en compte vos besoins personnels : confiance, aisance à l'oral, progression visible." }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-primary mb-6", children: "Voici quelques exemples de formations possibles :" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: formations.map((formation, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-accent pl-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-2", children: formation.title }),
          /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground text-sm space-y-1", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Pour qui :" }),
              " ",
              formation.pourQui
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Objectif :" }),
              " ",
              formation.objectif
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Format :" }),
              " ",
              formation.format
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: "Résultat :" }),
              " ",
              formation.resultat
            ] })
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6", children: /* @__PURE__ */ jsxs("p", { className: "text-accent-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg mr-2", children: "🛠️" }),
          /* @__PURE__ */ jsx("strong", { children: "Toutes les formations sont personnalisées, flexibles et orientées vers des résultats concrets." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "📍" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Où et comment ?" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-accent mr-3 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-1", children: "En ligne" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "toute la France et à l'international" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-accent mr-3 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-1", children: "En présentiel" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Var & Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "• Séances individuelles ou petits groupes" }),
          /* @__PURE__ */ jsx("p", { children: "• Rythme flexible, selon vos besoins" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 border border-border rounded-lg p-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "📚" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Ressources et références" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-2", children: "Références institutionnelles" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.francetravail.fr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "France Travail ↗" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.francecompetences.fr/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "France Compétences ↗" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.afpa.fr/formation/titre-professionnel-formateur-professionnel-adultes", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Titre FPA (AFPA) ↗" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-primary mb-2", children: "Certifications reconnues" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.cambridgeenglish.org/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Cambridge English ↗" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.coe.int/en/web/common-european-framework-reference-languages/home", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Cadre Européen CECRL ↗" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.ets.org/toeic.html", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "TOEIC ↗" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground border-t border-border pt-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Dernière mise à jour :" }),
          " Mars 2026"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 border border-primary/10 rounded-lg p-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: "🌐" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary", children: "Et en attendant ?" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg mr-2", children: "🎓" }),
          "En parallèle de mes formations, je mets à disposition des",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes",
              target: "_blank",
              rel: "noopener",
              className: "font-semibold text-accent hover:text-accent/80 transition-colors",
              children: "ressources gratuites ↗"
            }
          ),
          " ",
          "— grammaire claire, vocabulaire utile, dialogues pratiques, quiz interactifs, et bien plus."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(FadeInSection, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-primary mb-4", children: "Commencer" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-xl mx-auto", children: "Prenez contact pour un premier échange gratuit. Je vous aide à définir vos objectifs et à choisir la formule adaptée." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg", children: "Réserver un premier échange" }),
          /* @__PURE__ */ jsx("a", { href: WHATSAPP_PREFILLED_URL, onClick: () => trackEvent("whatsapp_cta_click", { page: "Training", target: WHATSAPP_PREFILLED_URL, prefilled: true, location: "final-cta" }), className: "bg-[#25D366] hover:bg-[#1EBE5C] text-white px-8 py-4 rounded-lg font-semibold transition-colors", target: "_blank", rel: "noopener noreferrer", children: "WhatsApp direct" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "💬 Premier échange gratuit · Sans engagement · Réponse sous 24h" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { children: "formations@antonyaddy.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { children: "+33 6 49 82 98 26" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "Réponse sous 24h • Sans engagement • Devis gratuit" })
      ] }) })
    ] }) })
  ] });
};
export {
  Training as default
};
