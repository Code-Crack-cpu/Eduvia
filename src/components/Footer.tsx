import React from 'react';
import { Sparkles, ArrowUp, Mail, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] pt-14 pb-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Eduvia Home">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Eduvia
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Smart Prep. Personal Path. One Goal – Success. An adaptive diagnostic learning companion engineered to replace factory coaching batches for NEET & JEE aspirants.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-0.5">
              <div>
                <span className="text-slate-400 font-medium">Built by:</span> Shaikh Mohammed Sohail & Team
              </div>
              <div>
                <span className="text-slate-400 font-medium">Campus:</span> VIT-AP University, Amaravati, Andhra Pradesh
              </div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Diagnostic Suite
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#features" className="hover:text-slate-200 transition-colors">
                  Negative Marking Autopsy
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-200 transition-colors">
                  Daily High-Yield Queue
                </a>
              </li>
              <li>
                <a href="#ai-intelligence" className="hover:text-slate-200 transition-colors">
                  NCERT Line Citations
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-slate-200 transition-colors">
                  4-Step Study Loop
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Exam Tracks */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Exam Tracks
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <span className="text-slate-400">
                  NEET 2026 (Medical)
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  NEET 2027 (Foundation)
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  JEE Main 2026 (NTA CBT)
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  JEE Advanced (IIT Track)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:sohail.24bca8165@vitapstudent.ac.in"
                className="flex items-center gap-2 hover:text-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span className="truncate">sohail.24bca8165@vitapstudent.ac.in</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>v1.0.0 (Production Build)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Server API Online (Port 3001)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} Eduvia. Designed and developed with care for NEET & JEE aspirants.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">
              Zero fabricated claims · Authentic student research
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
