// ============================================================
// ENEM na Prática — Banco de Dados Mestre 01 (Simulados 01 a 12)
// Conteúdo Restaurado para Ads - Alta Qualidade
// ============================================================

var SIMULADOS = [
{
  id: 1, num: "01", mat: "port", matLabel: "Linguagens",
  title: "Linguagens, Códigos e suas Tecnologias",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Leia o texto: 'A internet democratizou o acesso à informação, mas criou bolhas de confirmação onde o usuário só consome o que já concorda.' O fenômeno descrito no texto refere-se a:", alternativas: ["A) Algoritmos de recomendação e filtros-bolha.", "B) Democratização plena da rede social.", "C) Inexistência de censura digital.", "D) Ausência de diversidade cultural no Brasil.", "E) Simplicidade técnica das plataformas."], gabarito: "A", explicacao: "Filtros-bolha são criados por algoritmos que isolam o usuário em conteúdos de seu interesse prévio." },
    { n: 2, enunciado: "No Modernismo brasileiro, a antropofagia de Oswald de Andrade propunha:", alternativas: ["A) Copiar fielmente a cultura europeia.", "B) Rejeitar qualquer influência estrangeira.", "C) Devorar a cultura estrangeira para criar uma arte brasileira original.", "D) Priorizar o rigor métrico do Parnasianismo.", "E) Abandonar a literatura e focar na pintura."], gabarito: "C", explicacao: "A antropofagia sugere a assimilação crítica da influência externa." },
    { n: 3, enunciado: "Analise a função da linguagem em um manual de instruções:", alternativas: ["A) Função poética.", "B) Função metalinguística.", "C) Função apelativa ou conativa.", "D) Função referencial ou informativa.", "E) Função fática."], gabarito: "D", explicacao: "Manuais visam informar objetivamente o receptor." },
    { n: 1, enunciado: "Um neologismo é:", alternativas: ["A) Uma palavra antiga em desuso.", "B) Uma palavra criada recentemente.", "C) Um erro de concordância.", "D) Uma rima rica.", "E) Um vício de linguagem."], gabarito: "B", explicacao: "Criação de novos termos na língua." },
    { n: 2, enunciado: "Intertextualidade ocorre quando:", alternativas: ["A) Um texto dialoga com outro pré-existente.", "B) O autor escreve sem pontuação.", "C) O texto é exclusivamente informativo.", "D) Não há rimas no poema.", "E) O texto é traduzido do inglês."], gabarito: "A", explicacao: "Relação entre textos de diferentes autores ou épocas." },
    { n: 3, enunciado: "O Quinhentismo brasileiro foi:", alternativas: ["A) O apogeu do Barroco.", "B) A literatura de informação dos colonizadores.", "C) O movimento romântico.", "D) A vanguarda modernista.", "E) O realismo de Machado."], gabarito: "B", explicacao: "Relatos cronísticos sobre a nova terra." },
    { n: 2, enunciado: "A variação linguística diatópica é relacionada a:", alternativas: ["A) Diferenças regionais.", "B) Diferenças de classe social.", "C) Diferenças de época.", "D) Diferenças de gênero.", "E) Diferenças técnicas."], gabarito: "A", explicacao: "Geografia e regionalismos." },
    { n: 1, enunciado: "Denotação é:", alternativas: ["A) Sentido figurado.", "B) Sentido literal e do dicionário.", "C) Sentido emocional.", "D) Sentido irônico.", "E) Sentido estético."], gabarito: "B", explicacao: "Linguagem direta e objetiva." },
    { n: 3, enunciado: "O Parnasianismo focava na:", alternativas: ["A) Emoção exagerada.", "B) Liberdade de versos.", "C) Arte pela arte e rigor formal.", "D) Crítica social.", "E) Religiosidade."], gabarito: "C", explicacao: "Busca pela perfeição estética e métrica." },
    { n: 2, enunciado: "Fatos e opiniões diferem porque:", alternativas: ["A) Fatos são subjetivos.", "B) Opiniões são verificáveis objetivamente.", "C) Fatos são acontecimentos comprováveis e opiniões são juízos de valor.", "D) Não há diferença real.", "E) Opiniões sempre são verdadeiras."], gabarito: "C", explicacao: "Fatos são dados reais; opiniões são interpretações pessoais." }
  ]
},
{
  id: 2, num: "02", mat: "mat", matLabel: "Matemática",
  title: "Matemática e suas Tecnologias",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Se um produto de R$ 200,00 sofre um desconto de 15% e depois um aumento de 10%, o valor final é:", alternativas: ["A) R$ 190,00", "B) R$ 187,00", "C) R$ 210,00", "D) R$ 180,00", "E) R$ 195,50"], gabarito: "B", explicacao: "200 * 0.85 = 170. 170 * 1.1 = 187." },
    { n: 2, enunciado: "A soma dos ângulos internos de um hexágono regular é:", alternativas: ["A) 360", "B) 720", "C) 540", "D) 1080", "E) 180"], gabarito: "B", explicacao: "S = (n-2)*180 = (6-2)*180 = 720." },
    { n: 2, enunciado: "Probabilidade de sair um número par num dado de 6 faces:", alternativas: ["A) 1/6", "B) 1/3", "C) 1/2", "D) 2/3", "E) 1/4"], gabarito: "C", explicacao: "Pares: 2, 4, 6 (3 casos). Total: 6. 3/6 = 1/2." },
    { n: 1, enunciado: "A raiz quadrada de 144 é:", alternativas: ["A) 10", "B) 11", "C) 12", "D) 13", "E) 14"], gabarito: "C", explicacao: "12 * 12 = 144." },
    { n: 3, enunciado: "Resolva log na base 2 de 32:", alternativas: ["A) 3", "B) 4", "C) 5", "D) 6", "E) 2"], gabarito: "C", explicacao: "2^5 = 32." },
    { n: 1, enunciado: "Média aritmética de 7, 8 e 9:", alternativas: ["A) 7", "B) 8", "C) 9", "D) 7.5", "E) 8.5"], gabarito: "B", explicacao: "(7+8+9)/3 = 24/3 = 8." },
    { n: 2, enunciado: "Área de um triângulo de base 10 e altura 5:", alternativas: ["A) 50", "B) 25", "C) 30", "D) 15", "E) 100"], gabarito: "B", explicacao: "(b*h)/2 = (10*5)/2 = 25." },
    { n: 3, enunciado: "Em um triângulo retângulo, se os catetos são 3 e 4, a hipotenusa é:", alternativas: ["A) 5", "B) 7", "C) 6", "D) 8", "E) 9"], gabarito: "A", explicacao: "a² = 3² + 4² = 9 + 16 = 25. a = 5." },
    { n: 2, enunciado: "Um capital de R$ 1000,00 a juros simples de 2% ao mês terá quanto após 5 meses?", alternativas: ["A) R$ 1100,00", "B) R$ 1010,00", "C) R$ 1200,00", "D) R$ 1050,00", "E) R$ 1000,00"], gabarito: "A", explicacao: "J = C*i*t = 1000 * 0.02 * 5 = 100. Total = 1100." },
    { n: 1, enunciado: "Se 3 pães custam R$ 2,40, quanto custam 10 pães?", alternativas: ["A) R$ 6,00", "B) R$ 7,50", "C) R$ 8,00", "D) R$ 9,00", "E) R$ 10,00"], gabarito: "C", explicacao: "2.4/3 = 0.8 por pão. 0.8 * 10 = 8.0." }
  ]
},
{
  id: 3, num: "03", mat: "cn", matLabel: "Natureza",
  title: "Ciências da Natureza e suas Tecnologias",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "A principal organela responsável pela fotossíntese é:", alternativas: ["A) Mitocôndria", "B) Ribossomo", "C) Cloroplasto", "D) Lisossomo", "E) Núcleo"], gabarito: "C", explicacao: "Cloroplastos contêm clorofila para captar luz solar." },
    { n: 2, enunciado: "A Lei de Lavoisier afirma que:", alternativas: ["A) A matéria se cria no vácuo.", "B) Na natureza, nada se cria, nada se perde, tudo se transforma.", "C) Energia é igual a massa vezes luz².", "D) O pH da água é sempre 7.", "E) Os gases não têm volume."], gabarito: "B", explicacao: "Lei da Conservação das Massas." },
    { n: 2, enunciado: "Um corpo em queda livre no vácuo desatende qual força?", alternativas: ["A) Gravidade", "B) Inércia", "C) Atrito com o ar", "D) Normal", "E) Tração"], gabarito: "C", explicacao: "No vácuo não há resistência do ar." },
    { n: 1, enunciado: "Qual o pH de uma substância neutra?", alternativas: ["A) 0", "B) 14", "C) 7", "D) 1", "E) 10"], gabarito: "C", explicacao: "7 é a neutralidade na escala de pH." },
    { n: 3, enunciado: "A meiose resulta em quantas células-filhas?", alternativas: ["A) 2", "B) 3", "C) 4", "D) 1", "E) 6"], gabarito: "C", explicacao: "Resulta em 4 células haploides." },
    { n: 1, enunciado: "Velocidade é a razão entre:", alternativas: ["A) Tempo e massa", "B) Espaço e tempo", "C) Força e aceleração", "D) Massa e volume", "E) Energia e luz"], gabarito: "B", explicacao: "v = ΔS / Δt." },
    { n: 2, enunciado: "O ozônio (O3) na atmosfera protege contra:", alternativas: ["A) Chuva ácida", "B) Raios infravermelhos", "C) Raios ultravioletas (UV)", "D) Aquecimento global", "E) Tsunami"], gabarito: "C", explicacao: "Filtra a radiação UV nociva." },
    { n: 3, enunciado: "A tabela periódica é organizada por:", alternativas: ["A) Nome alfabético", "B) Data de descoberta", "C) Número atômico", "D) Cor dos elementos", "E) Preço de mercado"], gabarito: "C", explicacao: "Organizada de forma crescente de número atômico (prótons)." },
    { n: 1, enunciado: "A água ferve ao nível do mar a quanto graus Celsius?", alternativas: ["A) 50", "B) 80", "C) 100", "D) 120", "E) 200"], gabarito: "C", explicacao: "Ponto de ebulição padrão." },
    { n: 2, enunciado: "Darwin propôs a teoria da:", alternativas: ["A) Geração espontânea", "B) Seleção natural", "C) Criação divina exclusiva", "D) Fixidez das espécies", "E) Herança de caracteres adquiridos (Lamarck)"], gabarito: "B", explicacao: "Sobrevivência dos mais aptos ao meio." }
  ]
}
{
  id: 4, num: "04", mat: "ch", matLabel: "Humanas",
  title: "Ciências Humanas e suas Tecnologias",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "O período colonial brasileiro foi marcado por qual ciclo econômico inicial?", alternativas: ["A) Ouro", "B) Café", "C) Pau-Brasil", "D) Cana-de-açúcar", "E) Borracha"], gabarito: "C", explicacao: "A extração do pau-brasil foi a primeira atividade exploratória." },
    { n: 2, enunciado: "A Revolução Industrial teve início em qual país?", alternativas: ["A) França", "B) EUA", "C) Inglaterra", "D) Alemanha", "E) Japão"], gabarito: "C", explicacao: "A Inglaterra pioneirizou a mecanização no século XVIII." },
    { n: 2, enunciado: "O sistema de castas é uma característica histórica de qual país?", alternativas: ["A) China", "B) Índia", "C) Egito", "D) Grécia", "E) Brasil"], gabarito: "B", explicacao: "Sistema de estratificação social rígido da Índia." },
    { n: 1, enunciado: "Quem foi o primeiro presidente do Brasil?", alternativas: ["A) Getúlio Vargas", "B) Dom Pedro II", "C) Deodoro da Fonseca", "D) Juscelino Kubitschek", "E) Tancredo Neves"], gabarito: "C", explicacao: "Proclamador da República em 1889." },
    { n: 3, enunciado: "O conceito de 'Mais-Valia' foi desenvolvido por:", alternativas: ["A) Adam Smith", "B) Max Weber", "C) Karl Marx", "D) Émile Durkheim", "E) John Locke"], gabarito: "C", explicacao: "Refere-se ao valor excedente produzido pelo trabalhador e apropriado pelo patrão." },
    { n: 1, enunciado: "A Grécia Antiga é considerada o berço da:", alternativas: ["A) Monarquia absoluta", "B) Democracia", "C) Ditadura militar", "D) Teocracia", "E) Anarquia"], gabarito: "B", explicacao: "Atenas desenvolveu os primeiros conceitos de participação política." },
    { n: 2, enunciado: "O Muro de Berlim dividiu qual cidade durante a Guerra Fria?", alternativas: ["A) Paris", "B) Londres", "C) Berlim", "D) Moscou", "E) Washington"], gabarito: "C", explicacao: "Símbolo da divisão entre o bloco capitalista e socialista." },
    { n: 3, enunciado: "A função social da propriedade é um princípio de qual documento brasileiro?", alternativas: ["A) Lei Áurea", "B) Constituição de 1988", "C) AI-5", "D) Tratado de Tordesilhas", "E) Carta de Caminha"], gabarito: "B", explicacao: "Define que a propriedade deve atender aos interesses da coletividade." },
    { n: 1, enunciado: "O Renascimento cultural valorizava o:", alternativas: ["A) Teocentrismo", "B) Antropocentrismo", "C) Coletivismo", "D) Misticismo", "E) Feudalismo"], gabarito: "B", explicacao: "O ser humano como centro das preocupações e medidas." },
    { n: 2, enunciado: "A Inconfidência Mineira buscava:", alternativas: ["A) Escravidão eterna", "B) Independência de Portugal", "C) Permanecer como colônia", "D) Aumentar os impostos", "E) Apoiar a monarquia"], gabarito: "B", explicacao: "Movimento separatista contra o peso fiscal da Coroa Portuguesa." }
  ]
},
{
  id: 5, num: "05", mat: "port", matLabel: "Linguagens",
  title: "Literatura e Interpretação Textual",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "O Arcadismo brasileiro teve como principal cenário o estado de:", alternativas: ["A) Rio de Janeiro", "B) São Paulo", "C) Minas Gerais", "D) Bahia", "E) Pernambuco"], gabarito: "C", explicacao: "Relacionado ao Ciclo do Ouro e à Inconfidência Mineira." },
    { n: 2, enunciado: "A obra 'O Cortiço' pertence ao movimento:", alternativas: ["A) Romantismo", "B) Realismo", "C) Naturalismo", "D) Parnasianismo", "E) Simbolismo"], gabarito: "C", explicacao: "Aluísio Azevedo foca no determinismo biológico e social." },
    { n: 2, enunciado: "O eu-lírico é:", alternativas: ["A) O autor real do texto.", "B) A voz que fala no poema.", "C) O leitor crítico.", "D) O personagem principal da prosa.", "E) O editor do livro."], gabarito: "B", explicacao: "Entidade ficcional que expressa sentimentos na poesia." },
    { n: 1, enunciado: "Sinonímia é a relação entre palavras com:", alternativas: ["A) Sentidos opostos.", "B) Sons iguais.", "C) Significados semelhantes.", "D) Escritas iguais.", "E) Nenhuma relação."], gabarito: "C", explicacao: "Ex: Feliz e Contente." },
    { n: 3, enunciado: "O Realismo de Machado de Assis é marcado pela:", alternativas: ["A) Idealização da mulher.", "B) Analise psicológica e ironia.", "C) Descrição exagerada da natureza.", "D) Defesa da monarquia.", "E) Religiosidade extrema."], gabarito: "B", explicacao: "Machado desconstrói a alma humana e a sociedade da época." },
    { n: 1, enunciado: "Gênero lírico expressa:", alternativas: ["A) Narrativas longas.", "B) Emoções e sentimentos pessoais.", "C) Conflitos dramáticos em cena.", "D) Fatos históricos.", "E) Notícias de jornal."], gabarito: "B", explicacao: "Subjetividade e musicalidade." },
    { n: 2, enunciado: "O Romantismo brasileiro buscava criar uma identidade nacional através do:", alternativas: ["A) Robô", "B) Índio idealizado", "C) Operário de fábrica", "D) Imigrante europeu", "E) Político"], gabarito: "B", explicacao: "O indianismo foi o mito fundacional da nação brasileira." },
    { n: 3, enunciado: "Modernismo de 1922 criticava o:", alternativas: ["A) Parnasianismo acadêmico", "B) Cinema", "C) Futebol", "D) Rádio", "E) Carnaval"], gabarito: "A", explicacao: "Buscava liberdade contra as regras rígidas do passado." },
    { n: 1, enunciado: "Metonímia ocorre quando:", alternativas: ["A) Substituímos termos por proximidade (ex: ler Machado).", "B) Comparamos explicitamente.", "C) Exageramos propositalmente.", "D) Repetimos sons no início.", "E) Personificamos objetos."], gabarito: "A", explicacao: "Troca da obra pelo autor, continente pelo conteúdo, etc." },
    { n: 2, enunciado: "A coesão textual refere-se à:", alternativas: ["A) Lógica das ideias.", "B) Ligação harmônica entre as partes do texto (conectivos).", "C) Beleze da capa do livro.", "D) Velocidade da leitura.", "E) Fonte utilizada no texto."], gabarito: "B", explicacao: "Uso de conjunções, pronomes para ligar frases." }
  ]
},
{
  id: 6, num: "06", mat: "mat", matLabel: "Matemática",
  title: "Geometria e Grandezas",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Volume de um cubo de aresta 3cm:", alternativas: ["A) 9 cm³", "B) 12 cm³", "C) 27 cm³", "D) 81 cm³", "E) 6 cm³"], gabarito: "C", explicacao: "V = a³ = 3 * 3 * 3 = 27." },
    { n: 2, enunciado: "O valor de pi é aproximadamente:", alternativas: ["A) 2.14", "B) 3.14", "C) 4.14", "D) 1.14", "E) 5.14"], gabarito: "B", explicacao: "Razão entre o comprimento da circunferência e seu diâmetro." },
    { n: 2, enunciado: "Em um mapa, 1cm representa 50km. Qual a distância real para 4cm?", alternativas: ["A) 100km", "B) 150km", "C) 200km", "D) 250km", "E) 500km"], gabarito: "C", explicacao: "Escala 1:5.000.000. 4 * 50 = 200." },
    { n: 1, enunciado: "Um ângulo de 90 graus é chamado de:", alternativas: ["A) Agudo", "B) Obtuso", "C) Raso", "D) Reto", "E) Pleno"], gabarito: "D", explicacao: "Define a perpendicularidade." },
    { n: 3, enunciado: "Seno de 30 graus é:", alternativas: ["A) 1/2", "B) √2/2", "C) √3/2", "D) 1", "E) 0"], gabarito: "A", explicacao: "Valor fundamental da trigonometria." },
    { n: 1, enunciado: "Área de um círculo de raio 2 (use pi=3):", alternativas: ["A) 6", "B) 12", "C) 18", "D) 9", "E) 24"], gabarito: "B", explicacao: "A = pi * r² = 3 * 4 = 12." },
    { n: 2, enunciado: "O perímetro de um retângulo de lados 4 e 6 é:", alternativas: ["A) 10", "B) 20", "C) 24", "D) 12", "E) 16"], gabarito: "B", explicacao: "2*(4+6) = 20." },
    { n: 3, enunciado: "Quantas faces tem um octaedro?", alternativas: ["A) 4", "B) 6", "C) 8", "D) 12", "E) 20"], gabarito: "C", explicacao: "Octa = 8." },
    { n: 2, enunciado: "Um cilindro tem volume V = Bh. Se a base é 10 e altura 5, o volume é:", alternativas: ["A) 50", "B) 25", "C) 100", "D) 15", "E) 5"], gabarito: "A", explicacao: "10 * 5 = 50." },
    { n: 1, enunciado: "Diagonal de um quadrado de lado 1:", alternativas: ["A) 1", "B) 2", "C) √2", "D) √3", "E) 0.5"], gabarito: "C", explicacao: "d = L√2." }
  ]
},
{
  id: 7, num: "07", mat: "cn", matLabel: "Natureza",
  title: "Física e Processos Químicos",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Qual a unidade de medida de força no Sistema Internacional (SI)?", alternativas: ["A) Joule", "B) Watt", "C) Newton", "D) Pascal", "E) Volt"], gabarito: "C", explicacao: "Newton (N) é a unidade de força (massa * aceleração)." },
    { n: 2, enunciado: "A primeira lei de Newton é também conhecida como lei da:", alternativas: ["A) Ação e Reação", "B) Inércia", "C) Termodinâmica", "D) Gravitação", "E) Relatividade"], gabarito: "B", explicacao: "Um corpo em repouso tende a permanecer em repouso." },
    { n: 2, enunciado: "O som é uma onda do tipo:", alternativas: ["A) Eletromagnética", "B) Transversal no vácuo", "C) Mecânica e longitudinal", "D) Superficial", "E) Luminosa"], gabarito: "C", explicacao: "Necessita de meio material e vibra na direção da propagação." },
    { n: 1, enunciado: "A corrente elétrica é medida em:", alternativas: ["A) Ohms", "B) Ampères", "C) Coulombs", "D) Farads", "E) Hertz"], gabarito: "B", explicacao: "Refere-se ao fluxo de carga por unidade de tempo." },
    { n: 3, enunciado: "O efeito Doppler explica a mudança de freqüência sonora devido ao:", alternativas: ["A) Volume do som", "B) Movimento relativo entre fonte e observador", "C) Absorção pela parede", "D) Reflexão na água", "E) Pressão atmosférica"], gabarito: "B", explicacao: "Ex: Som da ambulância ficando mais agudo ao se aproximar." },
    { n: 1, enunciado: "O calor se propaga no vácuo apenas por:", alternativas: ["A) Condução", "B) Convecção", "C) Irradiação", "D) Contato", "E) Fusão"], gabarito: "C", explicacao: "Ondas eletromagnéticas não precisam de meio." },
    { n: 2, enunciado: "Um espelho côncavo pode formar imagem:", alternativas: ["A) Apenas virtual", "B) Apenas real", "C) Real ou virtual (dependendo da posição)", "D) Sempre menor que o objeto", "E) Apenas invertida"], gabarito: "C", explicacao: "Varia conforme o objeto está antes ou depois do foco." },
    { n: 3, enunciado: "A energia cinética depende da:", alternativas: ["A) Altura e gravidade", "B) Massa e velocidade", "C) Pressão e temperatura", "D) Corrente e tensão", "E) Elasticidade"], gabarito: "B", explicacao: "Ec = (mv²)/2." },
    { n: 1, enunciado: "O gelo flutua na água porque:", alternativas: ["A) É mais denso", "B) É menos denso que a água líquida", "C) É mais pesado", "D) Tem cor clara", "E) Está mais frio"], gabarito: "B", explicacao: "A estrutura cristalina do gelo ocupa mais volume com menos massa." },
    { n: 2, enunciado: "A destilação simples serve para separar:", alternativas: ["A) Sólido de sólido", "B) Sólido dissolvido em líquido", "C) Gás de gás", "D) Areia de água", "E) Ferro de enxofre"], gabarito: "B", explicacao: "Baseia-se na diferença de pontos de ebulição." }
  ]
},
{
  id: 8, num: "08", mat: "ch", matLabel: "Humanas",
  title: "Geografia Geral e do Brasil",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Qual o maior país do mundo em extensão territorial?", alternativas: ["A) China", "B) Canadá", "C) Rússia", "D) EUA", "E) Brasil"], gabarito: "C", explicacao: "A Rússia ocupa vastas áreas da Europa e Ásia." },
    { n: 2, enunciado: "O movimento das placas tectônicas é responsável por:", alternativas: ["A) Marés", "B) Ventos alísios", "C) Terremotos e vulcões", "D) Estações do ano", "E) Ciclo da água"], gabarito: "C", explicacao: "Ourogênese e deriva continental." },
    { n: 2, enunciado: "A globalização é marcada pela:", alternativas: ["A) Isolamento cultural", "B) Integração econômica e fluxos de informação", "C) Fim das fronteiras físicas terrestres", "D) Subida do preço do ouro exclusivamente", "E) Volta ao feudalismo"], gabarito: "B", explicacao: "Intensificação das trocas globais." },
    { n: 1, enunciado: "Qual bioma brasileiro é conhecido como 'Savana brasileira'?", alternativas: ["A) Amazônia", "B) Pantanal", "C) Cerrado", "D) Caatinga", "E) Mata Atlântica"], gabarito: "C", explicacao: "Vegetação de arbustos e clima sazonal." },
    { n: 3, enunciado: "O El Niño é um fenômeno de:", alternativas: ["A) Resfriamento das águas do Atlântico", "B) Aquecimento anormal das águas do Pacífico", "C) Chuvas ácidas na Europa", "D) Neve no deserto", "E) Ventos solares"], gabarito: "B", explicacao: "Altera o clima mundial drasticamente." },
    { n: 1, enunciado: "A região mais populosa do Brasil é a:", alternativas: ["A) Norte", "B) Nordeste", "C) Sudeste", "D) Sul", "E) Centro-Oeste"], gabarito: "C", explicacao: "Concentra os maiores centros urbanos como SP e RJ." },
    { n: 2, enunciado: "O agronegócio no Brasil é forte principalmente na produção de:", alternativas: ["A) Vinho", "B) Soja", "C) Maçã", "D) Carvão", "E) Batata"], gabarito: "B", explicacao: "Grande exportador mundial de grãos." },
    { n: 3, enunciado: "A pirâmide etária brasileira está ficando:", alternativas: ["A) Mais larga na base", "B) Mais estreita no topo", "C) Mais larga no topo e estreita na base (envelhecimento)", "D) Retangular perfeita", "E) Invertida totalmente de um dia para o outro"], gabarito: "C", explicacao: "Transição demográfica: queda na natalidade." },
    { n: 1, enunciado: "O Meridiano de Greenwich divide o mundo em:", alternativas: ["A) Norte e Sul", "B) Leste e Oeste", "C) Tropical e Temperado", "D) Rico e Pobre", "E) Água e Terra"], gabarito: "B", explicacao: "Referência para as longitudes." },
    { n: 2, enunciado: "A chuva ácida é causada principalmente por:", alternativas: ["A) Oxigênio puro", "B) Dióxido de enxofre e óxidos de nitrogênio", "C) Poeira do Saara", "D) Excesso de luz solar", "E) Vapor d'água do mar"], gabarito: "B", explicacao: "Queima de combustíveis fósseis em áreas industriais." }
  ]
},
{
  id: 9, num: "09", mat: "port", matLabel: "Linguagens",
  title: "Artes, Cultura e Mídias",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "O Cubismo rompeu com a perspectiva tradicional usando:", alternativas: ["A) Apenas cores primárias", "B) Formas geométricas e múltiplos ângulos", "C) Desenhos infantis", "D) Somente preto e branco", "E) Fotografias coladas"], gabarito: "B", explicacao: "Picasso e Braque fragmentavam a realidade." },
    { n: 2, enunciado: "A Pop Art usava como tema principal:", alternativas: ["A) A natureza morta clássica", "B) A cultura de consumo e celebridades", "C) A religião medieval", "D) O subconsciente e sonhos", "E) A política ditatorial"], gabarito: "B", explicacao: "Andy Warhol retratava latas de sopa e Marilyn Monroe." },
    { n: 2, enunciado: "No teatro, a 'catarse' era o objetivo da:", alternativas: ["A) Comédia moderna", "B) Tragédia Grega", "C) Ópera italiana", "D) Stand-up", "E) Marionete"], gabarito: "B", explicacao: "Purificação dos sentimentos através do medo e piedade." },
    { n: 1, enunciado: "Grafite é considerado:", alternativas: ["A) Somente vandalismo", "B) Arte urbana e intervenção pública", "C) Pintura de cavalete", "D) Escultura em pedra", "E) Desenho arquitetônico"], gabarito: "B", explicacao: "Expressão cultural no espaço das cidades." },
    { n: 3, enunciado: "A música Barroca de Bach é famosa pelo seu:", alternativas: ["A) Minimalismo", "B) Contraponto e complexidade", "C) Uso de guitarras elétricas", "D) Ausência de ritmo", "E) Foco em sintetizadores"], gabarito: "B", explicacao: "Harmonias sobrepostas ricamente trabalhadas." },
    { n: 1, enunciado: "O cinema é chamado de:", alternativas: ["A) Primeira arte", "B) Quarta arte", "C) Sétima arte", "D) Décima arte", "E) Arte final"], gabarito: "C", explicacao: "Classificação histórica das artes." },
    { n: 2, enunciado: "O Surrealismo buscava explorar o:", alternativas: ["A) Mundo real", "B) Inconsciente e o onírico (sonhos)", "C) Passado histórico", "D) Futuro futurista", "E) Parnasianismo métrico"], gabarito: "B", explicacao: "Salvador Dalí e o irracional." },
    { n: 3, enunciado: "A dança contemporânea foca na:", alternativas: ["A) Rigidez do Balé Clássico", "B) Liberdade de movimentos e expressão corporal", "C) Uniformidade de trajes", "D) Ausência de música", "E) Repetição mecânica"], gabarito: "B", explicacao: "Quebra de moldes tradicionais e busca pelo novo." },
    { n: 1, enunciado: "Um storyboard serve para:", alternativas: ["A) Escrever a trilha sonora", "B) Planejar visualmente as cenas de um filme", "C) Pagar os atores", "D) Escolher a cor da pipoca", "E) Anunciar o filme no jornal"], gabarito: "B", explicacao: "Guia visual para a produção audiovisual." },
    { n: 2, enunciado: "Patrimônio Imaterial inclui:", alternativas: ["A) Estátuas de bronze", "B) Prédios históricos", "C) Saberes, festas e danças tradicionais", "D) Pinturas a óleo", "E) Museus físicos"], gabarito: "C", explicacao: "Cultura viva que não se pode tocar fisicamente como objeto único." }
  ]
},
{
  id: 10, num: "10", mat: "mat", matLabel: "Matemática",
  title: "Estatística e Probabilidades",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "A mediana dos valores 1, 3, 3, 6, 7, 8, 9 é:", alternativas: ["A) 3", "B) 6", "C) 7", "D) 9", "E) 5"], gabarito: "B", explicacao: "O valor central de uma série ímpar ordenada." },
    { n: 2, enunciado: "A moda da série 2, 2, 3, 4, 4, 4, 5, 5 é:", alternativas: ["A) 2", "B) 3", "C) 4", "D) 5", "E) 4.5"], gabarito: "C", explicacao: "O valor que mais se repete." },
    { n: 2, enunciado: "Se você joga dois dados, qual a probabilidade da soma ser 2?", alternativas: ["A) 1/6", "B) 1/12", "C) 1/36", "D) 2/36", "E) 1/2"], gabarito: "C", explicacao: "Apenas a combinação (1,1) entre 36 possíveis." },
    { n: 1, enunciado: "Amplitude de um conjunto de dados é:", alternativas: ["A) A média dos valores", "B) A diferença entre o maior e o menor valor", "C) O valor central", "D) A raiz quadrada", "E) A soma total"], gabarito: "B", explicacao: "Mede a dispersão total dos dados." },
    { n: 3, enunciado: "Em um gráfico de pizza (setores), 25% representa um ângulo de:", alternativas: ["A) 45 graus", "B) 90 graus", "C) 180 graus", "D) 360 graus", "E) 60 graus"], gabarito: "B", explicacao: "0.25 * 360 = 90." },
    { n: 1, enunciado: "Média aritmética de 10 e 20:", alternativas: ["A) 10", "B) 15", "C) 20", "D) 25", "E) 30"], gabarito: "B", explicacao: "(10+20)/2 = 15." },
    { n: 2, enunciado: "A variância mede:", alternativas: ["A) O valor mais frequente", "B) O quão distantes os dados estão da média", "C) O crescimento de uma função", "D) A área de um círculo", "E) A densidade do ar"], gabarito: "B", explicacao: "Indicador de dispersão estatística." },
    { n: 3, enunciado: "Numa urna com 10 bolas numeradas de 1 a 10, qual a chance de tirar um número maior que 7?", alternativas: ["A) 3/10", "B) 4/10", "C) 7/10", "D) 1/10", "E) 5/10"], gabarito: "A", explicacao: "Bolas 8, 9 e 10 (3 casos favorableis)." },
    { n: 1, enunciado: "Desvio padrão é:", alternativas: ["A) Dobro da variância", "B) Raiz quadrada da variância", "C) Metade da média", "D) Um valor negativo", "E) Soma das faces"], gabarito: "B", explicacao: "Mede a volatilidade ou dispersão em relação à média." },
    { n: 2, enunciado: "Se a chance de chover é 30%, a chance de não chover é:", alternativas: ["A) 30%", "B) 50%", "C) 70%", "D) 100%", "E) 10%"], gabarito: "C", explicacao: "Eventos complementares somam 100%." }
  ]
},
{
  id: 11, num: "11", mat: "cn", matLabel: "Natureza",
  title: "Química Orgânica e Genética",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "O principal átomo presente em todas as moléculas orgânicas é o:", alternativas: ["A) Oxigênio", "B) Hidrogênio", "C) Carbono", "D) Nitrogênio", "E) Enxofre"], gabarito: "C", explicacao: "O carbono é a base da química da vida." },
    { n: 2, enunciado: "Hidrocarbonetos são compostos formados apenas por:", alternativas: ["A) Carbono e Oxigênio", "B) Carbono e Nitrogênio", "C) Carbono e Hidrogênio", "D) Água e Sal", "E) Ouro e Prata"], gabarito: "C", explicacao: "Ex: Metano, Etano." },
    { n: 2, enunciado: "O DNA tem formato de:", alternativas: ["A) Esfera", "B) Cubo", "C) Dupla hélice", "D) Linha reta infinita", "E) Estrela"], gabarito: "C", explicacao: "Descoberto por Watson e Crick." },
    { n: 1, enunciado: "A função orgânica do álcool apresenta o grupo:", alternativas: ["A) -COOH", "B) -OH (hidroxila)", "C) -NH2", "D) -CHO", "E) -CO-"], gabarito: "B", explicacao: "Ligado a um carbono saturado." },
    { n: 3, enunciado: "Mendel usou qual planta em seus experimentos?", alternativas: ["A) Milho", "B) Feijão", "C) Ervilha", "D) Arroz", "E) Rosa"], gabarito: "C", explicacao: "Pisum sativum, devido às características claras de herança." },
    { n: 1, enunciado: "Gás carbônico (CO2) é um subproduto da:", alternativas: ["A) Fotossíntese", "B) Respiração celular", "C) Mitose", "D) Osmose", "E) Capilaridade"], gabarito: "B", explicacao: "Liberado na quebra da glicose para gerar energia." },
    { n: 2, enunciado: "Cromossomos são feitos de:", alternativas: ["A) Gordura", "B) Açúcar puro", "C) DNA altamente condensado", "D) Vidro", "E) Gás"], gabarito: "C", explicacao: "Contêm a informação genética da célula." },
    { n: 3, enunciado: "Uma mutação genética é:", alternativas: ["A) Um treino de academia", "B) Uma alteração permanente na sequência de DNA", "C) Um tipo de alimentação", "D) Um software de computador", "E) Uma marca de carro"], gabarito: "B", explicacao: "Pode ser benéfica, neutra ou maléfica." },
    { n: 1, enunciado: "O petróleo é uma fonte de energia:", alternativas: ["A) Renovável", "B) Não renovável e fóssil", "C) Infinita", "D) Limpa e sem poluição", "E) Nuclear"], gabarito: "B", explicacao: "Formado ao longo de milhões de anos sob alta pressão." },
    { n: 2, enunciado: "A ligação entre aminoácidos chama-se:", alternativas: ["A) Ligação iônica", "B) Ligação metálica", "C) Ligação peptídica", "D) Ligação de hidrogênio", "E) Ponte de enxofre"], gabarito: "C", explicacao: "Forma as proteínas." }
  ]
},
{
  id: 12, num: "12", mat: "ch", matLabel: "Humanas",
  title: "Filosofia e Sociologia Moderna",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { n: 1, enunciado: "Sócrates é famoso pelo método da:", alternativas: ["A) Luta", "B) Maiêutica (parto das ideias)", "C) Escrita de livros longos", "D) Ditadura", "E) Engenharia"], gabarito: "B", explicacao: "Através de perguntas, levava a pessoa a descobrir a verdade." },
    { n: 2, enunciado: "O 'Mito da Caverna' de Platão representa:", alternativas: ["A) A vida dos homens primitivos", "B) A passagem da ignorância para o conhecimento", "C) A defesa da escravidão", "D) Uma história de terror", "E) O fim do mundo"], gabarito: "B", explicacao: "A saída da caverna é a busca pela luz da razão e da verdade." },
    { n: 2, enunciado: "Maquiavel escreveu 'O Príncipe' defendendo que:", alternativas: ["A) O rei deve ser bonzinho sempre", "B) Os fins justificam os meios no poder político", "C) A igreja deve governar o mundo", "D) A democracia é o único caminho", "E) A arte é superior à guerra"], gabarito: "B", explicacao: "Realismo político e manutenção do Estado." },
    { n: 1, enunciado: "Émile Durkheim estudou o 'Fato Social', que é:", alternativas: ["A) Uma escolha individual", "B) Exterior, coercitivo e generalizado", "C) Um segredo de família", "D) Um tipo de música", "E) Uma nova tecnologia"], gabarito: "B", explicacao: "Maneiras de agir e pensar impostas pela sociedade." },
    { n: 3, enunciado: "A 'Indústria Cultural' foi um conceito da:", alternativas: ["A) Escola de Atenas", "B) Escola de Frankfurt", "C) Escola de Samba", "D) Disney", "E) NASA"], gabarito: "B", explicacao: "Adorno e Horkheimer criticando a arte como mercadoria de massa." },
    { n: 1, enunciado: "O Iluminismo valorizava:", alternativas: ["A) A fé cega", "B) A razão e a ciência", "C) A monarquia absolutista", "D) O feudalismo", "E) A escravidão"], gabarito: "B", explicacao: "Movimento intelectual que buscou 'iluminar' o mundo pela razão." },
    { n: 2, enunciado: "Karl Marx via a história como uma:", alternativas: ["A) Sucessão de paz", "B) Luta de classes", "C) Reunião de amigos", "D) Vontade divina", "E) Evolução tecnológica pura"], gabarito: "B", explicacao: "Conflito entre exploradores e explorados." },
    { n: 3, enunciado: "A ética trata de:", alternativas: ["A) Como ganhar dinheiro rápido", "B) Princípios morais que norteiam a conduta humana", "C) Regras de futebol", "D) Receitas de culinária", "E) Previsão do tempo"], gabarito: "B", explicacao: "Reflexão sobre o 'viver bem' e o agir correto." },
    { n: 1, enunciado: "Para Aristóteles, o homem é um:", alternativas: ["A) Animal solitário", "B) Animal político (social)", "C) Deus na Terra", "D) Escravo do destino", "E) Ser sem razão"], gabarito: "B", explicacao: "Zoon politikon: feito para viver em sociedade." },
    { n: 2, enunciado: "A 'Banalidade do Mal' é um conceito de:", alternativas: ["A) Hannah Arendt", "B) Simone de Beauvoir", "C) Foucault", "D) Sartre", "E) Freud"], gabarito: "A", explicacao: "Sobre como pessoas comuns participam de sistemas burocráticos cruéis." }
  ]
},
];
