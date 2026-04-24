import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LANG_NAMES: Record<string, string> = {
  en: "English",
  fr: "French",
  ru: "Russian",
  uk: "Ukrainian",
  ar: "Arabic",
  ro: "Romanian",
  it: "Italian",
  es: "Spanish",
  de: "German",
  pt: "Portuguese",
  pl: "Polish",
  zh: "Chinese",
  ja: "Japanese",
};

type Action = "translate" | "explain" | "vocabulary";

function buildPrompt(action: Action, text: string, langName: string, context?: string) {
  const ctx = context ? `\n\nContext (for reference only, do not translate this part):\n${context}` : "";
  if (action === "translate") {
    return {
      system: `You translate English text into ${langName}. Return ONLY a JSON object: {"result": "<translation in ${langName}>"}. No markdown, no commentary.`,
      user: `Translate the following English text into ${langName}. Keep the meaning natural and faithful.\n\nText:\n${text}${ctx}`,
    };
  }
  if (action === "explain") {
    return {
      system: `You are an English teacher. Explain meaning, grammar and any corrections in ${langName} for a learner. Return ONLY a JSON object: {"result": "<clear explanation in ${langName}>"}. No markdown, no commentary.`,
      user: `Explain the following English text to a learner in ${langName}. Cover meaning, key grammar points, and (if relevant) why it is phrased this way. Be concise (max ~120 words).\n\nText:\n${text}${ctx}`,
    };
  }
  // vocabulary
  return {
    system: `You extract useful vocabulary from English text for a learner. Return ONLY a JSON object: {"items": [{"term": "<English word or phrase>", "meaning": "<short meaning in ${langName}>", "example": "<short English example sentence>"}]}. Provide 3 to 6 items. No markdown.`,
    user: `From the following English text, extract 3 to 6 useful vocabulary items (single words, collocations or phrasal verbs). Provide each meaning in ${langName} and an example sentence in English.\n\nText:\n${text}${ctx}`,
  };
}

function safeParseJson(raw: string): Record<string, unknown> | null {
  const cleaned = raw.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    // Try to extract first {...} block
    const m = cleaned.match(/\{[\s\S]*\}/);
    if (m) {
      try { return JSON.parse(m[0]); } catch { /* ignore */ }
    }
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const action = body.action as Action;
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const feedbackLanguage = typeof body.feedbackLanguage === "string" ? body.feedbackLanguage : "en";
    const context = typeof body.context === "string" ? body.context : undefined;

    if (!action || !["translate", "explain", "vocabulary"].includes(action)) {
      return new Response(JSON.stringify({ error: "Invalid action" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!text || text.length < 1) {
      return new Response(JSON.stringify({ error: "Missing text" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (text.length > 4000) {
      return new Response(JSON.stringify({ error: "Text too long" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const langName = LANG_NAMES[feedbackLanguage] || "English";
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const { system, user } = buildPrompt(action, text, langName, context);

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
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
      const t = await resp.text();
      console.error("AI gateway error:", status, t);
      throw new Error(`AI gateway error: ${status}`);
    }

    const data = await resp.json();
    const raw = data.choices?.[0]?.message?.content || "{}";
    const parsed = safeParseJson(raw) || {};

    if (action === "vocabulary") {
      const itemsRaw = Array.isArray((parsed as { items?: unknown }).items) ? (parsed as { items: unknown[] }).items : [];
      const items = itemsRaw
        .map((it) => {
          const o = (typeof it === "object" && it !== null ? it : {}) as Record<string, unknown>;
          return {
            term: typeof o.term === "string" ? o.term : "",
            meaning: typeof o.meaning === "string" ? o.meaning : "",
            example: typeof o.example === "string" ? o.example : "",
          };
        })
        .filter((it) => it.term && it.meaning)
        .slice(0, 6);
      return new Response(JSON.stringify({ items }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = typeof (parsed as { result?: unknown }).result === "string"
      ? (parsed as { result: string }).result
      : "";
    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("multilingual-support error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
