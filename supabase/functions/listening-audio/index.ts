import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Valid slugs for listening exercises
const VALID_SLUGS = [
  'customer-service-call',
  'journalist-interview',
  'museum-reception'
];

// Exercise texts for TTS generation
const EXERCISE_TEXTS: Record<string, string> = {
  'customer-service-call': "Good morning, thank you for calling TechSupport. My name is Sarah. How may I assist you today? I'm having trouble with my laptop. It keeps freezing whenever I open multiple applications. I understand how frustrating that must be. Let me help you troubleshoot the issue. First, could you tell me how much memory your device has? I believe it has eight gigabytes of RAM. That should be sufficient for most tasks. Have you tried restarting your computer recently? Yes, I restarted it this morning, but the problem persists. I see. Let's try clearing your cache and temporary files. This often resolves performance issues. Would you like me to guide you through the process step by step?",
  'journalist-interview': "Welcome to BookTalk. Today, we have the pleasure of interviewing renowned author James Mitchell about his latest novel. Thank you for having me. It's wonderful to be here. Your new book explores themes of identity and belonging. What inspired you to tackle these subjects? I've always been fascinated by how people construct their sense of self. Growing up as an immigrant myself, I experienced firsthand the challenges of navigating between cultures. This novel is partly autobiographical, though I've fictionalized many elements. The protagonist's journey resonates with many readers who feel caught between worlds. How do you approach the writing process? I'm quite disciplined. I write every morning for at least three hours. The first draft is always messy, but that's where the magic happens. Revision is where the real work begins.",
  'museum-reception': "Good afternoon and welcome to the National History Museum. How can I help you? Hello, we'd like to visit the museum. How much are the tickets? For adults, it's twelve pounds each. Children under twelve enter free of charge. We also offer a family ticket for thirty pounds, which includes two adults and up to three children. That sounds perfect. We'll take the family ticket, please. Excellent choice. Here are your tickets and a map of the museum. The Egyptian exhibition is particularly popular right now. It's on the second floor. Don't miss the mummy display. Are there any guided tours available? Yes, there's a guided tour starting in twenty minutes. It lasts approximately ninety minutes and covers the main highlights. It's included in your ticket price. Where does the tour begin? The tour meets at the main staircase in the entrance hall. Look for the guide holding a blue flag."
};

// Voice IDs for different accents
const VOICE_IDS: Record<string, string> = {
  'customer-service-call': 'EXAVITQu4vr4xnSDxMaL', // Sarah - UK accent
  'journalist-interview': 'TX3LPaxmHKxFdv7VOQHJ', // Liam - US accent  
  'museum-reception': 'EXAVITQu4vr4xnSDxMaL' // Sarah - UK accent
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    // Validate slug
    if (!slug) {
      return new Response(
        JSON.stringify({ error: 'Missing slug parameter' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!VALID_SLUGS.includes(slug)) {
      return new Response(
        JSON.stringify({ error: 'Invalid slug' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role for storage access
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase environment variables');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if cached audio exists
    const filePath = `${slug}.mp3`;
    const { data: existingFile } = await supabase.storage
      .from('listening-audio')
      .list('', { search: filePath });

    if (existingFile && existingFile.length > 0 && existingFile.some(f => f.name === filePath)) {
      // Return cached audio URL
      const publicUrl = `${supabaseUrl}/storage/v1/object/public/listening-audio/${filePath}`;
      console.log(`Returning cached audio for ${slug}: ${publicUrl}`);
      return new Response(
        JSON.stringify({ url: publicUrl, cached: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate audio via ElevenLabs
    const elevenlabsApiKey = Deno.env.get('ELEVENLABS_API_KEY');
    if (!elevenlabsApiKey) {
      console.error('Missing ELEVENLABS_API_KEY');
      return new Response(
        JSON.stringify({ error: 'ElevenLabs API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const text = EXERCISE_TEXTS[slug];
    const voiceId = VOICE_IDS[slug] || 'EXAVITQu4vr4xnSDxMaL'; // Default to Sarah

    console.log(`Generating audio for ${slug} with voice ${voiceId}`);

    const ttsResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': elevenlabsApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_multilingual_v2',
          output_format: 'mp3_44100_128',
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
      const errorText = await ttsResponse.text();
      console.error('ElevenLabs API error:', ttsResponse.status, errorText);
      
      if (ttsResponse.status === 401) {
        return new Response(
          JSON.stringify({ error: 'Invalid ElevenLabs API key' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (ttsResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'ElevenLabs quota exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Failed to generate audio' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get audio buffer
    const audioBuffer = await ttsResponse.arrayBuffer();
    console.log(`Generated audio for ${slug}: ${audioBuffer.byteLength} bytes`);

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('listening-audio')
      .upload(filePath, audioBuffer, {
        contentType: 'audio/mpeg',
        upsert: true,
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return new Response(
        JSON.stringify({ error: 'Failed to cache audio' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Return the public URL
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/listening-audio/${filePath}`;
    console.log(`Audio cached and available at: ${publicUrl}`);
    
    return new Response(
      JSON.stringify({ url: publicUrl, cached: false }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
