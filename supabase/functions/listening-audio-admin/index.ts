import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

var corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-admin-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

var VALID_SLUGS = ["customer-service-call", "journalist-interview", "museum-reception"];

var EXERCISE_TEXTS = {
  "customer-service-call": "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today? I'm having trouble with my laptop. It keeps freezing whenever I open multiple applications. I understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has? I believe it has eight gigabytes of RAM. That should be sufficient for most tasks. Have you tried restarting your computer recently? Yes, I restarted it this morning, but the problem persists. I see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
  "journalist-interview": "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel. Thank you for having me. It's wonderful to be here. Your new book explores themes of identity and belonging. What inspired you to tackle these subjects? I've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements. The protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process? I'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
  "museum-reception": "Good afternoon and welcome to the National History Museum. How can I help you? Hello, we'd like to visit the museum. How much are the tickets? For adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children. That sounds perfect. We'll take the family ticket, please. Excellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display. Are there any guided tours available? Yes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price. Where does the tour begin? The tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag."
};

var VOICE_IDS = {
  "customer-service-call": "EXAVITQu4vr4xnSDxMaL",
  "journalist-interview": "TX3LPaxmHKxFdv7VOQHJ",
  "museum-reception": "EXAVITQu4vr4xnSDxMaL"
};

var BUCKET = "listening-audio";

serve(function(req) {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );
  }

  var adminSecret = req.headers.get("x-admin-secret");
  var expectedSecret = Deno.env.get("LISTENING_ADMIN_SECRET");

  if (!expectedSecret || adminSecret !== expectedSecret) {
    return new Response(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );
  }

  return req.json().then(function(body) {
    var action = body.action;
    var slugs = body.slugs || VALID_SLUGS;

    for (var i = 0; i < slugs.length; i++) {
      if (VALID_SLUGS.indexOf(slugs[i]) === -1) {
        return new Response(
          JSON.stringify({ error: "Invalid slug: " + slugs[i] }),
          { status: 400, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
        );
      }
    }

    var supabaseUrl = Deno.env.get("SUPABASE_URL");
    var supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
      );
    }

    var supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (action === "status") {
      return handleStatus(supabase, supabaseUrl, slugs);
    }

    if (action === "warm") {
      return handleWarm(supabase, slugs);
    }

    if (action === "purge") {
      return handlePurge(supabase, slugs);
    }

    return new Response(
      JSON.stringify({ error: "Invalid action. Use: status, warm, purge" }),
      { status: 400, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );

  }).catch(function(err) {
    var message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );
  });
});

function handleStatus(supabase, supabaseUrl, slugs) {
  var items = [];
  var promises = [];

  for (var i = 0; i < slugs.length; i++) {
    (function(slug) {
      var filePath = slug + ".mp3";
      var publicUrl = supabaseUrl + "/storage/v1/object/public/" + BUCKET + "/" + filePath;

      var p = supabase.storage.from(BUCKET).download(filePath).then(function(result) {
        var exists = !!result.data && !result.error;
        items.push({ slug: slug, exists: exists, publicUrl: publicUrl });
      });
      promises.push(p);
    })(slugs[i]);
  }

  return Promise.all(promises).then(function() {
    return new Response(
      JSON.stringify({ items: items }),
      { headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );
  });
}

function handleWarm(supabase, slugs) {
  var elevenlabsApiKey = Deno.env.get("ELEVENLABS_API_KEY");
  if (!elevenlabsApiKey) {
    return Promise.resolve(new Response(
      JSON.stringify({ error: "ElevenLabs API key not configured" }),
      { status: 500, headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    ));
  }

  var warmed = [];
  var skipped = [];
  var failed = [];

  function processSlug(index) {
    if (index >= slugs.length) {
      return Promise.resolve(new Response(
        JSON.stringify({ warmed: warmed, skipped: skipped, failed: failed }),
        { headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
      ));
    }

    var slug = slugs[index];
    var filePath = slug + ".mp3";

    return supabase.storage.from(BUCKET).download(filePath).then(function(result) {
      if (result.data && !result.error) {
        skipped.push(slug);
        return processSlug(index + 1);
      }

      var text = EXERCISE_TEXTS[slug];
      var voiceId = VOICE_IDS[slug] || "EXAVITQu4vr4xnSDxMaL";

      return fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voiceId, {
        method: "POST",
        headers: {
          "xi-api-key": elevenlabsApiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2",
          output_format: "mp3_44100_128",
          voice_settings: {
            stability: 0.6,
            similarity_boost: 0.75,
            style: 0.3,
            use_speaker_boost: true,
            speed: 0.9
          }
        })
      }).then(function(ttsResponse) {
        if (!ttsResponse.ok) {
          return ttsResponse.text().then(function(errText) {
            failed.push({ slug: slug, error: "ElevenLabs error: " + ttsResponse.status + " " + errText });
            return processSlug(index + 1);
          });
        }

        return ttsResponse.arrayBuffer().then(function(audioBuffer) {
          return supabase.storage.from(BUCKET).upload(filePath, audioBuffer, {
            contentType: "audio/mpeg",
            upsert: true
          }).then(function(uploadResult) {
            if (uploadResult.error) {
              failed.push({ slug: slug, error: "Upload error: " + uploadResult.error.message });
            } else {
              warmed.push(slug);
            }
            return processSlug(index + 1);
          });
        });
      }).catch(function(err) {
        var message = err instanceof Error ? err.message : String(err);
        failed.push({ slug: slug, error: message });
        return processSlug(index + 1);
      });
    });
  }

  return processSlug(0);
}

function handlePurge(supabase, slugs) {
  var deleted = [];
  var failed = [];
  var promises = [];

  for (var i = 0; i < slugs.length; i++) {
    (function(slug) {
      var filePath = slug + ".mp3";

      var p = supabase.storage.from(BUCKET).remove([filePath]).then(function(result) {
        if (result.error) {
          failed.push({ slug: slug, error: result.error.message });
        } else {
          deleted.push(slug);
        }
      });
      promises.push(p);
    })(slugs[i]);
  }

  return Promise.all(promises).then(function() {
    return new Response(
      JSON.stringify({ deleted: deleted, failed: failed }),
      { headers: Object.assign({}, corsHeaders, { "Content-Type": "application/json" }) }
    );
  });
}
