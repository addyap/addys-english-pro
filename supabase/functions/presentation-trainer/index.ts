import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SAFE_FEEDBACK_DEFAULTS = {
  taskAchievement: { score: 0, comment: "" },
  clarity: { score: 0, comment: "" },
  grammar: { score: 0, comment: "" },
  vocabulary: { score: 0, comment: "" },
  organisation: { score: 0, comment: "" },
  persuasiveness: { score: 0, comment: "" },
  tone: { rating: "", comment: "" },
  overallLevel: "",
  corrections: [] as Array<{ wrong: string; correct: string; explanation: string }>,
  suggestions: [] as string[],
  advancedVocabulary: [] as Array<{ basic: string; advanced: string }>,
  strengths: "",
  needsImprovement: "",
  overall: "",
};

function sanitizeFeedback(raw: unknown): typeof SAFE_FEEDBACK_DEFAULTS {
  const fb = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;
  const safe = { ...SAFE_FEEDBACK_DEFAULTS };

  const scoreField = (key: string) => {
    const v = fb[key];
    if (typeof v === "object" && v !== null) {
      const o = v as Record<string, unknown>;
      return {
        score: typeof o.score === "number" ? Math.min(10, Math.max(0, o.score)) : 0,
        comment: typeof o.comment === "string" ? o.comment : "",
      };
    }
    return { score: 0, comment: "" };
  };

  const ratingField = (key: string) => {
    const v = fb[key];
    if (typeof v === "object" && v !== null) {
      const o = v as Record<string, unknown>;
      return {
        rating: typeof o.rating === "string" ? o.rating : "",
        comment: typeof o.comment === "string" ? o.comment : "",
      };
    }
    return { rating: "", comment: "" };
  };

  safe.taskAchievement = scoreField("taskAchievement");
  safe.clarity = scoreField("clarity");
  safe.grammar = scoreField("grammar");
  safe.vocabulary = scoreField("vocabulary");
  safe.organisation = scoreField("organisation");
  safe.persuasiveness = scoreField("persuasiveness");
  safe.tone = ratingField("tone");
  safe.overallLevel = typeof fb.overallLevel === "string" ? fb.overallLevel : "";
  safe.strengths = typeof fb.strengths === "string" ? fb.strengths : "";
  safe.needsImprovement = typeof fb.needsImprovement === "string" ? fb.needsImprovement : "";
  safe.overall = typeof fb.overall === "string" ? fb.overall : "";

  if (Array.isArray(fb.corrections)) {
    safe.corrections = fb.corrections
      .filter((c: any) => typeof c === "object" && c !== null)
      .map((c: any) => ({
        wrong: typeof c.wrong === "string" ? c.wrong : "",
        correct: typeof c.correct === "string" ? c.correct : "",
        explanation: typeof c.explanation === "string" ? c.explanation : "",
      }))
      .slice(0, 10);
  }

  if (Array.isArray(fb.suggestions)) {
    safe.suggestions = fb.suggestions
      .filter((s: any) => typeof s === "string" && s.length > 0)
      .slice(0, 10);
  }

  if (Array.isArray(fb.advancedVocabulary)) {
    safe.advancedVocabulary = fb.advancedVocabulary
      .filter((v: any) => typeof v === "object" && v !== null)
      .map((v: any) => ({
        basic: typeof v.basic === "string" ? v.basic : "",
        advanced: typeof v.advanced === "string" ? v.advanced : "",
      }))
      .slice(0, 10);
  }

  const allScoresZero =
    safe.taskAchievement.score === 0 &&
    safe.clarity.score === 0 &&
    safe.grammar.score === 0 &&
    safe.vocabulary.score === 0 &&
    safe.organisation.score === 0 &&
    safe.persuasiveness.score === 0;
  if (allScoresZero && safe.overall === "") {
    console.warn("[presentation-trainer] sanitizeFeedback returned mostly defaults — possible AI generation failure");
  }

  return safe;
}

// ── Language instructions ──────────────────────────────────────────────────
const LANGUAGE_INSTRUCTIONS: Record<string, string> = {
  en: "Write ALL feedback, comments, explanations, and suggestions in ENGLISH.",
  fr: "Écris TOUS les commentaires, explications et suggestions en FRANÇAIS. Seuls les exemples de corrections (wrong/correct) restent en anglais.",
};

