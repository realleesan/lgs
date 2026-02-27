import { supabase } from './supabase'

// News API
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

// Services API
export async function getServices() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) throw error
  return data
}

// Solutions API
export async function getSolutions() {
  const { data, error } = await supabase
    .from('solutions')
    .select('*')
    .order('id', { ascending: true })
  
  if (error) throw error
  return data
}

// Contact API
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
