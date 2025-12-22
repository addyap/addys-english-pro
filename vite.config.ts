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
    } : {}),
  },
  ssr: {
    // Externalize dependencies that shouldn't be bundled for SSR
    noExternal: ['react-helmet-async'],
  },
}));
