
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";
import { afterFirstInteraction, onIdle } from "../lib/loaders/deferScript";

const POSTER = "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png";
const POSTER_WIDTH = 1600;
const POSTER_HEIGHT = 900;

// YouTube hero background
const VIDEO_ID = "p5UG08OsMGw";

export default function OptimizedHero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return; // keep poster only if reduced motion

    const initVideo = () => setShowVideo(true);
    afterFirstInteraction(initVideo);
    onIdle(() => {
      if (!showVideo) initVideo();
    });
  }, [showVideo]);

  return (
    <section className="relative hero-section overflow-hidden bg-black text-white">
      {/* Poster for immediate LCP */}
      <img
        src={POSTER}
        width={POSTER_WIDTH}
        height={POSTER_HEIGHT}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="eager"
        fetchPriority="high"
      />

      <noscript>
        <img
          src={POSTER}
          alt="Hero background"
          style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:-20"
        />
      </noscript>

      {/* YouTube background */}
      {showVideo && VIDEO_ID && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=${VIDEO_ID}&modestbranding=1&rel=0&showinfo=0`}
          title="Hero video background (muted loop)"
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-shadow-lg font-heading leading-tight mb-6 hero-title">
          <TypingText
            texts={[
              "Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017",
            ]}
            speed={60}
            pause={3000}
            className="text-white"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-body">
          Des formations claires, flexibles et efficaces — pour particuliers,
          professionnels et centres de formation.
        </p>
        <p className="text-lg mb-8 text-blue-200 italic font-body">
          Formateur britannique – Présentiel dans les Alpes-Maritimes, à distance
          partout en France
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/offres-de-formation"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md font-body"
          >
            Découvrir mes offres
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all font-body"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
