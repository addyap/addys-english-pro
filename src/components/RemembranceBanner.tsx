import React, { useEffect, useState } from 'react';

/**
 * Remembrance theme — a prominent, dignified band shown from Remembrance Sunday
 * through Armistice Day (8–11 November), then it quietly removes itself. Gated
 * on the client so it auto-expires without a rebuild and never causes a
 * hydration mismatch (renders nothing on the server / first paint, then appears
 * on mount if we're inside the window).
 *
 * The window is year-specific on purpose: Remembrance Sunday moves (2nd Sunday
 * of November) while Armistice Day is fixed at the 11th. Update START each year.
 */
const START = new Date('2026-11-08T00:00:00');
const END = new Date('2026-11-11T23:59:59');

const Poppy = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    {/* petals */}
    <g fill="#C8102E">
      <ellipse cx="24" cy="14" rx="9" ry="11.5" />
      <ellipse cx="24" cy="34" rx="9" ry="11.5" />
      <ellipse cx="14" cy="24" rx="11.5" ry="9" />
      <ellipse cx="34" cy="24" rx="11.5" ry="9" />
    </g>
    {/* darker inner shade + black centre */}
    <circle cx="24" cy="24" r="9" fill="#8E0B20" />
    <circle cx="24" cy="24" r="5.4" fill="#140f12" />
    <g fill="#140f12">
      <circle cx="24" cy="18.2" r="1.1" />
      <circle cx="24" cy="29.8" r="1.1" />
      <circle cx="18.2" cy="24" r="1.1" />
      <circle cx="29.8" cy="24" r="1.1" />
    </g>
  </svg>
);

export default function RemembranceBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const now = new Date();
    if (now >= START && now <= END) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <section
      role="note"
      aria-label="Jour du Souvenir — Remembrance"
      className="relative overflow-hidden text-white border-y-2 border-[#C8102E]"
      style={{
        background:
          'radial-gradient(60% 120% at 50% 0%, rgba(200,16,46,0.28), transparent 60%), linear-gradient(180deg,#0b0d18,#07080f)',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 py-4 sm:py-5 flex items-center justify-center gap-4 sm:gap-6 text-center">
        <Poppy className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 drop-shadow" />
        <div className="min-w-0">
          <p className="font-heading font-extrabold tracking-tight leading-none text-lg sm:text-2xl md:text-[1.7rem]">
            We Will Remember Them
          </p>
          <p className="mt-1.5 font-heading text-[0.62rem] sm:text-xs uppercase tracking-[0.2em] text-[#e7b4bb]">
            Lest We Forget <span className="text-[#C8102E]">·</span> Nous nous souviendrons d'eux
          </p>
          <p className="mt-1 font-heading text-[0.58rem] sm:text-[0.68rem] uppercase tracking-[0.16em] text-[#9aa2c0]">
            Remembrance Sunday&nbsp;→&nbsp;Armistice Day · 8–11 novembre
          </p>
        </div>
        <Poppy className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 drop-shadow hidden sm:block" />
      </div>
    </section>
  );
}
