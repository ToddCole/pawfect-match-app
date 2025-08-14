import React from 'react';
import type { QuizQuestion as QuizQuestionType } from '../../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOptionIndex?: number;
  onAnswer: (optionIndex: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedOptionIndex, 
  onAnswer 
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-6 text-primary-400">
        {question.question}
      </h3>
      
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`p-4 text-left border-2 rounded-xl transition-all duration-300 ${
              selectedOptionIndex === index
                ? 'border-primary-300 bg-primary-300 text-white'
                : 'border-primary-200 bg-white text-primary-400 hover:border-primary-300 hover:bg-primary-50'
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;