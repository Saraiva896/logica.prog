/* Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10) 
*/

let n;
let cont = 0;
let multi;

console.log("informe um numero");
n = 5;
console.log(`numero informado: ${n}`);

do{
    multi = n * cont;
    console.log (`${n} x ${cont} = ${multi}`)
 cont = cont + 1; // outras opções: cont += 1, cont ++   
}while(cont <= 10);
