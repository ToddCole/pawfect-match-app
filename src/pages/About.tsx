import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-8 text-center">
          About Pawfect Match
        </h1>

        <div className="card mb-12">
          <p className="text-xl text-primary-500 leading-relaxed">
            Pawfect Match uses advanced algorithms to match you with the perfect dog breed based on your lifestyle, living situation, experience level, and personal preferences.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card mb-12 bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200">
          <h2 className="text-3xl font-bold text-primary-400 mb-6">Our Mission</h2>
          <p className="text-lg text-primary-500 leading-relaxed">
            We believe that finding the right dog breed is crucial for creating lasting, happy relationships between families and their canine companions. Our intelligent matching system considers multiple factors to ensure you find a dog that fits seamlessly into your life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">Lifestyle Matching</h3>
            <p className="text-primary-500">
              We consider your living space, activity level, and daily routine to recommend breeds that will thrive in your environment.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">Personalized Results</h3>
            <p className="text-primary-500">
              Get detailed breed recommendations with care requirements, temperament information, and compatibility scores.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-300 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">📚</span>
            </div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">Expert Knowledge</h3>
            <p className="text-primary-500">
              Our database includes comprehensive breed information compiled from veterinarians, dog trainers, and breed experts.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary-400 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-bold text-primary-400 mb-2">Take Our Quiz</h4>
              <p className="text-primary-500">Answer questions about your lifestyle, experience, and preferences.</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-bold text-primary-400 mb-2">Get Matched</h4>
              <p className="text-primary-500">Our algorithm analyzes your responses and compares them to breed characteristics.</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-bold text-primary-400 mb-2">Explore Results</h4>
              <p className="text-primary-500">Review your top matches with detailed breed information and care requirements.</p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h4 className="text-lg font-bold text-primary-400 mb-2">Find Your Dog</h4>
              <p className="text-primary-500">Use our resources to connect with breeders, rescues, or adoption centers.</p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="card bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200 mb-12">
          <h2 className="text-3xl font-bold text-primary-400 mb-6">Our Commitment</h2>
          <p className="text-lg text-primary-500 leading-relaxed">
            We're committed to promoting responsible dog ownership and supporting the bond between humans and their canine companions. Our platform is designed to reduce the number of dogs surrendered to shelters by helping families make informed decisions about breed selection.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Ready to Find Your Perfect Match?</h2>
          <Link
            to="/"
            className="btn-primary"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;