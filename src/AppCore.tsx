import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import Analytics from "./components/Analytics";
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import CookieConsent from "./components/CookieConsent";
import { LanguageProvider } from "./contexts/LanguageContext";

import Layout from "./components/Layout";
import PrefetchRoutes from "./components/PrefetchRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { HeroSkeleton, CardSkeleton } from "./components/SkeletonLoader";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import ExternalRedirect from "./components/ExternalRedirect";

// Marketing pages (KEEP)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Training = lazy(() => import("./pages/Training"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CGV = lazy(() => import("./pages/CGV"));
const Questionnaire = lazy(() => import("./pages/Questionnaire"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-audience pages
const AnglaisEntreprise = lazy(() => import("./pages/AnglaisEntreprise"));
const AnglaisCadres = lazy(() => import("./pages/AnglaisCadres"));
const AnglaisParticuliers = lazy(() => import("./pages/AnglaisParticuliers"));
const AnglaisEtudiants = lazy(() => import("./pages/AnglaisEtudiants"));

// Per-city pages
const CoursAnglaisFrejus = lazy(() => import("./pages/CoursAnglaisFrejus"));
const CoursAnglaisNice = lazy(() => import("./pages/CoursAnglaisNice"));
const CoursAnglaisCannes = lazy(() => import("./pages/CoursAnglaisCannes"));
const CoursAnglaisAntibes = lazy(() => import("./pages/CoursAnglaisAntibes"));
const CoursAnglaisSophiaAntipolis = lazy(() => import("./pages/CoursAnglaisSophiaAntipolis"));


const PageLoader = () => (
  <div className="min-h-screen bg-background py-12">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <HeroSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

interface AppCoreProps {
  helmetContext?: { helmet?: any };
}

// External destination map — anglaisadistance.fr equivalents
const ADD = "https://anglaisadistance.fr";
const DEST = {
  conversation: `${ADD}/conversation-trainer`,
  grammar: `${ADD}/grammaire-essentielle`,
  grammarCorrector: `${ADD}/ai-grammar-corrector`,
  emailCoach: `${ADD}/ai-email-coach`,
  reading: `${ADD}/ai-reading-comprehension`,
  dialogues: `${ADD}/dialogues`,
  interview: `${ADD}/dialogues/job-interview`,
  exercises: `${ADD}/grammaire-essentielle/contrastes`,
  home: `${ADD}/`,
};

export const AppRoutes = () => (
  <Routes>
    {/* KEEP — focused trainer marketing site */}
    <Route path="/" element={<Home />} />
    <Route path="/qui-je-suis" element={<About />} />
    <Route path="/offres-de-formation" element={<Training />} />
    <Route path="/temoignages" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogArticle />} />
    <Route path="/mentions-legales" element={<LegalNotices />} />
    <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
    <Route path="/politique-de-confidentialite" element={<Navigate to="/politique-confidentialite" replace />} />
    <Route path="/cgv" element={<CGV />} />

    {/* Per-audience landing pages */}
    <Route path="/anglais-entreprise" element={<AnglaisEntreprise />} />
    <Route path="/anglais-cadres" element={<AnglaisCadres />} />
    <Route path="/anglais-particuliers" element={<AnglaisParticuliers />} />
    <Route path="/anglais-etudiants" element={<AnglaisEtudiants />} />

    {/* Per-city landing pages */}
    <Route path="/cours-anglais-frejus" element={<CoursAnglaisFrejus />} />
    <Route path="/cours-anglais-nice" element={<CoursAnglaisNice />} />
    <Route path="/cours-anglais-cannes" element={<CoursAnglaisCannes />} />
    <Route path="/cours-anglais-antibes" element={<CoursAnglaisAntibes />} />
    <Route path="/cours-anglais-sophia-antipolis" element={<CoursAnglaisSophiaAntipolis />} />


    {/* Internal: bookmarked sitemap page → home */}
    <Route path="/sitemap-page" element={<Navigate to="/" replace />} />

    {/* CLOE — intentionally 404 (no redirect) */}
    <Route path="/exercices/cloe-preparation/*" element={<NotFound />} />
    <Route path="/exercices/cloe/*" element={<NotFound />} />

    {/* REDIRECT — exercises (grammar lessons go to a more specific page) */}
    <Route path="/exercices/grammar/*" element={<ExternalRedirect to={DEST.grammar} />} />
    <Route path="/exercices/comprehension-ecrite" element={<ExternalRedirect to={DEST.reading} />} />
    <Route path="/exercices/*" element={<ExternalRedirect to={DEST.exercises} />} />
    <Route path="/exercices" element={<ExternalRedirect to={DEST.exercises} />} />

    {/* REDIRECT — reading & stories */}
    <Route path="/reading" element={<ExternalRedirect to={DEST.reading} />} />
    <Route path="/reading/*" element={<ExternalRedirect to={DEST.reading} />} />
    <Route path="/lecture" element={<ExternalRedirect to={DEST.reading} />} />
    <Route path="/story/*" element={<ExternalRedirect to={DEST.dialogues} />} />
    <Route path="/story-trainer" element={<ExternalRedirect to={DEST.dialogues} />} />

    {/* REDIRECT — listening legacy aliases */}
    <Route path="/listening" element={<ExternalRedirect to={DEST.exercises} />} />

    {/* REDIRECT — AI trainers */}
    <Route path="/conversation-trainer" element={<ExternalRedirect to={DEST.conversation} />} />
    <Route path="/speaking-practice" element={<ExternalRedirect to={DEST.conversation} />} />
    <Route path="/grammar-explainer" element={<ExternalRedirect to={DEST.grammar} />} />
    <Route path="/writing-coach" element={<ExternalRedirect to={DEST.grammarCorrector} />} />
    <Route path="/email-trainer" element={<ExternalRedirect to={DEST.emailCoach} />} />
    <Route path="/interview-simulator" element={<ExternalRedirect to={DEST.interview} />} />
    <Route path="/presentation-trainer" element={<ExternalRedirect to={DEST.home} />} />
    <Route path="/negotiation-trainer" element={<ExternalRedirect to={DEST.home} />} />

    {/* REDIRECT — free resources hub */}
    <Route path="/ressources-gratuites" element={<ExternalRedirect to={DEST.home} />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <PrefetchRoutes />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Standalone routes — rendered without the global Layout */}
          <Route path="/questionnaire" element={<Questionnaire />} />

          {/* All other routes use the standard Layout */}
          <Route
            path="*"
            element={
              <Layout>
                <AppRoutes />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export const AppProviders = ({
  children,
  helmetContext,
}: {
  children: React.ReactNode;
  helmetContext?: { helmet?: any };
}) => (
  <AppErrorBoundary>
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <A11yProvider>
            <LanguageProvider>
              <Analytics />
              <Toaster />
              <Sonner />
              <DiagnosticsPanel />
              <OfflineBanner />
              <CookieConsent />
              <PWAInstallPrompt />
              {children}
            </LanguageProvider>
          </A11yProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AppErrorBoundary>
);

const AppCore = ({ helmetContext }: AppCoreProps) => (
  <AppProviders helmetContext={helmetContext}>
    <AppContent />
  </AppProviders>
);

export default AppCore;
