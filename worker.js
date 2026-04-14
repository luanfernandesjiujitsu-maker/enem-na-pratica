export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── Webhook da Kiwify (POST /webhook) ──
    if (url.pathname === '/webhook' && request.method === 'POST') {
      return handleWebhook(request, env);
    }

    // ── Tudo o resto → arquivos estáticos ──
    return env.ASSETS.fetch(request);
  }
};

async function handleWebhook(request, env) {
  const supabaseUrl = env.SUPABASE_URL;
  const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(JSON.stringify({ error: "Chaves do Supabase não configuradas" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { order_status, customer } = body;

    if (order_status === 'paid' || order_status === 'approved') {
      const { email, full_name } = customer;

      // 1. Criar usuário no Supabase Auth
      const authResponse = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
        method: 'POST',
        headers: {
          'apikey': supabaseServiceKey,
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: 'Trocarsenha123',
          email_confirm: true,
          user_metadata: { full_name }
        })
      });

      const authData = await authResponse.json();
      let userId = authData?.id || authData?.user?.id;

      // Se o usuário já existe, buscar ID
      if (!userId) {
        const searchRes = await fetch(`${supabaseUrl}/rest/v1/profiles?email=eq.${email}&select=id`, {
          headers: {
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`
          }
        });
        const searchData = await searchRes.json();
        userId = searchData[0]?.id;
      }

      // 2. Upsert no perfil
      if (userId) {
        await fetch(`${supabaseUrl}/rest/v1/profiles`, {
          method: 'POST',
          headers: {
            'apikey': supabaseServiceKey,
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'resolution=merge-duplicates'
          },
          body: JSON.stringify({
            id: userId,
            full_name: full_name,
            is_active: true,
            updated_at: new Date().toISOString()
          })
        });
      }

      return new Response(JSON.stringify({ message: "Acesso liberado!" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ message: "Evento ignorado" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
