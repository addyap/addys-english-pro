import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, AlertCircle, Loader2, MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import { d as SEOHead, b as WHATSAPP_PREFILLED_URL, h as trackWhatsAppClick, i as trackEmailClick, k as trackFormError, l as trackFormSubmission, t as trackEvent } from "../main.mjs";
import { u as useScrollTracking } from "./useScrollTracking-DLDULcDn.js";
import { s as supabase } from "./client-D5v9Xd9W.js";
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
import "@supabase/supabase-js";
const Contact = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Antony Addy",
    "description": "Contactez Antony Addy pour vos besoins en formation d'anglais professionnel",
    "url": "https://www.antonyaddy.com/contact"
  };
  useScrollTracking("/contact");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    message: "",
    honeypot: ""
    // Anti-spam field
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitErrorBanner, setSubmitErrorBanner] = useState(null);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est requis";
    }
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write at least 20 characters";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please write at least 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) {
      console.log("Spam detected");
      trackFormError("contact", "spam_detected");
      return;
    }
    if (!validateForm()) {
      trackFormError("contact", "validation_failed");
      return;
    }
    setIsSubmitting(true);
    setSubmitErrorBanner(null);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          prenom: formData.prenom.trim(),
          nom: formData.nom.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });
      if (error) {
        throw new Error(error.message || "Erreur lors de l'envoi");
      }
      console.log("Contact form submitted successfully:", data);
      trackFormSubmission("contact", true);
      trackEvent("contact_submit_success", { page: "contact" });
      setSubmitSuccess(true);
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        message: "",
        honeypot: ""
      });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      window.setTimeout(() => {
        navigate("/thank-you");
      }, 2e3);
    } catch (error) {
      console.error("Form submission error:", error);
      trackFormError("contact", "submission_failed");
      trackEvent("contact_submit_error", { page: "contact", reason: "submission_failed" });
      const msg = "❌ Something went wrong. Please try again or use WhatsApp.";
      setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
      setSubmitErrorBanner(msg);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      const v = value.trim();
      if (name === "email") {
        if (v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) delete next.email;
      } else if (name === "message") {
        if (v.length >= 20) delete next.message;
      } else if (name === "prenom" || name === "nom") {
        if (v) delete next[name];
      }
      return next;
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Contact | Devis Formation Anglais Gratuit",
        description: "Contactez Antony Addy pour vos formations d'anglais professionnel. Réponse sous 24h par email, WhatsApp ou formulaire. Devis gratuit.",
        keywords: ["contact formateur anglais", "devis formation", "WhatsApp", "email formations"],
        canonicalUrl: "https://www.antonyaddy.com/contact",
        image: "https://www.antonyaddy.com/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png",
        imageAlt: "QR Code LinkedIn pour contacter Antony Addy",
        enableOrgJsonLd: true,
        enableWebSiteJsonLd: true,
        jsonLd: [contactJsonLd, {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "formations@antonyaddy.com",
            availableLanguage: ["French", "English"],
            areaServed: "FR"
          }
        }]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
      submitSuccess && /* @__PURE__ */ jsxs(
        "div",
        {
          role: "status",
          "aria-live": "polite",
          className: "mb-6 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800 flex items-center gap-3 shadow-sm animate-fade-in",
          children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 text-green-600 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "✅ Message received! I will reply within 24 hours." })
          ]
        }
      ),
      submitErrorBanner && !submitSuccess && /* @__PURE__ */ jsxs(
        "div",
        {
          role: "alert",
          "aria-live": "assertive",
          className: "mb-6 p-4 bg-red-50 border border-red-300 rounded-lg text-red-800 flex items-center gap-3 shadow-sm animate-fade-in",
          children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-6 w-6 text-red-600 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: submitErrorBanner })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("header", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Prenons contact" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Premier échange gratuit et sans engagement pour définir vos objectifs en anglais professionnel" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
          /* @__PURE__ */ jsxs("figure", { className: "mb-6 border-l-4 border-accent bg-accent/5 rounded-r-md px-4 py-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-2 text-accent", "aria-label": "5 out of 5 stars", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "h-4 w-4", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.274-3.957z" }) }, i)) }),
            /* @__PURE__ */ jsx("blockquote", { className: "text-sm md:text-base text-gray-700 italic leading-relaxed", children: "“Antony helped me gain confidence in professional English very quickly. The sessions are practical and directly useful.”" }),
            /* @__PURE__ */ jsxs("figcaption", { className: "mt-2 text-xs text-gray-600", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-primary", children: "Loan Mirmont" }),
              " — Student / Professional learner"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Envoyez-moi un message" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "honeypot",
                value: formData.honeypot,
                onChange: handleChange,
                style: { position: "absolute", left: "-9999px" },
                tabIndex: -1,
                autoComplete: "off",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "prenom", className: "block text-sm font-medium text-gray-700 mb-2", children: "Prénom *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "prenom",
                    name: "prenom",
                    value: formData.prenom,
                    onChange: handleChange,
                    required: true,
                    className: `w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.prenom ? "border-red-500" : "border-gray-300"}`
                  }
                ),
                errors.prenom && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.prenom })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "nom", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nom *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "nom",
                    name: "nom",
                    value: formData.nom,
                    onChange: handleChange,
                    required: true,
                    className: `w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.nom ? "border-red-500" : "border-gray-300"}`
                  }
                ),
                errors.nom && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.nom })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                  className: `w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? "border-red-500" : "border-gray-300"}`
                }
              ),
              errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  rows: 6,
                  value: formData.message,
                  onChange: handleChange,
                  required: true,
                  placeholder: "Décrivez vos besoins en formation, votre niveau actuel, vos objectifs...",
                  className: `w-full px-4 py-2 border rounded-lg transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`
                }
              ),
              errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message })
            ] }),
            errors.submit && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", children: errors.submit }),
            submitSuccess && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2 animate-fade-in", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: "Message envoyé avec succès ! Je vous recontacte rapidement." })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg",
                "aria-label": "Envoyer le message de contact",
                children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin", "aria-hidden": "true" }),
                  "Sending..."
                ] }) : "Envoyer mon message"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-4 text-center", children: "Réponse sous 24h • Présentiel Var & Alpes-Maritimes • Distanciel France entière et international" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-green-600 mr-3" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-green-900", children: "Contact rapide via WhatsApp" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-green-800 mb-4", children: "Pour une réponse immédiate, contactez-moi directement sur WhatsApp" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: WHATSAPP_PREFILLED_URL,
                className: "inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:scale-105 active:scale-95",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Contactez-moi via WhatsApp",
                onClick: trackWhatsAppClick,
                children: [
                  /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 mr-2", "aria-hidden": "true" }),
                  "Ouvrir WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-6", children: "Informations de contact" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "Email" }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "mailto:formations@antonyaddy.com",
                      className: "text-blue-600 hover:text-blue-800 transition-colors",
                      onClick: trackEmailClick,
                      children: "formations@antonyaddy.com"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "Zone d'intervention" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
                    "Présentiel : Var & Alpes-Maritimes (basé à Fréjus)",
                    /* @__PURE__ */ jsx("br", {}),
                    "Distanciel : France entière et international"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-600 mr-3" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "Horaires" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
                    "Lun-Ven : 9h-18h",
                    /* @__PURE__ */ jsx("br", {}),
                    "Réponse sous 24h"
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 text-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Connectons-nous sur LinkedIn" }),
            /* @__PURE__ */ jsx("img", { src: "/lovable-uploads/200e88ab-2bbf-4168-85ad-8123b07c44ac.png", alt: "QR Code LinkedIn permettant de se connecter au profil d'Antony Addy", className: "mx-auto mb-4 max-w-48", width: "192", height: "192", loading: "lazy" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Scannez ce QR code pour me suivre sur LinkedIn" }),
            /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/antonyaddy", className: "inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded", target: "_blank", rel: "noopener noreferrer", "aria-label": "Voir mon profil LinkedIn (ouvre dans un nouvel onglet)", children: "Voir mon profil LinkedIn →" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Contact as default
};
