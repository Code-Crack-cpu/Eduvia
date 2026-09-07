import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { ExamTrack } from '../types';

interface NavbarProps {
  currentTrack: ExamTrack;
  onTrackChange: (track: ExamTrack) => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTrack, onTrackChange, onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'AI Engine', href: '#ai-intelligence' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-indigo-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg"
            aria-label="Eduvia Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-sky-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Eduvia
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                AI Beta
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Track Switcher Toggle */}
            <div
              className="flex items-center p-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-semibold"
              role="radiogroup"
              aria-label="Select Target Exam Track"
            >
              <button
                type="button"
                onClick={() => onTrackChange('NEET')}
                aria-checked={currentTrack === 'NEET'}
                role="radio"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentTrack === 'NEET'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-950/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                NEET
              </button>
              <button
                type="button"
                onClick={() => onTrackChange('JEE')}
                aria-checked={currentTrack === 'JEE'}
                role="radio"
                className={`px-3 py-1 rounded-full transition-all ${
                  currentTrack === 'JEE'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-950/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                JEE
              </button>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onTrackChange(currentTrack === 'NEET' ? 'JEE' : 'NEET')}
              className="px-2.5 py-1 text-xs font-semibold rounded-md border border-white/10 bg-slate-900 text-indigo-300"
              aria-label="Toggle exam track"
            >
              {currentTrack}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F19] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs text-slate-400 font-medium">Target Exam Mode:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onTrackChange('NEET')}
                className={`px-3 py-1 text-xs font-semibold rounded-md ${
                  currentTrack === 'NEET'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                NEET
              </button>
              <button
                type="button"
                onClick={() => onTrackChange('JEE')}
                className={`px-3 py-1 text-xs font-semibold rounded-md ${
                  currentTrack === 'JEE'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                JEE
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated for NEET 2026/2027 & JEE Main/Adv</span>
          </div>
        </div>
      )}
    </header>
  );
};
