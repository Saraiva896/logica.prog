/* Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
da média obtida pelo aluno. */

let nota1, nota2, nota3, nota4, media;

console.log(`informe nota1 ${nota1}`);
console.log(`informe nota2 ${nota2}`);
console.log(`informe nota3 ${nota3}`);
console.log(`informe nota4 ${nota4}`);  

console.log(`notas inseridas: ${nota1} , ${nota2} , ${nota3} , ${nota4}`);

media = (nota1 + nota2 +nota3 + nota4) / 4;

if (media >= 5){
        console.log(`${media}, ALUNO APROVADO`);
}else{
    console.log(`${media}, ALUNO REPROVADO`);
}




