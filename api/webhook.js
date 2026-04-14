import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Chave secreta para bypass RLS

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { order_status, customer } = req.body

  // Verifica se o pagamento foi aprovado
  if (order_status === 'paid' || order_status === 'approved') {
    const { email, full_name } = customer

    try {
      // 1. Criar ou convidar o usuário no Auth
      const { data, error: authError } = await supabase.auth.admin.createUser({
        email: email,
        password: Math.random().toString(36).slice(-12), // Senha temporária aleatória
        email_confirm: true,
        user_metadata: { full_name }
      })

      if (authError && authError.message !== 'User already exists') {
        throw authError
      }

      // 2. Criar perfil no banco
      const userId = data.user?.id || (await supabase.from('profiles').select('id').eq('email', email).single()).data?.id

      if (userId) {
        await supabase.from('profiles').upsert({
          id: userId,
          full_name: full_name,
          is_active: true,
          updated_at: new Date()
        })
      }

      return res.status(200).json({ message: 'Acesso liberado com sucesso!' })
    } catch (error) {
      console.error('Erro no webhook:', error)
      return res.status(500).json({ error: error.message })
    }
  }

  return res.status(200).json({ message: 'Evento processado (sem ação necessária)' })
}
