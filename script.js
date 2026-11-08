
/* =========================================
   CADASTRO DAS CIDADES DE ASMARIA
========================================= */

const cidades = [
    {
        id: "terhal",
        nome: "Terhal",
        x: 17.6,
        y: 19.5,
        imagem: "assets/cidades/terhal.jpg",
        descricao: "Adicione aqui a descrição de Terhal: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "aethergard",
        nome: "Aethergard",
        x: 43.2,
        y: 20.1,
        imagem: "assets/cidades/aethergard.jpg",
        descricao: "Adicione aqui a descrição de Aethergard: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "skyharzad",
        nome: "Skyharzad",
        x: 60.0,
        y: 9.3,
        imagem: "assets/cidades/skyharzad.jpg",
        descricao: "Suspensa entre as nuvens, Skyharzad é uma das cidades mais extraordinárias de Asmaria. Conhecida como O Porto das Mil Ilhas, a cidade se estende por dezenas de ilhas flutuantes de diferentes tamanhos, que pairam sobre um imenso abismo de nuvens e correntes de vento. Algumas abrigam bairros inteiros, outras são cobertas por florestas, construções antigas, templos e pequenas comunidades isoladas."
    },
    {
        id: "alcopa",
        nome: "Alcopa",
        x: 45.0,
        y: 36.9,
        imagem: "assets/cidades/alcopa.jpg",
        descricao: "Adicione aqui a descrição de Alcopa: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "lavander",
        nome: "Lavander",
        x: 82.5,
        y: 33.4,
        imagem: "assets/cidades/lavander.jpg",
        descricao: "Adicione aqui a descrição de Lavander: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "eldora",
        nome: "Eldora",
        x: 27.6,
        y: 61.4,
        imagem: "assets/cidades/eldora.jpg",
        descricao: "Adicione aqui a descrição de Eldora: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "cidade-do-sul",
        nome: "Cidade do Sul",
        x: 31.0,
        y: 72.7,
        imagem: "assets/cidades/cidade-do-sul.jpg",
        descricao: "O nome desta localidade está pouco legível no mapa original. Altere o nome e a descrição no arquivo script.js."
    },
    {
        id: "agrabel",
        nome: "Agrabel",
        x: 77.6,
        y: 54.7,
        imagem: "assets/cidades/agrabel.jpg",
        descricao: "Adicione aqui a descrição de Agrabel: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "ehat",
        nome: "Ehat",
        x: 62.8,
        y: 74.0,
        imagem: "assets/cidades/ehat.jpg",
        descricao: "Adicione aqui a descrição desta cidade. Confirme a grafia do nome no mapa original."
    },
    {
        id: "zaphira",
        nome: "Zaphira",
        x: 92.3,
        y: 81.9,
        imagem: "assets/cidades/zaphira.jpg",
        descricao: "Adicione aqui a descrição de Zaphira: sua história, população, governo, cultura e pontos de interesse."
    },
    {
        id: "ilha prisão",
        nome: "Ilha prisão",
        x: 17.9,
        y: 86.5,
        imagem: "assets/cidades/ilha-da-rainha-da-morte.jpg",
        descricao: "Adicione aqui a descrição da ilha, seus perigos, habitantes e lendas."
    }
];


/* =========================================
   CADASTRO DE NPCs DE ASMARIA
========================================= */

const npcs = {

    terhal: [],

    aethergard: [],

    skyharzad: [
        {
            nome: "Miriel",
            cargo: "Rainha de Skyharzad",
            status: "Vivo",
            descricao: "Conhecida como Mimi, assumiu o trono de Skyharzad após a queda do antigo regente."
        },
        {
            nome: "Antigo Regente",
            cargo: "Antigo governante de Skyharzad",
            status: "Morto",
            descricao: "O regente que governava a cidade sob influência de um poderoso mago."
        }
    ],

    alcopa: [],

    lavander: [],

    eldora: [],

    "cidade-do-sul": [],

    agrabel: [],

    ehat: [],

    zaphira: [],

    "ilha prisão": []

};


/* =========================================
   CADASTRO DE MISSÕES DAS GUILDAS
========================================= */

const missoes = {

    terhal: [],

    aethergard: [],

    skyharzad: [
        {
            nome: "Investigação nas Ilhas Flutuantes",
            rank: "D",
            descricao: "Investigar relatos de criaturas estranhas em uma ilha próxima.",
            recompensa: 150,
            status: "Disponível"
        },
        {
            nome: "O Dragão Adormecido",
            rank: "A",
            descricao: "Investigar os acontecimentos envolvendo o dragão que entrou em torpor na cidade.",
            recompensa: 5000,
            status: "Disponível"
        }
    ],

    alcopa: [],

    lavander: [],

    eldora: [],

    "cidade-do-sul": [],

    agrabel: [],

    ehat: [],

    zaphira: [],

    "ilha prisão": []

};


