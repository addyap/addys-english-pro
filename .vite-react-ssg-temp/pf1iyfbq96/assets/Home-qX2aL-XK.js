import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Quote, Star, ChevronLeft, ChevronRight, Award, ExternalLink, ArrowRight, Sparkles, MessageCircle, Mail, Globe, Target, Users, Building, CheckCircle, GraduationCap, School, BookOpen, University, MapPin } from "lucide-react";
import { b as WHATSAPP_PREFILLED_URL, t as trackEvent, d as SEOHead, j as jsonLdWebsite, e as jsonLdOrganization, f as jsonLdPerson } from "../main.mjs";
import { useState, useRef, useEffect, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { u as useScrollTracking, a as useTimeTracking } from "./useScrollTracking-DLDULcDn.js";
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
import "i18next";
import "react-i18next";
import "i18next-browser-languagedetector";
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const TestimonialCarousel = ({
  testimonials,
  autoPlay = true,
  interval = 7e3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const slideVariants = {
    enter: (direction2) => ({
      x: direction2 > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction2) => ({
      zIndex: 0,
      x: direction2 < 0 ? 200 : -200,
      opacity: 0
    })
  };
  const swipeConfidenceThreshold = 8e3;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(() => paginate(1), interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isPaused]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      var _a;
      if (!((_a = containerRef.current) == null ? void 0 : _a.matches(":hover, :focus-within"))) return;
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const current = testimonials[currentIndex];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm",
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      onFocus: () => setIsPaused(true),
      onBlur: () => setIsPaused(false),
      role: "region",
      "aria-roledescription": "carrousel",
      "aria-label": "Témoignages clients",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 opacity-10 pointer-events-none", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Quote, { className: "w-20 h-20 md:w-24 md:h-24 text-blue-600" }) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex justify-center mb-4", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wide", children: [
          /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-amber-500 text-amber-500", "aria-hidden": "true" }),
          "Avis client"
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative min-h-[340px] sm:min-h-[300px] md:min-h-[280px] flex items-center",
            "aria-atomic": "true",
            children: /* @__PURE__ */ jsx(AnimatePresence, { initial: false, custom: direction, mode: "wait", children: /* @__PURE__ */ jsxs(
              motion.article,
              {
                custom: direction,
                variants: slideVariants,
                initial: "enter",
                animate: "center",
                exit: "exit",
                transition: {
                  x: { type: "spring", stiffness: 260, damping: 28 },
                  opacity: { duration: 0.35 }
                },
                drag: "x",
                dragConstraints: { left: 0, right: 0 },
                dragElastic: 0.2,
                onDragEnd: (_e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                },
                className: "absolute inset-0 w-full px-2 sm:px-6 flex flex-col justify-center text-center",
                "aria-roledescription": "diapositive",
                "aria-label": `Témoignage ${currentIndex + 1} sur ${testimonials.length}`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 mb-4 text-amber-500", "aria-label": "Note 5 sur 5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 md:h-5 md:w-5 fill-current", "aria-hidden": "true" }, i)) }),
                  /* @__PURE__ */ jsxs("blockquote", { className: "text-base sm:text-lg md:text-2xl text-gray-800 italic mb-6 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-3xl mx-auto px-2", children: [
                    "« ",
                    current.quote,
                    " »"
                  ] }),
                  /* @__PURE__ */ jsxs("footer", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-base md:text-lg text-gray-900", children: current.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-600", children: current.role }),
                    current.company && /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 font-medium", children: current.company })
                  ] })
                ]
              },
              currentIndex
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => paginate(-1),
            className: "hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center",
            "aria-label": "Témoignage précédent",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5 md:w-6 md:h-6 text-gray-700", "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => paginate(1),
            className: "hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2.5 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 items-center justify-center",
            "aria-label": "Témoignage suivant",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 md:w-6 md:h-6 text-gray-700", "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-center gap-3 mt-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-gray-600 tabular-nums", "aria-live": "polite", children: [
            currentIndex + 1,
            " / ",
            testimonials.length
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2", role: "tablist", "aria-label": "Sélectionner un témoignage", children: testimonials.map((_, index) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              },
              role: "tab",
              "aria-selected": index === currentIndex,
              "aria-label": `Aller au témoignage ${index + 1}`,
              className: `transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex ? "w-8 h-2 bg-blue-600" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`
            },
            index
          )) })
        ] })
      ]
    }
  );
};
const AvisClients = () => {
  const testimonials = [
    {
      quote: "Antony est un super professeur. À l'écoute, dans l'échange et très pédagogue, il s'adapte à nos besoins.",
      name: "Loan MIRMONT",
      role: "Préparateur physique N2 – Gérant PPR-Formance"
    },
    {
      quote: "Moi qui ne parlais pas un mot d'anglais, Anthony m'a poussé à m'améliorer à chaque cours.",
      name: "Paula Giusto",
      role: "Conseillère de Vente en Produits de Luxe"
    },
    {
      quote: "Anthony excels in creating an engaging and inclusive learning environment.",
      name: "Chia Min HSU",
      role: "Conseillère commerciale – marché sinophone"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "bg-muted py-16", "aria-labelledby": "avis-clients-heading", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h2", { id: "avis-clients-heading", className: "text-3xl font-bold text-primary mb-3 font-heading", children: "Avis clients" }),
    /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body", children: "Ils nous font confiance." }),
    /* @__PURE__ */ jsx(TestimonialCarousel, { testimonials }),
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/temoignages",
        className: "inline-block bg-red-600 text-white font-medium px-6 py-3 rounded hover:bg-red-700 transition-all hover:scale-105 active:scale-95 font-body focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        children: "Voir tous les témoignages"
      }
    ) })
  ] }) }) });
};
function OptimizedHero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative hero-section overflow-hidden text-primary-foreground",
      role: "banner",
      "aria-label": "Section principale de présentation",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full z-0 overflow-hidden bg-primary", children: /* @__PURE__ */ jsxs("picture", { children: [
          /* @__PURE__ */ jsx("source", { srcSet: "/assets/hero-image.webp", type: "image/webp" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/hero-image.png",
              alt: "Formation en anglais professionnel avec Antony Addy",
              className: "absolute inset-0 w-full h-full object-cover animate-ken-burns opacity-80",
              width: 1920,
              height: 1080,
              loading: "eager",
              decoding: "async",
              fetchpriority: "high"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/35 to-primary/70 z-5" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#main-content",
            className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold",
            children: "Aller au contenu principal"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 py-10 sm:py-14 md:py-20 text-center hero-title-wrap", children: [
          /* @__PURE__ */ jsxs("header", { className: "mb-6 sm:mb-8", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 sm:mb-6 hero-title drop-shadow-2xl text-primary-foreground", children: [
              "Formateur d'anglais pour adultes – ",
              /* @__PURE__ */ jsx("span", { className: "whitespace-nowrap", children: "Antony Addy" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 font-body drop-shadow-xl max-w-4xl mx-auto text-primary-foreground/90 leading-snug", children: "Communiquez avec confiance en anglais dans votre vie professionnelle. Formations personnalisées par un formateur britannique certifié FPA depuis 2017." }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-lg mb-4 sm:mb-6 font-body drop-shadow-lg max-w-3xl mx-auto text-primary-foreground/80", children: "Présentiel Var & Alpes-Maritimes • Distanciel France entière et international • Particuliers, cadres & entreprises" }),
            /* @__PURE__ */ jsxs(
              "ul",
              {
                className: "flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base font-body text-primary-foreground/85",
                "aria-label": "Qualifications",
                children: [
                  /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "🇬🇧" }),
                    /* @__PURE__ */ jsx("span", { children: "Britannique natif" })
                  ] }),
                  /* @__PURE__ */ jsx("li", { "aria-hidden": "true", className: "hidden md:inline text-primary-foreground/40", children: "•" }),
                  /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "🎓" }),
                    /* @__PURE__ */ jsx("span", { children: "Certifié FPA depuis 2017" })
                  ] }),
                  /* @__PURE__ */ jsx("li", { "aria-hidden": "true", className: "hidden md:inline text-primary-foreground/40", children: "•" }),
                  /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "📅" }),
                    /* @__PURE__ */ jsx("span", { children: "20+ ans d'enseignement en France" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-5 sm:mb-6", children: /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-background/15 border border-primary-foreground/30 backdrop-blur-sm text-xs sm:text-sm md:text-base font-medium text-primary-foreground shadow-lg text-center",
              "aria-label": "Indicateur de confiance",
              children: [
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "⭐" }),
                "Premier échange gratuit · Sans engagement · Réponse sous 24h"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "nav",
            {
              className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap items-stretch sm:items-center",
              "aria-label": "Actions principales",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: WHATSAPP_PREFILLED_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => trackEvent("whatsapp_cta_click", { page: "home", location: "hero", prefilled: true }),
                    className: "group relative overflow-hidden bg-accent text-accent-foreground px-6 py-3.5 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-accent/90 hover:shadow-2xl transition-all duration-300 shadow-2xl font-body transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 active:scale-100 ring-2 ring-accent/40 inline-flex items-center justify-center gap-2",
                    "aria-label": "Prendre contact sur WhatsApp avec Antony Addy (message pré-rempli)",
                    children: [
                      /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "💬" }),
                      /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Prendre contact sur WhatsApp" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/offres-de-formation",
                    onClick: () => trackEvent("hero_secondary_cta_click", { page: "home", target: "/offres-de-formation" }),
                    className: "group relative overflow-hidden border-2 border-primary-foreground/80 text-primary-foreground bg-transparent px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ring/30 active:scale-100",
                    "aria-label": "Voir les offres de formation en anglais professionnel",
                    children: /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Voir les formations" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-primary-foreground/85 font-body drop-shadow", children: "100% personnalisé · Adapté à votre niveau · Réponse rapide garantie" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/ressources-gratuites",
              className: "inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4 font-body focus:outline-none focus:ring-2 focus:ring-ring/30 rounded",
              "aria-label": "Explorer les ressources gratuites d'anglais",
              children: "Explorer les ressources gratuites →"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Antony Addy",
          jobTitle: "Formateur Professionnel d'Adultes en Anglais",
          description: "Spécialiste en anglais professionnel depuis 2017, formations pour particuliers, professionnels et centres de formation",
          address: {
            "@type": "PostalAddress",
            streetAddress: "135 rue Henri Vadon",
            addressLocality: "Fréjus",
            postalCode: "83600",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR"
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Var" },
            { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
            { "@type": "Country", name: "France" }
          ],
          knowsLanguage: ["fr", "en"],
          offers: {
            "@type": "Service",
            name: "Formation en anglais professionnel",
            description: "Formations claires, flexibles et efficaces en anglais professionnel"
          }
        }) })
      ]
    }
  );
}
const CarouselSkeleton = memo(() => /* @__PURE__ */ jsx("div", { className: "flex gap-4 overflow-hidden pb-8 justify-center h-[140px] items-center", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-w-[120px]", children: [
  /* @__PURE__ */ jsx("div", { className: "h-20 w-20 bg-muted animate-pulse rounded-lg mb-2" }),
  /* @__PURE__ */ jsx("div", { className: "h-4 w-24 bg-muted animate-pulse rounded" })
] }, i)) }));
const LazyClientCarousel = memo(({ logos }) => {
  const [SwiperComponents, setSwiperComponents] = useState(null);
  useEffect(() => {
    let mounted = true;
    const loadSwiper = async () => {
      try {
        await Promise.resolve({                  });
        const [swiperMod, modulesMod] = await Promise.all([
          import("swiper/react"),
          import("swiper/modules")
        ]);
        if (mounted) {
          setSwiperComponents({
            Swiper: swiperMod.Swiper,
            SwiperSlide: swiperMod.SwiperSlide,
            Autoplay: modulesMod.Autoplay
          });
        }
      } catch (err) {
        console.error("Failed to load Swiper:", err);
      }
    };
    loadSwiper();
    return () => {
      mounted = false;
    };
  }, []);
  if (!SwiperComponents) {
    return /* @__PURE__ */ jsx(CarouselSkeleton, {});
  }
  const { Swiper, SwiperSlide, Autoplay } = SwiperComponents;
  return /* @__PURE__ */ jsx(
    Swiper,
    {
      spaceBetween: 20,
      slidesPerView: 2,
      breakpoints: {
        480: { slidesPerView: 2, spaceBetween: 30 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
      },
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      modules: [Autoplay],
      className: "pb-8",
      style: { "--swiper-wrapper-transition-timing-function": "linear" },
      children: [...logos, ...logos].map((logo, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logo.src,
            alt: logo.alt,
            className: "h-20 sm:h-24 object-contain mb-2",
            width: "96",
            height: "96",
            loading: "lazy",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-medium text-primary text-center", children: logo.name })
      ] }) }, index))
    }
  );
});
const EXERCISE_COUNTS = {
  grammar: 60,
  // grammarCategories - 60 lessons
  vocabulary: 150,
  // exercises 1-150 in allExercises
  reading: 12,
  // readingPassages
  listening: 20,
  // listeningExercises  
  dragDrop: 12,
  // dragDropExercises
  writing: 9,
  // writingExercises
  idioms: 6,
  // idiomExercises (6 sets)
  phrasalVerbs: 5,
  // phrasalVerbExercises (5 sets)
  collocations: 6,
  // collocationExercises (6 sets)
  dictation: 6,
  // dictationExercises
  translation: 6,
  // translationExercises
  stories: 5,
  // interactiveStories
  crossword: 6,
  // crosswordExercises
  matching: 6,
  // matchingExercises
  dialogue: 6,
  // dialogueExercises
  prepositions: 4,
  // prepositionExercises
  get total() {
    return this.grammar + this.vocabulary + this.reading + this.listening + this.dragDrop + this.writing + this.idioms + this.phrasalVerbs + this.collocations + this.dictation + this.translation + this.stories + this.crossword + this.matching + this.dialogue + this.prepositions;
  },
  get questions() {
    return this.total * 10;
  }
};
const CLIENT_LOGOS = [
  { src: "/lovable-uploads/a3da9e3b-1f6c-447a-b308-2ca44d071c67.png", alt: "Logo IGY Vieux-Port de Cannes, partenaire formation anglais", name: "IGY Vieux-Port de Cannes" },
  { src: "/lovable-uploads/694fcb0f-d52b-44f3-8cbc-6c1a051e416b.png", alt: "Logo ITEC, école partenaire pour formations d'anglais", name: "ITEC" },
  { src: "/lovable-uploads/6668f20c-7d63-477f-a5be-856e631eaaef.png", alt: "Logo ESCCOM, école de commerce partenaire formations anglais", name: "ESCCOM" },
  { src: "/lovable-uploads/69034832-a004-43a5-b367-f4726a4d126a.png", alt: "Logo Ingeneria Project, entreprise partenaire pour formations d'anglais professionnel", name: "Ingeneria" },
  { src: "/lovable-uploads/edj-nice-logo.png", alt: "Logo EDJ Nice, L'école du journalisme, partenaire formation anglais", name: "EDJ Nice" }
];
const Home = () => {
  useScrollTracking("home");
  useTimeTracking("home");
  const features = [{
    icon: Globe,
    title: "Formateur britannique natif",
    description: "Prononciation authentique, expressions naturelles et compréhension culturelle d'un anglophone de naissance"
  }, {
    icon: Target,
    title: "Formations orientées résultats",
    description: "Objectifs concrets : réunions, présentations, emails, appels — vous progressez sur ce qui compte pour votre métier"
  }, {
    icon: Award,
    title: "Certifié Formateur Professionnel d'Adultes",
    description: "Pédagogie adaptée aux adultes actifs : méthodes actives, progression mesurable, respect de votre temps"
  }, {
    icon: Users,
    title: "20+ ans d'expérience avec des professionnels",
    description: "Cadres, indépendants, équipes commerciales — des profils variés avec des besoins exigeants"
  }, {
    icon: Building,
    title: "Partenaire d'écoles et d'entreprises",
    description: "ESCCOM, ITEC, IGY Vieux-Port, et de nombreux centres de formation me font confiance"
  }, {
    icon: CheckCircle,
    title: "Présentiel ou distanciel, selon vos contraintes",
    description: "Var et Alpes-Maritimes en face à face, toute la France et le monde à distance — flexibilité totale"
  }];
  const clientCategories = [{
    icon: Building,
    title: "Entreprises"
  }, {
    icon: GraduationCap,
    title: "Organismes de formation"
  }, {
    icon: School,
    title: "Écoles de Commerce"
  }, {
    icon: BookOpen,
    title: "Écoles privées spécialisées"
  }, {
    icon: University,
    title: "Universités"
  }, {
    icon: MapPin,
    title: "Centres de formation France Travail"
  }, {
    icon: Globe,
    title: "Écoles de langues"
  }];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Cours d'anglais professionnel – Var & Alpes-Maritimes | Antony Addy",
        description: "Formateur d'anglais natif britannique, certifié FPA. Cours pour entreprises, cadres et particuliers. En présentiel dans le Var et les Alpes-Maritimes, ou à distance partout en France et dans le monde.",
        canonicalUrl: "https://www.antonyaddy.com/",
        datePublished: "2025-01-15T10:00:00+01:00",
        dateModified: "2026-05-24T10:00:00+01:00",
        image: "https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
        enableOrgJsonLd: true,
        enableWebSiteJsonLd: true,
        imageAlt: "Antony Addy, formateur d'anglais professionnel certifié FPA",
        keywords: ["formateur anglais", "formation anglais professionnel", "formateur FPA", "cours anglais adultes", "Var", "Alpes-Maritimes", "Côte d'Azur", "Fréjus", "Saint-Raphaël", "Nice", "Cannes", "Antibes", "Sophia Antipolis", "Monaco", "anglais à distance", "formateur britannique", "anglais entreprises", "anglais cadres", "anglais étudiants"],
        jsonLd: [
          jsonLdWebsite(),
          jsonLdOrganization(),
          jsonLdPerson(),
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Formation d'anglais professionnel",
            description: "Services de formation en anglais professionnel, coaching linguistique et cours particuliers dispensés par un formateur natif britannique certifié FPA",
            provider: jsonLdOrganization(),
            address: {
              "@type": "PostalAddress",
              streetAddress: "135 rue Henri Vadon",
              addressLocality: "Fréjus",
              postalCode: "83600",
              addressRegion: "Provence-Alpes-Côte d'Azur",
              addressCountry: "FR"
            },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Var" },
              { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
              { "@type": "Country", name: "France" }
            ],
            availableLanguage: ["fr", "en"],
            serviceType: ["Formation d'anglais professionnel", "Coaching linguistique", "Cours particuliers d'anglais"],
            priceRange: "$$",
            availableChannel: [
              { "@type": "ServiceChannel", serviceType: "En présentiel", availableLanguage: ["fr", "en"] },
              { "@type": "ServiceChannel", serviceType: "À distance", availableLanguage: ["fr", "en"] }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Où intervient Antony Addy pour les formations d'anglais ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco) et à distance partout en France et dans le monde."
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.antonyaddy.com/#professionalservice",
            name: "Antony Addy",
            description: "Formateur d'anglais natif britannique, certifié FPA. Cours pour entreprises, cadres et particuliers, en présentiel dans le Var et les Alpes-Maritimes ou à distance.",
            url: "https://www.antonyaddy.com",
            email: "formations@antonyaddy.com",
            telephone: "+33649829826",
            image: "https://www.antonyaddy.com/social-preview.jpg",
            logo: "https://www.antonyaddy.com/social-preview.jpg",
            inLanguage: "fr",
            availableLanguage: ["en", "fr"],
            areaServed: [
              { "@type": "AdministrativeArea", name: "Var" },
              { "@type": "AdministrativeArea", name: "Alpes-Maritimes" },
              { "@type": "Country", name: "France" },
              "Worldwide (remote)"
            ],
            sameAs: ["https://www.linkedin.com/in/antonyaddy/"]
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50", children: "Aller au contenu principal" }),
    /* @__PURE__ */ jsx(OptimizedHero, {}),
    /* @__PURE__ */ jsxs("section", { className: "bg-background py-6 sm:py-8 border-b border-border", "aria-label": "Indicateurs de confiance", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading", children: "20+" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground font-body mt-1", children: "Années d'expérience" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading", children: "500+" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground font-body mt-1", children: "Apprenants accompagnés" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading", children: "FPA" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground font-body mt-1", children: "Certifié depuis 2017" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary font-heading", children: "24h" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground font-body mt-1", children: "Réponse garantie" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-4xl mx-auto px-4 mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground font-body leading-relaxed", children: "Particuliers, salariés, étudiants (BTS, Bachelor, Master), cadres et équipes : préparation aux entretiens, examens, réunions et présentations en anglais." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-muted py-6 border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed font-body", children: [
      "Antony Addy propose des ",
      /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "formations d'anglais pour adultes" }),
      " adaptées aux professionnels, en présentiel dans le Var et les Alpes-Maritimes (Fréjus, Saint-Raphaël, Cannes, Antibes, Nice, Monaco) ou à distance partout en France et dans le monde. Britannique natif basé à Fréjus, certifié Formateur Professionnel d'Adultes depuis 2017 et fort de plus de 20 ans d'enseignement (notamment à l'EDJ Nice), il accompagne particuliers, cadres, entreprises et centres de formation dans l'amélioration de leurs compétences en anglais professionnel.",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/offres-de-formation", className: "text-accent hover:underline font-medium", children: "Découvrir les formations" }),
      " • ",
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-accent hover:underline font-medium", children: "Demander un devis gratuit" })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary mb-12 text-center font-heading", children: "Votre formateur" }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1 flex flex-col items-center lg:items-start", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
                alt: "Antony Addy animant une formation en anglais professionnel avec des apprenants adultes",
                className: "w-full max-w-[350px] h-auto rounded-2xl shadow-lg border border-gray-200",
                width: "350",
                height: "350",
                loading: "eager",
                decoding: "async",
                fetchpriority: "high"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-3 text-center lg:text-left font-body italic", children: "En formation avec des professionnels" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed mb-4 font-body", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-primary", children: "Antony Addy" }),
              " — Britannique, certifié",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://www.afpa.fr/formation/titre-professionnel-formateur-professionnel-adultes",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-accent hover:underline",
                  children: "Formateur Professionnel d'Adultes"
                }
              ),
              " ",
              "depuis 2017, plus de 20 ans d'expérience en formation d'anglais."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed mb-6 font-body", children: "J'aide les professionnels à communiquer avec confiance en anglais : réunions, négociations, présentations. Mon approche est directe, bienveillante et adaptée à vos enjeux réels." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 text-center lg:text-left", children: [
              /* @__PURE__ */ jsx(Link, { to: "/qui-je-suis", className: "bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body", children: "En savoir plus sur mon parcours" }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://www.linkedin.com/in/antonyaddy/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors font-body flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }),
                    "LinkedIn"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-5 sm:py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 sm:gap-4 w-full md:w-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/20 rounded-full p-2 sm:p-2.5 animate-pulse shrink-0", children: /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxs("p", { className: "font-bold text-base sm:text-lg flex flex-wrap items-center gap-x-2 gap-y-1 leading-tight", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-white/20 px-2 py-0.5 rounded text-xs sm:text-sm", children: "100% GRATUIT" }),
              /* @__PURE__ */ jsx("span", { children: "Ressources pédagogiques en accès libre" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-white/90 mt-1", children: [
              EXERCISE_COUNTS.total,
              "+ exercices • ",
              EXERCISE_COUNTS.questions.toLocaleString(),
              "+ questions • Créés par un formateur certifié"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes",
            target: "_blank",
            rel: "noopener",
            className: "bg-white text-emerald-700 px-5 py-2.5 rounded-lg font-bold text-sm sm:text-base hover:bg-white/90 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg hover:scale-105 w-full md:w-auto justify-center",
            children: [
              "Commencer maintenant ↗",
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-10 bg-background border-b border-border", "aria-labelledby": "questionnaire-cta-heading", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent mb-1.5 font-body", children: "Première étape" }),
          /* @__PURE__ */ jsx("h2", { id: "questionnaire-cta-heading", className: "text-xl md:text-2xl font-bold text-primary font-heading mb-2", children: "Commencez par évaluer vos besoins" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-muted-foreground font-body leading-relaxed", children: "Un questionnaire de 5 minutes pour me transmettre votre niveau, vos objectifs et vos contraintes. Je vous réponds avec une proposition adaptée." })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/questionnaire",
            onClick: () => trackEvent("home_questionnaire_cta_click", { target: "/questionnaire" }),
            className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body whitespace-nowrap",
            children: [
              "Démarrer le questionnaire",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-background", "aria-labelledby": "ai-training-heading", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsx("article", { className: "relative overflow-hidden bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2", children: "Ma méthode · Entraînement IA" }),
          /* @__PURE__ */ jsx("h2", { id: "ai-training-heading", className: "text-2xl md:text-3xl font-bold font-heading text-primary mb-2", children: "Mon système d'entraînement IA pour l'anglais professionnel" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground/90 font-body mb-3 italic", children: "Formateur Professionnel d'Adultes certifié depuis 2017 · Coaching structuré · Approche adaptée aux apprenants francophones" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground font-body mb-4", children: "Entraînez-vous avec mon système IA, conçu autour de situations professionnelles réelles : réunions, négociations, entretiens, présentations." }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground/80 font-body mb-4", children: "Mon système d'entraînement IA combine pédagogie, correction ciblée et mises en situation professionnelles pour développer une communication naturelle et efficace." }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-muted-foreground font-body space-y-2 mb-5 list-disc pl-5", children: [
            /* @__PURE__ */ jsx("li", { children: "Scénarios professionnels réalistes (ACOM, VPL, AD)" }),
            /* @__PURE__ */ jsx("li", { children: "Feedback et corrections immédiats, adaptés à mon approche pédagogique" }),
            /* @__PURE__ */ jsx("li", { children: "Adapté à votre niveau, du A1 au C2" })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://anglaisadistance.fr/conversation-trainer",
              target: "_blank",
              rel: "noopener",
              onClick: () => trackEvent("home_ai_card_cta_click", { target: "https://anglaisadistance.fr/conversation-trainer" }),
              className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/90 transition-colors",
              children: [
                "Démarrer avec mon système IA ↗",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground font-body", "aria-label": "Garanties", children: [
            /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", "aria-hidden": "true", children: "✓" }),
              "Exercices pratiques"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", "aria-hidden": "true", children: "✓" }),
              "Feedback personnalisé"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary", "aria-hidden": "true", children: "✓" }),
              "Progression adaptée à votre niveau"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-5 border-t border-border", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground font-body mb-3", children: "Vous souhaitez un accompagnement plus structuré ? Découvrez mes formations individuelles et professionnelles." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-2.5", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/offres-de-formation",
                  onClick: () => trackEvent("home_ai_secondary_cta_click", { target: "/offres-de-formation" }),
                  className: "inline-flex items-center justify-center gap-2 border border-primary text-primary bg-transparent px-5 py-3 min-h-[44px] rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm",
                  children: [
                    "Découvrir mes formations",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => trackEvent("home_ai_secondary_cta_click", { target: "/contact" }),
                  className: "inline-flex items-center justify-center gap-2 text-primary px-3 py-3 min-h-[44px] rounded-lg font-semibold hover:underline text-sm",
                  children: "Me contacter"
                }
              )
            ] })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16 bg-muted", "aria-labelledby": "features-heading", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "features-heading", className: "text-2xl sm:text-3xl font-bold text-center text-primary mb-8 sm:mb-12 font-heading", children: "Pourquoi choisir mes formations ?" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8", role: "list", children: features.map((feature, index) => /* @__PURE__ */ jsxs("article", { className: "text-center p-5 sm:p-6 rounded-lg bg-white hover:shadow-lg transition-shadow", role: "listitem", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 text-accent rounded-full mb-3 sm:mb-4", "aria-hidden": "true", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-7 w-7 sm:h-8 sm:w-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-semibold text-primary mb-2 sm:mb-3 font-heading", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-muted-foreground font-body leading-relaxed", children: feature.description })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16 bg-white", "aria-labelledby": "audience-heading", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx("h2", { id: "audience-heading", className: "text-2xl sm:text-3xl font-bold text-center text-primary mb-3 font-heading", children: "Pour qui je travaille" }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto", children: "Chaque formation est conçue sur mesure. Voici les quatre profils que j'accompagne le plus souvent." }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/anglais-entreprise", className: "block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-primary mb-2 font-heading", children: "Entreprises" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3 leading-relaxed", children: "Formations sur-mesure pour vos équipes, encadrées par convention de formation." }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-accent", children: "En savoir plus →" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/anglais-cadres", className: "block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-primary mb-2 font-heading", children: "Cadres & dirigeants" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3 leading-relaxed", children: "Accompagnement individuel et confidentiel autour de vos enjeux professionnels." }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-accent", children: "En savoir plus →" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/anglais-particuliers", className: "block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-primary mb-2 font-heading", children: "Particuliers" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3 leading-relaxed", children: "Cours adaptés à votre niveau, votre rythme, et vos objectifs personnels." }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-accent", children: "En savoir plus →" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/anglais-etudiants", className: "block p-5 rounded-lg bg-muted hover:bg-accent/10 border border-border hover:border-accent transition-all", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-primary mb-2 font-heading", children: "Étudiants" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-3 leading-relaxed", children: "Lycéens, étudiants du supérieur, préparation aux examens (TOEIC, Cambridge, bac)." }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-accent", children: "En savoir plus →" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-gray-100 py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-primary mb-12 text-center", children: "Ils me font confiance" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12", children: clientCategories.map((category, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center p-4 bg-white rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5 text-accent mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-primary text-sm", children: category.title })
        ] }, index)) }),
        /* @__PURE__ */ jsx("div", { className: "min-h-[140px]", children: /* @__PURE__ */ jsx(LazyClientCarousel, { logos: CLIENT_LOGOS }) })
      ] }) }),
      /* @__PURE__ */ jsx(AvisClients, {}),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-gradient-to-r from-primary/5 to-accent/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-primary mb-4 font-heading", children: "Prêt à progresser ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6 font-body", children: "Rejoignez des centaines d'apprenants. Commencez par un exercice gratuit — sans inscription." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes",
            target: "_blank",
            rel: "noopener",
            className: "inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg",
            children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5" }),
              "Essayer un exercice maintenant ↗",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16 bg-red-600 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-heading leading-tight", children: "Prêt à améliorer votre anglais professionnel ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl mb-3 font-body leading-relaxed", children: "Expliquez-moi votre objectif, je vous réponds rapidement avec une proposition adaptée." }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base mb-6 sm:mb-8 font-body text-white/90", children: "💬 Premier échange gratuit · Sans engagement · Réponse sous 24h" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: WHATSAPP_PREFILLED_URL,
              onClick: () => trackEvent("whatsapp_cta_click", { page: "Home", location: "final-cta", prefilled: true }),
              className: "bg-white text-red-600 px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 font-body shadow-lg",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Contacter Antony Addy sur WhatsApp (message pré-rempli)",
              children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5", "aria-hidden": "true" }),
                "Contact WhatsApp · Réponse sous 24h"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/contact",
              className: "border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 font-body",
              "aria-label": "Aller au formulaire de contact",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5", "aria-hidden": "true" }),
                "Formulaire de contact"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 sm:mt-5 text-xs sm:text-sm text-white/80 font-body", children: "100% personnalisé · Adapté à votre niveau" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-8 bg-muted/50 border-t", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Références officielles" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.coe.int/en/web/common-european-framework-reference-languages/home", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Cadre Européen CECRL ↗" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://dictionary.cambridge.org/grammar/british-grammar/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Cambridge Grammar ↗" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://learnenglish.britishcouncil.org/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "British Council ↗" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Certifications reconnues" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.cambridgeenglish.org/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Cambridge English ↗" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.ets.org/toeic.html", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "TOEIC ↗" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition-colors", children: "Linguaskill ↗" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Dernière mise à jour" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mars 2026" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2", children: [
            "Contenu créé par ",
            /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/antonyaddy/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "Antony Addy" }),
            ", formateur certifié FPA."
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
};
export {
  Home as default
};
