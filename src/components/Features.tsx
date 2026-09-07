import React from 'react';
import { Check, ArrowRight, BookOpen } from 'lucide-react';

interface FeaturesProps {
  onOpenWaitlist: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenWaitlist }) => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-indigo-300 mb-4">
            <span>The Platform Core</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Engineered for rank yield, not coaching hours.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Four targeted diagnostic tools that replace generic test series and endless lecture binge-watching with active, measurable problem solving.
          </p>
        </div>

        {/* ============================================================ */}
        {/* ASYMMETRICAL BENTO GRID LAYOUT                               */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-5xl mx-auto">
          {/* Bento 1 (Large - 7 cols): Negative Marking Autopsy */}
          <div className="md:col-span-7 rounded-2xl bg-[#0B0F19] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 text-xs font-mono font-medium border border-rose-500/20">
                  Real NTA Marking Scheme (+4 / -1)
                </span>
                <span className="text-xs text-slate-500 font-mono">Mock Test 04</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                The Negative Marking Autopsy
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Most students don't lose ranks on hard questions—they lose them on careless mistakes on easy ones. Eduvia calculates your exact negative marking bleed and trains your risk-judgment.
              </p>

              {/* Realistic Telemetry Card */}
              <div className="p-4 rounded-xl bg-[#080C14] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Last Test Physics Section:</span>
                  <span className="font-mono text-emerald-400 font-bold">128 / 180 Marks</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>32 Correct Questions</span>
                    <span className="font-mono text-emerald-400">+128 marks</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span className="text-rose-400">7 Careless Calculation Errors</span>
                    <span className="font-mono text-rose-400">-7 marks penalty (-35 potential)</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>6 Unattempted Difficult Questions</span>
                    <span className="font-mono text-slate-400">0 marks</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Recoverable Marks in Next Mock:</span>
                  <span className="text-emerald-400 font-mono font-bold">+28 Marks</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Error taxonomy tagging on every question
              </span>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento 2 (5 cols): Daily 45-Min High Yield Queue */}
          <div className="md:col-span-5 rounded-2xl bg-[#0B0F19] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/20">
                  Daily Micro-Queue
                </span>
                <span className="text-xs text-slate-500 font-mono">Today, 7:00 AM</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                No Morning Decision Paralysis
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Wake up to 3 prioritized high-yield tasks calibrated to your weakest recurring concepts instead of wondering what book to open.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-[#080C14] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                    1
                  </span>
                  <div>
                    <div className="font-medium text-slate-200">Rotational Inertia Derivations</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">30 mins · 2 High-Yield Questions</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#080C14] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                    2
                  </span>
                  <div>
                    <div className="font-medium text-slate-200">Nernst Equation Sign Drills</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">25 mins · Error Remediation</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#080C14] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-[11px] shrink-0">
                    3
                  </span>
                  <div>
                    <div className="font-medium text-slate-200">Spaced Revision Deck (15 cards)</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">15 mins · Retention Lock</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 text-xs text-slate-400 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Automatically recalibrates if you miss a day</span>
            </div>
          </div>

          {/* Bento 3 (5 cols): NCERT Line-by-Line Tracking */}
          <div className="md:col-span-5 rounded-2xl bg-[#0B0F19] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 text-xs font-mono font-medium border border-emerald-500/20">
                  NCERT Line-to-Question
                </span>
                <span className="text-xs text-slate-500 font-mono">100% NCERT Scope</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Every NCERT Line Tested
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                NEET Biology and Chemistry are 95%+ NCERT verbatim. Eduvia maps every assertion-reason question directly to textbook page numbers.
              </p>

              <div className="p-3.5 rounded-xl bg-[#080C14] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300 text-[11px]">
                  <span>Genetics & Molecular Biology</span>
                  <span className="text-emerald-400 font-mono font-bold">94% Covered</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-500 w-[94%]" />
                </div>

                <div className="flex justify-between text-slate-300 text-[11px] pt-2">
                  <span>Coordination Compounds</span>
                  <span className="text-amber-400 font-mono font-bold">68% Covered</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-amber-500 w-[68%]" />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 text-xs text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Direct citations to NCERT Vol 1 & 2</span>
            </div>
          </div>

          {/* Bento 4 (Large - 7 cols): 24/7 Socratic Hint Reasoner */}
          <div className="md:col-span-7 rounded-2xl bg-[#0B0F19] border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-300 text-xs font-mono font-medium border border-sky-500/20">
                  Socratic Doubt AI
                </span>
                <span className="text-xs text-slate-500 font-mono">24/7 Available</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Hints That Teach You How to Think
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Stuck at 11:30 PM? Other apps give you a video solution that spoils the answer in 5 seconds. Eduvia gives Socratic hints that guide you to solve it yourself.
              </p>

              <div className="p-4 rounded-xl bg-[#080C14] border border-white/5 space-y-2 text-xs font-mono">
                <div className="text-indigo-300 font-semibold">Hint Level 1 (Guiding Question):</div>
                <div className="text-slate-300 bg-white/[0.02] p-2.5 rounded border border-white/5">
                  "Notice that no external torque acts about the axis of rotation. What conserved quantity connects initial and final states?"
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                  <span>Student derives: L = I₁ω₁ = I₂ω₂</span>
                  <span className="text-emerald-400 font-bold">Solved independently</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Trains exam-hall problem solving instincts
              </span>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
