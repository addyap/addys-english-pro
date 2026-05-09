
CREATE TABLE public.reponses_questionnaire (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  langue_completion text NOT NULL DEFAULT 'fr',
  prenom text NOT NULL,
  nom text NOT NULL,
  email text NOT NULL,
  telephone text,
  langue_maternelle text,
  pays_residence text,
  niveau_cefr text NOT NULL,
  competences_faibles jsonb DEFAULT '[]'::jsonb,
  derniere_utilisation text,
  contexte_principal text NOT NULL,
  objectifs jsonb DEFAULT '[]'::jsonb,
  echeance text,
  notes_objectifs text,
  format_seance text NOT NULL,
  type_seance text,
  heures_par_semaine int,
  creneaux_preferes jsonb DEFAULT '[]'::jsonb,
  date_demarrage text,
  source text,
  experience_formation text,
  style_enseignement jsonb DEFAULT '[]'::jsonb,
  notes_finales text
);

ALTER TABLE public.reponses_questionnaire ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit questionnaire"
  ON public.reponses_questionnaire
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    prenom IS NOT NULL AND length(prenom) > 0 AND length(prenom) < 200
    AND nom IS NOT NULL AND length(nom) > 0 AND length(nom) < 200
    AND email IS NOT NULL AND email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$' AND length(email) < 320
    AND niveau_cefr IS NOT NULL
    AND contexte_principal IS NOT NULL
    AND format_seance IS NOT NULL
  );

CREATE POLICY "Service role reads questionnaire"
  ON public.reponses_questionnaire
  FOR SELECT
  TO service_role
  USING (true);
