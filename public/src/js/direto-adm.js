/**
 * DATA PARA 5 SIMULADOS DE DIREITO ADMINISTRATIVO
 *IDs: 201 ao 205
 */

const DIREITO_ADM = [
  {
    id: 201, num: "01", title: "Princípios da Administração Pública", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d1q1", m: "direito", n: 1, e: "O princípio que impõe ao administrador o dever de agir com presteza, perfeição e rendimento funcional é o da:", a: ["A) Legalidade", "B) Impessoalidade", "C) Moralidade", "D) Publicidade", "E) Eficiência"], g: "E", x: "O princípio da eficiência (Art. 37, caput, CF) foca na qualidade e rendimento da gestão pública." },
      { id: "d1q2", m: "direito", n: 2, e: "A Administração Pública pode revogar seus próprios atos por motivos de conveniência ou oportunidade. Isso decorre do princípio da:", a: ["A) Autotutela", "B) Legalidade", "C) Segurança Jurídica", "D) Contraditório", "E) Hierarquia"], g: "A", x: "A Súmula 473 do STF estabelece que a administração pode anular seus atos ilegais e revogar os inconvenientes (Autotutela)." },
      { id: "d1q3", m: "direito", n: 1, e: "O mnemônico 'LIMPE' refere-se aos princípios:", a: ["A) Imícitos", "B) Explícitos na CF/88", "C) Apenas estaduais", "D) De direito privado", "E) Inconstitucionais"], g: "B", x: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência são os princípios explícitos da administração pública (Art. 37 CF)." }
    ]
  },
  {
    id: 202, num: "02", title: "Desconcentração e Descentralização", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d2q1", m: "direito", n: 2, e: "Quando o Estado cria uma entidade com personalidade jurídica própria para exercer uma atividade, como a AGER-Erechim, ocorre:", a: ["A) Desconcentração", "B) Descentralização", "C) Privatização", "D) Centralização", "E) Terceirização"], g: "B", x: "Descentralização envolve a criação de entes com personalidade jurídica distinta da União/Estado/Município." },
      { id: "d2q2", m: "direito", n: 1, e: "A criação de Ministérios ou Secretarias dentro de um mesmo ente federado, sem criar nova personalidade jurídica, é exemplo de:", a: ["A) Desconcentração", "B) Descentralização", "C) Outorga", "D) Concessão", "E) Delegação"], g: "A", x: "Desconcentração é uma distribuição de competências interna, sem nova pessoa jurídica (Criação de Órgãos)." }
    ]
  },
  {
    id: 203, num: "03", title: "Autarquias e Administação Indireta", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d3q1", m: "direito", n: 2, e: "A AGER-Erechim, sendo uma Autarquia Especial, possui como característica:", a: ["A) Personalidade jurídica de direito privado", "B) Falta de autonomia administrativa", "C) Personalidade jurídica de direito público", "D) Finalidade lucrativa", "E) Regime jurídico CLT total"], g: "C", x: "Autarquias são pessoas jurídicas de direito público criadas por lei para atividades típicas do Estado." },
      { id: "d3q2", m: "direito", n: 3, e: "Sobre a cobrança de IPVA de veículos de uma Autarquia (AGER-Erechim), é correto afirmar:", a: ["A) Deve pagar normalmente", "B) Possui Imunidade Recíproca", "C) Possui Isenção por caridade", "D) Só paga se houver convênio", "E) Autarquia não pode ter carros"], g: "B", x: "Pelo Art. 150, VI, 'a' da CF, entes da administração indireta (Autarquias e Fundações) gozam de imunidade recíproca sobre impostos vinculados às suas finalidades essenciais." }
    ]
  },
  {
    id: 204, num: "04", title: "Poder Hierárquico e Disciplinar", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d4q1", m: "direito", n: 2, e: "O poder que permite à Administração aplicar sanções aos seus servidores que cometem infrações funcionais é o:", a: ["A) Poder de Polícia", "B) Poder Disciplinar", "C) Poder Regulamentar", "D) Poder Moderador", "E) Poder Legislativo"], g: "B", x: "O Poder Disciplinar visa a apuração e punição de faltas funcionais de servidores e pessoas com vínculo especial com a Adm." },
      { id: "d4q2", m: "direito", n: 3, e: "A existência de relação de subordinação entre chefes e subordinados na AGER-Erechim é manifestação do:", a: ["A) Poder Político", "B) Poder de Polícia", "C) Poder Hierárquico", "D) Poder Judiciário", "E) Poder Soberano"], g: "C", x: "Poder Hierárquico permite organizar, coordenar, dar ordens e fiscalizar órgãos de uma mesma pessoa jurídica." }
    ]
  },
  {
    id: 205, num: "05", title: "Poder Regulamentar e de Polícia", mat: "direito", matLabel: "Direito Adm", time: "20min", qs: 10, status: "new",
    questoes: [
      { id: "d5q1", m: "direito", n: 2, e: "A atividade da AGER-Erechim de fiscalizar o transporte público e aplicar multas por descumprimento de normas é exemplo de:", a: ["A) Poder Moderador", "B) Poder Judiciário", "C) Poder de Polícia", "D) Autogestão", "E) Poder Legislativo"], g: "C", x: "O Poder de Polícia envolve a limitação ou restrição de direitos individuais em prol do interesse público." },
      { id: "d5q2", m: "direito", n: 2, e: "O poder que permite ao Chefe do Executivo editar decretos para fiel execução das leis é o:", a: ["A) Poder Disciplinar", "B) Poder Regulamentar", "C) Poder Coercitivo", "D) Poder Judicante", "E) Poder Hierárquico"], g: "B", x: "Poder Regulamentar (ou regulamentarista) é a prerrogativa de editar atos normativos para detalhar a aplicação da lei." }
    ]
  }
];

// Adiciona as questões de Direito ao array global SIMULADOS
if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...DIREITO_ADM);
}
