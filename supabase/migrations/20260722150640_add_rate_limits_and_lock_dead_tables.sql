-- Adds a shared per-IP rate-limiting primitive for send-contact-email
-- (currently unprotected against a scripted direct POST), and locks down
-- two tables left open from removed features.
--
-- Implementation matches the one already deployed on anglaisadistance.fr
-- (see that repo's 20260721200751_restore_rate_limits_and_harden_public_tables.sql).

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE TABLE public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL,
  bucket text NOT NULL,
  window_kind text NOT NULL,            -- 'minute' or 'day'
  window_start timestamptz NOT NULL,
  count integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (identifier, bucket, window_kind, window_start)
);

CREATE INDEX rate_limits_lookup_idx ON public.rate_limits (identifier, bucket, window_kind, window_start);
CREATE INDEX rate_limits_window_start_idx ON public.rate_limits (window_start);

GRANT ALL ON public.rate_limits TO service_role;

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;
-- No anon/authenticated policies on purpose.

CREATE OR REPLACE FUNCTION public.consume_rate_limit(
  _identifier text,
  _bucket text,
  _max_per_min integer,
  _max_per_day integer
)
RETURNS TABLE (allowed boolean, retry_after integer)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  now_ts timestamptz := now();
  minute_start timestamptz := date_trunc('minute', now_ts);
  day_start timestamptz := date_trunc('day', now_ts);
  minute_count integer;
  day_count integer;
  retry integer := 0;
BEGIN
  DELETE FROM public.rate_limits
    WHERE window_start < now_ts - INTERVAL '2 days';

  INSERT INTO public.rate_limits (identifier, bucket, window_kind, window_start, count)
    VALUES (_identifier, _bucket, 'minute', minute_start, 1)
    ON CONFLICT (identifier, bucket, window_kind, window_start)
    DO UPDATE SET count = public.rate_limits.count + 1
    RETURNING count INTO minute_count;

  INSERT INTO public.rate_limits (identifier, bucket, window_kind, window_start, count)
    VALUES (_identifier, _bucket, 'day', day_start, 1)
    ON CONFLICT (identifier, bucket, window_kind, window_start)
    DO UPDATE SET count = public.rate_limits.count + 1
    RETURNING count INTO day_count;

  IF minute_count > _max_per_min THEN
    retry := GREATEST(1, CEIL(EXTRACT(EPOCH FROM (minute_start + INTERVAL '1 minute') - now_ts))::int);
    RETURN QUERY SELECT false, retry;
    RETURN;
  END IF;

  IF day_count > _max_per_day THEN
    retry := GREATEST(1, CEIL(EXTRACT(EPOCH FROM (day_start + INTERVAL '1 day') - now_ts))::int);
    RETURN QUERY SELECT false, retry;
    RETURN;
  END IF;

  RETURN QUERY SELECT true, 0;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_rate_limit(text, text, integer, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.consume_rate_limit(text, text, integer, integer) TO service_role;

-- ---------------------------------------------------------------------
-- negotiation_training_sessions and reponses_questionnaire belong to
-- features removed from the live site (see git branches
-- remove/questionnaire-feature, content/unpromote-questionnaire; grep
-- confirms zero references to either table anywhere in current src/).
-- Both were left with permissive anon policies:
--   - negotiation_training_sessions: anon INSERT + SELECT + UPDATE, all
--     `USING (true)` / `WITH CHECK (true)` -- anyone with the public anon
--     key can read every row (a real data-exposure issue, since SELECT
--     was never scoped to the caller's own session) and write/overwrite
--     any row.
--   - reponses_questionnaire: anon INSERT with field-length/format checks
--     but no rate limit -- floodable with fake leads.
-- Since neither table is used by any live feature, the correct fix is to
-- close public access entirely rather than just rate-limit a dead table.
-- ---------------------------------------------------------------------

DROP POLICY IF EXISTS "Allow anonymous insert on negotiation_training_sessions" ON public.negotiation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous select on negotiation_training_sessions" ON public.negotiation_training_sessions;
DROP POLICY IF EXISTS "Allow anonymous update on negotiation_training_sessions" ON public.negotiation_training_sessions;

DROP POLICY IF EXISTS "Public can submit questionnaire" ON public.reponses_questionnaire;
