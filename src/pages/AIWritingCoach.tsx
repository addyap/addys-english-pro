import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEOHead from "@/components/SEOHead";
import ScoreBar from "@/components/ai-trainer/ScoreBar";
import RatingBadge from "@/components/ai-trainer/RatingBadge";
import CorrectionsList from "@/components/ai-trainer/CorrectionsList";
import SuggestionsList from "@/components/ai-trainer/SuggestionsList";
import VocabUpgrades from "@/components/ai-trainer/VocabUpgrades";
import StrengthsBlock from "@/components/ai-trainer/StrengthsBlock";
import { useAIDailyLimit } from "@/hooks/useAIDailyLimit";
import type { Correction, VocabUpgrade as VocabUpgradeType } from "@/types/ai-trainers";
import { Send, RotateCcw, Loader2, ArrowLeft, FileText, Wand2, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FeedbackLanguageToggle from "@/components/ai-trainer/FeedbackLanguageToggle";
import { useFeedbackLanguage } from "@/hooks/useFeedbackLanguage";

interface Feedback {
  taskAchievement: { score: number; comment: string };
  clarity: { score: number; comment: string };
  coherence: { score: number; comment: string };
  grammar: { score: number; comment: string };
  vocabulary: { score: number; comment: string };
  style: { rating: string; comment: string };
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgradeType[];
  strengths: string;
  needsImprovement: string;
  overall: string;
  improvedVersion: string;
}

const WRITING_TYPES = [
  { value: "email", label: "Professional Email" },
  { value: "essay", label: "Essay / Composition" },
  { value: "report", label: "Business Report" },
  { value: "cover-letter", label: "Cover Letter" },
  { value: "linkedin", label: "LinkedIn Post" },
  { value: "presentation", label: "Presentation Script" },
  { value: "meeting-notes", label: "Meeting Notes / Minutes" },
  { value: "general", label: "General Writing" },
];

const AIWritingCoach = () => {
  const [text, setText] = useState("");
  const [writingType, setWritingType] = useState("email");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [showImproved, setShowImproved] = useState(false);
  const { remaining, limitReached, recordSession } = useAIDailyLimit("writing-coach");
  const [feedbackLang, setFeedbackLang] = useFeedbackLanguage();

  const submit = async () => {
    if (text.trim().length < 20) { toast.error("Écrivez au moins 20 caractères."); return; }
    if (limitReached) { toast.error("Limite quotidienne atteinte (10 sessions / 24h)"); return; }

    setLoading(true);
    setFeedback(null);
    recordSession();

    try {
      const { data, error } = await supabase.functions.invoke("writing-coach", {
        body: { text: text.trim(), writingType, feedbackLanguage: feedbackLang },
      });
      if (error) throw error;
      setFeedback(data.feedback);
    } catch (e: any) {
      toast.error("Erreur lors de l'analyse. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setText("");
    setFeedback(null);
    setShowImproved(false);
  };

  return (
    <>
      <SEOHead
        title="AI Writing Coach — Correction anglais écrit | Addy's English"
        description="Soumettez un texte en anglais et recevez un feedback IA détaillé : grammaire, vocabulaire, style et version améliorée."
        canonical="/writing-coach"
      />
      <div className="min-h-screen bg-background py-10">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Badge variant="secondary">
                <FileText className="w-3 h-3 mr-1" /> {remaining}/{10} sessions restantes
              </Badge>
              <FeedbackLanguageToggle value={feedbackLang} onChange={setFeedbackLang} />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              ✍️ AI Writing Coach
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Écrivez en anglais et recevez un feedback détaillé sur la grammaire, le vocabulaire, le style et la clarté — avec une version améliorée.
            </p>
          </div>

          {!feedback ? (
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Type de texte</label>
                  <Select value={writingType} onValueChange={setWritingType}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {WRITING_TYPES.map(t => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Votre texte en anglais</label>
                  <Textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Write your text in English here..."
                    className="min-h-[200px]"
                    maxLength={3000}
                  />
                  <p className="text-xs text-muted-foreground mt-1 text-right">{text.length}/3000</p>
                </div>

                <Button
                  onClick={submit}
                  disabled={loading || text.trim().length < 20 || limitReached}
                  className="w-full"
                >
                  {loading ? (
                    <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Analyse en cours...</>
                  ) : (
                    <><Wand2 className="w-4 h-4 mr-2" /> Analyser mon texte</>
                  )}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading font-bold">📊 Feedback</h2>
                <Badge className="text-lg px-4 py-1">{feedback.overallLevel}</Badge>
              </div>

              <div className="grid gap-4">
                <ScoreBar label="Task Achievement" score={feedback.taskAchievement.score} comment={feedback.taskAchievement.comment} />
                <ScoreBar label="Clarity" score={feedback.clarity.score} comment={feedback.clarity.comment} />
                <ScoreBar label="Coherence" score={feedback.coherence.score} comment={feedback.coherence.comment} />
                <ScoreBar label="Grammar" score={feedback.grammar.score} comment={feedback.grammar.comment} />
                <ScoreBar label="Vocabulary" score={feedback.vocabulary.score} comment={feedback.vocabulary.comment} />
              </div>

              <Card className="p-4">
                <p className="text-sm font-medium text-muted-foreground mb-1">Style</p>
                <RatingBadge label="Style" rating={feedback.style.rating} comment={feedback.style.comment} />
              </Card>

              <StrengthsBlock strengths={feedback.strengths} needsImprovement={feedback.needsImprovement} />
              <CorrectionsList corrections={feedback.corrections} />
              <VocabUpgrades items={feedback.advancedVocabulary} />
              <SuggestionsList suggestions={feedback.suggestions} />

              {/* Improved version */}
              <Card className="border-primary/20">
                <CardHeader className="cursor-pointer" onClick={() => setShowImproved(!showImproved)}>
                  <CardTitle className="flex items-center justify-between text-base">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Version améliorée
                    </span>
                    {showImproved ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </CardTitle>
                </CardHeader>
                {showImproved && (
                  <CardContent>
                    <p className="text-sm whitespace-pre-wrap bg-primary/5 p-4 rounded-lg">{feedback.improvedVersion}</p>
                  </CardContent>
                )}
              </Card>

              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="font-semibold mb-1">Overall</p>
                <p className="text-sm">{feedback.overall}</p>
              </Card>

              <Button onClick={reset} className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" /> Nouveau texte
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AIWritingCoach;
