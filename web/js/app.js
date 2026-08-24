/* ======================================================
   CONSTANTES
====================================================== */

const APP_NAME = "School Management System";


/* ======================================================
   VARIÁVEIS
====================================================== */

let totalAlunos = 1250;
let totalProfessores = 85;
let turmasAtivas = 42;
let taxaFrequencia = 94;


/* ======================================================
   FUNÇÕES
====================================================== */

function mostrarAlunos() {

    alert("Total de Alunos: " + totalAlunos);

    console.log("Total de Alunos:", totalAlunos);
}


function mostrarProfessores() {

    alert("Total de Professores: " + totalProfessores);

    console.log("Total de Professores:", totalProfessores);
}


function mostrarTurmas() {

    alert("Turmas Ativas: " + turmasAtivas);

    console.log("Turmas Ativas:", turmasAtivas);
}


function mostrarFrequencia() {

    alert("Taxa de Frequência: " + taxaFrequencia + "%");

    console.log("Taxa de Frequência:", taxaFrequencia + "%");
}


/* ======================================================
   INICIALIZAÇÃO
====================================================== */

console.log(APP_NAME);
console.log("Aplicação inicializada com sucesso.");