import React from 'react';
import { Users, FileText, Compass, HeartCrack, Check, X } from 'lucide-react';
import { problemComparison } from '../data/eduviaData';

export const Problem: React.FC = () => {
  const painPoints = [
    {
      icon: Users,
      title: 'The Row-15 Reality',
      description: 'In a 160-student batch, faculty moves at the speed of the top 3 students sitting in front. If you have a doubt on step 4 of a kinematics derivation, you stay confused.',
      highlight: '0% Personal Attention'
    },
    {
      icon: FileText,
      title: 'Module Overwhelm & 2,000 Questions',
      description: 'Coaching centers dump 150-page printed modules every week. You waste 3 hours solving redundant, low-yield problems instead of the 15 concepts NTA actually repeats.',
      highlight: 'Hours Lost on Low-Yield'
    },
    {
      icon: Compass,
      title: 'The "Blunt Marksheet" Trap',
      description: 'Your weekly test gives you a single number: "Physics: 36/100". It never diagnoses why. Did you pick trap options? Did you miscalculate signs? Or did you run out of time?',
      highlight: 'Zero Diagnostic Insight'
    },
    {
      icon: HeartCrack,
      title: 'Prep Burnout & Mock Panic',
      description: 'Studying 14 hours a day without measurable progress feedback creates intense exam panic. Aspirants doubt their capability when the fault was the factory teaching method.',
      highlight: 'Anxiety & Score Plateaus'
    }
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-rose-400 mb-4">
            <span>Why 98% of Coaching Students Struggle</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The 6:00 AM Coaching Factory is Broken.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every year, 3.7 million Indian students pay exorbitant fees for factory coaching centers that treat every student like a standardized conveyor belt. Here is the real reason scores plateau.
          </p>
        </div>

        {/* 4 Asymmetric Real Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl bg-[#0B0F19] border border-white/[0.07] p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center mb-4 text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 text-[11px] font-mono text-rose-400">
                  {item.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B0F19] border border-white/[0.08] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#090D15] border-b border-white/10 text-xs font-semibold">
            <div className="md:col-span-4 p-4 text-slate-400 font-mono uppercase tracking-wider">
              Dimension
            </div>
            <div className="md:col-span-4 p-4 text-rose-400 border-t md:border-t-0 md:border-l border-white/10 flex items-center gap-1.5">
              <X className="w-3.5 h-3.5 shrink-0" />
              <span>Traditional Factory Coaching</span>
            </div>
            <div className="md:col-span-4 p-4 text-emerald-400 border-t md:border-t-0 md:border-l border-white/10 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 shrink-0" />
              <span>Eduvia Adaptive System</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {problemComparison.map((row) => (
              <div key={row.category} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                <div className="md:col-span-4 p-4 font-semibold text-slate-200 bg-white/[0.01]">
                  {row.category}
                </div>
                <div className="md:col-span-4 p-4 text-slate-400 border-t md:border-t-0 md:border-l border-white/5 leading-relaxed">
                  {row.traditional}
                </div>
                <div className="md:col-span-4 p-4 text-slate-100 border-t md:border-t-0 md:border-l border-white/5 font-medium leading-relaxed bg-indigo-950/[0.05]">
                  {row.eduvia}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
