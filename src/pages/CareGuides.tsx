import React from 'react';

const CareGuides: React.FC = () => {
  const careTopics = [
    {
      icon: '🍖',
      title: 'Nutrition & Feeding',
      description: 'Learn about proper nutrition, feeding schedules, and dietary requirements for different breeds.',
      topics: [
        'Puppy feeding guidelines',
        'Adult dog nutrition requirements', 
        'Senior dog dietary needs',
        'Common food allergies to avoid'
      ]
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Understand vaccination schedules, common health issues, and preventive care.',
      topics: [
        'Vaccination schedules by age',
        'Common health warning signs',
        'Preventive care routines',
        'When to contact your vet'
      ]
    },
    {
      icon: '🎓',
      title: 'Training & Behavior',
      description: 'Master basic training techniques and understand dog behavior patterns.',
      topics: [
        'House training fundamentals',
        'Basic obedience commands',
        'Socialization techniques',
        'Positive reinforcement methods'
      ]
    },
    {
      icon: '✂️',
      title: 'Grooming & Hygiene',
      description: 'Keep your dog clean and healthy with proper grooming techniques.',
      topics: [
        'Brushing and coat care',
        'Nail trimming basics',
        'Dental care routines',
        'Bathing best practices'
      ]
    },
    {
      icon: '🎾',
      title: 'Exercise & Play',
      description: 'Discover the right amount and type of exercise for your dog\'s breed and age.',
      topics: [
        'Daily exercise requirements',
        'Age-appropriate activities',
        'Mental stimulation games',
        'Seasonal exercise considerations'
      ]
    },
    {
      icon: '🏠',
      title: 'Home Preparation',
      description: 'Prepare your home and create a safe, comfortable environment for your new pet.',
      topics: [
        'Puppy-proofing your home',
        'Essential supplies checklist',
        'Creating safe spaces',
        'Emergency preparedness'
      ]
    }
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Dog Care Guides</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
          Essential information to help you care for your new furry friend.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {careTopics.map((topic, index) => (
            <div key={index} className="card">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>{topic.icon}</div>
              <h3 className="subsection-heading">{topic.title}</h3>
              <p className="page-text">{topic.description}</p>
              
              <ul className="page-list">
                {topic.topics.map((item, itemIndex) => (
                  <li key={itemIndex} style={{display: 'flex', alignItems: 'flex-start'}}>
                    <span style={{color: 'var(--primary-300)', marginRight: '0.75rem', fontWeight: 'bold'}}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="page-section">
          <div className="card" style={{background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-100) 100%)', textAlign: 'center'}}>
            <h2 className="section-heading">Need More Help?</h2>
            <p className="page-text" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
              Our care guides provide a foundation for dog ownership, but every dog is unique. 
              Consult with veterinarians and professional trainers for personalized advice.
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>
              <button className="btn-secondary">Find a Veterinarian</button>
              <button className="btn-secondary">Locate Dog Trainers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuides;