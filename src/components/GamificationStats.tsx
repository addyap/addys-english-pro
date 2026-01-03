import { Trophy, Flame, Star, Zap, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGamification } from '@/hooks/useGamification';
import { cn } from '@/lib/utils';

interface GamificationStatsProps {
  compact?: boolean;
  showBadges?: boolean;
  className?: string;
}

export function GamificationStats({ compact = false, showBadges = true, className }: GamificationStatsProps) {
  const { data, getLevelProgress, pointsForNextLevel } = useGamification();
  const levelProgress = getLevelProgress();

  if (compact) {
    return (
      <div className={cn("flex items-center gap-4 flex-wrap", className)}>
        <div className="flex items-center gap-1.5">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold">{data.totalPoints} pts</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-semibold">{data.currentStreak} jours</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-semibold">Niv. {data.level}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Level & Points Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">{data.level}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Niveau {data.level}</p>
                <p className="text-xs text-muted-foreground">{data.totalPoints} points totaux</p>
              </div>
            </div>
            <Trophy className="w-8 h-8 text-accent" />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progression</span>
              <span>{Math.round(levelProgress)}%</span>
            </div>
            <Progress value={levelProgress} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">
              {pointsForNextLevel - data.totalPoints} pts pour niveau {data.level + 1}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card className="bg-card/80">
          <CardContent className="p-3 text-center">
            <Flame className="w-6 h-6 mx-auto mb-1 text-orange-500" />
            <p className="text-2xl font-bold text-foreground">{data.currentStreak}</p>
            <p className="text-xs text-muted-foreground">Série actuelle</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80">
          <CardContent className="p-3 text-center">
            <Target className="w-6 h-6 mx-auto mb-1 text-primary" />
            <p className="text-2xl font-bold text-foreground">{data.exercisesCompleted}</p>
            <p className="text-xs text-muted-foreground">Exercices</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80">
          <CardContent className="p-3 text-center">
            <Star className="w-6 h-6 mx-auto mb-1 text-yellow-500" />
            <p className="text-2xl font-bold text-foreground">{data.perfectScores}</p>
            <p className="text-xs text-muted-foreground">Sans faute</p>
          </CardContent>
        </Card>
        <Card className="bg-card/80">
          <CardContent className="p-3 text-center">
            <Zap className="w-6 h-6 mx-auto mb-1 text-purple-500" />
            <p className="text-2xl font-bold text-foreground">{data.speedChallengesWon}</p>
            <p className="text-xs text-muted-foreground">Défis chrono</p>
          </CardContent>
        </Card>
      </div>

      {/* Badges */}
      {showBadges && (
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground flex items-center gap-2">
            <span className="text-lg">🏅</span> Badges gagnés ({data.badges.length})
          </h4>
          {data.badges.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {data.badges.map(badge => (
                <Badge 
                  key={badge.id} 
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  <span className="mr-1">{badge.icon}</span>
                  {badge.nameFr}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Complétez des exercices pour gagner des badges!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
