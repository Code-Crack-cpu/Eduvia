import React from 'react';
import { Compass, Crosshair, TrendingUp, Flame, Award, Shield } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Stop Morning Decision Paralysis',
      description: 'Never waste the first 45 minutes of your morning wondering which reference book to open. Get a 3-task prioritized study queue calculated from yesterday’s test mistakes.',
      metric: 'Zero Wasted Prep Time'
    },
    {
      icon: Crosshair,
      title: 'Eliminate the -1 Negative Bleed',
      description: 'Most aspirants fail to crack cutoffs not because of hard questions, but because they lose 25 to 40 marks to reckless guesses on moderate questions. Eduvia trains risk judgment.',
      metric: 'Save 25–40 Marks'
    },
    {
      icon: TrendingUp,
      title: 'NCERT Line-to-Question Bridge',
      description: '90%+ of NEET Biology and Inorganic Chemistry comes straight from NCERT. Our diagnostic engine maps every practice question directly to its textbook paragraph.',
      metric: '100% NCERT Alignment'
    },
    {
      icon: Flame,
      title: 'Anti-Burnout 45-Minute Cycles',
      description: 'Studying 14 hours blindly leads to severe cognitive fatigue. Eduvia breaks your day into focused 45-minute problem-solving sprints with active recall intervals.',
      metric: 'Sustainable Routine'
    },
    {
      icon: Award,
      title: 'Real NTA Exam CBT Parity',
      description: 'Identical interface to the National Testing Agency computer-based test: question palette, marked-for-review tags, section timers, and negative-marking accounting.',
      metric: 'Zero Exam Hall Surprise'
    },
    {
      icon: Shield,
      title: 'Break the Coaching Monopoly',
      description: 'Tier-1 preparation should not require spending ₹2.5 Lakhs on Kota hostels. Eduvia brings institutional-grade diagnostic technology directly to your study desk.',
      metric: 'Equitable & Accessible'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300 mb-4">
            <span>Measurable Rank Impact</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built for actual exam day score gains.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every feature in Eduvia is designed to solve a specific, recurring bottleneck Indian students face during the 18-month NEET and JEE preparation grind.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-xl bg-[#0B0F19] border border-white/[0.07] p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-slate-800/70 border border-white/10 flex items-center justify-center mb-4 text-slate-300">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Core Metric:</span>
                  <span className="text-emerald-400 font-semibold">{b.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
