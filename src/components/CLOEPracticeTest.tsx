import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Clock, Target, CheckCircle2, XCircle, 
  ChevronRight, ChevronLeft, RotateCcw, Home,
  Award, TrendingUp, Zap, BookOpen, AlertTriangle, History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { QuizTimer } from '@/components/QuizTimer';
import { useQuizTimer } from '@/hooks/useQuizTimer';
import { useCLOEProgress } from '@/hooks/useCLOEProgress';
import { cloeExercises, CloeQuestion, CloeExercise } from '@/data/cloeExercises';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Seeded shuffle for consistent randomization
function seededShuffle<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let currentSeed = seed;
  
  const random = () => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return currentSeed / 233280;
  };
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

interface TestQuestion extends CloeQuestion {
  exerciseId: string;
  exerciseTitle: string;
  difficulty: string;
  category: string;
}

interface TestConfig {
  duration: number; // in minutes
  questionCount: number;
  levels: string[];
  categories: string[];
}

interface TestResult {
  question: TestQuestion;
  userAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

const DEFAULT_CONFIG: TestConfig = {
  duration: 20,
  questionCount: 20,
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  categories: ['vocabulary', 'grammar', 'expressions', 'reading'],
};

const TEST_PRESETS = [
  { 
    name: 'Découverte', 
    description: 'Test rapide pour évaluer votre niveau',
    duration: 10, 
    questions: 10, 
    icon: '🎯',
    color: 'bg-emerald-500/10 border-emerald-500/30'
  },
  { 
    name: 'Standard', 
    description: 'Simulation d\'examen standard',
    duration: 20, 
    questions: 20, 
    icon: '📝',
    color: 'bg-primary/10 border-primary/30'
  },
  { 
    name: 'Intensif', 
    description: 'Préparation complète avec pression',
    duration: 30, 
    questions: 30, 
    icon: '🔥',
    color: 'bg-accent/10 border-accent/30'
  },
  { 
    name: 'Marathon', 
    description: 'Test complet de certification',
    duration: 45, 
    questions: 45, 
    icon: '🏆',
    color: 'bg-destructive/10 border-destructive/30'
  },
];

const LEVEL_COLORS: Record<string, string> = {
  'A1': 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
  'A2': 'bg-teal-500/20 text-teal-700 dark:text-teal-300',
  'B1': 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
  'B2': 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300',
  'C1': 'bg-purple-500/20 text-purple-700 dark:text-purple-300',
  'C2': 'bg-pink-500/20 text-pink-700 dark:text-pink-300',
};

type TestPhase = 'config' | 'test' | 'results';

export function CLOEPracticeTest() {
  const [phase, setPhase] = useState<TestPhase>('config');
  const [config, setConfig] = useState<TestConfig>(DEFAULT_CONFIG);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<TestResult[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [fillAnswer, setFillAnswer] = useState<string>('');
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [testSeed] = useState(() => Date.now());
  
  const { saveResult } = useCLOEProgress();

  const handleTimeUp = useCallback(() => {
    // Auto-submit remaining questions as incorrect
    if (phase === 'test') {
      const remainingResults: TestResult[] = questions.slice(currentIndex).map(q => ({
        question: q,
        userAnswer: '',
        isCorrect: false,
        timeSpent: 0,
      }));
      setResults(prev => [...prev, ...remainingResults]);
      setPhase('results');
    }
  }, [phase, questions, currentIndex]);

  const timer = useQuizTimer({
    totalSeconds: config.duration * 60,
    onTimeUp: handleTimeUp,
  });

  // Generate test questions from all exercises
  const generateQuestions = useCallback((cfg: TestConfig): TestQuestion[] => {
    const allQuestions: TestQuestion[] = [];
    
    cloeExercises
      .filter(ex => cfg.levels.includes(ex.difficulty) && cfg.categories.includes(ex.category))
      .forEach(exercise => {
        exercise.questions.forEach(q => {
          // Only include MCQ and fill-blank for simplified test
          if (q.type === 'mcq' || q.type === 'fill-blank') {
            allQuestions.push({
              ...q,
              exerciseId: exercise.id,
              exerciseTitle: exercise.title,
              difficulty: exercise.difficulty,
              category: exercise.category,
            });
          }
        });
      });
    
    // Shuffle and take required number
    const shuffled = seededShuffle(allQuestions, testSeed);
    return shuffled.slice(0, cfg.questionCount);
  }, [testSeed]);

  const startTest = (preset?: typeof TEST_PRESETS[0]) => {
    const newConfig = preset 
      ? { ...config, duration: preset.duration, questionCount: preset.questions }
      : config;
    
    setConfig(newConfig);
    const generatedQuestions = generateQuestions(newConfig);
    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setResults([]);
    setSelectedAnswer('');
    setFillAnswer('');
    setQuestionStartTime(Date.now());
    setPhase('test');
    timer.reset();
    setTimeout(() => timer.start(), 100);
  };

  const currentQuestion = questions[currentIndex];
  
  // Shuffle options for MCQ
  const shuffledOptions = useMemo(() => {
    if (!currentQuestion || !currentQuestion.options) return [];
    return seededShuffle(currentQuestion.options, testSeed + currentIndex);
  }, [currentQuestion, testSeed, currentIndex]);

  const submitAnswer = () => {
    if (!currentQuestion) return;
    
    const answer = currentQuestion.type === 'fill-blank' ? fillAnswer.trim() : selectedAnswer;
    const correctAnswer = Array.isArray(currentQuestion.correctAnswer) 
      ? currentQuestion.correctAnswer[0] 
      : currentQuestion.correctAnswer;
    
    const isCorrect = answer.toLowerCase() === correctAnswer.toLowerCase();
    const timeSpent = (Date.now() - questionStartTime) / 1000;
    
    const result: TestResult = {
      question: currentQuestion,
      userAnswer: answer,
      isCorrect,
      timeSpent,
    };
    
    setResults(prev => [...prev, result]);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer('');
      setFillAnswer('');
      setQuestionStartTime(Date.now());
    } else {
      timer.stop();
      setPhase('results');
    }
  };

  const skipQuestion = () => {
    if (!currentQuestion) return;
    
    const result: TestResult = {
      question: currentQuestion,
      userAnswer: '',
      isCorrect: false,
      timeSpent: (Date.now() - questionStartTime) / 1000,
    };
    
    setResults(prev => [...prev, result]);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer('');
      setFillAnswer('');
      setQuestionStartTime(Date.now());
    } else {
      timer.stop();
      setPhase('results');
    }
  };