/* =========================================
   ELEMENTOS DO MAPA
========================================= */

const marcadores = document.querySelector("#marcadores");
const listaCidades = document.querySelector("#lista-cidades");
const modal = document.querySelector("#janela-cidade");

const titulo = document.querySelector("#cidade-titulo");
const descricao = document.querySelector("#cidade-descricao");
const imagem = document.querySelector("#cidade-imagem");


/* =========================================
   ABRIR INFORMAÇÕES DA CIDADE
========================================= */

function abrirCidade(cidade) {

    titulo.textContent = cidade.nome;

    descricao.textContent = cidade.descricao;

    imagem.src = cidade.imagem;

    imagem.alt = `Imagem de ${cidade.nome}`;

    document.querySelector("#resumo-cidade").textContent =
        cidade.descricao;

    carregarNPCs(cidade.id);

    carregarMissoes(cidade.id);

    selecionarAba("informacoes");

    modal.showModal();
}


/* =========================================
   CRIAR MARCADORES E LISTA DE CIDADES
========================================= */

cidades.forEach((cidade) => {

    // Marcador no mapa

    const botaoMapa = document.createElement("button");

    botaoMapa.type = "button";

    botaoMapa.className = "marcador";

    botaoMapa.style.left = `${cidade.x}%`;

    botaoMapa.style.top = `${cidade.y}%`;

    botaoMapa.dataset.nome = cidade.nome;

    botaoMapa.setAttribute(
        "aria-label",
        `Abrir informações de ${cidade.nome}`
    );

    const miniatura = document.createElement("img");

    miniatura.src = cidade.imagem;

    miniatura.alt = "";

    botaoMapa.appendChild(miniatura);

    botaoMapa.addEventListener("click", () => {
        abrirCidade(cidade);
    });

    marcadores.appendChild(botaoMapa);


    // Cidade na lista lateral

    const botaoLista = document.createElement("button");

    botaoLista.type = "button";

    botaoLista.className = "item-cidade";

    const imagemLista = document.createElement("img");

    imagemLista.src = cidade.imagem;

    imagemLista.alt = "";

    const nomeLista = document.createElement("span");

    nomeLista.textContent = cidade.nome;

    botaoLista.append(imagemLista, nomeLista);

    botaoLista.addEventListener("click", () => {

        abrirCidade(cidade);

        document
            .querySelector(".painel-mapa")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });

    listaCidades.appendChild(botaoLista);

});


/* =========================================
   FECHAR JANELA DA CIDADE
========================================= */

document
    .querySelector("#fechar-modal")
    .addEventListener("click", () => {

        modal.close();

    });


// Clicar no fundo escuro fecha a janela

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        modal.close();
    }

});


/* =========================================
   NAVEGAÇÃO ENTRE ABAS
========================================= */

function selecionarAba(nomeAba) {

    document.querySelectorAll(".conteudo-aba")
        .forEach(aba => {

            aba.hidden = true;

        });

    document.querySelectorAll(".botao-aba")
        .forEach(botao => {

            botao.classList.remove("ativo");

        });

    const conteudo = document.querySelector(
        `#aba-${nomeAba}`
    );

    const botao = document.querySelector(
        `.botao-aba[data-aba="${nomeAba}"]`
    );

    if (conteudo && botao) {

        conteudo.hidden = false;

        botao.classList.add("ativo");

    }

}


/* =========================================
   EVENTOS DOS BOTÕES DAS ABAS
========================================= */

document.querySelectorAll(".botao-aba")
    .forEach(botao => {

        botao.addEventListener("click", () => {

            selecionarAba(botao.dataset.aba);

        });

    });


/* =========================================
   CARREGAR NPCs
========================================= */

function carregarNPCs(idCidade) {

    const lista = document.querySelector("#lista-npcs");

    lista.innerHTML = "";

    const personagens = npcs[idCidade] || [];

    if (personagens.length === 0) {

        lista.textContent =
            "Nenhum personagem cadastrado nesta cidade.";

        return;

    }

    personagens.forEach(npc => {

        const caixa = document.createElement("article");

        caixa.className = "card-npc";

        const nome = document.createElement("h4");

        nome.textContent = npc.nome;

        const cargo = document.createElement("p");

        cargo.textContent = npc.cargo;

        const status = document.createElement("span");

        status.className =
            "status-npc " + npc.status.toLowerCase();

        status.textContent = npc.status;

        const descricao = document.createElement("p");

        descricao.textContent = npc.descricao;

        caixa.append(
            nome,
            cargo,
            status,
            descricao
        );

        lista.appendChild(caixa);

    });

}


