
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";

// LCP poster image (guarantees hero paint)
const POSTER = "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png";
const POSTER_WIDTH = 1600;
const POSTER_HEIGHT = 900;

// Updated YouTube video ID from the provided URL
const VIDEO_ID = "02-JnWFj2Fs";

export default function OptimizedHero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    // Show video immediately, no need to wait for interaction
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1000); // Small delay to let poster load first

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative hero-section overflow-hidden bg-black text-white min-h-screen">
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

      {/* YouTube background video */}
      {showVideo && VIDEO_ID && (
        <iframe
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=${VIDEO_ID}&modestbranding=1&rel=0&showinfo=0&start=0`}
          title="Hero video background (muted loop)"
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; fullscreen"
          loading="lazy"
          style={{ border: 'none' }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      {/* Content */}
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
          Formateur britannique – Présentiel dans les Alpes-Maritimes, à
          distance partout en France
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
