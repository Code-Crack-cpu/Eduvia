import React from 'react';
import { Sparkles, Heart, Terminal, ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080F] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group" aria-label="Eduvia Home">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-600/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Eduvia
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Smart Prep. Personal Path. One Goal – Success. An adaptive AI learning companion engineered to replace factory coaching batches for NEET & JEE aspirants.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>
                <span className="text-slate-300 font-semibold">Origin:</span> Founded by Shaikh Mohammed Sohail & Team
              </div>
              <div>
                <span className="text-slate-300 font-semibold">Campus:</span> VIT-AP, Amaravati, Andhra Pradesh, India
              </div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  AI Learning Paths
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  Adaptive Mock Tests
                </a>
              </li>
              <li>
                <a href="#ai-intelligence" className="hover:text-indigo-400 transition-colors">
                  Diagnostic Telemetry
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">
                  4-Step Loop
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Exam Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Exam Tracks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-slate-300 transition-colors cursor-default">
                  NEET 2026 (Medical)
                </span>
              </li>
              <li>
                <span className="hover:text-slate-300 transition-colors cursor-default">
                  NEET 2027 (Foundation)
                </span>
              </li>
              <li>
                <span className="hover:text-slate-300 transition-colors cursor-default">
                  JEE Main 2026 (NTA CBT)
                </span>
              </li>
              <li>
                <span className="hover:text-slate-300 transition-colors cursor-default">
                  JEE Advanced (IIT Track)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Community & Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:sohail.24bca8165@vitapstudent.ac.in"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span className="truncate">sohail.24bca8165@vitapstudent.ac.in</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                <span>v1.0.0 (Beta Prototype)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AI Diagnostic Engine Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>© {currentYear} Eduvia. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for NEET & JEE aspirants across India.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-slate-400">
              Zero fabricated claims · Educational prototype
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
