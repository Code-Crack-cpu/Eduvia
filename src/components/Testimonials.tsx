import React from 'react';
import { Quote, Info } from 'lucide-react';
import { demoTestimonials } from '../data/eduviaData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#07090E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill text-xs font-semibold text-slate-300 mb-4">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Research Cohort Profiles · Aspirant Interviews</span>
          </div>

          <h2 className="heading-section text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built from real student frustration.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            These representative journeys reflect qualitative interviews conducted with NEET repeaters and JEE aspirants struggling in 150-student coaching batches.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {demoTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#0B0F19] border border-white/[0.07] p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                        item.track === 'NEET'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}
                    >
                      {item.track} Track
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.persona}
                    </span>
                  </div>
                  <Quote className="w-4 h-4 text-slate-600" />
                </div>

                <div className="text-xs font-medium text-slate-400 mb-2.5">
                  Prep Struggle: <span className="text-slate-200">{item.scenario}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-500">Student Research Interviewee</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-500 font-mono uppercase">{item.metricLabel}</div>
                  <div className="text-xs font-mono font-bold text-emerald-400">{item.metricGain}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
