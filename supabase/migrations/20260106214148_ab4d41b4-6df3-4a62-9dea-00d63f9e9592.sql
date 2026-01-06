-- Fix 1: Add explicit policy to restrict page_views SELECT access
-- (Ensures only service role can read analytics data)
DROP POLICY IF EXISTS "Allow service role to read page views" ON public.page_views;
CREATE POLICY "Only service role can read page views" 
ON public.page_views 
FOR SELECT 
TO authenticated, anon
USING (false);

-- Fix 2: Add DELETE policy for profiles table (GDPR compliance)
CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (auth.uid() = user_id);