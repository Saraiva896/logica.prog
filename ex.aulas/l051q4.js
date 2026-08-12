/* Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
+ 97 + 98 + 99 + 100)
*/

let cont = 1;
let acum = 0; // acumulador começa valendo ZERO, para contas de soma e subtração.

while( cont <= 100){

    acum = acum + cont;
    cont = cont + 1;
}
 console.log(`a soma dos valores de 1 a 100 é: ${acum}`);