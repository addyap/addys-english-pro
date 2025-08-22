
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TypingText } from "./TypingText";
import BackgroundVideo from "./BackgroundVideo";

export default function OptimizedHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          video.play().catch(() => {
            const resume = () => { 
              video.play().catch(() => {}); 
              window.removeEventListener("pointerdown", resume); 
            };
            window.addEventListener("pointerdown", resume, { once: true });
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative hero-section hero-root overflow-hidden bg-black text-white min-h-[80vh]">
      <BackgroundVideo youtubeUrl="https://youtu.be/WRe3F6Ejb6E" poster="/assets/hero-poster.jpg" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center hero-title-wrap hero-content">
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
