// Os dados existem, mas não aparecem na tela (O problema inicial)
const filmes = [
    { id: 1, titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", ano: 2001 },
    { id: 2, titulo: "Matrix", diretor: "Lana e Lilly Wachowski", ano: 1999 },
    { id: 3, titulo: "De Volta para o Futuro", diretor: "Robert Zemeckis", ano: 1985 }
];

// Aplique as soluções necessárias abaixo desta linha!
console.log("inicio da atividade manipulação do DOM");

// etapa 1 selecionando elementos
const container = document.getElementById("lista-filmes");

// etapa 2 - Laço de repetição
filmes.forEach((filmes) => {

    // etapa 3 criando elementos
    const card = document.createElement("div");//cria uma div
    card.classList.add("filmes.card");// inserindo a classe CSS filme-card na div 

    //Etapa 4 - Alterando o conteúdo 
    card.innerHTML = `
            <h3>${filmes.titulo}</h3>
            <p>Diretor: ${filmes.diretor}</p>
            <P>Ano: ${filmes.ano}</p>
    `;

    // Etapa 5 - Inserindo no DOM
    container.appendChild(card);
});//fim do forEach

// Etapa 6 - Manipulando Classes
// querySelector seleciona apenas o primeiro que encontrar
const primeiroFilme = document.querySelector("filme.card");
primeiroFilme.classList.add("destaque");

