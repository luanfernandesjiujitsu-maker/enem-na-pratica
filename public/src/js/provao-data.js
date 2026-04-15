/**
 * DATA PARA PROVÕES COMPLETOS (TRI + GABARITO)
 * Conteúdo expandido para o Provão #1
 */

const PROVOES = [
  {
    id: 101, num: "01", title: "Provão Geral ENEM #1", mat: "provao", matLabel: "Provão Geral", time: "4h 30min", qs: 20, status: "new",
    essayPrompt: "O papel do esporte na inclusão social de jovens brasileiros.",
    questoes: [
      { id: "p1q1", n: 1, enunciado: "O bicho, meu Deus, era um homem. (Manuel Bandeira). O poema critica:", alternativas: ["A) A urbanização", "B) A desumanização pela miséria", "C) O crescimento industrial", "D) A tecnologia moderna", "E) A vanguarda europeia"], gabarito: "B", explicacao: "O poema foca na desumanização do homem em situação de extrema pobreza." },
      { id: "p1q2", n: 2, enunciado: "O Período Regencial brasileiro (1831-1840) foi marcado por:", alternativas: ["A) Estabilidade política absoluta", "B) Centralização total em Pedro II", "C) Instabilidade e revoltas provinciais", "D) Início da República Velha", "E) Aliança com a Inglaterra"], gabarito: "C", explicacao: "O período teve revoltas como a Farroupilha e Sabinada." },
      { id: "p1q3", n: 3, enunciado: "A fotossíntese ocorre principalmente nos:", alternativas: ["A) Mitocôndrios", "B) Ribossomos", "C) Cloroplastos", "D) Lisossomos", "E) Complexo de Golgi"], gabarito: "C", explicacao: "Cloroplastos contêm clorofila para capturar luz." },
      { id: "p1q4", n: 1, enunciado: "Se x + 5 = 12, qual o valor de x²?", alternativas: ["A) 7", "B) 14", "C) 49", "D) 25", "E) 144"], gabarito: "C", explicacao: "x = 7. 7² = 49." },
      { id: "p1q5", n: 2, enunciado: "Qual bioma brasileiro é conhecido como Savana brasileira?", alternativas: ["A) Amazônia", "B) Cerrado", "C) Caatinga", "D) Pantanal", "E) Pampa"], gabarito: "B", explicacao: "O Cerrado possui características de savana (arbustos, solo ácido)." },
      { id: "p1q6", n: 1, enunciado: "O triângulo equilátero possui:", alternativas: ["A) Todos os lados diferentes", "B) Dois lados iguais", "C) Todos os lados e ângulos iguais", "D) Um ângulo de 90 graus", "E) Apenas um lado reto"], gabarito: "C", explicacao: "Equilátero = Lados e ângulos (60°) iguais." },
      { id: "p1q7", n: 3, enunciado: "A Revolução Industrial inglesa começou no século:", alternativas: ["A) XVI", "B) XVII", "C) XVIII", "D) XIX", "E) XX"], gabarito: "C", explicacao: "Teve início por volta de 1760 (séc XVIII)." },
      { id: "p1q8", n: 2, enunciado: "Proteínas são polímeros de:", alternativas: ["A) Açúcares", "B) Ácidos graxos", "C) Aminoácidos", "D) Nucleotídeos", "E) Vitaminas"], gabarito: "C", explicacao: "A ligação peptídica une aminoácidos para formar proteínas." },
      { id: "p1q9", n: 1, enunciado: "O Barroco é um estilo marcado por:", alternativas: ["A) Simplicidade e clareza", "B) Dualismo, contrastes e rebuscamento", "C) Ausência de religiosidade", "D) Uso exclusivo de formas geométricas", "E) Valorização do cotidiano operário"], gabarito: "B", explicacao: "Contraste luz/sombra, sagrado/profano." },
      { id: "p1q10", n: 2, enunciado: "Se uma pizza custa R$ 40,00 e você tem 15% de desconto, o valor final é:", alternativas: ["A) R$ 34,00", "B) R$ 30,00", "C) R$ 35,00", "D) R$ 38,00", "E) R$ 42,00"], gabarito: "A", explicacao: "15% de 40 = 6. 40 - 6 = 34." },
      { id: "p1q11", n: 3, enunciado: "A Guerra Fria foi um conflito ideológico entre:", alternativas: ["A) França e Inglaterra", "B) EUA e URSS", "C) Brasil e Argentina", "D) China e Japão", "E) Alemanha e Itália"], gabarito: "B", explicacao: "Capitalismo vs Socialismo pós-1945." },
      { id: "p1q12", n: 2, enunciado: "O DNA tem o formato de:", alternativas: ["A) Esfera", "B) Cubo", "C) Dupla hélice", "D) Círculo plano", "E) Estrela"], gabarito: "C", explicacao: "Estrutura helicoidal dupla." },
      { id: "p1q13", n: 1, enunciado: "Quem pintou a 'Monalisa'?", alternativas: ["A) Michelangelo", "B) Leonardo da Vinci", "C) Van Gogh", "D) Picasso", "E) Salvador Dalí"], gabarito: "B", explicacao: "Ícone do Renascimento Italiano." },
      { id: "p1q14", n: 2, enunciado: "A densidade é a razão entre:", alternativas: ["A) Peso e altura", "B) Massa e volume", "C) Força e área", "D) Tempo e espaço", "E) Calor e luz"], gabarito: "B", explicacao: "d = m/v." },
      { id: "p1q15", n: 3, enunciado: "A globalização intensificou:", alternativas: ["A) O isolamento dos países", "B) A integração econômica e fluxos de informação", "C) O fim do comércio marítimo", "D) A volta ao sistema de troca (escambo)", "E) A integração de blocos econômicos"], gabarito: "B", explicacao: "Conectividade mundial interdependente." },
      { id: "p1q16", n: 2, enunciado: "Um neologismo é:", alternativas: ["A) Palavra antiga em desuso", "B) Palavra nova criada na língua", "C) Um erro de ortografia", "D) Uma rima pobre", "E) Uma tradução do latim"], gabarito: "B", explicacao: "Criação de novos termos vocabulares." },
      { id: "p1q17", n: 1, enunciado: "Quanto é 5! (fatorial de 5)?", alternativas: ["A) 5", "B) 25", "C) 120", "D) 60", "E) 100"], gabarito: "C", explicacao: "5x4x3x2x1 = 120." },
      { id: "p1q18", n: 2, enunciado: "A Revolução Francesa iniciou em:", alternativas: ["A) 1789", "B) 1889", "C) 1914", "D) 1500", "E) 1822"], gabarito: "A", explicacao: "Queda da Bastilha." },
      { id: "p1q19", n: 3, enunciado: "O principal gás do efeito estufa é o:", alternativas: ["A) Oxigênio", "B) Nitrogênio", "C) Dióxido de Carbono (CO2)", "D) Hélio", "E) Argônio"], gabarito: "C", explicacao: "Retém calor na atmosfera terrestre." },
      { id: "p1q20", n: 1, enunciado: "A Constituição Brasileira atual é de:", alternativas: ["A) 1824", "B) 1889", "C) 1964", "D) 1988", "E) 2000"], gabarito: "D", explicacao: "A 'Constituição Cidadã'." }
    ]
  }
];

if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...PROVOES);
}
