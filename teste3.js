/* Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
nulo.
*/

let num;

console.log("informe um numero:");
num = -1;
console.log("numero informado;");
 
if(num > 0){
    console.log(`${num} é um numero positivo`);
}
else if(num < 0){
    console.log(`${num} é um numero negativo`);
}
else{
    console.log(`${num} é um numero nulo`);
}
