import { DiagnosticData, FeatureItem, TestimonialItem, BenefitItem, StepItem } from '../types';

export const neetDiagnosticData: DiagnosticData = {
  track: 'NEET',
  targetRank: 'Top 5,000 (Target AIIMS / GMC)',
  predictedScore: '668',
  maxScore: '720',
  percentile: '98.8%',
  accuracy: 84.6,
  weakAreaCount: 4,
  recommendedTopic: {
    title: 'Rotational Mechanics — Moment of Inertia & Rolling Motion',
    chapter: 'System of Particles & Rotational Dynamics',
    subject: 'Physics',
    potentialGain: '+8 to +12 Marks',
    prepTimeMinutes: 45,
    urgency: 'High',
    reason: 'Diagnostic test detected 3 conceptual errors on torque equilibrium. High recurring weightage in NEET (2-3 questions every year).'
  },
  subjects: [
    {
      subject: 'Biology (Botany & Zoology)',
      score: 92,
      status: 'Mastered',
      criticalTopic: 'Plant Physiology & Molecular Genetics',
      yieldScore: '330 / 360'
    },
    {
      subject: 'Chemistry',
      score: 83,
      status: 'In Progress',
      criticalTopic: 'Ionic Equilibrium & Coordination Compounds',
      yieldScore: '148 / 180'
    },
    {
      subject: 'Physics',
      score: 74,
      status: 'Needs Attention',
      criticalTopic: 'Rotational Dynamics & Wave Optics',
      yieldScore: '132 / 180'
    }
  ]
};

export const jeeDiagnosticData: DiagnosticData = {
  track: 'JEE',
  targetRank: 'Top 2,500 (Target IIT Bombay / Delhi / Madras)',
  predictedScore: '238',
  maxScore: '300',
  percentile: '99.35%ile',
  accuracy: 81.2,
  weakAreaCount: 5,
  recommendedTopic: {
    title: 'Differential Calculus — Application of Derivatives (Max/Min)',
    chapter: 'Calculus',
    subject: 'Mathematics',
    potentialGain: '+8 Marks',
    prepTimeMinutes: 50,
    urgency: 'High',
    reason: 'Frequent sign flips on multi-variable constraints observed in JEE Main Mock 04. High yield topic.'
  },
  subjects: [
    {
      subject: 'Mathematics',
      score: 72,
      status: 'Needs Attention',
      criticalTopic: 'Application of Derivatives & Probability',
      yieldScore: '72 / 100'
    },
    {
      subject: 'Physics',
      score: 88,
      status: 'In Progress',
      criticalTopic: 'Electromagnetic Induction & Modern Physics',
      yieldScore: '86 / 100'
    },
    {
      subject: 'Chemistry',
      score: 91,
      status: 'Mastered',
      criticalTopic: 'Thermodynamics & Organic Reaction Mechanisms',
      yieldScore: '90 / 100'
    }
  ]
};

