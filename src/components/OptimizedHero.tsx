
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";

const VIDEO_ID = "p5UG08OsMGw";

export default function OptimizedHero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <section className="relative hero-section overflow-hidden text-white min-h-screen">

      {/* YouTube background video */}
      {showVideo && (
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0`}
            title="Hero video background"
            allow="autoplay"
            allowFullScreen={false}
            style={{ 
              border: 'none', 
              pointerEvents: 'none',
              transform: 'scale(1.1)',
              transformOrigin: 'center center'
            }}
          />
        </div>
      )}



      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-heading leading-tight mb-6 hero-title drop-shadow-2xl">
          <TypingText
            texts={[
              "Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017",
            ]}
            speed={60}
            pause={3000}
            className="text-white drop-shadow-2xl"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white font-body drop-shadow-xl">
          Des formations claires, flexibles et efficaces — pour particuliers,
          professionnels et centres de formation.
        </p>
        <p className="text-lg mb-8 text-white/90 italic font-body drop-shadow-lg">
          Formateur britannique – Présentiel dans les Alpes-Maritimes, à
          distance partout en France
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/offres-de-formation"
            className="bg-white/95 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white hover:shadow-2xl transition-all shadow-xl font-body backdrop-blur-sm"
          >
            Découvrir mes offres
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white/90 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all font-body backdrop-blur-sm"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
