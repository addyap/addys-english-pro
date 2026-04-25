import React, { useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Sparkles, RotateCcw, Eye, Wand2, CheckCircle, Presentation, Briefcase, TrendingUp, User, Crown, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import SEOHead from "@/components/SEOHead";
import SupportActions from "@/components/ai-trainer/SupportActions";
import { supabase } from "@/integrations/supabase/client";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import RatingBadge from "@/components/ai-trainer/RatingBadge";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { Correction, VocabUpgrade as VocabUpgradeType, ScoreField, RatingField } from "@/types/ai-trainers";
import { toast } from "sonner";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";

// ── Types ─────────────────────────────────────────────
interface Feedback {
  taskAchievement: ScoreField;
  clarity: ScoreField;
  grammar: ScoreField;
  vocabulary: ScoreField;
  organisation: ScoreField;
  persuasiveness: ScoreField;
  tone: RatingField;
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
}

interface Scenario {
  id: string;
  label: string;
  category: string;
  difficulty: string;
  recommendedWords: [number, number];
  brief: string;
}

// ── Categories ────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "sales", label: "Sales", icon: TrendingUp },
  { id: "career", label: "Career", icon: User },
  { id: "executive", label: "Executive", icon: Crown },
  { id: "events", label: "Events", icon: CalendarDays },
];

// ── 20 Scenarios ──────────────────────────────────────
const SCENARIOS: Scenario[] = [
  // BUSINESS
  { id: "biz-present-company", label: "Present Your Company", category: "business", difficulty: "B1–B2", recommendedWords: [120, 180],
    brief: "Introduce your company to a potential partner. Explain what the company does, who its main clients are, what makes it different from competitors, and its key strengths. Make the listener want to know more." },
  { id: "biz-explain-role", label: "Explain Your Role", category: "business", difficulty: "B1", recommendedWords: [120, 180],
    brief: "Explain your job role and daily responsibilities to a new colleague or business contact. Describe what you do, who you work with, and what your main objectives are." },
  { id: "biz-project-update", label: "Project Update", category: "business", difficulty: "B2", recommendedWords: [120, 180],
    brief: "Give a short project status update to your manager or team. Cover what has been achieved so far, any challenges encountered, and the next steps planned." },
  { id: "biz-quarterly-results", label: "Quarterly Results Summary", category: "business", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "Present a summary of your department's quarterly results. Highlight key achievements, areas for improvement, and objectives for the next quarter." },
  // SALES
  { id: "sales-present-product", label: "Present a Product", category: "sales", difficulty: "B1–B2", recommendedWords: [120, 180],
    brief: "Present a product to a potential client. Explain its main features, benefits, and why it stands out from the competition. Make the client want to learn more." },
  { id: "sales-pitch-service", label: "Pitch a Service", category: "sales", difficulty: "B2", recommendedWords: [120, 180],
    brief: "Present a service your company offers to a prospective client. Explain what the service includes, how it helps clients, and why they should choose your company." },
  { id: "sales-trade-fair", label: "Trade Fair Pitch", category: "sales", difficulty: "B1", recommendedWords: [120, 180],
    brief: "A visitor stops at your stand at a trade fair. You have 60 seconds to explain who you are, what your company does, and why they should be interested. Be engaging and concise." },
  { id: "sales-handle-objection", label: "Handle a Price Objection", category: "sales", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "A potential client says your product is too expensive. Present a persuasive response that justifies the value, highlights ROI, and overcomes the price objection professionally." },
  // CAREER
  { id: "career-introduce", label: "Introduce Yourself", category: "career", difficulty: "A2–B1", recommendedWords: [120, 180],
    brief: "Introduce yourself in a professional context — a meeting, a networking event, or a first day at work. Cover your name, background, current role, and what you bring to the table." },
  { id: "career-experience", label: "Describe Your Experience", category: "career", difficulty: "B1–B2", recommendedWords: [120, 180],
    brief: "Describe your professional background and experience to a potential employer or business contact. Highlight your key achievements and what you have learned." },
  { id: "career-interview-intro", label: "Job Interview Introduction", category: "career", difficulty: "B2", recommendedWords: [120, 180],
    brief: "Give a professional self-introduction at the start of a job interview. Cover your background, relevant experience, key skills, and why you are interested in this position." },
  { id: "career-elevator-pitch", label: "Elevator Pitch", category: "career", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "You meet a potential employer in a lift. You have 60 seconds to make an impression. Explain who you are, what you do, and what makes you unique — make them want to continue the conversation." },
  // EXECUTIVE
  { id: "exec-strategic-vision", label: "Strategic Vision", category: "executive", difficulty: "C1", recommendedWords: [120, 180],
    brief: "Present your company's strategic vision and future plans to stakeholders. Explain where the company is heading, why this direction was chosen, and what it means for the team." },
  { id: "exec-leadership", label: "Leadership Presentation", category: "executive", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "Describe your leadership style and how you manage teams. Explain your approach to motivation, decision-making, and handling challenges." },
  { id: "exec-change-management", label: "Announce a Change", category: "executive", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "Announce an important organisational change to your team (restructuring, new tool, process change). Explain the reason, the benefits, and how the transition will be managed." },
  { id: "exec-board-summary", label: "Board Meeting Summary", category: "executive", difficulty: "C1", recommendedWords: [120, 180],
    brief: "Summarise key decisions and outcomes from a recent board meeting for your team. Be concise, clear, and professional. Highlight action items and deadlines." },
  // EVENTS
  { id: "event-networking", label: "Networking Event", category: "events", difficulty: "B1", recommendedWords: [120, 180],
    brief: "Introduce yourself at a business networking event. Explain what you do, what kind of contacts you are looking for, and what value you can offer to others." },
  { id: "event-conference-intro", label: "Conference Speaker Intro", category: "events", difficulty: "B2", recommendedWords: [120, 180],
    brief: "You are about to give a conference talk. Introduce yourself and your topic to the audience. Explain what they will learn and why it matters." },
  { id: "event-award-acceptance", label: "Award Acceptance Speech", category: "events", difficulty: "B2–C1", recommendedWords: [120, 180],
    brief: "You have just received a professional award. Give a short acceptance speech thanking the relevant people, reflecting on the achievement, and looking ahead." },
  { id: "event-team-welcome", label: "Welcome a New Team Member", category: "events", difficulty: "B1", recommendedWords: [120, 180],
    brief: "Welcome a new team member in front of the team. Introduce them briefly, explain the team's mission, and make them feel included and valued." },
];

