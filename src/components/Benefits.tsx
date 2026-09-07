import React from 'react';
import { Compass, Crosshair, TrendingUp, Flame, Award, Users, CheckCircle2 } from 'lucide-react';
import { benefitsList } from '../data/eduviaData';

export const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Crosshair':
        return Crosshair;
      case 'TrendingUp':
        return TrendingUp;
      case 'Flame':
        return Flame;
      case 'Award':
        return Award;
      case 'Users':
      default:
        return Users;
    }
  };

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-[#0A0E1B] border-t border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>High-Yield Value</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Engineered for rank gains,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              built for student peace of mind.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The NEET and JEE journey is an endurance marathon. Eduvia turns overwhelming 130-chapter syllabi into manageable, structured victories every single day.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((benefit) => {
            const Icon = getIcon(benefit.icon);

            return (
              <div
                key={benefit.title}
                className="bg-[#0E1528]/80 border border-white/[0.07] rounded-2xl p-7 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/40 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                    <Icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Core Impact:</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
