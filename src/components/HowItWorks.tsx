import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, Target, TrendingUp, ChevronRight, Check } from 'lucide-react';
import { howItWorksSteps } from '../data/eduviaData';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return ClipboardCheck;
      case 1:
        return Sparkles;
      case 2:
        return Target;
      case 3:
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[#0A0F1E] border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 4-Step Learning Loop</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            From diagnostic baseline to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400">
              exam-day mastery.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eduvia transforms chaotic 14-hour study sessions into a systematic, compounding flywheel. Here is how your daily preparation evolves.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howItWorksSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-[#12182D] border-indigo-500/50 shadow-xl shadow-indigo-950/50 -translate-y-1.5'
                    : 'bg-[#0E1424]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#10172A]'
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-display text-2xl font-black ${
                      isSelected ? 'text-indigo-400' : 'text-slate-600'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-indigo-400/90 mb-1.5">
                  {step.tag}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Sub features list */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card for currently selected step */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#0C1222] border border-indigo-500/20 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
              {howItWorksSteps[activeStep].number}
            </div>
            <div>
              <span className="text-slate-400 text-xs">Currently Viewing:</span>
              <p className="font-bold text-slate-100">
                Phase {howItWorksSteps[activeStep].number}: {howItWorksSteps[activeStep].title} — {howItWorksSteps[activeStep].tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
            >
              <span>Next Phase</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
