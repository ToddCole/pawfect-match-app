import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import type { BreedMatch } from './types';

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
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-title">Pawfect Match</h3>
          <p className="footer-description">
            Helping families find their perfect canine companions through intelligent breed matching.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Breed Database</a></li>
              <li><a href="#" className="footer-link">Care Guides</a></li>
              <li><a href="#" className="footer-link">Training Tips</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Find Dogs</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Local Breeders</a></li>
              <li><a href="#" className="footer-link">Rescue Organisations</a></li>
              <li><a href="#" className="footer-link">Adoption Events</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2024 PawMatch. All rights reserved. Made with ❤️ for dog lovers everywhere.
        </p>
      </div>
    </div>
  </footer>
);

const HomeView: React.FC<{ onStartQuiz: () => void }> = ({ onStartQuiz }) => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Find The Dog for Your Lifestyle</h1>
        <p className="hero-description">
          Forget scrolling endless breed lists or window shopping in pet shops — we'll match you with the dog that truly fits your life.
        </p>
        <p className="hero-subdescription">
          Take our quick lifestyle quiz and our smart matching system will pair you with your ideal breed from over 200 carefully profiled dogs.
        </p>
        <button className="btn-primary hero-button" onClick={onStartQuiz}>
          Start Matching Now
        </button>
      </div>
    </section>

    <section className="features">
      <div className="container">
        <h2 className="section-title">Why It Works</h2>
        <div className="features-grid">
          <FeatureCard 
            icon="❓" 
            title="Quick Quiz" 
            description="Tell us about your home, energy, and what you want in a dog."
          />
          <FeatureCard 
            icon="🧠" 
            title="Smart Match" 
            description="Our algorithm finds breeds that tick your boxes."
          />
          <FeatureCard 
            icon="🎯" 
            title="Tailored Results" 
            description="Get your top matches with compatibility scores and must-know insights."
          />
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">200+ Breeds. One Perfect Match.</h2>
          <p className="cta-description">
            We've analysed over 200 breeds in detail — so you can skip the guesswork and meet your perfect dog sooner.
          </p>
        </div>
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizComplete = (results: BreedMatch[]) => {
    console.log('Quiz completed with results:', results);
    setShowQuiz(false);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        {showQuiz ? (
          <Quiz onComplete={handleQuizComplete} />
        ) : (
          <HomeView onStartQuiz={() => setShowQuiz(true)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;