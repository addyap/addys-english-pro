
-- Drop overly permissive UPDATE policies on all 4 training session tables
-- and replace with session_id scoped policies

-- conversation_sessions
DROP POLICY IF EXISTS "Allow anonymous update on conversation_sessions" ON public.conversation_sessions;
DROP POLICY IF EXISTS "Allow anonymous insert on conversation_sessions" ON public.conversation_sessions;
DROP POLICY IF EXISTS "Allow anonymous select own session" ON public.conversation_sessions;

CREATE POLICY "Insert with session_id required" ON public.conversation_sessions
  FOR INSERT WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Select own session only" ON public.conversation_sessions
  FOR SELECT USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

CREATE POLICY "Update own session only" ON public.conversation_sessions
  FOR UPDATE USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

-- email_training_sessions
DROP POLICY IF EXISTS "Allow anonymous update on email_training_sessions" ON public.email_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous insert on email_training_sessions" ON public.email_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous select on email_training_sessions" ON public.email_training_sessions;

CREATE POLICY "Insert with session_id required" ON public.email_training_sessions
  FOR INSERT WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Select own session only" ON public.email_training_sessions
  FOR SELECT USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

CREATE POLICY "Update own session only" ON public.email_training_sessions
  FOR UPDATE USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

-- presentation_training_sessions
DROP POLICY IF EXISTS "Allow anonymous update on presentation_training_sessions" ON public.presentation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous insert on presentation_training_sessions" ON public.presentation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous select on presentation_training_sessions" ON public.presentation_training_sessions;

CREATE POLICY "Insert with session_id required" ON public.presentation_training_sessions
  FOR INSERT WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Select own session only" ON public.presentation_training_sessions
  FOR SELECT USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

CREATE POLICY "Update own session only" ON public.presentation_training_sessions
  FOR UPDATE USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

-- negotiation_training_sessions
DROP POLICY IF EXISTS "Allow anonymous update on negotiation_training_sessions" ON public.negotiation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous insert on negotiation_training_sessions" ON public.negotiation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous select on negotiation_training_sessions" ON public.negotiation_training_sessions;

CREATE POLICY "Insert with session_id required" ON public.negotiation_training_sessions
  FOR INSERT WITH CHECK (session_id IS NOT NULL AND session_id <> '');

CREATE POLICY "Select own session only" ON public.negotiation_training_sessions
  FOR SELECT USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');

CREATE POLICY "Update own session only" ON public.negotiation_training_sessions
  FOR UPDATE USING (session_id = current_setting('request.headers', true)::json->>'x-session-id');
