import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does the breed matching work?",
          answer: "Our algorithm analyzes your lifestyle, living situation, experience level, and preferences to match you with dog breeds that align with your needs. We consider factors like exercise requirements, grooming needs, temperament, and compatibility with children or other pets."
        },
        {
          question: "How accurate are the breed recommendations?",
          answer: "Our recommendations are based on extensive breed research and data, but every dog is unique. Our matches provide a starting point for your research, but we recommend meeting dogs in person and consulting with breeders, shelters, or veterinarians before making a final decision."
        },
        {
          question: "Is the quiz free to take?",
          answer: "Yes! Our breed matching quiz is completely free to take. You can retake it as many times as you'd like if your circumstances change."
        }
      ]
    },
    {
      category: "Breed Information",
      questions: [
        {
          question: "How many dog breeds are in your database?",
          answer: "We have detailed information on over 200 dog breeds, including both purebreds and some popular mixed breeds. Our database includes breeds recognized by major kennel clubs as well as emerging designer breeds."
        },
        {
          question: "Where does your breed information come from?",
          answer: "Our breed data is compiled from reputable sources including veterinary organizations, breed-specific clubs, professional dog trainers, and academic research on canine behavior and genetics."
        },
        {
          question: "Do you include information about mixed breeds?",
          answer: "Yes, we include information about popular mixed breeds and designer dogs. However, mixed breed characteristics can vary widely, so we provide general guidance while emphasizing the importance of meeting individual dogs."
        }
      ]
    },
    {
      category: "Finding Dogs",
      questions: [
        {
          question: "Do you help me find specific dogs for adoption?",
          answer: "While we don't directly connect you with specific dogs, we provide guidance on finding reputable breeders, rescue organizations, and adoption centers. Our breed recommendations help you know what to look for when searching adoption websites or contacting breeders."
        },
        {
          question: "Should I buy from a breeder or adopt from a shelter?",
          answer: "Both options have benefits! Shelters have many wonderful dogs needing homes, including purebreds and mixes. Reputable breeders can provide predictable traits and health testing. We encourage you to consider all options and choose what works best for your situation."
        },
        {
          question: "How do I find a reputable breeder?",
          answer: "Look for breeders who health test their breeding dogs, provide health guarantees, allow you to meet the puppy's parents, and are involved in breed-specific activities. Avoid puppy mills and pet stores. We provide resources to help you identify responsible breeders."
        }
      ]
    },
    {
      category: "Dog Care",
      questions: [
        {
          question: "What if I'm a first-time dog owner?",
          answer: "Our quiz identifies beginner-friendly breeds that are typically easier to train and care for. We also provide extensive care guides and training tips to help new owners succeed. Consider starting with breeds known for being adaptable and eager to please."
        },
        {
          question: "Can you help with training and behavior issues?",
          answer: "We provide general training tips and behavior guidance, but for specific issues or advanced training, we recommend consulting with professional dog trainers or animal behaviorists who can work with you and your dog directly."
        },
        {
          question: "What about ongoing costs of dog ownership?",
          answer: "Dog ownership costs vary by breed size, health needs, and local prices. Budget for food, veterinary care, grooming, supplies, and potential emergency expenses. Larger dogs and breeds with special needs typically cost more to maintain."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const questionId = categoryIndex * 100 + questionIndex;
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
          Find answers to common questions about our breed matching service and dog ownership.
        </p>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="page-section">
            <h2 className="section-heading" style={{borderLeft: '4px solid var(--primary-300)', paddingLeft: '1rem'}}>
              {category.category}
            </h2>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {category.questions.map((faq, questionIndex) => {
                const questionId = categoryIndex * 100 + questionIndex;
                const isOpen = openQuestion === questionId;
                
                return (
                  <div key={questionIndex} className="faq-item">
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="faq-question"
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{paddingRight: '1rem'}}>
                        {faq.question}
                      </span>
                      <span style={{
                        color: 'var(--primary-300)',
                        fontSize: '1.2rem',
                        transition: 'transform 0.2s',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        ⌄
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact section */}
        <div className="card page-section" style={{
          background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-100) 100%)',
          textAlign: 'center'
        }}>
          <h2 className="section-heading">Still Have Questions?</h2>
          <p className="page-text" style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            Can't find what you're looking for? We're here to help!
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;