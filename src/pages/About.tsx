import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">About Pawfect Match</h1>

        <div className="card page-section">
          <p className="page-text" style={{fontSize: '1.2rem', textAlign: 'center'}}>
            Pawfect Match uses advanced algorithms to match you with the perfect dog breed based on your lifestyle, living situation, experience level, and personal preferences.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card page-section" style={{background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-100) 100%)'}}>
          <h2 className="section-heading">Our Mission</h2>
          <p className="page-text" style={{fontSize: '1.1rem'}}>
            We believe that finding the right dog breed is crucial for creating lasting, happy relationships between families and their canine companions. Our intelligent matching system considers multiple factors to ensure you find a dog that fits seamlessly into your life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid page-section">
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

        {/* How It Works */}
        <div className="page-section">
          <h2 className="section-title">How It Works</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
            <div className="card" style={{textAlign: 'center'}}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary-300)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                1
              </div>
              <h4 className="subsection-heading">Take Our Quiz</h4>
              <p className="page-text">Answer questions about your lifestyle, experience, and preferences.</p>
            </div>

            <div className="card" style={{textAlign: 'center'}}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary-300)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                2
              </div>
              <h4 className="subsection-heading">Get Matched</h4>
              <p className="page-text">Our algorithm analyzes your responses and compares them to breed characteristics.</p>
            </div>

            <div className="card" style={{textAlign: 'center'}}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary-300)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                3
              </div>
              <h4 className="subsection-heading">Explore Results</h4>
              <p className="page-text">Review your top matches with detailed breed information and care requirements.</p>
            </div>

            <div className="card" style={{textAlign: 'center'}}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'var(--primary-300)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                4
              </div>
              <h4 className="subsection-heading">Find Your Dog</h4>
              <p className="page-text">Use our resources to connect with breeders, rescues, or adoption centers.</p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="card page-section" style={{background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-100) 100%)'}}>
          <h2 className="section-heading">Our Commitment</h2>
          <p className="page-text" style={{fontSize: '1.1rem'}}>
            We're committed to promoting responsible dog ownership and supporting the bond between humans and their canine companions. Our platform is designed to reduce the number of dogs surrendered to shelters by helping families make informed decisions about breed selection.
          </p>
        </div>

        {/* CTA */}
        <div style={{textAlign: 'center'}}>
          <h2 className="section-heading">Ready to Find Your Perfect Match?</h2>
          <Link to="/" className="btn-primary">
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;