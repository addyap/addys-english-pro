import React from 'react';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  CheckCircle,
  BookOpen,
  MessageSquare,
  FileText,
  Headphones,
  PenTool,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCLOEProgress, CLOEProgressStats } from '@/hooks/useCLOEProgress';
import { cloeExercises } from '@/data/cloeExercises';
import { Link } from 'react-router-dom';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'vocabulary': return BookOpen;
    case 'grammar': return PenTool;
    case 'expressions': return MessageSquare;
    case 'reading': return FileText;
    case 'listening': return Headphones;
    default: return Target;
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'vocabulary': return 'Vocabulaire';
    case 'grammar': return 'Grammaire';
    case 'expressions': return 'Expressions';
    case 'reading': return 'Lecture';
    case 'listening': return 'Écoute';
    default: return category;
  }
};

const getMasteryLabel = (level: CLOEProgressStats['masteryLevel']) => {
  switch (level) {
    case 'beginner': return { label: 'Débutant', color: 'bg-slate-100 text-slate-700' };
    case 'intermediate': return { label: 'Intermédiaire', color: 'bg-blue-100 text-blue-700' };
    case 'advanced': return { label: 'Avancé', color: 'bg-purple-100 text-purple-700' };
    case 'expert': return { label: 'Expert', color: 'bg-amber-100 text-amber-700' };
  }
};

interface CLOEProgressTrackerProps {
  compact?: boolean;
}

export const CLOEProgressTracker: React.FC<CLOEProgressTrackerProps> = ({ compact = false }) => {
  const { getStats, clearProgress, results, getScoreForExercise } = useCLOEProgress();
  const totalExercises = cloeExercises.length;
  const stats = getStats(totalExercises);
  
  const completionPercent = Math.round((stats.totalCompleted / totalExercises) * 100);
  const mastery = getMasteryLabel(stats.masteryLevel);

  // Find next uncompleted exercise
  const nextExercise = cloeExercises.find(ex => !results.some(r => r.exerciseId === ex.id));

  if (compact) {
    return (
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              <span className="font-semibold text-sm">Votre progression CLOE</span>
            </div>
            <Badge className={mastery.color}>{mastery.label}</Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{stats.totalCompleted}/{totalExercises} exercices</span>
              <span className="font-medium text-primary">{completionPercent}%</span>
            </div>
            <Progress value={completionPercent} className="h-2" />
          </div>

          {stats.averageScore > 0 && (
            <div className="mt-3 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Score moyen : <strong>{stats.averageScore}%</strong></span>
              </div>
            </div>
          )}

          {nextExercise && (
            <Link to={`/exercices/cloe/${nextExercise.id}`} className="block mt-3">
              <Button size="sm" className="w-full gap-2">
                Continuer
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            Votre progression CLOE
          </CardTitle>
          <Badge className={mastery.color}>{mastery.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progression globale</span>
            <span className="font-medium">{stats.totalCompleted}/{totalExercises} exercices ({completionPercent}%)</span>
          </div>
          <Progress value={completionPercent} className="h-3" />
        </div>

        {/* Stats Grid */}
        {stats.totalCompleted > 0 && (
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card rounded-lg p-3 border">
              <div className="text-2xl font-bold text-primary">{stats.averageScore}%</div>
              <div className="text-xs text-muted-foreground">Score moyen</div>
            </div>
            <div className="bg-card rounded-lg p-3 border">
              <div className="text-2xl font-bold text-green-600">{stats.totalCompleted}</div>
              <div className="text-xs text-muted-foreground">Exercices complétés</div>
            </div>
          </div>
        )}

        {/* Category Progress */}
        {Object.keys(stats.byCategory).length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Par catégorie</h4>
            <div className="space-y-2">
              {Object.entries(stats.byCategory).map(([cat, data]) => {
                const Icon = getCategoryIcon(cat);
                const percent = Math.round((data.completed / data.total) * 100);
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{getCategoryLabel(cat)}</span>
                        <span className="text-muted-foreground">{data.completed}/{data.total} • {data.avgScore}%</span>
                      </div>
                      <Progress value={percent} className="h-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Recent Activity */}
        {stats.recentResults.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Activité récente</h4>
            <div className="space-y-1">
              {stats.recentResults.slice(0, 3).map((result) => {
                const scorePercent = Math.round((result.score / result.totalQuestions) * 100);
                return (
                  <div key={result.exerciseId} className="flex items-center justify-between text-xs py-1.5 px-2 bg-muted/50 rounded">
                    <div className="flex items-center gap-2 min-w-0">
                      <CheckCircle className={`h-3.5 w-3.5 flex-shrink-0 ${scorePercent >= 70 ? 'text-green-500' : 'text-amber-500'}`} />
                      <span className="truncate">{result.title}</span>
                    </div>
                    <Badge variant="outline" className="text-xs ml-2">
                      {scorePercent}%
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          {nextExercise && (
            <Link to={`/exercices/cloe/${nextExercise.id}`} className="flex-1">
              <Button size="sm" className="w-full gap-2">
                {stats.totalCompleted === 0 ? 'Commencer' : 'Continuer'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
          {stats.totalCompleted > 0 && (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => {
                if (confirm('Réinitialiser toute votre progression CLOE ?')) {
                  clearProgress();
                }
              }}
              className="gap-1"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {stats.totalCompleted === 0 && (
          <p className="text-xs text-muted-foreground text-center">
            Commencez un exercice pour suivre votre progression !
          </p>
        )}
      </CardContent>
    </Card>
  );
};
