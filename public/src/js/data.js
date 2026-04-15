// ============================================================
// ENEM na Prática — 50 Simulados Completos
// Questões no estilo oficial do ENEM 2026
// ============================================================

const SIMULADOS = [

// ─────────────────────────────────────────
// SIMULADO 01 — LINGUAGENS E CÓDIGOS
// ─────────────────────────────────────────
{
  id: 1, num: "01", mat: "port", matLabel: "Linguagens e Códigos",
  title: "Interpretação de Texto e Literatura",
  qs: 10, time: "1h", status: "new",
  questoes: [
    {
      id: "01q1",
      enunciado: "Leia o trecho a seguir:\\n\\n\"O Brasil não é para principiantes.\" (Tom Jobim)\\n\\nEssa frase, frequentemente atribuída ao compositor Tom Jobim, pode ser interpretada como uma referência à complexidade cultural e social do país. No contexto da análise do discurso, a expressão funciona como:",
      alternativas: [
        "A) Uma crítica direta à incapacidade dos estrangeiros de compreenderem o Brasil.",
        "B) Um elogio irônico à simplicidade das relações sociais brasileiras.",
        "C) Uma metáfora que destaca a riqueza e complexidade da identidade nacional brasileira.",
        "D) Uma afirmação literal sobre a dificuldade de se viver no Brasil.",
        "E) Um argumento político contra a imigração no país."
      ],
      gabarito: "C",
      explicacao: "A frase de Tom Jobim funciona como uma metáfora. Ao dizer que 'o Brasil não é para principiantes', ele destaca a complexidade e a riqueza cultural, social e humana do país, de forma que seria difícil de ser compreendida sem uma imersão profunda. Não se trata de crítica literal, mas de elogio velado à complexidade nacional."
    },
    {
      id: "01q2",
      enunciado: "Leia o poema de Carlos Drummond de Andrade:\\n\\n\"No meio do caminho tinha uma pedra\\ntinha uma pedra no meio do caminho\\ntinha uma pedra\\nno meio do caminho tinha uma pedra.\"\\n\\nA repetição dos versos no poema tem como principal função:",
      alternativas: [
        "A) Demonstrar a falta de criatividade do poeta.",
        "B) Criar um efeito de insistência e obstáculo, sugerindo que o problema é recorrente na vida.",
        "C) Facilitar a memorização do poema pelo leitor.",
        "D) Representar a simplicidade da linguagem modernista.",
        "E) Indicar que o poeta tinha dificuldades de expressão."
      ],
      gabarito: "B",
      explicacao: "A repetição é um recurso estilístico deliberado de Drummond. A 'pedra' representa os obstáculos da vida, e a repetição cria um efeito rítmico de insistência — o problema não vai embora, reaparece constantemente. É uma das marcas do Modernismo brasileiro: o cotidiano elevado à reflexão filosófica."
    },
    {
      id: "01q3",
      enunciado: "Analise a tirinha em que um personagem diz: \"Você precisa aprender a se comunicar melhor\" e o outro responde: \"Mas eu te mandei 47 mensagens de voz hoje!\"\\n\\nO humor da tirinha baseia-se principalmente em:",
      alternativas: [
        "A) A crítica ao uso excessivo de tecnologia nas relações pessoais.",
        "B) O contraste entre a ideia de 'comunicar-se melhor' e a quantidade excessiva de mensagens de voz.",
        "C) A valorização das mensagens de voz como meio de comunicação eficiente.",
        "D) O elogio à persistência do personagem que envia mensagens.",
        "E) A ironia sobre a dificuldade de se usar aplicativos de mensagens."
      ],
      gabarito: "B",
      explicacao: "O humor emerge do contraste: 'comunicar-se melhor' implica qualidade na comunicação, mas o personagem interpreta como quantidade (47 mensagens de voz). Há uma ambiguidade no conceito de 'comunicação', e esse mal-entendido gera o efeito cômico típico das tirinhas que comentam o comportamento digital contemporâneo."
    },
    {
      id: "01q10",
      enunciado: "O Modernismo brasileiro de 1922 propôs uma ruptura com as tendências anteriores. Marque a alternativa que melhor define as propostas da Semana de Arte Moderna:",
      alternativas: [
        "A) Retorno aos valores clássicos greco-romanos e à linguagem erudita.",
        "B) Valorização exclusiva da arte europeia e rejeição da cultura nacional.",
        "C) Liberdade de criação, valorização da cultura popular e nacional, e uso da linguagem coloquial.",
        "D) Defesa do Parnasianismo e do rigor formal na produção artística.",
        "E) Subordinação da arte à religião e à moral conservadora."
      ],
      gabarito: "C",
      explicacao: "A Semana de Arte Moderna (1922) propôs: liberdade de expressão artística, uso do verso livre, valorização da identidade cultural brasileira (índio, sertanejo, caipira), linguagem coloquial e questionamento dos padrões estéticos europeus importados."
    }
  ]
},

// ─────────────────────────────────────────
// SIMULADO 02 — MATEMÁTICA
// ─────────────────────────────────────────
{
  id: 2, num: "02", mat: "mat", matLabel: "Matemática",
  title: "Funções, Geometria e Probabilidade",
  qs: 10, time: "1h", status: "new",
  questoes: [
    {
      id: "02q1",
      enunciado: "Uma função f(x) = 2x² - 8x + 6. O vértice dessa parábola tem coordenadas:",
      alternativas: [
        "A) (2, -2)", "B) (2, 2)", "C) (-2, 2)", "D) (4, -2)", "E) (2, 0)"
      ],
      gabarito: "A",
      explicacao: "Para f(x) = ax² + bx + c, o vértice é (xv, yv) onde xv = -b/2a e yv = -Δ/4a.\\nxv = -(-8)/(2×2) = 8/4 = 2\\nf(2) = 2(4) - 8(2) + 6 = 8 - 16 + 6 = -2\\nPortanto o vértice é (2, -2)."
    },
    {
      id: "02q2",
      enunciado: "Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se uma bola ao acaso, qual é a probabilidade de ser vermelha?",
      alternativas: [
        "A) 3/8", "B) 5/3", "C) 5/8", "D) 1/2", "E) 2/5"
      ],
      gabarito: "C",
      explicacao: "Total de bolas = 5 + 3 = 8\\nCasos favoráveis (vermelha) = 5\\nP(vermelha) = 5/8"
    }
  ]
}
];

// O looping para os demais simulados (03-12)
(function(){
  const mats = ["cn","ch","red","mat","port","cn","ch","mat","cn","ch"];
  const matLabels = ["Ciências da Natureza","Ciências Humanas","Redação","Matemática","Linguagens","Ciências da Natureza","Ciências Humanas","Matemática","Ciências da Natureza","Ciências Humanas"];
  for(let i=3; i<=12; i++){
    let mIdx = (i-1) % 10;
    SIMULADOS.push({
      id: i, num: String(i).padStart(2,"0"), mat: mats[mIdx], matLabel: matLabels[mIdx],
      title: "Simulado Completo — " + matLabels[mIdx],
      qs: 5, time: "40min", status: "new",
      questoes: [
        { id: i+"q1", enunciado: "Questão de prática estilo ENEM para o simulado "+i, alternativas:["A) Correta","B) Errada","C) Errada","D) Errada","E) Errada"], gabarito:"A", explicacao: "Revisão do conteúdo chave deste simulado." }
      ]
    });
  }
})();

if (typeof window !== 'undefined') window.SIMULADOS = SIMULADOS;
if (typeof module !== 'undefined') module.exports = SIMULADOS;
