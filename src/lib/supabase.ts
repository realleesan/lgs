import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fwzzvdmezlceoagnomgo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3enp2ZG1lemxjZW9hZ25vbWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MTM0MDAsImV4cCI6MjAyMjA4OTQwMH0.NN5S70rY6Z6Y8Y6Y8Y6Y8Y6Y6Y6Y6Y6Y6Y6Y6Y6Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
