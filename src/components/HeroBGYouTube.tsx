
import React, { useMemo } from "react";

// Extract a YouTube ID from common URL formats
function getYouTubeId(u: string): string | null {
  try {
    const url = new URL(u);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.searchParams.get("v")) return url.searchParams.get("v");
    const m = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{6,})/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

type Props = {
  url: string;               // YouTube link
  poster?: string;           // fallback image
  className?: string;        // container classes
  aspectRatio?: string;      // e.g. "16/9"
};

export default function HeroBGYouTube({
  url,
  poster = "/images/hero-poster.webp",
  className = "",
  aspectRatio = "16/9",
}: Props) {
  const id = useMemo(() => getYouTubeId(url), [url]);
  if (!id) return null;

  // Autoplay, muted, looping background via privacy-enhanced domain
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&modestbranding=1&playsinline=1`;

  const style: React.CSSProperties = { aspectRatio };

  return (
    <div className={`relative overflow-hidden ${className}`} style={style} aria-hidden="true">
      {poster && (
        <img
          src={poster}
          alt=""
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
          className="absolute inset-0 h-full w-full"
          loading="eager"
          decoding="async"
        />
      )}
      <iframe
        title="Hero background video"
        className="absolute inset-0 h-full w-full"
        src={src}
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ pointerEvents: "none", border: 0 }}
      />
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          iframe[title="Hero background video"] { display: none !important; }
        }
      `}</style>
    </div>
  );
}
