
import React, { useMemo } from "react";

function getYouTubeId(u: string): string | null {
  try {
    const url = new URL(u);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.searchParams.get("v")) return url.searchParams.get("v");
    const m = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{6,})/);
    return m ? m[1] : null;
  } catch { return null; }
}

export default function HeroBGYouTube({
  url,
  poster = "/images/hero-poster.webp",
  className = "h-[60vh] md:h-[80vh]",
  aspectRatio = "16/9",
}: {
  url: string; poster?: string; className?: string; aspectRatio?: string;
}) {
  const id = useMemo(() => getYouTubeId(url), [url]);
  if (!id) return null;
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&modestbranding=1&playsinline=1`;
  const style: React.CSSProperties = { aspectRatio };
  return (
    <div className={`relative overflow-hidden ${className}`} style={style} aria-hidden="true">
      {poster && (
        <img src={poster} alt="" width={1920} height={1080}
             className="absolute inset-0 h-full w-full" style={{objectFit:"cover"}}
             loading="eager" decoding="async" />
      )}
      <iframe title="Hero background video" className="absolute inset-0 h-full w-full"
              src={src} allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy" style={{pointerEvents:"none", border:0}} />
      <style>{`@media (prefers-reduced-motion: reduce){iframe[title="Hero background video"]{display:none!important}}`}</style>
    </div>
  );
}
