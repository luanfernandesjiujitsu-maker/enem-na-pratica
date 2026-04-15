/**
 * DATA PARA 5 PROVAS DISCURSIVAS DE DIREITO ADMINISTRATIVO
 * Com suporte a correção por texto.
 */

const DISCURSIVAS_ADM = [
  {
    id: 301, num: "01", title: "Discursiva: Princípios e Eficiência", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [
      { 
        id: "d301q1", 
        tipo: "discursiva",
        m: "direito", 
        n: 3, 
        e: "Com base no Art. 37 da Constituição Federal, explique o princípio da EFICIÊNCIA e diferencie-o do princípio da LEGALIDADE no agir do administrador público.", 
        padrao: "O princípio da Eficiência exige que a administração busque resultados ótimos com menor custo. Diferencia-se da Legalidade pois esta foca na submissão à lei, enquanto a Eficiência foca na qualidade da gestão.",
        x: "A eficiência foi incluída pela EC 19/98 e exige presteza e rendimento funcional." 
      }
    ]
  },
  {
    id: 302, num: "02", title: "Discursiva: Organização Administrativa", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [
      { 
        id: "d302q1", 
        tipo: "discursiva",
        m: "direito", 
        n: 3, 
        e: "Diferencie, de maneira técnica, a DESCONCENTRAÇÃO da DESCENTRALIZAÇÃO administrativa, citando exemplos de entes da Administração Indireta.", 
        padrao: "Desconcentração é divisão interna de competências (órgãos). Descentralização é a criação de novas pessoas jurídicas (Autarquias, Empresas Públicas, etc).",
        x: "A desconcentração ocorre na mesma pessoa jurídica; a descentralização envolve pessoas distintas." 
      }
    ]
  },
  {
    id: 303, num: "03", title: "Discursiva: Autarquias Especiais", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [
      { 
        id: "d303q1", 
        tipo: "discursiva",
        m: "direito", 
        n: 3, 
        e: "Explique a 'natureza autárquica especial' mencionada na legislação das Agências Reguladoras (como a AGER-Erechim) e discorra sobre sua autonomia em relação ao Poder Executivo.", 
        padrao: "A autarquia especial possui maior independência, com mandatos fixos para dirigentes e autonomia financeira e técnica superior às autarquias comuns.",
        x: "O objetivo é evitar interferências políticas nas decisões regulatórias." 
      }
    ]
  },
  {
    id: 304, num: "04", title: "Discursiva: Poderes Administrativos", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [
      { 
        id: "d304q1", 
        tipo: "discursiva",
        m: "direito", 
        n: 3, 
        e: "Defina o Poder de Polícia e explique os seus três atributos principais (Discricionariedade, Autoexecutoriedade e Coercibilidade).", 
        padrao: "Poder de polícia é a restrição de direitos individuais pelo interesse público. DAC: Discricionariedade, Autoexecutoriedade e Coercibilidade.",
        x: "Permite à administração agir prontamente para proteger o interesse da coletividade." 
      }
    ]
  },
  {
    id: 305, num: "05", title: "Discursiva: Processo Disciplinar", mat: "discursiva", matLabel: "Discursiva Adm", time: "60min", qs: 1, status: "new",
    questoes: [
      { 
        id: "d305q1", 
        tipo: "discursiva",
        m: "direito", 
        n: 3, 
        e: "Discorra sobre o Poder Disciplinar e o dever da administração de apurar irregularidades funcionais mediante Sindicância ou Processo Administrativo Disciplinar (PAD).", 
        padrao: "O poder disciplinar visa punir faltas funcionais. O dever de apurar é vinculado (não pode ser ignorado pela chefia) e exige contraditório.",
        x: "Garante o controle interno e a ética no serviço público." 
      }
    ]
  }
];

if (typeof SIMULADOS !== 'undefined') {
  SIMULADOS.push(...DISCURSIVAS_ADM);
}
