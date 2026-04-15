/**
 * DATA PARA 5 SIMULADOS COMPLETOS DE DIREITO ADMINISTRATIVO
 * Cada simulado contém 10 questões profissionais.
 */

const DIREITO_ADM = [
  {
    id: 201, num: "01", title: "Princípios da Administração Pública", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d1q1", m: "direito", n: 1, e: "O princípio que impõe ao administrador o dever de agir com presteza, perfeição e rendimento funcional é o da:", a: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade", "E) Eficiência"], g: "E", x: "O princípio da eficiência (Art. 37 CF) busca o melhor resultado com o menor gasto possível." },
      { id: "d1q2", m: "direito", n: 2, e: "A Administração Pública pode revogar seus próprios atos por motivos de conveniência oportuna. Isso decorre da:", a: ["A) Autotutela", "B) Estrita Legalidade", "C) Segurança Jurídica", "D) Razoabilidade", "E) Hierarquia"], g: "A", x: "Autotutela permite à adm. anular ilegalidades e revogar atos inconvenientes (Súmula 473 STF)." },
      { id: "d1q3", m: "direito", n: 1, e: "O mnemônico 'LIMPE' representa os princípios explícitos:", a: ["A) Da moralidade apenas", "B) Do Art. 37 da CF/88", "C) Do Direito Privado", "D) De Direito Penal", "E) Inconstitucionais"], g: "B", x: "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência." },
      { id: "d1q4", m: "direito", n: 2, e: "O princípio que impede a promoção pessoal de agentes públicos em obras e serviços é a:", a: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade", "E) Eficiência"], g: "B", x: "A Impessoalidade proíbe o uso da máquina pública para autopromoção." },
      { id: "d1q5", m: "direito", n: 3, e: "A supremacia do interesse público sobre o privado é um princípio:", a: ["A) Explícito", "B) Implícito", "C) Inconstitucional", "D) Opcional", "E) Apenas Municipal"], g: "B", x: "É um princípio implícito/pedra angular do Direito Administrativo." },
      { id: "d1q6", m: "direito", n: 1, e: "A obrigatoriedade de divulgação oficial dos atos administrativos visa atender à:", a: ["A) Eficiência", "B) Publicidade", "C) Hierarquia", "D) Disciplina", "E) Autarquia"], g: "B", x: "A publicidade garante a transparência e o início dos efeitos dos atos." },
      { id: "d1q7", m: "direito", n: 2, e: "Atuar com honestidade e lealdade às instituições é reflexo da:", a: ["A) Legalidade", "B) Moralidade", "C) Polícia", "D) Desconcentração", "E) Publicidade"], g: "B", x: "Moralidade administrativa exige ética e boa-fé." },
      { id: "d1q8", m: "direito", n: 2, e: "O administrador público só pode fazer o que a lei permite. Isso define a:", a: ["A) Legalidade Estrita", "B) Autonomia Privada", "C) Moralidade", "D) Eficiência", "E) Polícia"], g: "A", x: "Diferente do particular, o setor público é regido pela legalidade estrita." },
      { id: "d1q9", m: "direito", n: 3, e: "O princípio da indisponibilidade do interesse público significa que:", a: ["A) O administrador é dono do patrimônio", "B) O interesse público não pode ser alienado livremente", "C) O Estado não tem interesse na causa", "D) A lei é facultativa", "E) Os bens são privados"], g: "B", x: "O administrador gere a coisa pública em nome do povo." },
      { id: "d1q10", m: "direito", n: 2, e: "O princípio da Motivação exige que:", a: ["A) O agente esteja feliz", "B) O ato tenha publicidade", "C) Os fundamentos de fato e de direito sejam expostos", "D) Haja lucro", "E) A lei seja curta"], g: "C", x: "Motivação é a exposição das razões que levaram à prática do ato." }
    ]
  },
  {
    id: 202, num: "02", title: "Estrutura e Organização Administrativa", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d2q1", m: "direito", n: 1, e: "A criação de órgãos dentro da mesma pessoa jurídica, com hierarquia, é:", a: ["A) Desconcentração", "B) Descentralização", "C) Privatização", "D) Terceirização", "E) Fusão"], g: "A", x: "Desconcentração é técnica de organização interna (Cria órgãos)." },
      { id: "d2q2", m: "direito", n: 2, e: "A criação de uma Autarquia como a AGER-Erechim é exemplo de:", a: ["A) Desconcentração", "B) Descentralização", "C) Centralização", "D) Delegacia", "E) Extinção"], g: "B", x: "Descentralização cria novas pessoas jurídicas (Administração Indireta)." },
      { id: "d2q3", m: "direito", n: 3, e: "Órgãos públicos possuem personalidade jurídica própria?", a: ["A) Sim, sempre", "B) Não, são apenas centros de competência", "C) Apenas se forem Ministérios", "D) Apenas se forem Autarquias", "E) Sim, para fins de lucro"], g: "B", x: "Órgãos não têm personalidade jurídica; pertencem à pessoa jurídica (Ente)." },
      { id: "d2q4", m: "direito", n: 1, e: "Ministérios da União são exemplos de:", a: ["A) Entes descentralizados", "B) Órgãos desconcentrados", "C) Autarquias", "D) Empresas Públicas", "E) Terceiros"], g: "B", x: "Fazem parte da estrutura direta da União (Desconcentração)." },
      { id: "d2q5", m: "direito", n: 2, e: "A Prefeitura de um município faz parte da:", a: ["A) Administração Direta", "B) Administração Indireta", "C) Terceiro Setor", "D) Empresa Privada", "E) Ong"], g: "A", x: "Entes federados (União, Estados, DF, Municípios) compõem a Adm. Direta." },
      { id: "d2q6", m: "direito", n: 3, e: "A transferência de serviços para particulares (concessionárias) é descentralização por:", a: ["A) Outorga", "B) Colaboração/Delegação", "C) Hierarquia", "D) Fusão", "E) Moralidade"], g: "B", x: "Delegação ocorre por contrato ou ato administrativo." },
      { id: "d2q7", m: "direito", n: 2, e: "Atribuição de competências pela lei para uma Autarquia cria a descentralização por:", a: ["A) Outorga ou Serviço", "B) Colaboração", "C) Hierarquia", "D) Amizade", "E) Contrato"], g: "A", x: "Outorga (por lei) transfere a titularidade e a execução." },
      { id: "d2q8", m: "direito", n: 1, e: "A técnica que visa descongestionar a cúpula da administração é a:", a: ["A) Centralização", "B) Desconcentração", "C) Extinção", "D) Privatização", "E) Fusão"], g: "B", x: "Desconcentração melhora o fluxo operacional interno." },
      { id: "d2q9", m: "direito", n: 2, e: "Secretarias Estaduais são:", a: ["A) Pessoas Jurídicas", "B) Órgãos", "C) Autarquias", "D) Fundações", "E) Entes federados"], g: "B", x: "Órgãos do ente Estado." },
      { id: "d2q10", m: "direito", n: 3, e: "Hierarquia existe na:", a: ["A) Descentralização", "B) Desconcentração", "C) Entre União e Município", "D) Entre Estado e Empresa Pública", "E) No Terceiro Setor"], g: "B", x: "Hierarquia é característica da desconcentração (relação interna)." }
    ]
  },
  {
    id: 203, num: "03", title: "Entidades da Administração Indireta", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d3q1", m: "direito", n: 1, e: "A Autarquia é criada por:", a: ["A) Decreto", "B) Lei específica", "C) Portaria", "D) Contrato", "E) Vontade do prefeito"], g: "B", x: "Autarquias são SEMPRE criadas por lei específica (Art. 37, XIX CF)." },
      { id: "d3q2", m: "direito", n: 2, e: "O regime jurídico das Autarquias é de:", a: ["A) Direito Privado", "B) Direito Público", "C) Misto", "D) Inteiramente CLT", "E) Comercial"], g: "B", x: "Autarquias são pessoas jurídicas de direito público." },
      { id: "d3q3", m: "direito", n: 3, e: "A CAIXA é uma Empresa Pública e o Banco do Brasil uma SEM. A diferença é:", a: ["A) A CAIXA é privada", "B) O capital do Banco do Brasil é 100% público", "C) Empresa Pública tem capital 100% público; SEM tem capital misto", "D) Nenhuma", "E) SEM não pode ter lucro"], g: "C", x: "EP: 100% capital público. SEM: Capital público + privado." },
      { id: "d3q4", m: "direito", n: 2, e: "AGER-Erechim é uma Autarquia Especial. Isso significa que possui maior:", a: ["A) Lucro", "B) Autonomia e independência", "C) Dependência do prefeito", "D) Carga horária", "E) Número de sócios"], g: "B", x: "Agências Reguladoras (Autarquias Especiais) têm mandatos fixos dirigidos à independência." },
      { id: "d3q5", m: "direito", n: 2, e: "Sociedade de Economia Mista deve ser organizada sob a forma de:", a: ["A) LTDA", "B) Sociedade Anônima (S/A)", "C) MEI", "D) Cooperativa", "E) Associação"], g: "B", x: "Exigência legal para as SEM." },
      { id: "d3q6", m: "direito", n: 1, e: "Fundações Públicas de direito público assemelham-se às:", a: ["A) Autarquias", "B) Empresas Privadas", "C) Ongs", "D) Igrejas", "E) Escolas"], g: "A", x: "São chamadas de 'fundações autárquicas'." },
      { id: "d3q7", m: "direito", n: 2, e: "Consórcios Públicos permitem a união de entes para:", a: ["A) Disputar eleições", "B) Realizar objetivos comuns e serviços públicos", "C) Criar novos impostos", "D) Extinguir estados", "E) Comprar votos"], g: "B", x: "Lei 11.107/05 regula o consorciamento." },
      { id: "d3q8", m: "direito", n: 3, e: "O IPVA de carros oficiais da AGER-Erechim não é pago devido à:", a: ["A) Pobreza", "B) Amizade com o DETRAN", "C) Imunidade Tributária Recíproca", "D) Isenção por Lei", "E) Esquecimento"], g: "C", x: "Art. 150, VI, 'a' garante imunidade entre entes e suas autarquias/fundações." },
      { id: "d3q9", m: "direito", n: 2, e: "O controle exercido pelo ente central sobre a Adm. Indireta é a:", a: ["A) Hierarquia", "B) Supervisão Ministerial/Controle Finalístico", "C) Subordinação total", "D) Ditadura", "E) Anarquia"], g: "B", x: "Não há hierarquia entre direta e indireta, mas sim vinculação/supervisão." },
      { id: "d3q10", m: "direito", n: 2, e: "Bens autárquicos são:", a: ["A) Penhoráveis", "B) Públicos e Impenhoráveis", "C) Privados", "D) De uso livre", "E) Vendidos sem lei"], g: "B", x: "Gozam das prerrogativas de bens públicos." }
    ]
  },
  {
    id: 204, num: "04", title: "Poderes Hierárquico e Disciplinar", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d4q1", m: "direito", n: 1, e: "Poder que permite punir faltas funcionais de servidores é o:", a: ["A) Polícia", "B) Disciplinar", "C) Regulamentar", "D) Moderador", "E) Legislativo"], g: "B", x: "Visa a ordem interna e punição de desvios de servidores." },
      { id: "d4q2", m: "direito", n: 2, e: "Delegar e Avocar competências são atos do Poder:", a: ["A) Hierárquico", "B) Polícia", "C) Judicial", "D) Publicidade", "E) Eficiência"], g: "A", x: "Poder Hierárquico permite organizar a distribuição de tarefas." },
      { id: "d4q3", m: "direito", n: 3, e: "O Poder Disciplinar é:", a: ["A) Sempre discricionário quanto à punição (pode ou não punir)", "B) Vinculado quanto ao dever de apurar", "C) Ilegal", "D) Apenas para o Exército", "E) Aplicado pelo Juiz Criminal"], g: "B", x: "Descobriu-se falta? A administração TEM que apurar (Vinculado)." },
      { id: "d4q4", m: "direito", n: 1, e: "Subordinação é elemento essencial do Poder:", a: ["A) Legislativo", "B) Hierárquico", "C) Judiciário", "D) Popular", "E) Externo"], g: "B", x: "Hierarquia gera a relação de comando e obediência." },
      { id: "d4q5", m: "direito", n: 2, e: "As Sindicâncias Administrativas servem para:", a: ["A) Condenar à prisão", "B) Apurar indícios de irregularidades funcionais", "C) Cancelar o CPF", "D) Apenas dar aumento", "E) Fazer publicidade"], g: "B", x: "Procedimento preliminar ou para penas leves." },
      { id: "d4q6", m: "direito", n: 2, e: "A capacidade de dar ordens e fiscalizar o cumprimento é o Poder:", a: ["A) Judiciário", "B) Hierárquico", "C) Coercitivo", "D) Absoluto", "E) Soberano"], g: "B", x: "Núcleo do poder hierárquico." },
      { id: "d4q7", m: "direito", n: 3, e: "Punição a um particular que assinou contrato com a Adm. Pública deriva do Poder:", a: ["A) De Polícia", "B) Disciplinar", "C) Hierárquico", "D) Civil", "E) Tributário"], g: "B", x: "Particulares com vínculo especial (contrato) submetem-se ao Poder Disciplinar." },
      { id: "d4q8", m: "direito", n: 1, e: "Pode-se recusar o cumprimento de ordem manifestamente ilegal?", a: ["A) Não, nunca", "B) Sim, o dever de obediência cede à legalidade", "C) Apenas se o chefe for amigo", "D) Depende do salário", "E) Apenas se o Google autorizar"], g: "B", x: "Ordens manifestamente ilegais não devem ser cumpridas." },
      { id: "d4q9", m: "direito", n: 2, e: "Avocação é:", a: ["A) Chamar para si competência de subordinado", "B) Passar para outro órgão", "C) Extinguir o cargo", "D) Demitir o funcionário", "E) Mudar a lei"], g: "A", x: "Excepcional e motivada (trazer a tarefa para cima)." },
      { id: "d4q10", m: "direito", n: 2, e: "Diferença entre Polícia e Disciplinar:", a: ["A) Não há", "B) Polícia pune geral; Disciplinar pessoas com vínculo (servidor/contratado)", "C) Disciplinar é para crimes", "D) Polícia é só para prisões", "E) Disciplinar é para elogios"], g: "B", x: "Polícia foca na supremacia geral; Disciplinar na supremacia especial." }
    ]
  },
  {
    id: 205, num: "05", title: "Poder Regulamentar e de Polícia", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d5q1", m: "direito", n: 1, e: "Editar Decretos para detalhar leis é o Poder:", a: ["A) Disciplinar", "B) Regulamentar/Normativo", "C) Polícia", "D) Legislativo", "E) Soberano"], g: "B", x: "Prerrogativa do Executivo para dar fiel execução à lei." },
      { id: "d5q2", m: "direito", n: 2, e: "Poder de Polícia foca em:", a: ["A) Prender bandidos", "B) Condicionar e restringir direitos individuais em prol do interesse público", "C) Criar novas leis", "D) Julgar crimes", "E) Dar descontos"], g: "B", x: "Fiscalização sanitária, multas de trânsito, interdição de obras são exemplos." },
      { id: "d5q3", m: "direito", n: 3, e: "Atributos do Poder de Polícia:", a: ["A) Amizade e Caridade", "B) Discricionariedade, Autoexecutoriedade e Coercibilidade", "C) Lentidão e Burocracia", "D) Apenas Multa", "E) Depende do Juiz"], g: "B", x: "DAC: Discricionariedade, Autoexecutoriedade (agir sem ordem judicial) e Coercibilidade." },
      { id: "d5q4", m: "direito", n: 1, e: "Interdição de restaurante com comida estragada é Poder de:", a: ["A) Hierarquia", "B) Polícia", "C) Disciplina", "D) Socorro", "E) Justiça"], g: "B", x: "Ação direta da Adm garantindo a saúde pública." },
      { id: "d5q5", m: "direito", n: 2, e: "O Poder de Polícia pode ser delegado a particulares?", a: ["A) Sim, integralmente", "B) Não, apenas as fases de fiscalização e consentimento (STF)", "C) Apenas se forem amigos do Rei", "D) Sim, para aplicar multas criminais", "E) Não, nunca"], g: "B", x: "Fases de sancionamento já têm restrições, mas fiscalização pode em alguns casos." },
      { id: "d5q6", m: "direito", n: 3, e: "O ato normativo que cria obrigação nova, não prevista em lei, é:", a: ["A) Válido", "B) Abuso de poder (extrapola o poder regulamentar)", "C) Revolucionário", "D) Normal", "E) Facultativo"], g: "B", x: "O regulamento não pode contrariar ou inovar além da lei." },
      { id: "d5q7", m: "direito", n: 2, e: "Taxa de Polícia é cobrada pelo:", a: ["A) Aumento de salário", "B) Exercício efetivo do poder de polícia", "C) Simples existência da viatura", "D) Amizade", "E) Uso do asfalto"], g: "B", x: "Vinculada a uma atividade estatal (Fiscalização)." },
      { id: "d5q8", m: "direito", n: 1, e: "Multa de trânsito é exemplo de:", a: ["A) Poder Judiciário", "B) Poder de Polícia", "C) Poder Hierárquico", "D) Tributo", "E) Doação"], g: "B", x: "Sanção de polícia pelo descumprimento de normas de ordem pública." },
      { id: "d5q9", m: "direito", n: 2, e: "Autoexecutoriedade permite à Administração:", a: ["A) Agir sem autorização prévia do Judiciário", "B) Criar suas próprias leis penais", "C) Não prestar contas", "D) Ser acima de Deus", "E) Roubar"], g: "A", x: "Pode apreender bens ou multar sem ir ao juiz antes." },
      { id: "d5q10", m: "direito", n: 3, e: "Limites do Poder de Polícia:", a: ["A) Não há limites", "B) Proporcionalidade, Razoabilidade e Legalidade", "C) Apenas a vontade do agente", "D) Apenas o orçamento", "E) O limite é o céu"], g: "B", x: "O Estado não pode abusar da força; deve ser proporcional." }
    ]
  }
];

// Injeta os dados
if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...DIREITO_ADM);
}
