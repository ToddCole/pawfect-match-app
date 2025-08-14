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
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-500">
            Have a question, suggestion, or need help? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold text-primary-400 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-primary-400 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
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

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="card mb-8">
              <h2 className="text-2xl font-bold text-primary-400 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h3 className="font-semibold text-primary-400">Email</h3>
                    <p className="text-primary-500">support@pawfectmatch.com</p>
                    <p className="text-sm text-primary-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-semibold text-primary-400">Response Time</h3>
                    <p className="text-primary-500">Monday - Friday: Within 24 hours</p>
                    <p className="text-primary-500">Weekends: Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-primary-400 mb-4">Frequently Asked Questions</h2>
              <p className="text-primary-500 mb-4">
                Before reaching out, you might find your answer in our FAQ section.
              </p>
              <button className="btn-secondary">
                View FAQ
              </button>
            </div>
          </div>
        </div>

        {/* Quick Help */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200">
            <h2 className="text-2xl font-bold text-primary-400 mb-6 text-center">Quick Help</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-primary-400 mb-2">Breed Matching Issues</h3>
                <p className="text-primary-500 text-sm">
                  Having trouble with quiz results or recommendations? We can help troubleshoot.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-primary-400 mb-2">Technical Problems</h3>
                <p className="text-primary-500 text-sm">
                  Website not working properly? Let us know what browser and device you're using.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold text-primary-400 mb-2">Suggestions</h3>
                <p className="text-primary-500 text-sm">
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