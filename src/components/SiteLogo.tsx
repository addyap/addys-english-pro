
import React, { useState } from "react";

const LOGO_CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png",
  "/lovable-uploads/e702870f-381a-41f9-a7a3-652513be9f42.png",
];

export default function SiteLogo({
  height = 40,
  width,
  className,
  alt = "Antony Addy — Formateur d'anglais professionnel",
}: {
  height?: number;
  width?: number;
  className?: string;
  alt?: string;
}) {
  const [idx, setIdx] = useState(0);
  const src = LOGO_CANDIDATES[idx];

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={{ height, width: width ? `${width}px` : "auto", display: "block" }}
      loading="eager"
      decoding="async"
      onError={() => {
        if (idx < LOGO_CANDIDATES.length - 1) setIdx(idx + 1);
      }}
      className={className}
    />
  );
}
