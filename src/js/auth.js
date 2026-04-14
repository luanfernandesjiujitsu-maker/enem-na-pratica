import { supabase } from './supabase.js'

/**
 * Funções de Autenticação
 */

export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  window.location.href = 'index.html'
}

export const checkSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    if (window.location.pathname.includes('dashboard.html') || window.location.pathname.includes('simulado.html')) {
      window.location.href = 'login.html'
    }
    return null
  }
  return session
}

export const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  if (error) throw error
  return data
}
