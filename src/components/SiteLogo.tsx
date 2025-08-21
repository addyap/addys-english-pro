
import React, { useState } from "react";

const LOGO_CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png",
  "/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png", // fallback to existing
];

export default function SiteLogo({
  height = 40,
  className,
  alt = "Antony Addy — Formateur d'anglais professionnel",
}: {
  height?: number;
  className?: string;
  alt?: string;
}) {
  const [idx, setIdx] = useState(0);
  const src = LOGO_CANDIDATES[idx];

  function handleError() {
    if (idx < LOGO_CANDIDATES.length - 1) setIdx(idx + 1);
  }

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={height} // Add width to prevent CLS
      style={{ height, width: height, display: "block" }}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      onError={handleError}
      className={className}
    />
  );
}
