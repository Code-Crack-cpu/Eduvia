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
    <section id="features" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence Suite</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-6">
            Everything your preparation needs,{' '}
            <span className="text-navy-700">
              zero filler.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
            Four interconnected intelligent pillars designed to diagnose conceptual gaps, personalize daily problem sets, and guide you through exam day with absolute composure.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-12 p-1.5 rounded-2xl bg-white border border-ink-200 shadow-soft">
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
                    ? 'bg-navy-800 text-white shadow-soft'
                    : 'text-ink-400 hover:text-ink-600 hover:bg-ink-50'
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
            <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-ink-200 p-6 sm:p-10 shadow-card relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Description Column (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-xs font-semibold">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{current.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-navy-600">
                    {current.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-ink-500 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-2.5 pt-2">
                    {current.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-700">
                        <CheckCircle className="w-4 h-4 text-success-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onOpenWaitlist}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-navy-700 hover:bg-navy-600 transition-colors shadow-soft"
                    >
                      <span>Experience {current.title} in Beta</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Mock View (6 cols) */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-ink-50 border border-ink-200 p-5 sm:p-6 space-y-4">
                    {/* Header simulated bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-ink-200 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-success-400 animate-pulse" />
                        <span className="font-mono text-ink-400">Eduvia Core // {current.id}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-navy-50 text-navy-600 text-[10px] font-bold border border-navy-100">
                        LIVE DEMO
                      </span>
                    </div>

                    {/* Specific preview based on selected tab */}
                    {activeTab === 0 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-white border border-ink-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-ink-700">Today's Optimal Study Queue</span>
                            <span className="text-success-600 font-bold">Priority Rank #1</span>
                          </div>
                          <div className="text-xs text-ink-500">
                            1. Modern Physics: Photoelectric Equation (30 mins • High Yield)
                          </div>
                          <div className="text-xs text-ink-500">
                            2. Chemistry: Electrochemistry Nernst Equation (45 mins • Error Remediation)
                          </div>
                          <div className="text-xs text-ink-500">
                            3. Biology / Math: Rapid Fire Spaced Flashcards (15 mins • Retention Lock)
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-between text-xs">
                          <span className="text-ink-500">Cognitive Retention Status:</span>
                          <span className="font-bold text-navy-600">92% Syllabus Intact</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-white border border-ink-200 space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-ink-800">Adaptive Question Difficulty</span>
                            <span className="text-navy-500 font-mono text-[11px]">Level: NTA Advanced</span>
                          </div>
                          <div className="text-xs text-ink-600 italic border-l-2 border-navy-400 pl-3 py-1 bg-ink-50 rounded-r">
                            "A particle of mass m moves under a central force field... Determine angular velocity at perihelion."
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px] text-ink-400">
                            <div className="p-2 rounded bg-ink-50 border border-ink-100">
                              Avg Solve Time: <span className="text-ink-700 font-bold">1m 42s</span>
                            </div>
                            <div className="p-2 rounded bg-ink-50 border border-ink-100">
                              National Accuracy: <span className="text-warning-600 font-bold">34%</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-success-50 border border-success-200 text-xs text-success-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 shrink-0" />
                          <span>Dynamic hint system activated — No direct answers spoiled</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-white border border-ink-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-ink-700">Instant AI Step-by-Step Reasoner</span>
                            <span className="text-navy-500 font-mono text-[11px]">Response: 1.2s</span>
                          </div>
                          <div className="text-xs text-ink-600 bg-ink-50 p-2.5 rounded-lg font-mono border border-ink-100">
                            Step 1: Identify conservation of angular momentum: L = m·v·r = constant.
                            <br />
                            Step 2: Substitute initial boundary condition r₁ = 2R...
                          </div>
                          <div className="text-[11px] text-ink-400 flex items-center justify-between">
                            <span>Verified by AIIMS & IIT Delhi Alum Mentors</span>
                            <span className="text-success-600 font-semibold">Ready 24/7</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-white border border-ink-200 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-ink-800">Cognitive Error Attribution</span>
                            <span className="text-ink-400 font-mono text-[11px]">Last 50 Mistakes</span>
                          </div>
                          <div className="space-y-2 pt-1 text-xs">
                            <div>
                              <div className="flex justify-between text-ink-600 text-[11px] mb-1">
                                <span>Conceptual Understanding Gap</span>
                                <span className="font-bold text-error-500">18% (Focus here)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden">
                                <div className="h-full bg-error-400 rounded-full w-[18%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-ink-600 text-[11px] mb-1">
                                <span>Calculation / Arithmetic Slip</span>
                                <span className="font-bold text-warning-500">54% (Slow down)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden">
                                <div className="h-full bg-warning-400 rounded-full w-[54%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-ink-600 text-[11px] mb-1">
                                <span>Formula Recall Under Pressure</span>
                                <span className="font-bold text-navy-500">28% (Flashcard deck)</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden">
                                <div className="h-full bg-navy-400 rounded-full w-[28%]" />
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
