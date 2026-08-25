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

   DADOS EM MEMÓRIA

====================================================== */

// Controle de faltas por matrícula

const faltas = new Map();

/* ======================================================

   DOM

====================================================== */

const content = document.getElementById("content");

const menuItems =

    document.getElementsByClassName("menu-item");

const sidebarItems =

    document.getElementsByClassName("sidebar-item");

/* ======================================================

   FUNÇÃO PARA LIMPAR O CONTEÚDO

====================================================== */

function limparConteudo() {

    content.innerHTML = "";

}

/* ======================================================

   FUNÇÃO PARA CRIAR TÍTULO

====================================================== */

function criarTitulo(titulo, descricao) {

    limparConteudo();

    const tituloElemento =

        document.createElement("h1");

    tituloElemento.textContent = titulo;

    const descricaoElemento =

        document.createElement("p");

    descricaoElemento.textContent = descricao;

    content.appendChild(tituloElemento);

    content.appendChild(descricaoElemento);

}

/* ======================================================

   DASHBOARD

====================================================== */

function mostrarDashboard() {

    criarTitulo(

        "Dashboard",

        "Visão geral do School Management System."

    );

    console.log("Menu Dashboard selecionado.");

}

/* ======================================================

   ALUNOS

====================================================== */

function mostrarPaginaAlunos() {

    limparConteudo();

    const titulo =

        document.createElement("h1");

    titulo.textContent = "Alunos";

    const descricao =

        document.createElement("p");

    descricao.textContent =

        "Área de gerenciamento dos alunos.";

    content.appendChild(titulo);

    content.appendChild(descricao);

    /* BOTÃO LISTAR */

    const botaoListar =

        document.createElement("button");

    botaoListar.textContent =

        "Listar alunos";

    botaoListar.className = "button";

    botaoListar.addEventListener(

        "click",

        listarAlunos

    );

    /* BOTÃO BUSCAR */

    const botaoBuscar =

        document.createElement("button");

    botaoBuscar.textContent =

        "Buscar aluno";

    botaoBuscar.className = "button";

    botaoBuscar.addEventListener(

        "click",

        buscarAluno

    );

    /* BOTÃO CADASTRAR */

    const botaoCadastrar =

        document.createElement("button");

    botaoCadastrar.textContent =

        "Cadastrar aluno";

    botaoCadastrar.className = "button";

    botaoCadastrar.addEventListener(

        "click",

        cadastrarAluno

    );

    content.appendChild(botaoListar);

    content.appendChild(botaoBuscar);

    content.appendChild(botaoCadastrar);

    console.log("Menu Alunos selecionado.");

}

/* ======================================================

   LISTAR ALUNOS

====================================================== */

function listarAlunos() {

    console.log("Lista de alunos carregada.");

    alert(

        "Existem " +

        totalAlunos +

        " alunos cadastrados."

    );

}

/* ======================================================

   BUSCAR ALUNO

====================================================== */

function buscarAluno() {

    const nome =

        prompt("Digite o nome do aluno:");

    if (nome === null || nome === "") {

        console.log("Busca cancelada.");

        return;

    }

    console.log(

        "Aluno pesquisado:",

        nome

    );

    alert(

        "Busca realizada para: " +

        nome

    );

}

/* ======================================================

   CADASTRAR ALUNO

====================================================== */

function cadastrarAluno() {

    const nome =

        prompt("Digite o nome do novo aluno:");

    if (nome === null || nome === "") {

        console.log(

            "Cadastro de aluno cancelado."

        );

        return;

    }

    totalAlunos++;

    console.log(

        "Aluno cadastrado:",

        nome

    );

    console.log(

        "Total de alunos:",

        totalAlunos

    );

    alert(

        "Aluno cadastrado com sucesso!"

    );

}

/* ======================================================

   PROFESSORES

====================================================== */

function mostrarPaginaProfessores() {

    limparConteudo();

    const titulo =

        document.createElement("h1");

    titulo.textContent =

        "Professores";

    const descricao =

        document.createElement("p");

    descricao.textContent =

        "Área de gerenciamento dos professores.";

    content.appendChild(titulo);

    content.appendChild(descricao);

    /* BOTÃO LISTAR */

    const botaoListar =

        document.createElement("button");

    botaoListar.textContent =

        "Listar professores";

    botaoListar.className = "button";

    botaoListar.addEventListener(

        "click",

        listarProfessores

    );

    /* BOTÃO CADASTRAR */

    const botaoCadastrar =

        document.createElement("button");

    botaoCadastrar.textContent =

        "Cadastrar professor";

    botaoCadastrar.className = "button";

    botaoCadastrar.addEventListener(

        "click",

        cadastrarProfessor

    );

    content.appendChild(botaoListar);

    content.appendChild(botaoCadastrar);

    console.log(

        "Menu Professores selecionado."

    );

}

