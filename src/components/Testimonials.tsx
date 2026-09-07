import React from 'react';
import { Quote, Info, CheckCircle2 } from 'lucide-react';
import { demoTestimonials } from '../data/eduviaData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Transparent Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-warning-50 border border-warning-200 text-warning-700 text-xs font-semibold mb-4">
            <Info className="w-3.5 h-3.5 text-warning-500" />
            <span>Simulated Aspirant Journeys · Beta Research Prototype</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-6">
            Designed around real student pain points,{' '}
            <span className="text-navy-700">
              not marketing gimmicks.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
            The scenarios below illustrate representative student journeys from our early user research interviews with NEET repeaters and JEE aspirants struggling in 100+ batch coaching institutes.
          </p>

          <div className="mt-4 inline-block px-3 py-1 rounded-md bg-white border border-ink-200 text-[11px] text-ink-400 font-mono">
            Notice: No fake ratings or fabricated "50,000+ top rankers" claims. We believe in 100% honesty.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {demoTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-ink-200 rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-navy-200 transition-all duration-300 shadow-soft hover:shadow-card-hover group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        item.track === 'NEET'
                          ? 'bg-success-50 text-success-600 border border-success-200'
                          : 'bg-navy-50 text-navy-600 border border-navy-100'
                      }`}
                    >
                      {item.track} Track
                    </span>
                    <span className="text-xs text-ink-400 font-mono">
                      {item.persona}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-navy-300 group-hover:text-navy-400 transition-colors" />
                </div>

                <div className="text-xs text-navy-600 font-medium mb-3">
                  Prep Struggle: {item.scenario}
                </div>

                <p className="text-sm text-ink-600 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-ink-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-ink-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-ink-300" />
                  </div>
                  <div className="text-[11px] text-ink-400">Alpha Cohort Participant</div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-ink-400 font-medium uppercase tracking-wider">
                    {item.metricLabel}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-success-600 font-mono">
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
