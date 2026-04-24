import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LANG_NAMES: Record<string, string> = {
  en: "English", fr: "French", ru: "Russian", uk: "Ukrainian",
  ar: "Arabic", ro: "Romanian", it: "Italian", es: "Spanish",
  de: "German", pt: "Portuguese", pl: "Polish", zh: "Chinese", ja: "Japanese",
};

function buildSystemPrompt(feedbackLang: string) {
  const langName = LANG_NAMES[feedbackLang] || "English";
  return `You are a professional English teacher giving accurate, supportive, and adaptive feedback on learner performance.

First evaluate the learner's real answer before deciding how complex your feedback should be.

Do not pre-judge the learner's level.
Infer the learner's current performance from the answer itself.

Your feedback must adapt naturally to the learner's demonstrated level, from A0 to C2.

CRITICAL LANGUAGE RULE: Write the "feedback", "tip", and "nextStep" fields in ${langName}. The "correction" field MUST stay in English (it is the corrected English text). The "rating" and "detectedLevelRange" fields stay in English.

Your goal is to:
1) evaluate the quality of the answer fairly
2) identify what is correct
3) correct what needs improvement
4) explain the issue clearly at the right level in ${langName}
5) give a helpful next step in ${langName}

Be constructive, specific, and pedagogically useful.

Return ONLY a JSON object with this exact structure (no markdown fences):
{
  "score": <number 0-10>,
  "rating": "<Excellent|Good|Acceptable|Needs Improvement>",
  "detectedLevelRange": "<estimated CEFR range, e.g. A1-A2, B1-B2, C1-C2>",
  "feedback": "<short evaluation in ${langName}>",
  "correction": "<corrected English version if needed, or empty string>",
  "tip": "<one practical improvement tip in ${langName}>",
  "nextStep": "<what the learner should try next, in ${langName}>"
}`;
}

const FALLBACK_RESULT = {
  score: 0,
  rating: "Needs Improvement",
  detectedLevelRange: "Unknown",
  feedback: "Your answer needs improvement. Please review the task and try again.",
  correction: "",
  tip: "Check grammar, vocabulary, and clarity before submitting again.",
  nextStep: "Try again with a clearer and more complete answer.",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { userAnswer, correctAnswer, exerciseType, contextPrompt, expectedSkill, metadata, feedbackLanguage } = await req.json();

    console.log("AI feedback request", {
      exerciseType,
      expectedSkill,
      userAnswerLength: userAnswer?.length || 0,
    });

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    if (!userAnswer || typeof userAnswer !== "string" || userAnswer.trim().length < 1) {
      console.log("AI feedback: empty answer, returning fallback");
      return new Response(JSON.stringify({ result: { ...FALLBACK_RESULT, correction: correctAnswer || "" } }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = `Exercise type: ${exerciseType || "general"}

Expected skill: ${expectedSkill || "general English"}

Correct answer or target answer:
${correctAnswer || "(not provided)"}

Student answer:
${userAnswer.trim()}

${contextPrompt ? `Optional context:\n${contextPrompt}` : ""}

Please provide:
- a short evaluation
- a correction if needed
- an explanation adapted to the learner's demonstrated performance
- one practical improvement tip
- an estimated level range based only on this answer if possible

Return structured JSON matching the required output schema.`;

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: buildSystemPrompt(typeof feedbackLanguage === "string" ? feedbackLanguage : "en") },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!resp.ok) {
      const status = resp.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await resp.text();
      console.error("AI gateway error:", status, text);
      throw new Error(`AI gateway error: ${status}`);
    }

    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content || "{}";
    const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

    let result: Record<string, unknown>;
    try {
      result = JSON.parse(cleaned);
    } catch {
      console.error("[ai-feedback] Failed to parse JSON:", cleaned.slice(0, 300));
      console.log("AI feedback: parse failure, using fallback");
      return new Response(JSON.stringify({ result: { ...FALLBACK_RESULT, correction: correctAnswer || "" } }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate required fields
    const score = typeof result.score === "number" ? result.score : undefined;
    const rating = typeof result.rating === "string" ? result.rating : undefined;
    const feedback = typeof result.feedback === "string" && (result.feedback as string).length > 0 ? result.feedback : undefined;

    if (score === undefined || rating === undefined || feedback === undefined) {
      console.warn("[ai-feedback] Incomplete result, using fallback", { score, rating, feedbackLen: (feedback as string)?.length });
      return new Response(JSON.stringify({ result: { ...FALLBACK_RESULT, correction: correctAnswer || "" } }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("AI feedback response", result);

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-feedback error:", e);
    return new Response(JSON.stringify({ result: FALLBACK_RESULT }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
