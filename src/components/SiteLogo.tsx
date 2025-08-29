
import React, { useState } from "react";

const LOGO_CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png",
  "/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png",
];

export default function SiteLogo({
  height = 40,
  width,
  className = "",
  alt = "Antony Addy — Formateur d'anglais professionnel",
}: {
  height?: number;
  width?: number;
  className?: string;
  alt?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);
  const src = LOGO_CANDIDATES[idx];

  const w = width ?? Math.round(height * 1.0);

  const handleError = () => {
    console.log(`Logo failed to load: ${src}, trying next...`);
    if (idx < LOGO_CANDIDATES.length - 1) {
      setIdx(idx + 1);
    } else {
      console.log("All logo candidates failed, showing text fallback");
      setAllFailed(true);
    }
  };

  // If all images fail, show text fallback
  if (allFailed || !src) {
    return (
      <div 
        className={`font-heading font-bold text-primary ${className}`}
        style={{ height }}
      >
        Antony Addy
      </div>
    );
  }

  return (
    <img
      src={src}
      width={w}
      height={height}
      alt={alt}
      decoding="async"
      onError={handleError}
      className={className}
    />
  );
}
