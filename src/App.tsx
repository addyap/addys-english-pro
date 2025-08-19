
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import DiagnosticsPanel from "./components/DiagnosticsPanel";
import Analytics from "./components/Analytics";
import GAStatusBanner from "./components/GAStatusBanner";
import Layout from "./components/Layout";
import PrefetchRoutes from "./components/PrefetchRoutes";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import AnglaisADistance from "./pages/AnglaisADistance";
import LegalNotices from "./pages/LegalNotices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Hash migration component
const HashMigration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Hash-to-clean-path migration (runs once)
    const h = window.location.hash || "";
    if (h.startsWith("#/")) {
      const clean = h.slice(1); // "/dialogues"
      navigate(clean, { replace: true });
    }
  }, [navigate]);

  return null;
};

const App = () => (
  <AppErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Analytics />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <HashMigration />
            <PrefetchRoutes />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/qui-je-suis" element={<About />} />
                <Route path="/offres-de-formation" element={<Training />} />
                <Route path="/temoignages" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogArticle />} />
                <Route path="/anglaisadistance" element={<AnglaisADistance />} />
                <Route path="/mentions-legales" element={<LegalNotices />} />
                <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
          <DiagnosticsPanel />
          <GAStatusBanner />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AppErrorBoundary>
);

export default App;
