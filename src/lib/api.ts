import { supabase } from './supabase'

// ============================================
// News API
// ============================================
export async function getNews() {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('id', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getNewsById(id: number) {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

// ============================================
// Services API
// ============================================
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) throw error
  return data
}

// ============================================
// Solutions API
// ============================================
export async function getSolutions() {
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) throw error
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
  const { data, error } = await supabase
    .from('contacts')
    .insert([formData])
    .select()
  
  if (error) throw error
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
  
  if (error) throw error
  return data
}

export async function getPortfolioById(id: number) {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .eq('is_published', true)
    .single()
  
  if (error) throw error
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
  let query = supabase
    .from('testimonials')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })

  if (options?.featured) {
    query = query.eq('is_featured', true)
  }

  const { data, error } = await query
  
  if (error) throw error
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
  let query = supabase
    .from('faq')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  
  if (error) throw error
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
  const { data, error } = await supabase
    .from('leads')
    .insert([{
      ...formData,
      status: 'new',
      source: formData.source || 'website'
    }])
    .select()
  
  if (error) throw error
  return data
}

// ============================================
// Newsletter API
// ============================================
export async function subscribeNewsletter(email: string, name?: string) {
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
  
  if (error) throw error
  return data
}
