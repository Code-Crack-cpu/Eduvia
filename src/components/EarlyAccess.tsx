import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Users, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ExamTrack, WaitlistSubmission } from '../types';
import { sanitizeInput, validateHumanName, validateEmail } from '../utils/security';

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
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Sync initial track if prop changes and not submitted yet
  useEffect(() => {
    if (!isSubmitted) {
      setFormData((prev) => ({ ...prev, exam: initialTrack }));
    }
  }, [initialTrack, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // 1. Client Pre-flight Name Validation
    const nameCheck = validateHumanName(formData.fullName);
    if (!nameCheck.valid) {
      setErrorMsg(nameCheck.error || 'Please enter a valid full name.');
      return;
    }

    // 2. Client Pre-flight Email Validation
    const emailCheck = validateEmail(formData.email);
    if (!emailCheck.valid) {
      setErrorMsg(emailCheck.error || 'Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    const safePayload = {
      fullName: sanitizeInput(formData.fullName, 60),
      email: sanitizeInput(formData.email.trim().toLowerCase(), 100),
      phone: formData.phone ? sanitizeInput(formData.phone, 20) : undefined,
      exam: formData.exam,
      targetYear: formData.targetYear,
      currentClass: formData.currentClass,
      company_trap: honeypot // Honeypot field sent to backend
    };

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(safePayload)
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setErrorMsg(result.error || 'Registration failed. Please check your details and try again.');
        setIsLoading(false);
        return;
      }

      // Successful server registration
      setQueueNumber(result.data?.queuePosition || null);
      setIsExistingUser(Boolean(result.isExisting));
      setIsSubmitted(true);
      setIsLoading(false);

      // Trigger Celebration Confetti on new registration
      if (!result.isExisting) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3B6BDB', '#5B82F5', '#10B981', '#A78BFA']
          });
        } catch {
          // confetti fallback
        }
      }
    } catch {
      setErrorMsg('Unable to connect to registration server. Please check your connection and try again.');
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsExistingUser(false);
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
    <section id="early-access" className="py-24 relative overflow-hidden bg-[#F8FAFC] border-t border-ink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-50 border border-navy-100 text-navy-600 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Limited Beta Access Cohort 01</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink-900 tracking-tight leading-tight mb-4">
            Your preparation can be{' '}
            <span className="text-navy-700">
              smarter.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-2xl mx-auto">
            Join the early access waitlist for Eduvia. Get personalized diagnostic baseline tests, daily high-yield schedules, and 24/7 AI tutor guidance before public release.
          </p>
        </div>

        {/* Waitlist Box */}
        <div className="rounded-2xl bg-white border border-ink-200 p-6 sm:p-10 shadow-card relative">
          {/* Security Badge in Card Corner */}
          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-50 border border-success-200 text-[11px] text-success-600 font-medium">
            <Lock className="w-3 h-3 text-success-500" />
            <span>Server-Verified & Rate-Limited</span>
          </div>

          {isSubmitted ? (
            /* Success State - Only shown upon verified server response */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-success-50 border border-success-200 flex items-center justify-center mx-auto shadow-soft">
                <CheckCircle2 className="w-8 h-8 text-success-500" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-success-600 font-bold">
                  {isExistingUser ? 'Already Registered' : 'Server Verified Registration'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink-900">
                  {isExistingUser ? "You're already on the priority list!" : "You're on the priority invite list!"}
                </h3>
                <p className="text-sm text-ink-500 max-w-md mx-auto">
                  {isExistingUser
                    ? `Your registration for the ${formData.exam} Track is active in our secure database.`
                    : `We have reserved your beta access for the ${formData.exam} Track. When invites roll out, your personalized diagnostic baseline will be waiting for you.`}
                </p>
              </div>

              {/* Queue Badge */}
              {queueNumber && (
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-ink-50 border border-navy-200 text-ink-700 text-sm">
                  <Users className="w-4 h-4 text-navy-500" />
                  <span>Verified Queue Position:</span>
                  <span className="font-mono font-bold text-base text-navy-600">
                    #{queueNumber}
                  </span>
                </div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-ink-400 hover:text-ink-600 underline underline-offset-4"
                >
                  Register another student
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
                <div className="p-3.5 rounded-xl bg-error-50 border border-error-200 flex items-center gap-2.5 text-xs text-error-600 animate-fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-ink-600 mb-1.5">
                    Student Full Name <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    maxLength={60}
                    placeholder="e.g. Shaikh Sohail"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
                  />
                  <span className="text-[10px] text-ink-400 mt-1 block">Max 60 characters · Alphabets and spaces only</span>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-ink-600 mb-1.5">
                    Email Address <span className="text-error-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="e.g. aspirant@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ink-50 border border-ink-200 text-ink-900 placeholder-ink-400 text-sm focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-400 transition-colors"
                  />
                  <span className="text-[10px] text-ink-400 mt-1 block">Valid RFC 5322 format required</span>
                </div>
              </div>

              {/* Exam & Class Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Target Exam */}
                <div>
                  <label className="block text-xs font-semibold text-ink-600 mb-1.5">
                    Target Exam
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, exam: 'NEET' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.exam === 'NEET'
                          ? 'bg-success-50 text-success-700 border-success-300'
                          : 'bg-ink-50 text-ink-400 border-ink-200 hover:border-ink-300'
                      }`}
                    >
                      NEET
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, exam: 'JEE' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        formData.exam === 'JEE'
                          ? 'bg-navy-50 text-navy-700 border-navy-300'
                          : 'bg-ink-50 text-ink-400 border-ink-200 hover:border-ink-300'
                      }`}
                    >
                      JEE
                    </button>
                  </div>
                </div>

                {/* Current Class */}
                <div>
                  <label htmlFor="currentClass" className="block text-xs font-semibold text-ink-600 mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ink-50 border border-ink-200 text-ink-700 text-xs focus:outline-none focus:border-navy-400"
                  >
                    <option value="Class 11">Class 11 (2-Year Journey)</option>
                    <option value="Class 12">Class 12 (Board + Prep)</option>
                    <option value="Dropper">Dropper / Repeater Cohort</option>
                  </select>
                </div>

                {/* Target Exam Year */}
                <div>
                  <label htmlFor="targetYear" className="block text-xs font-semibold text-ink-600 mb-1.5">
                    Target Exam Year
                  </label>
                  <select
                    id="targetYear"
                    value={formData.targetYear}
                    onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-ink-50 border border-ink-200 text-ink-700 text-xs focus:outline-none focus:border-navy-400"
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
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-xl font-semibold text-white text-base bg-navy-800 hover:bg-navy-700 shadow-card hover:shadow-card-hover transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verifying & Securing Entry...</span>
                  </>
                ) : (
                  <>
                    <span>Claim Free Early Beta Access</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-ink-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-success-500" />
                  Server validated · Zero client-side storage of personal data
                </span>
                <span className="text-ink-400 font-mono">
                  ACID database backed
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
