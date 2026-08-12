/*Desenvolver um programa que mostre o menu de opções da tabela abaixo e peça o código desejado. Mostre
como resposta uma mensagem confirmando a escolha do usuário, ou que o número digitado não existe no
menu de opções.
Código Opção
1 Incluir
2 Alterar
3 Excluir
4 Pesquisar
5 Sair */
let cod;

console.log("menu de opções:");
console.log("codigo de opção");
console.log("incluir");
console.log("alterar");
console.log("excluir");
console.log("pesquisar");
console.log("sair");
console.log("informe o código referente a ação desejada");

cod = 9;
console.log(`codigo inserido: ${cod}`);

switch(cod){
    case 1:
        console.log("você selecionou 1 - Incluir");
        break;
    case 2:
        console.log("você selecionou 2 - Alterar");
        break;
    case 3:
        console.log("você selecionou 3 - Excluir");
        break;
    case 4:
        console.log("você selecionou 4 - Pesquisar");
        break;
    case 5:
        console.log("você selecionou 5- Sair");
        break;
    default: 
    console.log("outra opção");
}