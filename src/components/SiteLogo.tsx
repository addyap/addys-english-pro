
import React from "react";

export default function SiteLogo({
  height = 40,
  className = "",
  alt = "Antony Addy — Formateur d'anglais professionnel",
  src = "/assets/logo.svg",
}: {
  height?: number;
  className?: string;
  alt?: string;
  src?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      style={{ height, width: "auto" }}
      className={`block select-none ${className}`}
      loading="eager"
      decoding="sync"
    />
  );
}
