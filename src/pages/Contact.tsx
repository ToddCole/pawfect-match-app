import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
          Have a question, suggestion, or need help? We'd love to hear from you!
        </p>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="card">
            <h2 className="section-heading">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Question</option>
                  <option value="breed-recommendation">Breed Recommendation Issue</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback or Suggestion</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn-primary" style={{width: '100%'}}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="card" style={{marginBottom: '2rem'}}>
              <h2 className="section-heading">Get in Touch</h2>
              <div className="contact-info">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>support@pawfectmatch.com</p>
                  <p style={{fontSize: '0.9rem'}}>We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-icon">⏰</div>
                <div className="contact-details">
                  <h3>Response Time</h3>
                  <p>Monday - Friday: Within 24 hours</p>
                  <p>Weekends: Within 48 hours</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="page-text">
                Before reaching out, you might find your answer in our FAQ section.
              </p>
              <button className="btn-secondary">View FAQ</button>
            </div>
          </div>
        </div>

        {/* Quick Help */}
        <div className="page-section">
          <div className="card" style={{background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-100) 100%)'}}>
            <h2 className="section-heading" style={{textAlign: 'center'}}>Quick Help</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center'}}>
              <div>
                <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>🎯</div>
                <h3 className="subsection-heading">Breed Matching Issues</h3>
                <p className="page-text" style={{fontSize: '0.9rem'}}>
                  Having trouble with quiz results or recommendations? We can help troubleshoot.
                </p>
              </div>
              <div>
                <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>💻</div>
                <h3 className="subsection-heading">Technical Problems</h3>
                <p className="page-text" style={{fontSize: '0.9rem'}}>
                  Website not working properly? Let us know what browser and device you're using.
                </p>
              </div>
              <div>
                <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>💡</div>
                <h3 className="subsection-heading">Suggestions</h3>
                <p className="page-text" style={{fontSize: '0.9rem'}}>
                  Have ideas to make Pawfect Match better? We value your feedback!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;