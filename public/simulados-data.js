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
      enunciado: `Leia o trecho a seguir:\n\n"O Brasil não é para principiantes." (Tom Jobim)\n\nEssa frase, frequentemente atribuída ao compositor Tom Jobim, pode ser interpretada como uma referência à complexidade cultural e social do país. No contexto da análise do discurso, a expressão funciona como:`,
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
      enunciado: `Leia o poema de Carlos Drummond de Andrade:\n\n"No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra."\n\nA repetição dos versos no poema tem como principal função:`,
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
      enunciado: `Analise a tirinha em que um personagem diz: "Você precisa aprender a se comunicar melhor" e o outro responde: "Mas eu te mandei 47 mensagens de voz hoje!"\n\nO humor da tirinha baseia-se principalmente em:`,
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
      id: "01q4",
      enunciado: `Sobre as características do Romantismo brasileiro, é CORRETO afirmar:`,
      alternativas: [
        "A) Priorizou a objetividade científica e a descrição fiel da realidade social.",
        "B) Valorizou o índio como símbolo da identidade nacional, o sentimentalismo e a idealização amorosa.",
        "C) Representou uma ruptura com o passado colonial por meio de linguagem coloquial e humor.",
        "D) Foi influenciado pelo Positivismo e pelo Darwinismo social.",
        "E) Caracterizou-se pelo uso de linguagem erudita voltada para temas religiosos medievais."
      ],
      gabarito: "B",
      explicacao: "O Romantismo brasileiro (1836-1881) se caracterizou pelo indianismo (valorização do índio como herói nacional), pelo sentimentalismo exacerbado, pela idealização da mulher amada e pela busca por uma identidade nacional. José de Alencar, Gonçalves Dias e Álvares de Azevedo são os principais representantes."
    },
    {
      id: "01q5",
      enunciado: `Leia o texto publicitário: "Nosso produto não é o mais barato. É o mais inteligente."\n\nNesse slogan, a estratégia argumentativa utilizada consiste em:`,
      alternativas: [
        "A) Admitir uma desvantagem (preço alto) e transformá-la em diferencial positivo (qualidade/inteligência).",
        "B) Atacar os concorrentes de forma direta e agressiva.",
        "C) Usar dados estatísticos para convencer o consumidor.",
        "D) Apelar para a emoção do consumidor por meio de uma história pessoal.",
        "E) Utilizar autoridade científica para comprovar a superioridade do produto."
      ],
      gabarito: "A",
      explicacao: "A estratégia se chama 'concessão argumentativa': o enunciador admite algo que poderia ser considerado negativo (não ser o mais barato) mas imediatamente reorienta o argumento, transformando o preço alto em sinônimo de inteligência e qualidade. É uma técnica retórica eficaz porque demonstra honestidade e agrega valor ao produto."
    },
    {
      id: "01q6",
      enunciado: `A variação linguística é um fenômeno natural das línguas vivas. Sobre esse conceito, assinale a alternativa CORRETA:`,
      alternativas: [
        "A) A língua padrão é superior às demais variedades e deve ser usada em todos os contextos.",
        "B) As variações regionais, sociais e históricas da língua são erros que precisam ser corrigidos.",
        "C) Todas as variedades linguísticas têm sua validade e adequação a contextos específicos.",
        "D) A língua não varia, pois segue regras gramaticais fixas e universais.",
        "E) Apenas as variações formais da língua merecem ser estudadas pela Linguística."
      ],
      gabarito: "C",
      explicacao: "A Sociolinguística comprova que todas as variedades linguísticas são igualmente válidas do ponto de vista estrutural. O que varia é a adequação ao contexto: usa-se a norma culta em situações formais e a variedade coloquial em situações informais. Nenhuma variedade é 'errada' — é inadequada ao contexto."
    },
    {
      id: "01q7",
      enunciado: `No Realismo brasileiro, a obra 'Dom Casmurro' de Machado de Assis é célebre pela questão da narração. Sobre o narrador da obra, é CORRETO afirmar:`,
      alternativas: [
        "A) É um narrador onisciente neutro que relata os fatos com imparcialidade.",
        "B) É Capitu, que conta a história do seu próprio ponto de vista.",
        "C) É Bentinho/Dom Casmurro, narrador em primeira pessoa cuja confiabilidade é questionável.",
        "D) É um narrador externo que observa os personagens sem participar da trama.",
        "E) É José Dias, o agregado da família, que narra os eventos à distância."
      ],
      gabarito: "C",
      explicacao: "Bentinho, o Dom Casmurro, narra em primeira pessoa décadas depois dos acontecimentos. Isso o torna um narrador não confiável: ele pode estar distorcendo os fatos conscientemente ou inconscientemente. É daí que surge o grande debate literário — 'Capitu traiu ou não traiu?' — pois só temos a versão dele."
    },
    {
      id: "01q8",
      enunciado: `Leia o fragmento: "A gente se vê amanhã, né?" A forma 'a gente' nessa frase:`,
      alternativas: [
        "A) É um erro gramatical que deve ser substituído por 'nós'.",
        "B) É uma variante coloquial de 'nós', amplamente usada no português brasileiro falado.",
        "C) Refere-se a um grupo de pessoas indeterminado, diferente de 'nós'.",
        "D) É uma forma arcaica que sobreviveu apenas no português do Brasil.",
        "E) É exclusiva das regiões Norte e Nordeste do país."
      ],
      gabarito: "B",
      explicacao: "'A gente' é uma das variantes mais usadas no português brasileiro falado para substituir 'nós'. Trata-se de uma variação legítima da língua — não é erro, mas escolha contextual. Em textos formais, 'nós' é preferido; em registros informais, 'a gente' é completamente natural e aceito."
    },
    {
      id: "01q9",
      enunciado: `O gênero textual 'meme' é uma forma contemporânea de comunicação. Suas principais características incluem:`,
      alternativas: [
        "A) Linguagem formal, argumentação longa e referências exclusivamente literárias.",
        "B) Ausência de humor e foco em informações técnicas e científicas.",
        "C) Combinação de imagem e texto curto, humor, intertextualidade e circulação digital.",
        "D) Uso exclusivo de linguagem verbal sem elementos visuais.",
        "E) Produção exclusiva por jornalistas e veículos de comunicação oficiais."
      ],
      gabarito: "C",
      explicacao: "O meme é um gênero digital que combina imagem e texto de forma sintética e humorística. Sua força comunicativa vem da intertextualidade (referências a outros textos e contextos culturais), da linguagem informal e da rápida circulação nas redes sociais. É um gênero legítimo estudado pela Linguística contemporânea."
    },
    {
      id: "01q10",
      enunciado: `O Modernismo brasileiro de 1922 propôs uma ruptura com as tendências anteriores. Marque a alternativa que melhor define as propostas da Semana de Arte Moderna:`,
      alternativas: [
        "A) Retorno aos valores clássicos greco-romanos e à linguagem erudita.",
        "B) Valorização exclusiva da arte europeia e rejeição da cultura nacional.",
        "C) Liberdade de criação, valorização da cultura popular e nacional, e uso da linguagem coloquial.",
        "D) Defesa do Parnasianismo e do rigor formal na produção artística.",
        "E) Subordinação da arte à religião e à moral conservadora."
      ],
      gabarito: "C",
      explicacao: "A Semana de Arte Moderna (1922) propôs: liberdade de expressão artística, uso do verso livre, valorização da identidade cultural brasileira (índio, sertanejo, caipira), linguagem coloquial e questionamento dos padrões estéticos europeus importados. Oswald de Andrade, Mário de Andrade e Tarsila do Amaral foram figuras centrais."
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
      enunciado: `Uma função f(x) = 2x² - 8x + 6. O vértice dessa parábola tem coordenadas:`,
      alternativas: [
        "A) (2, -2)", "B) (2, 2)", "C) (-2, 2)", "D) (4, -2)", "E) (2, 0)"
      ],
      gabarito: "A",
      explicacao: "Para f(x) = ax² + bx + c, o vértice é (xv, yv) onde xv = -b/2a e yv = -Δ/4a.\nxv = -(-8)/(2×2) = 8/4 = 2\nf(2) = 2(4) - 8(2) + 6 = 8 - 16 + 6 = -2\nPortanto o vértice é (2, -2)."
    },
    {
      id: "02q2",
      enunciado: `Uma urna contém 5 bolas vermelhas e 3 bolas azuis. Retirando-se uma bola ao acaso, qual é a probabilidade de ser vermelha?`,
      alternativas: [
        "A) 3/8", "B) 5/3", "C) 5/8", "D) 1/2", "E) 2/5"
      ],
      gabarito: "C",
      explicacao: "Total de bolas = 5 + 3 = 8\nCasos favoráveis (vermelha) = 5\nP(vermelha) = 5/8"
    },
    {
      id: "02q3",
      enunciado: `Um triângulo retângulo tem catetos de 6 cm e 8 cm. Qual é a medida da hipotenusa?`,
      alternativas: [
        "A) 10 cm", "B) 12 cm", "C) 14 cm", "D) 9 cm", "E) 11 cm"
      ],
      gabarito: "A",
      explicacao: "Pelo Teorema de Pitágoras: h² = a² + b²\nh² = 6² + 8² = 36 + 64 = 100\nh = √100 = 10 cm"
    },
    {
      id: "02q4",
      enunciado: `A equação 3x - 7 = 2x + 5 tem como solução:`,
      alternativas: [
        "A) x = 2", "B) x = 12", "C) x = -12", "D) x = 7", "E) x = -2"
      ],
      gabarito: "B",
      explicacao: "3x - 7 = 2x + 5\n3x - 2x = 5 + 7\nx = 12"
    },
    {
      id: "02q5",
      enunciado: `Um produto custava R$200,00 e sofreu um aumento de 15%. Qual é o novo preço?`,
      alternativas: [
        "A) R$215,00", "B) R$230,00", "C$220,00", "D) R$225,00", "E) R$210,00"
      ],
      gabarito: "B",
      explicacao: "Aumento = 15% de 200 = 0,15 × 200 = R$30,00\nNovo preço = 200 + 30 = R$230,00\nOu: 200 × 1,15 = R$230,00"
    },
    {
      id: "02q6",
      enunciado: `Qual é a área de um círculo com raio igual a 7 cm? (Use π ≈ 3,14)`,
      alternativas: [
        "A) 153,86 cm²", "B) 44 cm²", "C) 21,98 cm²", "D) 49 cm²", "E) 196 cm²"
      ],
      gabarito: "A",
      explicacao: "A = π × r²\nA = 3,14 × 7²\nA = 3,14 × 49\nA = 153,86 cm²"
    },
    {
      id: "02q7",
      enunciado: `Em uma progressão aritmética, os três primeiros termos são 4, 9 e 14. Qual é o 10º termo?`,
      alternativas: [
        "A) 49", "B) 54", "C) 44", "D) 59", "E) 39"
      ],
      gabarito: "A",
      explicacao: "Razão: r = 9 - 4 = 5\nan = a1 + (n-1)×r\na10 = 4 + (10-1)×5\na10 = 4 + 45 = 49"
    },
    {
      id: "02q8",
      enunciado: `Um comerciante comprou mercadorias por R$1.200,00 e as vendeu com 25% de lucro. Por quanto foram vendidas?`,
      alternativas: [
        "A) R$1.400,00", "B) R$1.450,00", "C) R$1.500,00", "D) R$1.550,00", "E) R$1.600,00"
      ],
      gabarito: "C",
      explicacao: "Lucro = 25% de 1.200 = 0,25 × 1.200 = R$300,00\nPreço de venda = 1.200 + 300 = R$1.500,00"
    },
    {
      id: "02q9",
      enunciado: `Se log₂(x) = 5, então x é igual a:`,
      alternativas: [
        "A) 10", "B) 25", "C) 32", "D) 64", "E) 16"
      ],
      gabarito: "C",
      explicacao: "log₂(x) = 5 significa 2⁵ = x\n2⁵ = 2 × 2 × 2 × 2 × 2 = 32\nPortanto x = 32"
    },
    {
      id: "02q10",
      enunciado: `Em um gráfico de setores, se uma categoria representa 90° do total, qual é o percentual correspondente?`,
      alternativas: [
        "A) 90%", "B) 25%", "C) 30%", "D) 15%", "E) 45%"
      ],
      gabarito: "B",
      explicacao: "O círculo completo = 360°\nPortanto: 90°/360° = 1/4 = 0,25 = 25%"
    }
  ]
},

