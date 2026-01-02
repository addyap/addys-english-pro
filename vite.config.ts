import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable SSR build when building server entry
    ...(isSsrBuild ? {
      ssr: true,
      rollupOptions: {
        input: './src/entry-server.tsx',
      },
    } : {
      // Production optimizations for client build
      rollupOptions: {
        output: {
          // Manual chunk splitting for better caching
          manualChunks: {
            // Vendor chunks - rarely change, cached longer
            'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'ui-vendor': ['framer-motion', '@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
            // Swiper is large - isolate it
            'swiper': ['swiper'],
          },
        },
      },
      // Increase chunk size warning limit slightly
      chunkSizeWarningLimit: 600,
      // Enable minification optimizations
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: true,
        },
      },
    }),
  },
  ssr: {
    // Externalize dependencies that shouldn't be bundled for SSR
    noExternal: ['react-helmet-async'],
  },
}));
