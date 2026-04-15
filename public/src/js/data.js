// ============================================================
// ENEM na Prática — Banco de Dados 01 (Simulados 01 a 12)
// ============================================================

var SIMULADOS = [
{
  id: 1, num: "01", mat: "port", matLabel: "Linguagens",
  title: "Interpretação e Literatura",
  qs: 10, time: "1h", status: "done",
  questoes: [
    { id: "01q1", enunciado: "O Brasil não é para principiantes (Jobim). Qual a figura de linguagem?", alternativas: ["A) Metonímia", "B) Metáfora", "C) Ironia", "D) Pleonasmo", "E) Antítese"], gabarito: "B", explicacao: "Comparação implícita da complexidade do país." },
    { id: "01q2", enunciado: "Modernismo de 1922 buscava:", alternativas: ["A) Parnasianismo", "B) Nacionalismo e liberdade", "C) Rigor formal", "D) Arcadismo", "E) Simbolismo"], gabarito: "B", explicacao: "Ruptura com o passado acadêmico." }
  ]
},
{
  id: 2, num: "02", mat: "mat", matLabel: "Matemática",
  title: "Álgebra e Funções",
  qs: 10, time: "1h", status: "new",
  questoes: [
    { id: "02q1", enunciado: "Resolva 2x + 10 = 20:", alternativas: ["A) 5", "B) 10", "C) 15", "D) 0", "E) 2"], gabarito: "A", explicacao: "2x = 10 -> x = 5." }
  ]
},
{ id: 3, num: "03", mat: "cn", matLabel: "Natureza", title: "Biologia", qs: 10, time: "1h", status: "new", questoes: [{id:"03q1", enunciado:"Organela da respiração:", alternativas:["A) Núcleo","B) Mitocôndria","C) Ribossomo","D) Lisossomo","E) Golgi"], gabarito:"B", explicacao:"Mitocôndrias geram ATP."}]},
{ id: 4, num: "04", mat: "ch", matLabel: "Humanas", title: "História", qs: 10, time: "1h", status: "new", questoes: [{id:"04q1", enunciado:"Descobrimento do Brasil:", alternativas:["A) 1492","B) 1500","C) 1822","D) 1889","E) 1930"], gabarito:"B", explicacao:"22 de abril de 1500."}]},
{ id: 5, num: "05", mat: "port", matLabel: "Linguagens", title: "Gramática", qs: 10, time: "1h", status: "new", questoes: [{id:"05q1", enunciado:"Substantivo abstrato:", alternativas:["A) Casa","B) Amor","C) Mesa","D) Cadeira","E) Livro"], gabarito:"B", explicacao:"Amor depende de um ser para existir."}]},
{ id: 6, num: "06", mat: "mat", matLabel: "Matemática", title: "Geometria", qs: 10, time: "1h", status: "new", questoes: [{id:"06q1", enunciado:"Soma dos ângulos internos de um triângulo:", alternativas:["A) 90","B) 180","C) 360","D) 270","E) 0"], gabarito:"B", explicacao:"Sempre 180 graus."}]},
{ id: 7, num: "07", mat: "cn", matLabel: "Natureza", title: "Física", qs: 10, time: "1h", status: "new", questoes: [{id:"07q1", enunciado:"Velocidade da luz aprox (km/s):", alternativas:["A) 100.000","B) 300.000","C) 1.000.000","D) 50.000","E) 10.000"], gabarito:"B", explicacao:"300.000 km/s no vácuo."}]},
{ id: 8, num: "08", mat: "ch", matLabel: "Humanas", title: "Geografia", qs: 10, time: "1h", status: "new", questoes: [{id:"08q1", enunciado:"Capital do Brasil:", alternativas:["A) Rio","B) Brasília","C) SP","D) Salvador","E) BH"], gabarito:"B", explicacao:"Inaugurada em 1960."}]},
{ id: 9, num: "09", mat: "port", matLabel: "Linguagens", title: "Artes", qs: 10, time: "1h", status: "new", questoes: [{id:"09q1", enunciado:"Pintou a Guernica:", alternativas:["A) Dali","B) Picasso","C) Monet","D) Renoir","E) Van Gogh"], gabarito:"B", explicacao:"Pablo Picasso, 1937."}]},
{ id: 10, num: "10", mat: "mat", matLabel: "Matemática", title: "Estatística", qs: 10, time: "1h", status: "new", questoes: [{id:"10q1", enunciado:"Média de 10, 20, 30:", alternativas:["A) 15","B) 20","C) 25","D) 30","E) 10"], gabarito:"B", explicacao:"(10+20+30)/3 = 20."}]},
{ id: 11, num: "11", mat: "cn", matLabel: "Natureza", title: "Química", qs: 10, time: "1h", status: "new", questoes: [{id:"11q1", enunciado:"H2O é:", alternativas:["A) Oxigênio","B) Água","C) Hidrogênio","D) Sal","E) Açúcar"], gabarito:"B", explicacao:"Fórmula da água."}]},
{ id: 12, num: "12", mat: "ch", matLabel: "Humanas", title: "Filosofia", qs: 10, time: "1h", status: "new", questoes: [{id:"12q1", enunciado:"'Só sei que nada sei':", alternativas:["A) Platão","B) Sócrates","C) Aristóteles","D) Descartes","E) Kant"], gabarito:"B", explicacao:"Famosa frase de Sócrates."}]}
];