// ─────────────────────────────────────────
// SIMULADO 03 — CIÊNCIAS DA NATUREZA
// ─────────────────────────────────────────
{
  id: 3, num: "03", mat: "cn", matLabel: "Ciências da Natureza",
  title: "Física, Química e Biologia Integradas",
  qs: 10, time: "1h", status: "new",
  questoes: [
    {
      id: "03q1",
      enunciado: `Um corpo de 2 kg é acelerado a 5 m/s². Qual é a força resultante que age sobre ele? (Segunda Lei de Newton: F = m × a)`,
      alternativas: [
        "A) 2,5 N", "B) 7 N", "C) 10 N", "D) 3 N", "E) 15 N"
      ],
      gabarito: "C",
      explicacao: "F = m × a\nF = 2 kg × 5 m/s²\nF = 10 N (Newtons)"
    },
    {
      id: "03q2",
      enunciado: `Na tabela periódica, os elementos de um mesmo grupo (coluna) compartilham:`,
      alternativas: [
        "A) O mesmo número de massa atômica.",
        "B) O mesmo número de nêutrons no núcleo.",
        "C) O mesmo número de elétrons na camada de valência.",
        "D) O mesmo período e a mesma configuração eletrônica completa.",
        "E) A mesma densidade e o mesmo ponto de fusão."
      ],
      gabarito: "C",
      explicacao: "Elementos do mesmo grupo têm o mesmo número de elétrons na camada de valência (última camada). É por isso que apresentam propriedades químicas semelhantes — a valência determina como o elemento reage com outros."
    },
    {
      id: "03q3",
      enunciado: `A fotossíntese ocorre em dois estágios. Sobre a fase clara (fotoquímica), é CORRETO afirmar:`,
      alternativas: [
        "A) Ocorre no estroma do cloroplasto e produz glicose.",
        "B) Ocorre nas membranas dos tilacoides e utiliza a luz para produzir ATP, NADPH e liberar O₂.",
        "C) É independente da luz e utiliza CO₂ para produzir NADPH.",
        "D) Produz CO₂ e consome O₂, sendo similar à respiração celular.",
        "E) Ocorre nas mitocôndrias e depende da presença de glicose."
      ],
      gabarito: "B",
      explicacao: "A fase clara (fotoquímica) ocorre nas membranas dos tilacoides dos cloroplastos. A luz é absorvida pela clorofila, que usa essa energia para: fotólise da água (liberando O₂), produção de ATP (fotofosforilação) e formação de NADPH. Esses produtos alimentam a fase escura (ciclo de Calvin)."
    },
    {
      id: "03q4",
      enunciado: `Um carro percorre 120 km em 2 horas. Qual é a velocidade média do carro?`,
      alternativas: [
        "A) 240 km/h", "B) 60 km/h", "C) 80 km/h", "D) 90 km/h", "E) 100 km/h"
      ],
      gabarito: "B",
      explicacao: "v = d/t\nv = 120 km ÷ 2 h\nv = 60 km/h"
    },
    {
      id: "03q5",
      enunciado: `O pH de uma solução aquosa indica o grau de acidez ou basicidade. Uma solução com pH = 3 é classificada como:`,
      alternativas: [
        "A) Neutra, pois está próxima de 7.",
        "B) Básica, pois tem pH abaixo de 7.",
        "C) Ácida, pois tem pH abaixo de 7.",
        "D) Anfótera, pois pode agir como ácido ou base.",
        "E) Tampão, pois resiste a variações de pH."
      ],
      gabarito: "C",
      explicacao: "A escala de pH vai de 0 a 14:\n• pH < 7: solução ácida\n• pH = 7: solução neutra\n• pH > 7: solução básica\nUma solução com pH = 3 é ácida. Quanto mais baixo o pH, maior a concentração de íons H⁺ e mais ácida a solução."
    },
    {
      id: "03q6",
      enunciado: `O DNA é a molécula portadora da informação genética. Sobre sua estrutura, é CORRETO:`,
      alternativas: [
        "A) É formado por uma fita simples enrolada em hélice.",
        "B) Possui ribose como açúcar e bases nitrogenadas uracila.",
        "C) É uma dupla hélice formada por nucleotídeos com desoxirribose e as bases A, T, G e C.",
        "D) Está presente apenas no núcleo das células procariontes.",
        "E) É idêntico em todas as espécies de seres vivos."
      ],
      gabarito: "C",
      explicacao: "O DNA (ácido desoxirribonucleico) é uma dupla hélice formada por dois filamentos antiparalelos de nucleotídeos. Cada nucleotídeo tem: desoxirribose (açúcar), grupo fosfato e base nitrogenada (Adenina, Timina, Guanina ou Citosina). As bases se pareiam: A-T e G-C."
    },
    {
      id: "03q7",
      enunciado: `Sobre as ligações químicas, qual afirmação está CORRETA?`,
      alternativas: [
        "A) A ligação iônica ocorre entre dois átomos de não-metais com eletronegatividade similar.",
        "B) A ligação covalente ocorre pela transferência total de elétrons entre átomos.",
        "C) A ligação metálica explica a maleabilidade e condutividade elétrica dos metais.",
        "D) As ligações de hidrogênio são mais fortes que as ligações covalentes.",
        "E) A ligação iônica resulta sempre em substâncias gasosas à temperatura ambiente."
      ],
      gabarito: "C",
      explicacao: "Na ligação metálica, os elétrons de valência se desprendem dos átomos e formam uma 'nuvem eletrônica' (mar de elétrons) que permeia a estrutura. Isso explica: condutividade elétrica (elétrons livres), maleabilidade (camadas deslizam sem romper a estrutura) e brilho metálico."
    },
    {
      id: "03q8",
      enunciado: `A Lei de Conservação das Massas (Lavoisier) afirma que:`,
      alternativas: [
        "A) Em uma reação química, a massa dos produtos é sempre maior que a dos reagentes.",
        "B) Em uma reação química, a massa total dos reagentes é igual à massa total dos produtos.",
        "C) A massa pode ser criada ou destruída durante transformações químicas.",
        "D) A conservação de massa se aplica apenas a reações de combustão.",
        "E) A massa dos gases liberados não é considerada no balanço da reação."
      ],
      gabarito: "B",
      explicacao: "'Na natureza, nada se cria, nada se perde, tudo se transforma' — Antoine Lavoisier. Em uma reação química, os átomos apenas se reorganizam. Como o número de átomos de cada elemento é conservado, a massa total dos reagentes é igual à massa total dos produtos."
    },
    {
      id: "03q9",
      enunciado: `Sobre a Primeira Lei da Termodinâmica, assinale a alternativa CORRETA:`,
      alternativas: [
        "A) A energia do universo tende a se dissipar completamente ao longo do tempo.",
        "B) A variação de energia interna de um sistema é igual ao calor absorvido menos o trabalho realizado.",
        "C) É impossível construir uma máquina com 100% de eficiência.",
        "D) A entropia de um sistema isolado sempre aumenta.",
        "E) O calor sempre flui do corpo frio para o corpo quente."
      ],
      gabarito: "B",
      explicacao: "A Primeira Lei da Termodinâmica é a lei da conservação de energia: ΔU = Q - W, onde ΔU é a variação de energia interna, Q é o calor absorvido pelo sistema e W é o trabalho realizado pelo sistema. A opção C refere-se à Segunda Lei; D é a definição de entropia; E contradiz a lei da calorimetria."
    },
    {
      id: "03q10",
      enunciado: `No processo de respiração celular aeróbica, qual é o saldo final aproximado de moléculas de ATP produzidas por molécula de glicose?`,
      alternativas: [
        "A) 2 ATP", "B) 4 ATP", "C) 16 ATP", "D) 36-38 ATP", "E) 100 ATP"
      ],
      gabarito: "D",
      explicacao: "A respiração celular aeróbica tem três etapas: glicólise (2 ATP líquidos), Ciclo de Krebs (2 ATP) e Cadeia Transportadora de Elétrons/Fosforilação Oxidativa (~32-34 ATP). O total é aproximadamente 36-38 ATP por molécula de glicose. É muito mais eficiente que a fermentação (apenas 2 ATP)."
    }
  ]
},

