// Exemplo de uma array (vetor) de objetos JS
const produtos = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 1500,
        categoria: "Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        nome: "Camiseta",
        preco: 80,
        categoria: "Roupas",
        imagem: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        nome: "TV",
        preco: 4000,
        categoria: "Eletrônicos",
        imagem: "https://via.placeholder.com/150"
    }
];

console.log(`nome do produto: ${produtos[0].nome} - categoria: ${produtos[0].categoria}`);

// FOR para percorrer o vetor de objetos

console.log("for para percorrer o vetor");
for (let cont = 0; cont < produtos.length; cont++) {
    console.log(`nome do produto: ${produtos[cont].nome} - categoria: ${produtos[cont].categoria}`);
}

// usando o formato destructuring (descontruindo)
console.log("usando o formato destructuring");
const { nome, categoria } = produtos[0]
console.log(`nome do produto: ${nome} - categoria: ${categoria}`);

//Utilizando destructuring em arrays
console.log("Utilizando destructuring em arrays");
function filtrarPorCategoria(categoria) {
    return produtos.filter(
        produto => produto.categoria === categoria
    );
}

const eletronicos =
    filtrarPorCategoria("Eletrônicos");

console.log(eletronicos);

const roupas =
    filtrarPorCategoria("roupas");

console.log(roupas);