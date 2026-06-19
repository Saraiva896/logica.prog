// Desenvolver um programa que apresente todos os números divisíveis por 5 que sejam menores que 50.

console.log("informe um numero divisor;");
let divisor = 5;
let resulfinal;

console.log(`O número inserido foi: ${divisor} `);

for(cont = 1; cont <= 250; cont++){
    resulfinal = cont / divisor;
    if(resulfinal % divisor === 0);{
        console.log(`${cont} % ${divisor} = ${resulfinal}`)
    }
}
//NÃO TERMINADO, O CODIGO DEU CERTO, MAS QUERO MOSTRAR SOMENTE OS NÚMEROS QUE NÃO POSSUI PONTO.
