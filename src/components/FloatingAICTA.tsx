import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mic, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

/**
 * Mobile-only sticky CTA pointing to AI Speaking Practice.
 * Appears after scrolling past the AI hero and can be dismissed.
 */
export default function FloatingAICTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.6;
      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isMobile || !isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-4 z-50 md:hidden animate-fade-in">
      <Link
        to="/speaking-practice"
        onClick={() => trackEvent("home_floating_ai_cta_click")}
        className="group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        aria-label="Démarrer la pratique IA"
      >
        <Mic className="h-5 w-5 animate-pulse" aria-hidden="true" />
        <span className="font-semibold">👉 Démarrer l'IA</span>
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute -top-2 -right-2 bg-card text-muted-foreground rounded-full p-1 shadow-md hover:bg-muted transition-colors border border-border"
        aria-label="Fermer"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
