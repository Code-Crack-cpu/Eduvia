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
    <section id="benefits" className="py-24 relative overflow-hidden bg-white border-t border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-success-50 border border-success-200 text-success-600 text-xs font-semibold mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-success-500" />
            <span>High-Yield Value</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 tracking-tight leading-tight mb-6">
            Engineered for rank gains,{' '}
            <span className="text-navy-700">
              built for student peace of mind.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed">
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
                className="bg-white border border-ink-200 rounded-2xl p-7 hover:border-navy-200 transition-all duration-300 group hover:-translate-y-1 hover:shadow-card-hover relative flex flex-col justify-between shadow-soft"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-navy-100 transition-all">
                    <Icon className="w-6 h-6 text-navy-500 group-hover:text-navy-600" />
                  </div>

                  <h3 className="text-xl font-bold text-ink-900 mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-ink-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-100 flex items-center justify-between text-xs">
                  <span className="text-ink-400">Core Impact:</span>
                  <span className="font-semibold text-success-600 bg-success-50 px-2.5 py-1 rounded-md border border-success-200">
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
