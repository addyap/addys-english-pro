import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SCENARIOS: Record<string, string> = {
  "meeting-client": `You are a potential new client named Sarah Mitchell, Director of Operations at a mid-sized logistics company. You're meeting the user for the first time to discuss possible English training for your team. Be professional, ask relevant questions about their services, experience, and pricing. Keep responses to 2-3 sentences max.`,
  "welcoming-customer": `You are a customer named James Porter visiting a company's office for the first time. You have an appointment with the sales department. Be polite but slightly unsure about where to go. Ask practical questions. Keep responses to 2-3 sentences max.`,
  "handling-complaint": `You are an unhappy client named David Chen. Your company ordered a training programme that started late and the materials were incomplete. Be firm but professional in expressing your dissatisfaction. Expect the user to offer solutions. Keep responses to 2-3 sentences max.`,
  "small-talk": `You are a colleague named Marie Dupont waiting for a meeting to start. Make natural small talk about the weather, weekend plans, recent news, or office topics. Be warm and conversational but professional. Keep responses to 2-3 sentences max.`,
  "networking": `You are Alex Rivera, a marketing manager at a tech startup, attending a trade fair. You're open to networking and curious about what the user does. Ask about their company, role, and industry trends. Be enthusiastic but professional. Keep responses to 2-3 sentences max.`,
};

const FEEDBACK_PROMPT = `You are an expert English language assessor. Analyse the following conversation between a learner (role: user) and an AI partner (role: assistant). 

Evaluate the LEARNER's messages ONLY and return a JSON object with exactly this structure (no markdown, no code fences):
{"fluency":{"score":0,"comment":""},"grammar":{"score":0,"comment":""},"vocabulary":{"score":0,"comment":""},"tone":{"rating":"","comment":""},"overall":""}

Scores are 1-10. Tone rating is one of: "Excellent", "Good", "Needs improvement", "Poor".
Overall is 1-2 sentences of encouragement and a specific tip.
Be constructive, encouraging, and specific in comments.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, scenario, action } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Feedback mode
    if (action === "feedback") {
      const conversationText = messages
        .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
        .join("\n");

      const response = await fetch(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-3-flash-preview",
            messages: [
              { role: "system", content: FEEDBACK_PROMPT },
              { role: "user", content: conversationText },
            ],
          }),
        }
      );

      if (!response.ok) {
        const status = response.status;
        const text = await response.text();
        if (status === 429) {
          return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
            status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        if (status === 402) {
          return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
            status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        console.error("AI gateway error:", status, text);
        throw new Error("AI gateway error");
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content || "";
      
      // Try to parse JSON from the response
      let feedback;
      try {
        // Strip markdown code fences if present
        const cleaned = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
        feedback = JSON.parse(cleaned);
      } catch {
        feedback = { raw: content };
      }

      return new Response(JSON.stringify({ feedback }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Chat mode - streaming
    const systemPrompt = SCENARIOS[scenario] || SCENARIOS["meeting-client"];
    const fullSystem = `${systemPrompt}\n\nIMPORTANT RULES:\n- Always respond in English\n- If the user writes in another language, gently ask them to try in English\n- After each response, ask a follow-up question or prompt the user to continue the conversation\n- Stay in character throughout\n- Never break character or mention you are an AI`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: fullSystem },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      const status = response.status;
      const text = await response.text();
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      console.error("AI gateway error:", status, text);
      throw new Error("AI gateway error");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("business-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
