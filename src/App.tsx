import React, { useState } from 'react';

// Reusable components
const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <h2 className="logo">Pawfect Match</h2>
      <nav className="nav">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">Breeds</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Care Guides</a>
      </nav>
    </div>
  </header>
);

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ 
  icon, title, description 
}) => (
  <div className="card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <h3 className="footer-title">Pawfect Match</h3>
      <p className="footer-description">
        Helping families find their perfect canine companions through intelligent breed matching.
      </p>
      <p className="footer-copyright">
        © 2024 PawMatch. All rights reserved. Made with ❤️ for dog lovers everywhere.
      </p>
    </div>
  </footer>
);

const QuizView: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div className="quiz-container">
    <div className="card quiz-card">
      <h2 className="quiz-title">Dog Breed Quiz</h2>
      <p className="quiz-description">Quiz functionality coming soon!</p>
      <button className="btn-secondary" onClick={onBack}>
        Back to Home
      </button>
    </div>
  </div>
);

const HomeView: React.FC<{ onStartQuiz: () => void }> = ({ onStartQuiz }) => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find Your Pawfect Dog Breed Match</h1>
        <p className="hero-description">
          Discover the ideal canine companion based on your lifestyle, preferences, and living situation.
        </p>
        <button className="btn-primary hero-button" onClick={onStartQuiz}>
          Start Matching Quiz
        </button>
      </div>
    </section>

    <section className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Pawfect Match?</h2>
        <div className="features-grid">
          <FeatureCard 
            icon="🏠" 
            title="Lifestyle Matching" 
            description="We consider your living space, activity level, and daily routine."
          />
          <FeatureCard 
            icon="🎯" 
            title="Personalized Results" 
            description="Get detailed breed recommendations with compatibility scores."
          />
          <FeatureCard 
            icon="📚" 
            title="Expert Knowledge" 
            description="Information from veterinarians and dog experts."
          />
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="app">
      <Header />
      <main className="main">
        {showQuiz ? (
          <QuizView onBack={() => setShowQuiz(false)} />
        ) : (
          <HomeView onStartQuiz={() => setShowQuiz(true)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;