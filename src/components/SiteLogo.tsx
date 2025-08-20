
import React, { useState } from "react";

const LOGO_CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png", 
  "/assets/logo.png",
  "/og/antonyaddy-card.png",
];

interface SiteLogoProps {
  height?: number;
}

function SiteLogo({ height = 40 }: SiteLogoProps) {
  const [idx, setIdx] = useState(0);
  const src = LOGO_CANDIDATES[idx];
  
  return (
    <img
      src={src}
      alt="Antony Addy"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      loading="eager"
      decoding="async"
      onError={() => { 
        if (idx < LOGO_CANDIDATES.length - 1) setIdx(idx + 1); 
      }}
    />
  );
}

export default SiteLogo;
