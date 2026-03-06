
CREATE TABLE public.conversation_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario text NOT NULL,
  messages jsonb NOT NULL DEFAULT '[]'::jsonb,
  feedback jsonb,
  session_id text,
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE public.conversation_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert on conversation_sessions"
  ON public.conversation_sessions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow anonymous select own session"
  ON public.conversation_sessions FOR SELECT
  USING (true);

CREATE POLICY "Allow anonymous update own session"
  ON public.conversation_sessions FOR UPDATE
  USING (true);
