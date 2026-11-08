import React, { useEffect, useState } from 'react';

/**
 * Remembrance theme — a slim, solemn strip shown from Remembrance Sunday through
 * Armistice Day (8–11 November), then it quietly removes itself. Gated on the
 * client so it auto-expires without a rebuild and never causes a hydration
 * mismatch (renders nothing on the server / first paint, then appears on mount
 * if we're inside the window).
 *
 * The window is year-specific on purpose: Remembrance Sunday moves (2nd Sunday
 * of November) while Armistice Day is fixed at the 11th. Update START each year.
 */
const START = new Date('2026-11-08T00:00:00');
const END = new Date('2026-11-11T23:59:59');

const Poppy = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <g fill="currentColor">
      <ellipse cx="24" cy="15" rx="8.5" ry="10.5" />
      <ellipse cx="24" cy="33" rx="8.5" ry="10.5" />
      <ellipse cx="15" cy="24" rx="10.5" ry="8.5" />
      <ellipse cx="33" cy="24" rx="10.5" ry="8.5" />
    </g>
    <circle cx="24" cy="24" r="5.5" fill="#141414" />
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
    <div role="note" aria-label="Jour du Souvenir — Remembrance" className="bg-[#090d1e] text-[#CBCFE4] border-b border-[#C8102E]/40">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-x-2.5 gap-y-1 text-center flex-wrap">
        <span className="text-[#C8102E] inline-flex shrink-0"><Poppy className="w-4 h-4" /></span>
        <span className="font-heading text-[0.68rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white">Lest We Forget</span>
        <span className="text-[#565d7a] hidden sm:inline" aria-hidden="true">·</span>
        <span className="font-heading text-[0.68rem] sm:text-xs uppercase tracking-[0.14em] hidden sm:inline">Nous nous souviendrons d'eux</span>
        <span className="text-[#565d7a]" aria-hidden="true">·</span>
        <span className="font-heading text-[0.68rem] sm:text-xs uppercase tracking-[0.14em] text-[#8b93b6]">8–11 novembre</span>
      </div>
    </div>
  );
}
