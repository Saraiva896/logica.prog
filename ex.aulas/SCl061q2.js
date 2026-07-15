/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.*/

let sexo;

console.log("informe o seu sexo:")

sexo = masculino;
console.log(`seu sexo é: ${sexo}`);

switch (sexo){
    case masculino:
        console.log("Banheiro masculino à direita");
        break;
    case feminino:
        console.log("Banheiro feminino à esquerda");
        break;
    default:
        console.log("Banheiro Unissex");
}