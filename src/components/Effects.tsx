
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed top-0 left-0 z-50 h-1 bg-yellow-500" style={{ width: `${scroll}%` }} />;
};

export const FadeInSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

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
