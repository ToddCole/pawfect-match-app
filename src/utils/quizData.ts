import type { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your living situation?",
    options: [
      { text: "Apartment/Condo", value: "apartment", traits: ["small", "low_exercise"] },
      { text: "House with small yard", value: "small_yard", traits: ["medium", "moderate_exercise"] },
      { text: "House with large yard", value: "large_yard", traits: ["large", "high_exercise"] },
      { text: "Farm/Rural property", value: "farm", traits: ["large", "high_exercise", "working"] }
    ]
  },
  {
    id: 2,
    question: "How active are you?",
    options: [
      { text: "Low activity (prefer indoor activities)", value: "low", traits: ["low_exercise", "calm"] },
      { text: "Moderate activity (daily walks, weekend outings)", value: "moderate", traits: ["moderate_exercise"] },
      { text: "High activity (running, hiking, outdoor sports)", value: "high", traits: ["high_exercise", "energetic"] },
      { text: "Very active (athlete, outdoor enthusiast)", value: "very_high", traits: ["high_exercise", "working", "energetic"] }
    ]
  },
  {
    id: 3,
    question: "Experience with dogs?",
    options: [
      { text: "First-time dog owner", value: "beginner", traits: ["easy_training", "gentle"] },
      { text: "Some experience", value: "some", traits: ["moderate_training"] },
      { text: "Very experienced", value: "experienced", traits: ["challenging_training", "working"] },
      { text: "Professional/Breeder", value: "expert", traits: ["challenging_training", "working", "specialized"] }
    ]
  },
  {
    id: 4,
    question: "How much time can you dedicate to grooming?",
    options: [
      { text: "Minimal (occasional brushing)", value: "minimal", traits: ["low_grooming"] },
      { text: "Moderate (weekly grooming)", value: "moderate", traits: ["moderate_grooming"] },
      { text: "High (daily brushing, regular professional grooming)", value: "high", traits: ["high_grooming"] },
      { text: "I love grooming and don't mind daily maintenance", value: "enjoy", traits: ["high_grooming", "show_quality"] }
    ]
  },
  {
    id: 5,
    question: "Family situation?",
    options: [
      { text: "Single person/Couple with no kids", value: "adults_only", traits: ["independent"] },
      { text: "Family with young children (under 10)", value: "young_kids", traits: ["gentle", "patient", "family_friendly"] },
      { text: "Family with older children/teens", value: "older_kids", traits: ["family_friendly", "energetic"] },
      { text: "Multi-generational household", value: "multi_gen", traits: ["gentle", "adaptable"] }
    ]
  },
  {
    id: 6,
    question: "What size dog do you prefer?",
    options: [
      { text: "Small (under 25 lbs)", value: "small", traits: ["small", "lap_dog"] },
      { text: "Medium (25-60 lbs)", value: "medium", traits: ["medium"] },
      { text: "Large (60-90 lbs)", value: "large", traits: ["large"] },
      { text: "Giant (over 90 lbs)", value: "giant", traits: ["giant", "gentle_giant"] }
    ]
  },
  {
    id: 7,
    question: "What's your primary reason for getting a dog?",
    options: [
      { text: "Companionship/Family pet", value: "companion", traits: ["gentle", "family_friendly"] },
      { text: "Protection/Guard dog", value: "protection", traits: ["protective", "loyal", "large"] },
      { text: "Outdoor activities/Exercise partner", value: "exercise", traits: ["high_exercise", "energetic"] },
      { text: "Therapy/Emotional support", value: "therapy", traits: ["calm", "gentle", "intuitive"] }
    ]
  }
];