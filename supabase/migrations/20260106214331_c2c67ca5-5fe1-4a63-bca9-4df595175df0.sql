-- Add explicit DENY policies for UPDATE and DELETE on page_views
-- (Analytics data should only be modified via service role if needed)
CREATE POLICY "Deny public update on page views" 
ON public.page_views 
FOR UPDATE 
TO authenticated, anon
USING (false);

CREATE POLICY "Deny public delete on page views" 
ON public.page_views 
FOR DELETE 
TO authenticated, anon
USING (false);