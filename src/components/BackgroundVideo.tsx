
import React, { useEffect, useRef, useState } from "react";

function toEmbed(url: string) {
  try {
    const u = new URL(url);
    const id = u.hostname.includes("youtu.be") ? u.pathname.slice(1) : u.searchParams.get("v");
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${id}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`;
  } catch {
    return "";
  }
}

export default function BackgroundVideo({
  youtubeUrl = "https://youtu.be/WRe3F6Ejb6E",
  poster = "/assets/hero-poster.jpg",
}: {
  youtubeUrl?: string;
  poster?: string;
}) {
  const [ready, setReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const kick = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      );
    };
    window.addEventListener("click", kick, { once: true });
    window.addEventListener("touchstart", kick, { once: true });
    return () => {
      window.removeEventListener("click", kick);
      window.removeEventListener("touchstart", kick);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(t);
  }, []);

  const src = toEmbed(youtubeUrl);

  return (
    <div className="bgvideo-root" aria-hidden="true">
      <img className="bgvideo-poster" src={poster} alt="" />
      {ready && (
        <iframe
          ref={iframeRef}
          className="bgvideo-iframe"
          src={src}
          title="Background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
          loading="lazy"
        />
      )}
      <div className="bgvideo-overlay" />
    </div>
  );
}
