-- Drop existing permissive INSERT/UPDATE policies that allow client writes
DROP POLICY IF EXISTS "Service role can upload listening audio" ON storage.objects;
DROP POLICY IF EXISTS "Service role can update listening audio" ON storage.objects;

-- Create restrictive policies to block all client writes
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