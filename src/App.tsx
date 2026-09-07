import React, { useState, useEffect } from 'react';
import { ExamTrack } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { AIIntelligence } from './components/AIIntelligence';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EarlyAccessPage } from './pages/EarlyAccessPage';

export const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<ExamTrack>('NEET');
  
  // Clean client-side routing using History API
  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase();
    if (path === '/early-access' || path === '/waitlist') {
      return '/early-access';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/early-access' || path === '/waitlist') {
        setCurrentRoute('/early-access');
      } else {
        setCurrentRoute('/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // If on the dedicated Early Access page
  if (currentRoute === '/early-access') {
    return (
      <EarlyAccessPage
        currentTrack={currentTrack}
        onTrackChange={setCurrentTrack}
        onNavigateHome={() => navigateTo('/')}
      />
    );
  }

  // Otherwise, render the main landing page
  return (
    <div className="min-h-screen bg-[#080B12] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar
        currentTrack={currentTrack}
        onTrackChange={setCurrentTrack}
        onOpenWaitlist={() => navigateTo('/early-access')}
      />

      <main>
        {/* Hero Section with Live AI Dashboard Mockup */}
        <Hero
          currentTrack={currentTrack}
          onTrackChange={setCurrentTrack}
          onOpenWaitlist={() => navigateTo('/early-access')}
        />

        {/* Problem Section: Why Generic Coaching Fails */}
        <Problem />

        {/* 4 Core Features */}
        <Features onOpenWaitlist={() => navigateTo('/early-access')} />

        {/* How It Works: 4-Step Learning Loop */}
        <HowItWorks />

        {/* AI Intelligence: Diagnostic Inspector */}
        <AIIntelligence
          currentTrack={currentTrack}
          onOpenWaitlist={() => navigateTo('/early-access')}
        />

        {/* 6 Key Benefits */}
        <Benefits />

        {/* Testimonials / Cohort Journeys (Demo Labeled) */}
        <Testimonials />

        {/* Final CTA Section: Leads to dedicated /early-access page */}
        <FinalCTA
          currentTrack={currentTrack}
          onNavigateToEarlyAccess={() => navigateTo('/early-access')}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
