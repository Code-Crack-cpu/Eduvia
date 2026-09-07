import React, { useState } from 'react';
import { ExamTrack } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { AIIntelligence } from './components/AIIntelligence';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<ExamTrack>('NEET');

  const scrollToWaitlist = () => {
    const el = document.getElementById('early-access');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar
        currentTrack={currentTrack}
        onTrackChange={setCurrentTrack}
        onOpenWaitlist={scrollToWaitlist}
      />

      <main>
        {/* Hero Section with Live AI Dashboard Mockup */}
        <Hero
          currentTrack={currentTrack}
          onTrackChange={setCurrentTrack}
          onOpenWaitlist={scrollToWaitlist}
        />

        {/* Problem Section: Why Generic Coaching Fails */}
        <Problem />

        {/* 4 Core Features */}
        <Features onOpenWaitlist={scrollToWaitlist} />

        {/* How It Works: 4-Step Learning Loop */}
        <HowItWorks />

        {/* AI Intelligence: Diagnostic Inspector */}
        <AIIntelligence
          currentTrack={currentTrack}
          onOpenWaitlist={scrollToWaitlist}
        />

        {/* 6 Key Benefits */}
        <Benefits />

        {/* Testimonials / Cohort Journeys (Demo Labeled) */}
        <Testimonials />

        {/* Final CTA: Early Access Waitlist Form */}
        <EarlyAccess initialTrack={currentTrack} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
