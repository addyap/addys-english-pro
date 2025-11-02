
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
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import CookieConsent from "./components/CookieConsent";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";

import Layout from "./components/Layout";
import PrefetchRoutes from "./components/PrefetchRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { HeroSkeleton, CardSkeleton } from "./components/SkeletonLoader";

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
              <Route path="/mentions-legales" element={<LegalNotices />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
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
