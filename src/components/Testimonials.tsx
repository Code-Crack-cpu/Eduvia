import React from 'react';
import { Quote, Info, CheckCircle2 } from 'lucide-react';
import { demoTestimonials } from '../data/eduviaData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#080B12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Transparent Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulated Aspirant Journeys · Beta Research Prototype</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Designed around real student pain points,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-indigo-300 to-sky-400">
              not marketing gimmicks.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The scenarios below illustrate representative student journeys from our early user research interviews with NEET repeaters and JEE aspirants struggling in 100+ batch coaching institutes.
          </p>

          <div className="mt-4 inline-block px-3 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[11px] text-slate-400 font-mono">
            Notice: No fake ratings or fabricated "50,000+ top rankers" claims. We believe in 100% honesty.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {demoTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E1528] border border-white/[0.07] rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        item.track === 'NEET'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-indigo-500/15 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      {item.track} Track
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.persona}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-indigo-500/40 group-hover:text-indigo-400/60 transition-colors" />
                </div>

                <div className="text-xs text-indigo-300/90 font-medium mb-3">
                  Prep Struggle: {item.scenario}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  <div className="text-[11px] text-slate-400">Alpha Cohort Participant</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
                    {item.metricGain}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
