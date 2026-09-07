import { Request, Response, NextFunction } from 'express';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  message: string;
}

interface ClientRecord {
  timestamps: number[];
}

export function createRateLimiter(config: RateLimitConfig) {
  const clients = new Map<string, ClientRecord>();

  // Periodically clean up stale client IPs
  const interval = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of clients.entries()) {
      record.timestamps = record.timestamps.filter((t) => now - t < config.windowMs);
      if (record.timestamps.length === 0) {
        clients.delete(ip);
      }
    }
  }, Math.max(30000, config.windowMs / 2));

  // Don't keep the process alive solely for cleanup
  if (interval.unref) {
    interval.unref();
  }

  return (req: Request, res: Response, next: NextFunction): void => {
    // Extract client IP safely (respecting trust proxy if enabled)
    const clientIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      '127.0.0.1';

    const now = Date.now();
    let record = clients.get(clientIp);

    if (!record) {
      record = { timestamps: [] };
      clients.set(clientIp, record);
    }

    // Filter out timestamps outside the active sliding window
    record.timestamps = record.timestamps.filter((t) => now - t < config.windowMs);

    if (record.timestamps.length >= config.maxRequests) {
      const oldest = record.timestamps[0];
      const retryAfterSec = Math.ceil((config.windowMs - (now - oldest)) / 1000);

      res.setHeader('Retry-After', retryAfterSec);
      res.status(429).json({
        success: false,
        error: config.message,
        retryAfter: retryAfterSec
      });
      return;
    }

    record.timestamps.push(now);
    next();
  };
}
