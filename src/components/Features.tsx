import React, { useState } from 'react';
import { Route, Award, MessageSquareHeart, LineChart, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { featuresList } from '../data/eduviaData';

interface FeaturesProps {
  onOpenWaitlist: () => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (id: string) => {
    switch (id) {
      case 'learning-paths':
        return Route;
      case 'adaptive-mock-tests':
        return Award;
      case 'expert-mentorship':
        return MessageSquareHeart;
      case 'progress-tracking':
      default:
        return LineChart;
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#080B12] border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Suite</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Everything your preparation needs,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-300">
              zero filler.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Four interconnected intelligent pillars designed to diagnose conceptual gaps, personalize daily problem sets, and guide you through exam day with absolute composure.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-12 p-1.5 rounded-2xl bg-[#0D1322] border border-white/10">
          {featuresList.map((feature, idx) => {
            const Icon = getIcon(feature.id);
            const isActive = activeTab === idx;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase */}
        {(() => {
          const current = featuresList[activeTab];
          const Icon = getIcon(current.id);

          return (
            <div className="max-w-5xl mx-auto rounded-3xl bg-[#0C111F] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description Column (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-indigo-300">
                    {current.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-2.5 pt-2">
                    {current.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onOpenWaitlist}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30"
                    >
                      <span>Experience {current.title} in Beta</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Mock View (6 cols) */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#090D18] border border-white/10 p-5 sm:p-6 shadow-inner space-y-4">
                    {/* Header simulated bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-slate-400">Eduvia Core // {current.id}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold">
                        LIVE DEMO
                      </span>
                    </div>

                    {/* Specific preview based on selected tab */}
                    {activeTab === 0 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#12182B] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-200">Today's Optimal Study Queue</span>
                            <span className="text-emerald-400 font-bold">Priority Rank #1</span>
                          </div>
                          <div className="text-xs text-slate-400">
                            1. Modern Physics: Photoelectric Equation (30 mins • High Yield)
                          </div>
                          <div className="text-xs text-slate-400">
                            2. Chemistry: Electrochemistry Nernst Equation (45 mins • Error Remediation)
                          </div>
                          <div className="text-xs text-slate-400">
                            3. Biology / Math: Rapid Fire Spaced Flashcards (15 mins • Retention Lock)
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-between text-xs">
                          <span className="text-slate-300">Cognitive Retention Status:</span>
                          <span className="font-bold text-indigo-300">92% Syllabus Intact</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#12182B] border border-white/5 space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-white">Adaptive Question Difficulty</span>
                            <span className="text-indigo-400 font-mono text-[11px]">Level: NTA Advanced</span>
                          </div>
                          <div className="text-xs text-slate-300 italic border-l-2 border-indigo-500 pl-3 py-1 bg-white/[0.02]">
                            "A particle of mass m moves under a central force field... Determine angular velocity at perihelion."
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                              Avg Solve Time: <span className="text-slate-200 font-bold">1m 42s</span>
                            </div>
                            <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                              National Accuracy: <span className="text-amber-400 font-bold">34%</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>Dynamic hint system activated — No direct answers spoiled</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#12182B] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-200">Instant AI Step-by-Step Reasoner</span>
                            <span className="text-sky-400 font-mono text-[11px]">Response: 1.2s</span>
                          </div>
                          <div className="text-xs text-slate-300 bg-white/[0.03] p-2.5 rounded-lg font-mono">
                            Step 1: Identify conservation of angular momentum: L = m·v·r = constant.
                            <br />
                            Step 2: Substitute initial boundary condition r₁ = 2R...
                          </div>
                          <div className="text-[11px] text-slate-400 flex items-center justify-between">
                            <span>Verified by AIIMS & IIT Delhi Alum Mentors</span>
                            <span className="text-emerald-400 font-semibold">Ready 24/7</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#12182B] border border-white/5 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-white">Cognitive Error Attribution</span>
                            <span className="text-slate-400 font-mono text-[11px]">Last 50 Mistakes</span>
                          </div>
                          <div className="space-y-2 pt-1 text-xs">
                            <div>
                              <div className="flex justify-between text-slate-300 text-[11px] mb-1">
                                <span>Conceptual Understanding Gap</span>
                                <span className="font-bold text-rose-400">18% (Focus here)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-rose-500 rounded-full w-[18%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-slate-300 text-[11px] mb-1">
                                <span>Calculation / Arithmetic Slip</span>
                                <span className="font-bold text-amber-400">54% (Slow down)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-amber-400 rounded-full w-[54%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-slate-300 text-[11px] mb-1">
                                <span>Formula Recall Under Pressure</span>
                                <span className="font-bold text-sky-400">28% (Flashcard deck)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                <div className="h-full bg-sky-400 rounded-full w-[28%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