/* ======================================================

   LISTAR PROFESSORES

====================================================== */

function listarProfessores() {

    console.log(

        "Lista de professores carregada."

    );

    alert(

        "Existem " +

        totalProfessores +

        " professores cadastrados."

    );

}

/* ======================================================

   CADASTRAR PROFESSOR

====================================================== */

function cadastrarProfessor() {

    const nome =

        prompt(

            "Digite o nome do novo professor:"

        );

    if (nome === null || nome === "") {

        console.log(

            "Cadastro de professor cancelado."

        );

        return;

    }

    totalProfessores++;

    console.log(

        "Professor cadastrado:",

        nome

    );

    console.log(

        "Total de professores:",

        totalProfessores

    );

    alert(

        "Professor cadastrado com sucesso!"

    );

}

/* ======================================================

   FALTAS

====================================================== */

function mostrarFaltas() {

    limparConteudo();

    const titulo =

        document.createElement("h1");

    titulo.textContent = "Faltas";

    const descricao =

        document.createElement("p");

    descricao.textContent =

        "Área de controle e registro de faltas dos alunos.";

    content.appendChild(titulo);

    content.appendChild(descricao);

    /* BOTÃO REGISTRAR */

    const botaoRegistrar =

        document.createElement("button");

    botaoRegistrar.textContent =

        "Registrar falta";

    botaoRegistrar.className = "button";

    botaoRegistrar.addEventListener(

        "click",

        registrarFalta

    );

    /* BOTÃO CONSULTAR */

    const botaoConsultar =

        document.createElement("button");

    botaoConsultar.textContent =

        "Consultar faltas";

    botaoConsultar.className = "button";

    botaoConsultar.addEventListener(

        "click",

        consultarFaltas

    );

    content.appendChild(botaoRegistrar);

    content.appendChild(botaoConsultar);

    console.log(

        "Menu Faltas selecionado."

    );

}

/* ======================================================

   REGISTRAR FALTA

====================================================== */

function registrarFalta() {

    const matricula =

        prompt(

            "Digite o número de matrícula do aluno:"

        );

    if (

        matricula === null ||

        matricula === ""

    ) {

        console.log(

            "Registro de falta cancelado."

        );

        return;

    }

    const atual =

        faltas.get(matricula) || 0;

    faltas.set(

        matricula,

        atual + 1

    );

    console.log(

        "Falta registrada para a matrícula:",

        matricula

    );

    console.log(

        "Total de faltas:",

        faltas.get(matricula)

    );

    alert(

        "Falta registrada com sucesso!\n\n" +

        "Matrícula: " +

        matricula +

        "\nTotal de faltas: " +

        faltas.get(matricula)

    );

}

/* ======================================================

   CONSULTAR FALTAS

====================================================== */

function consultarFaltas() {

    const matricula =

        prompt(

            "Digite o número de matrícula do aluno:"

        );

    if (

        matricula === null ||

        matricula === ""

    ) {

        console.log(

            "Consulta de faltas cancelada."

        );

        return;

    }

    const quantidade =

        faltas.get(matricula) || 0;

    console.log(

        "Consulta de faltas:",

        matricula,

        quantidade

    );

    alert(

        "Matrícula: " +

        matricula +

        "\nFaltas registradas: " +

        quantidade

    );

}

/* ======================================================

   ESTATÍSTICAS

====================================================== */