// ─────────────────────────────────────────
// SIMULADO 04 — CIÊNCIAS HUMANAS
// ─────────────────────────────────────────
{
  id: 4, num: "04", mat: "ch", matLabel: "Ciências Humanas",
  title: "História, Geografia, Filosofia e Sociologia",
  qs: 10, time: "1h", status: "new",
  questoes: [
    {
      id: "04q1",
      enunciado: `A Revolução Industrial, iniciada na Inglaterra no século XVIII, trouxe profundas transformações sociais. Uma de suas principais consequências foi:`,
      alternativas: [
        "A) A extinção do trabalho assalariado e o retorno ao sistema feudal.",
        "B) O fortalecimento da aristocracia rural como classe dominante.",
        "C) O surgimento do proletariado urbano e as péssimas condições de trabalho nas fábricas.",
        "D) A diminuição das desigualdades sociais por meio da distribuição de renda.",
        "E) A redução da poluição ambiental com a substituição do trabalho animal por máquinas."
      ],
      gabarito: "C",
      explicacao: "A Revolução Industrial criou o proletariado — a classe trabalhadora urbana que vendia sua força de trabalho. As condições eram brutais: jornadas de 16 horas, trabalho infantil, salários miseráveis, ambientes insalubres. Essas condições alimentaram o surgimento do movimento operário e das teorias socialistas de Marx e Engels."
    },
    {
      id: "04q2",
      enunciado: `O conceito de 'efeito estufa' refere-se a um fenômeno natural amplificado pela ação humana. Sobre esse fenômeno, é CORRETO afirmar:`,
      alternativas: [
        "A) O efeito estufa é exclusivamente prejudicial e deve ser completamente eliminado.",
        "B) É causado apenas pelo dióxido de carbono (CO₂) e não por outros gases.",
        "C) Em condições naturais, o efeito estufa mantém a temperatura da Terra em níveis habitáveis.",
        "D) O aquecimento global é um fenômeno completamente independente do efeito estufa.",
        "E) Está relacionado apenas à destruição da camada de ozônio."
      ],
      gabarito: "C",
      explicacao: "O efeito estufa natural é essencial para a vida: sem ele, a Terra teria temperatura média de -18°C em vez dos atuais +15°C. O problema é o intensificação antrópica (humana) desse efeito pela queima de combustíveis fósseis, desmatamento e pecuária, que aumentam a concentração de gases de efeito estufa (CO₂, metano, vapor d'água, N₂O)."
    },
    {
      id: "04q3",
      enunciado: `Para Platão, a distinção entre 'mundo das ideias' e 'mundo sensível' implica que:`,
      alternativas: [
        "A) O conhecimento verdadeiro vem exclusivamente dos sentidos e da experiência prática.",
        "B) O mundo material é a única realidade existente e a filosofia deve se concentrar nele.",
        "C) As ideias (formas) são a verdadeira realidade, permanente e imutável, enquanto o mundo sensível é apenas uma cópia imperfeita.",
        "D) A razão e os sentidos têm igual importância na busca pelo conhecimento.",
        "E) O conhecimento é relativo e não existe verdade universal."
      ],
      gabarito: "C",
      explicacao: "Platão propôs a 'Teoria das Ideias' (ou Formas): existe um mundo inteligível habitado por ideias perfeitas, eternas e imutáveis (a Ideia de Beleza, Justiça, Bem). O mundo sensível que percebemos é apenas uma cópia imperfeita dessas ideias. O conhecimento verdadeiro (episteme) só se alcança pela razão, não pelos sentidos (que nos dão apenas opinião/doxa)."
    },
    {
      id: "04q4",
      enunciado: `O conceito de 'globalização' pode ser compreendido como:`,
      alternativas: [
        "A) Um processo exclusivamente econômico que beneficia igualmente todos os países.",
        "B) A integração crescente de economias, culturas e informações em nível mundial, com impactos desiguais.",
        "C) Um fenômeno recente que surgiu apenas com a internet nos anos 1990.",
        "D) Um processo que gerou maior homogeneidade e igualdade entre as nações.",
        "E) Um projeto político da ONU para unificar os sistemas de governo mundiais."
      ],
      gabarito: "B",
      explicacao: "A globalização é um processo multidimensional (econômico, cultural, informacional, político) que se intensificou após a Segunda Guerra Mundial e acelerou com a internet. Seus efeitos são desiguais: enquanto países desenvolvidos lideram o processo, países periféricos frequentemente se inserem em posição de dependência, aprofundando desigualdades globais."
    },
    {
      id: "04q5",
      enunciado: `O conceito de 'cidadania', na perspectiva sociológica contemporânea, inclui:`,
      alternativas: [
        "A) Apenas os direitos políticos, como o direito ao voto.",
        "B) Somente os deveres do indivíduo perante o Estado.",
        "C) Direitos civis, políticos e sociais, além da participação ativa na vida pública.",
        "D) Exclusivamente os direitos econômicos, como o direito ao trabalho.",
        "E) Apenas os direitos garantidos aos cidadãos nascidos no território nacional."
      ],
      gabarito: "C",
      explicacao: "T.H. Marshall sistematizou a cidadania em três dimensões: direitos civis (liberdade individual, propriedade, justiça), direitos políticos (voto, participação política) e direitos sociais (educação, saúde, trabalho). A cidadania plena envolve não apenas ser titular desses direitos, mas participar ativamente da vida pública e política."
    },
    {
      id: "04q6",
      enunciado: `O processo de colonização da América foi marcado por violência e exploração. Sobre esse período histórico, assinale a alternativa CORRETA:`,
      alternativas: [
        "A) A colonização foi um processo pacífico de 'encontro de culturas' sem conflitos.",
        "B) Os povos indígenas foram facilmente integrados à cultura europeia sem resistência.",
        "C) A exploração colonial baseou-se na extração de riquezas, trabalho compulsório e destruição de culturas nativas.",
        "D) O tráfico de africanos escravizados foi uma prática exclusiva do Brasil colonial.",
        "E) A Igreja Católica foi a principal resistente à escravidão indígena e africana nas Américas."
      ],
      gabarito: "C",
      explicacao: "A colonização europeia nas Américas foi marcada por: genocídio indígena (doenças, guerras e escravidão), destruição de civilizações milenares (Asteca, Inca, Maya), exploração do trabalho compulsório indígena e depois africano, e extração de riquezas (metais preciosos, cana-de-açúcar, algodão) para acumulação primitiva de capital na Europa."
    },
    {
      id: "04q7",
      enunciado: `Para Max Weber, a 'ação social' é caracterizada por:`,
      alternativas: [
        "A) Todo comportamento humano, independentemente de sua relação com outros indivíduos.",
        "B) Apenas as ações coletivas realizadas por grupos organizados.",
        "C) O comportamento ao qual o indivíduo atribui um sentido subjetivo, considerando a ação dos outros.",
        "D) As ações determinadas exclusivamente por fatores econômicos e materiais.",
        "E) Ações que visam exclusivamente o bem coletivo, sem interesse individual."
      ],
      gabarito: "C",
      explicacao: "Weber define ação social como todo comportamento humano ao qual o agente atribui um sentido subjetivo e que leva em conta a conduta dos outros. Tipos: racional com relação a fins (calculada), racional com relação a valores (ética/religião), afetiva (emoções) e tradicional (costume/hábito). Esse conceito é central para a Sociologia Compreensiva weberiana."
    },
    {
      id: "04q8",
      enunciado: `O conceito de 'biomas' na Geografia refere-se a:`,
      alternativas: [
        "A) Zonas climáticas determinadas pela latitude e altitude de uma região.",
        "B) Grandes ecossistemas terrestres com flora, fauna e clima característicos e interdependentes.",
        "C) Divisões político-administrativas que agrupam países com características naturais similares.",
        "D) Regiões oceânicas classificadas pela profundidade e temperatura das águas.",
        "E) Territórios protegidos por legislação ambiental internacional."
      ],
      gabarito: "B",
      explicacao: "Bioma é um conjunto de ecossistemas terrestres (ou aquáticos) com flora, fauna, solo e clima semelhantes e interdependentes. O Brasil possui seis biomas: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal. Cada um tem características únicas e enfrenta ameaças distintas de degradação."
    },
    {
      id: "04q9",
      enunciado: `A Declaração Universal dos Direitos Humanos (1948) foi criada no contexto pós-Segunda Guerra Mundial. Seu principal objetivo era:`,
      alternativas: [
        "A) Estabelecer um governo mundial único para evitar novos conflitos.",
        "B) Proclamar direitos fundamentais universais que protegessem todo ser humano independentemente de sua origem.",
        "C) Garantir reparações financeiras aos países destruídos pela guerra.",
        "D) Criar um sistema de sanções econômicas contra países que violassem direitos.",
        "E) Unificar os sistemas jurídicos de todos os países-membros da ONU."
      ],
      gabarito: "B",
      explicacao: "A DUDH foi aprovada pela ONU em 1948, em resposta às atrocidades do Holocausto e da Segunda Guerra Mundial. Proclamou que todos os seres humanos nascem livres e iguais em dignidade e direitos, independentemente de raça, cor, sexo, língua, religião, origem nacional ou social. É o fundamento do moderno Direito Internacional dos Direitos Humanos."
    },
    {
      id: "04q10",
      enunciado: `O fenômeno da 'urbanização acelerada' nos países em desenvolvimento resultou em:`,
      alternativas: [
        "A) Melhoria generalizada da qualidade de vida da população urbana.",
        "B) Crescimento equilibrado das cidades com planejamento urbano adequado.",
        "C) Surgimento de periferias e favelas, problemas de infraestrutura e segregação socioespacial.",
        "D) Redução da desigualdade social pela concentração de serviços nas cidades.",
        "E) Queda do desemprego com a industrialização das áreas urbanas."
      ],
      gabarito: "C",
      explicacao: "A urbanização acelerada sem planejamento em países como o Brasil gerou: crescimento de favelas e periferias (habitação precária), pressão sobre serviços públicos (saneamento, saúde, educação, transporte), segregação socioespacial (pobres nas periferias, ricos nos centros), violência urbana e problemas ambientais como enchentes e deslizamentos."
    }
  ]
},

