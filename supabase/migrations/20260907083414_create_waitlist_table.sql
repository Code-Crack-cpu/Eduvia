/*
# Create waitlist table for Eduvia early access registrations

## Purpose
Stores student waitlist registrations for the Eduvia beta program.
Each entry gets a server-assigned sequential queue position.
Replaces the previous local SQLite database with a durable Supabase Postgres table.

## New Tables
- `waitlist`
  - `id` (uuid, primary key, auto-generated)
  - `queue_position` (integer, not null) — sequential server-assigned position
  - `full_name` (text, not null) — student's full name
  - `email` (text, not null, unique) — student's email (case-insensitive via citext)
  - `phone` (text, nullable) — optional phone number
  - `exam` (text, not null) — 'NEET' or 'JEE'
  - `target_year` (text, not null) — '2026', '2027', or '2028'
  - `current_class` (text, not null) — 'Class 11', 'Class 12', or 'Dropper'
  - `ip_address` (text, not null) — client IP for audit/abuse tracking
  - `created_at` (timestamptz, default now())

## Indexes
- Unique index on `email` for duplicate detection
- Index on `created_at` for chronological queries
- Index on `queue_position` for position lookups

## Security
- RLS enabled on `waitlist`
- Policies scoped to `authenticated` role only (the Express server uses the service role key which bypasses RLS)
- Anon access is intentionally denied — the frontend never talks to Supabase directly; all writes go through the Express API server which validates input, checks the honeypot, and enforces rate limits
*/

CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  queue_position integer NOT NULL,
  full_name text NOT NULL,
  email citext NOT NULL UNIQUE,
  phone text,
  exam text NOT NULL CHECK (exam IN ('NEET', 'JEE')),
  target_year text NOT NULL CHECK (target_year IN ('2026', '2027', '2028')),
  current_class text NOT NULL CHECK (current_class IN ('Class 11', 'Class 12', 'Dropper')),
  ip_address text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_position ON waitlist(queue_position);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "authenticated_select_waitlist" ON waitlist;
CREATE POLICY "authenticated_select_waitlist"
ON waitlist FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_waitlist" ON waitlist;
CREATE POLICY "authenticated_insert_waitlist"
ON waitlist FOR INSERT
TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_waitlist" ON waitlist;
CREATE POLICY "authenticated_update_waitlist"
ON waitlist FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_waitlist" ON waitlist;
CREATE POLICY "authenticated_delete_waitlist"
ON waitlist FOR DELETE
TO authenticated USING (true);
