/* Desenvolver um programa que pergunte um número. 
Se este número for maior que 20, então ele deverá exibir a
metade deste número, senão, ele deverá exibir o número sem alterações. */

let num, resto;
console.log("informe um numero:");
num = 750; // exemplo de um numero informado pelo usuario
if(num>20){
    resto = num % 4;
    console.log(`O resto de ${num} é ${resto}`);
} else {
    console.log(`O numero inserido foi ${num}`);
}
console.log("FIM DO PROGRAMA");
console.log("informe uma letra");

//comentário realizado 17/06/26