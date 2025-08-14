import React, { useState, useCallback } from 'react';
import { QuizAnswer, BreedMatch } from '../../types';
import { quizQuestions } from '../../utils/quizData';
import { breedDatabase } from '../../utils/breedData';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';
import ProgressBar from './ProgressBar';

interface QuizProps {
  onComplete?: (results: BreedMatch[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<BreedMatch[]>([]);

  const handleAnswer = useCallback((questionId: number, selectedOptionIndex: number) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { questionId, selectedOptionIndex };
    } else {
      newAnswers.push({ questionId, selectedOptionIndex });
    }
    
    setAnswers(newAnswers);
  }, [answers]);

  const goToNext = useCallback(() => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  }, [currentQuestion]);

  const goToPrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const calculateResults = useCallback(() => {
    // Collect all traits from user answers
    const userTraits: string[] = [];
    answers.forEach(answer => {
      const question = quizQuestions.find(q => q.id === answer.questionId);
      if (question) {
        const selectedOption = question.options[answer.selectedOptionIndex];
        userTraits.push(...selectedOption.traits);
      }
    });

    // Calculate trait frequency
    const traitCounts: { [key: string]: number } = {};
    userTraits.forEach(trait => {
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });

    // Score breeds based on matching traits
    const breedScores = breedDatabase.map(breed => {
      let score = 0;
      breed.traits.forEach(trait => {
        if (traitCounts[trait]) {
          score += traitCounts[trait];
        }
      });
      
      const compatibility = userTraits.length > 0 ? (score / userTraits.length) * 100 : 0;
      
      return {
        breed,
        score,
        compatibility: Math.min(compatibility, 100)
      };
    });

    // Get top 3 matches
    const topMatches = breedScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .filter(match => match.score > 0);

    setResults(topMatches);
    setIsComplete(true);
    
    if (onComplete) {
      onComplete(topMatches);
    }
  }, [answers, onComplete]);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsComplete(false);
    setResults([]);
  }, []);

  const currentAnswer = answers.find(a => a.questionId === quizQuestions[currentQuestion]?.id);
  const isAnswered = currentAnswer !== undefined;
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (isComplete) {
    return <QuizResults results={results} onRestart={resetQuiz} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card">
        <ProgressBar progress={progress} />
        
        <QuizQuestion
          question={quizQuestions[currentQuestion]}
          selectedOptionIndex={currentAnswer?.selectedOptionIndex}
          onAnswer={(optionIndex) => handleAnswer(quizQuestions[currentQuestion].id, optionIndex)}
        />
        
        <div className="flex justify-between mt-8">
          <button
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={goToNext}
            disabled={!isAnswered}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              !isAnswered
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;