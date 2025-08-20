
import React, { useState } from "react";

const LOGO_CANDIDATES = [
  "/assets/logo.svg",
  "/assets/logo-512.png",
];

export default function SiteLogo({
  height = 40,
  className,
  alt = "Antony Addy",
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
      style={{ height, width: "auto", display: "block" }}
      loading="eager"
      decoding="async"
      onError={handleError}
      className={className}
    />
  );
}
