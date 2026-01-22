import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export interface SimilarExercise {
  id: number | string;
  title: string;
  description?: string;
  level?: string;
  type: string;
  path: string;
}

interface SimilarExercisesProps {
  exercises: SimilarExercise[];
  currentId: number | string;
  title?: string;
}

const levelColors: Record<string, string> = {
  easy: 'bg-green-500/10 text-green-600 border-green-500/30',
  medium: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30',
  hard: 'bg-red-500/10 text-red-600 border-red-500/30',
  A1: 'bg-green-500/10 text-green-600 border-green-500/30',
  A2: 'bg-lime-500/10 text-lime-600 border-lime-500/30',
  B1: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30',
  B2: 'bg-orange-500/10 text-orange-600 border-orange-500/30',
  C1: 'bg-red-500/10 text-red-600 border-red-500/30',
  C2: 'bg-purple-500/10 text-purple-600 border-purple-500/30',
};

export function SimilarExercises({ exercises, currentId, title = "Exercices similaires" }: SimilarExercisesProps) {
  // Filter out current exercise and limit to 3
  const filtered = exercises
    .filter(ex => ex.id !== currentId)
    .slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <Card className="mt-8">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {filtered.map((exercise) => (
          <Link
            key={exercise.id}
            to={exercise.path}
            className="block p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-accent/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                  {exercise.title}
                </h4>
                {exercise.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {exercise.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {exercise.level && (
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${levelColors[exercise.level] || ''}`}
                  >
                    {exercise.level}
                  </Badge>
                )}
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default SimilarExercises;
