// material 07 - página 16

//declarando um vetor (ou array) de objetos "alunos"

let alunos = [
    {nome: "Ana", idade: 18, ativo: true},
    {nome: "Carlos", idade: 22, ativo: false},
    {nome: "Maria", idade: 20, ativo: true}
];

console.log(alunos);

//Acessando pelo índice + propriedade
console.log(`nome do primero aluno: ${alunos[0].nome}\n`);

// percorrendo vetor de objetos com for clássico
for( let cont = 0; cont < alunos.length; cont++){
    console.log(`nome: ${alunos[cont].nome}`);
    console.log(`idade: ${alunos[cont].idade}`);
    console.log(`ativo ${alunos[cont].ativo}\n`);

}

console.log("oi, \ntudo bem com você\n") /* o "\n" é um comando que serve para
 pular linha, funciona como o <br> do html. */

 // percorrendo o vetor de objetos com for of
 for (let aluno of alunos){
    console.log(`nome: ${aluno.nome}`);
    console.log(`idade: ${aluno.idade}`);
    console.log(`ativo: ${aluno.ativo}\n`);
 }