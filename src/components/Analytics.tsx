
import { useEffect } from "react";

declare global { 
  interface Window { 
    dataLayer?: any[]; 
    gtag?: (command: string, ...args: any[]) => void;
  } 
}

export default function Analytics() {
  useEffect(() => {
    const id = import.meta.env.VITE_GA_ID || (window as any).__GA_ID__ || "G-XXXXXXXXXX"; // placeholder
    if (!id || id === "G-XXXXXXXXXX") return; // disabled until you set real GA4 ID

    window.dataLayer = window.dataLayer || [];
    function gtag(command: string, ...args: any[]){ 
      window.dataLayer!.push([command, ...args]); 
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
  }, []);
  return null;
}
