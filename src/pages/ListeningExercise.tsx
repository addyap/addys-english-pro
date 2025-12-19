import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Headphones, ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { getListeningExerciseBySlug, listeningExercises } from '@/data/listeningExercises';
import { ListeningLanguageProvider } from '@/contexts/ListeningLanguageContext';
import LanguageDropdown from '@/components/listening/LanguageDropdown';
import AudioPlayer from '@/components/listening/AudioPlayer';
import Transcript from '@/components/listening/Transcript';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchListeningAudioUrl } from '@/lib/listeningAudio';

const ListeningExerciseContent: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const exercise = getListeningExerciseBySlug(slug || '');
  
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(true);
  const [audioError, setAudioError] = useState<string | null>(null);

  // Fetch audio URL when slug changes
  useEffect(() => {
    if (!slug) return;
    
    setAudioLoading(true);
    setAudioError(null);
    setAudioUrl(null);

    fetchListeningAudioUrl(slug)
      .then((url) => {
        setAudioUrl(url);
        setAudioLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch audio:', err);
        setAudioError(err.message || 'Failed to load audio');
        setAudioLoading(false);
      });
  }, [slug]);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Exercice non trouvé</h1>
          <p className="text-muted-foreground mb-8">
            Cet exercice d'écoute n'existe pas.
          </p>
          <Link to="/exercices/listening" className="text-primary hover:underline">
            Retour au Listening Lab
          </Link>
        </div>
      </div>
    );
  }

  // Get prev/next exercises
  const currentIndex = listeningExercises.findIndex(ex => ex.slug === slug);
  const prevExercise = currentIndex > 0 ? listeningExercises[currentIndex - 1] : null;
  const nextExercise = currentIndex < listeningExercises.length - 1 ? listeningExercises[currentIndex + 1] : null;

  return (
    <>
      <SEOHead
        title={`${exercise.title} – Listening Lab | Antony Addy`}
        description={`Exercice d'écoute: ${exercise.title}. Niveau ${exercise.level}, accent ${exercise.accent}. Transcription avec traductions interactives.`}
        canonicalPath={`/exercices/listening/${exercise.slug}`}
        keywords={["Listening", exercise.title, exercise.level, "Compréhension orale", "Antony Addy"]}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              to="/exercices/listening"
              className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au Listening Lab
            </Link>

            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Headphones className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-0">
                    {exercise.level}
                  </Badge>
                  <Badge variant="outline" className="border-white/30 text-primary-foreground">
                    {exercise.accent}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading">
                  {exercise.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {/* Language Selector */}
            <div className="flex justify-end">
              <LanguageDropdown />
            </div>

            {/* Audio Player */}
            {audioLoading ? (
              <Card>
                <CardContent className="py-8">
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating audio...</span>
                  </div>
                </CardContent>
              </Card>
            ) : audioError ? (
              <Card className="border-destructive/50">
                <CardContent className="py-6">
                  <div className="flex items-center gap-3 text-destructive">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Audio unavailable</p>
                      <p className="text-sm text-muted-foreground">{audioError}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : audioUrl ? (
              <AudioPlayer audioUrl={audioUrl} title={exercise.title} />
            ) : null}

            {/* Transcript */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span>Transcript</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    (survolez les mots soulignés pour voir la traduction)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Transcript text={exercise.text} glossary={exercise.glossary} />
              </CardContent>
            </Card>

            {/* Glossary Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-heading">
                  Vocabulaire ({Object.keys(exercise.glossary).length} mots)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(exercise.glossary).map(word => (
                    <Badge key={word} variant="outline" className="text-sm">
                      {word}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              {prevExercise ? (
                <Button
                  onClick={() => navigate(`/exercices/listening/${prevExercise.slug}`)}
                  variant="outline"
                  className="gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevExercise.title}</span>
                  <span className="sm:hidden">Précédent</span>
                </Button>
              ) : (
                <div />
              )}

              {nextExercise ? (
                <Button
                  onClick={() => navigate(`/exercices/listening/${nextExercise.slug}`)}
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span className="hidden sm:inline">{nextExercise.title}</span>
                  <span className="sm:hidden">Suivant</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Wrap with Language Provider
const ListeningExercise: React.FC = () => {
  return (
    <ListeningLanguageProvider>
      <ListeningExerciseContent />
    </ListeningLanguageProvider>
  );
};

export default ListeningExercise;
