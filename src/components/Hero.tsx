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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8FAFC]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-navy-50/60 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-accent-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-navy-100 shadow-soft mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-navy-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-navy-600">
              AI-Powered Learning Platform
            </span>
            <span className="text-ink-300 text-xs">|</span>
            <span className="text-xs font-medium text-ink-500">NEET & JEE 2026/2027</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink-900 leading-[1.12] mb-6">
            Crack NEET & JEE with a learning system{' '}
            <span className="text-navy-700">
              built around you.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-ink-500 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Stop drowning in generic 150-student coaching batches. Eduvia continuously analyzes your mistake patterns, adapts daily practice sets, and pinpoints the exact high-yield concepts to supercharge your rank.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-navy-800 hover:bg-navy-700 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all text-base focus:outline-none focus:ring-2 focus:ring-navy-400"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-navy-700 bg-white border border-ink-200 hover:border-navy-300 hover:bg-navy-50 transition-all text-base focus:outline-none focus:ring-2 focus:ring-navy-400"
            >
              <Play className="w-4 h-4 text-navy-500" />
              <span>See How It Works</span>
            </a>
          </div>

          {/* Key Value Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-ink-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success-500" />
              100% Free Beta Cohort
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success-500" />
              Latest NTA Pattern Engine
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success-500" />
              No Credit Card Required
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PURE REACT & CSS AI LEARNING DASHBOARD MOCKUP (No Stock Images) */}
        {/* ============================================================ */}
        <div className="relative max-w-5xl mx-auto">
          {/* Dashboard Window Container */}
          <div className="rounded-2xl bg-white border border-ink-200 shadow-elevated overflow-hidden">
            {/* Top Mock Window Titlebar */}
            <div className="bg-ink-50 px-4 py-3 border-b border-ink-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error-300" />
                <div className="w-3 h-3 rounded-full bg-warning-300" />
                <div className="w-3 h-3 rounded-full bg-success-300" />
                <span className="ml-2 text-xs font-mono text-ink-400 hidden sm:inline-block">
                  app.eduvia.ai/diagnostics/live-session
                </span>
              </div>

              {/* Mode Switcher inside Mockup */}
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-ink-200">
                <span className="text-[11px] text-ink-400 font-medium">Exam Simulation:</span>
                <button
                  type="button"
                  onClick={() => onTrackChange('NEET')}
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                    currentTrack === 'NEET'
                      ? 'bg-success-100 text-success-700 border border-success-300'
                      : 'text-ink-400 hover:text-ink-600'
                  }`}
                >
                  NEET Track
                </button>
                <button
                  type="button"
                  onClick={() => onTrackChange('JEE')}
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded ${
                    currentTrack === 'JEE'
                      ? 'bg-navy-100 text-navy-700 border border-navy-300'
                      : 'text-ink-400 hover:text-ink-600'
                  }`}
                >
                  JEE Track
                </button>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6 bg-[#FCFDFE]">
              {/* Row 1: Student Status & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric Card 1: Projected Score */}
                <div className="bg-white border border-ink-200 rounded-xl p-4 flex flex-col justify-between shadow-soft">
                  <div className="flex items-center justify-between text-ink-400 text-xs mb-2">
                    <span>Projected Score</span>
                    <Target className="w-4 h-4 text-navy-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-ink-900 tracking-tight">
                      {activeData.predictedScore}
                    </span>
                    <span className="text-xs font-semibold text-ink-400">/ {activeData.maxScore}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-success-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+36 marks vs initial diagnostic</span>
                  </div>
                </div>

                {/* Metric Card 2: Predicted Percentile */}
                <div className="bg-white border border-ink-200 rounded-xl p-4 flex flex-col justify-between shadow-soft">
                  <div className="flex items-center justify-between text-ink-400 text-xs mb-2">
                    <span>Estimated Percentile</span>
                    <Zap className="w-4 h-4 text-accent-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-navy-700 tracking-tight">
                      {activeData.percentile}
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] text-ink-400 truncate">
                    {activeData.targetRank}
                  </div>
                </div>

                {/* Metric Card 3: Live Question Accuracy */}
                <div className="bg-white border border-ink-200 rounded-xl p-4 flex flex-col justify-between shadow-soft">
                  <div className="flex items-center justify-between text-ink-400 text-xs mb-2">
                    <span>Practice Accuracy</span>
                    <CheckCircle2 className="w-4 h-4 text-success-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-ink-900 tracking-tight">
                      {activeData.accuracy}%
                    </span>
                  </div>
                  <div className="mt-2 text-[11px] text-ink-400">
                    Calculated over 420 NTA-tier questions
                  </div>
                </div>

                {/* Metric Card 4: Study Streak */}
                <div className="bg-white border border-ink-200 rounded-xl p-4 flex flex-col justify-between shadow-soft">
                  <div className="flex items-center justify-between text-ink-400 text-xs mb-2">
                    <span>Consistency Streak</span>
                    <Flame className="w-4 h-4 text-warning-500" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-warning-600 tracking-tight">
                      16 Days
                    </span>
                    <span className="text-xs text-ink-400">active</span>
                  </div>
                  <div className="mt-2 text-[11px] text-warning-600">
                    Next milestone: 21-day neuro habit lock
                  </div>
                </div>
              </div>

              {/* Row 2: Two Column Split - AI Diagnostic Intelligence & Subject Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: AI Recommendation Engine Card (7 cols) */}
                <div className="lg:col-span-7 bg-white border border-navy-200 rounded-xl p-5 relative overflow-hidden shadow-soft">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-navy-50 border border-navy-100">
                        <Sparkles className="w-4 h-4 text-navy-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-ink-900">Next High-Yield Focus</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-error-50 text-error-600 border border-error-200">
                            Urgent Weakness
                          </span>
                        </div>
                        <p className="text-xs text-ink-400">
                          AI priority calculated based on NTA exam weightage & personal error rate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Topic Box */}
                  <div className="p-4 rounded-xl bg-ink-50 border border-ink-200 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold text-navy-600">
                          {activeData.recommendedTopic.subject} • {activeData.recommendedTopic.chapter}
                        </span>
                        <h5 className="text-sm sm:text-base font-bold text-ink-800 mt-0.5">
                          {activeData.recommendedTopic.title}
                        </h5>
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-success-50 text-success-600 border border-success-200 shrink-0">
                        {activeData.recommendedTopic.potentialGain}
                      </span>
                    </div>

                    <p className="text-xs text-ink-500 leading-relaxed">
                      {activeData.recommendedTopic.reason}
                    </p>

                    <div className="pt-2 border-t border-ink-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3 text-ink-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-ink-400" />
                          Est. Time: {activeData.recommendedTopic.prepTimeMinutes} mins
                        </span>
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-warning-500" />
                          3 Diagnostic Errors Flagged
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={onOpenWaitlist}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-navy-700 hover:bg-navy-600 transition-colors"
                      >
                        <span>Launch Micro-Session</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Subject Mastery Radars (5 cols) */}
                <div className="lg:col-span-5 bg-white border border-ink-200 rounded-xl p-5 flex flex-col justify-between shadow-soft">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-ink-900">Syllabus Health Matrix</h4>
                      <span className="text-xs font-mono text-ink-400">NTA 2026 Grid</span>
                    </div>

                    <div className="space-y-4">
                      {activeData.subjects.map((sub) => (
                        <div key={sub.subject} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-ink-700">{sub.subject}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-ink-400">{sub.yieldScore}</span>
                              <span
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                  sub.status === 'Mastered'
                                    ? 'bg-success-50 text-success-600 border border-success-200'
                                    : sub.status === 'In Progress'
                                    ? 'bg-navy-50 text-navy-600 border border-navy-200'
                                    : 'bg-error-50 text-error-600 border border-error-200'
                                }`}
                              >
                                {sub.status}
                              </span>
                            </div>
                          </div>

                          {/* Visual Progress Bar */}
                          <div className="w-full h-2 rounded-full bg-ink-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${
                                sub.status === 'Mastered'
                                  ? 'bg-success-500'
                                  : sub.status === 'In Progress'
                                  ? 'bg-navy-500'
                                  : 'bg-warning-500'
                              }`}
                              style={{ width: `${sub.score}%` }}
                            />
                          </div>
                          <div className="text-[10px] text-ink-400 truncate">
                            Focus: <span className="text-ink-500">{sub.criticalTopic}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink-100 flex items-center justify-between text-xs text-ink-400">
                    <span>Diagnostic Confidence: 94%</span>
                    <span className="text-navy-600 cursor-pointer hover:underline" onClick={onOpenWaitlist}>
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