export const featuresList: FeatureItem[] = [
  {
    id: 'learning-paths',
    title: 'AI Learning Paths',
    tagline: 'Dynamic daily syllabus mapped to your exact brain retention curve.',
    description: 'Never wonder what to open at 7:00 AM. Eduvia analyzes your previous day’s mistake logs, exam syllabus urgency, and cognitive decay rates to generate a laser-focused daily micro-plan.',
    benefits: [
      'Daily 3-task prioritized study queue',
      'Knowledge-graph mapping over 130+ chapters',
      'Re-calibrates immediately when you miss a study day'
    ],
    badge: 'Cognitive Engine'
  },
  {
    id: 'adaptive-mock-tests',
    title: 'Adaptive Mock Tests',
    tagline: 'Questions that challenge your edge, not waste your time on what you already know.',
    description: 'Static test papers treat everyone the same. Eduvia’s adaptive testing algorithm dynamically calibrates question difficulty (Easy → Moderate → Multi-concept NTA Level) based on your live submission speed and confidence.',
    benefits: [
      'Exact NTA examination UI & timing simulation',
      'Granular time-spent-per-question telemetry',
      'Instant post-test concept attribution breakdown'
    ],
    badge: 'Real NTA Sim'
  },
  {
    id: 'expert-mentorship',
    title: 'Expert Mentorship & AI Doubts',
    tagline: '24/7 instant AI reasoning paired with human mentor accountability.',
    description: 'Stuck on a tricky organic mechanism or 3D kinematics diagram at midnight? Get instant step-by-step mathematical derivations from the Eduvia AI tutor, backed by periodic sanity-check sessions with top rankers.',
    benefits: [
      'Multi-modal diagram & latex formula parsing',
      'Socratic hints that teach you how to think, not just give the final answer',
      'Weekly motivation & routine check-ins with peer mentors'
    ],
    badge: '24/7 Guidance'
  },
  {
    id: 'progress-tracking',
    title: 'Intelligent Progress Tracking',
    tagline: 'Actionable diagnostic radar instead of meaningless percentage scores.',
    description: 'A 70% in Physics is useless without knowing which concepts caused the 30% drop. Eduvia separates errors into Conceptual Gaps, Calculation Slips, and Speed Penalties so you fix the root cause.',
    benefits: [
      '3-dimensional error classification (Concept vs Speed vs Silly)',
      'Projected All-India Rank (AIR) band forecast',
      'Revision countdown for topics approaching forgetting threshold'
    ],
    badge: 'Telemetry AI'
  }
];

export const howItWorksSteps: StepItem[] = [
  {
    number: '01',
    title: 'Assess',
    tagline: '25-Minute Diagnostic Snapshot',
    description: 'Take an initial diagnostic across Core Physics, Chemistry, and Biology/Maths. Eduvia diagnoses your conceptual baseline, speed per question, and retention gaps.',
    tag: 'Baseline Calibration',
    details: ['Micro-diagnostic test', 'Error classification', 'Knowledge-graph baseline']
  },
  {
    number: '02',
    title: 'Personalize',
    tagline: 'Custom Day-by-Day Learning Blueprint',
    description: 'The AI engine generates your personalized roadmap. Instead of copying a topper’s schedule, your study hours are weighted 70% toward high-yield weak chapters and 30% on retention.',
    tag: 'Algorithmic Planning',
    details: ['Tailored daily goals', 'High-yield chapter ranking', 'Spaced revision pacing']
  },
  {
    number: '03',
    title: 'Practice',
    tagline: 'Targeted Adaptive Problem Sets',
    description: 'Solve curated problems tagged by cognitive depth. As your accuracy improves, Eduvia introduces tricky assertion-reason and multi-statement questions common in recent NTA trends.',
    tag: 'Active Mastery',
    details: ['Adaptive difficulty curve', 'Instant Socratic guidance', 'Negative marking awareness']
  },
  {
    number: '04',
    title: 'Improve',
    tagline: 'Continuous Weak-Spot Remediation',
    description: 'Every mistake automatically enters your spaced-repetition Smart Revision Deck. You re-test weak concepts until your retention score turns emerald green.',
    tag: 'Compound Gains',
    details: ['Automated flash remediation', 'AIR band elevation', 'Exam-day calm & readiness']
  }
];

export const benefitsList: BenefitItem[] = [
  {
    icon: 'Compass',
    title: 'Know What to Study',
    description: 'Eliminate morning decision paralysis. Wake up to a pre-computed 3-step action plan optimized for maximum score yield.',
    highlight: 'Zero wasted hours'
  },
  {
    icon: 'Crosshair',
    title: 'Focus on Weak Areas',
    description: 'Instead of re-reading chapters you already know, direct 80% of your energy to the 5 critical sub-topics holding your rank back.',
    highlight: '+30 to +60 marks target'
  },
  {
    icon: 'TrendingUp',
    title: 'Track Measurable Improvement',
    description: 'Watch your concept mastery shift from amber to emerald green with real-time confidence tracking and percentile forecasts.',
    highlight: 'Data-driven proof'
  },
  {
    icon: 'Flame',
    title: 'Build Daily Consistency',
    description: 'Micro-milestones, study streak multipliers, and realistic time allotments designed to prevent burnout during grueling 18-month prep.',
    highlight: 'Anti-burnout rhythm'
  },
  {
    icon: 'Award',
    title: 'Simulate Real Exam Pressure',
    description: 'Adaptive full-syllabus mocks with identical NTA computer-based interface, countdown timers, and negative-marking feedback.',
    highlight: 'NTA Exam parity'
  },
  {
    icon: 'Users',
    title: 'Accessible Guidance',
    description: 'Democratizing high-tier mentorship for students in Tier 2, Tier 3 cities and rural areas who cannot afford ₹2,00,000+ coaching institutes.',
    highlight: 'Inclusive & affordable'
  }
];

