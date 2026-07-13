import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import PrefetchRoutes from "./components/PrefetchRoutes";
import UmamiAnalytics from "./components/UmamiAnalytics";
import Layout from "./components/Layout";
import { HeroSkeleton, CardSkeleton } from "./components/SkeletonLoader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader = () => (
  <div className="min-h-screen bg-background py-12">
    <div className="max-w-4xl mx-auto px-4 space-y-8">
      <HeroSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

/**
 * Top-level shell rendered as the root route element.
 * Provides all global context providers + persistent UI chrome.
 * The active page is rendered by the nested <Outlet />.
 *
 * Note: vite-react-ssg already wraps this tree with its own
 * <HelmetProvider> from react-helmet-async, so we must NOT add
 * another one here (would shadow the SSG-time collection context).
 */
export const AppShell = () => (
  <AppErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <A11yProvider>
          <LanguageProvider>
            <ScrollToTop />
            <PrefetchRoutes />
            <UmamiAnalytics />
            <Toaster />
            <Sonner />
            <DiagnosticsPanel />
            <OfflineBanner />
            <PWAInstallPrompt />
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </LanguageProvider>
        </A11yProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </AppErrorBoundary>
);

/**
 * Pathless layout route — wraps marketing pages with the global
 * <Layout> (header, breadcrumbs, footer). The /questionnaire route
 * sits outside this branch so it can render full-bleed.
 */
export const LayoutShell = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default AppShell;
