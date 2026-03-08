import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CheckCircle, GraduationCap, ChevronRight, Sparkles, Star, Zap, Lightbulb, Target, Clock, BarChart3, GripVertical, PenLine, Headphones, MessageCircle, ArrowRightLeft, Link2, Volume2, Languages, GitCompare, List, Mic, AlertTriangle, Puzzle, CreditCard, Keyboard, BookMarked, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ExternalLink } from 'lucide-react';
import { useScrollTracking, useTimeTracking } from '@/hooks/useScrollTracking';
import AnimatedCard from '../components/AnimatedCard';
import { allExercisesData as exercisesData, allExercisesList as exercisesList } from '../data/allExercises';
import { grammarCategories } from '../data/grammarExercises';
import { dragDropExercises } from '../data/dragDropExercises';
import { sentenceTransformExercises, errorCorrectionExercises, fillParagraphExercises } from '../data/writingExercises';
import { idiomExercises } from '../data/idiomExercises';
import { phrasalVerbExercises } from '../data/phrasalVerbExercises';
import { collocationExercises } from '../data/collocationExercises';
import { dictationExercises } from '../data/dictationExercises';
import { wordFormationExercises } from '../data/wordFormationExercises';
import { synonymAntonymExercises } from '../data/synonymAntonymExercises';
import { conditionalExercises } from '../data/conditionalExercises';
import { pronunciationExercises } from '../data/pronunciationExercises';
import { paragraphOrderingExercises } from '../data/paragraphOrderingExercises';
import { translationExercises } from '../data/translationExercises';
import { errorCorrectionExercises as errorCorrectionData } from '../data/errorCorrectionExercises';
import { sentenceBuildingExercises } from '../data/sentenceBuildingExercises';
import { flashcardSets } from '../data/flashcardExercises';
import { fillInTypingExercises } from '../data/fillInTypingExercises';
import { crosswordExercises } from '../data/crosswordExercises';
import { matchingExercises } from '../data/matchingExercises';
import { dialogueExercises } from '../data/dialogueExercises';
import { prepositionExercises } from '../data/prepositionExercises';
import { interactiveStories } from '../data/interactiveStories';
import { cloeExercises } from '../data/cloeExercises';
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

