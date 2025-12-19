-- Drop existing policies
DROP POLICY IF EXISTS "Public read listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client insert listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client update listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client delete listening-audio" ON storage.objects;

-- Create final policies
CREATE POLICY "Public read listening-audio"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'listening-audio');

CREATE POLICY "No client insert listening-audio"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (false);

CREATE POLICY "No client update listening-audio"
ON storage.objects
FOR UPDATE
TO public
USING (false);

CREATE POLICY "No client delete listening-audio"
ON storage.objects
FOR DELETE
TO public
USING (false);