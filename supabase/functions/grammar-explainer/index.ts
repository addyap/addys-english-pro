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
  return `You are an expert English grammar teacher. The user will give you an English sentence.

CRITICAL: Write all "explanation", "tips", and "rules.explanation" text in ${langName}. Keep "word", "sentence", "example", "partOfSpeech", "role", "name", and "level" fields in English (they refer to English grammar terms and the original sentence).

Analyse it and return a JSON object with this exact structure:
{
  "sentence": "the original sentence",
  "breakdown": [
    {
      "word": "each word or phrase",
      "partOfSpeech": "noun/verb/adjective/adverb/preposition/conjunction/article/pronoun/auxiliary/modal/gerund/infinitive/participle",
      "role": "subject/predicate/object/complement/modifier/connector",
      "explanation": "Brief explanation in ${langName}"
    }
  ],
  "rules": [
    {
      "name": "Rule name (e.g., Present Perfect Continuous) — keep in English",
      "explanation": "Clear explanation in ${langName}",
      "example": "Another example sentence in English"
    }
  ],
  "level": "A2/B1/B2/C1/C2",
  "tips": ["Practical tips in ${langName}"]
}

IMPORTANT:
- Be thorough but accessible.
- Identify ALL grammar rules present.
- Include at least 2 practical tips.
- Return ONLY the JSON, no markdown fences.\n\nINPUT SCOPE RULE: Only evaluate the learner/user's own input. Never correct AI-generated text. For speech or voice input, ignore capitalization, punctuation, and minor transcription/spelling artefacts. Focus on grammar, vocabulary, fluency, natural phrasing, clarity, and task completion.`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { sentence, feedbackLanguage } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    if (!sentence || typeof sentence !== "string" || sentence.trim().length < 2) {
      return new Response(JSON.stringify({ error: "Please provide a valid English sentence." }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: buildSystemPrompt(typeof feedbackLanguage === "string" ? feedbackLanguage : "en") },
          { role: "user", content: sentence.trim() },
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
    const result = JSON.parse(cleaned);

    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("grammar-explainer error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
