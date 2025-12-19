/**
 * Fetches the audio URL for a listening exercise.
 * Uses the edge function which handles caching and ElevenLabs TTS generation.
 */
export async function fetchListeningAudioUrl(slug: string): Promise<string> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  
  if (!supabaseUrl) {
    throw new Error('Supabase URL not configured');
  }

  const response = await fetch(
    `${supabaseUrl}/functions/v1/listening-audio?slug=${encodeURIComponent(slug)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Failed to fetch audio: ${response.status}`);
  }

  const data = await response.json();
  
  if (!data.url) {
    throw new Error('No audio URL returned');
  }

  return data.url;
}
