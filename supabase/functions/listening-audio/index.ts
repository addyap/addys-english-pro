import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Audio generation edge function for listening exercises
const corsHeaders: { [key: string]: string } = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

type Slug = "customer-service-call" | "journalist-interview" | "museum-reception" | "job-interview" | "restaurant-reservation" | "airport-announcement" | "doctor-appointment";

const VALID_SLUGS: Slug[] = [
  "customer-service-call",
  "journalist-interview",
  "museum-reception",
  "job-interview",
  "restaurant-reservation",
  "airport-announcement",
  "doctor-appointment",
];

const EXERCISE_TEXTS: { [key in Slug]: string } = {
  "customer-service-call":
    "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today? I'm having trouble with my laptop. It keeps freezing whenever I open multiple applications. I understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has? I believe it has eight gigabytes of RAM. That should be sufficient for most tasks. Have you tried restarting your computer recently? Yes, I restarted it this morning, but the problem persists. I see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
  "journalist-interview":
    "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel. Thank you for having me. It's wonderful to be here. Your new book explores themes of identity and belonging. What inspired you to tackle these subjects? I've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements. The protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process? I'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
  "museum-reception":
    "Good afternoon and welcome to the National History Museum. How can I help you? Hello, we'd like to visit the museum. How much are the tickets? For adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children. That sounds perfect. We'll take the family ticket, please. Excellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display. Are there any guided tours available? Yes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price. Where does the tour begin? The tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag.",
  "job-interview":
    "Good morning, please have a seat. Thank you for coming in today. I've reviewed your resume and I'm impressed by your experience. Can you tell me a bit about yourself? Of course. I recently graduated with a degree in marketing and I've spent the past two years working at a digital agency. I specialized in social media campaigns and content creation. That sounds relevant to our position. What made you apply for this role? I've always admired your company's innovative approach to branding. I believe my creative skills and analytical mindset would be a great fit for your team. Where do you see yourself in five years? I hope to grow into a leadership position where I can mentor others while continuing to develop cutting-edge marketing strategies.",
  "restaurant-reservation":
    "Good evening, The Golden Fork, how may I help you? Hello, I'd like to make a reservation for Saturday evening, please. Certainly. How many people will be dining? There will be four of us. And what time would you prefer? Around seven thirty if possible. Let me check our availability. Yes, we have a table available at seven thirty. May I have a name for the reservation? It's under Johnson. Perfect, Mr Johnson. Would you like a table inside or on our terrace? The terrace would be lovely if the weather is nice. Of course. Do any of your guests have dietary requirements? Yes, one person is vegetarian. No problem, we have excellent vegetarian options. Your reservation is confirmed for Saturday at seven thirty for four people.",
  "airport-announcement":
    "Attention all passengers. This is a final boarding call for Flight BA two four seven to New York JFK. All remaining passengers should proceed immediately to Gate fifteen. The gate will close in ten minutes. Passengers Smith and Williams, please make your way to the gate immediately or your luggage will be offloaded. We would also like to inform passengers that Flight LH five six two to Frankfurt has been delayed by approximately forty five minutes due to air traffic control restrictions. Passengers on this flight should remain in the departure lounge. We apologize for any inconvenience caused. Light refreshments will be provided. Please listen for further announcements regarding your new boarding time.",
  "doctor-appointment":
    "Good afternoon. What seems to be the problem today? I've been experiencing persistent headaches for about two weeks now. They're particularly bad in the morning. I see. Can you describe the pain? Is it sharp or dull? It's more of a dull, throbbing sensation, usually concentrated around my temples and forehead. Have you noticed any other symptoms? Perhaps changes in your vision or sensitivity to light? Now that you mention it, I have been more sensitive to bright lights lately. And I've been feeling quite fatigued. Have you been under any unusual stress recently? Actually yes, I've been working overtime on a major project. I've barely been sleeping. That could certainly be a contributing factor. I'd like to rule out anything more serious, so I'm going to recommend some blood tests and possibly a scan.",
};

const VOICE_IDS: { [key in Slug]?: string } = {
  "customer-service-call": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "journalist-interview": "TX3LPaxmHKxFdv7VOQHJ", // Liam
  "museum-reception": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "job-interview": "JBFqnCBsd6RMkjVDRZzb", // George
  "restaurant-reservation": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "airport-announcement": "onwK4e9ZLuTAKqWW03F9", // Daniel
  "doctor-appointment": "CwhRBWXzGAHq8TQ4Fs17", // Roger
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const slugParam = url.searchParams.get("slug");

    if (!slugParam) {
      return new Response(JSON.stringify({ error: "Missing slug parameter" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!VALID_SLUGS.includes(slugParam as Slug)) {
      return new Response(JSON.stringify({ error: "Invalid slug" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const slug = slugParam as Slug;

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const bucket = "listening-audio";
    const filePath = `${slug}.mp3`;
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${filePath}`;

    const { data: downloadData, error: downloadError } = await supabase.storage
      .from(bucket)
      .download(filePath);

    if (downloadData && !downloadError) {
      return new Response(JSON.stringify({ url: publicUrl, cached: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const elevenlabsApiKey = Deno.env.get("ELEVENLABS_API_KEY");
    if (!elevenlabsApiKey) {
      return new Response(
        JSON.stringify({ error: "ElevenLabs API key not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const text = EXERCISE_TEXTS[slug];
    const voiceId = VOICE_IDS[slug] || "EXAVITQu4vr4xnSDxMaL";

    const ttsResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": elevenlabsApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          output_format: "mp3_44100_128",
          voice_settings: {
            stability: 0.6,
            similarity_boost: 0.75,
            style: 0.3,
            use_speaker_boost: true,
            speed: 0.9,
          },
        }),
      }
    );

    if (!ttsResponse.ok) {
      await ttsResponse.text().catch(() => "");

      if (ttsResponse.status === 401) {
        return new Response(
          JSON.stringify({ error: "Invalid ElevenLabs API key" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (ttsResponse.status === 429) {
        return new Response(
          JSON.stringify({
            error: "ElevenLabs quota exceeded. Please try again later.",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(JSON.stringify({ error: "Failed to generate audio" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const audioBuffer = await ttsResponse.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, audioBuffer, {
        contentType: "audio/mpeg",
        upsert: true,
      });

    if (uploadError) {
      return new Response(JSON.stringify({ error: "Failed to cache audio" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ url: publicUrl, cached: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
