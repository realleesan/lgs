import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fwzzvdmezlceoagnomgo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3enp2ZG1lemxjZW9hZ25vbWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMDk0MzYsImV4cCI6MjA4Nzc4NTQzNn0.V-dUrn8K1ZqxQN5gQY1PTJGY8Xm7dfi3t9f4vecFz-o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
