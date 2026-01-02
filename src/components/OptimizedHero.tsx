
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";

const VIDEO_ID = "WRe3F6Ejb6E";

// Preconnect to YouTube for faster loading
const preconnectYouTube = () => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://www.youtube-nocookie.com';
    document.head.appendChild(link);
  }
};

export default function OptimizedHero() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Optimized video URL with better performance parameters
  const videoUrl = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=0&end=0&origin=${origin}&enablejsapi=0`;
  }, []);

  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
    setHasError(false);
  }, []);

  const handleVideoError = useCallback(() => {
    setHasError(true);
    setIsVideoLoaded(true);
  }, []);

  useEffect(() => {
    // Preconnect to YouTube for faster loading
    preconnectYouTube();
    
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = prefersReducedMotion ? 100 : 300;
    
    // Delay video loading for better initial page performance
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative hero-section overflow-hidden text-white min-h-screen"
      role="banner"
      aria-label="Section principale de présentation"
    >
      {/* Fallback background for video errors */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary-foreground to-secondary z-0"
          role="img"
          aria-label="Arrière-plan dégradé de secours"
        />
      )}

      {/* Loading state for video */}
      {showVideo && !isVideoLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 z-0">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      )}

      {/* YouTube background video */}
      {showVideo && !hasError && (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2"
            src={videoUrl}
            title="Vidéo de présentation des formations en anglais professionnel"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            loading="lazy"
            onLoad={handleVideoLoad}
            onError={handleVideoError}
            style={{
              border: 'none',
              pointerEvents: 'none',
              // Cover technique to eliminate side gaps
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      )}

      {/* Enhanced overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-5" />

      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu principal
      </a>

      {/* Optimized content with better semantic structure */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-heading leading-tight mb-6 hero-title drop-shadow-2xl">
            <TypingText
              texts={[
                "Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017",
              ]}
              speed={50}
              pause={3000}
              className="text-white drop-shadow-2xl"
              prioritizeLCP
            />
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white font-body drop-shadow-xl max-w-4xl mx-auto">
            Des formations claires, flexibles et efficaces — pour particuliers,
            professionnels et centres de formation.
          </p>
          
          <p className="text-lg mb-8 text-white/90 italic font-body drop-shadow-lg max-w-3xl mx-auto">
            Formateur britannique – Présentiel dans les Alpes-Maritimes, à
            distance partout en France
          </p>
        </header>

        <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Actions principales">
          <Link
            to="/offres-de-formation"
            className="group relative overflow-hidden bg-white/95 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white hover:shadow-2xl transition-all duration-300 shadow-xl font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-100"
            aria-label="Découvrir les offres de formation en anglais professionnel"
          >
            <span className="relative z-10">
              Découvrir mes offres
            </span>
            <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
          
          <Link
            to="/contact"
            className="group relative overflow-hidden border-2 border-white/90 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 font-body backdrop-blur-sm transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-100"
            aria-label="Contacter Antony Addy pour une formation personnalisée"
          >
            <span className="relative z-10">
              Me contacter
            </span>
            <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>
        </nav>
      </div>

      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Antony Addy",
          "jobTitle": "Formateur Professionnel d'Adultes en Anglais",
          "description": "Spécialiste en anglais professionnel depuis 2017, formations pour particuliers, professionnels et centres de formation",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Alpes-Maritimes",
            "addressCountry": "FR"
          },
          "offers": {
            "@type": "Service",
            "name": "Formation en anglais professionnel",
            "description": "Formations claires, flexibles et efficaces en anglais professionnel"
          }
        })}
      </script>
    </section>
  );
}
