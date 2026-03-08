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
  tone: { rating: "", comment: "" },
  organisation: { score: 0, comment: "" },
  overallLevel: "",
  subjectLine: { rating: "", comment: "" },
  greeting: { rating: "", comment: "" },
  closing: { rating: "", comment: "" },
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
  safe.tone = ratingField("tone");
  safe.subjectLine = ratingField("subjectLine");
  safe.greeting = ratingField("greeting");
  safe.closing = ratingField("closing");
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

  // Monitor: log if mostly defaults
  const allScoresZero =
    safe.taskAchievement.score === 0 &&
    safe.clarity.score === 0 &&
    safe.grammar.score === 0 &&
    safe.vocabulary.score === 0 &&
    safe.organisation.score === 0;
  if (allScoresZero && safe.overall === "") {
    console.warn("[email-reply-trainer] sanitizeFeedback returned mostly defaults — possible AI generation failure");
  }

  return safe;
}

const FEEDBACK_PROMPT = `You are a professional Business English writing coach.

You will receive:
1. An incoming professional email (the scenario)
2. A learner's reply to that email

Your task: evaluate ONLY the learner's reply. Do NOT judge the incoming email.

Evaluate these dimensions:
- taskAchievement (1-10): Did the learner address all points and fulfill the email's purpose?
- clarity (1-10): Is the reply clear and easy to understand?
- grammar (1-10): Grammar accuracy
- vocabulary (1-10): Appropriate and varied professional vocabulary
- tone: Rate as "Excellent", "Good", "Needs improvement", or "Poor"
- organisation (1-10): Is the email well structured (greeting, body, closing)?
- subjectLine: Rate as "Appropriate", "Acceptable", "Needs improvement", or "Missing"
- greeting: Rate as "Appropriate", "Acceptable", "Needs improvement", or "Missing"
- closing: Rate as "Appropriate", "Acceptable", "Needs improvement", or "Missing"

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
If the reply is very short or empty, still provide constructive feedback.
If the reply is not in English, note that and still give useful guidance.

Return your response as valid JSON matching this exact structure:
{
  "taskAchievement": { "score": number, "comment": "string" },
  "clarity": { "score": number, "comment": "string" },
  "grammar": { "score": number, "comment": "string" },
  "vocabulary": { "score": number, "comment": "string" },
  "tone": { "rating": "string", "comment": "string" },
  "organisation": { "score": number, "comment": "string" },
  "overallLevel": "string",
  "subjectLine": { "rating": "string", "comment": "string" },
  "greeting": { "rating": "string", "comment": "string" },
  "closing": { "rating": "string", "comment": "string" },
  "corrections": [{ "wrong": "string", "correct": "string", "explanation": "string" }],
  "suggestions": ["string"],
  "advancedVocabulary": [{ "basic": "string", "advanced": "string" }],
  "strengths": "string",
  "needsImprovement": "string",
  "overall": "string"
}

Return ONLY the JSON object, no extra text.`;

const MODEL_ANSWER_PROMPT = `You are a professional Business English writing coach.

Write a model reply to the incoming email below. The reply should:
- Be professional, clear, and well-structured
- Address all points in the incoming email
- Use appropriate greeting and closing
- Be at a strong B2/C1 level
- Be realistic and natural (not overly formal or robotic)
- Include a suitable subject line on the first line prefixed with "Subject: "
- Be between 80-150 words (body only, excluding subject)

Return ONLY the model email text, nothing else.`;

const IMPROVE_REPLY_PROMPT = `You are a professional Business English writing coach.

Rewrite the learner's email reply into a stronger, more professional version. You must:
- Preserve the learner's intended meaning and key points
- Improve grammar, tone, clarity, and organisation
- Use more professional vocabulary where appropriate
- Keep it natural and realistic
- Include a suitable subject line on the first line prefixed with "Subject: " if the learner provided one
- Produce a polished professional version

Return ONLY the improved email text, nothing else.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { action, incomingEmail, learnerReply, learnerSubject, scenarioGoal } = body;

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    if (action === "feedback") {
      const userPrompt = `INCOMING EMAIL:\nSubject: ${incomingEmail.subject}\nFrom: ${incomingEmail.sender}\n\n${incomingEmail.body}\n\nSCENARIO GOAL: ${scenarioGoal}\n\nLEARNER'S SUBJECT LINE: ${learnerSubject || "(none provided)"}\n\nLEARNER'S REPLY:\n${learnerReply || "(empty reply)"}`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: FEEDBACK_PROMPT },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
            status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        if (response.status === 402) {
          return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
            status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        const t = await response.text();
        console.error("AI gateway error:", response.status, t);
        throw new Error("AI gateway error");
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";

      let parsed: unknown;
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
      } catch {
        console.error("[email-reply-trainer] Failed to parse feedback JSON:", content.slice(0, 500));
        parsed = {};
      }

      const feedback = sanitizeFeedback(parsed);

      return new Response(JSON.stringify({ feedback }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "model-answer") {
      const userPrompt = `INCOMING EMAIL:\nSubject: ${incomingEmail.subject}\nFrom: ${incomingEmail.sender}\n\n${incomingEmail.body}\n\nSCENARIO GOAL: ${scenarioGoal}`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: MODEL_ANSWER_PROMPT },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        const t = await response.text();
        console.error("Model answer error:", response.status, t);
        throw new Error("Failed to generate model answer");
      }

      const data = await response.json();
      const modelAnswer = data.choices?.[0]?.message?.content || "Could not generate a model answer.";

      return new Response(JSON.stringify({ modelAnswer }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "improve-reply") {
      const userPrompt = `INCOMING EMAIL:\nSubject: ${incomingEmail.subject}\nFrom: ${incomingEmail.sender}\n\n${incomingEmail.body}\n\nSCENARIO GOAL: ${scenarioGoal}\n\nLEARNER'S ORIGINAL REPLY:\nSubject: ${learnerSubject || "(none)"}\n\n${learnerReply}`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: IMPROVE_REPLY_PROMPT },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        const t = await response.text();
        console.error("Improve reply error:", response.status, t);
        throw new Error("Failed to improve reply");
      }

      const data = await response.json();
      const improvedReply = data.choices?.[0]?.message?.content || "Could not generate an improved version.";

      return new Response(JSON.stringify({ improvedReply }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("email-reply-trainer error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
