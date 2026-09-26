
import { useEffect, useState, memo } from "react";

// Optimized with passive listener and RAF throttling for better scroll performance
export const ScrollProgressBar = memo(() => {
  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScroll((window.scrollY / total) * 100);
      }
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div 
      className="fixed top-0 left-0 z-50 h-1 bg-yellow-500 will-change-[width]" 
      style={{ width: `${scroll}%` }} 
      role="progressbar"
      aria-valuenow={Math.round(scroll)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture"
    />
  );
});

export const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border-b pb-2">
      <button onClick={() => setOpen(!open)} className="w-full text-left text-lg font-semibold text-blue-900">
        {title}
      </button>
      {open && <div className="mt-2 text-gray-700">{children}</div>}
    </div>
  );
};
