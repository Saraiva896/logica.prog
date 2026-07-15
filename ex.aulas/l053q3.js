/* Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer informado
pelo usuário.
*/

console.log("informe o primeiro fator. (número multilicador)");
let n = 5; // essa variavel irá armazenar o numero multipicador. 
let multi;

for(let cont = 1; cont <= 20; cont++){
    multi = n * cont;
    console.log(`${n} x ${cont} = ${multi}`);
}