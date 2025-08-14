import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">1. Information We Collect</h2>
          <p className="text-primary-500 leading-relaxed mb-4">
            We collect information you provide directly to us when using Pawfect Match, including:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Responses to our lifestyle and preference questionnaires</li>
            <li>Demographic information (age, location, household composition)</li>
            <li>Contact information when you reach out to us</li>
            <li>Usage data about how you interact with our service</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">2. How We Use Your Information</h2>
          <p className="text-primary-500 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Provide personalized dog breed recommendations</li>
            <li>Improve our matching algorithms and user experience</li>
            <li>Send you relevant content and updates (with your consent)</li>
            <li>Respond to your questions and support requests</li>
            <li>Analyze usage patterns to enhance our service</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">3. Information Sharing</h2>
          <p className="text-primary-500 leading-relaxed mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or court orders</li>
            <li>To protect our rights, property, or safety, or that of others</li>
            <li>With service providers who assist in operating our website (under strict confidentiality agreements)</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">4. Data Security</h2>
          <p className="text-primary-500 leading-relaxed">
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">5. Cookies and Tracking</h2>
          <p className="text-primary-500 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Remember your preferences and quiz progress</li>
            <li>Analyze how our service is used and accessed</li>
            <li>Improve website functionality and user experience</li>
          </ul>
          <p className="text-primary-500 leading-relaxed mt-4">
            You can control cookie settings through your browser preferences.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">6. Your Rights</h2>
          <p className="text-primary-500 leading-relaxed mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Access: Request copies of your personal data</li>
            <li>Rectification: Request correction of inaccurate data</li>
            <li>Erasure: Request deletion of your personal data</li>
            <li>Portability: Request transfer of your data to another service</li>
            <li>Objection: Object to processing of your personal data</li>
          </ul>
          <p className="text-primary-500 leading-relaxed mt-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">7. Children's Privacy</h2>
          <p className="text-primary-500 leading-relaxed">
            Pawfect Match is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you are a parent or guardian and believe your child has provided 
            us with personal information, please contact us immediately.
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">8. Changes to This Policy</h2>
          <p className="text-primary-500 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
            new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this 
            Privacy Policy periodically for any changes.
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">9. Contact Us</h2>
          <p className="text-primary-500 leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 text-primary-500">
            <p>Email: privacy@pawfectmatch.com</p>
            <p>Or use our Contact page to send us a message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;