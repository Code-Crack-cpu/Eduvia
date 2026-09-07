import React, { useState } from 'react';
import { ClipboardCheck, Calendar, Target, Check, ChevronRight, ShieldCheck } from 'lucide-react';
import { howItWorksSteps } from '../data/eduviaData';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return ClipboardCheck;
      case 1:
        return Calendar;
      case 2:
        return Target;
      case 3:
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300 mb-4">
            <span>The Daily Study Loop</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            From baseline test to exam-day calm.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            How Eduvia turns chaotic 14-hour study marathons into a structured, daily routine that targets your highest-yield score opportunities.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-5xl mx-auto">
          {howItWorksSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-xl p-5 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#0E1424] border-indigo-500/60 shadow-lg'
                    : 'bg-[#090D16] border-white/[0.06] hover:border-slate-700 hover:bg-[#0B101C]'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xl font-bold ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`}>
                    {step.number}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {step.tag}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/5">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Navigator */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-[#090D16] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono text-indigo-400 font-bold">
              Step {howItWorksSteps[activeStep].number} of 04
            </span>
            <span className="text-slate-300 font-medium">
              {howItWorksSteps[activeStep].title}: {howItWorksSteps[activeStep].tagline}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
              className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