  // Calculate results stats
  const stats = useMemo(() => {
    const correct = results.filter(r => r.isCorrect).length;
    const total = results.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const avgTime = total > 0 ? results.reduce((sum, r) => sum + r.timeSpent, 0) / total : 0;
    
    const byLevel: Record<string, { correct: number; total: number }> = {};
    const byCategory: Record<string, { correct: number; total: number }> = {};
    
    results.forEach(r => {
      if (!byLevel[r.question.difficulty]) byLevel[r.question.difficulty] = { correct: 0, total: 0 };
      byLevel[r.question.difficulty].total++;
      if (r.isCorrect) byLevel[r.question.difficulty].correct++;
      
      if (!byCategory[r.question.category]) byCategory[r.question.category] = { correct: 0, total: 0 };
      byCategory[r.question.category].total++;
      if (r.isCorrect) byCategory[r.question.category].correct++;
    });
    
    // Determine estimated CEFR level based on performance
    let estimatedLevel = 'A1';
    if (percentage >= 90) estimatedLevel = 'C2';
    else if (percentage >= 80) estimatedLevel = 'C1';
    else if (percentage >= 70) estimatedLevel = 'B2';
    else if (percentage >= 60) estimatedLevel = 'B1';
    else if (percentage >= 50) estimatedLevel = 'A2';
    
    return { correct, total, percentage, avgTime, byLevel, byCategory, estimatedLevel };
  }, [results]);

