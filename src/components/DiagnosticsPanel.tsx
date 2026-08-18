
import { useEffect, useMemo, useState } from "react";

const isBrowser = typeof window !== "undefined";

export default function DiagnosticsPanel() {
  const [open, setOpen] = useState<boolean>(() =>
    isBrowser ? new URLSearchParams(window.location.search).has("diag") : false,
  );
  const [fails, setFails] = useState<number>(0);
  const [lastError, setLastError] = useState<string>("");

  useEffect(() => {
    const origFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await origFetch(input, init);
      if (!res.ok) setFails((n) => n + 1);
      return res;
    };
    const handler = (e: ErrorEvent) => setLastError(e.message || "Runtime error");
    window.addEventListener("error", handler);
    return () => {
      window.fetch = origFetch;
      window.removeEventListener("error", handler);
    };
  }, []);

  const route = useMemo(
    () => (isBrowser ? window.location.pathname + window.location.search : ""),
    [],
  );

  if (!open) return null;
  return (
    <div style={{
      position: "fixed", right: 16, bottom: 16, background: "white", border: "1px solid #e5e7eb",
      borderRadius: 12, padding: 12, boxShadow: "0 10px 20px rgba(0,0,0,.1)", zIndex: 9999
    }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>Diagnostics</div>
      <div><strong>Route:</strong> {route}</div>
      <div><strong>Failed requests:</strong> {fails}</div>
      <div><strong>Last error:</strong> {lastError || "—"}</div>
      <button style={{ marginTop: 8 }} onClick={() => setOpen(false)}>Fermer</button>
    </div>
  );
}
