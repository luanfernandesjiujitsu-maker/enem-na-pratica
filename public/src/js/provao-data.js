/**
 * DATA PARA 10 PROVÕES COMPLETOS (TRI + GABARITO)
 * Corrigido com as chaves corretas (enunciado, alternativas, gabarito, explicacao).
 */

const PROVOES = [
  {
    id: 101, num: "01", title: "Provão Geral ENEM #1", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new",
    essayPrompt: "O papel do esporte na inclusão social de jovens brasileiros.",
    questoes: [
      { id: "p1q1", m: "port", n: 1, enunciado: "O bicho, meu Deus, era um homem. (Manuel Bandeira). O poema critica:", alternativas: ["A) A urbanização", "B) A desumanização pela miséria", "C) O crescimento industrial", "D) A tecnologia moderna", "E) A vanguarda europeia"], gabarito: "B", explicacao: "O poema foca na desumanização do homem em situação de extrema pobreza." },
      { id: "p1q2", m: "ch", n: 2, enunciado: "O Período Regencial brasileiro (1831-1840) foi marcado por:", alternativas: ["A) Estabilidade política absoluta", "B) Centralização total em Pedro II", "C) Instabilidade e revoltas provinciais", "D) Início da República Velha", "E) Aliança com a Inglaterra"], gabarito: "C", explicacao: "O período teve revoltas como a Farroupilha e Sabinada." },
      { id: "p1q3", m: "cn", n: 3, enunciado: "A fotossíntese ocorre principalmente nos:", alternativas: ["A) Mitocôndrios", "B) Ribossomos", "C) Cloroplastos", "D) Lisossomos", "E) Complexo de Golgi"], gabarito: "C", explicacao: "Cloroplastos contêm clorofila para capturar luz." },
      { id: "p1q4", m: "mat", n: 1, enunciado: "Se x + 5 = 12, qual o valor de x²?", alternativas: ["A) 7", "B) 14", "C) 49", "D) 25", "E) 144"], gabarito: "C", explicacao: "x = 7. 7² = 49." },
      { id: "p1q5", m: "red", n: 1, enunciado: "O tema da redação deste provão é 'Inclusão Social pelo Esporte'. Escreva um texto dissertativo-argumentativo.", alternativas: ["A) Continuar para Redação"], gabarito: "A", explicacao: "Siga as instruções do Alberto Silva." }
    ]
  },
  {
    id: 102, num: "02", title: "Provão Geral ENEM #2", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new",
    essayPrompt: "Os desafios para a democratização do acesso ao cinema no Brasil.",
    questoes: [
      { id: "p2q1", m: "port", n: 1, enunciado: "Função metalinguística ocorre quando:", alternativas: ["A) Foco no sentimento", "B) Foco no próprio código", "C) Foco no canal", "D) Foco no receptor", "E) Foco no contexto"], gabarito: "B", explicacao: "Metalinguagem usa o código para falar dele mesmo." }
    ]
  },
  { id: 103, num: "03", title: "Provão Geral ENEM #3", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Impactos da inteligência artificial no mercado de trabalho.", questoes: [{id:"p3q1",m:"mat",n:2,enunciado:"Qual o volume de um cubo de aresta 3?",alternativas:["A) 9","B) 27","C) 81","D) 3","E) 12"],gabarito:"B",explicacao:"3x3x3=27"}] },
  { id: 104, num: "04", title: "Provão Geral ENEM #4", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "O combate à evasão escolar no sistema público brasileiro.", questoes: [{id:"p4q1",m:"cn",n:1,enunciado:"H2O é a fórmula de:",alternativas:["A) Ar","B) Solo","C) Água","D) Fogo","E) Ferro"],gabarito:"C",explicacao:"H2O = Água"}] },
  { id: 105, num: "05", title: "Provão Geral ENEM #5", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Preservação da cultura indígena no Brasil contemporâneo.", questoes: [{id:"p5q1",m:"ch",n:3,enunciado:"A Revolução Francesa começou em:",alternativas:["A) 1500","B) 1789","C) 1914","D) 1945","E) 1822"],gabarito:"B",explicacao:"14 de Julho de 1789"}] },
  { id: 106, num: "06", title: "Provão Geral ENEM #6", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "A importância da doação de órgãos no Brasil.", questoes: [{id:"p6q1",m:"port",n:2,enunciado:"Quem escreveu o Quincas Borba?",alternativas:["A) Manuel Bandeira","B) Machado de Assis","C) Clarice Lispector","D) Jorge Amado","E) Guimarães Rosa"],gabarito:"B",explicacao:"Machado de Assis"}] },
  { id: 107, num: "07", title: "Provão Geral ENEM #7", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Caminhos para combater a intolerância religiosa.", questoes: [{id:"p7q1",m:"port",n:1,enunciado:"Sinônimo de 'Efêmero':",alternativas:["A) Duradouro","B) Passageiro","C) Grande","D) Triste","E) Forte"],gabarito:"B",explicacao:"Algo que dura pouco."}] },
  { id: 108, num: "08", title: "Provão Geral ENEM #8", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "O lixo eletrônico e seus impactos ambientais.", questoes: [{id:"p8q1",m:"cn",n:2,enunciado:"O maior órgão do corpo humano é:",alternativas:["A) Fígado","B) Coração","C) Pele","D) Pulmão","E) Cérebro"],gabarito:"C",explicacao:"A pele reveste todo o corpo."}] },
  { id: 109, num: "09", title: "Provão Geral ENEM #10", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "A ética no uso das redes sociais entre jovens.", questoes: [{id:"p9q1",m:"ch",n:1,enunciado:"O Descobrimento do Brasil foi em:",alternativas:["A) 1501","B) 1492","C) 1500","D) 1822","E) 1889"],gabarito:"C",explicacao:"22 de Abril de 1500."}] },
  { id: 110, num: "10", title: "Provão Geral ENEM #10", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Mobilidade urbana e sustentabilidade nas grandes cidades.", questoes: [{id:"p10q1",m:"mat",n:3,enunciado:"Raiz quadrada de 144:",alternativas:["A) 10","B) 11","C) 12","D) 13","E) 14"],gabarito:"C",explicacao:"12 x 12 = 144"}] }
];

if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...PROVOES);
}
