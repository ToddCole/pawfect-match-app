import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Terms of Service</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem'}}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="card page-section">
          <h2 className="section-heading">1. Acceptance of Terms</h2>
          <p className="page-text">
            By accessing and using Pawfect Match, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">2. Description of Service</h2>
          <p className="page-text">
            Pawfect Match provides a dog breed matching service that helps users find suitable dog breeds based on their lifestyle and preferences. 
            Our service includes:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Interactive lifestyle and preference questionnaires</li>
            <li>Algorithm-based breed matching recommendations</li>
            <li>Breed information and care guides</li>
            <li>Educational content about dog ownership</li>
          </ul>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">3. User Responsibilities</h2>
          <p className="page-text">
            As a user of Pawfect Match, you agree to:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>Provide accurate information when completing questionnaires</li>
            <li>Use the service for personal, non-commercial purposes only</li>
            <li>Not attempt to reverse engineer or copy our matching algorithms</li>
            <li>Respect intellectual property rights of all content provided</li>
            <li>Conduct your own research before making pet adoption decisions</li>
          </ul>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">4. Disclaimer of Warranties</h2>
          <p className="page-text">
            Pawfect Match is provided as an informational tool. We make no guarantees about:
          </p>
          <ul className="list-disc list-inside text-primary-500 space-y-2 ml-4">
            <li>The accuracy or completeness of breed matching results</li>
            <li>The suitability of recommended breeds for your specific situation</li>
            <li>The availability of recommended breeds in your area</li>
            <li>The behavior or characteristics of individual dogs</li>
          </ul>
          <p className="text-primary-500 leading-relaxed mt-4">
            <strong>Important:</strong> Always consult with veterinarians, professional breeders, and animal behaviorists 
            before making decisions about pet adoption or care.
          </p>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">5. Limitation of Liability</h2>
          <p className="text-primary-500 leading-relaxed">
            Pawfect Match and its operators will not be liable for any direct, indirect, incidental, special, 
            or consequential damages arising from your use of this service, including but not limited to decisions 
            made regarding pet adoption, care, or training based on our recommendations.
          </p>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">6. Privacy</h2>
          <p className="text-primary-500 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
            to understand our practices regarding the collection and use of your personal information.
          </p>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">7. Modifications to Service</h2>
          <p className="text-primary-500 leading-relaxed">
            We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) 
            with or without notice at any time. We shall not be liable for any modification, suspension, or discontinuation of the service.
          </p>
        </div>

        <div className="card page-section">
          <h2 className="section-heading">8. Changes to Terms</h2>
          <p className="text-primary-500 leading-relaxed">
            We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting. 
            Your continued use of the service after any changes constitutes acceptance of those changes.
          </p>
        </div>

        <div className="card">
          <h2 className="section-heading">9. Contact Information</h2>
          <p className="text-primary-500 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us through our Contact page 
            or email us at legal@pawfectmatch.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;