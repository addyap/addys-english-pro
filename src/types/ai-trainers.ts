// Shared types for all AI trainer pages

export interface ScoreField {
  score: number;
  comment: string;
}

export interface RatingField {
  rating: string;
  comment: string;
}

export interface Correction {
  wrong: string;
  correct: string;
  explanation: string;
}

export interface VocabUpgrade {
  basic: string;
  advanced: string;
}

/** Base feedback fields shared across all trainers */
export interface BaseFeedback {
  grammar: ScoreField;
  vocabulary: ScoreField;
  overallLevel: string;
  corrections: Correction[];
  suggestions: string[];
  advancedVocabulary: VocabUpgrade[];
  strengths: string;
  needsImprovement: string;
  overall: string;
}

/** Conversation trainer feedback */
export interface ConversationFeedback extends BaseFeedback {
  fluency: ScoreField;
  tone: RatingField;
  estimatedSpeakingTime: string;
}

/** Email trainer feedback */
export interface EmailFeedback extends BaseFeedback {
  taskAchievement: ScoreField;
  clarity: ScoreField;
  organisation: ScoreField;
  tone: RatingField;
  subjectLine: RatingField;
  greeting: RatingField;
  closing: RatingField;
}

/** Presentation trainer feedback */
export interface PresentationFeedback extends BaseFeedback {
  taskAchievement: ScoreField;
  clarity: ScoreField;
  organisation: ScoreField;
  persuasiveness: ScoreField;
  tone: RatingField;
}

/** Negotiation trainer feedback */
export interface NegotiationFeedback extends BaseFeedback {
  persuasion: ScoreField;
  clarity: ScoreField;
  strategy: ScoreField;
  professionalism: ScoreField;
}

/** Speaking practice feedback */
export interface SpeakingFeedback extends BaseFeedback {
  fluency: ScoreField;
  pronunciation: ScoreField;
  tone: RatingField;
}

/** Writing coach feedback */
export interface WritingCoachFeedback extends BaseFeedback {
  taskAchievement: ScoreField;
  clarity: ScoreField;
  coherence: ScoreField;
  style: RatingField;
}

/** Interview simulator feedback */
export interface InterviewFeedback extends BaseFeedback {
  clarity: ScoreField;
  relevance: ScoreField;
  confidence: RatingField;
  structure: ScoreField;
}

/** Grammar explainer result */
export interface GrammarExplainerResult {
  sentence: string;
  breakdown: Array<{
    word: string;
    partOfSpeech: string;
    role: string;
    explanation: string;
  }>;
  rules: Array<{
    name: string;
    explanation: string;
    example: string;
  }>;
  level: string;
  tips: string[];
}

export type TrainerType = "conversation" | "email" | "presentation" | "negotiation" | "speaking" | "writing-coach" | "interview" | "grammar-explainer";
