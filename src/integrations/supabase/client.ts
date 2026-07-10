import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// `vite-react-ssg build` evaluates this module in Node, where the Vite-inlined
// vars may be absent. `createClient` validates its arguments and throws on an
// empty URL, which aborts the build. No route reads Supabase at build time, so
// standing in a placeholder there is safe. In the browser the real values pass
// through untouched, so a missing var still fails loudly rather than silently
// pointing the contact form at nothing.
const isBrowser = typeof window !== 'undefined';
const url = SUPABASE_URL || (isBrowser ? '' : 'https://placeholder.supabase.co');
const key = SUPABASE_PUBLISHABLE_KEY || (isBrowser ? '' : 'placeholder-key');

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY at build time.'
  );
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(url, key, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
