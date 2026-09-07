export interface ValidatedWaitlistInput {
  fullName: string;
  email: string;
  phone?: string | null;
  exam: 'NEET' | 'JEE';
  targetYear: '2026' | '2027' | '2028';
  currentClass: 'Class 11' | 'Class 12' | 'Dropper';
  isBot: boolean;
}

export interface ValidationResult {
  valid: boolean;
  errors?: string[];
  data?: ValidatedWaitlistInput;
}

export function validateWaitlistSubmission(body: unknown): ValidationResult {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Invalid request payload. Must be a JSON object.'] };
  }

  const payload = body as Record<string, unknown>;

  // 1. Honeypot check (anti-bot trap)
  const honeypot = payload.company_trap;
  const isBot = Boolean(honeypot && String(honeypot).trim().length > 0);

  // 2. Full Name validation
  const rawName = payload.fullName;
  if (typeof rawName !== 'string' || !rawName.trim()) {
    errors.push('Full name is required.');
  } else {
    const trimmed = rawName.trim();
    if (trimmed.length < 2 || trimmed.length > 60) {
      errors.push('Full name must be between 2 and 60 characters.');
    }
    // Reject HTML tags, script keywords, or control characters
    if (/<[^>]*>|[\x00-\x1F\x7F]|script|alert|eval|union|select|drop/i.test(trimmed)) {
      errors.push('Full name contains invalid or unsafe characters.');
    }
    // Only letters, spaces, hyphens, dots, apostrophes
    const nameRegex = /^[a-zA-Z\u00C0-\u024F\s.'-]+$/;
    if (!nameRegex.test(trimmed)) {
      errors.push('Full name can only contain letters, spaces, dots, hyphens, and apostrophes.');
    }
  }

  // 3. Email validation
  const rawEmail = payload.email;
  if (typeof rawEmail !== 'string' || !rawEmail.trim()) {
    errors.push('Email address is required.');
  } else {
    const trimmedEmail = rawEmail.trim().toLowerCase();
    if (trimmedEmail.length > 100) {
      errors.push('Email address cannot exceed 100 characters.');
    }
    if (/[\s<>"'`;\\{}[\]|]/.test(trimmedEmail)) {
      errors.push('Email address contains invalid characters.');
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.push('Please provide a valid email address.');
    }
  }

  // 4. Phone validation (optional)
  let validPhone: string | null = null;
  if (payload.phone !== undefined && payload.phone !== null && payload.phone !== '') {
    if (typeof payload.phone !== 'string') {
      errors.push('Phone number must be a string.');
    } else {
      const trimmedPhone = payload.phone.trim();
      if (trimmedPhone.length > 0) {
        if (trimmedPhone.length < 7 || trimmedPhone.length > 16) {
          errors.push('Phone number must be between 7 and 16 characters.');
        }
        if (!/^[+]?[\d\s().-]{7,16}$/.test(trimmedPhone)) {
          errors.push('Phone number contains invalid characters.');
        }
        validPhone = trimmedPhone;
      }
    }
  }

  // 5. Exam track validation
  const rawExam = payload.exam;
  if (rawExam !== 'NEET' && rawExam !== 'JEE') {
    errors.push("Target exam must be either 'NEET' or 'JEE'.");
  }

  // 6. Target Year validation
  const rawYear = payload.targetYear;
  if (rawYear !== '2026' && rawYear !== '2027' && rawYear !== '2028') {
    errors.push("Target year must be '2026', '2027', or '2028'.");
  }

  // 7. Current Class validation
  const rawClass = payload.currentClass;
  if (rawClass !== 'Class 11' && rawClass !== 'Class 12' && rawClass !== 'Dropper') {
    errors.push("Current class must be 'Class 11', 'Class 12', or 'Dropper'.");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      fullName: String(payload.fullName).trim(),
      email: String(payload.email).trim().toLowerCase(),
      phone: validPhone,
      exam: payload.exam as 'NEET' | 'JEE',
      targetYear: payload.targetYear as '2026' | '2027' | '2028',
      currentClass: payload.currentClass as 'Class 11' | 'Class 12' | 'Dropper',
      isBot
    }
  };
}
