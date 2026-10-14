import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import OfflineBanner from "./components/OfflineBanner";
import A11yProvider from "./components/A11yProvider";
import ScrollToTop from "./components/ScrollToTop";
import PrefetchRoutes from "./components/PrefetchRoutes";
import UmamiAnalytics from "./components/UmamiAnalytics";
import Layout from "./components/Layout";
import { HeroSkeleton, CardSkeleton } from "./components/SkeletonLoader";

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
    {/* React Query, the tooltip provider and both toasters (Radix + Sonner)
        used to wrap the app here; nothing called them, so they were ~60 KB of
        dead JS on every page. Re-add a provider when a feature needs it. */}
    <A11yProvider>
      <ScrollToTop />
      <PrefetchRoutes />
      <UmamiAnalytics />
      <DiagnosticsPanel />
      <OfflineBanner />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </A11yProvider>
  </AppErrorBoundary>
);

/**
 * Pathless layout route — wraps marketing pages with the global
 * <Layout> (header, breadcrumbs, footer).
 */
export const LayoutShell = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default AppShell;
