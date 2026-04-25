import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mic, PenTool, Briefcase, MessageCircle, ArrowRight, Sparkles, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const AI_TOOLS = [
  {
    icon: Mic,
    emoji: "🗣️",
    title: "Parler avec l'IA",
    desc: "Pratiquez de vraies conversations",
    to: "/speaking-practice",
    accent: "from-blue-500/15 to-cyan-500/15",
    iconColor: "text-blue-600",
  },
  {
    icon: PenTool,
    emoji: "✍️",
    title: "Améliorer votre écrit",
    desc: "Recevez des corrections instantanées",
    to: "/writing-coach",
    accent: "from-emerald-500/15 to-teal-500/15",
    iconColor: "text-emerald-600",
  },
  {
    icon: Briefcase,
    emoji: "💼",
    title: "Préparer un entretien",
    desc: "Répondez comme un pro",
    to: "/interview-simulator",
    accent: "from-amber-500/15 to-orange-500/15",
    iconColor: "text-amber-600",
  },
  {
    icon: MessageCircle,
    emoji: "🤝",
    title: "Anglais professionnel",
    desc: "Scénarios de la vie réelle",
    to: "/conversation-trainer",
    accent: "from-violet-500/15 to-purple-500/15",
    iconColor: "text-violet-600",
  },
];

const scrollToAITools = () => {
  const el = document.getElementById("ai-tools");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function AIHomepageHero() {
  const navigate = useNavigate();
  const [tryText, setTryText] = useState("");

  const handleTryNow = (e: React.FormEvent) => {
    e.preventDefault();
    const text = tryText.trim();
    trackEvent("home_try_ai_submit", { length: text.length });
    const qs = text ? `?text=${encodeURIComponent(text)}` : "";
    navigate(`/writing-coach${qs}`);
  };

  return (
    <>
      {/* === AI HERO === */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground"
        aria-label="Entraînez votre anglais avec l'IA"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-foreground rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 border border-primary-foreground/30 backdrop-blur-sm text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>Entraînement d'anglais propulsé par l'IA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight mb-4 drop-shadow-2xl">
            Entraînez votre anglais avec l'IA
          </h1>

          <p className="text-lg md:text-2xl mb-8 font-body max-w-3xl mx-auto text-primary-foreground/90 drop-shadow">
            Parlez, écrivez et recevez un feedback instantané en temps réel.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Link
              to="/speaking-practice"
              onClick={() => trackEvent("home_ai_hero_primary_cta", { target: "/speaking-practice" })}
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-accent/90 hover:shadow-2xl transition-all duration-300 shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 active:scale-100"
              aria-label="Commencer à parler avec l'IA"
            >
              <Mic className="h-5 w-5" aria-hidden="true" />
              <span>Parler avec l'IA</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => {
                trackEvent("home_ai_hero_secondary_cta");
                scrollToAITools();
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/80 text-primary-foreground bg-transparent px-7 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-ring/30"
              aria-label="Explorer les outils IA"
            >
              <span>Explorer les outils IA</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* === TRY IT NOW === */}
      <section
        className="py-10 md:py-14 bg-gradient-to-b from-background to-muted/40 border-b border-border"
        aria-label="Essayez l'IA en 5 secondes"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent-foreground text-xs font-semibold mb-3">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Démo instantanée</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
              Essayez l'IA en 5 secondes
            </h2>
          </div>

          <form
            onSubmit={handleTryNow}
            className="flex flex-col sm:flex-row gap-3 bg-card border border-border rounded-xl p-3 shadow-sm"
          >
            <label htmlFor="ai-try-input" className="sr-only">
              Tapez quelque chose en anglais
            </label>
            <input
              id="ai-try-input"
              type="text"
              value={tryText}
              onChange={(e) => setTryText(e.target.value)}
              placeholder="Tapez quelque chose en anglais…"
              maxLength={500}
              className="flex-1 bg-transparent px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Analyser avec l'IA</span>
            </button>
          </form>
        </div>
      </section>

      {/* === AI TOOLS GRID === */}
      <section
        id="ai-tools"
        className="py-14 md:py-20 bg-background scroll-mt-20"
        aria-labelledby="ai-tools-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 id="ai-tools-heading" className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
              Choisissez votre entraînement IA
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez un outil et commencez à pratiquer en quelques secondes. Aucun compte requis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {AI_TOOLS.map(({ icon: Icon, emoji, title, desc, to, accent, iconColor }) => (
              <Link
                key={to}
                to={to}
                onClick={() => trackEvent("home_ai_tool_card_click", { target: to })}
                className={`group relative flex flex-col bg-card border border-border rounded-2xl p-5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                aria-label={`${title} — ${desc}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted ${iconColor}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="text-2xl" aria-hidden="true">{emoji}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    👉 Commencer
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === VALUE PROP === */}
      <section className="py-10 bg-muted/40 border-y border-border" aria-label="Pourquoi s'entraîner avec l'IA">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-semibold font-heading text-foreground">
            Vraie conversation. Vrai feedback. <span className="text-primary">Sans attendre.</span>
          </p>
        </div>
      </section>
    </>
  );
}
