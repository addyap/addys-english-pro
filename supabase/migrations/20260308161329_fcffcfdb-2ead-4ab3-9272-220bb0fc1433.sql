
CREATE TABLE public.negotiation_training_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text,
  scenario text NOT NULL,
  category text,
  messages jsonb NOT NULL DEFAULT '[]'::jsonb,
  feedback jsonb,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  overall_level text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.negotiation_training_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert on negotiation_training_sessions"
  ON public.negotiation_training_sessions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anonymous select on negotiation_training_sessions"
  ON public.negotiation_training_sessions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anonymous update on negotiation_training_sessions"
  ON public.negotiation_training_sessions
  FOR UPDATE
  TO anon, authenticated
  USING (true);
