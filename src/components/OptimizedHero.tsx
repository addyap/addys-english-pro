import React from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";

// Just keep the poster image for background
const POSTER = "/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png";
const POSTER_WIDTH = 1600;
const POSTER_HEIGHT = 900;

export default function OptimizedHero() {
  return (
    <section className="relative hero-section overflow-hidden bg-black text-white min-h-screen">
      {/* Static poster image only */}
      <img
        src={POSTER}
        width={POSTER_WIDTH}
        height={POSTER_HEIGHT}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
        loading="eager"
      />

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
