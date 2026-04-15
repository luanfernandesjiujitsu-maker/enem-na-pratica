export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ── Webhook da Kiwify (POST /webhook) ──
    if (url.pathname === '/webhook' && request.method === 'POST') {
      return handleWebhook(request, env);
    }

    // ── Correção de Redação via IA (POST /api/ai-correction) ──
    if (url.pathname === '/api/ai-correction' && request.method === 'POST') {
      return handleAICorrection(request, env);
    }

    // ── Tudo o resto → arquivos estáticos ──
    return env.ASSETS.fetch(request);
  }
};

async function handleAICorrection(request, env) {
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Chave do Gemini não configurada" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { text } = await request.json();
    if (!text || text.length < 100) {
      return new Response(JSON.stringify({ error: "O texto é muito curto para uma avaliação do ENEM." }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const prompt = `Você é um corretor oficial do ENEM. Sua tarefa é avaliar a redação abaixo seguindo rigorosamente as 5 competências do ENEM (200 pontos cada).
    
    Texto da Redação:
    "${text}"
    
    Retorne a análise estritamente em formato JSON com a seguinte estrutura:
    {
      "total": 0 a 1000,
      "c1": { "score": 0 a 200, "text": "feedback da Competência 1: Domínio da norma culta" },
      "c2": { "score": 0 a 200, "text": "feedback da Competência 2: Compreensão do tema" },
      "c3": { "score": 0 a 200, "text": "feedback da Competência 3: Argumentação" },
      "c4": { "score": 0 a 200, "text": "feedback da Competência 4: Coesão" },
      "c5": { "score": 0 a 200, "text": "feedback da Competência 5: Proposta de intervenção" },
      "general": "Comentário geral e dicas de melhoria"
    }`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });

    const data = await response.json();
    const resultText = data.candidates[0].content.parts[0].text;
    
    return new Response(resultText, {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

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
