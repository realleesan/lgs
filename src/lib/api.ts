import { supabase, isSupabaseConfigured } from './supabase'

// ============================================
// News API
// ============================================
export async function getNews() {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getNews')
    return []
  }
  
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('id', { ascending: false })
  
  if (error) {
    console.error('Error fetching news:', error)
    return []
  }
  return data
}

export async function getNewsById(id: number) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning null for getNewsById')
    return null
  }
  
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error('Error fetching news by id:', error)
    return null
  }
  return data
}

// ============================================
// Services API
// ============================================
export async function getServices() {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getServices')
    return []
  }
  
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) {
    console.error('Error fetching services:', error)
    return []
  }
  return data
}

// ============================================
// Solutions API
// ============================================
export async function getSolutions() {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getSolutions')
    return []
  }
  
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) {
    console.error('Error fetching solutions:', error)
    return []
  }
  return data
}

// ============================================
// Contact API (Legacy)
// ============================================
export async function submitContact(formData: {
  name: string
  phone: string
  email: string
  service: string
  message: string
}) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, cannot submit contact form')
    throw new Error('Database not configured. Please contact support.')
  }
  
  const { data, error } = await supabase
    .from('contacts')
    .insert([formData])
    .select()
  
  if (error) {
    console.error('Error submitting contact:', error)
    throw error
  }
  return data
}

// ============================================
// Portfolio API
// ============================================
export interface Portfolio {
  id: number
  title: string
  title_en?: string
  category?: string
  description?: string
  description_en?: string
  image_url?: string
  client?: string
  year?: string
  is_featured?: boolean
  is_published?: boolean
  sort_order?: number
}

export async function getPortfolio(options?: { 
  category?: string 
  featured?: boolean 
}) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getPortfolio')
    return []
  }
  
  let query = supabase
    .from('portfolio')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })

  if (options?.category) {
    query = query.eq('category', options.category)
  }
  if (options?.featured) {
    query = query.eq('is_featured', true)
  }

  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching portfolio:', error)
    return []
  }
  return data
}

export async function getPortfolioById(id: number) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning null for getPortfolioById')
    return null
  }
  
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .eq('is_published', true)
    .single()
  
  if (error) {
    console.error('Error fetching portfolio by id:', error)
    return null
  }
  return data
}

// ============================================
// Testimonials API
// ============================================
export interface Testimonial {
  id: number
  name: string
  position?: string
  company?: string
  avatar_url?: string
  rating: number
  content: string
  content_en?: string
  project_type?: string
  location?: string
  is_featured?: boolean
  is_published?: boolean
}

export async function getTestimonials(options?: {
  featured?: boolean
}) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getTestimonials')
    return []
  }
  
  let query = supabase
    .from('testimonials')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })

  if (options?.featured) {
    query = query.eq('is_featured', true)
  }

  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data
}

// ============================================
// FAQ API
// ============================================
export interface FAQ {
  id: number
  question: string
  question_en?: string
  answer: string
  answer_en?: string
  category?: string
  is_published?: boolean
}

export async function getFAQs(category?: string) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, returning empty array for getFAQs')
    return []
  }
  
  let query = supabase
    .from('faq')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  
  if (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
  return data
}

// ============================================
// Leads API (Khách hàng tiềm năng)
// ============================================
export interface Lead {
  name: string
  email?: string
  phone?: string
  company?: string
  service_interest?: string
  budget?: string
  message?: string
  source?: string
}

export async function submitLead(formData: Lead) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, cannot submit lead')
    throw new Error('Database not configured. Please contact support.')
  }
  
  const { data, error } = await supabase
    .from('leads')
    .insert([{
      ...formData,
      status: 'new',
      source: formData.source || 'website'
    }])
    .select()
  
  if (error) {
    console.error('Error submitting lead:', error)
    throw error
  }
  return data
}

// ============================================
// Newsletter API
// ============================================
export async function subscribeNewsletter(email: string, name?: string) {
  if (!supabase || !isSupabaseConfigured()) {
    console.warn('Supabase not configured, cannot subscribe newsletter')
    throw new Error('Database not configured. Please contact support.')
  }
  
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{
      email,
      name,
      source: 'website',
      is_active: true
    }])
    .select()
    .single()
  
  if (error) {
    console.error('Error subscribing newsletter:', error)
    throw error
  }
  return data
}
