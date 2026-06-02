import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { d as SEOHead } from "../main.mjs";
import "vite-react-ssg";
import "react";
import "@tanstack/react-query";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
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
const PrivacyPolicy = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Politique de Confidentialité | antonyaddy.com",
        description: "Politique de confidentialité et gestion des données personnelles conformément au RGPD sur antonyaddy.com.",
        canonicalUrl: "https://www.antonyaddy.com/politique-confidentialite",
        keywords: ["politique confidentialité", "RGPD", "données personnelles", "vie privée"]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Politique de confidentialité" }),
      /* @__PURE__ */ jsxs("div", { className: "prose max-w-none text-gray-700", children: [
        /* @__PURE__ */ jsx("p", { className: "text-lg mb-6", children: "Ce site ne collecte aucune donnée personnelle sans votre consentement explicite." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Les seules informations collectées le sont via le formulaire de contact ou les échanges directs par email ou WhatsApp. Ces données sont utilisées uniquement pour répondre à vos demandes de formation, et ne sont jamais transmises à des tiers." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Aucune donnée de navigation, de géolocalisation, ni de profilage n'est stockée ou analysée à des fins commerciales." }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez à tout moment :" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside mb-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Demander l'accès à vos données personnelles" }),
          /* @__PURE__ */ jsx("li", { children: "Demander leur rectification ou suppression" }),
          /* @__PURE__ */ jsx("li", { children: "Retirer votre consentement à tout moment" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
          "Pour toute demande relative à vos données personnelles, contactez :",
          /* @__PURE__ */ jsx("strong", { children: " formations@antonyaddy.com" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Hébergement du site : Bluehost – www.bluehost.com" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-3", children: "Explorer le site" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "text-blue-600 hover:underline", children: "Accueil" }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-blue-600 hover:underline", children: "Contact" }),
            /* @__PURE__ */ jsx(Link, { to: "/mentions-legales", className: "text-blue-600 hover:underline", children: "Mentions légales" }),
            /* @__PURE__ */ jsx(Link, { to: "/offres-de-formation", className: "text-blue-600 hover:underline", children: "Formations" })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  PrivacyPolicy as default
};
