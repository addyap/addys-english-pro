-- Drop any existing policies for listening-audio bucket
DROP POLICY IF EXISTS "Public read listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Public read access for listening audio" ON storage.objects;
DROP POLICY IF EXISTS "No client insert listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client update listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "No client delete listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Service role upload listening-audio" ON storage.objects;
DROP POLICY IF EXISTS "Service role update listening-audio" ON storage.objects;

-- Final policies
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