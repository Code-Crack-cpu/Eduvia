/*
# Add SECURITY DEFINER function for waitlist registration

## Purpose
The Express server uses the anon key (no service role key available in this environment).
RLS blocks anon from reading/writing the waitlist table directly (which is correct —
waitlist entries contain personal emails and should not be publicly readable).

This migration creates a SECURITY DEFINER function that atomically:
1. Checks if an email already exists (duplicate detection)
2. If not, assigns the next sequential queue position
3. Inserts the new record
4. Returns the queue position and duplicate status

This way the anon key can call the function via RPC, but cannot directly SELECT/INSERT
on the table — protecting student data while allowing registration.

## Changes
- Drops existing authenticated-only policies (useless for a no-auth app)
- Creates `register_waitlist_entry` SECURITY DEFINER function
- Grants EXECUTE to anon and authenticated

## Security
- RLS stays enabled on waitlist with NO policies → table is fully locked for anon/authenticated
- Only the SECURITY DEFINER function can read/write, and it exposes only the queue position
- Student emails are never returned or leaked through the function
*/

DROP POLICY IF EXISTS "authenticated_select_waitlist" ON waitlist;
DROP POLICY IF EXISTS "authenticated_insert_waitlist" ON waitlist;
DROP POLICY IF EXISTS "authenticated_update_waitlist" ON waitlist;
DROP POLICY IF EXISTS "authenticated_delete_waitlist" ON waitlist;

CREATE OR REPLACE FUNCTION register_waitlist_entry(
  p_full_name text,
  p_email text,
  p_phone text,
  p_exam text,
  p_target_year text,
  p_current_class text,
  p_ip_address text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_existing record;
  v_next_pos integer;
  v_result json;
BEGIN
  -- Validate exam
  IF p_exam NOT IN ('NEET', 'JEE') THEN
    RETURN json_build_object('success', false, 'error', 'Invalid exam track');
  END IF;

  -- Validate target year
  IF p_target_year NOT IN ('2026', '2027', '2028') THEN
    RETURN json_build_object('success', false, 'error', 'Invalid target year');
  END IF;

  -- Validate current class
  IF p_current_class NOT IN ('Class 11', 'Class 12', 'Dropper') THEN
    RETURN json_build_object('success', false, 'error', 'Invalid current class');
  END IF;

  -- Check for existing email (case-insensitive via citext)
  SELECT * INTO v_existing FROM waitlist WHERE email = p_email LIMIT 1;

  IF v_existing IS NOT NULL THEN
    v_result := json_build_object(
      'success', true,
      'is_duplicate', true,
      'queue_position', v_existing.queue_position,
      'exam', v_existing.exam
    );
    RETURN v_result;
  END IF;

  -- Assign next queue position
  SELECT COALESCE(MAX(queue_position), 0) + 1 INTO v_next_pos FROM waitlist;

  -- Insert new record
  INSERT INTO waitlist (
    queue_position, full_name, email, phone, exam, target_year, current_class, ip_address
  ) VALUES (
    v_next_pos, p_full_name, p_email, p_phone, p_exam, p_target_year, p_current_class, p_ip_address
  );

  v_result := json_build_object(
    'success', true,
    'is_duplicate', false,
    'queue_position', v_next_pos,
    'exam', p_exam
  );

  RETURN v_result;
END;
$$;

GRANT EXECUTE ON FUNCTION register_waitlist_entry TO anon, authenticated;
