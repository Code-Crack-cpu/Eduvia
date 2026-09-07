import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ExamTrack } from '../types';

interface FinalCTAProps {
  currentTrack: ExamTrack;
  onNavigateToEarlyAccess: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentTrack, onNavigateToEarlyAccess }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B0F19] border border-white/10 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Limited Beta Cohort 01 · {currentTrack} Track Open</span>
            </div>

            <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Your preparation can be smarter.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Step off the 150-batch coaching conveyor belt. Reserve your verified priority ticket for the Eduvia adaptive learning cohort.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateToEarlyAccess}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Free Diagnostic Baseline
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Dedicated Server Queue
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Zero Spam Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
