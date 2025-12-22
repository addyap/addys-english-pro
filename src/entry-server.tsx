
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import A11yProvider from './components/A11yProvider';
import Layout from './components/Layout';
import { AppRoutes } from './AppCore';

// Create a fresh QueryClient for each render
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export function render(url: string) {
  const helmetContext = {} as { helmet?: any };
  const queryClient = createQueryClient();
  
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <A11yProvider>
            <StaticRouter location={url}>
              <Layout>
                <AppRoutes />
              </Layout>
            </StaticRouter>
          </A11yProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
  
  const { helmet } = helmetContext;
  
  return {
    html,
    helmet: {
      title: helmet?.title?.toString() || '',
      meta: helmet?.meta?.toString() || '',
      link: helmet?.link?.toString() || '',
      script: helmet?.script?.toString() || ''
    }
  };
}
