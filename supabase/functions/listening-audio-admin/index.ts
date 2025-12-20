import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders: { [key: string]: string } = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-admin-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const VALID_SLUGS: string[] = [
  "customer-service-call",
  "journalist-interview",
  "museum-reception",
];

const EXERCISE_TEXTS: { [key: string]: string } = {
  "customer-service-call":
    "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today? I'm having trouble with my laptop. It keeps freezing whenever I open multiple applications. I understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has? I believe it has eight gigabytes of RAM. That should be sufficient for most tasks. Have you tried restarting your computer recently? Yes, I restarted it this morning, but the problem persists. I see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
  "journalist-interview":
    "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel. Thank you for having me. It's wonderful to be here. Your new book explores themes of identity and belonging. What inspired you to tackle these subjects? I've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements. The protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process? I'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
  "museum-reception":
    "Good afternoon and welcome to the National History Museum. How can I help you? Hello, we'd like to visit the museum. How much are the tickets? For adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children. That sounds perfect. We'll take the family ticket, please. Excellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display. Are there any guided tours available? Yes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price. Where does the tour begin? The tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag.",
};

const VOICE_IDS: { [key: string]: string } = {
  "customer-service-call": "EXAVITQu4vr4xnSDxMaL",
  "journalist-interview": "TX3LPaxmHKxFdv7VOQHJ",
  "museum-reception": "EXAVITQu4vr4xnSDxMaL",
};

const BUCKET = "listening-audio";

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Check admin secret
  const adminSecret = req.headers.get("x-admin-secret");
  const expectedSecret = Deno.env.get("LISTENING_ADMIN_SECRET");

  if (!expectedSecret || adminSecret !== expectedSecret) {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    const action = body.action;
    let slugs: string[] = body.slugs || VALID_SLUGS;

    // Validate slugs
    for (const slug of slugs) {
      if (!VALID_SLUGS.includes(slug)) {
        return new Response(
          JSON.stringify({ error: "Invalid slug: " + slug }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // ACTION: status
    if (action === "status") {
      const items: { slug: string; exists: boolean; publicUrl: string }[] = [];

      for (const slug of slugs) {
        const filePath = slug + ".mp3";
        const publicUrl = supabaseUrl + "/storage/v1/object/public/" + BUCKET + "/" + filePath;

        const { data, error } = await supabase.storage.from(BUCKET).download(filePath);
        const exists = !!data && !error;

        items.push({ slug, exists, publicUrl });
      }

      return new Response(
        JSON.stringify({ items }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ACTION: warm
    if (action === "warm") {
      const warmed: string[] = [];
      const skipped: string[] = [];
      const failed: { slug: string; error: string }[] = [];

      const elevenlabsApiKey = Deno.env.get("ELEVENLABS_API_KEY");
      if (!elevenlabsApiKey) {
        return new Response(
          JSON.stringify({ error: "ElevenLabs API key not configured" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      for (const slug of slugs) {
        const filePath = slug + ".mp3";

        // Check if exists
        const { data: existingData } = await supabase.storage.from(BUCKET).download(filePath);
        if (existingData) {
          skipped.push(slug);
          continue;
        }

        // Generate audio
        try {
          const text = EXERCISE_TEXTS[slug];
          const voiceId = VOICE_IDS[slug] || "EXAVITQu4vr4xnSDxMaL";

          const ttsResponse = await fetch(
            "https://api.elevenlabs.io/v1/text-to-speech/" + voiceId,
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
            const errText = await ttsResponse.text().catch(function() { return ""; });
            failed.push({ slug, error: "ElevenLabs error: " + ttsResponse.status + " " + errText });
            continue;
          }

          const audioBuffer = await ttsResponse.arrayBuffer();

          const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(filePath, audioBuffer, {
              contentType: "audio/mpeg",
              upsert: true,
            });

          if (uploadError) {
            failed.push({ slug, error: "Upload error: " + uploadError.message });
            continue;
          }

          warmed.push(slug);
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          failed.push({ slug, error: message });
        }
      }

      return new Response(
        JSON.stringify({ warmed, skipped, failed }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ACTION: purge
    if (action === "purge") {
      const deleted: string[] = [];
      const failed: { slug: string; error: string }[] = [];

      for (const slug of slugs) {
        const filePath = slug + ".mp3";

        const { error } = await supabase.storage.from(BUCKET).remove([filePath]);

        if (error) {
          failed.push({ slug, error: error.message });
        } else {
          deleted.push(slug);
        }
      }

      return new Response(
        JSON.stringify({ deleted, failed }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use: status, warm, purge" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
