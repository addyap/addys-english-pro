
import React from "react";
import logoImage from "@/assets/antony-addy-logo.png";

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
  const calculatedWidth = width || Math.round(height * 1.2); // Maintain aspect ratio

  return (
    <img
      src={logoImage}
      alt={alt}
      className={`object-contain ${className}`}
      style={{ height: `${height}px`, width: `${calculatedWidth}px` }}
    />
  );
}