const FEEDBACK_PROMPT = (lang: string) => `You are a professional Business English presentation coach.

${LANGUAGE_INSTRUCTIONS[lang] || LANGUAGE_INSTRUCTIONS.en}

You will receive:
1. A presentation brief (the scenario)
2. A learner's presentation text

Your task: evaluate ONLY the learner's presentation. Do NOT judge the brief.

Evaluate these dimensions:
- taskAchievement (1-10): Did the learner address the brief and fulfill the presentation's purpose?
- clarity (1-10): Is the presentation clear and easy to follow?
- grammar (1-10): Grammar accuracy
- vocabulary (1-10): Appropriate and varied professional vocabulary
- organisation (1-10): Is the presentation well structured (opening, body, closing)?
- persuasiveness (1-10): Is the presentation convincing and engaging?
- tone: Rate as "Excellent", "Good", "Needs improvement", or "Poor"

Also provide:
- overallLevel: Estimated CEFR level (A2, B1, B1+, B2, C1)
- corrections: 2-4 corrections quoting the learner's actual phrases (wrong, correct, explanation)
- suggestions: 2-4 actionable improvement suggestions
- advancedVocabulary: 2-4 vocabulary upgrades (basic word the learner used -> advanced alternative)
- strengths: A warm summary of what the learner did well
- needsImprovement: Key areas to focus on
- overall: A professional overall assessment

Be warm but precise. Reward clarity and professionalism, not just complexity.
Do not over-penalise minor grammar mistakes if communication is clear.
If the presentation is very short or empty, still provide constructive feedback.
If the presentation is not in English, note that and still give useful guidance.

Return your response as valid JSON matching this exact structure:
{
  "taskAchievement": { "score": number, "comment": "string" },
  "clarity": { "score": number, "comment": "string" },
  "grammar": { "score": number, "comment": "string" },
  "vocabulary": { "score": number, "comment": "string" },
  "organisation": { "score": number, "comment": "string" },
  "persuasiveness": { "score": number, "comment": "string" },
  "tone": { "rating": "string", "comment": "string" },
  "overallLevel": "string",
  "corrections": [{ "wrong": "string", "correct": "string", "explanation": "string" }],
  "suggestions": ["string"],
  "advancedVocabulary": [{ "basic": "string", "advanced": "string" }],
  "strengths": "string",
  "needsImprovement": "string",
  "overall": "string"
}

Return ONLY the JSON object, no extra text.`;

const MODEL_PROMPT = `You are a professional Business English presentation coach.

Write a model presentation for the brief below. The presentation should:
- Be professional, clear, and well-structured
- Address all points in the brief
- Have a clear opening, logical body, and professional closing
- Be at a strong B2/C1 level
- Be realistic and natural (not overly formal or robotic)
- Be between 120-180 words

Return ONLY the model presentation text, nothing else.`;

const IMPROVE_PROMPT = `You are a professional Business English presentation coach.

Rewrite the learner's presentation into a stronger, more professional version. You must:
- Preserve the learner's intended meaning and key points
- Improve grammar, tone, clarity, structure, and organisation
- Use more professional vocabulary where appropriate
- Keep it natural and realistic
- Add clear transitions between ideas
- Produce a polished professional version

Return ONLY the improved presentation text, nothing else.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { action, brief, presentationText, scenarioLabel, feedbackLanguage } = body;
    const lang = feedbackLanguage === "fr" ? "fr" : "en";

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const callAI = async (systemPrompt: string, userPrompt: string) => {
      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          return { error: "Rate limit exceeded. Please try again later.", status: 429 };
        }
        if (response.status === 402) {
          return { error: "AI credits exhausted. Please try again later.", status: 402 };
        }
        const t = await response.text();
        console.error("AI gateway error:", response.status, t);
        throw new Error("AI gateway error");
      }

      const data = await response.json();
      return { content: data.choices?.[0]?.message?.content || "" };
    };

    if (action === "feedback") {
      const userPrompt = `PRESENTATION BRIEF:\n${scenarioLabel}\n\n${brief}\n\nLEARNER'S PRESENTATION:\n${presentationText || "(empty presentation)"}`;
      const result = await callAI(FEEDBACK_PROMPT(lang), userPrompt);

      if ("error" in result) {
        return new Response(JSON.stringify({ error: result.error }), {
          status: result.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      let parsed: unknown;
      try {
        const jsonMatch = result.content.match(/\{[\s\S]*\}/);
        parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
      } catch {
        console.error("[presentation-trainer] Failed to parse feedback JSON:", result.content.slice(0, 500));
        parsed = {};
      }

      return new Response(JSON.stringify({ feedback: sanitizeFeedback(parsed) }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "model-presentation") {
      const userPrompt = `PRESENTATION BRIEF:\n${scenarioLabel}\n\n${brief}`;
      const result = await callAI(MODEL_PROMPT(lang), userPrompt);

      if ("error" in result) {
        return new Response(JSON.stringify({ error: result.error }), {
          status: result.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ modelPresentation: result.content || "Could not generate a model presentation." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "improve-presentation") {
      const userPrompt = `PRESENTATION BRIEF:\n${scenarioLabel}\n\n${brief}\n\nLEARNER'S ORIGINAL PRESENTATION:\n${presentationText}`;
      const result = await callAI(IMPROVE_PROMPT, userPrompt);

      if ("error" in result) {
        return new Response(JSON.stringify({ error: result.error }), {
          status: result.status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ improvedPresentation: result.content || "Could not generate an improved version." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("presentation-trainer error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
