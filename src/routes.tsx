import React from "react";
import { Navigate } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";

import { AppShell, LayoutShell } from "./AppShell";
import NotFound from "./pages/NotFound";
import { grammarBlogPosts } from "./data/grammarBlogPosts";

/** Helper: lazy-load a page module whose default export is the component. */
const page = (loader: () => Promise<{ default: React.ComponentType<any> }>) =>
  () => loader().then((m) => ({ Component: m.default }));

export const routes: RouteRecord[] = [
  {
    element: <AppShell />,
    children: [
      // Standalone — no global <Layout> chrome
      {
        path: "/questionnaire",
        lazy: page(() => import("./pages/Questionnaire")),
        entry: "src/pages/Questionnaire.tsx",
      },

      // All marketing routes wrapped in <Layout>
      {
        element: <LayoutShell />,
        children: [
          // Core marketing pages
          { path: "/", lazy: page(() => import("./pages/Home")), entry: "src/pages/Home.tsx" },
          { path: "/qui-je-suis", lazy: page(() => import("./pages/About")), entry: "src/pages/About.tsx" },
          { path: "/offres-de-formation", lazy: page(() => import("./pages/Training")), entry: "src/pages/Training.tsx" },
          { path: "/temoignages", lazy: page(() => import("./pages/Testimonials")), entry: "src/pages/Testimonials.tsx" },
          { path: "/contact", lazy: page(() => import("./pages/Contact")), entry: "src/pages/Contact.tsx" },
          { path: "/thank-you", lazy: page(() => import("./pages/ThankYou")), entry: "src/pages/ThankYou.tsx" },
          { path: "/blog", lazy: page(() => import("./pages/Blog")), entry: "src/pages/Blog.tsx" },
          {
            path: "/blog/:id",
            lazy: page(() => import("./pages/BlogArticle")),
            entry: "src/pages/BlogArticle.tsx",
            // Prerender one static HTML file per article.
            getStaticPaths: () => grammarBlogPosts.map((p) => `/blog/${p.id}`),
          },
          { path: "/mentions-legales", lazy: page(() => import("./pages/LegalNotices")), entry: "src/pages/LegalNotices.tsx" },
          { path: "/politique-confidentialite", lazy: page(() => import("./pages/PrivacyPolicy")), entry: "src/pages/PrivacyPolicy.tsx" },
          { path: "/politique-de-confidentialite", element: <Navigate to="/politique-confidentialite" replace /> },
          { path: "/cgv", lazy: page(() => import("./pages/CGV")), entry: "src/pages/CGV.tsx" },

          // Free resources
          { path: "/test-de-positionnement", lazy: page(() => import("./pages/TestPositionnement")), entry: "src/pages/TestPositionnement.tsx" },

          // Per-audience landing pages
          { path: "/anglais-entreprise", lazy: page(() => import("./pages/AnglaisEntreprise")), entry: "src/pages/AnglaisEntreprise.tsx" },
          { path: "/anglais-cadres", lazy: page(() => import("./pages/AnglaisCadres")), entry: "src/pages/AnglaisCadres.tsx" },
          { path: "/anglais-particuliers", lazy: page(() => import("./pages/AnglaisParticuliers")), entry: "src/pages/AnglaisParticuliers.tsx" },
          { path: "/anglais-etudiants", lazy: page(() => import("./pages/AnglaisEtudiants")), entry: "src/pages/AnglaisEtudiants.tsx" },

          // Per-city landing pages
          { path: "/cours-anglais-frejus", lazy: page(() => import("./pages/CoursAnglaisFrejus")), entry: "src/pages/CoursAnglaisFrejus.tsx" },
          { path: "/cours-anglais-nice", lazy: page(() => import("./pages/CoursAnglaisNice")), entry: "src/pages/CoursAnglaisNice.tsx" },
          { path: "/cours-anglais-cannes", lazy: page(() => import("./pages/CoursAnglaisCannes")), entry: "src/pages/CoursAnglaisCannes.tsx" },
          { path: "/cours-anglais-antibes", lazy: page(() => import("./pages/CoursAnglaisAntibes")), entry: "src/pages/CoursAnglaisAntibes.tsx" },
          { path: "/cours-anglais-sophia-antipolis", lazy: page(() => import("./pages/CoursAnglaisSophiaAntipolis")), entry: "src/pages/CoursAnglaisSophiaAntipolis.tsx" },

          // Internal: legacy sitemap bookmark → home
          { path: "/sitemap-page", element: <Navigate to="/" replace /> },

          // CLOE & all external redirects are handled by vercel.json (301 at edge)



          // Catch-all
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
];

export default routes;
