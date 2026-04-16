/**
 * DATA PARA PROVÕES COMPLETOS (TRI + GABARITO)
 * Versão Expandida: 5 Provões Oficiais (ENEM Real)
 */

window.PROVOES = [
  {
    id: 101, num: "01", title: "Provão Geral ENEM #1", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "O papel do esporte na inclusão social de jovens brasileiros.",
    questoes: [
      { id: "p1q1", n: 1, enunciado: "O bicho, meu Deus, era um homem. (Manuel Bandeira). O poema critica:", alternativas: ["A) A urbanização", "B) A desumanização pela miséria", "C) O crescimento industrial", "D) A tecnologia moderna", "E) A vanguarda europeia"], gabarito: "B", explicacao: "O poema foca na desumanização do homem em situação de extrema pobreza." },
      { id: "p1q2", n: 2, enunciado: "O Período Regencial brasileiro (1831-1840) foi marcado por:", alternativas: ["A) Estabilidade política absoluta", "B) Centralização total em Pedro II", "C) Instabilidade e revoltas provinciais", "D) Início da República Velha", "E) Aliança com a Inglaterra"], gabarito: "C", explicacao: "O período teve revoltas como a Farroupilha e Sabinada." },
    ]
  },
  {
    id: 102, num: "02", title: "Provão Geral ENEM #2", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "A persistência da violência contra a mulher na sociedade brasileira.",
    questoes: [
      { id: "p2q1", n: 1, enunciado: "Qual a principal característica do Humanismo?", alternativas: ["A) Foco exclusivo em Deus", "B) Valorização do homem e da razão", "C) Uso de robôs", "D) Ausência de arte", "E) Rejeição à ciência"], gabarito: "B" }
    ]
  },
  {
    id: 103, num: "03", title: "Provão Geral ENEM #3", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Caminhos para combater a intolerância religiosa no Brasil.",
    questoes: [
      { id: "p3q1", n: 1, enunciado: "A lei da gravidade foi formulada por:", alternativas: ["A) Einstein", "B) Newton", "C) Da Vinci", "D) Arquimedes", "E) Darwin"], gabarito: "B" }
    ]
  },
  {
    id: 104, num: "04", title: "Provão Geral ENEM #4", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Manipulação do comportamento do usuário pelo controle de dados.",
    questoes: [
      { id: "p4q1", n: 1, enunciado: "O maior estado do Brasil em território é o:", alternativas: ["A) São Paulo", "B) Rio de Janeiro", "C) Amazonas", "D) Bahia", "E) Minas Gerais"], gabarito: "C" }
    ]
  },
  {
    id: 105, num: "05", title: "Provão Geral ENEM #5", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 45, status: "new",
    essayPrompt: "Invisibilidade e registro civil: garantia de acesso à cidadania.",
    questoes: [
      { id: "p5q1", n: 1, enunciado: "A independência do Brasil ocorreu em:", alternativas: ["A) 1500", "B) 1822", "C) 1889", "D) 1964", "E) 2000"], gabarito: "B" }
    ]
  }
];

if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...window.PROVOES);
}
