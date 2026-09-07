import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ExamTrack } from '../types';

interface FinalCTAProps {
  currentTrack: ExamTrack;
  onNavigateToEarlyAccess: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentTrack, onNavigateToEarlyAccess }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-t border-ink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 border border-navy-800 p-8 sm:p-12 shadow-elevated relative text-center overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-navy-700/40 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[180px] bg-accent-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 border border-navy-700 text-navy-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Beta Cohort 01 · {currentTrack} Track Open</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Your preparation can be{' '}
              <span className="text-navy-200">
                smarter.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-xl mx-auto">
              Join students who are stepping off the 150-batch coaching conveyor belt. Secure your spot on the priority early access list.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateToEarlyAccess}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-navy-900 text-base bg-white hover:bg-navy-50 shadow-elevated hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-navy-400"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-navy-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success-400" />
                Free Diagnostic Baseline
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success-400" />
                Dedicated Server Queue
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-success-400" />
                Zero Spam Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
