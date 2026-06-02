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
const LegalNotices = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Mentions Légales | antonyaddy.com",
        description: "Mentions légales du site antonyaddy.com : éditeur, hébergeur, organisme de formation, RGPD et protection des données personnelles.",
        canonicalUrl: "https://www.antonyaddy.com/mentions-legales",
        keywords: ["mentions légales", "RGPD", "organisme de formation", "données personnelles"]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-lg p-8", children: /* @__PURE__ */ jsxs("section", { className: "max-w-3xl mx-auto text-neutral-800", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-primary mb-6", children: "Mentions Légales" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Éditeur du site" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Nom :" }),
        " Antony Addy"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Statut juridique :" }),
        " Auto-Entrepreneur"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Adresse professionnelle :" }),
        " 135 rue Henri Vadon, 83600 Fréjus, France"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "SIRET :" }),
        " 483 178 893 00028"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Téléphone :" }),
        " +33 6 49 82 98 26"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Courriel :" }),
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:formations@antonyaddy.com", className: "text-blue-700 font-medium underline", children: "formations@antonyaddy.com" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("strong", { children: "Directeur de la publication :" }),
        " Antony Addy"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Organisme de formation" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Numéro de Déclaration d'Activité (NDA) :" }),
        " ",
        "93 830 73 88 83"
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
        /* @__PURE__ */ jsx("strong", { children: "Autorité d'enregistrement :" }),
        " DREETS Provence-Alpes-Côte d'Azur"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-sm italic text-gray-600", children: "Cet enregistrement ne vaut pas agrément de l'État (article L.6352-12 du Code du travail)." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Hébergement" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
        /* @__PURE__ */ jsx("strong", { children: "Hébergeur :" }),
        " Vercel —",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://vercel.com",
            className: "text-blue-600 underline",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "vercel.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Propriété intellectuelle" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: "L'ensemble du contenu de ce site (textes, images, supports pédagogiques, méthodes) est protégé par le droit de la propriété intellectuelle et demeure la propriété exclusive d'Antony Addy. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Limitation de responsabilité" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Les informations diffusées sur ce site sont fournies à titre indicatif. Antony Addy met tout en œuvre pour en assurer l'exactitude et la mise à jour, sans toutefois pouvoir en garantir l'exhaustivité. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-primary mb-4", children: "Protection des données (RGPD)" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
        "Ce site respecte le ",
        /* @__PURE__ */ jsx("strong", { children: "Règlement Général sur la Protection des Données (RGPD)" }),
        ". Les informations collectées via le formulaire de contact (nom, email, message) sont utilisées exclusivement pour répondre à votre demande et ne sont jamais partagées avec des tiers."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Vous pouvez demander l'accès, la modification ou la suppression de vos données personnelles à tout moment en écrivant à :" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "📧",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:formations@antonyaddy.com", className: "text-blue-700 font-medium underline", children: "formations@antonyaddy.com" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-sm text-gray-600", children: [
        "Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — ",
        /* @__PURE__ */ jsx("a", { href: "https://www.cnil.fr", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 underline", children: "www.cnil.fr" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-primary mb-3", children: "Explorer le site" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 text-sm", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "text-blue-600 hover:underline", children: "Accueil" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-blue-600 hover:underline", children: "Contact" }),
          /* @__PURE__ */ jsx(Link, { to: "/politique-confidentialite", className: "text-blue-600 hover:underline", children: "Politique de confidentialité" }),
          /* @__PURE__ */ jsx(Link, { to: "/cgv", className: "text-blue-600 hover:underline", children: "CGV" }),
          /* @__PURE__ */ jsx(Link, { to: "/offres-de-formation", className: "text-blue-600 hover:underline", children: "Formations" })
        ] })
      ] })
    ] }) }) }) })
  ] });
};
export {
  LegalNotices as default
};
