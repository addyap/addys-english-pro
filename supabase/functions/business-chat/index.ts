import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SCENARIOS: Record<string, string> = {
  "meeting-client": `You are Sarah Mitchell, Director of Operations at a logistics company. You're meeting the user for the first time to discuss English training for your team.`,
  "negotiating-price": `You are Daniel Harris, procurement manager at a retail company. You're negotiating the price of a training package with the user. Push for a better deal but stay professional.`,
  "small-talk": `You are Marie Dupont, a colleague waiting for a meeting to start. Make natural small talk about the weather, weekend plans, or office topics.`,
  "presenting-product": `You are a potential buyer named Laura Chen attending a product presentation. Ask questions about features, benefits, pricing, and delivery timelines.`,
  "handling-complaint": `You are David Chen, an unhappy client. Your company ordered a training programme that started late and materials were incomplete. Be firm but professional.`,
  "job-interview": `You are an HR manager named Rachel Adams conducting a job interview. Ask standard interview questions about experience, strengths, and motivation.`,
  "project-update": `You are a senior manager named Tom Bradley. The user is giving you a project status update. Ask about progress, deadlines, risks, and next steps.`,
  "asking-clarification": `You are a colleague named Sophie Laurent who just gave a briefing. The user wants to ask you clarification questions. Answer clearly and check their understanding.`,
  "networking-event": `You are Alex Rivera, a marketing manager at a tech startup, attending a networking event. Be curious about what the user does.`,
  "telephone-followup": `You are James Porter, a client the user spoke to last week. You're on a phone call to follow up on a proposal. Ask about details, timelines, and costs.`,
  "talking-about-job": `You are a new colleague named Emma Wilson. Ask the user about their job, what they do daily, and what they enjoy about their work.`,
  "talking-responsibilities": `You are a team lead named Mark Stevens onboarding the user. Ask about their responsibilities, team structure, and how they organise their work.`,
  "travel-for-work": `You are a colleague named Lisa Park chatting at the airport before a business trip. Talk about travel plans, destinations, and work travel experiences.`,
  "introducing-yourself": `You are a new contact named Robert Kim at a business lunch. The user should introduce themselves. Ask follow-up questions about their background.`,
  "describing-company": `You are a potential partner named Anna Novak interested in the user's company. Ask about what the company does, its size, clients, and services.`,
};

const MODE_INSTRUCTIONS: Record<string, string> = {
  practice: `MODE: PRACTICE (Supportive Training)
- Be friendly, warm, and encouraging
- Use slightly simpler vocabulary
- If the learner seems stuck, offer a gentle hint or rephrase your question
- Focus on building confidence
- Keep responses under 35 words`,
  challenge: `MODE: CHALLENGE (Realistic Interaction)
- Be natural and professional, slightly more demanding
- Don't offer help — expect the learner to manage on their own
- Ask follow-up questions that require fuller, more detailed answers
- Keep responses under 40 words`,
  exam: `MODE: EXAM (Structured Assessment)
- You will ask exactly 5 questions, one at a time
- Number each question clearly (Question 1/5, Question 2/5, etc.)
- Do NOT coach, help, or encourage during the conversation
- Maintain a formal, professional tone
- After Question 5 and the user's answer, say exactly: "Thank you. This concludes the assessment."
- Keep each question under 30 words`,
};

const FEEDBACK_PROMPT_BASE = `You are an expert English language assessor. Analyse the following conversation between a learner (role: user) and an AI partner (role: assistant).

Evaluate the LEARNER's messages ONLY and return a JSON object with exactly this structure (no markdown, no code fences):
`;

const FEEDBACK_SCHEMAS: Record<string, string> = {
  practice: `{"fluency":{"score":0,"comment":""},"grammar":{"score":0,"comment":""},"vocabulary":{"score":0,"comment":""},"tone":{"rating":"","comment":""},"corrections":[{"wrong":"","correct":"","explanation":""}],"suggestions":[""],"overall":""}

Scores are 1-10. Tone rating is one of: "Excellent","Good","Needs improvement","Poor".
Provide 2-3 corrections from the learner's actual sentences. Provide 2-3 actionable suggestions.
Overall is 2-3 sentences: be warm, encouraging, and specific. Highlight what went well.`,

  challenge: `{"fluency":{"score":0,"comment":""},"grammar":{"score":0,"comment":""},"vocabulary":{"score":0,"comment":""},"tone":{"rating":"","comment":""},"corrections":[{"wrong":"","correct":"","explanation":""}],"suggestions":[""],"overall":""}

Scores are 1-10. Tone rating is one of: "Excellent","Good","Needs improvement","Poor".
Provide 2-3 corrections from the learner's actual sentences. Provide 2-3 actionable suggestions.
Overall is 2-3 sentences: be balanced and professional. Clearly highlight weak areas alongside strengths.`,

  exam: `{"fluency":{"score":0,"comment":""},"grammar":{"score":0,"comment":""},"vocabulary":{"score":0,"comment":""},"tone":{"rating":"","comment":""},"overallLevel":"","corrections":[{"wrong":"","correct":"","explanation":""}],"suggestions":[""],"strengths":"","needsImprovement":"","overall":""}

Scores are 1-10. Tone rating is one of: "Excellent","Good","Needs improvement","Poor".
overallLevel should be a CEFR estimate like "A2","B1","B1+","B2","C1".
Provide 2-3 corrections. Provide 2-3 suggestions.
strengths: 1 sentence about what the learner does well.
needsImprovement: 1 sentence about what needs work.
Overall is a short examiner-style summary (2 sentences max).`,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, scenario, mode = "practice", action } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Feedback mode
    if (action === "feedback") {
      const feedbackMode = mode || "practice";
      const conversationText = messages
        .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
        .join("\n");

      const feedbackSchema = FEEDBACK_SCHEMAS[feedbackMode] || FEEDBACK_SCHEMAS["practice"];
      const feedbackPrompt = FEEDBACK_PROMPT_BASE + feedbackSchema;

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
              { role: "system", content: feedbackPrompt },
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

      let feedback;
      try {
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
    const scenarioPrompt = SCENARIOS[scenario] || SCENARIOS["meeting-client"];
    const modeInstructions = MODE_INSTRUCTIONS[mode] || MODE_INSTRUCTIONS["practice"];

    const fullSystem = `${scenarioPrompt}

${modeInstructions}

RULES:
- Always respond in English
- If the user writes in another language, gently ask them to try in English
- Ask ONE question or prompt at a time
- Keep each reply short and focused (under 40 words usually)
- Stay in character throughout — never break character or mention you are an AI
- After each response, prompt the user to continue the conversation
- Be a realistic conversation partner, not a teacher`;

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
