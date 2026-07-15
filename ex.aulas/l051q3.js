//Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let cont = 15;

while( cont <= 200){
    pot = cont ** 2 //pot é uma variavel referente a potência, e quando eu coloco dois asterísco ( ** ), quero dizer que é elevado ao quadrado.
    console.log(`${cont} elevado ao quadrado é: ${pot}`)
    cont = cont + 1;
}

