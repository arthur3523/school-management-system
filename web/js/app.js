/* ======================================================
   School Management System
   Kaizen Software Labs
   app.js
====================================================== */

/* =======================
   Constantes
======================= */

const APP_NAME = "School Management System";


/* =======================
   Variáveis
======================= */

let totalAlunos = 1250;
let totalProfessores = 85;
let turmasAtivas = 42;
let taxaFrequencia = 94;


/* =======================
   Funções
======================= */

function mostrarAlunos() {
    alert("O sistema possui " + totalAlunos + " alunos cadastrados.");
    console.log("Total de alunos:", totalAlunos);
}

function mostrarProfessores() {
    alert("O sistema possui " + totalProfessores + " professores cadastrados.");
    console.log("Total de professores:", totalProfessores);
}

function mostrarTurmas() {
    alert("O sistema possui " + turmasAtivas + " turmas ativas.");
    console.log("Turmas ativas:", turmasAtivas);
}

function mostrarFrequencia() {
    alert("A taxa de frequência atual é de " + taxaFrequencia + "%.");
    console.log("Taxa de frequência:", taxaFrequencia + "%");
}

function mostrarAtividades() {
    alert("Aqui serão exibidas as atividades recentes do sistema.");
    console.log("Atividades recentes");
}

function mostrarAvisos() {
    alert("Aqui serão exibidos os avisos importantes do sistema.");
    console.log("Avisos importantes");
}


/* =======================
   Inicialização
======================= */

console.log(APP_NAME + " iniciado com sucesso.");


/* ======================================================

   Kaizen Software Labs

   Instruções para esta Sprint

   • Não altere a organização do arquivo.
   • Não altere a ordem dos blocos.
   • Desenvolva apenas o conteúdo interno de cada bloco.
   • Mantenha este padrão durante toda a Sprint.

====================================================== */