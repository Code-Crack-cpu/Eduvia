import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
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
    { label: 'Why Coaching Fails', href: '#problem' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Mock Error Autopsy', href: '#ai-intelligence' },
    { label: 'Platform Features', href: '#features' },
    { label: 'Student Journeys', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Eduvia Home"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Eduvia
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-medium">
                v1.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Exam Mode Toggle */}
            <div
              className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold"
              role="radiogroup"
              aria-label="Select Target Exam Track"
            >
              <button
                type="button"
                onClick={() => onTrackChange('NEET')}
                aria-checked={currentTrack === 'NEET'}
                role="radio"
                className={`px-3 py-1 rounded-md transition-all ${
                  currentTrack === 'NEET'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                NEET 2026
              </button>
              <button
                type="button"
                onClick={() => onTrackChange('JEE')}
                aria-checked={currentTrack === 'JEE'}
                role="radio"
                className={`px-3 py-1 rounded-md transition-all ${
                  currentTrack === 'JEE'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                JEE Main/Adv
              </button>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-slate-100/10 hover:bg-slate-100/15 border border-white/15 hover:border-white/25 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onTrackChange(currentTrack === 'NEET' ? 'JEE' : 'NEET')}
              className="px-2.5 py-1 text-xs font-semibold rounded-md border border-white/10 bg-slate-900 text-indigo-300"
            >
              {currentTrack}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090E] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5"
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
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
