
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";
import { afterFirstInteraction, onIdle } from "../lib/loaders/deferScript";

// Use an existing image you already have:
const POSTER = "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png";
const POSTER_WIDTH = 1600;   // adjust if you know the real size
const POSTER_HEIGHT = 900;   // adjust if you know the real size
const VIDEO_ID = "";         // leave empty to disable video for now (stability)

export default function OptimizedHero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const initVideo = () => setShowVideo(true);
    afterFirstInteraction(initVideo);
    onIdle(() => { if (!showVideo) initVideo(); });
  }, [showVideo]);

  return (
    <section className="relative hero-section">
      {/* Poster for immediate paint */}
      <div className="absolute inset-0 -z-10">
        <img
          src={POSTER}
          alt=""
          width={POSTER_WIDTH}
          height={POSTER_HEIGHT}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* YouTube background (disabled unless VIDEO_ID is set) */}
      {showVideo && VIDEO_ID && (
        <div className="absolute inset-0 -z-10">
          <iframe
            title="Hero video"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${VIDEO_ID}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-shadow-lg font-heading leading-tight mb-6 hero-title">
          <TypingText
            texts={["Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017"]}
            speed={60}
            pause={3000}
            className="text-white"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-body">
          Des formations claires, flexibles et efficaces — pour particuliers, professionnels et centres de formation.
        </p>
        <p className="text-lg mb-8 text-blue-200 italic font-body">
          Formateur britannique – Présentiel dans les Alpes-Maritimes, à distance partout en France
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/offres-de-formation" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md font-body">
            Découvrir mes offres
          </Link>
          <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all font-body">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
