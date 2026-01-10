import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Headphones, 
  MessageSquare, 
  FileText, 
  ChevronRight,
  Target,
  Award,
  Clock,
  Filter,
  Info,
  CheckCircle,
  Trophy,
  Timer,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cloeExercises, cloeCategories, cloeLevels } from '@/data/cloeExercises';
import { CLOEProgressTracker } from '@/components/CLOEProgressTracker';
import { useCLOEProgress } from '@/hooks/useCLOEProgress';

const getCategoryIcon = (categoryId: string) => {
  switch (categoryId) {
    case 'vocabulary': return BookOpen;
    case 'grammar': return FileText;
    case 'expressions': return MessageSquare;
    case 'reading': return FileText;
    case 'listening': return Headphones;
    default: return BookOpen;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'A1': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'A2': return 'bg-teal-100 text-teal-700 border-teal-200';
    case 'B1': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'B2': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    case 'C1': return 'bg-purple-100 text-purple-700 border-purple-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const CLOEPreparation = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const { isCompleted, getScoreForExercise } = useCLOEProgress();

  const filteredExercises = selectedLevel 
    ? cloeExercises.filter(ex => ex.difficulty === selectedLevel)
    : cloeExercises;

  const getExercisesByCategory = (category: string) => {
    return filteredExercises.filter(ex => ex.category === category);
  };

  const totalExercises = cloeExercises.length;
  const totalQuestions = cloeExercises.reduce((acc, ex) => acc + ex.questions.length, 0);

  return (
    <>
      <Helmet>
        <title>Préparation CLOE Anglais - Exercices d'Entraînement | Antony Addy</title>
        <meta name="description" content="Préparez votre certification CLOE avec nos exercices gratuits : vocabulaire professionnel, grammaire, expressions, compréhension écrite et orale. Entraînement au format de l'examen." />
        <link rel="canonical" href="https://www.antonyaddy.com/exercices/cloe-preparation" />
      </Helmet>

      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-10 md:py-14">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                <Award className="h-3 w-3 mr-1" />
                Préparation au format CLOE
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-heading">
                Préparation Examen CLOE
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Exercices d'entraînement gratuits inspirés du format de la certification CLOE. 
                Travaillez les 5 compétences évaluées à l'examen.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-semibold">{totalExercises} exercices</span>
              </div>
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <FileText className="h-5 w-5 text-accent" />
                <span className="font-semibold">{totalQuestions}+ questions</span>
              </div>
              <div className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Format examen</span>
              </div>
            </div>

            {/* Practice Test CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/exercices/cloe-preparation/practice-test">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Trophy className="h-5 w-5" />
                  Lancer un Test de Pratique
                  <Timer className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link to="/exercices/cloe-preparation/history">
                <Button size="lg" variant="outline" className="gap-2">
                  <History className="h-5 w-5" />
                  Historique & Progression
                </Button>
              </Link>
            </div>
            <div className="text-center mt-4">
              <Link to="/exercices/cloe-preparation/overview" className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                <Info className="h-4 w-4" />
                En savoir plus sur la certification CLOE
              </Link>
            </div>
          </div>
        </section>

        {/* Level Filter */}
        <section className="py-6 bg-muted/30 border-y">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mr-2">Filtrer par niveau :</span>
              <Button 
                variant={selectedLevel === null ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedLevel(null)}
              >
                Tous
              </Button>
              {cloeLevels.map((level) => (
                <Button 
                  key={level.level}
                  variant={selectedLevel === level.level ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setSelectedLevel(level.level)}
                >
                  {level.level}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4">
            {/* Progress Tracker */}
            <div className="mb-8">
              <CLOEProgressTracker />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="vocabulary">Vocabulaire</TabsTrigger>
                <TabsTrigger value="grammar">Grammaire</TabsTrigger>
                <TabsTrigger value="expressions">Expressions</TabsTrigger>
                <TabsTrigger value="reading">Lecture</TabsTrigger>
                <TabsTrigger value="listening">Écoute</TabsTrigger>
              </TabsList>

              {/* All Exercises Tab */}
              <TabsContent value="all">
                {cloeCategories.map((category) => {
                  const exercises = getExercisesByCategory(category.id);
                  if (exercises.length === 0) return null;
                  
                  const Icon = getCategoryIcon(category.id);
                  
                  return (
                    <div key={category.id} className="mb-10">
                      <div className="flex items-center gap-3 mb-4 pb-2 border-b">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground font-heading">{category.name}</h2>
                          <p className="text-sm text-muted-foreground">{category.nameFr}</p>
                        </div>
                        <Badge variant="secondary" className="ml-auto">{exercises.length} exercices</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exercises.map((exercise) => {
                          const completed = isCompleted(exercise.id);
                          const score = getScoreForExercise(exercise.id);
                          
                          return (
                          <Card key={exercise.id} className={`hover:shadow-md transition-all hover:border-primary/30 group relative ${completed ? 'border-green-200 dark:border-green-800' : ''}`}>
                            {completed && (
                              <div className="absolute top-2 right-2 z-10">
                                <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400 text-xs font-medium px-2 py-0.5 rounded-full">
                                  <CheckCircle className="h-3 w-3" />
                                  {score}%
                                </div>
                              </div>
                            )}
                            <CardHeader className="pb-2">
                              <div className="flex items-start justify-between pr-14">
                                <CardTitle className="text-base font-heading group-hover:text-primary transition-colors">
                                  {exercise.title}
                                </CardTitle>
                                <Badge className={getDifficultyColor(exercise.difficulty)}>
                                  {exercise.difficulty}
                                </Badge>
                              </div>
                              <CardDescription className="text-sm">{exercise.titleFr}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {exercise.descriptionFr}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    {exercise.questions.length} questions
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    ~{exercise.estimatedTime} min
                                  </span>
                                </div>
                                <Link to={`/exercices/cloe/${exercise.id}`}>
                                  <Button size="sm" variant="ghost" className="gap-1 group-hover:bg-primary group-hover:text-primary-foreground">
                                    {completed ? 'Refaire' : 'Commencer'}
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </TabsContent>

              {/* Category-specific Tabs */}
              {cloeCategories.map((category) => {
                const exercises = getExercisesByCategory(category.id);
                const Icon = getCategoryIcon(category.id);
                
                return (
                  <TabsContent key={category.id} value={category.id}>
                    {exercises.length === 0 ? (
                      <div className="text-center py-12">
                        <Icon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Aucun exercice disponible</h3>
                        <p className="text-muted-foreground">
                          {selectedLevel 
                            ? `Aucun exercice de niveau ${selectedLevel} dans cette catégorie.`
                            : 'De nouveaux exercices seront bientôt ajoutés.'
                          }
                        </p>
                        {selectedLevel && (
                          <Button variant="outline" className="mt-4" onClick={() => setSelectedLevel(null)}>
                            Afficher tous les niveaux
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exercises.map((exercise) => (
                          <Card key={exercise.id} className="hover:shadow-md transition-all hover:border-primary/30 group">
                            <CardHeader className="pb-2">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-base font-heading group-hover:text-primary transition-colors">
                                  {exercise.title}
                                </CardTitle>
                                <Badge className={getDifficultyColor(exercise.difficulty)}>
                                  {exercise.difficulty}
                                </Badge>
                              </div>
                              <CardDescription className="text-sm">{exercise.titleFr}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {exercise.descriptionFr}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <FileText className="h-3 w-3" />
                                    {exercise.questions.length} questions
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    ~{exercise.estimatedTime} min
                                  </span>
                                </div>
                                <Link to={`/exercices/cloe/${exercise.id}`}>
                                  <Button size="sm" variant="ghost" className="gap-1 group-hover:bg-primary group-hover:text-primary-foreground">
                                    Commencer
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}
                  </TabsContent>
                );
              })}
            </Tabs>

            {/* Interactive Exercises Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-amber-500 text-white">Format examen</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-600">Gratuit</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">Exercices interactifs : Ordre des mots</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Entraînez-vous au format "banque de mots" et "phrases dans le désordre" du CLOE 
                    avec nos 10 exercices de glisser-déposer adaptés aux contextes professionnels.
                  </p>
                  <Link to="/exercices/drag-drop/1">
                    <Button className="gap-2">
                      <ChevronRight className="h-4 w-4" />
                      Essayer le format interactif
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <Link key={num} to={`/exercices/drag-drop/${num}`}>
                      <div className="w-11 h-11 rounded-lg bg-white dark:bg-gray-800 border-2 border-amber-300 dark:border-amber-600 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors text-sm">
                        {num}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="py-10 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4 font-body">
              Ces exercices gratuits vous permettent de vous familiariser avec le format CLOE. 
              Pour une préparation complète et personnalisée, je propose des formations individuelles adaptées à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offres-de-formation" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Découvrir les formations →
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Me contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CLOEPreparation;
