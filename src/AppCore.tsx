
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import Analytics from "./components/Analytics";
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import CookieConsent from "./components/CookieConsent";

import Layout from "./components/Layout";
import PrefetchRoutes from "./components/PrefetchRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { HeroSkeleton, CardSkeleton } from "./components/SkeletonLoader";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Training = lazy(() => import("./pages/Training"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));

const Exercises = lazy(() => import("./pages/Exercises"));
const ExerciseDetail = lazy(() => import("./pages/ExerciseDetail"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Install = lazy(() => import("./pages/Install"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Reading = lazy(() => import("./pages/Reading"));
const ReadingDetail = lazy(() => import("./pages/ReadingDetail"));
const InteractiveStory = lazy(() => import("./pages/InteractiveStory"));
const DragDropExerciseDetail = lazy(() => import("./pages/DragDropExerciseDetail"));
const WritingExerciseDetail = lazy(() => import("./pages/WritingExerciseDetail"));
const IdiomExerciseDetail = lazy(() => import("./pages/IdiomExerciseDetail"));
const PhrasalVerbExerciseDetail = lazy(() => import("./pages/PhrasalVerbExerciseDetail"));
const CollocationExerciseDetail = lazy(() => import("./pages/CollocationExerciseDetail"));
const ListeningLibrary = lazy(() => import("./pages/ListeningLibrary"));
const ListeningExercise = lazy(() => import("./pages/ListeningExercise"));
const AudioAdminTools = lazy(() => import("./pages/AudioAdminTools"));
const ListeningAudioCacheAdmin = lazy(() => import("./pages/admin/ListeningAudioCacheAdmin"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const SEODiagnostics = lazy(() => import("./pages/SEODiagnostics"));
const NotFound = lazy(() => import("./pages/NotFound"));

// New exercise types
const DictationExerciseDetail = lazy(() => import("./pages/DictationExerciseDetail"));
const WordFormationExerciseDetail = lazy(() => import("./pages/WordFormationExerciseDetail"));
const SynonymAntonymExerciseDetail = lazy(() => import("./pages/SynonymAntonymExerciseDetail"));
const ConditionalExerciseDetail = lazy(() => import("./pages/ConditionalExerciseDetail"));
const PronunciationExerciseDetail = lazy(() => import("./pages/PronunciationExerciseDetail"));
const ParagraphOrderingExerciseDetail = lazy(() => import("./pages/ParagraphOrderingExerciseDetail"));
const TranslationExerciseDetail = lazy(() => import("./pages/TranslationExerciseDetail"));
const ErrorCorrectionExerciseDetail = lazy(() => import("./pages/ErrorCorrectionExerciseDetail"));
const SentenceBuildingExerciseDetail = lazy(() => import("./pages/SentenceBuildingExerciseDetail"));
const FlashcardExerciseDetail = lazy(() => import("./pages/FlashcardExerciseDetail"));
const FillInTypingExerciseDetail = lazy(() => import("./pages/FillInTypingExerciseDetail"));
const CrosswordExerciseDetail = lazy(() => import("./pages/CrosswordExerciseDetail"));
const MatchingExerciseDetail = lazy(() => import("./pages/MatchingExerciseDetail"));
const DialogueExerciseDetail = lazy(() => import("./pages/DialogueExerciseDetail"));
const PrepositionExerciseDetail = lazy(() => import("./pages/PrepositionExerciseDetail"));

const PageLoader = () => (
  <div className="min-h-screen bg-background py-12">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <HeroSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

// Create a single QueryClient for SSR
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

// Routes component extracted for reuse
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/qui-je-suis" element={<About />} />
    <Route path="/offres-de-formation" element={<Training />} />
    <Route path="/temoignages" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogArticle />} />
    
    <Route path="/exercices" element={<Exercises />} />
    <Route path="/exercices/:id" element={<ExerciseDetail />} />
    <Route path="/exercices/drag-drop/:id" element={<DragDropExerciseDetail />} />
    <Route path="/exercices/writing/:type/:id" element={<WritingExerciseDetail />} />
    <Route path="/exercices/idioms/:id" element={<IdiomExerciseDetail />} />
    <Route path="/exercices/phrasal-verbs/:id" element={<PhrasalVerbExerciseDetail />} />
    <Route path="/exercices/collocations/:id" element={<CollocationExerciseDetail />} />
    <Route path="/exercices/listening" element={<ListeningLibrary />} />
    <Route path="/exercices/listening/:slug" element={<ListeningExercise />} />
    <Route path="/exercices/dictation/:id" element={<DictationExerciseDetail />} />
    <Route path="/exercices/word-formation/:id" element={<WordFormationExerciseDetail />} />
    <Route path="/exercices/synonyms-antonyms/:id" element={<SynonymAntonymExerciseDetail />} />
    <Route path="/exercices/conditionals/:id" element={<ConditionalExerciseDetail />} />
    <Route path="/exercices/pronunciation/:id" element={<PronunciationExerciseDetail />} />
    <Route path="/exercices/paragraph-ordering/:id" element={<ParagraphOrderingExerciseDetail />} />
    <Route path="/exercices/translation/:id" element={<TranslationExerciseDetail />} />
    <Route path="/exercices/error-correction/:id" element={<ErrorCorrectionExerciseDetail />} />
    <Route path="/exercices/sentence-building/:id" element={<SentenceBuildingExerciseDetail />} />
    <Route path="/exercices/flashcards/:id" element={<FlashcardExerciseDetail />} />
    <Route path="/exercices/fill-in-typing/:id" element={<FillInTypingExerciseDetail />} />
    <Route path="/exercices/crossword/:id" element={<CrosswordExerciseDetail />} />
    <Route path="/exercices/matching/:id" element={<MatchingExerciseDetail />} />
    <Route path="/exercices/dialogue/:id" element={<DialogueExerciseDetail />} />
    <Route path="/exercices/prepositions/:id" element={<PrepositionExerciseDetail />} />
    <Route path="/mentions-legales" element={<LegalNotices />} />
    <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
    <Route path="/install" element={<Install />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/reading" element={<Reading />} />
    <Route path="/reading/:id" element={<ReadingDetail />} />
    <Route path="/story/:id" element={<InteractiveStory />} />
    <Route path="/sitemap-page" element={<SitemapPage />} />
    <Route path="/admin/audio-cache" element={<AudioAdminTools />} />
    <Route path="/admin/listening-cache" element={<ListeningAudioCacheAdmin />} />
    <Route path="/admin/seo-diagnostics" element={<SEODiagnostics />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// Inner content that needs the Router context
export const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <PrefetchRoutes />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  );
};

// Full app wrapper with all providers (for client-side)
export const AppProviders = ({ 
  children,
  helmetContext
}: { 
  children: React.ReactNode;
  helmetContext?: { helmet?: any };
}) => (
  <AppErrorBoundary>
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <A11yProvider>
            <Analytics />
            <Toaster />
            <Sonner />
            <DiagnosticsPanel />
            <OfflineBanner />
            <CookieConsent />
            <PWAInstallPrompt />
            {children}
          </A11yProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AppErrorBoundary>
);

// Core app component for SSR (without BrowserRouter - that's added by entry-server.tsx or App.tsx)
const AppCore = ({ helmetContext }: AppCoreProps) => (
  <AppProviders helmetContext={helmetContext}>
    <AppContent />
  </AppProviders>
);

export default AppCore;
