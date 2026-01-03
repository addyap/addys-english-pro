-- Create page_views table for server-side analytics
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  session_id TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX idx_page_views_created_at ON public.page_views (created_at DESC);
CREATE INDEX idx_page_views_path ON public.page_views (path);

-- Enable RLS but allow public inserts (tracking is anonymous)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (anonymous tracking)
CREATE POLICY "Allow anonymous page view tracking"
ON public.page_views
FOR INSERT
WITH CHECK (true);

-- Only allow reading via service role (admin only)
CREATE POLICY "Service role can read page views"
ON public.page_views
FOR SELECT
USING (auth.role() = 'service_role');