import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Shield, Award, Zap } from 'lucide-react';
import { ExamTrack } from '../types';
import { EarlyAccess } from '../components/EarlyAccess';

interface EarlyAccessPageProps {
  currentTrack: ExamTrack;
  onTrackChange: (track: ExamTrack) => void;
  onNavigateHome: () => void;
}

export const EarlyAccessPage: React.FC<EarlyAccessPageProps> = ({
  currentTrack,
  onTrackChange,
  onNavigateHome
}) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Eduvia — Priority Early Access (NEET & JEE)';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080B12] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Dedicated Navbar */}
      <header className="sticky top-0 z-50 bg-[#080B12]/90 backdrop-blur-md border-b border-white/[0.08] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Back to Home Button */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </button>

          {/* Logo Center */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 focus:outline-none"
            aria-label="Eduvia Home"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Eduvia
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-medium">
                v1.0
              </span>
            </div>
          </button>

          {/* Track Switcher */}
          <div
            className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold"
            role="radiogroup"
            aria-label="Select Target Exam Track"
          >
            <button
              type="button"
              onClick={() => onTrackChange('NEET')}
              className={`px-3 py-1 rounded-md transition-all ${
                currentTrack === 'NEET'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              NEET 2026
            </button>
            <button
              type="button"
              onClick={() => onTrackChange('JEE')}
              className={`px-3 py-1 rounded-md transition-all ${
                currentTrack === 'JEE'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              JEE Main/Adv
            </button>
          </div>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Description */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Priority Beta Enrollment · {currentTrack} Track</span>
            </div>

            <h1 className="heading-hero text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Join the {currentTrack} Cohort.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fill in your details below to receive your server-assigned priority ticket. When the platform opens, your diagnostic baseline and personalized high-yield syllabus will be waiting.
            </p>
          </div>

          {/* The Waitlist Registration Component */}
          <EarlyAccess initialTrack={currentTrack} hideHeader={true} />

          {/* Value Props & Trust Badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0B0F1C] border border-white/[0.06] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Priority Activation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Early access invites roll out in structured waves. Higher positions receive first access to adaptive mock tests.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F1C] border border-white/[0.06] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Free Beta Privileges</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cohort 01 participants retain full access to AI diagnostic learning paths with zero subscription fees.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F1C] border border-white/[0.06] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Privacy & Protection</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict server-side validation and ACID storage. We never share student information with third-party coaching vendors.
              </p>
            </div>
          </div>

          {/* Footer Back Link */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Eduvia Landing Page</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
