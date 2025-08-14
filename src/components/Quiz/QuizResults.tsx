import React from 'react';
import { BreedMatch } from '../../types';
import BreedCard from '../Breeds/BreedCard';

interface QuizResultsProps {
  results: BreedMatch[];
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ results, onRestart }) => {
  if (results.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="card">
          <h2 className="text-3xl font-bold mb-4 text-primary-400">No Perfect Matches Found</h2>
          <p className="text-primary-500 mb-6">
            It looks like we couldn't find breeds that match your exact preferences. 
            Consider adjusting your answers or exploring our breed database.
          </p>
          <button
            onClick={onRestart}
            className="btn-primary"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-300 to-primary-400 text-white py-12">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Perfect Matches!</h2>
          <p className="text-xl opacity-90">
            Based on your answers, here are the dog breeds that would be perfect for you.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {results.map((match, index) => (
            <div
              key={match.breed.name}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-primary-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-primary-400">
                  #{index + 1} {match.breed.name}
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-300">
                    {Math.round(match.compatibility)}% Match
                  </div>
                  <div className="text-sm text-primary-500">
                    Compatibility Score
                  </div>
                </div>
              </div>
              
              <BreedCard breed={match.breed} showCompatibility={false} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="bg-white text-primary-400 px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;