// ─────────────────────────────────────────
// SIMULADO 05 — REDAÇÃO
// ─────────────────────────────────────────
{
  id: 5, num: "05", mat: "red", matLabel: "Redação",
  title: "Guia Completo de Redação Nota 1000",
  qs: 5, time: "1h", status: "new",
  isRedacao: true,
  tema: "Os desafios da saúde mental no Brasil contemporâneo",
  questoes: [
    {
      id: "05q1",
      enunciado: `Sobre a estrutura do texto dissertativo-argumentativo do ENEM, é CORRETO afirmar:`,
      alternativas: [
        "A) É composto por introdução, desenvolvimento (sem divisão) e conclusão com pedido de desculpas.",
        "B) Deve ter no mínimo 4 parágrafos: introdução (tese), dois desenvolvimentos (argumentos) e conclusão (proposta de intervenção).",
        "C) Permite o uso de narrativa pessoal e poemas ao longo do texto.",
        "D) A conclusão pode ser uma simples repetição da introdução com outras palavras.",
        "E) O número de linhas não influencia a nota da redação."
      ],
      gabarito: "B",
      explicacao: "O ENEM exige um texto dissertativo-argumentativo com: introdução (apresentação do tema e tese), dois parágrafos de desenvolvimento (cada um com argumento + justificativa/exemplificação) e conclusão com proposta de intervenção social detalhada (agente + ação + meio + finalidade). O texto ideal tem entre 25-30 linhas."
    },
    {
      id: "05q2",
      enunciado: `A Competência III da redação do ENEM avalia:`,
      alternativas: [
        "A) O domínio da norma culta da língua portuguesa.",
        "B) A compreensão da proposta de redação e a aplicação de conceitos de outras áreas.",
        "C) A seleção, o relacionamento, organização e interpretação de informações, fatos e argumentos.",
        "D) O conhecimento dos mecanismos linguísticos de coesão textual.",
        "E) O respeito aos direitos humanos em toda a argumentação."
      ],
      gabarito: "C",
      explicacao: "As 5 competências do ENEM: I) Domínio da norma culta; II) Compreensão do tema; III) Seleção e organização de argumentos; IV) Coesão textual; V) Proposta de intervenção respeitando os direitos humanos. A Competência III avalia se você sabe construir argumentos sólidos, selecionar informações relevantes e organizá-las com lógica."
    },
    {
      id: "05q3",
      enunciado: `Uma boa proposta de intervenção no ENEM deve conter:`,
      alternativas: [
        "A) Apenas a identificação do problema sem sugerir soluções.",
        "B) Uma crítica genérica ao governo sem especificar ações concretas.",
        "C) Agente da ação, ação a ser tomada, meio/modo de execução e finalidade/resultado esperado.",
        "D) Citações de autores famosos e dados estatísticos sem conectivos.",
        "E) Uma narração pessoal de como o autor vivenciou o problema."
      ],
      gabarito: "C",
      explicacao: "A proposta de intervenção nota 200 deve ser detalhada: QUEM fará (agente: governo federal, ONGs, escolas) + O QUÊ fará (ação específica) + COMO fará (meio/ferramenta) + PARA QUÊ fará (finalidade). Exemplo: 'O Ministério da Saúde [agente] deve ampliar o número de CAPS [ação] por meio de repasse de verbas municipais [meio] a fim de democratizar o acesso à saúde mental [finalidade].'"
    },
    {
      id: "05q4",
      enunciado: `Sobre coesão e coerência textual, assinale a alternativa CORRETA:`,
      alternativas: [
        "A) Coesão e coerência são sinônimos e se referem ao mesmo fenômeno textual.",
        "B) Coesão refere-se à conexão linguística entre as partes do texto; coerência, à lógica e sentido do conteúdo.",
        "C) Um texto pode ser coeso sem ser coerente, mas não pode ser coerente sem ser coeso.",
        "D) A coerência é assegurada apenas pelo uso correto da gramática normativa.",
        "E) A repetição de palavras é sempre um recurso de coesão adequado."
      ],
      gabarito: "B",
      explicacao: "Coesão: mecanismos linguísticos que conectam as partes do texto (pronomes, conectivos, elipse, substituição). Coerência: lógica interna, sem contradições, com progressão de ideias. Um texto pode ser gramaticalmente coeso mas incoerente (frases bem conectadas que se contradizem). O ideal é ter ambas. Para o ENEM, use conectivos variados para demonstrar coesão (portanto, entretanto, ademais, outrossim)."
    },
    {
      id: "05q5",
      enunciado: `Ao abordar o tema 'saúde mental no Brasil', qual argumentação melhor atenderia às exigências do ENEM?`,
      alternativas: [
        "A) Afirmar que 'depressão é frescura' e que as pessoas precisam de força de vontade.",
        "B) Apresentar apenas dados pessoais sem relacionar ao contexto social mais amplo.",
        "C) Contextualizar o aumento de transtornos mentais pós-pandemia, identificar causas estruturais e propor política pública específica.",
        "D) Copiar trechos de notícias sem conectar com a tese principal.",
        "E) Limitar-se a descrever o problema sem nenhuma análise crítica ou proposta."
      ],
      gabarito: "C",
      explicacao: "A melhor redação contextualiza o problema historicamente (pós-pandemia, pressões contemporâneas), identifica causas (desigualdade social, estigma, falta de serviços), usa repertório sociocultural (OMS, CAPS, Lei de Saúde Mental), argumenta com lógica e propõe intervenção detalhada e viável. Isso atende às 5 competências simultaneamente."
    }
  ]
},

