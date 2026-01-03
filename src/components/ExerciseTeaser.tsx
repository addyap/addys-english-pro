import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, Sparkles } from 'lucide-react';

const SAMPLE_QUESTIONS = [
  {
    question: "She ___ to the gym every morning before work.",
    options: ["go", "goes", "going", "gone"],
    correct: 1,
    explanation: "Third person singular (she) requires 'goes' in present simple."
  },
  {
    question: "I haven't seen him ___ last week.",
    options: ["for", "since", "during", "while"],
    correct: 1,
    explanation: "'Since' is used with a specific point in time (last week)."
  }
];

export default function ExerciseTeaser() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = SAMPLE_QUESTIONS[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;
  const isComplete = currentQuestion >= SAMPLE_QUESTIONS.length - 1 && showResult;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < SAMPLE_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-muted/50 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium text-sm">Testez-vous maintenant</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading">
            Un avant-goût de nos exercices
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8">
          {!isComplete ? (
            <>
              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1}/{SAMPLE_QUESTIONS.length}
                </span>
                <span className="text-sm font-medium text-emerald-600">
                  Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
                </span>
              </div>

              {/* Question */}
              <p className="text-lg md:text-xl font-medium text-foreground mb-6">
                {question.question}
              </p>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {question.options.map((option, index) => {
                  let buttonClass = "p-4 rounded-xl border-2 font-medium transition-all text-left ";
                  
                  if (showResult) {
                    if (index === question.correct) {
                      buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                    } else if (index === selectedAnswer) {
                      buttonClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-border text-muted-foreground opacity-50";
                    }
                  } else {
                    buttonClass += "border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {showResult && (
                <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`font-medium ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                        {isCorrect ? 'Correct!' : 'Pas tout à fait...'}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Next button */}
              {showResult && currentQuestion < SAMPLE_QUESTIONS.length - 1 && (
                <button
                  onClick={handleNext}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Question suivante
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </>
          ) : (
            /* Completion state */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {score === SAMPLE_QUESTIONS.length ? 'Parfait !' : 'Bien joué !'}
              </h3>
              <p className="text-muted-foreground mb-6">
                Vous avez obtenu {score}/{SAMPLE_QUESTIONS.length}. 
                {score === SAMPLE_QUESTIONS.length 
                  ? " Vous maîtrisez les bases !" 
                  : " Continuez à vous entraîner !"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border-2 border-border rounded-xl font-medium hover:bg-muted transition-colors"
                >
                  Réessayer
                </button>
                <Link
                  to="/exercices"
                  className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                >
                  Voir tous les exercices
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
