// Criamos um array vazio para armazenar os nomes dos amigos
let amigos = [];

// Criamos a função para adicionar um amigo
function adicionarAmigo() {
    // Capturamos o valor do campo de entrada pelo ID
    let inputNome = document.getElementById("nomeAmigo");
    let nome = inputNome.value.trim(); // Pegamos o valor e removemos espaços extras

    // Validamos se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibimos um alerta se estiver vazio
        return; // Saímos da função sem adicionar o nome
    }

    // Adicionamos o nome ao array de amigos
    amigos.push(nome);
    
    // Exibimos no console para conferência (opcional)
    console.log("Lista de amigos:", amigos);

    // Limpamos o campo de entrada para permitir novos cadastros
    inputNome.value = "";

    // Atualizamos a exibição da lista de amigos
    atualizarListaAmigos();
}

// Criamos a função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    // Obtemos o elemento da lista pelo ID
    let lista = document.getElementById("listaAmigos");
    
    // Limpamos a lista existente para evitar duplicação
    lista.innerHTML = "";

    // Percorremos o array de amigos e criamos elementos <li> para cada nome
    for (let amigo of amigos) {
        let item = document.createElement("li"); // Criamos um novo elemento <li>
        item.textContent = amigo; // Definimos o texto do <li> com o nome do amigo
        lista.appendChild(item); // Adicionamos o <li> à lista
    }
}

// Criamos a função para sortear um amigo aleatório
function sortearAmigo() {
    // Validamos se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    
    // Geramos um índice aleatório com base no tamanho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Pegamos o nome do amigo sorteado
    let amigoSorteado = amigos[indiceSorteado];
    
    // Atualizamos o elemento de resultado no HTML
    let resultado = document.getElementById("resultadoSorteio");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
