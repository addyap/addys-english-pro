import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import DOMPurify from "dompurify";
import { useParams, Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, MessageCircle, Mail, Link2, ArrowLeft, Calendar, User, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { B as Button, n as trackSocialShare, o as grammarBlogPosts, d as SEOHead } from "../main.mjs";
import { motion } from "framer-motion";
import { A as ArticleSchema } from "./structuredData-5fUoonNT.js";
import { u as useScrollTracking } from "./useScrollTracking-DLDULcDn.js";
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
const categoryToExerciseContext = {
  "Grammaire - Temps": "les temps anglais",
  "Grammaire - Prépositions": "les prépositions",
  "Grammaire - Adjectifs": "les adjectifs comparatifs et superlatifs",
  "Grammaire - Noms": "les noms et quantificateurs",
  "Grammaire - Déterminants": "les déterminants et articles",
  "Grammaire - Structures": "les structures grammaticales avancées",
  "Grammaire - Verbes": "les verbes et leurs usages",
  "Grammaire - Pronoms": "les pronoms anglais",
  "Grammaire - Quantificateurs": "les quantificateurs",
  "Grammaire - Questions": "les question tags",
  "Grammaire - Intensifieurs": "les intensifieurs",
  "Grammaire & Vocabulaire": "le vocabulaire et les expressions",
  "Conseils carrière": "l'anglais professionnel",
  "Communication": "la communication professionnelle"
};
const categoryPostMap = {
  "Grammaire - Temps": ["present-simple-vs-present-continuous", "past-simple-vs-present-perfect", "past-simple-vs-past-continuous", "past-simple-vs-past-perfect", "past-perfect-continuous", "future-continuous", "future-perfect-continuous", "will-vs-going-to"],
  "Grammaire - Prépositions": ["prepositions-de-lieu", "prepositions-de-temps"],
  "Grammaire - Adjectifs": ["comparatifs-en-anglais", "superlatifs-en-anglais", "adjective-order"],
  "Grammaire - Déterminants": ["articles-a-an-the", "demonstratives-this-that-these-those", "determiners"],
  "Grammaire - Noms": ["countable-uncountable-nouns"],
  "Grammaire - Quantificateurs": ["much-many-a-lot-of", "some-and-any", "few-vs-little", "either-neither"],
  "Grammaire - Structures": ["conditionals-zero-first-second-third", "passive-voice", "reported-speech", "relative-clauses", "wish-and-if-only", "although-despite-however", "unless-as-long-as-provided"],
  "Grammaire - Verbes": ["modal-verbs", "phrasal-verbs", "gerunds-vs-infinitives", "make-vs-do", "say-vs-tell", "causative-have-get", "had-better-would-rather"],
  "Grammaire - Pronoms": ["subject-object-pronouns", "reflexive-pronouns", "possessive-adjectives", "possessive-pronouns", "possessive-adjectives-vs-pronouns"],
  "Grammaire - Questions": ["question-tags"],
  "Grammaire - Intensifieurs": ["so-and-such", "too-and-enough"],
  "Grammaire & Vocabulaire": ["erreurs-francophones", "since-vs-for", "been-vs-gone", "still-yet-already", "adverbs-of-frequency"],
  "Conseils carrière": ["anglais-professionnel-2025"],
  "Communication": ["oral-vs-ecrit"]
};
const cornerstonePosts = ["erreurs-francophones", "anglais-professionnel-2025", "present-simple-vs-present-continuous", "past-simple-vs-present-perfect"];
const topicClusters = {
  // Tenses cluster
  "present-simple-vs-present-continuous": ["past-simple-vs-present-perfect", "future-continuous", "gerunds-vs-infinitives"],
  "past-simple-vs-present-perfect": ["present-simple-vs-present-continuous", "since-vs-for", "been-vs-gone"],
  "past-simple-vs-past-continuous": ["past-simple-vs-past-perfect", "past-perfect-continuous", "reported-speech"],
  "past-simple-vs-past-perfect": ["past-simple-vs-past-continuous", "past-perfect-continuous", "conditionals-zero-first-second-third"],
  "past-perfect-continuous": ["past-simple-vs-past-perfect", "future-perfect-continuous", "since-vs-for"],
  "future-continuous": ["future-perfect-continuous", "will-vs-going-to", "present-simple-vs-present-continuous"],
  "future-perfect-continuous": ["future-continuous", "past-perfect-continuous", "will-vs-going-to"],
  "will-vs-going-to": ["future-continuous", "present-simple-vs-present-continuous", "conditionals-zero-first-second-third"],
  // Prepositions cluster
  "prepositions-de-lieu": ["prepositions-de-temps", "phrasal-verbs"],
  "prepositions-de-temps": ["prepositions-de-lieu", "since-vs-for", "still-yet-already"],
  // Comparatives cluster
  "comparatifs-en-anglais": ["superlatifs-en-anglais", "too-and-enough", "so-and-such"],
  "superlatifs-en-anglais": ["comparatifs-en-anglais", "adjective-order", "determiners"],
  // Quantifiers cluster
  "countable-uncountable-nouns": ["much-many-a-lot-of", "some-and-any", "few-vs-little", "articles-a-an-the"],
  "much-many-a-lot-of": ["countable-uncountable-nouns", "few-vs-little", "some-and-any"],
  "few-vs-little": ["much-many-a-lot-of", "countable-uncountable-nouns", "some-and-any"],
  "some-and-any": ["countable-uncountable-nouns", "much-many-a-lot-of", "either-neither"],
  // Structure cluster
  "conditionals-zero-first-second-third": ["wish-and-if-only", "unless-as-long-as-provided", "reported-speech"],
  "passive-voice": ["reported-speech", "causative-have-get", "relative-clauses"],
  "reported-speech": ["passive-voice", "past-simple-vs-past-perfect", "say-vs-tell"],
  "relative-clauses": ["passive-voice", "question-tags", "demonstratives-this-that-these-those"],
  // Verbs cluster
  "phrasal-verbs": ["prepositions-de-lieu", "gerunds-vs-infinitives", "make-vs-do"],
  "gerunds-vs-infinitives": ["phrasal-verbs", "modal-verbs", "causative-have-get"],
  "modal-verbs": ["gerunds-vs-infinitives", "had-better-would-rather", "conditionals-zero-first-second-third"],
  // Pronouns cluster
  "subject-object-pronouns": ["reflexive-pronouns", "possessive-adjectives", "possessive-pronouns"],
  "reflexive-pronouns": ["subject-object-pronouns", "possessive-pronouns", "each-other-one-another"],
  "possessive-adjectives": ["possessive-pronouns", "possessive-adjectives-vs-pronouns", "subject-object-pronouns"],
  "possessive-pronouns": ["possessive-adjectives", "possessive-adjectives-vs-pronouns", "reflexive-pronouns"],
  "possessive-adjectives-vs-pronouns": ["possessive-adjectives", "possessive-pronouns", "subject-object-pronouns"],
  // Time expressions cluster
  "since-vs-for": ["past-simple-vs-present-perfect", "been-vs-gone", "still-yet-already"],
  "been-vs-gone": ["since-vs-for", "past-simple-vs-present-perfect", "phrasal-verbs"],
  "still-yet-already": ["since-vs-for", "prepositions-de-temps", "adverbs-of-frequency"],
  // Misc grammar cluster
  "articles-a-an-the": ["countable-uncountable-nouns", "determiners", "demonstratives-this-that-these-those"],
  "determiners": ["articles-a-an-the", "demonstratives-this-that-these-those", "some-and-any"],
  "question-tags": ["relative-clauses", "modal-verbs", "so-and-such"],
  "so-and-such": ["too-and-enough", "comparatifs-en-anglais", "question-tags"],
  "too-and-enough": ["so-and-such", "comparatifs-en-anglais", "much-many-a-lot-of"],
  "either-neither": ["some-and-any", "both-all-none", "countable-uncountable-nouns"],
  "make-vs-do": ["say-vs-tell", "phrasal-verbs", "gerunds-vs-infinitives"],
  "say-vs-tell": ["make-vs-do", "reported-speech", "phrasal-verbs"],
  "wish-and-if-only": ["conditionals-zero-first-second-third", "had-better-would-rather", "modal-verbs"],
  "had-better-would-rather": ["modal-verbs", "wish-and-if-only", "conditionals-zero-first-second-third"],
  "although-despite-however": ["unless-as-long-as-provided", "conditionals-zero-first-second-third", "so-and-such"],
  "unless-as-long-as-provided": ["conditionals-zero-first-second-third", "although-despite-however", "wish-and-if-only"],
  "causative-have-get": ["passive-voice", "gerunds-vs-infinitives", "modal-verbs"],
  "adjective-order": ["superlatifs-en-anglais", "comparatifs-en-anglais", "determiners"],
  "adverbs-of-frequency": ["prepositions-de-temps", "present-simple-vs-present-continuous", "still-yet-already"],
  "demonstratives-this-that-these-those": ["articles-a-an-the", "determiners", "relative-clauses"],
  // Base articles
  "anglais-professionnel-2025": ["erreurs-francophones", "oral-vs-ecrit"],
  "erreurs-francophones": ["anglais-professionnel-2025", "phrasal-verbs", "prepositions-de-temps"],
  "oral-vs-ecrit": ["anglais-professionnel-2025", "erreurs-francophones", "reported-speech"]
};
const blogTitles = {
  "present-simple-vs-present-continuous": "Present Simple vs Present Continuous",
  "past-simple-vs-present-perfect": "Past Simple vs Present Perfect",
  "past-simple-vs-past-continuous": "Past Simple vs Past Continuous",
  "past-simple-vs-past-perfect": "Past Simple vs Past Perfect",
  "past-perfect-continuous": "Le Past Perfect Continuous",
  "future-continuous": "Le Future Continuous",
  "future-perfect-continuous": "Le Future Perfect Continuous",
  "prepositions-de-lieu": "Les prépositions de lieu",
  "prepositions-de-temps": "Les prépositions de temps",
  "comparatifs-en-anglais": "Les comparatifs en anglais",
  "superlatifs-en-anglais": "Les superlatifs en anglais",
  "countable-uncountable-nouns": "Countable vs Uncountable Nouns",
  "demonstratives-this-that-these-those": "This, That, These, Those",
  "conditionals-zero-first-second-third": "Les conditionnels anglais",
  "passive-voice": "La voix passive",
  "phrasal-verbs": "Les phrasal verbs",
  "articles-a-an-the": "Les articles A, An, The",
  "modal-verbs": "Les verbes modaux",
  "reported-speech": "Le discours indirect",
  "relative-clauses": "Les propositions relatives",
  "gerunds-vs-infinitives": "Gerunds vs Infinitives",
  "question-tags": "Les question tags",
  "so-and-such": "So et Such",
  "too-and-enough": "Too et Enough",
  "some-and-any": "Some et Any",
  "wish-and-if-only": "Wish et If only",
  "make-vs-do": "Make vs Do",
  "say-vs-tell": "Say vs Tell",
  "reflexive-pronouns": "Les pronoms réfléchis",
  "subject-object-pronouns": "Subject vs Object Pronouns",
  "possessive-adjectives": "Les adjectifs possessifs",
  "possessive-pronouns": "Les pronoms possessifs",
  "either-neither": "Either et Neither",
  "will-vs-going-to": "Will vs Going to",
  "much-many-a-lot-of": "Much, Many, A lot of",
  "since-vs-for": "Since vs For",
  "been-vs-gone": "Been vs Gone",
  "few-vs-little": "Few, A few, Little, A little",
  "possessive-adjectives-vs-pronouns": "Possessive Adjectives vs Pronouns",
  "adverbs-of-frequency": "Les adverbes de fréquence",
  "causative-have-get": "Causative Have/Get",
  "adjective-order": "L'ordre des adjectifs",
  "determiners": "Les déterminants",
  "had-better-would-rather": "Had better / Would rather",
  "although-despite-however": "Although, Despite, However",
  "still-yet-already": "Still, Yet, Already",
  "unless-as-long-as-provided": "Unless, As long as, Provided",
  "anglais-professionnel-2025": "L'anglais professionnel en 2025",
  "erreurs-francophones": "Les erreurs fréquentes des francophones",
  "oral-vs-ecrit": "Anglais oral vs écrit"
};
function stableHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}
function getFallbackRelated(postId, category) {
  const categoryPosts = categoryPostMap[category] || [];
  const sameCategoryPosts = categoryPosts.filter((id) => id !== postId && blogTitles[id]);
  if (sameCategoryPosts.length >= 2) {
    return sameCategoryPosts.slice(0, 2);
  }
  const remaining = 2 - sameCategoryPosts.length;
  const cornerstones = cornerstonePosts.filter((id) => id !== postId && !sameCategoryPosts.includes(id) && blogTitles[id]);
  return [...sameCategoryPosts, ...cornerstones.slice(0, remaining)];
}
function getRelatedContent(postId, category) {
  const exerciseContext = categoryToExerciseContext[category] || "la grammaire anglaise";
  let relatedIds = topicClusters[postId] || [];
  if (relatedIds.length === 0) {
    relatedIds = getFallbackRelated(postId, category);
  }
  const relatedTopics = relatedIds.filter((id) => blogTitles[id]).slice(0, 2).map((id) => ({
    id,
    title: blogTitles[id]
  }));
  let practiceSection = "";
  if (category.includes("Temps")) {
    practiceSection = `Pour maîtriser ${exerciseContext}, la pratique régulière est essentielle. Nos exercices interactifs vous permettent de tester vos connaissances avec un feedback immédiat. Vous pouvez également améliorer votre compréhension en contexte grâce à nos textes de lecture adaptés à votre niveau.`;
  } else if (category.includes("Prépositions")) {
    practiceSection = `Les prépositions sont souvent source de confusion pour les francophones. Entraînez-vous avec nos exercices de vocabulaire qui ciblent spécifiquement ces difficultés. La lecture de textes authentiques vous aidera également à voir ces prépositions utilisées en contexte.`;
  } else if (category.includes("Verbes")) {
    practiceSection = `Les verbes anglais présentent de nombreuses subtilités. Nos exercices interactifs vous aident à mémoriser les usages corrects grâce à la répétition espacée. Complétez votre apprentissage avec nos passages de compréhension écrite.`;
  } else if (category.includes("Structures")) {
    practiceSection = `Ces structures grammaticales demandent une pratique ciblée. Nos exercices vous proposent des situations variées pour ancrer ces règles. Les histoires interactives de notre section lecture vous permettent de les rencontrer en contexte narratif.`;
  } else if (category.includes("Pronoms")) {
    practiceSection = `Les pronoms anglais suivent des règles précises qu'il est important de maîtriser. Testez-vous avec nos exercices de grammaire pour renforcer vos acquis. Nos textes de compréhension illustrent ces usages dans des situations concrètes.`;
  } else if (category.includes("Quantificateurs") || category.includes("Noms")) {
    practiceSection = `Les quantificateurs et noms en anglais requièrent une attention particulière. Nos exercices ciblent ces points pour vous aider à automatiser les bonnes formes. Retrouvez également des exemples dans nos passages de lecture.`;
  } else if (category.includes("Déterminants")) {
    practiceSection = `Les déterminants et articles sont essentiels pour construire des phrases correctes. Entraînez-vous avec nos exercices interactifs pour ancrer ces règles. La lecture régulière renforce également votre intuition grammaticale.`;
  } else if (category === "Conseils carrière" || category === "Communication") {
    practiceSection = `Pour progresser en anglais professionnel, combinez théorie et pratique. Nos exercices couvrent le vocabulaire des affaires et les structures formelles. La lecture de textes professionnels renforce également votre compréhension du registre approprié.`;
  } else {
    practiceSection = `Pour consolider vos acquis sur ${exerciseContext}, passez à la pratique avec nos exercices interactifs. Chaque exercice propose 10 questions avec corrections détaillées. Nos textes de compréhension écrite vous permettent de voir ces points de grammaire en contexte.`;
  }
  const alwaysShowCTACategories = ["Conseils carrière", "Communication"];
  const showCommercialCTA = alwaysShowCTACategories.includes(category) || stableHash(postId) % 100 < 30;
  return {
    practiceSection,
    relatedTopics,
    showCommercialCTA
  };
}
const exerciseLinkVariants = {
  "Grammaire - Temps": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de grammaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les temps" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz interactifs de grammaire" }
  ],
  "Grammaire - Prépositions": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de vocabulaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les prépositions" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz interactifs" }
  ],
  "Grammaire - Verbes": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les verbes" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de vocabulaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz de grammaire" }
  ],
  "Grammaire - Structures": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de grammaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices interactifs" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz sur les structures" }
  ],
  "Grammaire - Pronoms": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les pronoms" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de grammaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz interactifs" }
  ],
  "Grammaire - Quantificateurs": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les quantificateurs" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices interactifs" }
  ],
  "Grammaire - Déterminants": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices sur les déterminants" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de grammaire" }
  ],
  "default": [
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices interactifs" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "exercices de grammaire" },
    { href: "https://anglaisadistance.fr/grammaire-essentielle/contrastes", label: "quiz d'anglais" }
  ]
};
const readingLinkVariants = [
  { href: "https://anglaisadistance.fr/ai-reading-comprehension", label: "Textes de compréhension" },
  { href: "https://anglaisadistance.fr/ai-reading-comprehension", label: "Passages de lecture" },
  { href: "https://anglaisadistance.fr/ai-reading-comprehension", label: "Compréhension écrite" }
];
function getExerciseLink(category, postId) {
  const variants = exerciseLinkVariants[category] || exerciseLinkVariants["default"];
  const index = postId ? stableHash(postId) % variants.length : 0;
  return variants[index];
}
function getReadingLink(postId) {
  const index = postId ? stableHash(postId + "-reading") % readingLinkVariants.length : 0;
  return readingLinkVariants[index];
}
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress2 = scrolled / scrollHeight * 100;
      setProgress(Math.min(progress2, 100));
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full bg-primary",
          style: { width: `${progress}%` },
          transition: { duration: 0.1 }
        }
      )
    }
  );
};
const SocialShare = ({
  url,
  title,
  description = "",
  hashtags = [],
  className = ""
}) => {
  const resolvedUrl = url ?? (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(resolvedUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const hashtagString = hashtags.join(",");
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}${hashtagString ? `&hashtags=${hashtagString}` : ""}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };
  const handleShare = (platform) => {
    trackSocialShare(platform, "article");
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
  };
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      trackSocialShare("copy-link", "article");
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-wrap gap-2 ${className}`, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => handleShare("facebook"),
        "aria-label": "Partager sur Facebook",
        children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => handleShare("twitter"),
        "aria-label": "Partager sur Twitter",
        children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => handleShare("linkedin"),
        "aria-label": "Partager sur LinkedIn",
        children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => handleShare("whatsapp"),
        "aria-label": "Partager sur WhatsApp",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: () => handleShare("email"),
        "aria-label": "Partager par email",
        children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "sm",
        onClick: handleCopyLink,
        "aria-label": "Copier le lien",
        children: /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" })
      }
    )
  ] });
};
const sanitize = typeof window !== "undefined" && typeof DOMPurify.sanitize === "function" ? (html) => DOMPurify.sanitize(html) : (html) => html;
const BlogArticle = () => {
  const { id } = useParams();
  const articleRef = useRef(null);
  useScrollTracking(`/blog/${id}`);
  const grammarArticlesMap = grammarBlogPosts.reduce((acc, post) => {
    acc[post.id] = {
      title: post.title,
      content: post.content,
      date: post.date,
      author: post.author,
      category: post.category,
      readTime: post.readTime,
      description: post.description,
      ogImage: post.ogImage
    };
    return acc;
  }, {});
  const baseArticles = {
    "anglais-professionnel-2025": {
      title: "Pourquoi l'anglais professionnel est une compétence essentielle en 2025",
      content: `
        <p>Dans un monde professionnel de plus en plus globalisé, maîtriser l'anglais n'est plus un simple atout sur le CV : c'est devenu une nécessité absolue pour évoluer dans sa carrière et rester compétitif sur le marché du travail.</p>

        <h2>L'anglais : langue universelle des affaires</h2>
        <p>Aujourd'hui, l'anglais s'impose comme la lingua franca des échanges commerciaux internationaux. Que ce soit pour communiquer avec des clients étrangers, participer à des réunions virtuelles avec des équipes dispersées géographiquement, ou simplement comprendre la documentation technique de votre secteur, l'anglais est omniprésent.</p>

        <h2>Les secteurs les plus demandeurs</h2>
        <p>Certains domaines d'activité sont particulièrement exigeants en matière d'anglais professionnel :</p>
        <ul>
          <li><strong>Le commerce international</strong> : négociation, relation client, présentation de produits</li>
          <li><strong>Les technologies</strong> : documentation, collaboration avec des équipes internationales</li>
          <li><strong>Le tourisme et l'hôtellerie</strong> : accueil de la clientèle internationale</li>
          <li><strong>La finance</strong> : rapports, analyses, échanges avec les marchés mondiaux</li>
        </ul>

        <h2>Comment développer son anglais professionnel ?</h2>
        <p>L'anglais professionnel diffère de l'anglais général par sa spécificité sectorielle et sa formalité. Il est essentiel de :</p>
        <ul>
          <li>Identifier le vocabulaire spécifique à votre domaine</li>
          <li>Maîtriser les codes de communication écrite (emails, rapports)</li>
          <li>Développer l'aisance orale pour les réunions et présentations</li>
          <li>Comprendre les nuances culturelles dans la communication</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Investir dans sa formation en anglais professionnel, c'est investir dans son avenir professionnel. Les opportunités s'ouvrent à ceux qui maîtrisent cette compétence devenue incontournable.</p>
      `,
      date: "2025-01-15",
      author: "Antony Addy",
      category: "Conseils carrière",
      readTime: "5 min",
      description: "Découvrez pourquoi l'anglais professionnel est devenu une compétence indispensable en 2025 et comment la développer efficacement.",
      ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
    },
    "erreurs-francophones": {
      title: "Les erreurs fréquentes chez les francophones – et comment les éviter",
      content: `
        <p>En tant que formateur d'anglais pour francophones depuis plus de 20 ans, j'ai identifié les erreurs les plus récurrentes. Bonne nouvelle : elles sont prévisibles et donc évitables !</p>

        <h2>Les faux-amis : ces mots qui nous trompent</h2>
        <p>Les faux-amis sont probablement le piège le plus courant. Voici quelques exemples classiques :</p>
        <ul>
          <li><strong>"Actually"</strong> ne signifie pas "actuellement" mais "en réalité"</li>
          <li><strong>"Eventually"</strong> ne veut pas dire "éventuellement" mais "finalement"</li>
          <li><strong>"Sensible"</strong> ne signifie pas "sensible" mais "sensé, raisonnable"</li>
        </ul>

        <h2>Les structures grammaticales problématiques</h2>
        <p>Les francophones ont tendance à calquer les structures françaises sur l'anglais :</p>
        
        <h3>L'ordre des mots</h3>
        <p>❌ "I am since 10 years in this company"<br>
        ✅ "I have been in this company for 10 years"</p>

        <h3>Les prépositions</h3>
        <p>❌ "I am interested by this project"<br>
        ✅ "I am interested in this project"</p>

        <h2>Les erreurs de prononciation typiques</h2>
        <p>Certains sons n'existent pas en français :</p>
        <ul>
          <li>Le "th" : think, this, although</li>
          <li>Le "h" aspiré : house, hotel, hospital</li>
          <li>Les voyelles courtes vs longues : ship/sheep, bit/beat</li>
        </ul>

        <h2>Comment éviter ces erreurs ?</h2>
        <p>La clé est la pratique consciente et la correction systématique. Un formateur expérimenté peut identifier vos erreurs récurrentes et vous proposer des exercices ciblés pour les corriger durablement.</p>
      `,
      date: "2025-01-10",
      author: "Antony Addy",
      category: "Grammaire & Vocabulaire",
      readTime: "7 min",
      description: "Identifiez et corrigez les erreurs les plus communes des francophones en anglais avec les conseils d'un formateur expérimenté.",
      ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
    },
    "oral-vs-ecrit": {
      title: "Anglais oral vs écrit – adapter sa communication professionnelle",
      content: `
        <p>Dans le monde professionnel, votre anglais doit s'adapter au canal de communication. Un email, une présentation orale et un appel téléphonique requièrent des registres et des techniques différents.</p>

        <h2>L'anglais écrit professionnel</h2>
        
        <h3>Les emails</h3>
        <p>L'email reste le canal de communication le plus utilisé. Les règles d'or :</p>
        <ul>
          <li><strong>Objet clair</strong> : "Meeting request - Q1 budget review"</li>
          <li><strong>Formules de politesse</strong> : "I hope this email finds you well"</li>
          <li><strong>Structure logique</strong> : contexte, demande, action attendue</li>
          <li><strong>Signature professionnelle</strong> complète</li>
        </ul>

        <h3>Les rapports et documents</h3>
        <p>Plus formels, ils demandent :</p>
        <ul>
          <li>Un vocabulaire précis et technique</li>
          <li>Des phrases complexes bien structurées</li>
          <li>Une argumentation logique</li>
          <li>Des connecteurs logiques (however, furthermore, consequently)</li>
        </ul>

        <h2>L'anglais oral professionnel</h2>

        <h3>Les présentations</h3>
        <p>L'oral permet plus de flexibilité :</p>
        <ul>
          <li><strong>Phrases plus courtes</strong> pour maintenir l'attention</li>
          <li><strong>Interactions avec l'audience</strong> : "Any questions so far?"</li>
          <li><strong>Supports visuels</strong> : "As you can see on this slide..."</li>
          <li><strong>Récapitulatifs fréquents</strong> : "So, to summarize..."</li>
        </ul>

        <h3>Les appels téléphoniques</h3>
        <p>Le défi de l'absence de langage corporel :</p>
        <ul>
          <li><strong>Articulation claire</strong> et débit maîtrisé</li>
          <li><strong>Reformulation</strong> : "Let me rephrase that..."</li>
          <li><strong>Confirmation</strong> : "Did I understand correctly that...?"</li>
        </ul>

        <h2>Adapter son registre</h2>
        <p>Le niveau de formalité varie selon :</p>
        <ul>
          <li>Votre interlocuteur (hiérarchie, client, collègue)</li>
          <li>Le contexte (réunion formelle vs discussion informelle)</li>
          <li>L'objectif (information, persuasion, négociation)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Maîtriser ces différents registres demande de la pratique. L'idéal est de s'entraîner dans des situations réalistes avec un formateur qui peut corriger en temps réel.</p>
      `,
      date: "2025-01-05",
      author: "Antony Addy",
      category: "Communication",
      readTime: "6 min",
      description: "Apprenez à adapter votre style de communication en anglais selon le canal : emails, présentations orales, appels téléphoniques.",
      ogImage: "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
    }
  };
  const articles = { ...baseArticles, ...grammarArticlesMap };
  const article = id ? articles[id] : null;
  const getRelatedPosts = () => {
    const allArticles = Object.entries(articles).filter(([key]) => key !== id);
    return allArticles.slice(0, 3);
  };
  const relatedPosts = getRelatedPosts();
  if (!article) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Article non trouvé" }),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-blue-600 hover:text-blue-800", children: "Retour au blog" })
    ] }) });
  }
  const fallbackDescription = `${article.title} — article du blog d'Antony Addy, formateur d'anglais professionnel.`;
  const articleSEO = {
    title: `${article.title} - Blog Antony Addy`,
    description: article.description && article.description.trim() || fallbackDescription,
    canonicalUrl: `https://www.antonyaddy.com/blog/${id}`,
    image: article.ogImage,
    type: "article",
    datePublished: article.date,
    section: article.category,
    keywords: [
      "article anglais",
      "anglais professionnel",
      "anglais des affaires",
      "formation continue",
      "trucs et astuces anglais",
      "anglais pour entreprises",
      "anglais pour adultes",
      "formateur d'anglais",
      "Antony Addy",
      article.category.toLowerCase()
    ]
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SEOHead, { ...articleSEO }),
    /* @__PURE__ */ jsx(
      ArticleSchema,
      {
        headline: article.title,
        description: article.description,
        image: article.ogImage,
        datePublished: article.date,
        author: { name: article.author, url: "https://www.antonyaddy.com/qui-je-suis" },
        publisher: { name: "Antony Addy", logo: "https://www.antonyaddy.com/assets/logo.svg" }
      }
    ),
    /* @__PURE__ */ jsx(ReadingProgress, {}),
    /* @__PURE__ */ jsx("div", { ref: articleRef, className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/blog",
          className: "inline-flex items-center text-blue-600 hover:text-blue-800 font-medium",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Retour au blog"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("article", { className: "bg-white rounded-lg shadow-lg p-8 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium", children: article.category }) }),
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-6", children: article.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6 text-gray-500 text-sm border-b border-gray-200 pb-6 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
              /* @__PURE__ */ jsx("time", { dateTime: article.date, children: new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(User, { className: "h-4 w-4 mr-2" }),
              article.author
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              article.readTime,
              " de lecture"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "prose prose-lg max-w-none text-gray-700",
            dangerouslySetInnerHTML: { __html: sanitize(article.content) }
          }
        ),
        (() => {
          const { practiceSection, relatedTopics, showCommercialCTA } = getRelatedContent(id || "", article.category);
          const exerciseLink = getExerciseLink(article.category, id);
          const readingLink = getReadingLink(id);
          return /* @__PURE__ */ jsxs("div", { className: "mt-10 pt-8 border-t border-gray-200", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-gray-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-blue-600" }),
              "Pratiquer ce sujet"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: practiceSection }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: exerciseLink.href,
                  target: "_blank",
                  rel: "noopener",
                  className: "inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium",
                  children: [
                    /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" }),
                    "Accéder aux ",
                    exerciseLink.label,
                    " ↗"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: readingLink.href,
                  target: "_blank",
                  rel: "noopener",
                  className: "inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-medium",
                  children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }),
                    readingLink.label,
                    " ↗"
                  ]
                }
              )
            ] }),
            relatedTopics.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-700 mb-2", children: "Articles connexes sur ce thème :" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: relatedTopics.map((topic) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/blog/${topic.id}`,
                  className: "text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1",
                  children: [
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" }),
                    topic.title
                  ]
                }
              ) }, topic.id)) })
            ] }),
            showCommercialCTA && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mt-4 italic", children: [
              "Besoin d'un accompagnement personnalisé ? Découvrez mes",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/offres-de-formation", className: "text-blue-600 hover:underline", children: "formations d'anglais professionnel" }),
              " ",
              "adaptées à votre niveau et vos objectifs."
            ] })
          ] });
        })(),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-700 mb-3", children: "Partager cet article :" }),
          /* @__PURE__ */ jsx(
            SocialShare,
            {
              title: article.title,
              description: article.description,
              hashtags: ["anglais", "formation", "BusinessEnglish"]
            }
          )
        ] })
      ] }),
      relatedPosts.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8 mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Articles connexes" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: relatedPosts.map(([key, relatedArticle]) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/blog/${key}`,
            className: "group block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-600 font-medium", children: relatedArticle.category }) }),
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2", children: relatedArticle.title }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3 mr-1" }),
                new Date(relatedArticle.date).toLocaleDateString("fr-FR", {
                  month: "short",
                  day: "numeric"
                })
              ] })
            ]
          },
          key
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-blue-50 rounded-lg p-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: "Besoin d'aide pour progresser en anglais ?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Antony Addy propose des formations personnalisées en anglais professionnel, adaptées à votre secteur et à vos objectifs." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",
              children: "Me contacter"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/offres-de-formation",
              className: "border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors",
              children: "Voir les formations"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
};
export {
  BlogArticle as default
};
