import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Clock, Check, AlertTriangle, BookOpen } from 'lucide-react';
import { ExamTrack } from '../types';

interface HeroProps {
  currentTrack: ExamTrack;
  onTrackChange: (track: ExamTrack) => void;
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentTrack, onTrackChange, onOpenWaitlist }) => {
  // Interactive options inside the live NTA mockup
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  const [showAutopsy, setShowAutopsy] = useState(true);

  const neetQuestion = {
    examName: 'NEET 2026 CBT Simulation',
    subject: 'Physics · Rotational Dynamics',
    ncertRef: 'NCERT Class 11, Vol 1, Page 174',
    prompt: 'A solid cylinder rolls down an inclined plane of height h without slipping. What fraction of its total kinetic energy is rotational kinetic energy?',
    options: [
      { id: 0, text: '1/2 (50%)', isTrap: true, trapReason: 'Common trap: Forgot to divide by total KE (translational + rotational).' },
      { id: 1, text: '1/3 (33.3%)', isCorrect: true, trapReason: 'Correct! K_rot / (K_trans + K_rot) = (1/4 Iω²) / (3/4 mv²) = 1/3.' },
      { id: 2, text: '2/5 (40%)', isTrap: true, trapReason: 'Formula confusion: Used the solid sphere formula instead of solid cylinder.' },
      { id: 3, text: '2/3 (66.7%)', isTrap: true, trapReason: 'Inverted ratio calculation.' },
    ],
    yieldStats: '+4 Marks in NEET · High recurrence (2021, 2023, 2024)'
  };

  const jeeQuestion = {
    examName: 'JEE Main CBT Simulation',
    subject: 'Mathematics · Calculus (Definite Integrals)',
    ncertRef: 'NCERT Class 12, Vol 2, Page 334',
    prompt: 'Evaluate ∫ [0 to π] (x · sin x) / (1 + cos² x) dx using King’s Property (f(a+b-x)).',
    options: [
      { id: 0, text: 'π² / 2', isTrap: true, trapReason: 'Sign error when applying substitution u = cos x.' },
      { id: 1, text: 'π² / 4', isCorrect: true, trapReason: 'Correct! 2I = π ∫ (sin x / (1 + cos² x)) dx = π [tan⁻¹(cos x)] = π²/4.' },
      { id: 2, text: 'π / 4', isTrap: true, trapReason: 'Lost the π multiplier during symmetry combination.' },
      { id: 3, text: '0', isTrap: true, trapReason: 'Assumed odd function without checking bounds.' },
    ],
    yieldStats: '+4 Marks in JEE Main · NTA Favorite Archetype'
  };

  const activeQ = currentTrack === 'NEET' ? neetQuestion : jeeQuestion;

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#07090E]">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      {/* Very subtle dark lighting gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-950/20 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Hero Text Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Subtle Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full clean-pill mb-6 text-xs text-slate-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Built by VIT-AP engineers for serious NEET & JEE aspirants</span>
          </div>

          {/* Heading with Clean Craft Contrast */}
          <h1 className="heading-hero text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Crack NEET & JEE with a learning system{' '}
            <span className="text-slate-400 font-normal">built around you.</span>
          </h1>

          {/* Grounded Human Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Factory coaching batches treat 150 students at the same speed. Eduvia diagnoses your exact calculation slips, flags conceptual blindspots, and gives you a 45-minute high-yield practice set every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all text-sm"
            >
              <Play className="w-3.5 h-3.5 text-slate-400" />
              <span>See How the Engine Works</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Latest 2026 NTA Syllabus
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              NCERT Line-by-Line Citations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Free Beta Cohort
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TACTILE NTA CBT WORKSPACE MOCKUP (Authentic Aspirant UI)      */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-[#0B0F19] border border-white/10 shadow-2xl overflow-hidden">
            {/* Top NTA Window Bar */}
            <div className="bg-[#090D15] px-4 py-2.5 border-b border-white/[0.08] flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
                <span className="font-mono text-slate-400 font-medium hidden sm:inline">
                  {activeQ.examName} · Section A
                </span>
              </div>

              {/* Exam Switcher inside Workspace */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-white/10 font-mono text-[11px] text-slate-300">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>02:18:44 Left</span>
                </div>

                <div className="flex items-center p-0.5 rounded bg-slate-900 border border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      onTrackChange('NEET');
                      setSelectedOption(1);
                    }}
                    className={`px-2 py-0.5 text-[11px] font-semibold rounded ${
                      currentTrack === 'NEET'
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    NEET
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onTrackChange('JEE');
                      setSelectedOption(1);
                    }}
                    className={`px-2 py-0.5 text-[11px] font-semibold rounded ${
                      currentTrack === 'JEE'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    JEE
                  </button>
                </div>
              </div>
            </div>

            {/* Question Workspace Body */}
            <div className="p-5 sm:p-7 space-y-6">
              {/* Question Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono font-medium">
                    Question #14
                  </span>
                  <span className="text-slate-400 font-medium">
                    {activeQ.subject}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <BookOpen className="w-3 h-3 text-indigo-400" />
                    <span>{activeQ.ncertRef}</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    +4 / -1 Scheme
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                {activeQ.prompt}
              </div>

              {/* Interactive MCQ Options */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  Select an option to see instant AI mistake analysis:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeQ.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setSelectedOption(opt.id);
                          setShowAutopsy(true);
                        }}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'bg-emerald-950/20 border-emerald-500/50 text-white shadow-sm'
                              : 'bg-rose-950/20 border-rose-500/50 text-white shadow-sm'
                            : 'bg-slate-900/60 border-white/[0.06] text-slate-300 hover:bg-slate-900 hover:border-white/15'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                            isSelected
                              ? opt.isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-600 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {String.fromCharCode(65 + opt.id)}
                        </span>
                        <span className="pt-0.5 leading-snug">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AI Diagnostic Autopsy Box for Selected Option */}
              {showAutopsy && selectedOption !== null && (
                <div className="rounded-xl bg-[#080C14] border border-white/10 p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold">
                      {activeQ.options[selectedOption].isCorrect ? (
                        <>
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="text-emerald-400">Correct Reasoning Identified</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                          <span className="text-rose-400">Careless Trap Detected (Cost: -5 marks vs correct)</span>
                        </>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {activeQ.yieldStats}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {activeQ.options[selectedOption].trapReason}
                  </p>

                  <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-indigo-400" />
                      Remediation added to your personal Spaced Revision Deck
                    </span>
                    <button
                      type="button"
                      onClick={onOpenWaitlist}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-2"
                    >
                      Explore Full Mock System →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
