import { supabase } from "@/integrations/supabase/client";

export interface FeedbackResult {
  score: number;
  rating: "Excellent" | "Good" | "Acceptable" | "Needs Improvement";
  detectedLevelRange?: string;
  feedback: string;
  correction?: string;
  tip?: string;
  nextStep?: string;
}

export interface GenerateFeedbackInput {
  userAnswer: string;
  correctAnswer: string;
  exerciseType: string;
  contextPrompt?: string;
  expectedSkill?: string;
  metadata?: Record<string, unknown>;
  /** Language code for the feedback text (en, fr, ru, uk, ar, ro, it, ...) */
  feedbackLanguage?: string;
}

const FALLBACK_FEEDBACK: FeedbackResult = {
  score: 0,
  rating: "Needs Improvement",
  detectedLevelRange: "Unknown",
  feedback: "Your answer needs improvement. Please review the task and try again.",
  correction: "",
  tip: "Check grammar, vocabulary, and clarity before submitting again.",
  nextStep: "Try again with a clearer and more complete answer.",
};

function validateFeedback(raw: unknown): FeedbackResult {
  if (!raw || typeof raw !== "object") return { ...FALLBACK_FEEDBACK };

  const obj = raw as Record<string, unknown>;

  const score = typeof obj.score === "number" ? Math.min(10, Math.max(0, obj.score)) : undefined;
  const rating = typeof obj.rating === "string" && ["Excellent", "Good", "Acceptable", "Needs Improvement"].includes(obj.rating)
    ? (obj.rating as FeedbackResult["rating"])
    : undefined;
  const feedback = typeof obj.feedback === "string" && obj.feedback.length > 0 ? obj.feedback : undefined;

  if (score === undefined || rating === undefined || feedback === undefined) {
    console.warn("[generateFeedback] Validation failed, using fallback", { score, rating, feedbackLength: feedback?.length });
    return { ...FALLBACK_FEEDBACK };
  }

  return {
    score,
    rating,
    detectedLevelRange: typeof obj.detectedLevelRange === "string" ? obj.detectedLevelRange : undefined,
    feedback,
    correction: typeof obj.correction === "string" ? obj.correction : undefined,
    tip: typeof obj.tip === "string" ? obj.tip : undefined,
    nextStep: typeof obj.nextStep === "string" ? obj.nextStep : undefined,
  };
}

export async function generateFeedback(input: GenerateFeedbackInput): Promise<FeedbackResult> {
  console.log("AI feedback request", {
    exerciseType: input.exerciseType,
    expectedSkill: input.expectedSkill,
    userAnswerLength: input.userAnswer?.length || 0,
  });

  try {
    const { data, error } = await supabase.functions.invoke("ai-feedback", {
      body: {
        userAnswer: input.userAnswer,
        correctAnswer: input.correctAnswer,
        exerciseType: input.exerciseType,
        contextPrompt: input.contextPrompt,
        expectedSkill: input.expectedSkill,
        metadata: input.metadata,
        feedbackLanguage: input.feedbackLanguage,
      },
    });

    if (error) {
      console.error("AI feedback error:", error);
      return { ...FALLBACK_FEEDBACK, correction: input.correctAnswer };
    }

    console.log("AI feedback response", data);

    const result = validateFeedback(data?.result);
    console.log("AI feedback parsed result", result);

    // Ensure correction fallback uses correctAnswer
    if (!result.correction && input.correctAnswer) {
      result.correction = input.correctAnswer;
    }

    return result;
  } catch (e) {
    console.error("AI feedback exception:", e);
    return { ...FALLBACK_FEEDBACK, correction: input.correctAnswer };
  }
}
