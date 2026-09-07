import React, { useState } from 'react';
import { Cpu, Brain, ArrowUpRight, Target, BookOpen, Clock, Lightbulb } from 'lucide-react';
import { ExamTrack } from '../types';

interface AIIntelligenceProps {
  currentTrack: ExamTrack;
  onOpenWaitlist: () => void;
}

interface DiagnosticScenario {
  subject: string;
  chapter: string;
  questionSnippet: string;
  studentAnswer: string;
  correctAnswer: string;
  aiClassification: 'Conceptual Flaw' | 'Calculation Trap' | 'Formula Confusion';
  diagnosisDetail: string;
  actionPlan: {
    immediateTask: string;
    estTime: string;
    scoreYield: string;
    conceptKey: string;
  };
}

export const AIIntelligence: React.FC<AIIntelligenceProps> = ({ currentTrack, onOpenWaitlist }) => {
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);

  const neetScenarios: DiagnosticScenario[] = [
    {
      subject: 'Physics',
      chapter: 'Rotational Dynamics',
      questionSnippet: 'A solid cylinder and a hollow sphere of same mass roll down an inclined plane without slipping. Which reaches the bottom first?',
      studentAnswer: 'Selected: Hollow Sphere (Incorrect)',
      correctAnswer: 'Correct: Solid Cylinder',
      aiClassification: 'Conceptual Flaw',
      diagnosisDetail: 'Confusion between moment of inertia (I = 1/2 MR² vs 2/3 MR²) and acceleration formula a = g sinθ / (1 + k²/r²). You prioritized radius distribution instead of rotational inertia fraction.',
      actionPlan: {
        immediateTask: 'Review 3-minute vector derivation on Rolling Acceleration',
        estTime: '15 mins',
        scoreYield: '+4 Marks in NEET Mock 05',
        conceptKey: 'Radius of Gyration (k) Ratio'
      }
    },
    {
      subject: 'Chemistry',
      chapter: 'Electrochemistry',
      questionSnippet: 'Calculate the cell potential E_cell when Zn²⁺ concentration is reduced by a factor of 100 at 298K.',
      studentAnswer: 'Selected: Decrease by 0.059V (Incorrect sign)',
      correctAnswer: 'Correct: Increase by 0.059V',
      aiClassification: 'Calculation Trap',
      diagnosisDetail: 'Sign inversion occurred while converting log([Zn²⁺]/[Cu²⁺]) into the Nernst Equation. You correctly identified n=2 but missed the negative multiplier in the quotient.',
      actionPlan: {
        immediateTask: 'Solve 6 curated Nernst ratio problems with sign verification drill',
        estTime: '20 mins',
        scoreYield: '+4 Marks in Physical Chem',
        conceptKey: 'Reaction Quotient (Q) Sign Rules'
      }
    },
    {
      subject: 'Biology',
      chapter: 'Molecular Basis of Inheritance',
      questionSnippet: 'In the Meselson and Stahl experiment, what was the ratio of hybrid to light DNA after 60 minutes of E. coli replication?',
      studentAnswer: 'Selected: 1:3 (Incorrect generation count)',
      correctAnswer: 'Correct: 2:6 (i.e. 1:3 ratio for hybrid to light, but miscalculated total bands)',
      aiClassification: 'Formula Confusion',
      diagnosisDetail: 'Generation interval of 20 min was miscalculated for Generation 3. You confused intermediate band density with total molecular percentage.',
      actionPlan: {
        immediateTask: 'Interactive DNA Density replication visualizer review',
        estTime: '10 mins',
        scoreYield: '+4 Marks in Genetics',
        conceptKey: 'Semi-conservative Replication Math'
      }
    }
  ];

  const jeeScenarios: DiagnosticScenario[] = [
    {
      subject: 'Mathematics',
      chapter: 'Application of Derivatives',
      questionSnippet: 'Find the minimum distance between the parabola y² = 4x and the circle x² + y² - 8x + 12 = 0.',
      studentAnswer: 'Selected: √5 - 2 (Incorrect normal slope)',
      correctAnswer: 'Correct: 2√5 - 2',
      aiClassification: 'Conceptual Flaw',
      diagnosisDetail: 'Common normal method was abandoned midway for an algebraic distance formula that led to an unsolvable 4th-degree polynomial. The common normal of circle must pass through its center (4,0).',
      actionPlan: {
        immediateTask: 'Master "Common Normal Property" shortcut for conic sections',
        estTime: '25 mins',
        scoreYield: '+4 Marks in JEE Main',
        conceptKey: 'Geometric Normals to Conics'
      }
    },
    {
      subject: 'Physics',
      chapter: 'Electromagnetic Induction',
      questionSnippet: 'A square loop enters a non-uniform magnetic field B(x) = B₀(x/L)k̂ at constant velocity v. Compute the induced EMF.',
      studentAnswer: 'Selected: B₀ v L (Assumed uniform field)',
      correctAnswer: 'Correct: 1/2 B₀ v L (Integration over flux gradient required)',
      aiClassification: 'Conceptual Flaw',
      diagnosisDetail: 'Failure to integrate dΦ = B(x) dA. Treated non-uniform magnetic flux gradient as a constant B·A scalar equation.',
      actionPlan: {
        immediateTask: 'Flux integration drill on 4 differential geometry loop setups',
        estTime: '30 mins',
        scoreYield: '+4 Marks in JEE Adv Physics',
        conceptKey: 'Calculus-based Faraday Flux'
      }
    },
    {
      subject: 'Chemistry',
      chapter: 'Thermodynamics',
      questionSnippet: 'For an adiabatic reversible expansion of an ideal gas, show whether work done exceeds irreversible expansion against constant P_ext.',
      studentAnswer: 'Selected: Irreversible work is greater',
      correctAnswer: 'Correct: Reversible work magnitude is strictly greater',
      aiClassification: 'Formula Confusion',
      diagnosisDetail: 'Confused the area under the P-V curve for reversible versus irreversible path. Reversible path maintains maximum pressure at every infinitesimal step.',
      actionPlan: {
        immediateTask: 'P-V path work comparison flashcards & graph overlay',
        estTime: '15 mins',
        scoreYield: '+4 Marks in Physical Chem',
        conceptKey: 'Indicator Diagrams & Area Work'
      }
    }
  ];

  const activeScenarios = currentTrack === 'NEET' ? neetScenarios : jeeScenarios;
  const currentScenario = activeScenarios[selectedSubjectIndex] || activeScenarios[0];

  return (
    <section id="ai-intelligence" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-navy-500" />
            <span>Deep Diagnostic Telemetry</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-6">
            Inside the AI Diagnostic Engine:{' '}
            <span className="text-navy-700">
              Why you missed that mark.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
            Other platforms tell you what was right or wrong. Eduvia analyzes your cognitive friction point, flags the exact misconception, and serves the cure.
          </p>
        </div>

        {/* Diagnostic Inspector Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-ink-200 shadow-card overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 sm:p-6 bg-ink-50 border-b border-ink-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center">
                <Brain className="w-5 h-5 text-navy-500" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink-900 flex items-center gap-2">
                  <span>Cognitive Friction Inspector</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-success-50 text-success-600 border border-success-200">
                    Live Telemetry
                  </span>
                </h3>
                <p className="text-xs text-ink-400">
                  Select a subject to see real-time student error decomposition
                </p>
              </div>
            </div>

            {/* Subject Selector Buttons */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-ink-200">
              {activeScenarios.map((scenario, idx) => (
                <button
                  key={scenario.subject}
                  type="button"
                  onClick={() => setSelectedSubjectIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedSubjectIndex === idx
                      ? 'bg-navy-700 text-white shadow-soft'
                      : 'text-ink-400 hover:text-ink-600'
                  }`}
                >
                  {scenario.subject}
                </button>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 bg-[#FCFDFE]">
            {/* Question & Mistake Analysis Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Question Context (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-navy-500">
                    {currentScenario.subject} • Chapter: {currentScenario.chapter}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-bold border ${
                      currentScenario.aiClassification === 'Conceptual Flaw'
                        ? 'bg-error-50 text-error-600 border-error-200'
                        : currentScenario.aiClassification === 'Calculation Trap'
                        ? 'bg-warning-50 text-warning-600 border-warning-200'
                        : 'bg-accent-50 text-accent-600 border-accent-200'
                    }`}
                  >
                    Root Cause: {currentScenario.aiClassification}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-ink-50 border border-ink-200 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                    Exam Problem Statement
                  </span>
                  <p className="text-sm text-ink-700 leading-relaxed font-medium">
                    "{currentScenario.questionSnippet}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-error-50 border border-error-200">
                    <span className="text-error-500 font-bold block mb-1">Student Submission</span>
                    <span className="text-ink-600">{currentScenario.studentAnswer}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-success-50 border border-success-200">
                    <span className="text-success-600 font-bold block mb-1">Verified Key</span>
                    <span className="text-ink-600">{currentScenario.correctAnswer}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-50 border border-navy-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy-600">
                    <Lightbulb className="w-4 h-4 text-navy-500" />
                    <span>AI Cognitive Diagnosis</span>
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {currentScenario.diagnosisDetail}
                  </p>
                </div>
              </div>

              {/* Action Remediation Plan (5 cols) */}
              <div className="lg:col-span-5 bg-ink-50 border border-ink-200 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-ink-200 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-success-600 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" />
                      Next Best Action
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-success-50 text-success-600 border border-success-200">
                      {currentScenario.actionPlan.scoreYield}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-ink-400 text-[11px]">Recommended Task:</span>
                      <p className="font-semibold text-ink-800 mt-0.5">
                        {currentScenario.actionPlan.immediateTask}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-ink-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-ink-400" />
                        Time: {currentScenario.actionPlan.estTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-navy-500" />
                        Key: {currentScenario.actionPlan.conceptKey}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-white border border-ink-100 text-[11px] text-ink-500 leading-relaxed">
                      Eduvia's spaced remediation engine guarantees this topic will reappear in your personal drill at intervals: Day 1, Day 3, and Day 10.
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-navy-700 hover:bg-navy-600 transition-all shadow-soft"
                >
                  <span>Experience Diagnostic Tests in Beta</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
