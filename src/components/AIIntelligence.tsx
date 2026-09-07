import React, { useState } from 'react';
import { Brain, ArrowRight, Clock, BookOpen, AlertTriangle } from 'lucide-react';
import { ExamTrack } from '../types';

interface AIIntelligenceProps {
  currentTrack: ExamTrack;
  onOpenWaitlist: () => void;
}

interface DiagnosticScenario {
  subject: string;
  chapter: string;
  ncertRef: string;
  questionSnippet: string;
  studentAnswer: string;
  correctAnswer: string;
  errorType: 'Careless Calculation' | 'Conceptual Blindspot' | 'Formula Confusion';
  diagnosisDetail: string;
  actionPlan: {
    immediateTask: string;
    estTime: string;
    scoreYield: string;
    keyTakeaway: string;
  };
}

export const AIIntelligence: React.FC<AIIntelligenceProps> = ({ currentTrack, onOpenWaitlist }) => {
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);

  const neetScenarios: DiagnosticScenario[] = [
    {
      subject: 'Physics',
      chapter: 'Rotational Dynamics',
      ncertRef: 'NCERT Class 11, Vol 1, Page 174',
      questionSnippet: 'A solid cylinder and a hollow sphere of same mass roll down an inclined plane without slipping. Which reaches the bottom first?',
      studentAnswer: 'Selected: Hollow Sphere (Incorrect · -1 Mark)',
      correctAnswer: 'Correct: Solid Cylinder (+4 Marks)',
      errorType: 'Conceptual Blindspot',
      diagnosisDetail: 'Confused moment of inertia fractions (I = 1/2 MR² vs 2/3 MR²) with acceleration down an incline: a = g sinθ / (1 + k²/R²). Smaller k²/R² means higher acceleration, so the solid cylinder reaches first.',
      actionPlan: {
        immediateTask: 'Review 3-step vector derivation of Rolling Acceleration on Incline',
        estTime: '15 mins',
        scoreYield: '+4 to +8 Marks in NEET',
        keyTakeaway: 'Smaller k²/R² fraction = Faster arrival at bottom'
      }
    },
    {
      subject: 'Chemistry',
      chapter: 'Electrochemistry',
      ncertRef: 'NCERT Class 12, Vol 1, Page 72',
      questionSnippet: 'Calculate cell potential E_cell when Zn²⁺ concentration is reduced by a factor of 100 at 298K.',
      studentAnswer: 'Selected: Decreases by 0.059V (Incorrect sign · -1 Mark)',
      correctAnswer: 'Correct: Increases by 0.059V (+4 Marks)',
      errorType: 'Careless Calculation',
      diagnosisDetail: 'Sign inversion occurred while substituting log([Zn²⁺]/[Cu²⁺]) into the Nernst Equation: E = E° - (0.059/2) log Q. Reducing anode concentration decreases Q, which increases overall E_cell.',
      actionPlan: {
        immediateTask: 'Solve 5 curated Nernst ratio problems with sign verification checklist',
        estTime: '20 mins',
        scoreYield: '+4 Marks in Physical Chemistry',
        keyTakeaway: 'Anode dilution ALWAYS raises cell potential'
      }
    },
    {
      subject: 'Biology',
      chapter: 'Molecular Basis of Inheritance',
      ncertRef: 'NCERT Class 12, Page 104',
      questionSnippet: 'In the Meselson and Stahl experiment, what is the ratio of hybrid to light DNA after 60 minutes (3 generations)?',
      studentAnswer: 'Selected: 1:3 (Misidentified total molecular bands · -1 Mark)',
      correctAnswer: 'Correct: 2:6 (i.e. 25% hybrid, 75% light DNA · +4 Marks)',
      errorType: 'Formula Confusion',
      diagnosisDetail: 'Generation interval of 20 mins gives 3 rounds of replication. At Gen 3, total DNA molecules = 2³ = 8. Exactly 2 molecules are hybrid (¹⁴N-¹⁵N) and 6 are light (¹⁴N-¹⁴N). Ratio is 2:6 or 1:3, but question asked for total band proportions.',
      actionPlan: {
        immediateTask: 'Meselson-Stahl 4-generation visual replication drill',
        estTime: '10 mins',
        scoreYield: '+4 Marks in Genetics',
        keyTakeaway: 'Hybrid band count is ALWAYS 2 for all generations n ≥ 1'
      }
    }
  ];

  const jeeScenarios: DiagnosticScenario[] = [
    {
      subject: 'Mathematics',
      chapter: 'Application of Derivatives',
      ncertRef: 'NCERT Class 12, Vol 1, Page 218',
      questionSnippet: 'Find the minimum distance between the parabola y² = 4x and the circle x² + y² - 8x + 12 = 0.',
      studentAnswer: 'Selected: √5 - 2 (Incorrect normal gradient · -1 Mark)',
      correctAnswer: 'Correct: 2√5 - 2 (+4 Marks in JEE Main)',
      errorType: 'Conceptual Blindspot',
      diagnosisDetail: 'Abandoned the common normal theorem for an algebraic Euclidean distance formula that resulted in an unwieldy quartic equation. The common normal of any circle MUST pass through its center (4, 0).',
      actionPlan: {
        immediateTask: 'Master the "Common Normal to Conic" shortcut method',
        estTime: '25 mins',
        scoreYield: '+4 Marks in JEE Main',
        keyTakeaway: 'Shortest distance between two smooth curves lies along their common normal'
      }
    },
    {
      subject: 'Physics',
      chapter: 'Electromagnetic Induction',
      ncertRef: 'NCERT Class 12, Vol 1, Page 212',
      questionSnippet: 'A square loop of side L enters a non-uniform field B(x) = B₀(x/L)k̂ at velocity v. Compute induced EMF.',
      studentAnswer: 'Selected: B₀ v L (Assumed uniform field · -1 Mark)',
      correctAnswer: 'Correct: 1/2 B₀ v L (+4 Marks in JEE Adv)',
      errorType: 'Conceptual Blindspot',
      diagnosisDetail: 'Treated magnetic flux as a scalar product B·A without integrating dΦ = B(x) dA across the spatially varying field gradient. Non-uniform fields always require calculus integration.',
      actionPlan: {
        immediateTask: 'Flux integration drill on 4 differential geometry loop setups',
        estTime: '30 mins',
        scoreYield: '+4 Marks in JEE Advanced',
        keyTakeaway: 'Integrate flux dΦ = ∫ B(x)·dA before differentiating with respect to time'
      }
    },
    {
      subject: 'Chemistry',
      chapter: 'Thermodynamics',
      ncertRef: 'NCERT Class 11, Vol 1, Page 162',
      questionSnippet: 'Compare work done in reversible vs irreversible adiabatic expansion of an ideal gas between same volume limits.',
      studentAnswer: 'Selected: Irreversible work has greater magnitude',
      correctAnswer: 'Correct: Reversible work magnitude is strictly greater (+4 Marks)',
      errorType: 'Formula Confusion',
      diagnosisDetail: 'Confused P-V curve area for reversible vs irreversible path. Reversible path maintains maximum pressure at every infinitesimal step, giving greater area under the curve.',
      actionPlan: {
        immediateTask: 'Indicator diagram P-V overlay review',
        estTime: '15 mins',
        scoreYield: '+4 Marks in Physical Chemistry',
        keyTakeaway: 'Reversible expansion work is always the theoretical upper bound'
      }
    }
  ];

  const activeScenarios = currentTrack === 'NEET' ? neetScenarios : jeeScenarios;
  const currentScenario = activeScenarios[selectedSubjectIndex] || activeScenarios[0];

  return (
    <section id="ai-intelligence" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300 mb-4">
            <Brain className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Diagnostic Engine</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Mock Test Error Autopsy
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Other test series just tell you what you got wrong. Eduvia isolates the exact cognitive trap that cost you marks—so it never happens on exam day.
          </p>
        </div>

        {/* Diagnostic Inspector Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B0F19] border border-white/10 shadow-xl overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-[#090D15] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-white">
                Exam Question Error Breakdown
              </h3>
              <p className="text-xs text-slate-400">
                Select a subject to inspect the exact misconception taxonomy:
              </p>
            </div>

            {/* Subject Selector */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/10">
              {activeScenarios.map((scenario, idx) => (
                <button
                  key={scenario.subject}
                  type="button"
                  onClick={() => setSelectedSubjectIndex(idx)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
                    selectedSubjectIndex === idx
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {scenario.subject}
                </button>
              ))}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-7 space-y-5">
            {/* Subject & NCERT Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-indigo-400 font-semibold">
                {currentScenario.subject} · {currentScenario.chapter}
              </span>
              <span className="text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentScenario.ncertRef}</span>
              </span>
            </div>

            {/* Question Statement */}
            <div className="p-4 rounded-xl bg-[#080C14] border border-white/5 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              "{currentScenario.questionSnippet}"
            </div>

            {/* Student vs Key Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/20">
                <span className="text-rose-400 font-mono font-bold block mb-1">
                  Aspirant Submission
                </span>
                <span className="text-slate-300">{currentScenario.studentAnswer}</span>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20">
                <span className="text-emerald-400 font-mono font-bold block mb-1">
                  Official NTA Key
                </span>
                <span className="text-slate-300">{currentScenario.correctAnswer}</span>
              </div>
            </div>

            {/* Diagnosis Detail */}
            <div className="p-4 rounded-xl bg-[#080C14] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Error Diagnosis: {currentScenario.errorType}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {currentScenario.diagnosisDetail}
              </p>
            </div>

            {/* Action Plan */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Next Action:</span>
                  <span className="text-slate-200 font-semibold">{currentScenario.actionPlan.immediateTask}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {currentScenario.actionPlan.estTime}
                  </span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    {currentScenario.actionPlan.scoreYield}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <span>Experience in Beta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
