import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Trophy,
  Calendar,
  TrendingUp,
  Target,
  Clock,
  Award,
  BarChart3,
  Trash2,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useCLOEProgress, CLOEResult } from '@/hooks/useCLOEProgress';
import { cloeExercises } from '@/data/cloeExercises';
import { cn } from '@/lib/utils';
import { format, parseISO, subDays, isAfter } from 'date-fns';
import { fr } from 'date-fns/locale';

const LEVEL_COLORS: Record<string, string> = {
  'A1': '#10b981',
  'A2': '#14b8a6',
  'B1': '#3b82f6',
  'B2': '#6366f1',
  'C1': '#a855f7',
  'C2': '#ec4899',
};

const CATEGORY_COLORS: Record<string, string> = {
  vocabulary: '#3b82f6',
  grammar: '#8b5cf6',
  expressions: '#f59e0b',
  reading: '#10b981',
  listening: '#ec4899',
};

export default function CLOETestHistory() {
  const { results, clearProgress, getStats } = useCLOEProgress();
  const stats = getStats(cloeExercises.length);

  // Sort results by date (newest first)
  const sortedResults = useMemo(() => {
    return [...results].sort(
      (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );
  }, [results]);

  // Filter practice tests only
  const practiceTests = useMemo(() => {
    return sortedResults.filter(r => r.exerciseId.startsWith('practice-test-'));
  }, [sortedResults]);

  // Progress over time (last 30 days)
  const progressOverTime = useMemo(() => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(new Date(), 29 - i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const dayResults = results.filter(r => 
        format(parseISO(r.completedAt), 'yyyy-MM-dd') === dateStr
      );
      
      const avgScore = dayResults.length > 0
        ? Math.round(dayResults.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0) / dayResults.length)
        : null;
      
      return {
        date: format(date, 'dd/MM', { locale: fr }),
        fullDate: dateStr,
        score: avgScore,
        count: dayResults.length,
      };
    });
    
    // Only return days with data
    return last30Days.filter(d => d.score !== null);
  }, [results]);

  // Score distribution by level
  const scoreByLevel = useMemo(() => {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    return levels.map(level => {
      const levelResults = results.filter(r => r.difficulty === level);
      const avgScore = levelResults.length > 0
        ? Math.round(levelResults.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0) / levelResults.length)
        : 0;
      return {
        level,
        score: avgScore,
        count: levelResults.length,
        fill: LEVEL_COLORS[level],
      };
    }).filter(d => d.count > 0);
  }, [results]);

  // Score distribution by category
  const scoreByCategory = useMemo(() => {
    return Object.entries(CATEGORY_COLORS).map(([category, color]) => {
      const catResults = results.filter(r => r.category === category);
      const avgScore = catResults.length > 0
        ? Math.round(catResults.reduce((sum, r) => sum + (r.score / r.totalQuestions) * 100, 0) / catResults.length)
        : 0;
      return {
        category: category.charAt(0).toUpperCase() + category.slice(1),
        score: avgScore,
        count: catResults.length,
        fill: color,
      };
    }).filter(d => d.count > 0);
  }, [results]);

  // Weekly activity
  const weeklyActivity = useMemo(() => {
    const last7Days = subDays(new Date(), 7);
    return results.filter(r => isAfter(parseISO(r.completedAt), last7Days)).length;
  }, [results]);

  // Best streak calculation (consecutive days with activity)
  const currentStreak = useMemo(() => {
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = subDays(today, i);
      const dateStr = format(date, 'yyyy-MM-dd');
      const hasActivity = results.some(r => 
        format(parseISO(r.completedAt), 'yyyy-MM-dd') === dateStr
      );
      
      if (hasActivity) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    
    return streak;
  }, [results]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-amber-600';
    return 'text-destructive';
  };

  if (results.length === 0) {
    return (
      <>
        <Helmet>
          <title>Historique des Tests CLOE | Antony Addy</title>
          <meta name="description" content="Consultez votre historique de tests CLOE et suivez votre progression." />
        </Helmet>

        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link to="/exercices/cloe-preparation" className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Retour à la préparation CLOE
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h1 className="text-2xl font-bold mb-2">Aucun historique</h1>
              <p className="text-muted-foreground mb-6">
                Vous n'avez pas encore passé de tests CLOE. Commencez dès maintenant!
              </p>
              <Button asChild size="lg">
                <Link to="/exercices/cloe-preparation/practice-test">
                  <Play className="w-4 h-4 mr-2" />
                  Lancer un Test de Pratique
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Historique des Tests CLOE - Suivi de Progression | Antony Addy</title>
        <meta 
          name="description" 
          content="Consultez votre historique de tests CLOE, analysez vos performances par niveau et catégorie, et suivez votre progression dans le temps." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <Button asChild variant="ghost" className="-ml-2 mb-2">
                <Link to="/exercices/cloe-preparation" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Retour à la préparation CLOE
                </Link>
              </Button>
              <h1 className="text-3xl font-bold">Historique & Progression</h1>
              <p className="text-muted-foreground">
                Suivez vos performances et votre évolution au fil du temps
              </p>
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link to="/exercices/cloe-preparation/practice-test">
                  <Trophy className="w-4 h-4 mr-2" />
                  Nouveau Test
                </Link>
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Effacer tout l'historique?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action est irréversible. Toutes vos données de progression seront perdues.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={clearProgress} className="bg-destructive text-destructive-foreground">
                      Effacer
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">{stats.totalCompleted}</p>
                  <p className="text-xs text-muted-foreground">Exercices terminés</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                  <p className={cn("text-2xl font-bold", getScoreColor(stats.averageScore))}>
                    {stats.averageScore}%
                  </p>
                  <p className="text-xs text-muted-foreground">Score moyen</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                  <p className="text-2xl font-bold">{currentStreak}</p>
                  <p className="text-xs text-muted-foreground">Jours consécutifs</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <p className="text-2xl font-bold capitalize">{stats.masteryLevel}</p>
                  <p className="text-xs text-muted-foreground">Niveau de maîtrise</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Progress Over Time */}
            {progressOverTime.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Évolution des scores
                    </CardTitle>
                    <CardDescription>Vos performances sur les 30 derniers jours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={progressOverTime}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis 
                            dataKey="date" 
                            className="text-xs fill-muted-foreground"
                            tick={{ fontSize: 11 }}
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            className="text-xs fill-muted-foreground"
                            tick={{ fontSize: 11 }}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px'
                            }}
                            formatter={(value: number) => [`${value}%`, 'Score']}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            dot={{ fill: 'hsl(var(--primary))' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Score by Level */}
            {scoreByLevel.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Performance par niveau
                    </CardTitle>
                    <CardDescription>Score moyen par niveau CECRL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={scoreByLevel}>
                          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                          <XAxis 
                            dataKey="level" 
                            className="text-xs fill-muted-foreground"
                          />
                          <YAxis 
                            domain={[0, 100]} 
                            className="text-xs fill-muted-foreground"
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              border: '1px solid hsl(var(--border))',
                              borderRadius: '8px'
                            }}
                            formatter={(value: number, name: string, props: any) => [
                              `${value}% (${props.payload.count} exercices)`,
                              'Score'
                            ]}
                          />
                          <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                            {scoreByLevel.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Category Distribution */}
          {scoreByCategory.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Performance par catégorie</CardTitle>
                  <CardDescription>Vos forces et axes d'amélioration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    {scoreByCategory.map((cat, idx) => (
                      <div 
                        key={cat.category}
                        className="p-4 rounded-lg bg-muted/50 text-center"
                      >
                        <div 
                          className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: cat.fill }}
                        >
                          {cat.score}%
                        </div>
                        <p className="font-medium text-sm">{cat.category}</p>
                        <p className="text-xs text-muted-foreground">{cat.count} exercices</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Recent Results List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Résultats récents
                </CardTitle>
                <CardDescription>
                  Vos {Math.min(sortedResults.length, 20)} derniers exercices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sortedResults.slice(0, 20).map((result, idx) => {
                    const scorePercent = Math.round((result.score / result.totalQuestions) * 100);
                    const isPracticeTest = result.exerciseId.startsWith('practice-test-');
                    
                    return (
                      <motion.div
                        key={result.exerciseId + result.completedAt}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div 
                          className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0",
                            scorePercent >= 80 ? "bg-emerald-500" :
                            scorePercent >= 60 ? "bg-blue-500" :
                            scorePercent >= 40 ? "bg-amber-500" : "bg-destructive"
                          )}
                        >
                          {scorePercent}%
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {isPracticeTest && (
                              <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                            )}
                            <p className="font-medium truncate">{result.title}</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <Badge 
                              variant="outline" 
                              className="text-xs"
                              style={{ borderColor: LEVEL_COLORS[result.difficulty], color: LEVEL_COLORS[result.difficulty] }}
                            >
                              {result.difficulty}
                            </Badge>
                            <Badge variant="secondary" className="text-xs capitalize">
                              {result.category}
                            </Badge>
                            <span>•</span>
                            <span>{result.score}/{result.totalQuestions} correct</span>
                          </div>
                        </div>
                        
                        <div className="text-xs text-muted-foreground text-right shrink-0">
                          {format(parseISO(result.completedAt), 'dd MMM yyyy', { locale: fr })}
                          <br />
                          {format(parseISO(result.completedAt), 'HH:mm', { locale: fr })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                {sortedResults.length > 20 && (
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    + {sortedResults.length - 20} autres résultats
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Related Resources Section */}
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Continuez votre préparation avec d'autres ressources gratuites créées par un formateur FPA certifié.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/exercices" className="text-primary hover:underline">
                Exercices de grammaire
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/reading" className="text-primary hover:underline">
                Compréhension écrite
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/exercices/listening" className="text-primary hover:underline">
                Listening Lab
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/offres-de-formation" className="text-primary hover:underline">
                Formations personnalisées
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
