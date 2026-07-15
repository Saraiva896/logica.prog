/* Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 0 até 500.
Utilize um laço que varie de 2 em 2. */

let cont = 0;
let acum = 0;

do{
    acum += cont; // acum = acum + cont;
    cont += 2; // cont = cont + 2;
}while(cont <= 500);
console.log(`a soma dos valores pares de 0 a 500 é: ${acum}`);