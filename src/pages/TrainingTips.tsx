import React from 'react';

const TrainingTips: React.FC = () => {
  const trainingTopics = [
    {
      icon: '🏠',
      title: 'House Training',
      description: 'Master the fundamentals of house training your puppy or adult dog.',
      tips: [
        'Establish a consistent schedule for meals and potty breaks',
        'Choose a designated potty area and stick to it',
        'Reward immediately when your dog goes in the right place',
        'Never punish accidents - clean thoroughly and move on'
      ]
    },
    {
      icon: '👂',
      title: 'Basic Commands',
      description: 'Essential commands every dog should know for safety and good behavior.',
      tips: [
        'Start with "sit" - it\'s the foundation for other commands',
        'Use "stay" to teach impulse control and patience',
        'Master "come" for reliable recall in any situation',
        'Practice "down" for calm, relaxed behavior'
      ]
    },
    {
      icon: '🐕',
      title: 'Leash Training',
      description: 'Teach your dog to walk politely on a leash without pulling.',
      tips: [
        'Start with short sessions in a distraction-free environment',
        'Stop moving when your dog pulls - don\'t reward pulling',
        'Use treats to encourage your dog to walk beside you',
        'Practice direction changes to keep your dog engaged'
      ]
    },
    {
      icon: '👥',
      title: 'Socialization',
      description: 'Help your dog become comfortable with people, animals, and new situations.',
      tips: [
        'Start early - puppies are most receptive between 3-14 weeks',
        'Expose your dog to various sounds, sights, and textures',
        'Arrange positive meetings with other dogs and people',
        'Keep experiences positive and never force interactions'
      ]
    },
    {
      icon: '🚫',
      title: 'Problem Behaviors',
      description: 'Address common behavioral issues with positive training methods.',
      tips: [
        'Redirect destructive chewing to appropriate toys',
        'Ignore attention-seeking behaviors like jumping',
        'Provide mental stimulation to prevent boredom-related issues',
        'Consistency is key - everyone in the household should follow the same rules'
      ]
    },
    {
      icon: '🎾',
      title: 'Mental Stimulation',
      description: 'Keep your dog\'s mind active with engaging activities and games.',
      tips: [
        'Use puzzle toys and treat-dispensing games',
        'Practice "find it" games with hidden treats',
        'Teach new tricks regularly to keep learning fun',
        'Rotate toys weekly to maintain interest and novelty'
      ]
    }
  ];

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Training Tips</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
          Proven training techniques to help you build a strong, positive relationship with your dog.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {trainingTopics.map((topic, index) => (
            <div key={index} className="card">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>{topic.icon}</div>
              <h3 className="subsection-heading">{topic.title}</h3>
              <p className="page-text">{topic.description}</p>
              
              <ul className="space-y-3">
                {topic.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <span className="text-primary-300 mr-3 mt-1 font-bold">💡</span>
                    <span className="text-primary-500 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Training Principles */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200">
            <h2 className="text-3xl font-bold text-primary-400 mb-6 text-center">Core Training Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <h4 className="font-bold text-primary-400 mb-2">Consistency</h4>
                <p className="text-primary-500 text-sm">Train at the same times daily for best results</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h4 className="font-bold text-primary-400 mb-2">Positive Reinforcement</h4>
                <p className="text-primary-500 text-sm">Reward good behavior immediately</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⏳</div>
                <h4 className="font-bold text-primary-400 mb-2">Patience</h4>
                <p className="text-primary-500 text-sm">Every dog learns at their own pace</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-primary-400 mb-2">Short Sessions</h4>
                <p className="text-primary-500 text-sm">5-10 minutes keeps attention focused</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Help */}
        <div className="mt-12">
          <div className="card text-center">
            <h2 className="text-3xl font-bold text-primary-400 mb-4">Need Professional Help?</h2>
            <p className="text-lg text-primary-500 mb-6">
              While these tips cover the basics, some dogs benefit from professional training, especially for behavioral issues or advanced training goals.
            </p>
            <button className="btn-primary">
              Find Local Trainers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingTips;