// ============================================================================
// SSG-time browser-API shims (MUST run before any module loading)
//
// vite-react-ssg evaluates user route chunks in this same Node process via
// dynamic import. Some modules (e.g. the auto-generated Supabase client)
// touch `localStorage`/`sessionStorage` at module load. Defining no-op
// shims on `globalThis` here — at config evaluation time — guarantees they
// exist by the time any chunk is imported.
// ============================================================================
{
  const noopStorage = {
    length: 0,
    clear() {},
    getItem(_k: string) { return null; },
    key(_i: number) { return null; },
    removeItem(_k: string) {},
    setItem(_k: string, _v: string) {},
  };
  const g = globalThis as any;
  if (typeof g.localStorage === "undefined") g.localStorage = noopStorage;
  if (typeof g.sessionStorage === "undefined") g.sessionStorage = noopStorage;
}

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
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Force the entire app (and vite-react-ssg's bundled <Head>) to use the
      // same react-helmet-async copy that vite-react-ssg itself depends on
      // (v1.3.0, which exposes a Node-ESM-compatible "module" entry).
      // The root project's react-helmet-async@2.0.5 ships only a CJS entry
      // that Node refuses to named-import during SSG.
      "react-helmet-async": path.resolve(
        __dirname,
        "./node_modules/vite-react-ssg/node_modules/react-helmet-async",
      ),
    },
  },
  build: {
    rollupOptions: {
      // Manual chunks only apply to the client build; the SSR build
      // externalizes react/react-dom which would conflict.
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "react-vendor": ["react", "react-dom"],
              router: ["react-router-dom"],
              "ui-vendor": ["framer-motion", "@radix-ui/react-tooltip", "@radix-ui/react-dialog"],
              swiper: ["swiper"],
            },
          },
    },
    chunkSizeWarningLimit: 600,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: true,
      },
    },
  },
  ssr: {
    // Let vite-react-ssg manage react-helmet-async externally so it's a
    // single shared instance with our SEOHead (which now imports
    // <Head> from vite-react-ssg rather than react-helmet-async directly).
    noExternal: [],
  },
}));
