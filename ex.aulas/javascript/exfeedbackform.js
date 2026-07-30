// PONTO DE PARTIDA - Seleção dos elementos do HTML
const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");
// O document.getElementById seleciona o elemento que ele quer mexer, 
// que no caso é o "form-feedback que é a div que foi declarada no HTML"

// SEU CÓDIGO COMEÇA AQUI:
console.log("123 testando js");

// Etapa 1 Intercepitando envio online
form.addEventListener("submit",function(event){
    event.preventDefault(); // impede o recarregamento da página

    // Etapa 2 - Pegando os valores digitados 
    const nomeDigitado = inputNome.Value.trim(); 
    const comentarioDigitado = inputComentario.value.trim();
    // console.log(nomeDigitado);
    // o trim No JavaScript, 
    // o método trim() serve para remover todos os espaços em branco do início e do fim de uma string,

    // Etapa 3 - criando a validação
    if(nomeDigitado === "" || comentarioDigitado === ""){
        // regra de erro
        // etapa 4 - feedback de erro
        mensagem.textContent = "Erro: Preencha todos os campos";
        mensagem.style.color = "red";
    }else{
        // regra de sucesso
        mensagem.textContent = "Feedback enviado com sucesso!";
        mensagem.style.color = "green";
    }

    // Etapa 5 - Renderizando o novo item na tela
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeDigitado + " disse " + comentarioDigitado;
    listaComentarios.appendChild(novoItem);

});