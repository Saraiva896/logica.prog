// 1. Estes são os dados brutos recebidos de uma 'API' de músicas.
// Note que estão no formato JSON (JavaScript Object Notation).
const dadosRecebidosJSON = `[
    { "id": 1, "titulo": "Blinding Lights", "artista": "The Weeknd", "genero": "Pop" },
    { "id": 2, "titulo": "Smells Like Teen Spirit", "artista": "Nirvana", "genero": "Rock" },
    { "id": 3, "titulo": "Levitating", "artista": "Dua Lipa", "genero": "Pop" } 
]`;

// A partir daqui, siga o passo a passo da atividade!

// Etapa 1 preparando os dados (JSON)

const minhaplaylist = JSON.parse(dadosRecebidosJSON); // conversão de JSON para JS
console.log("--- Etapa 1 playlist original");
console.log(minhaplaylist);

// Etapa 2 - adicionando musicas Spread operator)
const playlistAtualizada = [
    ...minhaplaylist,
    {id: 4, titulo: "Oceano", artista: "Djavan", genero: "MPB"},
];
console.log(playlistAtualizada);

// Etapa 3 extraindo dados com elegância (destructuring)

const { titulo, artista } = playlistAtualizada[0]
console.log("--- Etapa 3 extraindo dados com elegância (destructuring");
console.log(`tocando agora ${titulo} do artista ${artista}`);

// Etapa 4 - Remixando uma música (Spread em objetos)
const musicRemix = {
    ...playlistAtualizada[1],
    genero: "Eletrônica", // sobrescreve a propriedade existente
    versao: "Remix", // cria uma nova propriedade
};

console.log("... Remixando uma música (Spread em objetos)---");
console.log(musicRemix);

// Etapa 5: Funções de Catálogo (Listar e Filtrar)

// 5.1 - função que lista todas as músicas

function listarMusicas(lista){
    console.log("\n--- Etapa 5: listando todas as músicas ---");
    lista.forEach((musica) => {
    console.log(`Música: ${musica.titulo} - Artista: ${musica.artista}`);
    })
}

// 5.2 função que filtra por gênero

function filtrarPorGenero(lista, generoBuscado){
    return lista.filter((musica) => musica.genero === generoBuscado);

}

// 5.3 - executando as funções 
listarMusicas(playlistAtualizada) // chamada da função da Atividade 5.1 

// executando a função da atividade 5.2
const musicaPop = filtrarPorGenero(playlistAtualizada, "Pop");
console.log("\n--- Etapa 5: Filtrando músicas Pop ---");
console.log(musicaPop);