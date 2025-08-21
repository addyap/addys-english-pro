
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypingText } from './TypingText';
import { afterFirstInteraction, onIdle } from '../lib/loaders/deferScript';

const OptimizedHero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Defer video loading until first interaction or idle
    const initVideo = () => setShowVideo(true);
    
    afterFirstInteraction(initVideo);
    onIdle(() => {
      if (!showVideo) initVideo();
    });
  }, [showVideo]);

  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Hero poster image for immediate display */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/hero-poster.jpg"
          alt=""
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh'
          }}
        />
        
        {/* YouTube Video Background - loaded after interaction */}
        {showVideo && (
          <iframe 
            src="https://www.youtube.com/embed/02-JnWFj2Fs?autoplay=1&mute=1&loop=1&playlist=02-JnWFj2Fs&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0&start=0" 
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover" 
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh'
            }} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen={false} 
            title="Background video - Antony Addy formations anglais"
            loading="lazy"
          />
        )}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Fallback background for when video fails to load */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary -z-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center hero-title-wrap">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white text-shadow-lg font-heading leading-tight mb-6 hero-title">
            <TypingText texts={["Spécialiste en anglais professionnel – Formateur Professionnel d'Adultes depuis 2017"]} speed={60} pause={3000} className="text-white" />
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 font-body">
            Des formations claires, flexibles et efficaces — pour particuliers, professionnels et centres de formation.
          </p>
          <p className="text-lg mb-8 text-blue-200 italic font-body">Formateur britannique – Présentiel dans les Alpes-Maritimes, à distance partout en France</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/offres-de-formation" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all shadow-md font-body">
              Découvrir mes offres
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all font-body">
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;
