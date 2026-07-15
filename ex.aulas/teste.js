/* Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
ou se o número não corresponde a nenhum dos 12 meses. */

let mes;

console.log("informe um numero de 1 a 12:");

mes = 13;
console.log(`numero informado: ${mes}`);

switch(mes){
    case 1: 
    console.log("você selecionou o mês de: janeiro");
    break;
    case 2:
    console.log("você selecionou o mês de: fevereiro");
    break;
    case 3:
    console.log("você selecionou o mês de: março");
    break;
    case 4:
    console.log("você selecionou o mês de: abril");
    break;
    case 5:
    console.log("você selecionou o mês de: maio");
    break;
    case 6:
    console.log("você selecionou o mês de: junho");
    break;
    case 7:
    console.log("você selecionou o mês de: julho");
    break;
    case 8:
    console.log("você selecionou o mês de: agosto");
    break;
    case 9:
    console.log("você selecionou o mês de: setembro");
    break;
    case 10:
    console.log("você selecionou o mês de: outubro");
    break;
    case 11:
    console.log("você selecionou o mês de: novembro");
    break;
    case 12:
    console.log("você selecionou o mês de: dezembro");
    break;
    default:
    console.log("opção invalida");

}