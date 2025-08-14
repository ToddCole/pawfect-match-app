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
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Dog Care Guides
          </h1>
          <p className="text-xl text-primary-500">
            Essential information to help you care for your new furry friend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careTopics.map((topic, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-center">{topic.icon}</div>
              <h3 className="text-2xl font-bold text-primary-400 mb-4">{topic.title}</h3>
              <p className="text-primary-500 mb-6 leading-relaxed">{topic.description}</p>
              
              <ul className="space-y-3">
                {topic.topics.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary-300 mr-3 mt-1 font-bold">✓</span>
                    <span className="text-primary-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200 text-center">
            <h2 className="text-3xl font-bold text-primary-400 mb-6">Need More Help?</h2>
            <p className="text-lg text-primary-500 mb-8">
              Our care guides provide a foundation for dog ownership, but every dog is unique. 
              Consult with veterinarians and professional trainers for personalized advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Find a Veterinarian
              </button>
              <button className="btn-secondary">
                Locate Dog Trainers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareGuides;