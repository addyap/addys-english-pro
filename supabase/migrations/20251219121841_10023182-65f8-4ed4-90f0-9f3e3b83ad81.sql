-- A) STORAGE POLICIES FIX
-- First, drop any existing policies that might conflict
DROP POLICY IF EXISTS "Public read listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Public read access for listening audio" ON storage.objects;
DROP POLICY IF EXISTS "No client insert listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client update listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client delete listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Service role upload listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Service role update listening-audio" ON storage.objects;

-- Ensure bucket exists with public ON
INSERT INTO storage.buckets (id, name, public)
VALUES ('listening-audio', 'listening-audio', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Create final policies
-- Public read access
CREATE POLICY "Public read listening-audio"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'listening-audio');

-- Block all client writes (these use false to deny)
CREATE POLICY "No client insert listening-audio"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (false AND bucket_id = 'listening-audio');

CREATE POLICY "No client update listening-audio"
ON storage.objects
FOR UPDATE
TO public
USING (false AND bucket_id = 'listening-audio');

CREATE POLICY "No client delete listening-audio"
ON storage.objects
FOR DELETE
TO public
USING (false AND bucket_id = 'listening-audio');