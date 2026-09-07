import React from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, AlertCircle, Clock, Zap, Target, Flame, TrendingUp } from 'lucide-react';
import { ExamTrack } from '../types';
import { neetDiagnosticData, jeeDiagnosticData } from '../data/eduviaData';

interface HeroProps {
  currentTrack: ExamTrack;
  onTrackChange: (track: ExamTrack) => void;
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentTrack, onTrackChange, onOpenWaitlist }) => {
  const activeData = currentTrack === 'NEET' ? neetDiagnosticData : jeeDiagnosticData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-hero">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 border border-indigo-500/30 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
              AI-Powered Learning Platform
            </span>
            <span className="text-slate-500 text-xs">|</span>
            <span className="text-xs font-medium text-slate-300">NEET & JEE 2026/2027</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Crack NEET & JEE with a learning system{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">
              built around you.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop drowning in generic 150-student coaching batches. Eduvia continuously analyzes your mistake patterns, adapts daily practice sets, and pinpoints the exact high-yield concepts to supercharge your rank.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all text-base focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 glass-card hover:bg-white/[0.08] hover:border-white/20 transition-all text-base focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/30" />
              <span>See How It Works</span>
            </a>
          </div>

          {/* Key Value Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Free Beta Cohort
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Latest NTA Pattern Engine
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Credit Card Required
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PURE REACT & CSS AI LEARNING DASHBOARD MOCKUP (No Stock Images) */}
        {/* ============================================================ */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ambient Glow behind dashboard */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 rounded-3xl blur-xl opacity-75 -z-10" />

          {/* Dashboard Window Container */}
          <div className="rounded-2xl bg-[#0B101D] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Top Mock Window Titlebar */}
            <div className="bg-[#090D18] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  app.eduvia.ai/diagnostics/live-session
                </span>
              </div>

              {/* Mode Switcher inside Mockup */}
              <div className="flex items-center gap-2 bg-[#121829] px-2 py-1 rounded-lg border border-white/10">
                <span className="text-[11px] text-slate-400 font-medium">Exam Simulation:</span>
                <button
                  type="button"
                  onClick={() => onTrackChange('NEET')}
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                    currentTrack === 'NEET'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  NEET Track
                </button>
                <button
                  type="button"
                  onClick={() => onTrackChange('JEE')}
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                    currentTrack === 'JEE'
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  JEE Track
                </button>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Row 1: Student Status & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric Card 1: Projected Score */}
                <div className="bg-[#10172B] border border-white/[0.07] rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Projected Score</span>
                    <Target className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-extrabold text-white tracking-tight">
                      {activeData.predictedScore}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">/ {activeData.maxScore}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+36 marks vs initial diagnostic</span>
                  </div>
                </div>

                {/* Metric Card 2: Predicted Percentile */}
                <div className="bg-[#10172B] border border-white/[0.07] rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Estimated Percentile</span>
                    <Zap className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-extrabold text-purple-300 tracking-tight">
                      {activeData.percentile}
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-400 truncate">
                    {activeData.targetRank}
                  </div>
                </div>

                {/* Metric Card 3: Live Question Accuracy */}
                <div className="bg-[#10172B] border border-white/[0.07] rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Practice Accuracy</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-extrabold text-white tracking-tight">
                      {activeData.accuracy}%
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-400">
                    Calculated over 420 NTA-tier questions
                  </div>
                </div>

                {/* Metric Card 4: Study Streak */}
                <div className="bg-[#10172B] border border-white/[0.07] rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Consistency Streak</span>
                    <Flame className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-display font-extrabold text-amber-300 tracking-tight">
                      16 Days
                    </span>
                    <span className="text-xs text-slate-400">active</span>
                  </div>
                  <div className="mt-2 text-[11px] text-amber-300/80">
                    Next milestone: 21-day neuro habit lock
                  </div>
                </div>
              </div>

              {/* Row 2: Two Column Split - AI Diagnostic Intelligence & Subject Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: AI Recommendation Engine Card (7 cols) */}
                <div className="lg:col-span-7 bg-[#10172B] border border-indigo-500/25 rounded-xl p-5 relative overflow-hidden">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-indigo-500/15 border border-indigo-500/30">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">Next High-Yield Focus</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30">
                            Urgent Weakness
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          AI priority calculated based on NTA exam weightage & personal error rate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Topic Box */}
                  <div className="p-4 rounded-xl bg-[#090D18] border border-white/5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold text-indigo-400">
                          {activeData.recommendedTopic.subject} • {activeData.recommendedTopic.chapter}
                        </span>
                        <h5 className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                          {activeData.recommendedTopic.title}
                        </h5>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                        {activeData.recommendedTopic.potentialGain}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeData.recommendedTopic.reason}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          Est. Time: {activeData.recommendedTopic.prepTimeMinutes} mins
                        </span>
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                          3 Diagnostic Errors Flagged
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={onOpenWaitlist}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                      >
                        <span>Launch Micro-Session</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Subject Mastery Radars (5 cols) */}
                <div className="lg:col-span-5 bg-[#10172B] border border-white/[0.07] rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white">Syllabus Health Matrix</h4>
                      <span className="text-xs font-mono text-slate-400">NTA 2026 Grid</span>
                    </div>

                    <div className="space-y-4">
                      {activeData.subjects.map((sub) => (
                        <div key={sub.subject} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-200">{sub.subject}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-slate-400">{sub.yieldScore}</span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                  sub.status === 'Mastered'
                                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25'
                                    : sub.status === 'In Progress'
                                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/25'
                                    : 'bg-rose-500/15 text-rose-400 border border-rose-500/25'
                                }`}
                              >
                                {sub.status}
                              </span>
                            </div>
                          </div>

                          {/* Visual Progress Bar */}
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                sub.status === 'Mastered'
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                                  : sub.status === 'In Progress'
                                  ? 'bg-gradient-to-r from-indigo-500 to-sky-400'
                                  : 'bg-gradient-to-r from-amber-500 to-rose-500'
                              }`}
                              style={{ width: `${sub.score}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            Focus: <span className="text-slate-300">{sub.criticalTopic}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span>Diagnostic Confidence: 94%</span>
                    <span className="text-indigo-400 cursor-pointer hover:underline" onClick={onOpenWaitlist}>
                      View full chapter breakdown →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
