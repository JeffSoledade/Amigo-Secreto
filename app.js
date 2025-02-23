// array para armazenar nomes.
let nomes = [];
// Função do botão adicionar.
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nomeAmigo = inputNome.value;

// Confirmar que campo não está vazio.
    if (inputNome.value.length == 0) {
        alert('[ERRO] Digite o nome de um amigo.');
        return;
    } 
 
// Confirmar que campo não está duplicado.
    if (nomes.includes(nomeAmigo)) {
        inputNome.value = "";
        alert(`O nome ${nomeAmigo} já foi adicionado à lista.`);
        return;
    }

// adicionar amigo à array.
    nomes.push(nomeAmigo);

// Limpar input.
    inputNome.value = "";
    console.log(nomes);

// Função para atualizar a lista.
    mostrarLista();
}

// Função para mostrar a lista na interface.
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');

// Limpar lista.
    lista.innerHTML = "";

// Loop For
    for(let add = 0; add < nomes.length; add++) {
        const msg = document.createElement('msg');
        msg.textContent = " * " + nomes[add];
        lista.appendChild(msg)
    }
}
// Função para sortear o amigo secreto.
function sortearAmigo() {
// verificar se há amigos na lista.
    if(nomes.length < 2 ) {
        alert('Acrescente pelo menos 2 amigos para sortear.');
        return;
    }else{
        let numAleatorio = Math.floor(Math.random() * nomes.length);
        let amigoSorteado = nomes[numAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
    }
}