/* =========================================
   CARREGAR MISSÕES
========================================= */

function carregarMissoes(idCidade) {

    const lista = document.querySelector("#lista-missoes");

    lista.innerHTML = "";

    const trabalhos = missoes[idCidade] || [];

    if (trabalhos.length === 0) {

        lista.textContent =
            "Não existem missões disponíveis nesta guilda.";

        return;

    }

    trabalhos.forEach(missao => {

        const caixa = document.createElement("article");

        caixa.className = "card-missao";

        const nome = document.createElement("h4");

        nome.textContent = missao.nome;

        const rank = document.createElement("span");

        rank.className =
            "rank rank-" + missao.rank.toLowerCase();

        rank.textContent = "Rank " + missao.rank;

        const descricao = document.createElement("p");

        descricao.textContent = missao.descricao;

        const recompensa = document.createElement("p");

        recompensa.textContent =
            "Recompensa: " + missao.recompensa + " PO";

        const status = document.createElement("p");

        status.textContent = "Status: " + missao.status;

        caixa.append(
            nome,
            rank,
            descricao,
            recompensa,
            status
        );

        lista.appendChild(caixa);

    });

}


/* =========================================
   LIVRO DE VISITANTES DE ASMARIA
========================================= */

// Recupera as mensagens salvas no navegador

let mensagens = JSON.parse(
    localStorage.getItem("livroAsmaria")
) || [];


/* =========================================
   PUBLICAR MENSAGEM
========================================= */

function salvarMensagem(nome, texto) {

    if (!nome.trim() || !texto.trim()) {

        alert("Preencha seu nome e sua mensagem!");

        return;

    }

    mensagens.push({

        id: Date.now(),

        nome: nome.trim(),

        texto: texto.trim()

    });

    atualizarMensagens();

}


/* =========================================
   EDITAR MENSAGEM
========================================= */

function editarMensagem(id) {

    const mensagem = mensagens.find(
        item => item.id === id
    );

    if (!mensagem) return;

    const novoTexto = prompt(
        "Edite sua mensagem:",
        mensagem.texto
    );

    if (novoTexto !== null && novoTexto.trim() !== "") {

        mensagem.texto = novoTexto.trim();

        atualizarMensagens();

    }

}


/* =========================================
   APAGAR MENSAGEM
========================================= */

function apagarMensagem(id) {

    if (!confirm("Deseja apagar esta mensagem?")) {

        return;

    }

    mensagens = mensagens.filter(
        item => item.id !== id
    );

    atualizarMensagens();

}


/* =========================================
   ATUALIZAR LISTA DE MENSAGENS
========================================= */

function atualizarMensagens() {

    // Salva no armazenamento local

    localStorage.setItem(
        "livroAsmaria",
        JSON.stringify(mensagens)
    );

    const lista = document.querySelector("#lista-mensagens");

    if (!lista) return;

    lista.innerHTML = "";

    mensagens.forEach(item => {

        const caixa = document.createElement("div");

        caixa.className = "mensagem-visitante";

        const nome = document.createElement("h3");

        nome.textContent = item.nome;

        const texto = document.createElement("p");

        texto.textContent = item.texto;

        const editar = document.createElement("button");

        editar.type = "button";

        editar.textContent = "Editar";

        editar.addEventListener("click", () => {

            editarMensagem(item.id);

        });

        const apagar = document.createElement("button");

        apagar.type = "button";

        apagar.textContent = "Apagar";

        apagar.addEventListener("click", () => {

            apagarMensagem(item.id);

        });

        caixa.append(
            nome,
            texto,
            editar,
            apagar
        );

        lista.appendChild(caixa);

    });

}


/* =========================================
   FORMULÁRIO DO LIVRO DE VISITANTES
========================================= */

document
    .querySelector("#form-mensagem")
    ?.addEventListener("submit", evento => {

        evento.preventDefault();

        const nome = document.querySelector("#nome-visitante");

        const texto = document.querySelector("#texto-mensagem");

        salvarMensagem(nome.value, texto.value);

        nome.value = "";

        texto.value = "";

    });


// Carrega as mensagens quando a página abre

atualizarMensagens();
