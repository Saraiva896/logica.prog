/* Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
valor informado pelo usuário.
*/ 

console.log( "informe um numero:");
let n = 20;
let acum, soma;

console.log(`numero inserido: ${n}`); 
for (let cont = 1; cont <= n; cont = cont + 1){
    acum = n + cont;
    soma = cont + acum;
}
console.log(soma);