
import React from "react";

type AutoImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Path to the original asset under public/, e.g. "/assets/hero.jpg"
   */
  src: string;
  /**
   * Optional explicit sizes attribute for responsive behavior.
   * Example: "(max-width: 768px) 100vw, 50vw"
   */
  sizes?: string;
};

function buildCandidates(originalSrc: string) {
  // Expected optimized path lives under /assets-optimized/ with pattern
  // /assets-optimized/<same-subpath>-{w}.(avif|webp)
  // We'll build generic srcset candidates; if they don't exist, browser will skip them.
  const noLeading = originalSrc.replace(/^\//, "");
  const base = noLeading.replace(/^assets\//, "assets-optimized/").replace(/\.[^.]+$/, "");
  const widths = [480, 960, 1440];
  const avif = widths.map(w => `/${base}-${w}.avif ${w}w`).join(", ");
  const webp = widths.map(w => `/${base}-${w}.webp ${w}w`).join(", ");
  return { avif, webp };
}

export default function AutoImage({ src, sizes, alt = "", ...imgProps }: AutoImageProps) {
  const { avif, webp } = buildCandidates(src);
  return (
    <picture>
      {/* Modern formats first; browsers will ignore missing files silently */}
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      {/* Fallback to original */}
      <img src={src} alt={alt} loading="lazy" decoding="async" {...imgProps} />
    </picture>
  );
}
