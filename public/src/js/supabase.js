import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Configurações do Supabase - ENEM na Prática
const supabaseUrl = 'https://fojcvxqsgmrvtmcaceck.supabase.co'
const supabaseAnonKey = 'sb_publishable_PIsenwyqtISQ39bsWmCYmw_jm-Umzwb'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
