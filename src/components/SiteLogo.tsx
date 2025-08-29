
import React from "react";

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
  return (
    <div 
      className={`font-heading font-bold text-primary ${className}`}
      style={{ height }}
    >
      Antony Addy
    </div>
  );
}
