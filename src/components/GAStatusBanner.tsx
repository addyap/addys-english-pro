
import { useEffect, useState } from "react";

export default function GAStatusBanner() {
  const [status, setStatus] = useState("Not loaded");

  useEffect(() => {
    const interval = setInterval(() => {
      if ((window as any).gtag) {
        setStatus("✅ GA4 Active: G-DNSN8DZZTV");
      } else {
        setStatus("❌ GA4 Not detected");
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        background: "#111",
        color: "#0f0",
        fontSize: "12px",
        padding: "6px 10px",
        borderRadius: "6px",
        zIndex: 9999,
        opacity: 0.9,
        fontFamily: "monospace"
      }}
    >
      {status}
    </div>
  );
}
