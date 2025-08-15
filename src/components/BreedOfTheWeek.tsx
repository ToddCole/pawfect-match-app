import React from 'react';

const BreedOfTheWeek: React.FC = () => {
  const breeds = [
    { name: 'Golden Retriever', image: '/images/golden-retriever.jpg' },
    { name: 'Australian Shepherd', image: '/images/australian-shepherd.jpg' },
    { name: 'French Bulldog', image: '/images/french-bulldog.jpg' },
  ];

  return (
    <div>
      <section className="breed-of-the-week">
        <h2>Breed of the Week</h2>
        <div className="carousel">
          {breeds.map((breed, index) => (
            <div key={index} className="carousel-item">
              <img src={breed.image} alt={breed.name} />
              <h3>{breed.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="care-guides">
        <h2>Featured Care Guides</h2>
        <div className="guides-grid">
          <div className="guide-card">
            <h3>Training Tips</h3>
            <p>Learn how to train your dog effectively with expert advice.</p>
          </div>
          <div className="guide-card">
            <h3>Nutrition Guide</h3>
            <p>Discover the best diet for your dog's health and happiness.</p>
          </div>
          <div className="guide-card">
            <h3>Health Checklist</h3>
            <p>Keep your dog healthy with regular checkups and care routines.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Dog Owners Say</h2>
        <div className="testimonial-grid">
          <blockquote>
            <p>"Pawfect Match helped us find the perfect companion for our family!"</p>
            <cite>- Sarah & Max</cite>
          </blockquote>
          <blockquote>
            <p>"The breed matching quiz was so accurate and easy to use."</p>
            <cite>- John & Bella</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default BreedOfTheWeek;