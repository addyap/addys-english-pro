
import { useEffect, useState } from "react";

export default function GAStatusBanner() {
  const [status, setStatus] = useState("Not loaded");
  const [consentStatus, setConsentStatus] = useState<string | null>(null);
  const id = (window as any).__GA_ID__ || import.meta.env.VITE_GA_ID || "G-DNSN8DZTZV";

  const getConsentValue = () => {
    try {
      const raw = localStorage.getItem('cookie-consent');
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch {
        return raw;
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const checkStatus = () => {
      const consent = getConsentValue();
      setConsentStatus(consent);
      
      if ((window as any).gtag) {
        setStatus(`✅ GA4 Active: ${id}`);
      } else if (consent === 'declined') {
        setStatus("🚫 GA4 Blocked (consent declined)");
      } else if (consent !== 'accepted') {
        setStatus("⏳ GA4 Waiting for consent");
      } else {
        setStatus("❌ GA4 Not detected");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);
    return () => clearInterval(interval);
  }, [id]);

  const handleResetConsent = () => {
    try {
      localStorage.removeItem('cookie-consent');
      setConsentStatus(null);
      setStatus("⏳ GA4 Waiting for consent");
      window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: null }));
      // Reload to reset GA state
      window.location.reload();
    } catch (e) {
      console.error('Failed to reset consent:', e);
    }
  };

  const show = import.meta.env.DEV || new URLSearchParams(window.location.search).has('ga_debug');
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        background: "#111",
        color: "#0f0",
        fontSize: "12px",
        padding: "8px 12px",
        borderRadius: "6px",
        zIndex: 9999,
        opacity: 0.95,
        fontFamily: "monospace",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        maxWidth: "280px"
      }}
    >
      <div>{status}</div>
      <div style={{ color: "#888", fontSize: "10px" }}>
        Consent: {consentStatus ?? "not set"}
      </div>
      <button
        onClick={handleResetConsent}
        style={{
          background: "#333",
          color: "#fff",
          border: "1px solid #555",
          borderRadius: "4px",
          padding: "4px 8px",
          fontSize: "10px",
          cursor: "pointer",
          marginTop: "4px"
        }}
      >
        🔄 Reset Consent
      </button>
    </div>
  );
}
