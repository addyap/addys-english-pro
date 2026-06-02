import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, MessageSquare, ArrowLeft } from "lucide-react";
import { d as SEOHead, b as WHATSAPP_PREFILLED_URL, t as trackEvent } from "../main.mjs";
import "vite-react-ssg";
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
const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Message envoyé ✅ | Antony Addy",
        description: "Merci pour votre message. Antony Addy vous répondra dans les plus brefs délais.",
        canonicalUrl: "https://www.antonyaddy.com/thank-you",
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-9 h-9 text-green-600", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Message Sent ✅" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-2", children: "Thanks for reaching out. I'll get back to you shortly." }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-8", children: "Réponse garantie sous 24h ouvrées." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://anglaisadistance.fr/conversation-trainer",
            target: "_blank",
            rel: "noopener",
            className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5", "aria-hidden": "true" }),
              "Try the AI Trainer ↗"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: WHATSAPP_PREFILLED_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: () => trackEvent("whatsapp_cta_click", { page: "ThankYou", target: WHATSAPP_PREFILLED_URL, prefilled: true }),
            className: "inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5", "aria-hidden": "true" }),
              "Contact via WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4", "aria-hidden": "true" }),
            "Retour à l'accueil"
          ]
        }
      ) })
    ] }) })
  ] });
};
export {
  ThankYou as default
};
