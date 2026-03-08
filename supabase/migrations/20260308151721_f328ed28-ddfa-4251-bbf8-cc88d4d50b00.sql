
CREATE TABLE public.email_training_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text,
  scenario text NOT NULL,
  category text,
  learner_subject text,
  learner_reply text,
  feedback jsonb,
  model_answer text,
  improved_reply text,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  overall_level text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.email_training_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert on email_training_sessions"
  ON public.email_training_sessions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow anonymous select on email_training_sessions"
  ON public.email_training_sessions FOR SELECT
  USING (true);

CREATE POLICY "Allow anonymous update on email_training_sessions"
  ON public.email_training_sessions FOR UPDATE
  USING (true);
