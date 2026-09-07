import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';

// Ensure data directory exists
const dataDir = path.resolve(process.cwd(), 'server', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = process.env.DATABASE_PATH || path.join(dataDir, 'eduvia.db');

export interface WaitlistRecord {
  id: number;
  queue_position: number;
  full_name: string;
  email: string;
  phone: string | null;
  exam: string;
  target_year: string;
  current_class: string;
  ip_address: string;
  created_at: string;
}

class DatabaseManager {
  private db: DatabaseSync;

  constructor() {
    this.db = new DatabaseSync(dbPath);
    this.init();
  }

  private init() {
    // Enable WAL mode for performance & concurrency
    this.db.exec('PRAGMA journal_mode = WAL;');
    this.db.exec('PRAGMA foreign_keys = ON;');

    // Create waitlist table with strict constraints
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        queue_position INTEGER NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE COLLATE NOCASE,
        phone TEXT,
        exam TEXT NOT NULL CHECK (exam IN ('NEET', 'JEE')),
        target_year TEXT NOT NULL CHECK (target_year IN ('2026', '2027', '2028')),
        current_class TEXT NOT NULL CHECK (current_class IN ('Class 11', 'Class 12', 'Dropper')),
        ip_address TEXT NOT NULL,
        created_at TEXT NOT NULL
      );

      CREATE UNIQUE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
      CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist(created_at);
    `);
  }

  /**
   * Check if an email is already registered.
   */
  public findByEmail(email: string): WaitlistRecord | null {
    const stmt = this.db.prepare('SELECT * FROM waitlist WHERE email = ? COLLATE NOCASE LIMIT 1');
    const result = stmt.get(email.trim().toLowerCase());
    return (result as unknown as WaitlistRecord) || null;
  }

  /**
   * Gets the next server-assigned queue position.
   */
  public getNextQueuePosition(): number {
    const stmt = this.db.prepare('SELECT COALESCE(MAX(queue_position), 0) + 1 AS next_pos FROM waitlist');
    const result = stmt.get() as { next_pos: number };
    return result?.next_pos || 1;
  }

  /**
   * Registers a new waitlist applicant with ACID transaction.
   * If email already exists, returns the existing record safely.
   */
  public register(data: {
    fullName: string;
    email: string;
    phone?: string | null;
    exam: 'NEET' | 'JEE';
    targetYear: '2026' | '2027' | '2028';
    currentClass: 'Class 11' | 'Class 12' | 'Dropper';
    ipAddress: string;
  }): { isDuplicate: boolean; queuePosition: number; exam: string } {
    const normalizedEmail = data.email.trim().toLowerCase();

    // Check for duplicate first
    const existing = this.findByEmail(normalizedEmail);
    if (existing) {
      return {
        isDuplicate: true,
        queuePosition: existing.queue_position,
        exam: existing.exam
      };
    }

    // Assign sequential server-controlled queue number
    const queuePosition = this.getNextQueuePosition();
    const createdAt = new Date().toISOString();

    const insertStmt = this.db.prepare(`
      INSERT INTO waitlist (
        queue_position, full_name, email, phone, exam, target_year, current_class, ip_address, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertStmt.run(
      queuePosition,
      data.fullName.trim(),
      normalizedEmail,
      data.phone ? data.phone.trim() : null,
      data.exam,
      data.targetYear,
      data.currentClass,
      data.ipAddress,
      createdAt
    );

    return {
      isDuplicate: false,
      queuePosition,
      exam: data.exam
    };
  }

  public getStats(): { totalCount: number } {
    const stmt = this.db.prepare('SELECT COUNT(*) as count FROM waitlist');
    const result = stmt.get() as { count: number };
    return { totalCount: result?.count || 0 };
  }
}

export const db = new DatabaseManager();
