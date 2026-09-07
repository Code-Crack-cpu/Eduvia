import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ExamTrack } from '../types';

interface FinalCTAProps {
  currentTrack: ExamTrack;
  onNavigateToEarlyAccess: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentTrack, onNavigateToEarlyAccess }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-radial-hero border-t border-white/[0.08]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0D1324] border border-white/10 p-8 sm:p-12 shadow-2xl relative text-center overflow-hidden">
          {/* Subtle background mesh */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Beta Cohort 01 · {currentTrack} Track Open</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Your preparation can be{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">
                smarter.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
              Join students who are stepping off the 150-batch coaching conveyor belt. Secure your spot on the priority early access list.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onNavigateToEarlyAccess}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free Diagnostic Baseline
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Dedicated Server Queue
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Spam Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
