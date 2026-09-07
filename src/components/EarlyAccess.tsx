import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Users, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ExamTrack, WaitlistSubmission } from '../types';
import {
  sanitizeInput,
  validateHumanName,
  validateEmail,
  checkRateLimit,
  recordAttempt,
  safeGetStoredWaitlist
} from '../utils/security';

interface EarlyAccessProps {
  initialTrack: ExamTrack;
}

export const EarlyAccess: React.FC<EarlyAccessProps> = ({ initialTrack }) => {
  const [formData, setFormData] = useState<WaitlistSubmission>({
    fullName: '',
    email: '',
    phone: '',
    exam: initialTrack,
    targetYear: '2026',
    currentClass: 'Class 12'
  });

  // Honeypot field for bot/scraper detection
  const [honeypot, setHoneypot] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [rateLimitWait, setRateLimitWait] = useState<number | null>(null);

  // Sync initial track if prop changes and not submitted yet
  useEffect(() => {
    if (!isSubmitted) {
      setFormData((prev) => ({ ...prev, exam: initialTrack }));
    }
  }, [initialTrack, isSubmitted]);

  // Safely check existing local storage using security validator
  useEffect(() => {
    const verified = safeGetStoredWaitlist();
    if (verified && verified.queueNumber) {
      setQueueNumber(verified.queueNumber);
      setFormData(verified);
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setRateLimitWait(null);

    // 1. Bot Honeypot check: If the hidden honeypot field is filled, silently discard
    if (honeypot && honeypot.trim().length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setQueueNumber(404);
      }, 800);
      return;
    }

    // 2. Client-side Rate Limiting: Prevent automated loops & form flooding
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
      setRateLimitWait(rateCheck.waitSeconds || 30);
      setErrorMsg(
        `Too many submission attempts. Please wait ${rateCheck.waitSeconds || 30}s before trying again.`
      );
      return;
    }

    // 3. Strict Name Validation & Sanitization
    const nameCheck = validateHumanName(formData.fullName);
    if (!nameCheck.valid) {
      setErrorMsg(nameCheck.error || 'Invalid name provided.');
      return;
    }

    // 4. Strict Email Validation
    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.valid) {
      setErrorMsg(emailCheck.error || 'Invalid email address provided.');
      return;
    }

    // Record submission attempt in rate limiter
    recordAttempt();
    setIsLoading(true);

    // Sanitize before storing
    const safeName = sanitizeInput(formData.fullName, 60);
    const safeEmail = sanitizeInput(formData.email.trim().toLowerCase(), 100);

    // Simulate secure submission
    setTimeout(() => {
      setIsLoading(false);
      const randomQueue = Math.floor(Math.random() * 80) + 215;
      setQueueNumber(randomQueue);
      setIsSubmitted(true);

      const safePayload = {
        fullName: safeName,
        email: safeEmail,
        exam: formData.exam,
        targetYear: formData.targetYear,
        currentClass: formData.currentClass,
        queueNumber: randomQueue,
        joinedAt: new Date().toISOString()
      };

      try {
        localStorage.setItem('eduvia_waitlist_user', JSON.stringify(safePayload));
      } catch {
        // Storage failure fallback
      }

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366F1', '#8B5CF6', '#10B981', '#38BDF8']
        });
      } catch {
        // confetti fallback
      }
    }, 900);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('eduvia_waitlist_user');
    } catch {
      // ignore
    }
    setIsSubmitted(false);
    setQueueNumber(null);
    setErrorMsg(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      exam: initialTrack,
      targetYear: '2026',
      currentClass: 'Class 12'
    });
  };

  return (
    <section id="early-access" className="py-24 relative overflow-hidden bg-radial-hero border-t border-white/[0.08]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Beta Access Cohort 01</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Your preparation can be{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">
              smarter.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Join the early access waitlist for Eduvia. Get personalized diagnostic baseline tests, daily high-yield schedules, and 24/7 AI tutor guidance before public release.
          </p>
        </div>

        {/* Waitlist Box */}
        <div className="rounded-3xl bg-[#0D1324] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          {/* Security Badge in Card Corner */}
          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/20 text-[11px] text-emerald-400 font-medium">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span>Rate-Limited & Sanitized</span>
          </div>

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/40">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Registration Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  You're on the priority invite list!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  We have reserved your beta access for the <span className="text-indigo-400 font-semibold">{formData.exam} Track</span>. When invites roll out, your personalized diagnostic baseline will be waiting for you.
                </p>
              </div>

              {/* Queue Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#090D18] border border-indigo-500/30 text-slate-200 text-sm">
                <Users className="w-4 h-4 text-indigo-400" />
                <span>Your Waitlist Priority Number:</span>
                <span className="font-mono font-bold text-base text-indigo-300">
                  #{queueNumber || 234}
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-4"
                >
                  Submit with another email (Reset demo)
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Invisible Honeypot field to trap automated bots & scripts */}
              <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="company_trap">Leave this blank</label>
                <input
                  type="text"
                  id="company_trap"
                  name="company_trap"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Student Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    maxLength={60}
                    placeholder="e.g. Shaikh Sohail"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Max 60 characters · Alphabets and spaces only</span>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="e.g. aspirant@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">Valid RFC 5322 format required</span>
                </div>
              </div>

              {/* Exam & Class Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Target Exam */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Target Exam
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, exam: 'NEET' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.exam === 'NEET'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                          : 'bg-[#090D18] text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      NEET
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, exam: 'JEE' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.exam === 'JEE'
                          ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
                          : 'bg-[#090D18] text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      JEE
                    </button>
                  </div>
                </div>

                {/* Current Class */}
                <div>
                  <label htmlFor="currentClass" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Current Stage
                  </label>
                  <select
                    id="currentClass"
                    value={formData.currentClass}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentClass: e.target.value as 'Class 11' | 'Class 12' | 'Dropper'
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D18] border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Class 11">Class 11 (2-Year Journey)</option>
                    <option value="Class 12">Class 12 (Board + Prep)</option>
                    <option value="Dropper">Dropper / Repeater Cohort</option>
                  </select>
                </div>

                {/* Target Exam Year */}
                <div>
                  <label htmlFor="targetYear" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Target Exam Year
                  </label>
                  <select
                    id="targetYear"
                    value={formData.targetYear}
                    onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090D18] border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || rateLimitWait !== null}
                className="w-full py-4 px-6 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying & Securing Entry...</span>
                  </>
                ) : rateLimitWait !== null ? (
                  <span>Cooldown Active ({rateLimitWait}s)</span>
                ) : (
                  <>
                    <span>Claim Free Early Beta Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Honeypot protected · Input sanitized against script & SQL injection
                </span>
                <span className="text-slate-500 font-mono">
                  Client-side rate limit: 3/min
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
