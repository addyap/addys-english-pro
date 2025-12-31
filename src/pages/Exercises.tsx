import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, GraduationCap, ChevronRight, Sparkles, Star, Zap, Lightbulb, Target, Clock, BarChart3, GripVertical, PenLine, Headphones, MessageCircle, ArrowRightLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import AnimatedCard from '../components/AnimatedCard';
import { allExercisesData as exercisesData, allExercisesList as exercisesList } from '../data/allExercises';
import { grammarCategories } from '../data/grammarExercises';
import { dragDropExercises } from '../data/dragDropExercises';
import { sentenceTransformExercises, errorCorrectionExercises, fillParagraphExercises } from '../data/writingExercises';
import { idiomExercises } from '../data/idiomExercises';
import { phrasalVerbExercises } from '../data/phrasalVerbExercises';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GrammarExplanation from '../components/GrammarExplanation';
import GrammarExercise from '../components/GrammarExercise';
import ExerciseSearch from '../components/ExerciseSearch';
import { useExerciseProgress } from '@/hooks/useExerciseProgress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { readingPassages } from '@/data/readingPassages';
import { listeningExercises } from '@/data/listeningExercises';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Exercise Card Component
const ExerciseCard = ({ exercise, isAvailable, index, isCompleted, bestScore }: { 
  exercise: { id: number; title: string }; 
  isAvailable: boolean; 
  index: number;
  isCompleted?: boolean;
  bestScore?: { score: number; total: number };
}) => {
  if (isAvailable) {
    return (
      <AnimatedCard
        href={`/exercices/${exercise.id}`}
        className="bg-card hover:bg-accent/5 border border-border p-3 hover:border-primary hover:shadow-md transition-all group"
        delay={index * 0.01}
      >
        <div className="flex items-center gap-3">
          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors ${
            isCompleted ? 'bg-green-100' : 'bg-primary/10'
          }`}>
            {isCompleted ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <span className="text-xs font-bold text-primary font-heading">
                {exercise.id}
              </span>
            )}
          </div>
          <h3 className="text-sm font-medium text-foreground leading-tight font-body flex-1 truncate">
            {exercise.title}
          </h3>
          {bestScore && (
            <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
              {bestScore.score}/{bestScore.total}
            </span>
          )}
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
      </AnimatedCard>
    );
  }

  return (
    <div className="bg-muted/50 border border-border/50 p-3 rounded-lg opacity-50 cursor-not-allowed">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          <span className="text-xs font-bold text-muted-foreground font-heading">
            {exercise.id}
          </span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground leading-tight font-body flex-1 truncate">
          {exercise.title}
        </h3>
        <Lock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </div>
    </div>
  );
};

// Define grammar category groups by priority
const HIGH_PRIORITY_IDS = [
  'will-vs-going-to',
  'much-many-lot', 
  'since-for',
  'been-gone',
  'few-little'
];

const MEDIUM_PRIORITY_IDS = [
  'past-perfect-continuous',
  'possessives',
  'adverbs-frequency',
  'causative-have-get',
  'adjective-order',
  'determiners'
];

const LOWER_PRIORITY_IDS = [
  'had-better-would-rather',
  'although-despite-however',
  'still-yet-already',
  'unless-as-long-as'
];

const Exercises = () => {
  useScrollTracking('exercises');
  useTimeTracking('exercises');

  const { getResult, getStats } = useExerciseProgress();
  const stats = getStats();
  const [filteredExercises, setFilteredExercises] = useState(exercisesList);

  const handleFilteredChange = useCallback((filtered: typeof exercisesList) => {
    setFilteredExercises(filtered);
  }, []);

  const availableExercises = new Set(exercisesData.map(ex => ex.id));
  
  // Group grammar categories
  const highPriorityCategories = grammarCategories.filter(c => HIGH_PRIORITY_IDS.includes(c.id));
  const mediumPriorityCategories = grammarCategories.filter(c => MEDIUM_PRIORITY_IDS.includes(c.id));
  const lowerPriorityCategories = grammarCategories.filter(c => LOWER_PRIORITY_IDS.includes(c.id));
  const coreCategories = grammarCategories.filter(
    c => !HIGH_PRIORITY_IDS.includes(c.id) && 
         !MEDIUM_PRIORITY_IDS.includes(c.id) && 
         !LOWER_PRIORITY_IDS.includes(c.id)
  );

  const renderGrammarSection = (
    categories: typeof grammarCategories, 
    title: string, 
    subtitle: string,
    icon: React.ReactNode,
    borderColor: string,
    badgeColor: string
  ) => (
    <div className="space-y-4">
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className={`h-10 w-1 ${borderColor} rounded-full`} />
        <div className="flex items-center gap-2">
          {icon}
          <div>
            <h3 className="text-lg font-semibold text-foreground font-heading">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <span className={`text-xs ${badgeColor} px-2 py-1 rounded-full ml-auto`}>
          {categories.length} leçons
        </span>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {categories.map((category) => (
          <AccordionItem 
            key={category.id} 
            value={category.id}
            className="border rounded-lg px-4 bg-card"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-heading">{category.titleEn}</h3>
                  <p className="text-sm text-muted-foreground font-body">{category.titleFr}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <GrammarExplanation
                titleEn={category.titleEn}
                titleFr={category.titleFr}
                explanationEn={category.explanationEn}
                explanationFr={category.explanationFr}
                examples={category.examples}
              />
              
              {category.exercises.map((exercise) => (
                <GrammarExercise key={exercise.id} exercise={exercise} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <>
      <SEOHead 
        title="150+ Exercices Anglais Gratuits | Antony Addy"
        description="Exercices interactifs gratuits : grammaire, vocabulaire, lecture, écoute. Créés par un formateur professionnel certifié."
        canonicalUrl="https://www.antonyaddy.com/exercices"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Exercices d'anglais interactifs par Antony Addy"
        keywords={["exercices anglais gratuits", "grammaire anglaise", "vocabulaire anglais", "quiz anglais"]}
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: "150 Exercices d'Anglais",
          description: "Collection de 150 exercices d'anglais couvrant la grammaire, le vocabulaire et les pièges courants",
          author: {
            "@type": "Person",
            name: "Antony Addy",
            jobTitle: "Formateur Professionnel d'Adultes"
          },
          educationalLevel: "Beginner to Advanced",
          inLanguage: "fr",
          learningResourceType: "Exercise",
          isAccessibleForFree: true
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              Exercices d'Anglais
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-body">
              Maîtrisez la grammaire anglaise avec des explications claires et des exercices pratiques
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm flex-wrap">
              <span className="bg-white/20 px-3 py-1 rounded-full">{grammarCategories.length} Grammar Lessons</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">{exercisesData.length} Vocabulary Exercises</span>
              {stats.totalCompleted > 0 && (
                <span className="bg-green-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  {stats.totalCompleted} complétés
                </span>
              )}
            </div>
            {stats.totalCompleted > 0 && (
              <Link to="/dashboard">
                <Button variant="secondary" className="mt-6 gap-2">
                  <Target className="h-4 w-4" />
                  Voir mon tableau de bord
                </Button>
              </Link>
            )}
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Tabs defaultValue="grammar" className="w-full">
              <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-4 sm:grid-cols-8 mb-8">
                <TabsTrigger value="grammar" className="gap-1 text-xs sm:text-sm">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Grammar</span>
                </TabsTrigger>
                <TabsTrigger value="vocabulary" className="gap-1 text-xs sm:text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden sm:inline">Vocabulary</span>
                </TabsTrigger>
                <TabsTrigger value="idioms" className="gap-1 text-xs sm:text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">Idioms</span>
                </TabsTrigger>
                <TabsTrigger value="phrasal-verbs" className="gap-1 text-xs sm:text-sm">
                  <ArrowRightLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Phrasal</span>
                </TabsTrigger>
                <TabsTrigger value="reading" className="gap-1 text-xs sm:text-sm">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Reading</span>
                </TabsTrigger>
                <TabsTrigger value="listening" className="gap-1 text-xs sm:text-sm">
                  <Headphones className="h-4 w-4" />
                  <span className="hidden sm:inline">Listening</span>
                </TabsTrigger>
                <TabsTrigger value="dragdrop" className="gap-1 text-xs sm:text-sm">
                  <GripVertical className="h-4 w-4" />
                  <span className="hidden sm:inline">Drag & Drop</span>
                </TabsTrigger>
                <TabsTrigger value="writing" className="gap-1 text-xs sm:text-sm">
                  <PenLine className="h-4 w-4" />
                  <span className="hidden sm:inline">Writing</span>
                </TabsTrigger>
              </TabsList>

              {/* Grammar Tab */}
              <TabsContent value="grammar" className="space-y-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    English Tenses & Grammar
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {grammarCategories.length} lessons with clear explanations and toggle for French translation
                  </p>
                </div>

                {/* High Priority - New */}
                {highPriorityCategories.length > 0 && renderGrammarSection(
                  highPriorityCategories,
                  "High Priority",
                  "Most common mistakes for French speakers",
                  <Star className="h-5 w-5 text-amber-500" />,
                  "bg-amber-500",
                  "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                )}

                {/* Medium Priority - New */}
                {mediumPriorityCategories.length > 0 && renderGrammarSection(
                  mediumPriorityCategories,
                  "Medium Priority", 
                  "Important grammar points",
                  <Zap className="h-5 w-5 text-blue-500" />,
                  "bg-blue-500",
                  "bg-blue-500/10 text-blue-700 dark:text-blue-400"
                )}

                {/* Lower Priority */}
                {lowerPriorityCategories.length > 0 && renderGrammarSection(
                  lowerPriorityCategories,
                  "Additional Topics", 
                  "Useful expressions and connectors",
                  <Lightbulb className="h-5 w-5 text-green-500" />,
                  "bg-green-500",
                  "bg-green-500/10 text-green-700 dark:text-green-400"
                )}

                {/* Core Grammar */}
                {renderGrammarSection(
                  coreCategories,
                  "Core Grammar",
                  "Essential tenses and structures",
                  <GraduationCap className="h-5 w-5 text-primary" />,
                  "bg-primary",
                  "bg-primary/10 text-primary"
                )}
              </TabsContent>

              {/* Vocabulary Tab */}
              <TabsContent value="vocabulary" className="space-y-6">
                {/* Search & Filter */}
                <ExerciseSearch
                  exercises={exercisesList}
                  onFilteredChange={handleFilteredChange}
                />

                {/* Progress Notice */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center border border-primary/20">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-3xl font-bold text-primary font-heading">{exercisesData.length}</span>
                    <span className="text-lg text-muted-foreground font-body">exercices disponibles</span>
                    {stats.vocabularyCompleted > 0 && (
                      <span className="text-sm text-green-600 ml-2">({stats.vocabularyCompleted} complétés)</span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-body text-sm">
                    De nouveaux exercices sont ajoutés régulièrement
                  </p>
                </div>

                {/* Filtered Results or Category Sections */}
                {filteredExercises.length !== exercisesList.length ? (
                  // Show filtered results
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {filteredExercises.map((exercise, index) => {
                      const isAvailable = availableExercises.has(exercise.id);
                      const result = getResult(exercise.id.toString(), 'vocabulary');
                      return (
                        <ExerciseCard 
                          key={exercise.id} 
                          exercise={exercise} 
                          isAvailable={isAvailable} 
                          index={index}
                          isCompleted={!!result}
                          bestScore={result ? { score: result.score, total: result.totalQuestions } : undefined}
                        />
                      );
                    })}
                  </div>
                ) : (
                  // Show categorized sections
                  <div className="space-y-8">
                    {/* Section 1-50: Common Mistakes */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-primary rounded-full" />
                        <h3 className="text-lg font-semibold text-foreground font-heading">Erreurs courantes (1-50)</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">50 exercices</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {exercisesList.slice(0, 50).map((exercise, index) => {
                          const isAvailable = availableExercises.has(exercise.id);
                          const result = getResult(exercise.id.toString(), 'vocabulary');
                          return (
                            <ExerciseCard 
                              key={exercise.id} 
                              exercise={exercise} 
                              isAvailable={isAvailable} 
                              index={index}
                              isCompleted={!!result}
                              bestScore={result ? { score: result.score, total: result.totalQuestions } : undefined}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Section 51-100: Advanced Mistakes */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-accent rounded-full" />
                        <h3 className="text-lg font-semibold text-foreground font-heading">Pièges avancés (51-100)</h3>
                        <span className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">50 exercices</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {exercisesList.slice(50, 100).map((exercise, index) => {
                          const isAvailable = availableExercises.has(exercise.id);
                          const result = getResult(exercise.id.toString(), 'vocabulary');
                          return (
                            <ExerciseCard 
                              key={exercise.id} 
                              exercise={exercise} 
                              isAvailable={isAvailable} 
                              index={index}
                              isCompleted={!!result}
                              bestScore={result ? { score: result.score, total: result.totalQuestions } : undefined}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Section 101-150: Confusing Word Pairs */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-8 w-1 bg-green-500 rounded-full" />
                        <h3 className="text-lg font-semibold text-foreground font-heading">Mots confus (101-150)</h3>
                        <span className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">50 exercices</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {exercisesList.slice(100, 150).map((exercise, index) => {
                          const isAvailable = availableExercises.has(exercise.id);
                          const result = getResult(exercise.id.toString(), 'vocabulary');
                          return (
                            <ExerciseCard 
                              key={exercise.id} 
                              exercise={exercise} 
                              isAvailable={isAvailable} 
                              index={index}
                              isCompleted={!!result}
                              bestScore={result ? { score: result.score, total: result.totalQuestions } : undefined}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Reading Tab */}
              <TabsContent value="reading" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Reading Comprehension
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {readingPassages.length} texts with comprehension questions - 3 difficulty levels
                  </p>
                </div>

                {/* Difficulty Level Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <Card className="text-center border-green-200 bg-green-50/50">
                    <CardContent className="pt-4 pb-3">
                      <p className="text-2xl font-bold text-green-600">
                        {readingPassages.filter(p => p.difficulty === 'easy').length}
                      </p>
                      <p className="text-xs text-green-700">Facile</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-yellow-200 bg-yellow-50/50">
                    <CardContent className="pt-4 pb-3">
                      <p className="text-2xl font-bold text-yellow-600">
                        {readingPassages.filter(p => p.difficulty === 'medium').length}
                      </p>
                      <p className="text-xs text-yellow-700">Intermédiaire</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-red-200 bg-red-50/50">
                    <CardContent className="pt-4 pb-3">
                      <p className="text-2xl font-bold text-red-600">
                        {readingPassages.filter(p => p.difficulty === 'hard').length}
                      </p>
                      <p className="text-xs text-red-700">Avancé</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Reading Passages Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {readingPassages.map((passage) => (
                    <Card key={passage.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{passage.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{passage.titleFr}</p>
                          </div>
                          <Badge className={
                            passage.difficulty === 'easy' ? 'bg-green-100 text-green-700 border-green-200' :
                            passage.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                            'bg-red-100 text-red-700 border-red-200'
                          }>
                            {passage.difficulty === 'easy' ? 'Facile' : 
                             passage.difficulty === 'medium' ? 'Inter.' : 'Avancé'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {passage.readingTime} min
                          </span>
                          <span className="flex items-center gap-1">
                            <BarChart3 className="h-3 w-3" />
                            {passage.questions.length} questions
                          </span>
                        </div>
                        <Link to={`/reading/${passage.id}`}>
                          <Button size="sm" className="w-full gap-2">
                            Lire et pratiquer
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Link to="/reading">
                    <Button variant="outline" className="gap-2">
                      <BookOpen className="h-4 w-4" />
                      Voir tous les textes
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* Listening Tab */}
              <TabsContent value="listening" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Listening Lab
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {listeningExercises.length} exercices d'écoute avec traductions interactives
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {listeningExercises.map((exercise) => (
                    <Card key={exercise.slug} className="hover:shadow-md transition-shadow group">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                            <Headphones className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base group-hover:text-primary transition-colors">
                              {exercise.title}
                            </CardTitle>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">{exercise.level}</Badge>
                              <Badge variant="outline" className="text-xs">{exercise.accent}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {Object.keys(exercise.glossary).length} mots avec traductions
                        </p>
                        <Link to={`/exercices/listening/${exercise.slug}`}>
                          <Button size="sm" className="w-full gap-2">
                            Écouter
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Link to="/exercices/listening">
                    <Button variant="outline" className="gap-2">
                      <Headphones className="h-4 w-4" />
                      Voir le Listening Lab
                    </Button>
                  </Link>
                </div>
              </TabsContent>

              {/* Drag & Drop Tab */}
              <TabsContent value="dragdrop" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Ordre des mots - Drag & Drop
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {dragDropExercises.length} exercices interactifs - Glissez les mots pour former des phrases correctes
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {dragDropExercises.map((exercise) => (
                    <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                            <GripVertical className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base group-hover:text-primary transition-colors">
                              {exercise.title}
                            </CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                              {exercise.sentences.length} phrases à reconstruire
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {exercise.description}
                        </p>
                        <Link to={`/exercices/drag-drop/${exercise.id}`}>
                          <Button size="sm" className="w-full gap-2">
                            Commencer
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Writing Tab */}
              <TabsContent value="writing" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Writing Practice
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {sentenceTransformExercises.length + errorCorrectionExercises.length + fillParagraphExercises.length} exercices pour améliorer votre expression écrite
                  </p>
                </div>

                {/* Sentence Transformation */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-blue-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Transformation de phrases</h3>
                    <span className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full">{sentenceTransformExercises.length} exercices</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {sentenceTransformExercises.map((exercise) => (
                      <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {exercise.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                          <Link to={`/exercices/writing/transform/${exercise.id}`}>
                            <Button size="sm" className="w-full gap-2">
                              Commencer <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Error Correction */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-red-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Correction d'erreurs</h3>
                    <span className="text-xs bg-red-500/10 text-red-700 dark:text-red-400 px-2 py-1 rounded-full">{errorCorrectionExercises.length} exercices</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {errorCorrectionExercises.map((exercise) => (
                      <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {exercise.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                          <Link to={`/exercices/writing/error/${exercise.id}`}>
                            <Button size="sm" className="w-full gap-2">
                              Commencer <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Fill Paragraphs */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-green-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Textes à trous</h3>
                    <span className="text-xs bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">{fillParagraphExercises.length} exercices</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {fillParagraphExercises.map((exercise) => (
                      <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {exercise.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                          <Link to={`/exercices/writing/fill/${exercise.id}`}>
                            <Button size="sm" className="w-full gap-2">
                              Commencer <ChevronRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Idioms Tab */}
              <TabsContent value="idioms" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Idioms & Expressions
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {idiomExercises.length} lessons with common English idioms and their meanings
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {idiomExercises.map((exercise) => (
                    <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-accent/10 text-accent rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {exercise.id}
                          </div>
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {exercise.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                          <Badge variant="outline">{exercise.idioms.length} expressions</Badge>
                          <Badge variant="outline">{exercise.questions.length} questions</Badge>
                        </div>
                        <Link to={`/exercices/idioms/${exercise.id}`}>
                          <Button size="sm" className="w-full gap-2">
                            Commencer <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Phrasal Verbs Tab */}
              <TabsContent value="phrasal-verbs" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 font-heading">
                    Phrasal Verbs
                  </h2>
                  <p className="text-muted-foreground font-body">
                    {phrasalVerbExercises.reduce((acc, ex) => acc + ex.phrasalVerbs.length, 0)} phrasal verbs organized by theme with interactive quizzes
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phrasalVerbExercises.map((exercise) => (
                    <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full w-8 h-8 flex items-center justify-center">
                            <ArrowRightLeft className="h-4 w-4" />
                          </div>
                          <div>
                            <CardTitle className="text-base group-hover:text-primary transition-colors">
                              {exercise.title}
                            </CardTitle>
                            <p className="text-xs text-muted-foreground">{exercise.titleFr}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                          <Badge variant="outline">{exercise.phrasalVerbs.length} verbs</Badge>
                          <Badge variant="outline">{exercise.questions.length} questions</Badge>
                        </div>
                        <Link to={`/exercices/phrasal-verbs/${exercise.id}`}>
                          <Button size="sm" className="w-full gap-2">
                            Commencer <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-body">
              Ces exercices sont conçus pour compléter mes formations. Pour un apprentissage structuré et adapté à vos besoins, contactez-moi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors font-body"
              >
                Me contacter
              </Link>
              <Link
                to="/offres-de-formation"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors font-body"
              >
                Voir les formations
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Exercises;
