/**
 * DIREITO ADMINISTRATIVO COMPLETO (OBJETIVAS + DISCURSIVAS)
 * Centralizado para evitar erros de carregamento.
 */

const DATA_DIREITO = [
  // --- OBJETIVAS (201-205) ---
  {
    id: 201, num: "01", title: "Princípios da Administração Pública", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d1q1", m: "direito", n: 1, enunciado: "O princípio que impõe ao administrador o dever de agir com presteza, perfeição e rendimento funcional é o da:", alternativas: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade", "E) Eficiência"], gabarito: "E", explicacao: "O princípio da eficiência (Art. 37 CF) busca o melhor resultado com o menor gasto possível." },
      { id: "d1q2", m: "direito", n: 2, enunciado: "A Administração Pública pode revogar seus próprios atos por motivos de conveniência oportuna. Isso decorre da:", alternativas: ["A) Autotutela", "B) Estrita Legalidade", "C) Segurança Jurídica", "D) Razoabilidade", "E) Hierarquia"], gabarito: "A", explicacao: "Autotutela permite à adm. anular ilegalidades e revogar atos inconvenientes (Súmula 473 STF)." },
      { id: "d1q3", m: "direito", n: 1, enunciado: "O mnemônico 'LIMPE' representa os princípios explícitos:", alternativas: ["A) Da moralidade apenas", "B) Do Art. 37 da CF/88", "C) Do Direito Privado", "D) De Direito Penal", "E) Inconstitucionais"], gabarito: "B", explicacao: "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência." },
      { id: "d1q4", m: "direito", n: 2, enunciado: "O princípio que impede a promoção pessoal de agentes públicos em obras e serviços é a:", alternativas: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade", "E) Eficiência"], gabarito: "B", explicacao: "A Impessoalidade proíbe o uso da máquina pública para autopromoção." },
      { id: "d1q5", m: "direito", n: 3, enunciado: "A supremacia do interesse público sobre o privado é um princípio:", alternativas: ["A) Explícito", "B) Implícito", "C) Inconstitucional", "D) Opcional", "E) Apenas Municipal"], gabarito: "B", explicacao: "É um princípio implícito/pedra angular do Direito Administrativo." },
      { id: "d1q6", m: "direito", n: 1, enunciado: "A obrigatoriedade de divulgação oficial dos atos administrativos visa atender à:", alternativas: ["A) Eficiência", "B) Publicidade", "C) Hierarquia", "D) Disciplina", "E) Autarquia"], gabarito: "B", explicacao: "A publicidade garante a transparência e o início dos efeitos dos atos." },
      { id: "d1q7", m: "direito", n: 2, enunciado: "Atuar com honestidade e lealdade às instituições é reflexo da:", alternativas: ["A) Legalidade", "B) Moralidade", "C) Polícia", "D) Desconcentração", "E) Publicidade"], gabarito: "B", explicacao: "Moralidade administrativa exige ética e boa-fé." },
      { id: "d1q8", m: "direito", n: 2, enunciado: "O administrador público só pode fazer o que a lei permite. Isso define a:", alternativas: ["A) Legalidade Estrita", "B) Autonomia Privada", "C) Moralidade", "D) Eficiência", "E) Polícia"], gabarito: "A", explicacao: "Diferente do particular, o setor público é regido pela legalidade estrita." },
      { id: "d1q9", m: "direito", n: 3, enunciado: "O princípio da indisponibilidade do interesse público significa que:", alternativas: ["A) O administrador é dono do patrimônio", "B) O interesse público não pode ser alienado livremente", "C) O Estado não tem interesse na causa", "D) A lei é facultativa", "E) Os bens são privados"], gabarito: "B", explicacao: "O administrador gere a coisa pública em nome do povo." },
      { id: "d1q10", m: "direito", n: 2, enunciado: "O princípio da Motivação exige que:", alternativas: ["A) O agente esteja feliz", "B) O ato tenha publicidade", "C) Os fundamentos de fato e de direito sejam expostos", "D) Haja lucro", "E) A lei seja curta"], gabarito: "C", explicacao: "Motivação é a exposição das razões que levaram à prática do ato." }
    ]
  },
  {
    id: 202, num: "02", title: "Estrutura e Organização Administrativa", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d2q1", m: "direito", n: 1, enunciado: "A criação de órgãos dentro da mesma pessoa jurídica, com hierarquia, é:", alternativas: ["A) Desconcentração", "B) Descentralização", "C) Privatização", "D) Terceirização", "E) Fusão"], gabarito: "A", explicacao: "Desconcentração é técnica de organização interna (Cria órgãos)." },
      { id: "d2q2", m: "direito", n: 2, enunciado: "A criação de uma Autarquia como a AGER-Erechim é exemplo de:", alternativas: ["A) Desconcentração", "B) Descentralização", "C) Centralização", "D) Delegacia", "E) Extinção"], gabarito: "B", explicacao: "Descentralização cria novas pessoas jurídicas (Administração Indireta)." },
      { id: "d2q3", m: "direito", n: 3, enunciado: "Órgãos públicos possuem personalidade jurídica própria?", alternativas: ["A) Sim, sempre", "B) Não, são apenas centros de competência", "C) Apenas se forem Ministérios", "D) Apenas se forem Autarquias", "E) Sim, para fins de lucro"], gabarito: "B", explicacao: "Órgãos não têm personalidade jurídica; pertencem à pessoa jurídica (Ente)." },
      { id: "d2q4", m: "direito", n: 1, enunciado: "Ministérios da União são exemplos de:", alternativas: ["A) Entes descentralizados", "B) Órgãos desconcentrados", "C) Autarquias", "D) Empresas Públicas", "E) Terceiros"], gabarito: "B", explicacao: "Fazem parte da estrutura direta da União (Desconcentração)." },
      { id: "d2q5", m: "direito", n: 2, enunciado: "A Prefeitura de um município faz parte da:", alternativas: ["A) Administração Direta", "B) Administração Indireta", "C) Terceiro Setor", "D) Empresa Privada", "E) Ong"], gabarito: "A", explicacao: "Entes federados (União, Estados, DF, Municípios) compõem a Adm. Direta." },
      { id: "d2q6", m: "direito", n: 3, enunciado: "A transferência de serviços para particulares (concessionárias) é descentralização por:", alternativas: ["A) Outorga", "B) Colaboração/Delegação", "C) Hierarquia", "D) Fusão", "E) Moralidade"], gabarito: "B", explicacao: "Delegação ocorre por contrato ou ato administrativo." },
      { id: "d2q7", m: "direito", n: 2, enunciado: "Atribuição de competências pela lei para uma Autarquia cria a descentralização por:", alternativas: ["A) Outorga ou Serviço", "B) Colaboração", "C) Hierarquia", "D) Amizade", "E) Contrato"], gabarito: "A", explicacao: "Outorga (por lei) transfere a titularidade e a execução." },
      { id: "d2q8", m: "direito", n: 1, enunciado: "A técnica que visa descongestionar a cúpula da administração é a:", alternativas: ["A) Centralização", "B) Desconcentração", "C) Extinção", "D) Privatização", "E) Fusão"], gabarito: "B", explicacao: "Desconcentração melhora o fluxo operacional interno." },
      { id: "d2q9", m: "direito", n: 2, enunciado: "Secretarias Estaduais são:", alternativas: ["A) Pessoas Jurídicas", "B) Órgãos", "C) Autarquias", "D) Fundações", "E) Entes federados"], gabarito: "B", explicacao: "Órgãos do ente Estado." },
      { id: "d2q10", m: "direito", n: 3, enunciado: "Hierarquia existe na:", alternativas: ["A) Descentralização", "B) Desconcentração", "C) Entre União e Município", "D) Entre Estado e Empresa Pública", "E) No Terceiro Setor"], gabarito: "B", explicacao: "Hierarquia é característica da desconcentração (relação interna)." }
    ]
  },
  {
    id: 203, num: "03", title: "Entidades da Administração Indireta", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d3q1", m: "direito", n: 1, enunciado: "A Autarquia é criada por:", alternativas: ["A) Decreto", "B) Lei específica", "C) Portaria", "D) Contrato", "E) Vontade do prefeito"], gabarito: "B", explicacao: "Autarquias são SEMPRE criadas por lei específica (Art. 37, XIX CF)." },
      { id: "d3q2", m: "direito", n: 2, enunciado: "O regime jurídico das Autarquias é de:", alternativas: ["A) Direito Privado", "B) Direito Público", "C) Misto", "D) Inteiramente CLT", "E) Comercial"], gabarito: "B", explicacao: "Autarquias são pessoas jurídicas de direito público." },
      { id: "d3q3", m: "direito", n: 3, enunciado: "A CAIXA é uma Empresa Pública e o Banco do Brasil uma SEM. A diferença é:", alternativas: ["A) A CAIXA é privada", "B) O capital do Banco do Brasil é 100% público", "C) Empresa Pública tem capital 100% público; SEM tem capital misto", "D) Nenhuma", "E) SEM não pode ter lucro"], gabarito: "C", explicacao: "EP: 100% capital público. SEM: Capital público + privado." },
      { id: "d3q4", m: "direito", n: 2, enunciado: "AGER-Erechim é uma Autarquia Especial. Isso significa que possui maior:", alternativas: ["A) Lucro", "B) Autonomia e independência", "C) Dependência do prefeito", "D) Carga horária", "E) Número de sócios"], gabarito: "B", explicacao: "Agências Reguladoras (Autarquias Especiais) têm mandatos fixos dirigidos à independência." },
      { id: "d3q5", m: "direito", n: 2, enunciado: "Sociedade de Economia Mista deve ser organizada sob a forma de:", alternativas: ["A) LTDA", "B) Sociedade Anônima (S/A)", "C) MEI", "D) Cooperativa", "E) Associação"], gabarito: "B", explicacao: "Exigência legal para as SEM." },
      { id: "d3q6", m: "direito", n: 1, enunciado: "Fundações Públicas de direito público assemelham-se às:", alternativas: ["A) Autarquias", "B) Empresas Privadas", "C) Ongs", "D) Igrejas", "E) Escolas"], gabarito: "A", explicacao: "São chamadas de 'fundações autárquicas'." },
      { id: "d3q7", m: "direito", n: 2, enunciado: "Consórcios Públicos permitem a união de entes para:", alternativas: ["A) Disputar eleições", "B) Realizar objetivos comuns e serviços públicos", "C) Criar novos impostos", "D) Extinguir estados", "E) Comprar votos"], gabarito: "B", explicacao: "Lei 11.107/05 regula o consorciamento." },
      { id: "d3q8", m: "direito", n: 3, enunciado: "O IPVA de carros oficiais da AGER-Erechim não é pago devido à:", alternativas: ["A) Pobreza", "B) Amizade com o DETRAN", "C) Imunidade Tributária Recíproca", "D) Isenção por Lei", "E) Esquecimento"], gabarito: "C", explicacao: "Art. 150, VI, 'a' garante imunidade entre entes e suas autarquias/fundações." },
      { id: "d3q9", m: "direito", n: 2, enunciado: "O controle exercido pelo ente central sobre a Adm. Indireta é a:", alternativas: ["A) Hierarquia", "B) Supervisão Ministerial/Controle Finalístico", "C) Subordinação total", "D) Ditadura", "E) Anarquia"], gabarito: "B", explicacao: "Não há hierarquia entre direta e indireta, mas sim vinculação/supervisão." },
      { id: "d3q10", m: "direito", n: 2, enunciado: "Bens autárquicos são:", alternativas: ["A) Penhoráveis", "B) Públicos e Impenhoráveis", "C) Privados", "D) De uso livre", "E) Vendidos sem lei"], gabarito: "B", explicacao: "Gozam das prerrogativas de bens públicos." }
    ]
  },
  {
    id: 204, num: "04", title: "Poderes Hierárquico e Disciplinar", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d4q1", m: "direito", n: 1, enunciado: "Poder que permite punir faltas funcionais de servidores é o:", alternativas: ["A) Polícia", "B) Disciplinar", "C) Regulamentar", "D) Moderador", "E) Legislativo"], gabarito: "B", explicacao: "Visa a ordem interna e punição de desvios de servidores." },
      { id: "d4q2", m: "direito", n: 2, enunciado: "Delegar e Avocar competências são atos do Poder:", alternativas: ["A) Hierárquico", "B) Polícia", "C) Judicial", "D) Publicidade", "E) Eficiência"], gabarito: "A", explicacao: "Poder Hierárquico permite organizar a distribuição de tarefas." },
      { id: "d4q3", m: "direito", n: 3, enunciado: "O Poder Disciplinar é:", alternativas: ["A) Sempre discricionário quanto à punição (pode ou não punir)", "B) Vinculado quanto ao dever de apurar", "C) Ilegal", "D) Apenas para o Exército", "E) Aplicado pelo Juiz Criminal"], gabarito: "B", explicacao: "Descobriu-se falta? A administração TEM que apurar (Vinculado)." },
      { id: "d4q4", m: "direito", n: 1, enunciado: "Subordinação é elemento essencial do Poder:", alternativas: ["A) Legislativo", "B) Hierárquico", "C) Judiciário", "D) Popular", "E) Externo"], gabarito: "B", explicacao: "Hierarquia gera a relação de comando e obediência." },
      { id: "d4q5", m: "direito", n: 2, enunciado: "As Sindicâncias Administrativas servem para:", alternativas: ["A) Condenar à prisão", "B) Apurar indícios de irregularidades funcionais", "C) Cancelar o CPF", "D) Apenas dar aumento", "E) Fazer publicidade"], gabarito: "B", explicacao: "Procedimento preliminar ou para penas leves." },
      { id: "d4q6", m: "direito", n: 2, enunciado: "A capacidade de dar ordens e fiscalizar o cumprimento é o Poder:", alternativas: ["A) Judiciário", "B) Hierárquico", "C) Coercitivo", "D) Absoluto", "E) Soberano"], gabarito: "B", explicacao: "Núcleo do poder hierárquico." },
      { id: "d4q7", m: "direito", n: 3, enunciado: "Punição a um particular que assinou contrato com a Adm. Pública deriva do Poder:", alternativas: ["A) De Polícia", "B) Disciplinar", "C) Hierárquico", "D) Civil", "E) Tributário"], gabarito: "B", explicacao: "Particulares com vínculo especial (contrato) submetem-se ao Poder Disciplinar." },
      { id: "d4q8", m: "direito", n: 1, enunciado: "Pode-se recusar o cumprimento de ordem manifestamente ilegal?", alternativas: ["A) Não, nunca", "B) Sim, o dever de obediência cede à legalidade", "C) Apenas se o chefe for amigo", "D) Depende do salário", "E) Apenas se o Google autorizar"], gabarito: "B", explicacao: "Ordens manifestamente ilegais não devem ser cumpridas." },
      { id: "d4q9", m: "direito", n: 2, enunciado: "Avocação é:", alternativas: ["A) Chamar para si competência de subordinado", "B) Passar para outro órgão", "C) Extinguir o cargo", "D) Demitir o funcionário", "E) Mudar a lei"], gabarito: "A", explicacao: "Excepcional e motivada (trazer a tarefa para cima)." },
      { id: "d4q10", m: "direito", n: 2, enunciado: "Diferença entre Polícia e Disciplinar:", alternativas: ["A) Não há", "B) Polícia pune geral; Disciplinar pessoas com vínculo (servidor/contratado)", "C) Disciplinar é para crimes", "D) Polícia é só para prisões", "E) Disciplinar é para elogios"], gabarito: "B", explicacao: "Polícia foca na supremacia geral; Disciplinar na supremacia especial." }
    ]
  },
  {
    id: 205, num: "05", title: "Poder Regulamentar e de Polícia", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d5q1", m: "direito", n: 1, enunciado: "Editar Decretos para detalhar leis é o Poder:", alternativas: ["A) Disciplinar", "B) Regulamentar/Normativo", "C) Polícia", "D) Legislativo", "E) Soberano"], gabarito: "B", explicacao: "Prerrogativa do Executivo para dar fiel execução à lei." },
      { id: "d5q2", m: "direito", n: 2, enunciado: "Poder de Polícia foca em:", alternativas: ["A) Prender bandidos", "B) Condicionar e restringir direitos individuais em prol do interesse público", "C) Criar novas leis", "D) Julgar crimes", "E) Dar descontos"], gabarito: "B", explicacao: "Fiscalização sanitária, multas de trânsito, interdição de obras são exemplos." },
      { id: "d5q3", m: "direito", n: 3, enunciado: "Atributos do Poder de Polícia:", alternativas: ["A) Amizade e Caridade", "B) Discricionariedade, Autoexecutoriedade e Coercibilidade", "C) Lentidão e Burocracia", "D) Apenas Multa", "E) Depende do Juiz"], gabarito: "B", explicacao: "DAC: Discricionariedade, Autoexecutoriedade (agir sem ordem judicial) e Coercibilidade." },
      { id: "d5q4", m: "direito", n: 1, enunciado: "Interdição de restaurante com comida estragada é Poder de:", alternativas: ["A) Hierarquia", "B) Polícia", "C) Disciplina", "D) Socorro", "E) Justiça"], gabarito: "B", explicacao: "Ação direta da Adm garantindo a saúde pública." },
      { id: "d5q5", m: "direito", n: 2, enunciado: "O Poder de Polícia pode ser delegado a particulares?", alternativas: ["A) Sim, integralmente", "B) Não, apenas as fases de fiscalização e consentimento (STF)", "C) Apenas se forem amigos do Rei", "D) Sim, para aplicar multas criminais", "E) Não, nunca"], gabarito: "B", explicacao: "Fases de sancionamento já têm restrições, mas fiscalização pode em alguns casos." },
      { id: "d5q6", m: "direito", n: 3, enunciado: "O ato normativo que cria obrigação nova, não prevista em lei, é:", alternativas: ["A) Válido", "B) Abuso de poder (extrapola o poder regulamentar)", "C) Revolucionário", "D) Normal", "E) Facultativo"], gabarito: "B", explicacao: "O regulamento não pode contrariar ou inovar além da lei." },
      { id: "d5q7", m: "direito", n: 2, enunciado: "Taxa de Polícia é cobrada pelo:", alternativas: ["A) Aumento de salário", "B) Exercício efetivo do poder de polícia", "C) Simples existência da viatura", "D) Amizade", "E) Uso do asfalto"], gabarito: "B", explicacao: "Vinculada a uma atividade estatal (Fiscalização)." },
      { id: "d5q8", m: "direito", n: 1, enunciado: "Multa de trânsito é exemplo de:", alternativas: ["A) Poder Judiciário", "B) Poder de Polícia", "C) Poder Hierárquico", "D) Tributo", "E) Doação"], gabarito: "B", explicacao: "Sanção de polícia pelo descumprimento de normas de ordem pública." },
      { id: "d5q9", m: "direito", n: 2, enunciado: "Autoexecutoriedade permite à Administração:", alternativas: ["A) Agir sem autorização prévia do Judiciário", "B) Criar suas próprias leis penais", "C) Não prestar contas", "D) Ser acima de Deus", "E) Roubar"], gabarito: "A", explicacao: "Pode apreender bens ou multar sem ir ao juiz antes." },
      { id: "d5q10", m: "direito", n: 3, enunciado: "Limites do Poder de Polícia:", alternativas: ["A) Não há limites", "B) Proporcionalidade, Razoabilidade e Legalidade", "C) Apenas a vontade do agente", "D) Apenas o orçamento", "E) O limite é o céu"], gabarito: "B", explicacao: "O Estado não pode abusar da força; deve ser proporcional." }
    ]
  },
  
  // --- DISCURSIVAS (301-305) ---
  {
    id: 301, num: "01", title: "Discursiva: Princípios e Eficiência", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [{ 
      id: "d301q1", tipo: "discursiva", m: "direito", n: 3, 
      enunciado: "Com base no Art. 37 da Constituição Federal, explique o princípio da EFICIÊNCIA e diferencie-o do princípio da LEGALIDADE no agir do administrador público.", 
      explicacao: "A eficiência foi incluída pela EC 19/98 e exige presteza e rendimento funcional." 
    }]
  },
  {
    id: 302, num: "02", title: "Discursiva: Organização Administrativa", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [{ 
      id: "d302q1", tipo: "discursiva", m: "direito", n: 3, 
      enunciado: "Diferencie, de maneira técnica, a DESCONCENTRAÇÃO da DESCENTRALIZAÇÃO administrativa, citando exemplos de entes da Administração Indireta.", 
      explicacao: "A desconcentração ocorre na mesma pessoa jurídica; a descentralização envolve pessoas distintas." 
    }]
  },
  {
    id: 303, num: "03", title: "Discursiva: Autarquias Especiais", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [{ 
      id: "d303q1", tipo: "discursiva", m: "direito", n: 3, 
      enunciado: "Explique a 'natureza autárquica especial' mencionada na legislação das Agências Reguladoras (como a AGER-Erechim) e discorra sobre sua autonomia em relação ao Poder Executivo.", 
      explicacao: "Agências Reguladoras têm mandatos fixos dirigidos à independência técnica." 
    }]
  },
  {
    id: 304, num: "04", title: "Discursiva: Poderes Administrativos", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [{ 
      id: "d304q1", tipo: "discursiva", m: "direito", n: 3, 
      enunciado: "Defina o Poder de Polícia e explique os seus três atributos principais (Discricionariedade, Autoexecutoriedade e Coercibilidade).", 
      explicacao: "DAC: Discricionariedade, Autoexecutoriedade e Coercibilidade." 
    }]
  },
  {
    id: 305, num: "05", title: "Discursiva: Processo Disciplinar", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [{ 
      id: "d305q1", tipo: "discursiva", m: "direito", n: 3, 
      enunciado: "Discorra sobre o Poder Disciplinar e o dever da administração de apurar irregularidades funcionais mediante Sindicância ou Processo Administrativo Disciplinar (PAD).", 
      explicacao: "Garante o controle interno e a ética no serviço público." 
    }]
  }
];

// Injeta os dados no array global
if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...DATA_DIREITO);
}
