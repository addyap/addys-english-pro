import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://gkwzodsznrnbfafaqbtu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrd3pvZHN6bnJuYmZhZmFxYnR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MDkwMDEsImV4cCI6MjA4MDI4NTAwMX0.UYjHftti4PP_AefMWKN-m3ZxcK2tXTcw0NF6pV6esAw";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});
export {
  supabase as s
};
