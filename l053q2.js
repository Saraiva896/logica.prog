/* Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
valor informado pelo usuário.
*/
let n = 3;
let acum, soma;

for (let cont = 1; cont <= 20; cont = cont + 1){
    acum = n + cont;
    soma = cont + acum;
}
console.log(soma);