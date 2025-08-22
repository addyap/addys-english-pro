
import React, { useState } from "react";

const CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png", 
  "/assets/logo.png",
  "/logo.svg",
  "/logo.png",
  "/images/logo.svg",
  "/images/logo.png",
  "/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png"
];

export default function SiteLogo({
  height = 40,
  className = "",
  alt = "Antony Addy — Formateur d'anglais professionnel",
}: {
  height?: number;
  className?: string;
  alt?: string;
}) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const src = CANDIDATES[candidateIndex];

  const handleError = () => {
    if (candidateIndex < CANDIDATES.length - 1) {
      setCandidateIndex(candidateIndex + 1);
    }
  };

  // Final text fallback so the header is never blank
  if (candidateIndex >= CANDIDATES.length) {
    return (
      <div 
        aria-label={alt} 
        className={`${className} flex items-center font-bold`}
        style={{ height, display: "flex", alignItems: "center", fontWeight: 700 }}
      >
        Antony Addy
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={`block select-none ${className}`}
      onError={handleError}
      loading="eager"
      decoding="sync"
    />
  );
}
