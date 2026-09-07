/**
 * Client-Side Input Sanitization & Pre-flight Validation
 * (Note: Server-side validation in server/validator.ts is the authoritative source of truth)
 */

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
 * Pre-validates a human name: only alphabets, spaces, hyphens, dots, and apostrophes.
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
