/**
 * Motor de Avaliação do Prof. Alberto Silva
 * Endpoint: /api/ai-correction
 */

export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    
    // Simular processamento linguístico
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    
    // Gerar nota baseada no tamanho e conteúdo (MOCK de alta qualidade)
    // No futuro, aqui pode ser integrada a API da OpenAI/Google Gemini
    const scores = {
      c1: Math.min(200, Math.floor(wordCount / 1.5)),
      c2: Math.min(200, Math.floor(wordCount / 1.6)),
      c3: Math.min(200, Math.floor(wordCount / 1.7)),
      c4: Math.min(200, Math.floor(wordCount / 1.55)),
      c5: Math.min(200, Math.floor(wordCount / 1.8))
    };

    const total = Object.values(scores).reduce((a, b) => a + b, 0);

    const result = {
      total: total,
      c1: { score: scores.c1, text: "Sua ortografia e gramática estão boas, mas atenção à concordância em períodos longos." },
      c2: { score: scores.c2, text: "Você compreendeu bem o tema e aplicou conceitos de várias áreas do conhecimento." },
      c3: { score: scores.c3, text: "Os argumentos foram bem selecionados, mas poderiam ser mais aprofundados." },
      c4: { score: scores.c4, text: "Uso correto de conectivos. O texto flui bem entre os parágrafos." },
      c5: { score: scores.c5, text: "Sua proposta de intervenção é viável e respeita os direitos humanos." },
      general: "Excelente esforço! Você demonstra clareza e domínio da estrutura dissertativa. Continue praticando para atingir a nota máxima."
    };

    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
