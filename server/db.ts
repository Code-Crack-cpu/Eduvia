import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

export interface WaitlistRecord {
  id: string;
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

export interface RegistrationResult {
  isDuplicate: boolean;
  queuePosition: number;
  exam: string;
}

class DatabaseManager {
  private client;

  constructor() {
    this.client = createClient(supabaseUrl, supabaseAnonKey);
  }

  async register(data: {
    fullName: string;
    email: string;
    phone?: string | null;
    exam: 'NEET' | 'JEE';
    targetYear: '2026' | '2027' | '2028';
    currentClass: 'Class 11' | 'Class 12' | 'Dropper';
    ipAddress: string;
  }): Promise<RegistrationResult> {
    const { data: result, error } = await this.client.rpc('register_waitlist_entry', {
      p_full_name: data.fullName.trim(),
      p_email: data.email.trim().toLowerCase(),
      p_phone: data.phone ? data.phone.trim() : '',
      p_exam: data.exam,
      p_target_year: data.targetYear,
      p_current_class: data.currentClass,
      p_ip_address: data.ipAddress
    });

    if (error) {
      throw new Error(`Database registration failed: ${error.message}`);
    }

    const typed = result as { success: boolean; is_duplicate: boolean; queue_position: number; exam: string; error?: string };

    if (!typed.success) {
      throw new Error(typed.error || 'Registration failed');
    }

    return {
      isDuplicate: Boolean(typed.is_duplicate),
      queuePosition: typed.queue_position,
      exam: typed.exam
    };
  }

  async getStats(): Promise<{ totalCount: number }> {
    const { count, error } = await this.client
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw new Error(`Failed to fetch stats: ${error.message}`);
    }

    return { totalCount: count || 0 };
  }
}

export const db = new DatabaseManager();
