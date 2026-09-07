import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'node:path';
import fs from 'node:fs';
import { db } from './db.ts';
import { validateWaitlistSubmission } from './validator.ts';
import { createRateLimiter } from './rateLimiter.ts';

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// 1. Strict Payload Body Limits to prevent memory exhaustion / DoS
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// 2. CORS configuration: restrict origins
const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
  : ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3001', 'http://127.0.0.1:3001'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, same-origin, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Cross-Origin Request Blocked by Security Policy'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400
  })
);

// 3. Security HTTP Headers
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' http://localhost:* http://127.0.0.1:*; frame-ancestors 'none'; object-src 'none'; base-uri 'self';"
  );
  next();
});

// 4. Rate Limiting for Waitlist Registration: 20 attempts per 10 minutes per IP (reasonable, non-aggressive)
const waitlistRateLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  maxRequests: process.env.NODE_ENV === 'test' ? 10 : 20,
  message: 'Too many registration attempts from this network. Please wait a few minutes before trying again.'
});

// 5. API Endpoints

/**
 * Health check endpoint
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

/**
 * Waitlist registration endpoint
 * POST /api/waitlist
 */
app.post('/api/waitlist', waitlistRateLimiter, (req: Request, res: Response) => {
  try {
    const validation = validateWaitlistSubmission(req.body);

    if (!validation.valid || !validation.data) {
      res.status(400).json({
        success: false,
        error: validation.errors?.[0] || 'Validation failed. Please verify your submitted data.'
      });
      return;
    }

    const { isBot, ...cleanData } = validation.data;

    // Honeypot trap: If bot populated the hidden trap, return generic response without saving
    if (isBot) {
      res.status(200).json({
        success: true,
        message: "You're on the priority invite list!",
        data: {
          queuePosition: 404,
          exam: cleanData.exam
        }
      });
      return;
    }

    // Capture IP safely for audit/abuse tracking
    const clientIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      '127.0.0.1';

    // Persist via prepared statement in database
    const registration = db.register({
      ...cleanData,
      ipAddress: clientIp
    });

    if (registration.isDuplicate) {
      // Safe confirmation for returning user, without leaking sensitive information
      res.status(200).json({
        success: true,
        isExisting: true,
        message: "You're already registered on the waitlist! Here is your priority position.",
        data: {
          queuePosition: registration.queuePosition,
          exam: registration.exam
        }
      });
      return;
    }

    // Return only safe minimal confirmation
    res.status(201).json({
      success: true,
      isExisting: false,
      message: "You're on the priority invite list!",
      data: {
        queuePosition: registration.queuePosition,
        exam: registration.exam
      }
    });
  } catch (error) {
    // Log details server-side only; never send stack traces to client
    console.error('[Waitlist API Error]:', error instanceof Error ? error.message : 'Unknown error');
    res.status(500).json({
      success: false,
      error: 'Unable to process registration at this time. Please try again shortly.'
    });
  }
});

// 6. Serve static production build if in production
const distDir = path.resolve(process.cwd(), 'dist');
if (isProduction && fs.existsSync(distDir)) {
  app.use(express.static(distDir));

  // Client-side SPA routing fallback for GET requests
  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

// 7. Route 404 handler for unmatched requests
app.use((req: Request, res: Response) => {
  if (req.path.startsWith('/api')) {
    res.status(404).json({ success: false, error: 'Endpoint not found.' });
    return;
  }
  res.status(404).send('Not Found');
});

// 8. Global Error Handler (Sanitizes errors, prevents leaking internals)
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(500).json({
    success: false,
    error: 'An unexpected server error occurred.'
  });
});

// Start Server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[Eduvia Backend] Secure API server running on http://127.0.0.1:${PORT}`);
  });
}

export default app;
