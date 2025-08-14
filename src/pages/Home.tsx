import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz/Quiz';
import { BreedMatch } from '../types';

const Home: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizComplete = (results: BreedMatch[]) => {
    // In a real app, we might save results to Supabase here
    console.log('Quiz completed with results:', results);
  };

  if (showQuiz) {
    return <Quiz onComplete={handleQuizComplete} />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-400 mb-6 leading-tight">
            Find Your Pawfect Dog Breed Match
          </h1>
          <p className="text-xl md:text-2xl text-primary-500 mb-12 leading-relaxed">
            Discover the ideal canine companion based on your lifestyle, preferences, and living situation.
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="btn-primary text-xl px-12 py-4 transform hover:scale-105"
          >
            Start Matching Quiz
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-primary-400 mb-16">
            Why Choose Pawfect Match?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Lifestyle Matching</h3>
              <p className="text-primary-500 leading-relaxed">
                We consider your living space, activity level, and daily routine to recommend breeds that will thrive in your environment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Personalized Results</h3>
              <p className="text-primary-500 leading-relaxed">
                Get detailed breed recommendations with care requirements, temperament information, and compatibility scores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">Expert Knowledge</h3>
              <p className="text-primary-500 leading-relaxed">
                Our database includes comprehensive breed information compiled from veterinarians, dog trainers, and breed experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-200 to-primary-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary-400 mb-6">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="text-xl text-primary-500 mb-8">
            Join thousands of happy families who found their perfect dog match through our intelligent breed matching system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="btn-primary"
            >
              Take the Quiz
            </button>
            <Link
              to="/breeds"
              className="btn-secondary"
            >
              Browse Breeds
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;