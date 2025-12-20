import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Audio generation edge function for listening exercises
const corsHeaders: { [key: string]: string } = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

type Slug = "customer-service-call" | "journalist-interview" | "museum-reception" | "job-interview" | "restaurant-reservation" | "airport-announcement" | "doctor-appointment" | "hotel-check-in" | "weather-forecast" | "train-announcement" | "shopping-clothes" | "university-lecture" | "business-meeting";

const VALID_SLUGS: Slug[] = [
  "customer-service-call",
  "journalist-interview",
  "museum-reception",
  "job-interview",
  "restaurant-reservation",
  "airport-announcement",
  "doctor-appointment",
  "hotel-check-in",
  "weather-forecast",
  "train-announcement",
  "shopping-clothes",
  "university-lecture",
  "business-meeting",
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
  "hotel-check-in":
    "Good evening, welcome to The Grand Hotel. How may I help you? Hello, I have a reservation under the name Thompson. Let me check that for you. Yes, here it is. A double room for three nights, is that correct? Yes, that's right. Perfect. Could I see your passport or ID card, please? Of course, here you go. Thank you. Your room is on the fourth floor, room four twelve. Here is your key card. What time is breakfast served? Breakfast is served in the restaurant on the ground floor from seven until ten thirty. Is there free wifi in the room? Yes, the wifi code is on the card with your key. Is there anything else you need? No, that's everything. Thank you very much. Enjoy your stay. The lift is just around the corner on your left.",
  "weather-forecast":
    "Good morning, here is your weather forecast for the week ahead. Today will start cloudy with temperatures around twelve degrees. Expect some light showers in the afternoon, so don't forget your umbrella. Tomorrow looks much brighter with sunny spells throughout the day. Temperatures will reach a pleasant eighteen degrees. Midweek will see a return of unsettled weather. Wednesday and Thursday will be windy with occasional heavy rain. The weekend is looking more promising. Saturday will be mostly dry with some sunshine. Sunday could see temperatures climb to twenty degrees, making it perfect for outdoor activities. That's your weather update. Stay tuned for traffic news coming up next.",
  "train-announcement":
    "Attention please. The train now approaching platform three is the eleven forty-five service to Edinburgh. This train will call at York, Durham, and Newcastle before arriving at Edinburgh Waverley at fourteen thirty. Passengers for Leeds should take the train on platform seven departing at eleven fifty-two. We regret to announce that the twelve fifteen service to Manchester has been cancelled due to a signalling problem. Passengers holding tickets for this service may travel on the next available train at twelve forty-five. Please keep your belongings with you at all times and report any unattended luggage to a member of staff. Thank you for travelling with us today.",
  "shopping-clothes":
    "Hi there, can I help you find anything today? Yes, I'm looking for a jacket for the winter. Great! What size are you? I'm usually a medium. We have some lovely options over here. Are you looking for something casual or more formal? Something casual that I can wear every day. How about this one? It's very popular this season and it's waterproof. Oh, that's nice. Can I try it on? Of course! The fitting rooms are just behind you on the right. It fits perfectly! How much is it? It's on sale right now. It was ninety-nine dollars, but it's now seventy-nine. That's a good deal. I'll take it. Would you like to pay by cash or card? Card, please.",
  "university-lecture":
    "Good morning everyone, and welcome to this semester's introductory course on environmental science. Before we dive into the material, let me outline what we'll be covering over the next twelve weeks. The course is divided into three main sections. First, we'll examine the fundamental principles of ecology and ecosystems. In the second part, we'll focus on climate change, its causes, and its global impact. Finally, we'll explore sustainable solutions and the role of policy in environmental protection. Assessment will consist of two written assignments worth thirty percent each, and a final exam worth forty percent. I encourage you to participate actively in seminars and don't hesitate to visit during my office hours if you have questions. The reading list is available on the course website. I recommend starting with chapters one through three of the main textbook this week.",
  "business-meeting":
    "Alright everyone, let's get started. Thanks for joining today's meeting on such short notice. The main item on the agenda is the upcoming product launch scheduled for next quarter. Sarah, could you give us an update on the marketing campaign? Sure. We've finalized the social media strategy and the print materials are currently being designed. We should have everything ready two weeks before launch. Excellent. What about the budget? Are we still on track? We're slightly over budget due to unexpected production costs, but we've identified some areas where we can cut back. I see. Let's discuss that in more detail after this meeting. Tom, how's the development team progressing? We're on schedule. The final testing phase begins next week, and we're confident we'll meet the deadline. Great work everyone. Let's schedule a follow-up meeting for next Wednesday to review progress. Any questions before we wrap up?",
};

const VOICE_IDS: { [key in Slug]?: string } = {
  "customer-service-call": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "journalist-interview": "TX3LPaxmHKxFdv7VOQHJ", // Liam
  "museum-reception": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "job-interview": "JBFqnCBsd6RMkjVDRZzb", // George
  "restaurant-reservation": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "airport-announcement": "onwK4e9ZLuTAKqWW03F9", // Daniel
  "doctor-appointment": "CwhRBWXzGAHq8TQ4Fs17", // Roger
  "hotel-check-in": "EXAVITQu4vr4xnSDxMaL", // Sarah
  "weather-forecast": "nPczCjzI2devNBz1zQrb", // Brian
  "train-announcement": "onwK4e9ZLuTAKqWW03F9", // Daniel
  "shopping-clothes": "cgSgspJ2msm6clMCkdW9", // Jessica
  "university-lecture": "JBFqnCBsd6RMkjVDRZzb", // George
  "business-meeting": "TX3LPaxmHKxFdv7VOQHJ", // Liam
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
