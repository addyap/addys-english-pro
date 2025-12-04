import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, Target, BookOpen, TrendingUp, 
  CheckCircle, Clock, RotateCcw, ArrowRight,
  GraduationCap, Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useExerciseProgress } from '@/hooks/useExerciseProgress';
import { grammarCategories } from '@/data/grammarExercises';
import { allExercisesData } from '@/data/allExercises';

const Dashboard = () => {
  const { getStats, clearProgress } = useExerciseProgress();
  const stats = getStats();

  const totalGrammarLessons = grammarCategories.length;
  const totalVocabularyExercises = allExercisesData.length;

  const grammarProgress = Math.round((stats.grammarCompleted / totalGrammarLessons) * 100);
  const vocabularyProgress = Math.round((stats.vocabularyCompleted / totalVocabularyExercises) * 100);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <SEOHead
        title="Mon Tableau de Bord | Antony Addy"
        description="Suivez votre progression dans les exercices d'anglais. Consultez vos scores et les leçons complétées."
        canonicalPath="/dashboard"
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Target className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading">
                  Mon Tableau de Bord
                </h1>
                <p className="text-primary-foreground/80 font-body">
                  Suivez votre progression
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-8 -mt-6">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{stats.totalCompleted}</p>
                  <p className="text-sm text-muted-foreground">Exercices complétés</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{stats.averageScore}%</p>
                  <p className="text-sm text-muted-foreground">Score moyen</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{stats.grammarCompleted}</p>
                  <p className="text-sm text-muted-foreground">Leçons grammaire</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{stats.vocabularyCompleted}</p>
                  <p className="text-sm text-muted-foreground">Exercices vocabulaire</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Progress Sections */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Grammar Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Progression Grammaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{stats.grammarCompleted} / {totalGrammarLessons} leçons</span>
                        <span className="font-semibold">{grammarProgress}%</span>
                      </div>
                      <Progress value={grammarProgress} className="h-3" />
                    </div>
                    <Link to="/exercices">
                      <Button variant="outline" className="w-full gap-2">
                        Continuer les leçons
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Vocabulary Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Progression Vocabulaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{stats.vocabularyCompleted} / {totalVocabularyExercises} exercices</span>
                        <span className="font-semibold">{vocabularyProgress}%</span>
                      </div>
                      <Progress value={vocabularyProgress} className="h-3" />
                    </div>
                    <Link to="/exercices">
                      <Button variant="outline" className="w-full gap-2">
                        Continuer les exercices
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Activité Récente
                </CardTitle>
                {stats.totalCompleted > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearProgress}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Réinitialiser
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {stats.recentResults.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Vous n'avez pas encore complété d'exercices
                    </p>
                    <Link to="/exercices">
                      <Button>Commencer maintenant</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {stats.recentResults.map((result, index) => {
                      const scorePercent = Math.round((result.score / result.totalQuestions) * 100);
                      return (
                        <div
                          key={`${result.exerciseId}-${result.exerciseType}-${index}`}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {result.exerciseType === 'grammar' ? (
                                <GraduationCap className="h-4 w-4 text-primary" />
                              ) : (
                                <Sparkles className="h-4 w-4 text-accent" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{result.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(result.completedAt)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getScoreColor(scorePercent)}>
                              {result.score}/{result.totalQuestions}
                            </Badge>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading">
              Continuez votre apprentissage
            </h2>
            <p className="text-muted-foreground mb-6 font-body">
              Explorez plus de {totalGrammarLessons} leçons de grammaire et {totalVocabularyExercises} exercices de vocabulaire
            </p>
            <Link to="/exercices">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Voir tous les exercices
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
