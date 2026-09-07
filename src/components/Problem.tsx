import React from 'react';
import { AlertOctagon, Check, X, BookX, Users, HelpCircle, Flame } from 'lucide-react';
import { problemComparison } from '../data/eduviaData';

export const Problem: React.FC = () => {
  const painPoints = [
    {
      icon: Users,
      title: '150-Student Batch Factories',
      description: 'Coaching centers cater to the top 2% toppers who already grasp concepts fast. If you get stuck on a tricky step, you are left behind with unasked doubts.',
      badge: 'Lack of Personal Care'
    },
    {
      icon: BookX,
      title: 'Scattered Resources & Module Chaos',
      description: 'Aspirants juggle 8 different Telegram channels, 5 test series PDFs, and multiple YouTube teachers. You spend more time deciding what to study than actually solving problems.',
      badge: 'Decision Paralysis'
    },
    {
      icon: HelpCircle,
      title: 'Blind Test Analytics',
      description: 'Traditional mock tests give you a single blunt score (e.g. 110/300) with no diagnosis. Was it because of conceptual misunderstanding, calculation errors, or poor time distribution?',
      badge: 'Zero Diagnostic Clarity'
    },
    {
      icon: Flame,
      title: 'Burnout & Emotional Anxiety',
      description: 'Without clear visibility into daily progress, students study 12 hours a day while still feeling unprepared. This triggers chronic exam anxiety and score plateaus.',
      badge: 'Chronic Fatigue'
    }
  ];

  return (
    <section id="problem" className="py-24 relative overflow-hidden bg-white border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-50 border border-error-200 text-error-600 text-xs font-semibold mb-4">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>The Reality of Competitive Prep</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-6">
            Generic coaching was never built for{' '}
            <span className="text-navy-700">
              individual brains.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
            Every year, over 3.7 million students contest for medical and engineering seats. Yet most rely on rigid, one-size-fits-all coaching that treats every student like a standardized conveyor belt.
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-ink-200 rounded-2xl p-6 relative hover:border-error-200 transition-all duration-300 group hover:-translate-y-1 shadow-soft hover:shadow-card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-error-50 border border-error-100 flex items-center justify-center mb-4 group-hover:bg-error-100 transition-colors">
                  <Icon className="w-5 h-5 text-error-500" />
                </div>
                <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-error-500 mb-2">
                  {item.badge}
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Traditional vs Eduvia */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ink-900">
              The Fundamental Shift: Factory Model vs. Adaptive Intelligence
            </h3>
            <p className="text-sm text-ink-400 mt-2">
              Why high-intent aspirants are shifting from passive coaching lectures to active diagnostic systems.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white overflow-hidden shadow-card">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-ink-50 border-b border-ink-200 text-xs sm:text-sm font-semibold">
              <div className="md:col-span-4 p-4 text-ink-500">Prep Dimension</div>
              <div className="md:col-span-4 p-4 text-error-500 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-ink-200 bg-error-50/50">
                <X className="w-4 h-4 text-error-400 shrink-0" />
                <span>Traditional Coaching Model</span>
              </div>
              <div className="md:col-span-4 p-4 text-navy-700 flex items-center gap-1.5 border-t md:border-t-0 md:border-l border-ink-200 bg-navy-50/60">
                <Check className="w-4 h-4 text-success-500 shrink-0" />
                <span>Eduvia AI Learning Engine</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-ink-100">
              {problemComparison.map((row) => (
                <div key={row.category} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm">
                  <div className="md:col-span-4 p-4 font-semibold text-ink-800 bg-ink-50/30">
                    {row.category}
                  </div>
                  <div className="md:col-span-4 p-4 text-ink-500 border-t md:border-t-0 md:border-l border-ink-100 bg-error-50/20 leading-relaxed">
                    {row.traditional}
                  </div>
                  <div className="md:col-span-4 p-4 text-navy-700 border-t md:border-t-0 md:border-l border-ink-100 bg-navy-50/30 font-medium leading-relaxed">
                    {row.eduvia}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
