import { WaitlistSubmission } from '../types';

/**
 * Strips HTML tags, script entities, control characters, and enforces character bounds.
 */
export function sanitizeInput(input: string, maxLength = 120): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/[<>'"`;\\{}[\]]/g, '') // Strip script/injection metacharacters
    .replace(/[\x00-\x1F\x7F]/g, '') // Strip control characters
    .trim()
    .slice(0, maxLength);
}

/**
 * Validates a human name: only alphabets, spaces, hyphens, and apostrophes.
 * Length must be between 2 and 60 characters.
 */
export function validateHumanName(name: string): { valid: boolean; error?: string } {
  const sanitized = sanitizeInput(name, 60);
  if (!sanitized || sanitized.length < 2) {
    return { valid: false, error: 'Full name must be at least 2 characters.' };
  }
  if (sanitized.length > 60) {
    return { valid: false, error: 'Full name cannot exceed 60 characters.' };
  }

  // Check for suspicious script/injection keywords
  const suspicious = /(script|alert|prompt|eval|union|select|drop|truncate|<|>)/i;
  if (suspicious.test(name)) {
    return { valid: false, error: 'Invalid characters detected in name.' };
  }

  const nameRegex = /^[a-zA-Z\u00C0-\u024F\s.'-]+$/;
  if (!nameRegex.test(sanitized)) {
    return { valid: false, error: 'Name should only contain letters, spaces, hyphens, and apostrophes.' };
  }

  return { valid: true };
}

/**
 * RFC 5322 standard email validation with length and structure checks.
 */
export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email address is required.' };
  }

  const clean = email.trim().toLowerCase();
  if (clean.length > 100) {
    return { valid: false, error: 'Email address is too long (maximum 100 characters).' };
  }

  // Disallow control characters, angle brackets, quotes, spaces
  if (/[\s<>"'`;\\]/.test(clean)) {
    return { valid: false, error: 'Email contains invalid characters.' };
  }

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(clean)) {
    return { valid: false, error: 'Please enter a valid email address (e.g. student@domain.com).' };
  }

  return { valid: true };
}

/**
 * Client-side rate limiter to prevent form flooding, spamming, or DoS scripting.
 * Allows at most `maxAttempts` in `windowSeconds`.
 */
const RATE_LIMIT_KEY = 'eduvia_waitlist_attempts';
const MAX_ATTEMPTS = 3;
const WINDOW_SECONDS = 60;

export function checkRateLimit(): { allowed: boolean; waitSeconds?: number } {
  try {
    const raw = sessionStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    let timestamps: number[] = raw ? JSON.parse(raw) : [];

    // Filter out timestamps outside the active window
    timestamps = timestamps.filter((t) => now - t < WINDOW_SECONDS * 1000);

    if (timestamps.length >= MAX_ATTEMPTS) {
      const oldest = timestamps[0];
      const waitSeconds = Math.ceil((WINDOW_SECONDS * 1000 - (now - oldest)) / 1000);
      return { allowed: false, waitSeconds: Math.max(1, waitSeconds) };
    }

    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

export function recordAttempt(): void {
  try {
    const raw = sessionStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    let timestamps: number[] = raw ? JSON.parse(raw) : [];
    timestamps = timestamps.filter((t) => now - t < WINDOW_SECONDS * 1000);
    timestamps.push(now);
    sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
  } catch {
    // Ignore storage issues
  }
}

/**
 * Safely parses and sanitizes user data from localStorage.
 * Prevents DOM injection if localStorage was manipulated in DevTools.
 */
export function safeGetStoredWaitlist(): (WaitlistSubmission & { queueNumber: number }) | null {
  try {
    const raw = localStorage.getItem('eduvia_waitlist_user');
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;

    const queueNumber = Number(parsed.queueNumber);
    if (isNaN(queueNumber) || queueNumber < 1 || queueNumber > 999999) return null;

    const exam = parsed.exam === 'JEE' ? 'JEE' : 'NEET';
    const fullName = sanitizeInput(String(parsed.fullName || ''), 60);
    const email = sanitizeInput(String(parsed.email || ''), 100);

    return {
      fullName,
      email,
      exam,
      targetYear: sanitizeInput(String(parsed.targetYear || '2026'), 10),
      currentClass: parsed.currentClass || 'Class 12',
      queueNumber
    };
  } catch {
    try {
      localStorage.removeItem('eduvia_waitlist_user');
    } catch {
      // ignore
    }
    return null;
  }
}
