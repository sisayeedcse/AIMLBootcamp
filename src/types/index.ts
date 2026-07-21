export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineStage {
  stage: number;
  title: string;
  description: string;
  topics: string[];
  icon: string;
  color: string;
}

export interface CurriculumModule {
  title: string;
  duration?: string;
  topics: string[];
  description?: string;
}

export interface CurriculumPhase {
  phase: string;
  type: 'online' | 'offline';
  dates: string;
  modules: CurriculumModule[];
}

export interface ScheduleDay {
  day: number;
  date: string;
  type: 'online' | 'offline';
  title: string;
  sessions: ScheduleSession[];
}

export interface ScheduleSession {
  time: string;
  topic: string;
  instructor?: string;
  type: 'lecture' | 'lab' | 'project' | 'break' | 'keynote';
  outcome?: string;
}

export interface TechItem {
  name: string;
  category: string;
  color: string;
  description: string;
}

export interface Award {
  title: string;
  icon: string;
  description: string;
}

export interface RegistrationTier {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  institution?: string;
  quote: string;
  rating: number;
  avatar?: string;
  batch?: string;
}

export interface Speaker {
  name: string;
  role: string;
  organization: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface BenefitCard {
  icon: string;
  title: string;
  description: string;
  color?: string;
}