function mostrarEstatisticas() {

    limparConteudo();

    const titulo =

        document.createElement("h1");

    titulo.textContent =

        "Estatísticas";

    const descricao =

        document.createElement("p");

    descricao.textContent =

        "Estatísticas do School Management System.";

    content.appendChild(titulo);

    content.appendChild(descricao);

    /* TOTAL DE ALUNOS */

    const alunos =

        document.createElement("p");

    alunos.textContent =

        "Total de alunos: " +

        totalAlunos;

    /* TOTAL DE PROFESSORES */

    const professores =

        document.createElement("p");

    professores.textContent =

        "Total de professores: " +

        totalProfessores;

    /* TURMAS */

    const turmas =

        document.createElement("p");

    turmas.textContent =

        "Turmas ativas: " +

        turmasAtivas;

    /* FREQUÊNCIA */

    const frequencia =

        document.createElement("p");

    frequencia.textContent =

        "Taxa de frequência: " +

        taxaFrequencia +

        "%";

    content.appendChild(alunos);

    content.appendChild(professores);

    content.appendChild(turmas);

    content.appendChild(frequencia);

    /* BOTÃO ASYNC/AWAIT */

    const botaoAsync =

        document.createElement("button");

    botaoAsync.textContent =

        "Executar Async/Await";

    botaoAsync.className = "button";

    botaoAsync.addEventListener(

        "click",

        demonstrarAsyncAwait

    );

    content.appendChild(botaoAsync);

    console.log(

        "Menu Estatísticas selecionado."

    );

    console.log(

        "Total de alunos:",

        totalAlunos

    );

    console.log(

        "Total de professores:",

        totalProfessores

    );

    console.log(

        "Turmas ativas:",

        turmasAtivas

    );

    console.log(

        "Taxa de frequência:",

        taxaFrequencia + "%"

    );

}

/* ======================================================

   DEMONSTRAÇÃO ASYNC/AWAIT

====================================================== */

async function demonstrarAsyncAwait() {

    console.log(

        "Iniciando demonstração de Async/Await..."

    );

    try {

        const resultado =

            await buscarAlunoAsync();

        console.log(

            "Resultado do Async/Await:",

            resultado

        );

        alert(

            "Async/Await executado com sucesso!\n\n" +

            "Aluno encontrado: " +

            resultado

        );

    } catch (error) {

        console.log(

            "Erro na demonstração:",

            error

        );

        alert(

            "Ocorreu um erro na demonstração."

        );

    }

}

/* ======================================================

   FUNÇÃO ASSÍNCRONA PARA DEMONSTRAÇÃO

====================================================== */

function buscarAlunoAsync() {

    return new Promise(

        function (resolve) {

            setTimeout(

                function () {

                    resolve(

                        "Demonstração concluída"

                    );

                },

                500

            );

        }

    );

}

/* ======================================================

   NAVEGAÇÃO

====================================================== */

function navegar(pagina) {

    if (pagina === "dashboard") {

        mostrarDashboard();

    }

    else if (pagina === "alunos") {

        mostrarPaginaAlunos();

    }

    else if (pagina === "professores") {

        mostrarPaginaProfessores();

    }

    else if (pagina === "faltas") {

        mostrarFaltas();

    }

    else if (pagina === "estatisticas") {

        mostrarEstatisticas();

    }

}

/* ======================================================

   EVENTO CLICK - MENU SUPERIOR

====================================================== */

for (

    let i = 0;

    i < menuItems.length;

    i++

) {

    menuItems[i].addEventListener(

        "click",

        function () {

            const pagina =

                menuItems[i].getAttribute(

                    "data-page"

                );

            navegar(pagina);

        }

    );

}

/* ======================================================

   EVENTO CLICK - SIDEBAR

====================================================== */

for (

    let i = 0;

    i < sidebarItems.length;

    i++

) {

    sidebarItems[i].addEventListener(

        "click",

        function () {

            const pagina =

                sidebarItems[i].getAttribute(

                    "data-page"

                );

            navegar(pagina);

        }

    );

}

/* ======================================================

   FUNÇÕES DOS CARDS

====================================================== */

function mostrarAlunos() {

    alert(

        "Total de Alunos: " +

        totalAlunos

    );

    console.log(

        "Total de Alunos:",

        totalAlunos

    );

}

function mostrarProfessores() {

    alert(

        "Total de Professores: " +

        totalProfessores

    );

    console.log(

        "Total de Professores:",

        totalProfessores

    );

}

function mostrarTurmas() {

    alert(

        "Turmas Ativas: " +

        turmasAtivas

    );

    console.log(

        "Turmas Ativas:",

        turmasAtivas

    );

}

function mostrarFrequencia() {

    alert(

        "Taxa de Frequência: " +

        taxaFrequencia +

        "%"

    );

    console.log(

        "Taxa de Frequência:",

        taxaFrequencia + "%"

    );

}

/* ======================================================

   INICIALIZAÇÃO

====================================================== */

console.log(APP_NAME);

console.log(

    "Aplicação inicializada com sucesso."

);

console.log(

    "Sistema de navegação DOM ativo."

);

console.log(

    "Módulo de Faltas carregado."

);

console.log(

    "Módulo de Estatísticas carregado."

);

console.log(

    "Demonstração de Async/Await disponível."

);