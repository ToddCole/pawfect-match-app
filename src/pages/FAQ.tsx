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
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-500">
            Find answers to common questions about our breed matching service and dog ownership.
          </p>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-primary-400 mb-6 border-l-4 border-primary-300 pl-4">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const questionId = categoryIndex * 100 + questionIndex;
                const isOpen = openQuestion === questionId;
                
                return (
                  <div key={questionIndex} className="card">
                    <button
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      className="w-full text-left flex justify-between items-start"
                    >
                      <h3 className="text-lg font-semibold text-primary-400 pr-4">
                        {faq.question}
                      </h3>
                      <span className={`text-primary-300 text-xl transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}>
                        ⌄
                      </span>
                    </button>
                    
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-primary-200">
                        <p className="text-primary-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact section */}
        <div className="card bg-gradient-to-r from-primary-200 to-primary-100 border-primary-200 text-center mt-16">
          <h2 className="text-2xl font-bold text-primary-400 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-primary-500 mb-6">
            Can't find what you're looking for? We're here to help!
          </p>
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;