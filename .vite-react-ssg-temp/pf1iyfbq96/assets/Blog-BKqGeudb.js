import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Search, X, Calendar, User, ArrowRight } from "lucide-react";
import { m as grammarArticles, d as SEOHead } from "../main.mjs";
import { motion } from "framer-motion";
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
const BlogSearch = ({ articles, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const onFilterChangeRef = useRef(onFilterChange);
  onFilterChangeRef.current = onFilterChange;
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category));
    return ["all", ...Array.from(cats)];
  }, [articles]);
  const filteredArticles = useMemo(() => {
    let filtered = articles;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((a) => a.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (a) => a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [articles, searchQuery, selectedCategory]);
  useEffect(() => {
    onFilterChangeRef.current(filteredArticles);
  }, [filteredArticles]);
  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-card rounded-lg shadow-md p-6 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Rechercher un article...",
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
          "aria-label": "Rechercher dans les articles"
        }
      ),
      searchQuery && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSearchQuery(""),
          className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
          "aria-label": "Effacer la recherche",
          type: "button",
          children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", role: "group", "aria-label": "Filtrer par catégorie", children: categories.map((category) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setSelectedCategory(category),
        type: "button",
        className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
        "aria-pressed": selectedCategory === category,
        children: category === "all" ? "Tous" : category
      },
      category
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("span", { "aria-live": "polite", children: [
        filteredArticles.length,
        " article",
        filteredArticles.length !== 1 ? "s" : "",
        " trouvé",
        filteredArticles.length !== 1 ? "s" : ""
      ] }),
      (searchQuery || selectedCategory !== "all") && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: clearSearch,
          type: "button",
          className: "text-primary hover:text-primary/80 font-medium transition-colors",
          children: "Réinitialiser les filtres"
        }
      )
    ] })
  ] }) });
};
const AnimatedCard = ({
  children,
  className = "",
  onClick,
  href,
  hoverScale = 1.02,
  delay = 0
}) => {
  const baseClasses = "block rounded-lg transition-shadow";
  const classes = `${baseClasses} ${className}`;
  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, delay },
    whileHover: { scale: hoverScale },
    whileTap: onClick || href ? { scale: 0.98 } : {}
  };
  if (href) {
    return /* @__PURE__ */ jsx(
      motion.a,
      {
        href,
        className: classes,
        ...motionProps,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      onClick,
      className: classes,
      style: { cursor: onClick ? "pointer" : "default" },
      ...motionProps,
      children
    }
  );
};
const Blog = () => {
  useScrollTracking("blog");
  useTimeTracking("blog");
  const baseArticles = useMemo(() => [
    {
      id: "anglais-professionnel-2025",
      title: "Pourquoi l'anglais professionnel est une compétence essentielle en 2025",
      excerpt: "Dans un monde professionnel de plus en plus globalisé, maîtriser l'anglais n'est plus un atout mais une nécessité. Découvrez pourquoi et comment développer cette compétence clé.",
      date: "2026-01-15",
      author: "Antony Addy",
      category: "Conseils carrière",
      readTime: "5 min"
    },
    {
      id: "erreurs-francophones",
      title: "Les erreurs fréquentes chez les francophones – et comment les éviter",
      excerpt: "Faux-amis, structures grammaticales françaises traduites littéralement... Identifiez et corrigez les erreurs les plus communes des francophones en anglais.",
      date: "2026-01-10",
      author: "Antony Addy",
      category: "Grammaire & Vocabulaire",
      readTime: "7 min"
    },
    {
      id: "oral-vs-ecrit",
      title: "Anglais oral vs écrit – adapter sa communication professionnelle",
      excerpt: "L'anglais professionnel diffère selon le canal de communication. Apprenez à adapter votre style entre emails, présentations orales et conversations téléphoniques.",
      date: "2026-01-05",
      author: "Antony Addy",
      category: "Communication",
      readTime: "6 min"
    }
  ], []);
  const articles = useMemo(() => [...baseArticles, ...grammarArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ), [baseArticles]);
  useEffect(() => {
    articles.map((a) => ({ id: a.id, category: a.category }));
  }, [articles]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    if (!isInitialized) {
      setFilteredArticles(articles);
      setIsInitialized(true);
    }
  }, [articles, isInitialized]);
  const handleFilterChange = useCallback((filtered) => {
    setFilteredArticles(filtered);
  }, []);
  const displayArticles = isInitialized ? filteredArticles : articles;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Blog Anglais | Grammaire, Vocabulaire & Conseils",
        description: "Conseils d'expert pour progresser en anglais : grammaire, vocabulaire, erreurs courantes. Articles par un formateur FPA certifié.",
        canonicalUrl: "https://www.antonyaddy.com/blog",
        datePublished: "2026-01-15T10:00:00+01:00",
        dateModified: "2026-01-17T10:00:00+01:00",
        image: "https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png",
        imageAlt: "Blog anglais professionnel par Antony Addy",
        enableOrgJsonLd: true,
        enableWebSiteJsonLd: true,
        keywords: [
          "blog anglais",
          "conseils anglais",
          "grammaire anglaise",
          "vocabulaire professionnel"
        ],
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Anglais Professionnel - Antony Addy",
            description: "Conseils d'expert, astuces pratiques et ressources pour progresser en anglais professionnel. Articles rédigés par un formateur britannique natif certifié FPA.",
            url: "https://www.antonyaddy.com/blog",
            author: {
              "@type": "Person",
              name: "Antony Addy",
              url: "https://www.antonyaddy.com",
              jobTitle: "Formateur Professionnel d'Adultes certifié"
            },
            inLanguage: "fr",
            publisher: {
              "@type": "Person",
              name: "Antony Addy"
            }
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-muted/30 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-4", children: "Blog Anglais Professionnel" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "Conseils d'expert, astuces pratiques et ressources pour progresser en anglais. Articles rédigés par un formateur britannique certifié FPA, avec plus de 20 ans d'expérience." })
      ] }),
      /* @__PURE__ */ jsx(BlogSearch, { articles, onFilterChange: handleFilterChange }),
      displayArticles.length > 0 && /* @__PURE__ */ jsx(AnimatedCard, { className: "bg-card shadow-lg mb-12 overflow-hidden", hoverScale: 1.01, children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center mb-4 text-sm text-muted-foreground", children: /* @__PURE__ */ jsx("span", { className: "bg-primary/10 text-primary px-3 py-1 rounded-full font-medium", children: "Article mis en avant" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-card-foreground mb-4", children: displayArticles[0].title }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6", children: displayArticles[0].excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-1" }),
              new Date(displayArticles[0].date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(User, { className: "h-4 w-4 mr-1" }),
              displayArticles[0].author
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              displayArticles[0].readTime,
              " de lecture"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/blog/${displayArticles[0].id}`,
              className: "inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95",
              children: [
                "Lire l'article",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-2" })
              ]
            }
          )
        ] })
      ] }) }),
      displayArticles.length > 1 && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: displayArticles.slice(1).map((article, index) => /* @__PURE__ */ jsx(
        Link,
        {
          to: `/blog/${article.id}`,
          className: "block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg",
          "aria-label": `Lire l'article : ${article.title}`,
          children: /* @__PURE__ */ jsx(AnimatedCard, { className: "bg-card shadow-md h-full", delay: index * 0.1, children: /* @__PURE__ */ jsx("article", { className: "overflow-hidden h-full", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center mb-3", children: /* @__PURE__ */ jsx("span", { className: "bg-accent/20 text-accent-foreground px-2 py-1 rounded text-sm font-medium", children: article.category }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-card-foreground mb-3 line-clamp-2", children: article.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 line-clamp-3", children: article.excerpt }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: new Date(article.date).toLocaleDateString("fr-FR", {
                  month: "short",
                  day: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-primary font-medium flex items-center", children: [
                "Lire plus",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-1" })
              ] })
            ] })
          ] }) }) })
        },
        article.id
      )) }),
      displayArticles.length === 0 && isInitialized && /* @__PURE__ */ jsxs("div", { className: "text-center py-12 bg-card rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground mb-4", children: "Aucun article ne correspond à vos critères de recherche" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground/70", children: "Essayez de modifier votre recherche ou vos filtres" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground rounded-lg p-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Restez informé des derniers conseils" }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/80 mb-6 max-w-2xl mx-auto", children: "Recevez mes meilleurs conseils pour progresser en anglais professionnel directement dans votre boîte email" }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors",
            children: "Me contacter pour plus d'informations"
          }
        )
      ] })
    ] }) })
  ] });
};
export {
  Blog as default
};
