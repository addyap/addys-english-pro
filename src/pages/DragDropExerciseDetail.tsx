import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dragDropExercises } from '@/data/dragDropExercises';
import { DragDropExerciseComponent } from '@/components/DragDropExercise';
import SEOHead from '@/components/SEOHead';

// Use key prop on DragDropExerciseComponent to force remount on ID change

export default function DragDropExerciseDetail() {
  const { id } = useParams<{ id: string }>();
  const exerciseId = parseInt(id || '1', 10);
  const exercise = dragDropExercises.find(e => e.id === exerciseId);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Exercice non trouvé</h1>
          <Button asChild>
            <Link to="/exercices">Retour aux exercices</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${exercise.title} | Exercice Drag & Drop | Antony Addy`}
        description={exercise.description}
        canonicalPath={`/exercices/drag-drop/${exerciseId}`}
      />
      
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/exercices" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Link>
          </Button>

          <DragDropExerciseComponent key={exerciseId} exercise={exercise} />

          <div className="mt-8 flex justify-center gap-4">
            {exerciseId > 1 && (
              <Button variant="outline" asChild>
                <Link to={`/exercices/drag-drop/${exerciseId - 1}`}>
                  ← Exercice précédent
                </Link>
              </Button>
            )}
            {exerciseId < dragDropExercises.length && (
              <Button variant="outline" asChild>
                <Link to={`/exercices/drag-drop/${exerciseId + 1}`}>
                  Exercice suivant →
                </Link>
              </Button>
            )}
          </div>

          {/* Related Resources Section */}
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Complétez votre entraînement avec d'autres exercices créés par un formateur FPA certifié.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/exercices" className="text-primary hover:underline">
                Tous les exercices
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/reading" className="text-primary hover:underline">
                Compréhension écrite
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/exercices/cloe-preparation" className="text-primary hover:underline">
                Préparation CLOE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
