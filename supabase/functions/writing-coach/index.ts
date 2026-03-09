import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LANGUAGE_INSTRUCTIONS: Record<string, string> = {
  en: "Write ALL feedback, comments, explanations, suggestions, and the improved version in ENGLISH.",
  fr: "Écris TOUS les commentaires, explications, suggestions et la version améliorée en FRANÇAIS. Seuls les exemples de corrections (wrong/correct) restent en anglais.",
};

const SYSTEM_PROMPT = (lang: string) => `You are an expert English writing coach specialising in professional and academic writing for non-native speakers.

${LANGUAGE_INSTRUCTIONS[lang] || LANGUAGE_INSTRUCTIONS.en}

The user will send you a piece of writing along with the type (email, essay, report, cover letter, LinkedIn post, etc.).

Analyse the writing and return a JSON object with this exact structure:
{
  "taskAchievement": {"score": 0-10, "comment": "How well the text achieves its purpose"},
  "clarity": {"score": 0-10, "comment": "How clear and easy to understand"},
  "coherence": {"score": 0-10, "comment": "Logical flow and paragraph structure"},
  "grammar": {"score": 0-10, "comment": "Grammar accuracy"},
  "vocabulary": {"score": 0-10, "comment": "Range and appropriateness of vocabulary"},
  "style": {"rating": "formal/neutral/informal/academic/inconsistent", "comment": "Register and tone analysis"},
  "overallLevel": "A2/B1/B1+/B2/C1/C2",
  "corrections": [{"wrong": "original phrase", "correct": "improved phrase", "explanation": "why"}],
  "suggestions": ["specific actionable suggestion"],
  "advancedVocabulary": [{"basic": "simple word used", "advanced": "better alternative"}],
  "strengths": "What the writer does well",
  "needsImprovement": "Main areas to work on",
  "overall": "Summary assessment",
  "improvedVersion": "The full text rewritten with all corrections applied and improvements made"
}

IMPORTANT:
- Be encouraging but honest.
- Provide at least 3 corrections and 3 vocabulary upgrades when possible.
- The improved version should maintain the writer's voice while fixing errors and enhancing quality.
- Return ONLY the JSON, no markdown fences.`;

function sanitizeFeedback(raw: unknown) {
  const fb = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;
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

  return {
    taskAchievement: scoreField("taskAchievement"),
    clarity: scoreField("clarity"),
    coherence: scoreField("coherence"),
    grammar: scoreField("grammar"),
    vocabulary: scoreField("vocabulary"),
    style: ratingField("style"),
    overallLevel: typeof fb.overallLevel === "string" ? fb.overallLevel : "",
    corrections: Array.isArray(fb.corrections) ? fb.corrections.slice(0, 20) : [],
    suggestions: Array.isArray(fb.suggestions) ? fb.suggestions.slice(0, 10) : [],
    advancedVocabulary: Array.isArray(fb.advancedVocabulary) ? fb.advancedVocabulary.slice(0, 10) : [],
    strengths: typeof fb.strengths === "string" ? fb.strengths : "",
    needsImprovement: typeof fb.needsImprovement === "string" ? fb.needsImprovement : "",
    overall: typeof fb.overall === "string" ? fb.overall : "",
    improvedVersion: typeof fb.improvedVersion === "string" ? fb.improvedVersion : "",
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { text, writingType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Writing type: ${writingType || "general"}\n\nText to analyse:\n${text}` },
        ],
      }),
    });

    if (!resp.ok) {
      const status = resp.status;
      if (status === 429 || status === 402) {
        return new Response(JSON.stringify({ error: status === 429 ? "Rate limited" : "Payment required" }), {
          status, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI gateway error: ${status}`);
    }

    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content || "{}";
    const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const feedback = sanitizeFeedback(JSON.parse(cleaned));

    return new Response(JSON.stringify({ feedback }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("writing-coach error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
