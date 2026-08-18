/**
 * SSG-time browser-API shims.
 *
 * Some third-party modules reference `localStorage` at module load. During
 * `vite-react-ssg build` those modules are evaluated in Node, where
 * `localStorage` does not exist.
 *
 * (The original offender was the generated Supabase client, now removed along
 * with the rest of the unused Supabase integration. Kept because the same trap
 * applies to any dependency that touches storage at import time.)
 *
 * We install minimal no-op shims onto `globalThis` so import-time access
 * never throws. In the browser these globals already exist and are NOT
 * overwritten, so behaviour is unchanged for end users.
 *
 * This file MUST be imported before any user module that touches
 * `localStorage` / `sessionStorage` at module load.
 */

if (typeof globalThis !== "undefined") {
  const noopStorage: Storage = {
    length: 0,
    clear() {},
    getItem(_key: string) {
      return null;
    },
    key(_index: number) {
      return null;
    },
    removeItem(_key: string) {},
    setItem(_key: string, _value: string) {},
  };

  const g = globalThis as unknown as { localStorage?: Storage; sessionStorage?: Storage };
  if (typeof g.localStorage === "undefined") {
    g.localStorage = noopStorage;
  }
  if (typeof g.sessionStorage === "undefined") {
    g.sessionStorage = noopStorage;
  }
}

export {};
