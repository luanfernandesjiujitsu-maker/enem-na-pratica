export async function onRequestPost(context) {
  const { request, env } = context;

  // Carrega as chaves das chaves de ambiente da Cloudflare
  const supabaseUrl = env.SUPABASE_URL;
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(JSON.stringify({ error: "Chaves do Supabase não configuradas no Cloudflare" }), { status: 500 });
  }

  try {
    const body = await request.json();
    const { order_status, customer } = body;

    // Verifica se o pagamento foi aprovado (Kiwify)
    if (order_status === 'paid' || order_status === 'approved') {
      const { email, full_name } = customer;

      // 1. Criar usuário no Supabase Auth via Admin API (Fetch)
      const authResponse = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
        method: 'POST',
        headers: {
          'apikey': supabaseServiceKey,
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: Math.random().toString(36).slice(-12),
          email_confirm: true,
          user_metadata: { full_name }
        })
      });

      const authData = await authResponse.json();

      // Se o usuário já existe, a gente segue para atualizar o perfil
      let userId = authData.id;
      
      if (!userId && authData.msg === 'User already exists') {
         // Busca o ID do usuário existente
         const searchRes = await fetch(`${supabaseUrl}/rest/v1/profiles?email=eq.${email}&select=id`, {
            headers: { 'apikey': supabaseServiceKey, 'Authorization': `Bearer ${supabaseServiceKey}` }
         });
         const searchData = await searchRes.json();
         userId = searchData[0]?.id;
      }

      // 2. Atualizar Perfil no Banco (Upsert)
      if (userId || authData.user?.id) {
        const finalUid = userId || authData.user.id;
        await fetch(`${supabaseUrl}/rest/v1/profiles`, {
          method: 'POST',
          headers: {
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify({
            id: finalUid,
            full_name: full_name,
            is_active: true,
            updated_at: new Date().toISOString()
          })
        });
      }

      return new Response(JSON.stringify({ message: "Acesso liberado!" }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: "Evento ignorado" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
