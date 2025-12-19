-- Create storage bucket for listening audio caching
INSERT INTO storage.buckets (id, name, public)
VALUES ('listening-audio', 'listening-audio', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to the bucket
CREATE POLICY "Public read access for listening audio"
ON storage.objects
FOR SELECT
USING (bucket_id = 'listening-audio');

-- Allow service role to insert/update audio files (edge function uses service role)
CREATE POLICY "Service role can upload listening audio"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'listening-audio');

CREATE POLICY "Service role can update listening audio"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'listening-audio');