export const demoTestimonials: TestimonialItem[] = [
  {
    id: 'demo-1',
    name: 'Aarav Sharma',
    track: 'JEE',
    persona: 'JEE 2026 Aspirant · Class 12',
    scenario: 'Stuck at 120/300 in generic coaching test series',
    quote: 'My coaching batch had 160 students. My doubts in Rotational Dynamics were completely skipped. Eduvia’s diagnostic flagged that I wasn’t understanding torque equilibrium vectors. Practicing just 24 targeted questions pushed my Physics score up by 28 marks.',
    metricLabel: 'Mock Score Delta',
    metricGain: '124 → 188 / 300'
  },
  {
    id: 'demo-2',
    name: 'Sneha Patel',
    track: 'NEET',
    persona: 'NEET 2026 Dropper Cohort',
    scenario: 'Repeater struggling with Physics panic & negative marking',
    quote: 'Biology was always strong, but Physics negative marking kept dragging me down in NEET 2024. Eduvia separated my Physics errors into ‘rush calculation’ vs ‘formula confusion’. Seeing the diagnostic card showed me exactly where I was throwing marks away.',
    metricLabel: 'Accuracy Increase',
    metricGain: '68% → 89% in Physics'
  },
  {
    id: 'demo-3',
    name: 'Rohan Kulkarni',
    track: 'JEE',
    persona: 'JEE Advanced Aspirant · Class 11 to 12',
    scenario: 'Overwhelmed by multiple reference books (Irodov, HC Verma, Cengage)',
    quote: 'I was drowning in 6 different reference books and feeling constantly behind. Eduvia’s AI Learning Path unified everything into one daily queue: what concept to review, which 12 problems to solve, and when to revise.',
    metricLabel: 'Study Efficiency',
    metricGain: 'Saved 3.5 hrs / day'
  },
  {
    id: 'demo-4',
    name: 'Ananya Roy',
    track: 'NEET',
    persona: 'NEET Aspirant · Tier-2 Town Aspirant',
    scenario: 'Self-studying from home without high-cost metro coaching',
    quote: 'High-end coaching in Kota or Delhi was out of my family’s financial reach. Having an AI that explains tricky Botany mechanisms and gives instant feedback on NCERT line-by-line questions made me feel I could compete on an equal footing.',
    metricLabel: 'Syllabus Mastery',
    metricGain: '91% NCERT Coverage'
  }
];

export const problemComparison = [
  {
    category: 'Batch Size & Attention',
    traditional: '120–200 students per batch; individual doubts rarely get answered.',
    eduvia: '1-on-1 personalized AI learning partner available 24/7 for every step.'
  },
  {
    category: 'Study Schedule',
    traditional: 'Rigid, factory-paced syllabus; if you get sick or fall behind, you are lost.',
    eduvia: 'Adaptive schedule that automatically re-balances when you need more time.'
  },
  {
    category: 'Error Feedback',
    traditional: 'Generic score sheets (e.g. “Physics: 34/100”) with zero diagnosis of why.',
    eduvia: 'Granular cognitive root cause: identifies conceptual gaps vs calculation slips.'
  },
  {
    category: 'Question Practice',
    traditional: 'Generic 150-page modules filled with redundant or low-yield questions.',
    eduvia: 'High-yield problem sets prioritized by NTA exam frequency and your weak areas.'
  },
  {
    category: 'Cost & Accessibility',
    traditional: '₹1.5 Lakh to ₹3 Lakh per year + expensive hostel & relocation costs.',
    eduvia: 'Accessible and affordable directly from home on desktop, tablet, or smartphone.'
  }
];
