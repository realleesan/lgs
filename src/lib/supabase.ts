import { createClient } from '@supabase/supabase-js'

// Use environment variables - these must be set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