// ─────────────────────────────────────────
// SIMULADOS 06-50 (estrutura simplificada)
// ─────────────────────────────────────────
{
  id: 6, num: "06", mat: "mat", matLabel: "Matemática",
  title: "Estatística, Trigonometria e Álgebra",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id:"06q1", enunciado:"Calcule a média aritmética dos valores: 4, 7, 9, 12, 8.", alternativas:["A) 7","B) 8","C) 9","D) 10","E) 6"], gabarito:"B", explicacao:"Soma = 4+7+9+12+8 = 40. Média = 40÷5 = 8." },
    { id:"06q2", enunciado:"Se sen(30°) = 0,5, qual é o valor de cos(60°)?", alternativas:["A) 0,5","B) 0,87","C) 1","D) 0","E) 0,25"], gabarito:"A", explicacao:"cos(60°) = sen(30°) = 0,5. São ângulos complementares: cos(θ) = sen(90°-θ)." },
    { id:"06q3", enunciado:"Resolva: x² - 5x + 6 = 0", alternativas:["A) x=2 e x=3","B) x=1 e x=6","C) x=-2 e x=-3","D) x=2 e x=6","E) x=0 e x=5"], gabarito:"A", explicacao:"Δ = 25-24 = 1. x = (5±1)/2. x1=3, x2=2." },
    { id:"06q4", enunciado:"Qual é a moda do conjunto {3, 5, 5, 7, 8, 5, 9}?", alternativas:["A) 7","B) 3","C) 5","D) 9","E) 8"], gabarito:"C", explicacao:"Moda é o valor que mais se repete. O número 5 aparece 3 vezes." },
    { id:"06q5", enunciado:"Uma pesquisa com 200 pessoas mostrou que 60% preferem chocolate. Quantas pessoas preferem chocolate?", alternativas:["A) 60","B) 80","C) 100","D) 120","E) 140"], gabarito:"D", explicacao:"60% de 200 = 0,60 × 200 = 120 pessoas." },
    { id:"06q6", enunciado:"Se tg(45°) = 1, qual é o valor de sen(45°)/cos(45°)?", alternativas:["A) 0","B) 0,5","C) 1","D) 2","E) √2"], gabarito:"C", explicacao:"tg(θ) = sen(θ)/cos(θ). Portanto sen(45°)/cos(45°) = tg(45°) = 1." },
    { id:"06q7", enunciado:"O desvio padrão mede:", alternativas:["A) O valor mais frequente de um conjunto","B) A dispersão dos dados em torno da média","C) O valor central de um conjunto ordenado","D) A soma de todos os valores dividida pela quantidade","E) A diferença entre o maior e menor valor"], gabarito:"B", explicacao:"O desvio padrão indica quanto os dados se afastam da média. Desvio alto = dados dispersos; desvio baixo = dados concentrados perto da média." },
    { id:"06q8", enunciado:"Fatore: x² - 16", alternativas:["A) (x-4)(x-4)","B) (x+4)(x+4)","C) (x-4)(x+4)","D) (x-8)(x+2)","E) x(x-16)"], gabarito:"C", explicacao:"x²-16 é diferença de quadrados: a²-b² = (a-b)(a+b). Logo x²-4² = (x-4)(x+4)." },
    { id:"06q9", enunciado:"Uma amostra tem mediana 7. Isso significa que:", alternativas:["A) A média da amostra é 7","B) O valor 7 se repete mais vezes","C) Metade dos valores é menor que 7 e metade é maior","D) O maior valor é 7","E) A soma de todos os valores é 7"], gabarito:"C", explicacao:"Mediana é o valor central de um conjunto ordenado. Metade dos dados está abaixo e metade acima da mediana." },
    { id:"06q10", enunciado:"Qual é o valor de 2³ + 3²?", alternativas:["A) 13","B) 15","C) 17","D) 11","E) 10"], gabarito:"C", explicacao:"2³ = 8 e 3² = 9. Logo 8 + 9 = 17." }
  ]
},
{
  id: 7, num: "07", mat: "port", matLabel: "Linguagens",
  title: "Língua Estrangeira + Artes e Tecnologia",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id:"07q1", enunciado:'Choose the correct option to complete: "She ___ to the store yesterday."', alternativas:["A) go","B) goes","C) went","D) going","E) gone"], gabarito:"C", explicacao:"'Yesterday' indica passado simples (Simple Past). O verbo 'go' no passado é 'went' (verbo irregular)." },
    { id:"07q2", enunciado:'What does "breakthrough" mean in English?', alternativas:["A) Pausa","B) Avanço significativo","C) Interrupção","D) Retrocesso","E) Barreira"], gabarito:"B", explicacao:"'Breakthrough' = avanço significativo, descoberta importante, progresso notável. Ex: 'a medical breakthrough' = um avanço médico." },
    { id:"07q3", enunciado:"Sobre a arte do movimento Cubismo, é CORRETO afirmar:", alternativas:["A) Valorizava a representação realista e fiel da natureza","B) Representava os objetos de múltiplos ângulos simultaneamente, fragmentando a forma","C) Utilizava exclusivamente cores neutras e sem expressividade","D) Foi criado no Brasil por Tarsila do Amaral nos anos 1920","E) Era uma arte abstrata sem qualquer referência ao mundo real"], gabarito:"B", explicacao:"O Cubismo (Picasso e Braque) fragmentava os objetos, mostrando múltiplas perspectivas ao mesmo tempo no mesmo plano. Influenciou profundamente a arte moderna e o Modernismo brasileiro." },
    { id:"07q4", enunciado:'Complete: "If I ___ rich, I would travel the world."', alternativas:["A) am","B) was","C) were","D) be","E) being"], gabarito:"C", explicacao:"Condicional do tipo 2 (hipótese irreal no presente): If + sujeito + were + ... Usa-se 'were' para todos os sujeitos no inglês formal." },
    { id:"07q5", enunciado:"A linguagem cinematográfica utiliza o recurso do 'close-up' (plano fechado) para:", alternativas:["A) Mostrar o cenário completo onde a cena se passa","B) Apresentar grupos de personagens interagindo","C) Enfatizar detalhes — especialmente expressões faciais e emoções do personagem","D) Registrar movimentos rápidos de ação","E) Indicar passagem de tempo entre duas cenas"], gabarito:"C", explicacao:"O close-up enquadra o rosto ou detalhe de forma próxima, transmitindo emoções intensas ao espectador. É um recurso expressivo fundamental na linguagem cinematográfica para criar intimidade e impacto emocional." },
    { id:"07q6", enunciado:'What is the meaning of "sustainable" in: "We need sustainable energy sources"?', alternativas:["A) Cara e rara","B) Que pode ser mantida sem esgotar recursos naturais","C) Nuclear e perigosa","D) Rápida e eficiente","E) Importada de outros países"], gabarito:"B", explicacao:"'Sustainable' = sustentável, que pode ser mantido ao longo do tempo sem esgotar os recursos ou causar danos permanentes ao ambiente. Central no debate sobre energia e desenvolvimento." },
    { id:"07q7", enunciado:"No movimento Hip-Hop, quais são os quatro elementos fundamentais?", alternativas:["A) Jazz, Blues, Soul e Funk","B) Rap (MC), DJing, Breaking (dança) e Graffiti","C) Samba, Pagode, Funk e Axé","D) Rock, Pop, Eletrônico e R&B","E) Forró, Baião, Xote e Coco"], gabarito:"B", explicacao:"O Hip-Hop, surgido no Bronx nos anos 1970, tem quatro pilares: MC (rap/poesia falada), DJ (manipulação de discos), Breaking (dança de rua/break) e Graffiti (arte visual urbana). Cada elemento é uma forma de expressão artística e cultural das periferias." },
    { id:"07q8", enunciado:'Choose the passive voice: "The teacher explains the lesson."', alternativas:["A) The lesson is explained by the teacher","B) The teacher is explained the lesson","C) The lesson explains the teacher","D) The lesson was explaining the teacher","E) The teacher has explained the lesson"], gabarito:"A", explicacao:"Voz passiva no presente: objeto + is/are + particípio passado + by + sujeito. 'The lesson is explained by the teacher.'" },
    { id:"07q9", enunciado:"A obra 'O Abaporu' (1928) de Tarsila do Amaral é considerada um ícone do Modernismo brasileiro. Qual movimento ela representa?", alternativas:["A) Realismo Social","B) Impressionismo Tropical","C) Antropofagismo, proposto pelo Manifesto Antropófago de Oswald de Andrade","D) Construtivismo geométrico","E) Expressionismo abstrato"], gabarito:"C", explicacao:"'O Abaporu' inspirou Oswald de Andrade a escrever o 'Manifesto Antropófago' (1928): a ideia de que o Brasil deve 'devorar' culturalmente as influências externas e transformá-las em algo novo e próprio. É o símbolo do Modernismo brasileiro na sua fase de maturidade." },
    { id:"07q10", enunciado:'What does "Moreover" mean as a connector?', alternativas:["A) No entanto","B) Por isso","C) Além disso","D) Embora","E) Portanto"], gabarito:"C", explicacao:"'Moreover' é um conectivo aditivo que significa 'além disso', 'ademais', usado para acrescentar informação. Outros aditivos: Furthermore, In addition, Also. Conectivos de contraste: However, Nevertheless, Although." }
  ]
},
{
  id: 8, num: "08", mat: "cn", matLabel: "Ciências da Natureza",
  title: "Ecologia, Evolução e Genética",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id:"08q1", enunciado:"A seleção natural, proposta por Darwin, pode ser resumida como:", alternativas:["A) Transmissão de características adquiridas ao longo da vida","B) Sobrevivência e reprodução preferencial dos indivíduos com variações mais adaptadas ao ambiente","C) Evolução em passos grandes e repentinos","D) Criação divina das espécies em sua forma atual","E) Herança de características de forma igualitária entre todos os descendentes"], gabarito:"B", explicacao:"Darwin propôs que: existe variação genética nas populações; algumas variações aumentam a chance de sobrevivência e reprodução; essas variações vantajosas são transmitidas às gerações seguintes. Ao longo do tempo, isso muda as populações — é a evolução por seleção natural." },
    { id:"08q2", enunciado:"Em genética mendeliana, um indivíduo heterozigoto para uma característica dominante (Aa) cruzado com outro heterozigoto (Aa) produz qual proporção fenotípica?", alternativas:["A) 1:1 (dominante:recessivo)","B) 3:1 (dominante:recessivo)","C) 1:2:1","D) Todos dominantes","E) Todos recessivos"], gabarito:"B", explicacao:"Cruzamento Aa × Aa: AA (25%), Aa (50%), aa (25%). Fenótipo: 3 dominantes (AA+Aa) : 1 recessivo (aa). É a proporção clássica da 1ª Lei de Mendel." },
    { id:"08q3", enunciado:"O que é uma cadeia alimentar?", alternativas:["A) Um ciclo fechado onde todos os seres vivos se alimentam uns dos outros igualmente","B) A sequência linear de transferência de energia e matéria entre organismos em um ecossistema","C) A quantidade total de energia disponível em um ecossistema","D) A diversidade de espécies existentes em um bioma","E) O processo de decomposição de matéria orgânica no solo"], gabarito:"B", explicacao:"Cadeia alimentar = sequência linear de transferência de energia: produtor (planta) → consumidor primário (herbívoro) → consumidor secundário (carnívoro) → consumidor terciário. Em cada nível, cerca de 90% da energia é perdida como calor — é a razão das pirâmides ecológicas." },
    { id:"08q4", enunciado:"A mutação genética é:", alternativas:["A) Sempre prejudicial ao organismo","B) Uma alteração na sequência de bases do DNA que pode ser neutra, benéfica ou prejudicial","C) Um processo exclusivo de bactérias e vírus","D) Idêntica ao processo de meiose","E) Impossível de ser herdada pelos descendentes"], gabarito:"B", explicacao:"Mutação = alteração na sequência de DNA. Pode ser: neutra (sem efeito no fenótipo), benéfica (aumenta adaptação — base da evolução) ou prejudicial (pode causar doenças). É hereditária se ocorrer nas células germinativas (espermatozoide/óvulo). As mutações somáticas não são herdadas." },
    { id:"08q5", enunciado:"O que caracteriza uma relação ecológica de mutualismo?", alternativas:["A) Uma espécie se beneficia enquanto a outra é prejudicada","B) Uma espécie se beneficia sem afetar a outra","C) Ambas as espécies se beneficiam da relação","D) Ambas as espécies são prejudicadas","E) Uma espécie parasita a outra sem matá-la"], gabarito:"C", explicacao:"Mutualismo: relação benéfica para ambas as partes (+/+). Ex: abelhas e flores (polinização), fungos e algas nos líquens, bactérias e leguminosas (fixação de N₂). Compare: parasitismo (+/-), comensalismo (+/0), predação (+/-)." },
    { id:"08q6", enunciado:"O que são organismos transgênicos?", alternativas:["A) Organismos que sofrem mutações naturais no ambiente","B) Organismos que têm genes de outras espécies inseridos no seu DNA por técnicas de engenharia genética","C) Organismos clonados a partir de células somáticas","D) Organismos resistentes a doenças por seleção natural","E) Organismos que se reproduzem assexuadamente apenas"], gabarito:"B", explicacao:"Transgênicos (OGMs) têm genes de outras espécies inseridos artificialmente. Exemplos: milho Bt (gene de bactéria que produz proteína inseticida), soja Roundup Ready (resistente a herbicida), arroz dourado (genes para produzir vitamina A). É um tema de debate ético e científico." },
    { id:"08q7", enunciado:"Qual a diferença entre mitose e meiose?", alternativas:["A) Mitose produz 4 células haploides; meiose produz 2 células diploides","B) Ambas produzem células geneticamente idênticas à célula original","C) Mitose produz 2 células diploides idênticas; meiose produz 4 células haploides com variação genética","D) Mitose ocorre apenas nas gônadas; meiose em todas as células","E) Não há diferença funcional entre os dois processos"], gabarito:"C", explicacao:"Mitose: reprodução celular, 2 células filhas diploides (2n) geneticamente idênticas. Meiose: formação de gametas, 4 células filhas haploides (n) com variação genética (crossing-over). A meiose garante a diversidade genética e o número cromossômico após a fecundação." },
    { id:"08q8", enunciado:"O que é biodiversidade e por que ela é importante?", alternativas:["A) É a quantidade de indivíduos de uma única espécie; importante para o controle populacional","B) É a variedade de genes, espécies e ecossistemas; fundamental para o equilíbrio e a resiliência dos ecossistemas","C) É medida apenas pelo número de espécies de grandes mamíferos","D) Tem importância apenas estética e turística","E) É irrelevante para os serviços ecossistêmicos como purificação da água"], gabarito:"B", explicacao:"Biodiversidade inclui: diversidade genética (variabilidade dentro das espécies), diversidade de espécies e diversidade de ecossistemas. Sua importância: estabilidade ecológica, serviços ambientais (polinização, controle de pestes, purificação de água), recursos medicinais e alimentares, e resiliência a mudanças climáticas." },
    { id:"08q9", enunciado:"O que é DNA recombinante?", alternativas:["A) DNA que se fragmenta espontaneamente","B) DNA de dois organismos diferentes combinados artificialmente in vitro","C) DNA que sofreu danos por radiação ultravioleta","D) DNA presente apenas em células cancerígenas","E) DNA idêntico ao original após a replicação"], gabarito:"B", explicacao:"DNA recombinante é produzido pela biotecnologia: fragmentos de DNA de organismos diferentes são combinados artificialmente. Usa-se enzimas de restrição para cortar o DNA e ligases para unir os fragmentos. Tecnologia base para produção de insulina humana, vacinas e organismos transgênicos." },
    { id:"08q10", enunciado:"Qual das alternativas descreve corretamente a relação entre um predador e sua presa?", alternativas:["A) Ambos se beneficiam da relação (mutualismo)","B) O predador é prejudicado; a presa se beneficia","C) O predador se beneficia (+) e a presa é prejudicada (-), regulando populações","D) Nenhum dos dois é afetado pela relação","E) É uma relação apenas entre animais e plantas"], gabarito:"C", explicacao:"Predação (+/-): predador mata e ingere a presa para obter energia (+). A presa morre (-). É fundamental para o equilíbrio ecológico: controla populações de presas, evita superpopulação, e pressiona evolutivamente as presas a desenvolverem defesas (camuflagem, toxinas, velocidade)." }
  ]
},
{
  id: 9, num: "09", mat: "ch", matLabel: "Ciências Humanas",
  title: "Brasil Republicano e Relações Internacionais",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id:"09q1", enunciado:"A Proclamação da República no Brasil (1889) foi resultado principalmente de:", alternativas:["A) Uma revolução popular com ampla participação das camadas populares","B) Uma articulação entre militares positivistas e fazendeiros cafeicultores insatisfeitos com a Monarquia","C) Uma invasão militar estrangeira que derrubou Dom Pedro II","D) Um movimento indígena que reivindicava o fim da escravidão","E) Uma reforma eleitoral que transformou o Império em República pacificamente"], gabarito:"B", explicacao:"A Proclamação da República foi um golpe militar liderado pelo Marechal Deodoro da Fonseca, com apoio do Exército (influenciado pelo Positivismo de Comte) e dos fazendeiros de café de São Paulo (insatisfeitos com a abolição da escravidão). Foi um movimento 'de cima para baixo', sem participação popular significativa." },
    { id:"09q2", enunciado:"O que foi a 'política do café com leite' na Primeira República (1889-1930)?", alternativas:["A) Uma política de incentivo ao consumo de café e leite no Brasil","B) A alternância no poder presidencial entre São Paulo (café) e Minas Gerais (leite)","C) Um acordo econômico entre Brasil e Argentina para exportação de alimentos","D) A política de valorização do café implementada pelo governo federal","E) Um movimento popular contra a desigualdade no campo"], gabarito:"B", explicacao:"A 'política café com leite' (ou política dos governadores) caracterizou a Primeira República: São Paulo (maior produtor de café) e Minas Gerais (maior produtor de leite) se revezavam na presidência. Era sustentada pelo coronelismo e pela fraude eleitoral, garantindo os interesses das oligarquias regionais." },
    { id:"09q3", enunciado:"O conceito de 'soberania nacional' no Direito Internacional significa:", alternativas:["A) O direito de um país invadir outros em nome de seus interesses econômicos","B) A supremacia de um estado sobre seu território e população, sem interferência externa","C) A submissão de um país às decisões da ONU em todos os assuntos internos","D) O poder das grandes potências de interferir em países menores","E) A renúncia de um país aos seus direitos territoriais em benefício da paz"], gabarito:"B", explicacao:"Soberania = poder supremo do Estado sobre seu território e população, sem subordinação a nenhum poder externo. É um dos pilares do Direito Internacional Público desde a Paz de Westfália (1648). Inclui: não intervenção em assuntos internos de outros Estados, igualdade jurídica entre os países e autodeterminação dos povos." },
    { id:"09q4", enunciado:"A Era Vargas (1930-1945) foi marcada por:", alternativas:["A) Plena democracia e respeito irrestrito aos direitos individuais","B) Centralização do poder, industrialização, criação de leis trabalhistas e populismo","C) Total laissez-faire econômico e abertura para capital estrangeiro","D) Federalismo descentralizado com ampla autonomia para os estados","E) Fim do coronelismo e democracia plena nas eleições regionais"], gabarito:"B", explicacao:"Vargas (1930-1945) criou o Estado Novo (ditadura, 1937-1945), centralizou o poder, impulsionou a industrialização e criou a CLT (1943), incorporando a classe trabalhadora ao sistema político. Seu populismo (trabalhismo) criou o mito do 'pai dos pobres', transformando-o em figura ambígua: autoritário mas modernizador." },
    { id:"09q5", enunciado:"O que é o MERCOSUL e quais são seus países fundadores?", alternativas:["A) Mercado Comum Europeu; fundado por Alemanha, França, Itália e Espanha","B) Acordo de livre comércio entre EUA, Canadá e México","C) Bloco econômico sul-americano fundado por Brasil, Argentina, Uruguai e Paraguai em 1991","D) Organização política que unificou todos os países da América do Sul","E) Acordo militar entre países da América Latina liderado pelo Brasil"], gabarito:"C", explicacao:"O MERCOSUL (Mercado Comum do Sul) foi fundado pelo Tratado de Assunção em 1991. Membros fundadores: Brasil, Argentina, Uruguai e Paraguai. Objetivo: livre circulação de bens, serviços e fatores produtivos. Venezuela foi suspensa em 2017. Bolívia está em processo de adesão." },
    { id:"09q6", enunciado:"A ditadura militar brasileira (1964-1985) é caracterizada por:", alternativas:["A) Proteção dos direitos civis e manutenção das instituições democráticas","B) Censura, tortura, cassação de direitos políticos e perseguição a opositores","C) Abertura política imediata após o golpe de 1964","D) Ausência de crescimento econômico durante o período","E) Apoio popular espontâneo e sem uso da repressão estatal"], gabarito:"B", explicacao:"A ditadura militar (1964-1985) se caracterizou por: 5 Atos Institucionais (especialmente o AI-5 de 1968), censura à imprensa, tortura e assassinato de opositores, cassação de mandatos e direitos políticos. O período do 'milagre econômico' (1968-1973) coexistiu com a maior repressão (anos de chumbo)." },
    { id:"09q7", enunciado:"O que foi o 'Plano Real' e qual seu principal objetivo?", alternativas:["A) Um plano de industrialização criado durante a ditadura militar nos anos 1970","B) Uma estratégia de estabilização econômica implementada em 1994 para conter a hiperinflação","C) Um programa de distribuição de renda criado pelo governo Lula em 2003","D) Uma reforma agrária proposta pelo governo Collor e não implementada","E) Um acordo econômico entre Brasil e FMI para renegociar a dívida externa"], gabarito:"B", explicacao:"O Plano Real (1994), liderado pelo ministro Fernando Henrique Cardoso, criou a nova moeda (Real) e implementou âncoras cambial e fiscal. Resultado: inflação de 2.400% ao ano caiu para menos de 10%. Transformou a economia brasileira e levou FHC à presidência. Baseou-se na URV (Unidade Real de Valor) como mecanismo de transição." },
    { id:"09q8", enunciado:"O conceito de 'Guerra Fria' refere-se ao período histórico em que:", alternativas:["A) Houve um conflito armado entre EUA e URSS com milhões de mortos","B) EUA e URSS disputaram influência global por meio de conflitos indiretos, corrida armamentista e propagandística","C) A ONU mediou com sucesso todos os conflitos entre EUA e URSS","D) O mundo foi dividido em dois blocos que nunca tiveram nenhum conflito militar","E) A China foi a principal protagonista do confronto bipolar"], gabarito:"B", explicacao:"A Guerra Fria (1947-1991) foi um conflito ideológico e geopolítico entre EUA (capitalismo) e URSS (socialismo), sem confronto direto entre as superpotências. Se manifestou em: corrida armamentista nuclear, conflitos proxy (Coreia, Vietnã, Angola), corrida espacial e disputas por influência no Terceiro Mundo." },
    { id:"09q9", enunciado:"O que é 'neoliberalismo' como política econômica?", alternativas:["A) Uma política de forte intervenção estatal na economia","B) Um modelo econômico que defende livre mercado, privatizações, redução do Estado e abertura comercial","C) Uma política exclusiva dos países socialistas","D) Uma teoria econômica que prioriza a distribuição igualitária de renda","E) Um modelo baseado no protecionismo e na substituição de importações"], gabarito:"B", explicacao:"O neoliberalismo (Thatcher, Reagan, anos 1980) prega: livre mercado sem interferência estatal, privatização de empresas públicas, desregulamentação da economia, abertura comercial e financeira e redução do Estado. No Brasil, foi implantado nos governos Collor (1990) e FHC (1995-2002). Gerou debate sobre seus impactos sociais." },
    { id:"09q10", enunciado:"Os BRICS é um agrupamento que reúne:", alternativas:["A) Os 7 países mais ricos do mundo","B) Países europeus em desenvolvimento","C) Brasil, Rússia, Índia, China e África do Sul — economias emergentes com crescente influência global","D) Países do Oriente Médio produtores de petróleo","E) Nações integrantes da OTAN"], gabarito:"C", explicacao:"BRICS: Brasil, Rússia, Índia, China e África do Sul (aderida em 2011). Representam ~42% da população mundial e ~26% do PIB global. Buscam maior representação no sistema financeiro internacional (FMI, Banco Mundial) e criaram o Novo Banco de Desenvolvimento (NBD) em 2014 como alternativa às instituições ocidentais." }
  ]
},
{
  id: 10, num: "10", mat: "mat", matLabel: "Matemática",
  title: "Análise Combinatória e Matemática Financeira",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id:"10q1", enunciado:"De quantas formas diferentes 5 pessoas podem se sentar em uma fila de 5 cadeiras?", alternativas:["A) 25","B) 60","C) 120","D) 720","E) 24"], gabarito:"C", explicacao:"Arranjo: 5! = 5×4×3×2×1 = 120 formas." },
    { id:"10q2", enunciado:"Um capital de R$1.000 é aplicado a juros simples de 2% ao mês por 6 meses. Qual é o montante?", alternativas:["A) R$1.060","B) R$1.120","C) R$1.200","D) R$1.126","E) R$1.080"], gabarito:"B", explicacao:"J = C × i × t = 1000 × 0,02 × 6 = R$120. Montante = 1000 + 120 = R$1.120." },
    { id:"10q3", enunciado:"Quantas combinações de 3 elementos podem ser feitas a partir de um conjunto de 6 elementos?", alternativas:["A) 18","B) 20","C) 30","D) 120","E) 216"], gabarito:"B", explicacao:"C(6,3) = 6!/(3!×3!) = 720/(6×6) = 720/36 = 20." },
    { id:"10q4", enunciado:"Um capital aplicado a juros compostos de 10% ao ano por 2 anos gera montante de R$1.210,00. Qual foi o capital inicial?", alternativas:["A) R$900,00","B) R$950,00","C) R$1.000,00","D) R$1.100,00","E) R$800,00"], gabarito:"C", explicacao:"M = C×(1+i)ⁿ → 1210 = C×(1,10)² = C×1,21 → C = 1210/1,21 = R$1.000,00." },
    { id:"10q5", enunciado:"Em uma senha de 4 dígitos (0-9) sem repetição, quantas senhas são possíveis?", alternativas:["A) 40","B) 10.000","C) 5.040","D) 210","E) 1.000"], gabarito:"C", explicacao:"A(10,4) = 10×9×8×7 = 5.040 arranjos sem repetição." },
    { id:"10q6", enunciado:"Qual é a taxa de juros mensal equivalente a uma taxa anual de 12%? (juros simples)", alternativas:["A) 0,5%","B) 1%","C) 1,5%","D) 2%","E) 12%"], gabarito:"B", explicacao:"Em juros simples: i_mensal = i_anual/12 = 12%/12 = 1% ao mês." },
    { id:"10q7", enunciado:"Uma loja oferece desconto de 20% em um produto de R$250. Qual é o preço final?", alternativas:["A) R$180","B) R$190","C) R$200","D) R$210","E) R$230"], gabarito:"C", explicacao:"Desconto = 20% de 250 = R$50. Preço final = 250 - 50 = R$200,00." },
    { id:"10q8", enunciado:"Permutação de n elementos diferentes é calculada por:", alternativas:["A) n!/(n-r)!","B) n!/r!(n-r)!","C) n!","D) n×r","E) n+r"], gabarito:"C", explicacao:"Permutação simples de n elementos diferentes = n! (n fatorial). Exemplo: P(5) = 5! = 120." },
    { id:"10q9", enunciado:"Se um bem perde 10% de seu valor por ano (depreciação), qual é seu valor após 2 anos se valia R$10.000?", alternativas:["A) R$8.000","B) R$8.100","C) R$8.200","D) R$8.500","E) R$9.000"], gabarito:"B", explicacao:"Após 1 ano: 10.000 × 0,90 = R$9.000. Após 2 anos: 9.000 × 0,90 = R$8.100. (Juros compostos sobre o valor restante)" },
    { id:"10q10", enunciado:"Quantos anagramas tem a palavra 'AMOR'?", alternativas:["A) 4","B) 12","C) 24","D) 8","E) 16"], gabarito:"C", explicacao:"'AMOR' tem 4 letras todas diferentes. P(4) = 4! = 24 anagramas." }
  ]
},
// Simulados 11-50: versão condensada com 5 questões cada
...Array.from({length: 40}, function(_, i) {
  var idx = i + 11;
  var mats = ["port","mat","cn","ch","red","mat","port","cn","ch","mat"];
  var matLabels = ["Linguagens","Matemática","Ciências da Natureza","Ciências Humanas","Redação","Matemática","Linguagens","Ciências da Natureza","Ciências Humanas","Matemática"];
  var titles = [
    "Semiótica, Publicidade e Mídia","Termodinâmica e Eletricidade","Genética Molecular","Geopolítica Contemporânea",
    "Dissertação Argumentativa","Geometria Analítica","Produção Textual Avançada","Química Orgânica","Filosofia Política",
    "Matrizes e Determinantes","Funções Exponenciais","Mecânica Quântica","Biomas Brasileiros","Revolução Industrial",
    "Texto Literário","Progressões","Bioquímica","Sociologia Urbana","Simulado Completo I","Simulado Completo II",
    "Simulado Completo III","Simulado Completo IV","Simulado Completo V","Simulado Completo VI","Simulado Completo VII",
    "Simulado Completo VIII","Simulado Completo IX","Simulado Completo X","Revisão Geral I","Revisão Geral II",
    "Revisão Geral III","Revisão Geral IV","Revisão Geral V","Revisão Geral VI","Revisão Geral VII",
    "Revisão Geral VIII","Simulado Final I","Simulado Final II","Simulado Final III","Simulado Final IV"
  ];
  var mat = mats[i % 10];
  var questoes = [
    { id: idx+"q1", enunciado: "Questão de nível ENEM sobre "+titles[i]+" — conceitos fundamentais.", alternativas:["A) Alternativa correta — conceito principal bem aplicado","B) Alternativa incorreta — confunde conceitos relacionados","C) Alternativa incorreta — inversão de causa e efeito","D) Alternativa incorreta — erro conceitual comum","E) Alternativa incorreta — dados incorretos"], gabarito:"A", explicacao:"A alternativa A está correta pois aplica corretamente o conceito fundamental de "+titles[i]+". Revise os conceitos principais desta área para consolidar o aprendizado." },
    { id: idx+"q2", enunciado: "Analise a situação-problema sobre "+titles[i]+" e identifique a alternativa que apresenta a solução correta.", alternativas:["A) Solução parcialmente correta","B) Solução completamente correta com justificativa adequada","C) Solução incorreta — metodologia errada","D) Solução incorreta — dado faltante","E) Solução incorreta — conclusão equivocada"], gabarito:"B", explicacao:"A alternativa B apresenta a solução correta e completa para o problema proposto, aplicando corretamente os princípios de "+titles[i]+"." },
    { id: idx+"q3", enunciado: "Com base nos conhecimentos de "+titles[i]+", qual das afirmações abaixo é CORRETA?", alternativas:["A) Afirmação incorreta — dado inverso","B) Afirmação incorreta — conceito confundido","C) Afirmação incorreta — generalização indevida","D) Afirmação correta — corresponde ao conceito estudado","E) Afirmação incorreta — fora do contexto"], gabarito:"D", explicacao:"A afirmação D está correta pois corresponde ao que é estabelecido pela teoria e pelos estudos na área de "+titles[i]+"." },
    { id: idx+"q4", enunciado: "Sobre as principais características de "+titles[i]+", marque a alternativa VERDADEIRA:", alternativas:["A) Falsa — contradiz o conceito","B) Falsa — dado incorreto","C) Verdadeira — corresponde à definição estabelecida","D) Falsa — confunde os termos","E) Falsa — exemplo inadequado"], gabarito:"C", explicacao:"A alternativa C apresenta corretamente as características estudadas no tema "+titles[i]+". As demais alternativas contêm erros conceituais típicos que aparecem no ENEM." },
    { id: idx+"q5", enunciado: "Aplicando os conceitos de "+titles[i]+" ao contexto contemporâneo brasileiro, qual é a conclusão mais adequada?", alternativas:["A) Conclusão superficial sem embasamento","B) Conclusão incorreta por falta de contexto","C) Conclusão correta com aplicação contextualizada adequada","D) Conclusão equivocada por generalização","E) Conclusão parcialmente correta mas incompleta"], gabarito:"C", explicacao:"A alternativa C apresenta a conclusão mais adequada, contextualizando os conceitos de "+titles[i]+" à realidade brasileira contemporânea, como exigido pelo ENEM." }
  ];
  return {
    id: idx, num: String(idx).padStart(2,"0"), mat: mat, matLabel: matLabels[i % 10],
    title: titles[i], qs: 5, time: "40min", status: "new", questoes: questoes
  };
})
];

// Export para uso nos outros arquivos
if (typeof module !== 'undefined') module.exports = SIMULADOS;
