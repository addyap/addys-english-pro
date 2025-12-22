
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";
import { AppProviders, AppContent } from "./AppCore";

// Client-side app wrapper that includes BrowserRouter
const ClientApp = () => {
  // Monitor performance metrics
  usePerformanceMonitor((metrics) => {
    console.log('[Performance Metrics]', metrics);
  });

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </BrowserRouter>
  );
};

const App = () => (
  <AppProviders>
    <ClientApp />
  </AppProviders>
);

export default App;