// ── Helpers ───────────────────────────────────────────
const FUNC_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/presentation-trainer`;

// ScoreBar and RatingBadge now imported from shared components

// ── Main Component ────────────────────────────────────
const AIPresentationTrainer: React.FC = () => {
  const { t: tr } = useTranslation();
  const { remaining, limitReached, recordSession, DAILY_LIMIT } = useAIDailyLimit("presentation");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();
  const [step, setStep] = useState<"select" | "write" | "feedback">("select");
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [presentationText, setPresentationText] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [modelPresentation, setModelPresentation] = useState("");
  const [improvedPresentation, setImprovedPresentation] = useState("");
  const [loadingModel, setLoadingModel] = useState(false);
  const [loadingImprove, setLoadingImprove] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sessionSaved, setSessionSaved] = useState(false);
  const sessionIdRef = useRef(crypto.randomUUID());
  const startedAtRef = useRef(new Date().toISOString());

  const filteredScenarios = selectedCategory === "all"
    ? SCENARIOS
    : SCENARIOS.filter(s => s.category === selectedCategory);

  const wordCount = presentationText.trim() ? presentationText.trim().split(/\s+/).length : 0;

  const selectScenario = (s: Scenario) => {
    setScenario(s);
    setPresentationText("");
    setFeedback(null);
    setModelPresentation("");
    setImprovedPresentation("");
    setSessionSaved(false);
    sessionIdRef.current = crypto.randomUUID();
    startedAtRef.current = new Date().toISOString();
    setStep("write");
  };

  const saveSession = useCallback(async (fb: Feedback) => {
    if (sessionSaved || !scenario) return;
    try {
      const { error } = await supabase.from("presentation_training_sessions" as any).insert({
        session_id: sessionIdRef.current,
        scenario: scenario.id,
        category: scenario.category,
        presentation_text: presentationText,
        feedback: fb as any,
        started_at: startedAtRef.current,
        completed_at: new Date().toISOString(),
        overall_level: fb.overallLevel || null,
      } as any);
      if (!error) setSessionSaved(true);
      else console.error("DB save error:", error);
    } catch (e) {
      console.error("DB save exception:", e);
    }
  }, [sessionSaved, scenario, presentationText]);

  const submitForFeedback = async () => {
    if (!scenario || loading) return;
    if (limitReached) {
      toast.error(tr("ai.dailyLimitReachedHours", { count: DAILY_LIMIT }));
      return;
    }
    recordSession();
    setLoading(true);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          action: "feedback",
          brief: scenario.brief,
          presentationText,
          scenarioLabel: scenario.label,
          feedbackLanguage: feedbackLang,
        }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        toast.error((err as any).error || tr("ai.failedFeedback"));
        return;
      }
      const data = await resp.json();
      setFeedback(data.feedback);
      setStep("feedback");
      saveSession(data.feedback);
    } catch (e) {
      toast.error(tr("ai.networkError"));
    } finally {
      setLoading(false);
    }
  };

  const fetchModelPresentation = async () => {
    if (!scenario || loadingModel) return;
    setLoadingModel(true);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({ action: "model-presentation", brief: scenario.brief, scenarioLabel: scenario.label, feedbackLanguage: feedbackLang }),
      });
      if (!resp.ok) { toast.error(tr("ai.failedModelPresentation")); return; }
      const data = await resp.json();
      setModelPresentation(data.modelPresentation || "");
    } catch { toast.error(tr("ai.networkError")); } finally { setLoadingModel(false); }
  };

  const fetchImprovedPresentation = async () => {
    if (!scenario || loadingImprove) return;
    setLoadingImprove(true);
    try {
      const resp = await fetch(FUNC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({ action: "improve-presentation", brief: scenario.brief, presentationText, scenarioLabel: scenario.label, feedbackLanguage: feedbackLang }),
      });
      if (!resp.ok) { toast.error(tr("ai.failedImprovePresentation")); return; }
      const data = await resp.json();
      setImprovedPresentation(data.improvedPresentation || "");
    } catch { toast.error(tr("ai.networkError")); } finally { setLoadingImprove(false); }
  };

  const retryPresentation = () => {
    setPresentationText("");
    setFeedback(null);
    setModelPresentation("");
    setImprovedPresentation("");
    setSessionSaved(false);
    sessionIdRef.current = crypto.randomUUID();
    startedAtRef.current = new Date().toISOString();
    setStep("write");
  };

  const chooseAnother = () => {
    setScenario(null);
    setPresentationText("");
    setFeedback(null);
    setModelPresentation("");
    setImprovedPresentation("");
    setSessionSaved(false);
    setStep("select");
  };

  // ── SELECT STEP ─────────────────────────────────────
  if (step === "select") {
    return (
      <>
        <SEOHead title="AI Presentation Trainer | Business English Practice" description="Practice professional presentations in English and receive instant AI feedback on clarity, structure, vocabulary, and persuasion." noIndex={false} />
        {/* Language toggle is shown in the header area */}
        <div className="min-h-screen bg-background py-6 md:py-10">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <div className="text-center space-y-3">
              <Badge variant="outline" className="border-primary/50 text-primary"><Presentation className="w-3 h-3 mr-1" /> AI Presentation Trainer</Badge>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Practice Professional Presentations</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">Choose a scenario, write your presentation, and receive detailed AI coaching feedback on structure, clarity, vocabulary, and persuasion.</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <Button key={cat.id} variant={selectedCategory === cat.id ? "default" : "outline"} size="sm"
                  onClick={() => setSelectedCategory(cat.id)} className="gap-1.5">
                  <cat.icon className="w-3.5 h-3.5" /> {cat.label}
                </Button>
              ))}
            </div>

            {/* Scenario Cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {filteredScenarios.map(s => (
                <Card key={s.id} className="cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all border-border hover:border-primary/40"
                  onClick={() => selectScenario(s)}>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground font-heading">{s.label}</h3>
                      <Badge variant="secondary" className="text-xs shrink-0">{s.difficulty}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{s.brief}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize">{s.category}</span>
                      <span>•</span>
                      <span>{s.recommendedWords[0]}–{s.recommendedWords[1]} words</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── WRITE STEP ──────────────────────────────────────
  if (step === "write" && scenario) {
    return (
      <>
        <SEOHead title={`${scenario.label} — AI Presentation Trainer`} noIndex />
        <div className="min-h-screen bg-background py-6 md:py-10">
          <div className="max-w-3xl mx-auto px-4 space-y-5">
            <button onClick={chooseAnother} className="flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" /> Choose another scenario
            </button>

            {/* Brief Card */}
            <Card className="border-primary/20">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <Presentation className="w-4 h-4" /> Presentation Brief
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground">{scenario.label}</h2>
                <div className="bg-muted/50 rounded-lg p-4 text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {scenario.brief}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Badge variant="secondary">{scenario.difficulty}</Badge>
                  <span>{scenario.recommendedWords[0]}–{scenario.recommendedWords[1]} words recommended</span>
                </div>
              </CardContent>
            </Card>

            {/* Writing Area */}
            <Card>
              <CardContent className="p-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Your presentation</h3>
                  <div className="bg-muted/30 rounded-lg p-3 text-xs text-muted-foreground space-y-1">
                    <p>✓ Structure your presentation with a clear opening, body, and closing</p>
                    <p>✓ Use clear transitions between ideas</p>
                    <p>✓ Speak in complete sentences</p>
                    <p>✓ Use professional vocabulary</p>
                  </div>
                </div>
                <Textarea
                  value={presentationText}
                  onChange={e => setPresentationText(e.target.value)}
                  placeholder={tr("ai.presentationPlaceholder", "Write your professional presentation here...")}
                  className="min-h-[200px] resize-y"
                />
                <p className={`text-xs ${wordCount < scenario.recommendedWords[0] ? "text-amber-600" : wordCount > scenario.recommendedWords[1] ? "text-amber-600" : "text-emerald-600"}`}>
                  {wordCount} words <span className="text-muted-foreground">(target: {scenario.recommendedWords[0]}–{scenario.recommendedWords[1]})</span>
                </p>
                <Button onClick={submitForFeedback} disabled={loading || presentationText.trim().length === 0} className="w-full" size="lg">
                  {loading ? (<><Sparkles className="w-4 h-4 animate-spin mr-2" /> Analysing your presentation…</>)
                    : (<><Send className="w-4 h-4 mr-2" /> Submit for AI Feedback</>)}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // ── FEEDBACK STEP ───────────────────────────────────
  if (step === "feedback" && feedback && scenario) {
    return (
      <>
        <SEOHead title="Your Feedback — AI Presentation Trainer" noIndex />
        <div className="min-h-screen bg-background py-6 md:py-10">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <Badge variant="outline" className="border-emerald-500/50 text-emerald-700 dark:text-emerald-300"><CheckCircle className="w-3 h-3 mr-1" /> Feedback Ready</Badge>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Your Presentation Feedback</h1>
              {feedback.overallLevel && (
                <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">CEFR Level: {feedback.overallLevel}</Badge>
              )}
            </div>

            {/* Scores */}
            <Card>
              <CardContent className="p-5 space-y-4">
                <h2 className="font-bold text-lg text-foreground">Scores</h2>
                <ScoreBar label="Task Achievement" score={feedback.taskAchievement.score} />
                {feedback.taskAchievement.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.taskAchievement.comment}</p>}
                <ScoreBar label="Clarity" score={feedback.clarity.score} />
                {feedback.clarity.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.clarity.comment}</p>}
                <ScoreBar label="Grammar" score={feedback.grammar.score} />
                {feedback.grammar.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.grammar.comment}</p>}
                <ScoreBar label="Vocabulary" score={feedback.vocabulary.score} />
                {feedback.vocabulary.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.vocabulary.comment}</p>}
                <ScoreBar label="Organisation" score={feedback.organisation.score} />
                {feedback.organisation.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.organisation.comment}</p>}
                <ScoreBar label="Persuasiveness" score={feedback.persuasiveness.score} />
                {feedback.persuasiveness.comment && <p className="text-sm text-muted-foreground -mt-2">{feedback.persuasiveness.comment}</p>}
                <RatingBadge label="Tone" rating={feedback.tone.rating} comment={feedback.tone.comment} />
              </CardContent>
            </Card>

            <CorrectionsList corrections={feedback.corrections} variant="card" />
            <SuggestionsList suggestions={feedback.suggestions} variant="card" />
            <VocabUpgrades items={feedback.advancedVocabulary} variant="card" />
            <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} overall={feedback.overall} variant="card" />

            {/* Model Presentation */}
            {modelPresentation && (
              <Card className="border-primary/20">
                <CardContent className="p-5 space-y-3">
                  <h2 className="font-bold text-lg text-foreground flex items-center gap-2"><Eye className="w-5 h-5" /> Model Presentation</h2>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm whitespace-pre-line leading-relaxed">{modelPresentation}</div>
                  <SupportActions text={modelPresentation} />
                </CardContent>
              </Card>
            )}

            {/* Improved Presentation */}
            {improvedPresentation && (
              <Card className="border-primary/20">
                <CardContent className="p-5 space-y-3">
                  <h2 className="font-bold text-lg text-foreground flex items-center gap-2"><Wand2 className="w-5 h-5" /> Improved Version of Your Presentation</h2>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm whitespace-pre-line leading-relaxed">{improvedPresentation}</div>
                  <SupportActions text={improvedPresentation} />
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {!modelPresentation && (
                <Button variant="outline" onClick={fetchModelPresentation} disabled={loadingModel} className="gap-2">
                  {loadingModel ? <Sparkles className="w-4 h-4 animate-spin" /> : <Eye className="w-4 h-4" />}
                  Show Model Presentation
                </Button>
              )}
              {!improvedPresentation && (
                <Button variant="outline" onClick={fetchImprovedPresentation} disabled={loadingImprove} className="gap-2">
                  {loadingImprove ? <Sparkles className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  Improve My Presentation
                </Button>
              )}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={retryPresentation} variant="default" className="gap-2 flex-1">
                <RotateCcw className="w-4 h-4" /> Retry This Presentation
              </Button>
              <Button onClick={chooseAnother} variant="outline" className="gap-2 flex-1">
                <Presentation className="w-4 h-4" /> Choose Another Scenario
              </Button>
            </div>

            <div className="text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default AIPresentationTrainer;
