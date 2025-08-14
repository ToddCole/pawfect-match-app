// User types
export interface User {
  id: string;
  email: string;
  created_at: string;
  profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  user_id: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  updated_at: string;
}

// Quiz types
export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  value: string;
  traits: string[];
}

export interface QuizAnswer {
  questionId: number;
  selectedOptionIndex: number;
}

export interface QuizResult {
  id?: string;
  user_id?: string;
  answers: QuizAnswer[];
  traits: string[];
  matches: BreedMatch[];
  created_at?: string;
}

// Breed types
export interface Breed {
  id?: string;
  name: string;
  traits: string[];
  description: string;
  size: 'small' | 'medium' | 'large' | 'giant';
  energy: 'low' | 'moderate' | 'high';
  weight: string;
  height: string;
  lifespan: string;
  grooming: string;
  training: string;
  good_with_kids: string;
  good_with_pets: string;
  temperament: string[];
  origin: string;
  image_url?: string;
}

export interface BreedMatch {
  breed: Breed;
  score: number;
  compatibility: number;
}

// Component types
export interface NavigationProps {
  isAuthenticated?: boolean;
  user?: User | null;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Filter types
export interface BreedFilters {
  size: 'all' | 'small' | 'medium' | 'large' | 'giant';
  energy: 'all' | 'low' | 'moderate' | 'high';
  searchTerm: string;
}