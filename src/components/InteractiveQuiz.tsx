
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

interface InteractiveQuizProps {
  title: string;
  questions: QuizQuestion[];
  className?: string;
}

export default function InteractiveQuiz({ title, questions, className = '' }: InteractiveQuizProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    return { correct: correctAnswers, total: questions.length };
  };

  const { correct, total } = calculateScore();
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setSubmitted(false);
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      
      {!showResults ? (
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {index + 1}. {question.question}
              </h3>
              
              <Select
                value={answers[question.id] || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                <SelectTrigger className="w-full" aria-label={`Answer for question ${index + 1}`}>
                  <SelectValue placeholder="Choisissez votre réponse..." />
                </SelectTrigger>
                <SelectContent>
                  {question.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
          
          <Button 
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
            className="w-full"
          >
            Terminer le quiz et voir les résultats
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Résultats du quiz</h3>
            <p className="text-lg text-gray-700">
              Score: <span className="font-bold text-blue-600">{correct}/{total}</span> ({scorePercentage}%)
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Révision des réponses :</h4>
            {questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className={`p-4 rounded-lg border-2 ${
                  isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}>
                  <p className="font-medium text-gray-900 mb-2">
                    {index + 1}. {question.question}
                  </p>
                  <p className="text-sm text-gray-700">
                    Votre réponse: <span className={isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>
                      {userAnswer || 'Pas de réponse'}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-700 font-medium">
                      Bonne réponse: {question.correctAnswer}
                    </p>
                  )}
                  {question.explanation && (
                    <p className="text-sm text-gray-600 mt-2 italic">
                      {question.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          
          <Button onClick={resetQuiz} variant="outline" className="w-full">
            Recommencer le quiz
          </Button>
        </div>
      )}
    </div>
  );
}
