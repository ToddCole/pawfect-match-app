import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Quiz from '../components/Quiz/Quiz';
import type { BreedMatch } from '../types';

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
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Pawfect Dog Breed Match EDITED
          </h1>
          <p className="hero-description">
            Discover PUPPY companion based on your lifestyle, preferences, and living situation.
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="btn-primary hero-button"
          >
            Start Matching Quiz
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">
            Why Choose Pawfect Match?
          </h2>
          
          <div className="features-grid">
            <div className="card">
              <div className="feature-icon">🏠</div>
              <h3 className="feature-title">Lifestyle Matching</h3>
              <p className="feature-description">
                We consider your living space, activity level, and daily routine to recommend breeds that will thrive in your environment.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Personalized Results</h3>
              <p className="feature-description">
                Get detailed breed recommendations with care requirements, temperament information, and compatibility scores.
              </p>
            </div>

            <div className="card">
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Expert Knowledge</h3>
              <p className="feature-description">
                Our database includes comprehensive breed information compiled from veterinarians, dog trainers, and breed experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="cta-description">
            Join thousands of happy families who found their perfect dog match through our intelligent breed matching system.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
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