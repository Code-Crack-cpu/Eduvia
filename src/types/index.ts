export type ExamTrack = 'NEET' | 'JEE';

export interface SubjectMastery {
  subject: string;
  score: number; // percentage 0 - 100
  status: 'Mastered' | 'In Progress' | 'Needs Attention';
  criticalTopic: string;
  yieldScore: string;
}

export interface DiagnosticData {
  track: ExamTrack;
  targetRank: string;
  predictedScore: string;
  maxScore: string;
  percentile: string;
  accuracy: number;
  weakAreaCount: number;
  recommendedTopic: {
    title: string;
    chapter: string;
    subject: string;
    potentialGain: string;
    prepTimeMinutes: number;
    urgency: 'High' | 'Medium';
    reason: string;
  };
  subjects: SubjectMastery[];
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  track: ExamTrack;
  persona: string;
  scenario: string;
  quote: string;
  metricLabel: string;
  metricGain: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tag: string;
  details: string[];
}

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  phone?: string;
  exam: ExamTrack;
  targetYear: string;
  currentClass: 'Class 11' | 'Class 12' | 'Dropper';
}