  // Save results to progress tracker
  useEffect(() => {
    if (phase === 'results' && results.length > 0) {
      saveResult({
        exerciseId: `practice-test-${Date.now()}`,
        category: 'reading', // General category
        difficulty: stats.estimatedLevel as 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
        score: stats.correct,
        totalQuestions: stats.total,
        title: `Test de pratique (${config.questionCount} questions)`,
      });
    }
  }, [phase, results.length]);

  // CONFIG PHASE
  if (phase === 'config') {
    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Mode Examen CLOE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Test de Pratique</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simulez les conditions d'examen avec des questions mixtes couvrant tous les niveaux 
            et catégories. Chronométré et noté comme le vrai examen!
          </p>
        </motion.div>

        {/* Presets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEST_PRESETS.map((preset, index) => (
            <motion.div
              key={preset.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={cn(
                  "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] border-2",
                  preset.color
                )}
                onClick={() => startTest(preset)}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <span className="text-4xl">{preset.icon}</span>
                  <h3 className="font-bold text-lg">{preset.name}</h3>
                  <p className="text-sm text-muted-foreground">{preset.description}</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{preset.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4 text-primary" />
                      <span>{preset.questions} Q</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        <Card className="border-muted">
          <CardContent className="p-6">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              Conseils pour réussir
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Lisez attentivement chaque question avant de répondre</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Ne passez pas trop de temps sur une seule question</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Utilisez le contexte pour deviner les réponses inconnues</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Gardez un œil sur le temps restant</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  // TEST PHASE
  if (phase === 'test' && currentQuestion) {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    
    return (
      <div className="space-y-6">
        {/* Header with timer */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-card border">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-base px-3 py-1">
              Question {currentIndex + 1} / {questions.length}
            </Badge>
            <Badge className={LEVEL_COLORS[currentQuestion.difficulty]}>
              {currentQuestion.difficulty}
            </Badge>
            <Badge variant="secondary" className="capitalize">
              {currentQuestion.category}
            </Badge>
          </div>
          <QuizTimer
            formattedTime={timer.formattedTime}
            progress={timer.progress}
            isRunning={timer.isRunning}
            isPaused={timer.isPaused}
            isLow={timer.isLow}
            isCritical={timer.isCritical}
            isTimeUp={timer.isTimeUp}
            onPause={timer.pause}
            onResume={timer.resume}
            showControls={true}
            size="md"
          />
        </div>

        {/* Progress bar */}
        <Progress value={progress} className="h-2" />

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
                {currentQuestion.context && (
                  <p className="text-muted-foreground mt-2 p-4 bg-muted/50 rounded-lg italic">
                    {currentQuestion.context}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestion.type === 'mcq' && shuffledOptions.length > 0 && (
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-3">
                      {shuffledOptions.map((option, idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer",
                            selectedAnswer === option 
                              ? "border-primary bg-primary/5" 
                              : "border-muted hover:border-primary/50"
                          )}
                          onClick={() => setSelectedAnswer(option)}
                        >
                          <RadioGroupItem value={option} id={`option-${idx}`} />
                          <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer text-base">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                )}

                {currentQuestion.type === 'fill-blank' && (
                  <Input
                    value={fillAnswer}
                    onChange={(e) => setFillAnswer(e.target.value)}
                    placeholder="Tapez votre réponse..."
                    className="text-lg p-6"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && fillAnswer.trim()) {
                        submitAnswer();
                      }
                    }}
                  />
                )}

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={skipQuestion}
                    className="flex-1"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Passer
                  </Button>
                  <Button
                    onClick={submitAnswer}
                    disabled={currentQuestion.type === 'mcq' ? !selectedAnswer : !fillAnswer.trim()}
                    className="flex-1"
                  >
                    Valider
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Warning if time is low */}
        {timer.isLow && !timer.isCritical && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 text-accent border border-accent/30"
          >
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Attention: moins d'une minute restante!</span>
          </motion.div>
        )}
      </div>
    );
  }

  // RESULTS PHASE
  if (phase === 'results') {
    return (
      <div className="space-y-8">
        {/* Score header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className={cn(
            "inline-flex items-center justify-center w-32 h-32 rounded-full text-5xl font-bold",
            stats.percentage >= 70 
              ? "bg-emerald-500/20 text-emerald-600" 
              : stats.percentage >= 50 
                ? "bg-accent/20 text-accent" 
                : "bg-destructive/20 text-destructive"
          )}>
            {stats.percentage}%
          </div>
          <h1 className="text-3xl font-bold">Test Terminé!</h1>
          <p className="text-muted-foreground">
            {stats.correct} / {stats.total} réponses correctes
          </p>
          <Badge className={cn("text-lg px-4 py-2", LEVEL_COLORS[stats.estimatedLevel])}>
            <TrendingUp className="w-4 h-4 mr-2" />
            Niveau estimé: {stats.estimatedLevel}
          </Badge>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{Math.round(stats.avgTime)}s</p>
              <p className="text-sm text-muted-foreground">Temps moyen/question</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
              <p className="text-2xl font-bold">{stats.correct}</p>
              <p className="text-sm text-muted-foreground">Réponses correctes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">{stats.estimatedLevel}</p>
              <p className="text-sm text-muted-foreground">Niveau CECRL</p>
            </CardContent>
          </Card>
        </div>

        {/* Breakdown by level */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance par niveau
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.byLevel).map(([level, data]) => (
                <div key={level} className="flex items-center gap-4">
                  <Badge className={cn("w-12 justify-center", LEVEL_COLORS[level])}>
                    {level}
                  </Badge>
                  <Progress 
                    value={(data.correct / data.total) * 100} 
                    className="flex-1 h-3"
                  />
                  <span className="text-sm font-medium w-16 text-right">
                    {data.correct}/{data.total}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Breakdown by category */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Performance par catégorie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(stats.byCategory).map(([category, data]) => {
                const percentage = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={category} className="p-4 rounded-lg bg-muted/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium capitalize">{category}</span>
                      <span className={cn(
                        "font-bold",
                        percentage >= 70 ? "text-emerald-600" : percentage >= 50 ? "text-accent" : "text-destructive"
                      )}>
                        {percentage}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">
                      {data.correct} / {data.total} correct
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Review incorrect answers */}
        {results.filter(r => !r.isCorrect).length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <XCircle className="w-5 h-5" />
                Questions à revoir ({results.filter(r => !r.isCorrect).length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {results.filter(r => !r.isCorrect).slice(0, 5).map((result, idx) => (
                <div key={idx} className="p-4 rounded-lg border bg-destructive/5 border-destructive/20">
                  <div className="flex items-start gap-2 mb-2">
                    <Badge className={LEVEL_COLORS[result.question.difficulty]}>
                      {result.question.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="capitalize">
                      {result.question.category}
                    </Badge>
                  </div>
                  <p className="font-medium mb-1">{result.question.question}</p>
                  {result.question.context && (
                    <p className="text-sm text-muted-foreground italic mb-2">"{result.question.context}"</p>
                  )}
                  <div className="flex flex-col gap-1 text-sm">
                    {result.userAnswer && (
                      <p className="text-destructive">
                        Votre réponse: <span className="font-medium">{result.userAnswer}</span>
                      </p>
                    )}
                    <p className="text-emerald-600">
                      Bonne réponse: <span className="font-medium">
                        {Array.isArray(result.question.correctAnswer) 
                          ? result.question.correctAnswer.join(', ') 
                          : result.question.correctAnswer}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              {results.filter(r => !r.isCorrect).length > 5 && (
                <p className="text-sm text-muted-foreground text-center">
                  + {results.filter(r => !r.isCorrect).length - 5} autres questions à revoir
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => setPhase('config')} variant="outline" size="lg">
            <RotateCcw className="w-4 h-4 mr-2" />
            Nouveau Test
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/exercices/cloe-preparation/history">
              <History className="w-4 h-4 mr-2" />
              Voir l'historique
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link to="/exercices/cloe-preparation">
              <Home className="w-4 h-4 mr-2" />
              Retour à la préparation
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