// Category Card Component for sub-navigation
const CategoryCard = ({ 
  icon: Icon, 
  title, 
  count, 
  colorClass,
  onClick 
}: { 
  icon: React.ElementType; 
  title: string; 
  count: number; 
  colorClass: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 ${colorClass}`}
  >
    <div className="flex items-center gap-3 mb-2">
      <Icon className="h-5 w-5" />
      <span className="font-semibold font-heading">{title}</span>
    </div>
    <p className="text-sm opacity-80">{count} exercices</p>
  </button>
);

const Exercises = () => {
  useScrollTracking('exercises');
  useTimeTracking('exercises');

  const { getResult, getStats } = useExerciseProgress();
  const stats = getStats();
  const [filteredExercises, setFilteredExercises] = useState(exercisesList);
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

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
              
              {/* Link to dedicated lesson page */}
              <Link 
                to={`/exercices/grammar/${category.id}`}
                className="mt-4 inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Voir la leçon complète →
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  // Render content for each sub-category
  const renderSubContent = (subTab: string) => {
    switch (subTab) {
      // GRAMMAR SUB-TABS
      case 'tenses':
        return (
          <div className="space-y-10">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1 mb-4">
              ← Retour aux catégories
            </button>
            {highPriorityCategories.length > 0 && renderGrammarSection(
              highPriorityCategories,
              "High Priority",
              "Most common mistakes for French speakers",
              <Star className="h-5 w-5 text-amber-500" />,
              "bg-amber-500",
              "bg-amber-500/10 text-amber-700 dark:text-amber-400"
            )}
            {mediumPriorityCategories.length > 0 && renderGrammarSection(
              mediumPriorityCategories,
              "Medium Priority", 
              "Important grammar points",
              <Zap className="h-5 w-5 text-blue-500" />,
              "bg-blue-500",
              "bg-blue-500/10 text-blue-700 dark:text-blue-400"
            )}
            {lowerPriorityCategories.length > 0 && renderGrammarSection(
              lowerPriorityCategories,
              "Additional Topics", 
              "Useful expressions and connectors",
              <Lightbulb className="h-5 w-5 text-green-500" />,
              "bg-green-500",
              "bg-green-500/10 text-green-700 dark:text-green-400"
            )}
            {renderGrammarSection(
              coreCategories,
              "Core Grammar",
              "Essential tenses and structures",
              <GraduationCap className="h-5 w-5 text-primary" />,
              "bg-primary",
              "bg-primary/10 text-primary"
            )}
          </div>
        );
      
      case 'conditionals':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Conditional Sentences</h2>
              <p className="text-muted-foreground">{conditionalExercises.length} exercises on if-clauses</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditionalExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.conditionalType}</Badge>
                    <Link to={`/exercices/conditionals/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'error-correction':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Error Correction</h2>
              <p className="text-muted-foreground">{errorCorrectionData.length} exercises - Find and fix grammatical mistakes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {errorCorrectionData.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="outline">{ex.theme}</Badge>
                      <Badge variant={ex.difficulty === 'easy' ? 'secondary' : ex.difficulty === 'hard' ? 'destructive' : 'default'}>{ex.difficulty}</Badge>
                    </div>
                    <Link to={`/exercices/error-correction/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'sentence-building':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Sentence Building</h2>
              <p className="text-muted-foreground">{sentenceBuildingExercises.length} exercises - Build sentences from scrambled words</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sentenceBuildingExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Link to={`/exercices/sentence-building/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      // VOCABULARY SUB-TABS
      case 'vocabulary-quiz':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <ExerciseSearch exercises={exercisesList} onFilteredChange={handleFilteredChange} />
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center border border-primary/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-3xl font-bold text-primary font-heading">{exercisesData.length}</span>
                <span className="text-lg text-muted-foreground font-body">exercices disponibles</span>
              </div>
            </div>
            {filteredExercises.length !== exercisesList.length ? (
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
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-primary rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Erreurs courantes (1-50)</h3>
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
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-accent rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Pièges avancés (51-100)</h3>
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
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 bg-green-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-foreground font-heading">Mots confus (101-150)</h3>
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
          </div>
        );

      case 'idioms':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Idioms & Expressions</h2>
              <p className="text-muted-foreground">{idiomExercises.length} lessons with common English idioms</p>
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
                    </div>
                    <Link to={`/exercices/idioms/${exercise.id}`}>
                      <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'phrasal-verbs':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Phrasal Verbs</h2>
              <p className="text-muted-foreground">{phrasalVerbExercises.reduce((acc, ex) => acc + ex.phrasalVerbs.length, 0)} phrasal verbs by theme</p>
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
                        <CardTitle className="text-base group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{exercise.titleFr}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Badge variant="outline">{exercise.phrasalVerbs.length} verbs</Badge>
                    </div>
                    <Link to={`/exercices/phrasal-verbs/${exercise.id}`}>
                      <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'collocations':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Collocations</h2>
              <p className="text-muted-foreground">{collocationExercises.reduce((acc, ex) => acc + ex.collocations.length, 0)} common word combinations</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {collocationExercises.map((exercise) => (
                <Card key={exercise.id} className="hover:shadow-md transition-shadow group">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full w-8 h-8 flex items-center justify-center">
                        <Link2 className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                        <p className="text-xs text-muted-foreground">{exercise.titleFr}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Badge variant="outline">{exercise.collocations.length} collocations</Badge>
                    </div>
                    <Link to={`/exercices/collocations/${exercise.id}`}>
                      <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'synonyms':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Synonyms & Antonyms</h2>
              <p className="text-muted-foreground">{synonymAntonymExercises.length} vocabulary exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {synonymAntonymExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.type}</Badge>
                    <Link to={`/exercices/synonyms-antonyms/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'word-formation':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Word Formation</h2>
              <p className="text-muted-foreground">{wordFormationExercises.length} exercises on suffixes and prefixes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wordFormationExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Link to={`/exercices/word-formation/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'flashcards':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Flashcards</h2>
              <p className="text-muted-foreground">{flashcardSets.length} sets for spaced repetition learning</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {flashcardSets.map((set) => (
                <Card key={set.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{set.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{set.description}</p>
                    <Badge variant="outline" className="mb-3">{set.cards.length} cards</Badge>
                    <Link to={`/exercices/flashcards/${set.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      // LISTENING & READING SUB-TABS
      case 'reading':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Reading Comprehension</h2>
              <p className="text-muted-foreground">{readingPassages.length} texts with comprehension questions</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="text-center border-green-200 bg-green-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-green-600">{readingPassages.filter(p => p.difficulty === 'easy').length}</p>
                  <p className="text-xs text-green-700">Facile</p>
                </CardContent>
              </Card>
              <Card className="text-center border-yellow-200 bg-yellow-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-yellow-600">{readingPassages.filter(p => p.difficulty === 'medium').length}</p>
                  <p className="text-xs text-yellow-700">Intermédiaire</p>
                </CardContent>
              </Card>
              <Card className="text-center border-red-200 bg-red-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-red-600">{readingPassages.filter(p => p.difficulty === 'hard').length}</p>
                  <p className="text-xs text-red-700">Avancé</p>
                </CardContent>
              </Card>
            </div>
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
                        {passage.difficulty === 'easy' ? 'Facile' : passage.difficulty === 'medium' ? 'Inter.' : 'Avancé'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{passage.readingTime} min</span>
                      <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" />{passage.questions.length} questions</span>
                    </div>
                    <Link to={`/reading/${passage.id}`}>
                      <Button size="sm" className="w-full gap-2">Lire <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'listening':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Listening Lab</h2>
              <p className="text-muted-foreground">{listeningExercises.length} exercices d'écoute avec traductions</p>
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
                        <CardTitle className="text-base group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{exercise.level}</Badge>
                          <Badge variant="outline" className="text-xs">{exercise.accent}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/exercices/listening/${exercise.slug}`}>
                      <Button size="sm" className="w-full gap-2">Écouter <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'dictation':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Dictation Exercises</h2>
              <p className="text-muted-foreground">{dictationExercises.length} exercises to improve listening and spelling</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dictationExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.level}</Badge>
                    <Link to={`/exercices/dictation/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'pronunciation':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Pronunciation (Minimal Pairs)</h2>
              <p className="text-muted-foreground">{pronunciationExercises.length} exercises on sound discrimination</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pronunciationExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Link to={`/exercices/pronunciation/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'interactive-stories':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Interactive Stories</h2>
              <p className="text-muted-foreground">{interactiveStories.length} choose-your-own-adventure stories</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <Card className="text-center border-green-200 bg-green-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-green-600">{interactiveStories.filter(s => s.difficulty === 'easy').length}</p>
                  <p className="text-xs text-green-700">Facile (A1-A2)</p>
                </CardContent>
              </Card>
              <Card className="text-center border-yellow-200 bg-yellow-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-yellow-600">{interactiveStories.filter(s => s.difficulty === 'medium').length}</p>
                  <p className="text-xs text-yellow-700">Intermédiaire (B1-B2)</p>
                </CardContent>
              </Card>
              <Card className="text-center border-red-200 bg-red-50/50">
                <CardContent className="pt-4 pb-3">
                  <p className="text-2xl font-bold text-red-600">{interactiveStories.filter(s => s.difficulty === 'hard').length}</p>
                  <p className="text-xs text-red-700">Avancé (C1)</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {interactiveStories.map((story) => (
                <Card key={story.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{story.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{story.titleFr}</p>
                      </div>
                      <Badge className={
                        story.difficulty === 'easy' ? 'bg-green-100 text-green-700 border-green-200' :
                        story.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
                        'bg-red-100 text-red-700 border-red-200'
                      }>
                        {story.difficulty === 'easy' ? 'Facile' : story.difficulty === 'medium' ? 'Inter.' : 'Avancé'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{story.descriptionFr}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{story.estimatedTime} min</span>
                      <span className="flex items-center gap-1"><Target className="h-3 w-3" />{story.totalEndings} fins possibles</span>
                      <Badge variant="outline" className="text-xs">{story.themeFr}</Badge>
                    </div>
                    <Link to={`/story/${story.id}`}>
                      <Button size="sm" className="w-full gap-2">Commencer l'aventure <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      // WRITING & PRACTICE SUB-TABS
      case 'writing':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Writing Practice</h2>
              <p className="text-muted-foreground">{sentenceTransformExercises.length + errorCorrectionExercises.length + fillParagraphExercises.length} exercises</p>
            </div>
            
            {/* Sentence Transformation */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1 bg-blue-500 rounded-full" />
                <h3 className="text-lg font-semibold text-foreground font-heading">Sentence Transformation</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {sentenceTransformExercises.map((exercise) => (
                  <Card key={exercise.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2"><CardTitle className="text-base">{exercise.title}</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                      <Link to={`/exercices/writing/transform/${exercise.id}`}>
                        <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
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
                <h3 className="text-lg font-semibold text-foreground font-heading">Error Correction</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {errorCorrectionExercises.map((exercise) => (
                  <Card key={exercise.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2"><CardTitle className="text-base">{exercise.title}</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                      <Link to={`/exercices/writing/error/${exercise.id}`}>
                        <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fill Paragraph */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1 bg-green-500 rounded-full" />
                <h3 className="text-lg font-semibold text-foreground font-heading">Fill the Paragraph</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {fillParagraphExercises.map((exercise) => (
                  <Card key={exercise.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2"><CardTitle className="text-base">{exercise.title}</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                      <Link to={`/exercices/writing/fill/${exercise.id}`}>
                        <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'translation':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Translation Exercises</h2>
              <p className="text-muted-foreground">{translationExercises.length} FR↔EN translation practice</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {translationExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <div className="flex gap-2 mb-3"><Badge variant="outline">{ex.level}</Badge><Badge variant="secondary">{ex.direction}</Badge></div>
                    <Link to={`/exercices/translation/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'drag-drop':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Drag & Drop</h2>
              <p className="text-muted-foreground">{dragDropExercises.length} interactive word ordering exercises</p>
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
                        <CardTitle className="text-base group-hover:text-primary transition-colors">{exercise.title}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-1">{exercise.sentences.length} phrases</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/exercices/drag-drop/${exercise.id}`}>
                      <Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'paragraph-order':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Paragraph Ordering</h2>
              <p className="text-muted-foreground">{paragraphOrderingExercises.length} logic and coherence exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paragraphOrderingExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.level}</Badge>
                    <Link to={`/exercices/paragraph-ordering/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'fill-typing':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Fill-in Typing</h2>
              <p className="text-muted-foreground">{fillInTypingExercises.length} typing exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fillInTypingExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Link to={`/exercices/fill-in-typing/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'crossword':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Crossword Puzzles</h2>
              <p className="text-muted-foreground">{crosswordExercises.length} vocabulary puzzles</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {crosswordExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.difficulty}</Badge>
                    <Link to={`/exercices/crossword/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'matching':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Matching Exercises</h2>
              <p className="text-muted-foreground">{matchingExercises.length} pair matching exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchingExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.pairs.length} pairs</Badge>
                    <Link to={`/exercices/matching/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'dialogue':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Dialogue Completion</h2>
              <p className="text-muted-foreground">{dialogueExercises.length} conversation exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dialogueExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.difficulty}</Badge>
                    <Link to={`/exercices/dialogue/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'prepositions':
        return (
          <div className="space-y-6">
            <button onClick={() => setActiveSubTab(null)} className="text-primary hover:underline flex items-center gap-1">
              ← Retour aux catégories
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Preposition Practice</h2>
              <p className="text-muted-foreground">{prepositionExercises.length} preposition exercises</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {prepositionExercises.map((ex) => (
                <Card key={ex.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2"><CardTitle className="text-base">{ex.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{ex.description}</p>
                    <Badge variant="outline" className="mb-3">{ex.difficulty}</Badge>
                    <Link to={`/exercices/prepositions/${ex.id}`}><Button size="sm" className="w-full gap-2">Commencer <ChevronRight className="h-4 w-4" /></Button></Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead 
        title="300+ Exercices Anglais Gratuits | Quiz & Pratique"
        description="Exercices interactifs gratuits : grammaire, vocabulaire, lecture, écoute. Créés par un formateur professionnel certifié."
        canonicalUrl="https://www.antonyaddy.com/exercices"
        image="https://www.antonyaddy.com/lovable-uploads/d29db9de-3e6a-459a-9275-77f27b988947.png"
        imageAlt="Exercices d'anglais interactifs par Antony Addy"
        keywords={["exercices anglais gratuits", "grammaire anglaise", "vocabulaire anglais", "quiz anglais"]}
        enableOrgJsonLd
        enableWebSiteJsonLd
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: "300+ Exercices d'Anglais Gratuits",
            description: "Collection de plus de 300 exercices d'anglais couvrant la grammaire, le vocabulaire et les pièges courants",
            author: {
              "@type": "Person",
              name: "Antony Addy",
              jobTitle: "Formateur Professionnel d'Adultes"
            },
            educationalLevel: "Beginner to Advanced",
            inLanguage: "fr",
            learningResourceType: "Exercise",
            isAccessibleForFree: true
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment utiliser les exercices d'anglais",
            description: "Guide pour progresser efficacement avec les exercices d'anglais gratuits",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Choisir votre niveau",
                text: "Sélectionnez les exercices adaptés à votre niveau : débutant, intermédiaire ou avancé"
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Pratiquer régulièrement",
                text: "Faites au moins un exercice par jour pour maintenir votre progression"
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Analyser vos erreurs",
                text: "Consultez les explications après chaque exercice pour comprendre vos erreurs"
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Suivre votre progression",
                text: "Utilisez le tableau de bord pour visualiser votre progression au fil du temps"
              }
            ],
            totalTime: "PT15M"
          }
        ]}
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
            <Tabs defaultValue="grammar" className="w-full" onValueChange={() => setActiveSubTab(null)}>
              <TabsList className="grid grid-cols-4 h-auto p-1.5 mb-8">
                <TabsTrigger value="grammar" className="gap-2 py-3 text-sm">
                  <GraduationCap className="h-5 w-5" />
                  <span className="hidden sm:inline">Grammaire</span>
                </TabsTrigger>
                <TabsTrigger value="vocabulary" className="gap-2 py-3 text-sm">
                  <Sparkles className="h-5 w-5" />
                  <span className="hidden sm:inline">Vocabulaire</span>
                </TabsTrigger>
                <TabsTrigger value="comprehension" className="gap-2 py-3 text-sm">
                  <Headphones className="h-5 w-5" />
                  <span className="hidden sm:inline">Compréhension</span>
                </TabsTrigger>
                <TabsTrigger value="practice" className="gap-2 py-3 text-sm">
                  <PenLine className="h-5 w-5" />
                  <span className="hidden sm:inline">Pratique</span>
                </TabsTrigger>
              </TabsList>

              {/* GRAMMAR TAB */}
              <TabsContent value="grammar" className="space-y-6">
                {activeSubTab ? (
                  renderSubContent(activeSubTab)
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Grammar & Structure</h2>
                      <p className="text-muted-foreground">Choisissez une catégorie pour commencer</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={GraduationCap} 
                        title="Temps & Conjugaison" 
                        count={grammarCategories.length}
                        colorClass="border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/10 text-primary"
                        onClick={() => setActiveSubTab('tenses')}
                      />
                      <CategoryCard 
                        icon={Target} 
                        title="Conditionnels" 
                        count={conditionalExercises.length}
                        colorClass="border-blue-300 bg-blue-50 hover:border-blue-500 hover:bg-blue-100 text-blue-700 dark:border-blue-700 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 dark:text-blue-300"
                        onClick={() => setActiveSubTab('conditionals')}
                      />
                      <CategoryCard 
                        icon={AlertTriangle} 
                        title="Correction d'erreurs" 
                        count={errorCorrectionData.length}
                        colorClass="border-red-300 bg-red-50 hover:border-red-500 hover:bg-red-100 text-red-700 dark:border-red-700 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-300"
                        onClick={() => setActiveSubTab('error-correction')}
                      />
                      <CategoryCard 
                        icon={Puzzle} 
                        title="Construction de phrases" 
                        count={sentenceBuildingExercises.length}
                        colorClass="border-purple-300 bg-purple-50 hover:border-purple-500 hover:bg-purple-100 text-purple-700 dark:border-purple-700 dark:bg-purple-900/20 dark:hover:bg-purple-900/40 dark:text-purple-300"
                        onClick={() => setActiveSubTab('sentence-building')}
                      />
                    </div>
                  </>
                )}
              </TabsContent>

              {/* VOCABULARY TAB */}
              <TabsContent value="vocabulary" className="space-y-6">
                {activeSubTab ? (
                  renderSubContent(activeSubTab)
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Vocabulary & Expressions</h2>
                      <p className="text-muted-foreground">Enrichissez votre vocabulaire anglais</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={Sparkles} 
                        title="Quiz Vocabulaire" 
                        count={exercisesData.length}
                        colorClass="border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary/10 text-primary"
                        onClick={() => setActiveSubTab('vocabulary-quiz')}
                      />
                      <CategoryCard 
                        icon={MessageCircle} 
                        title="Idioms & Expressions" 
                        count={idiomExercises.length}
                        colorClass="border-amber-300 bg-amber-50 hover:border-amber-500 hover:bg-amber-100 text-amber-700 dark:border-amber-700 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 dark:text-amber-300"
                        onClick={() => setActiveSubTab('idioms')}
                      />
                      <CategoryCard 
                        icon={ArrowRightLeft} 
                        title="Phrasal Verbs" 
                        count={phrasalVerbExercises.length}
                        colorClass="border-orange-300 bg-orange-50 hover:border-orange-500 hover:bg-orange-100 text-orange-700 dark:border-orange-700 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 dark:text-orange-300"
                        onClick={() => setActiveSubTab('phrasal-verbs')}
                      />
                      <CategoryCard 
                        icon={Link2} 
                        title="Collocations" 
                        count={collocationExercises.length}
                        colorClass="border-teal-300 bg-teal-50 hover:border-teal-500 hover:bg-teal-100 text-teal-700 dark:border-teal-700 dark:bg-teal-900/20 dark:hover:bg-teal-900/40 dark:text-teal-300"
                        onClick={() => setActiveSubTab('collocations')}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={GitCompare} 
                        title="Synonymes & Antonymes" 
                        count={synonymAntonymExercises.length}
                        colorClass="border-indigo-300 bg-indigo-50 hover:border-indigo-500 hover:bg-indigo-100 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 dark:text-indigo-300"
                        onClick={() => setActiveSubTab('synonyms')}
                      />
                      <CategoryCard 
                        icon={Sparkles} 
                        title="Formation des mots" 
                        count={wordFormationExercises.length}
                        colorClass="border-pink-300 bg-pink-50 hover:border-pink-500 hover:bg-pink-100 text-pink-700 dark:border-pink-700 dark:bg-pink-900/20 dark:hover:bg-pink-900/40 dark:text-pink-300"
                        onClick={() => setActiveSubTab('word-formation')}
                      />
                      <CategoryCard 
                        icon={CreditCard} 
                        title="Flashcards" 
                        count={flashcardSets.length}
                        colorClass="border-cyan-300 bg-cyan-50 hover:border-cyan-500 hover:bg-cyan-100 text-cyan-700 dark:border-cyan-700 dark:bg-cyan-900/20 dark:hover:bg-cyan-900/40 dark:text-cyan-300"
                        onClick={() => setActiveSubTab('flashcards')}
                      />
                    </div>
                  </>
                )}
              </TabsContent>

              {/* COMPREHENSION TAB */}
              <TabsContent value="comprehension" className="space-y-6">
                {activeSubTab ? (
                  renderSubContent(activeSubTab)
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Listening & Reading</h2>
                      <p className="text-muted-foreground">Améliorez votre compréhension</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={BookOpen} 
                        title="Reading" 
                        count={readingPassages.length}
                        colorClass="border-emerald-300 bg-emerald-50 hover:border-emerald-500 hover:bg-emerald-100 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 dark:text-emerald-300"
                        onClick={() => setActiveSubTab('reading')}
                      />
                      <CategoryCard 
                        icon={Headphones} 
                        title="Listening Lab" 
                        count={listeningExercises.length}
                        colorClass="border-teal-300 bg-teal-50 hover:border-teal-500 hover:bg-teal-100 text-teal-700 dark:border-teal-700 dark:bg-teal-900/20 dark:hover:bg-teal-900/40 dark:text-teal-300"
                        onClick={() => setActiveSubTab('listening')}
                      />
                      <CategoryCard 
                        icon={Volume2} 
                        title="Dictation" 
                        count={dictationExercises.length}
                        colorClass="border-violet-300 bg-violet-50 hover:border-violet-500 hover:bg-violet-100 text-violet-700 dark:border-violet-700 dark:bg-violet-900/20 dark:hover:bg-violet-900/40 dark:text-violet-300"
                        onClick={() => setActiveSubTab('dictation')}
                      />
                      <CategoryCard 
                        icon={Mic} 
                        title="Pronunciation" 
                        count={pronunciationExercises.length}
                        colorClass="border-rose-300 bg-rose-50 hover:border-rose-500 hover:bg-rose-100 text-rose-700 dark:border-rose-700 dark:bg-rose-900/20 dark:hover:bg-rose-900/40 dark:text-rose-300"
                        onClick={() => setActiveSubTab('pronunciation')}
                      />
                      <CategoryCard 
                        icon={BookMarked} 
                        title="Interactive Stories" 
                        count={interactiveStories.length}
                        colorClass="border-indigo-300 bg-indigo-50 hover:border-indigo-500 hover:bg-indigo-100 text-indigo-700 dark:border-indigo-700 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/40 dark:text-indigo-300"
                        onClick={() => setActiveSubTab('interactive-stories')}
                      />
                    </div>
                  </>
                )}
              </TabsContent>

              {/* PRACTICE TAB */}
              <TabsContent value="practice" className="space-y-6">
                {activeSubTab ? (
                  renderSubContent(activeSubTab)
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Writing & Practice</h2>
                      <p className="text-muted-foreground">Exercices interactifs variés</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={PenLine} 
                        title="Writing" 
                        count={sentenceTransformExercises.length + errorCorrectionExercises.length + fillParagraphExercises.length}
                        colorClass="border-blue-300 bg-blue-50 hover:border-blue-500 hover:bg-blue-100 text-blue-700 dark:border-blue-700 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 dark:text-blue-300"
                        onClick={() => setActiveSubTab('writing')}
                      />
                      <CategoryCard 
                        icon={Languages} 
                        title="Translation" 
                        count={translationExercises.length}
                        colorClass="border-green-300 bg-green-50 hover:border-green-500 hover:bg-green-100 text-green-700 dark:border-green-700 dark:bg-green-900/20 dark:hover:bg-green-900/40 dark:text-green-300"
                        onClick={() => setActiveSubTab('translation')}
                      />
                      <CategoryCard 
                        icon={GripVertical} 
                        title="Drag & Drop" 
                        count={dragDropExercises.length}
                        colorClass="border-violet-300 bg-violet-50 hover:border-violet-500 hover:bg-violet-100 text-violet-700 dark:border-violet-700 dark:bg-violet-900/20 dark:hover:bg-violet-900/40 dark:text-violet-300"
                        onClick={() => setActiveSubTab('drag-drop')}
                      />
                      <CategoryCard 
                        icon={List} 
                        title="Paragraph Ordering" 
                        count={paragraphOrderingExercises.length}
                        colorClass="border-amber-300 bg-amber-50 hover:border-amber-500 hover:bg-amber-100 text-amber-700 dark:border-amber-700 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 dark:text-amber-300"
                        onClick={() => setActiveSubTab('paragraph-order')}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={Keyboard} 
                        title="Fill-in Typing" 
                        count={fillInTypingExercises.length}
                        colorClass="border-slate-300 bg-slate-50 hover:border-slate-500 hover:bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900/20 dark:hover:bg-slate-900/40 dark:text-slate-300"
                        onClick={() => setActiveSubTab('fill-typing')}
                      />
                      <CategoryCard 
                        icon={Puzzle} 
                        title="Crossword" 
                        count={crosswordExercises.length}
                        colorClass="border-fuchsia-300 bg-fuchsia-50 hover:border-fuchsia-500 hover:bg-fuchsia-100 text-fuchsia-700 dark:border-fuchsia-700 dark:bg-fuchsia-900/20 dark:hover:bg-fuchsia-900/40 dark:text-fuchsia-300"
                        onClick={() => setActiveSubTab('crossword')}
                      />
                      <CategoryCard 
                        icon={Link2} 
                        title="Matching" 
                        count={matchingExercises.length}
                        colorClass="border-lime-300 bg-lime-50 hover:border-lime-500 hover:bg-lime-100 text-lime-700 dark:border-lime-700 dark:bg-lime-900/20 dark:hover:bg-lime-900/40 dark:text-lime-300"
                        onClick={() => setActiveSubTab('matching')}
                      />
                      <CategoryCard 
                        icon={MessageCircle} 
                        title="Dialogue" 
                        count={dialogueExercises.length}
                        colorClass="border-sky-300 bg-sky-50 hover:border-sky-500 hover:bg-sky-100 text-sky-700 dark:border-sky-700 dark:bg-sky-900/20 dark:hover:bg-sky-900/40 dark:text-sky-300"
                        onClick={() => setActiveSubTab('dialogue')}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <CategoryCard 
                        icon={Target} 
                        title="Prépositions" 
                        count={prepositionExercises.length}
                        colorClass="border-rose-300 bg-rose-50 hover:border-rose-500 hover:bg-rose-100 text-rose-700 dark:border-rose-700 dark:bg-rose-900/20 dark:hover:bg-rose-900/40 dark:text-rose-300"
                        onClick={() => setActiveSubTab('prepositions')}
                      />
                    </div>

                    {/* CLOE Certification Prep - Special Section */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="text-center mb-4">
                        <Badge variant="outline" className="mb-2 border-primary/50 text-primary">
                          <Award className="h-3 w-3 mr-1" />
                          Certification
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground font-heading">Préparation aux examens</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/exercices/cloe-preparation" className="block">
                          <div className="p-4 rounded-xl border-2 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 border-primary bg-gradient-to-br from-primary/10 to-accent/10 hover:border-primary hover:from-primary/20 hover:to-accent/20">
                            <div className="flex items-center gap-3 mb-2">
                              <Award className="h-5 w-5 text-primary" />
                              <span className="font-semibold font-heading text-primary">CLOE Anglais</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{cloeExercises.length} exercices</p>
                            <p className="text-xs text-muted-foreground mt-1">Format examen officiel</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* AI Trainers Section */}
        <section className="py-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-2 border-primary/50 text-primary">
                <Sparkles className="h-3 w-3 mr-1" />
                Entraînement IA
              </Badge>
              <h2 className="text-2xl font-bold text-foreground font-heading">Outils d'entraînement avec IA</h2>
              <p className="text-muted-foreground text-sm mt-1">Pratiquez l'anglais professionnel avec un feedback IA personnalisé</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/conversation-trainer" className="block">
                <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all border-primary/20 hover:border-primary/40">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-foreground mb-1">AI Conversation Trainer</h3>
                      <p className="text-sm text-muted-foreground">Entraînez-vous à parler anglais professionnel avec un partenaire IA.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/email-trainer" className="block">
                <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all border-primary/20 hover:border-primary/40">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-foreground mb-1">AI Email Reply Trainer</h3>
                      <p className="text-sm text-muted-foreground">Rédigez des e-mails professionnels avec feedback IA détaillé.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/presentation-trainer" className="block">
                <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all border-primary/20 hover:border-primary/40">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-foreground mb-1">AI Presentation Trainer</h3>
                      <p className="text-sm text-muted-foreground">Pratiquez des présentations professionnelles avec coaching IA.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/negotiation-trainer" className="block">
                <Card className="h-full hover:shadow-lg hover:-translate-y-0.5 transition-all border-primary/20 hover:border-primary/40">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14h2"/><path d="M11 4c-3.29.37-5.7 2.33-6.72 4.94a3 3 0 0 0 0 2.12A7.26 7.26 0 0 0 9 15"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading text-foreground mb-1">AI Negotiation Trainer</h3>
                      <p className="text-sm text-muted-foreground">Pratiquez la négociation professionnelle avec feedback IA.</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-4 font-body">
              Ces ressources gratuites complètent mes formations. Pour un parcours structuré adapté à vos objectifs professionnels, je propose des formations individuelles ou en groupe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/offres-de-formation" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Découvrir les formations →
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Me contacter
              </Link>
            </div>
            
            {/* Related Resources - Internal Linking */}
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground mb-3">Ressources complémentaires :</p>
              <div className="flex flex-wrap gap-3 justify-center text-sm">
                <Link to="/reading" className="text-accent hover:underline">Compréhension écrite</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/exercices/listening" className="text-accent hover:underline">Exercices d'écoute</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/exercices/cloe-preparation" className="text-accent hover:underline">Préparation CLOE</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/blog" className="text-accent hover:underline">Articles & conseils</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/conversation-trainer" className="text-accent hover:underline">AI Conversation Trainer</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/email-trainer" className="text-accent hover:underline">AI Email Reply Trainer</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/presentation-trainer" className="text-accent hover:underline">AI Presentation Trainer</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/negotiation-trainer" className="text-accent hover:underline">AI Negotiation Trainer</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Exercises;
