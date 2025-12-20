
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import Analytics from "./components/Analytics";
import GAStatusBanner from "./components/GAStatusBanner";
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import CookieConsent from "./components/CookieConsent";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";

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
const AnglaisADistance = lazy(() => import("./pages/AnglaisADistance"));
const Exercises = lazy(() => import("./pages/Exercises"));
const ExerciseDetail = lazy(() => import("./pages/ExerciseDetail"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Install = lazy(() => import("./pages/Install"));
const Auth = lazy(() => import("./pages/Auth"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Reading = lazy(() => import("./pages/Reading"));
const ReadingDetail = lazy(() => import("./pages/ReadingDetail"));
const InteractiveStory = lazy(() => import("./pages/InteractiveStory"));
const DragDropExerciseDetail = lazy(() => import("./pages/DragDropExerciseDetail"));
const WritingExerciseDetail = lazy(() => import("./pages/WritingExerciseDetail"));
const ListeningLibrary = lazy(() => import("./pages/ListeningLibrary"));
const ListeningExercise = lazy(() => import("./pages/ListeningExercise"));
const AudioAdminTools = lazy(() => import("./pages/AudioAdminTools"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen bg-background py-12">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <HeroSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  // Monitor performance metrics
  usePerformanceMonitor((metrics) => {
    console.log('[Performance Metrics]', metrics);
  });

  return (
    <>
      <OfflineBanner />
      <CookieConsent />
      <PWAInstallPrompt />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <PrefetchRoutes />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qui-je-suis" element={<About />} />
              <Route path="/offres-de-formation" element={<Training />} />
              <Route path="/temoignages" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
              <Route path="/anglaisadistance" element={<AnglaisADistance />} />
              <Route path="/exercices" element={<Exercises />} />
              <Route path="/exercices/:id" element={<ExerciseDetail />} />
              <Route path="/exercices/drag-drop/:id" element={<DragDropExerciseDetail />} />
              <Route path="/exercices/writing/:type/:id" element={<WritingExerciseDetail />} />
              <Route path="/exercices/listening" element={<ListeningLibrary />} />
              <Route path="/exercices/listening/:slug" element={<ListeningExercise />} />
              <Route path="/mentions-legales" element={<LegalNotices />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/install" element={<Install />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reading" element={<Reading />} />
              <Route path="/reading/:id" element={<ReadingDetail />} />
              <Route path="/story/:id" element={<InteractiveStory />} />
              <Route path="/sitemap-page" element={<SitemapPage />} />
              <Route path="/admin/audio-cache" element={<AudioAdminTools />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <AppErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <A11yProvider>
            <Analytics />
            <GAStatusBanner />
            <Toaster />
            <Sonner />
            <DiagnosticsPanel />
            <AppContent />
          </A11yProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AppErrorBoundary>
);

export default App;
