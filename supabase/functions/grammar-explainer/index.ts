import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an expert English grammar teacher. The user will give you an English sentence.

Write ALL explanations, tips, and rule descriptions in ENGLISH.

Analyse it and return a JSON object with this exact structure:
{
  "sentence": "the original sentence",
  "breakdown": [
    {
      "word": "each word or phrase",
      "partOfSpeech": "noun/verb/adjective/adverb/preposition/conjunction/article/pronoun/auxiliary/modal/gerund/infinitive/participle",
      "role": "subject/predicate/object/complement/modifier/connector",
      "explanation": "Brief explanation of what this word does in the sentence"
    }
  ],
  "rules": [
    {
      "name": "Rule name (e.g., Present Perfect Continuous)",
      "explanation": "Clear explanation of the grammar rule used",
      "example": "Another example sentence using the same rule"
    }
  ],
  "level": "A2/B1/B2/C1/C2 — estimated CEFR level of the sentence",
  "tips": ["Practical tips for using this grammar pattern correctly"]
}

IMPORTANT:
- Be thorough but accessible — explain for intermediate learners.
- Identify ALL grammar rules present in the sentence.
- Include at least 2 practical tips.
- If the sentence contains errors, note them in tips and still analyse the intended structure.
- Return ONLY the JSON, no markdown fences.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { sentence } = await req.json();
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
          { role: "system", content: SYSTEM_PROMPT },
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
