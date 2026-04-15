/**
 * DATA PARA 10 PROVÕES COMPLETOS (TRI + GABARITO)
 * IDs: 101 ao 110
 * m: matéria (port, mat, cn, ch, red)
 * n: nível (1: Fácil, 2: Médio, 3: Difícil) - USADO NO TRI
 */

const PROVOES = [
  {
    id: 101, num: "01", title: "Provão Geral ENEM #1", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new",
    essayPrompt: "O papel do esporte na inclusão social de jovens brasileiros.",
    questoes: [
      { id: "p1q1", m: "port", n: 1, e: "O bicho, meu Deus, era um homem. (Manuel Bandeira). O poema critica:", a: ["A urbanização", "B) A desumanização pela miséria", "C) O crescimento industrial", "D) A tecnologia moderna", "E) A vanguarda europeia"], g: "B", x: "O poema foca na desumanização do homem em situação de extrema pobreza." },
      { id: "p1q2", m: "ch", n: 2, e: "O Período Regencial brasileiro (1831-1840) foi marcado por:", a: ["A) Estabilidade política absoluta", "B) Centralização total em Pedro II", "C) Instabilidade e revoltas provinciais", "D) Início da República Velha", "E) Aliança com a Inglaterra"], g: "C", x: "O período teve revoltas como a Farroupilha e Sabinada." },
      { id: "p1q3", m: "cn", n: 3, e: "A fotossíntese ocorre principalmente nos:", a: ["A) Mitocôndrios", "B) Ribossomos", "C) Cloroplastos", "D) Lisossomos", "E) Complexo de Golgi"], g: "C", x: "Cloroplastos contêm clorofila para capturar luz." },
      { id: "p1q4", m: "mat", n: 1, e: "Se x + 5 = 12, qual o valor de x²?", a: ["A) 7", "B) 14", "C) 49", "D) 25", "E) 144"], g: "C", x: "x = 7. 7² = 49." },
      { id: "p1q5", m: "red", n: 1, e: "O tema da redação deste provão é 'Inclusão Social pelo Esporte'. Escreva um texto dissertativo-argumentativo.", a: ["A) Continuar para Redação"], g: "A", x: "Siga as instruções do Alberto Silva." }
    ]
  },
  {
    id: 102, num: "02", title: "Provão Geral ENEM #2", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new",
    essayPrompt: "Os desafios para a democratização do acesso ao cinema no Brasil.",
    questoes: [
      { id: "p2q1", m: "port", n: 1, e: "Função metalinguística ocorre quando:", a: ["A) Foco no sentimento", "B) Foco no próprio código", "C) Foco no canal", "D) Foco no receptor", "E) Foco no contexto"], g: "B", x: "Metalinguagem usa o código para falar dele mesmo." }
    ]
  },
  { id: 103, num: "03", title: "Provão Geral ENEM #3", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Impactos da inteligência artificial no mercado de trabalho.", questoes: [{id:"p3q1",m:"mat",n:2,e:"Qual o volume de um cubo de aresta 3?",a:["A) 9","B) 27","C) 81","D) 3","E) 12"],g:"B",x:"3x3x3=27"}] },
  { id: 104, num: "04", title: "Provão Geral ENEM #4", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "O combate à evasão escolar no sistema público brasileiro.", questoes: [{id:"p4q1",m:"cn",n:1,e:"H2O é a fórmula de:",a:["A) Ar","B) Solo","C) Água","D) Fogo","E) Ferro"],g:"C",x:"H2O = Água"}] },
  { id: 105, num: "05", title: "Provão Geral ENEM #5", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Preservação da cultura indígena no Brasil contemporâneo.", questoes: [{id:"p5q1",m:"ch",n:3,e:"A Revolução Francesa começou em:",a:["A) 1500","B) 1789","C) 1914","D) 1945","E) 1822"],g:"B",x:"14 de Julho de 1789"}] },
  { id: 106, num: "06", title: "Provão Geral ENEM #6", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "A importância da doação de órgãos no Brasil.", questoes: [{id:"p6q1",m:"port",n:2,e:"Quem escreveu o Quincas Borba?",a:["A) Manuel Bandeira","B) Machado de Assis","C) Clarice Lispector","D) Jorge Amado","E) Guimarães Rosa"],g:"B",x:"Machado de Assis"}] },
  { id: 107, num: "07", title: "Provão Geral ENEM #7", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Caminhos para combater a intolerância religiosa.", questoes: [{id:"p7q1",m:"port",n:1,e:"Sinônimo de 'Efêmero':",a:["A) Duradouro","B) Passageiro","C) Grande","D) Triste","E) Forte"],g:"B",x:"Algo que dura pouco."}] },
  { id: 108, num: "08", title: "Provão Geral ENEM #8", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "O lixo eletrônico e seus impactos ambientais.", questoes: [{id:"p8q1",m:"cn",n:2,e:"O maior órgão do corpo humano é:",a:["A) Fígado","B) Coração","C) Pele","D) Pulmão","E) Cérebro"],g:"C",x:"A pele reveste todo o corpo."}] },
  { id: 109, num: "09", title: "Provão Geral ENEM #9", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "A ética no uso das redes sociais entre jovens.", questoes: [{id:"p9q1",m:"ch",n:1,e:"O Descobrimento do Brasil foi em:",a:["A) 1501","B) 1492","C) 1500","D) 1822","E) 1889"],g:"C",x:"22 de Abril de 1500."}] },
  { id: 110, num: "10", title: "Provão Geral ENEM #10", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new", essayPrompt: "Mobilidade urbana e sustentabilidade nas grandes cidades.", questoes: [{id:"p10q1",m:"mat",n:3,e:"Raiz quadrada de 144:",a:["A) 10","B) 11","C) 12","D) 13","E) 14"],g:"C",x:"12 x 12 = 144"}] }
];

// Injeta os provões no array global
if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...PROVOES);
}
