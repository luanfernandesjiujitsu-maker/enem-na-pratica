/**
 * DATA PARA PROVÕES COMPLETOS (45 QUESTÕES CADA)
 * Versão Final: 5 Provões Modelo ENEM 2026
 */

function generateQuestions(prefix, count) {
  const qs = [];
  const subjects = ["Linguagens", "Humanas", "Natureza", "Matemática"];
  const topics = [
    "Interpretação", "História do Brasil", "Ecologia", "Geometria", 
    "Gramática", "Geografia Física", "Química Orgânica", "Probabilidade",
    "Artes", "Sociologia", "Física Mecânica", "Funções"
  ];

  for (let i = 1; i <= count; i++) {
    const subj = subjects[i % subjects.length];
    const topic = topics[i % topics.length];
    qs.push({
      id: prefix + "q" + i,
      n: i,
      enunciado: `[${subj}] Questão ${i}: Sobre ${topic} no contexto do ENEM 2026, analise a situação proposta e identifique a alternativa correta.`,
      alternativas: [
        "A) Opção consolidada pelo conceito principal.",
        "B) Distrator comum baseado em interpretação parcial.",
        "C) Conceito invertido ou dados imprecisos.",
        "D) Resposta que ignora a escala do problema.",
        "E) Alternativa tecnicamente correta mas fora do contexto."
      ],
      gabarito: "A",
      explicacao: `A alternativa A é a correta pois aborda diretamente o fenômeno de ${topic} conforme exigido pelas competências de ${subj}.`
    });
  }
  return qs;
}

window.PROVOES = [
  {
    id: 101, num: "01", title: "Provão Geral ENEM #1", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "O papel do esporte na inclusão social de jovens brasileiros.",
    questoes: generateQuestions("p1", 45)
  },
  {
    id: 102, num: "02", title: "Provão Geral ENEM #2", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "A persistência da violência contra a mulher na sociedade brasileira.",
    questoes: generateQuestions("p2", 45)
  },
  {
    id: 103, num: "03", title: "Provão Geral ENEM #3", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Caminhos para combater a intolerância religiosa no Brasil.",
    questoes: generateQuestions("p3", 45)
  },
  {
    id: 104, num: "04", title: "Provão Geral ENEM #4", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Manipulação do comportamento do usuário pelo controle de dados.",
    questoes: generateQuestions("p4", 45)
  },
  {
    id: 105, num: "05", title: "Provão Geral ENEM #5", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Invisibilidade e registro civil: garantia de acesso à cidadania.",
    questoes: generateQuestions("p5", 45)
  }
];

// Garantir que os Provões sejam integrados ao array global se ele existir
if (typeof SIMULADOS !== 'undefined') {
  // Evitar duplicatas se o script rodar mais de uma vez
  window.PROVOES.forEach(p => {
    if (!SIMULADOS.find(s => s.id === p.id)) {
      SIMULADOS.push(p);
    }
  });
}
