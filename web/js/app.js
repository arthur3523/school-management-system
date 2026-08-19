// ==========================================
// 1. ESTRUTURAS DE DADOS (Sistema Legacy / Base)
// ==========================================
let alunos = [
    { matricula: "A101", nome: "Ana Souza", turma: "1º Ano A" },
    { matricula: "A102", nome: "Bruno Lima", turma: "2º Ano B" },
    { matricula: "A103", nome: "Carla Mendes", turma: "3º Ano A" }
];

let professores = [
    { id: "P201", nome: "Carlos Eduardo", disciplina: "Matemática" },
    { id: "P202", nome: "Mariana Costa", disciplina: "História" }
];

let faltas = [
    { matricula: "A101", data: "2026-03-10", motivo: "Consulta Médica" },
    { matricula: "A102", data: "2026-03-12", motivo: "Gripe" }
];

// ==========================================
// 2. NAVEGAÇÃO ENTRE PÁGINAS
// ==========================================
const navButtons = document.querySelectorAll('.nav-btn');
const pageSections = document.querySelectorAll('.page-section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover classe ativa dos botões e adicionar no clicado
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Ocultar todas as páginas
        pageSections.forEach(section => section.classList.add('hidden'));

        // Exibir a página correspondente
        const pageId = button.id.replace('nav-', 'page-');
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }

        // Atualizar dashboard quando for para ele
        if (pageId === 'page-dashboard') {
            atualizarDashboard();
        }
    });
});

// ==========================================
// 3. DASHBOARD E ESTATÍSTICAS
// ==========================================
function atualizarDashboard() {
    document.getElementById('stat-total-alunos').innerHTML = alunos.length;
    document.getElementById('stat-total-professores').innerHTML = professores.length;
    document.getElementById('stat-total-faltas').innerHTML = faltas.length;
}

// ==========================================
// 4. GERENCIAMENTO DE ALUNOS
// ==========================================

// Renderizar Tabela de Alunos
function renderizarAlunos(lista = alunos) {
    const tabela = document.getElementById('tabela-alunos');
    let html = '';

    if (lista.length === 0) {
        html = '<tr><td colspan="3">Nenhum aluno encontrado.</td></tr>';
    } else {
        lista.forEach(aluno => {
            html += `
                <tr>
                    <td>${aluno.matricula}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.turma}</td>
                </tr>
            `;
        });
    }

    tabela.innerHTML = html;
}

// Cadastrar Aluno
document.getElementById('form-cadastrar-aluno').addEventListener('submit', function(e) {
    e.preventDefault();

    const matricula = document.getElementById('aluno-matricula').value.trim();
    const nome = document.getElementById('aluno-nome').value.trim();
    const turma = document.getElementById('aluno-turma').value.trim();

    // Verificar se a matrícula já existe
    if (alunos.some(a => a.matricula.toLowerCase() === matricula.toLowerCase())) {
        alert("Já existe um aluno cadastrado com esta matrícula!");
        return;
    }

    alunos.push({ matricula, nome, turma });
    renderizarAlunos();
    atualizarDashboard();
    
    this.reset();
    alert("Aluno cadastrado com sucesso!");
});

// Buscar Aluno por Matrícula
document.getElementById('btn-buscar-aluno').addEventListener('click', function() {
    const termo = document.getElementById('busca-aluno-input').value.trim().toLowerCase();
    if (!termo) {
        renderizarAlunos();
        return;
    }

    const filtrados = alunos.filter(a => a.matricula.toLowerCase().includes(termo));
    renderizarAlunos(filtrados);
});

// Limpar Busca de Aluno
document.getElementById('btn-limpar-busca-aluno').addEventListener('click', function() {
    document.getElementById('busca-aluno-input').value = '';
    renderizarAlunos();
});


// ==========================================
// 5. GERENCIAMENTO DE PROFESSORES
// ==========================================

// Renderizar Tabela de Professores
function renderizarProfessores() {
    const tabela = document.getElementById('tabela-professores');
    let html = '';

    if (professores.length === 0) {
        html = '<tr><td colspan="3">Nenhum professor encontrado.</td></tr>';
    } else {
        professores.forEach(prof => {
            html += `
                <tr>
                    <td>${prof.id}</td>
                    <td>${prof.nome}</td>
                    <td>${prof.disciplina}</td>
                </tr>
            `;
        });
    }

    tabela.innerHTML = html;
}

// Cadastrar Professor
document.getElementById('form-cadastrar-professor').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('prof-id').value.trim();
    const nome = document.getElementById('prof-nome').value.trim();
    const disciplina = document.getElementById('prof-disciplina').value.trim();

    if (professores.some(p => p.id.toLowerCase() === id.toLowerCase())) {
        alert("Já existe um professor com este ID!");
        return;
    }

    professores.push({ id, nome, disciplina });
    renderizarProfessores();
    atualizarDashboard();

    this.reset();
    alert("Professor cadastrado com sucesso!");
});


// ==========================================
// 6. GERENCIAMENTO DE FALTAS
// ==========================================

// Renderizar Tabela de Faltas
function renderizarFaltas(lista = faltas) {
    const tabela = document.getElementById('tabela-faltas');
    let html = '';

    if (lista.length === 0) {
        html = '<tr><td colspan="4">Nenhuma falta registrada.</td></tr>';
    } else {
        lista.forEach(falta => {
            // Obter nome do aluno referente à falta
            const alunoObj = alunos.find(a => a.matricula.toLowerCase() === falta.matricula.toLowerCase());
            const nomeAluno = alunoObj ? alunoObj.nome : "Aluno não cadastrado";

            html += `
                <tr>
                    <td>${falta.matricula}</td>
                    <td>${nomeAluno}</td>
                    <td>${falta.data}</td>
                    <td>${falta.motivo || 'Sem justificativa'}</td>
                </tr>
            `;
        });
    }

    tabela.innerHTML = html;
}

// Registrar Falta
document.getElementById('form-registrar-falta').addEventListener('submit', function(e) {
    e.preventDefault();

    const matricula = document.getElementById('falta-matricula').value.trim();
    const data = document.getElementById('falta-data').value;
    const motivo = document.getElementById('falta-motivo').value.trim();

    // Validar se a matrícula do aluno existe
    const alunoExiste = alunos.some(a => a.matricula.toLowerCase() === matricula.toLowerCase());
    if (!alunoExiste) {
        alert("Atenção: A matrícula informada não pertence a nenhum aluno cadastrado!");
        return;
    }

    faltas.push({ matricula, data, motivo });
    renderizarFaltas();
    atualizarDashboard();

    this.reset();
    alert("Falta registrada com sucesso!");
});

// Buscar Faltas por Matrícula
document.getElementById('btn-buscar-falta').addEventListener('click', function() {
    const termo = document.getElementById('busca-falta-input').value.trim().toLowerCase();
    if (!termo) {
        renderizarFaltas();
        return;
    }

    const filtradas = faltas.filter(f => f.matricula.toLowerCase().includes(termo));
    renderizarFaltas(filtradas);
});

// Limpar Busca de Faltas
document.getElementById('btn-limpar-busca-falta').addEventListener('click', function() {
    document.getElementById('busca-falta-input').value = '';
    renderizarFaltas();
});


// ==========================================
// 7. INICIALIZAÇÃO DO SISTEMA
// ==========================================
function init() {
    renderizarAlunos();
    renderizarProfessores();
    renderizarFaltas();
    atualizarDashboard();
}

// Inicia as renderizações ao carregar
init();