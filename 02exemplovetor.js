// ASSUNTO VETORES

// VETOR  COM NOMES DE ALUNOS 
let alunos = ["ana", "bruno", "carlos", "diana"];

console.log(alunos[2]); // carlos

alunos[1] = "pedro"; // aqui foi alterado o nome do vetor na casa 1, de bruno para pedro.
console.log(alunos);

//for para percorrer cada índice doo vetor 
for (let cont = 0; cont < 4; cont++){
    console.log(`aluno(a) ${cont} : ${alunos[cont]}`);
}
//TESTE 2
//for para percorrer cada índice doo vetor 
for (let cont = 0; cont < 4; cont++){
    console.log(`aluno(a) ${cont + 10} : ${alunos[cont]}`); /* NO PRIMEIRO CONT DA LINHA, 
    O +1 NÃO ACRESCENTA DA VARIAVEL, ELE É SÓ PARA EXIBIR A LISTA COMEÇANDO PELO NUMERO 10 ADIANTE.
    */
}

//---------------------------------------------------------------------------------------------
let alunos = ["ana", "bruno", "carlos", "diana"];
let notas = [8.5, 3, 8, 10];

console.log(alunos[2]); // carlos

alunos[1] = "pedro"; // aqui foi alterado o nome do vetor na casa 1, de bruno para pedro.
console.log(alunos);

//for para percorrer cada índice dos vetor alunos
for (let cont = 0; cont < 4; cont++){
    console.log(`aluno(a) ${cont} : ${alunos[cont]}`);
}
 
console.log(notas); // exibindo todas as notas
console.log(notas[2]); // 8

//for para percorrer cada índice dos dois vetores 
for (let cont = 0; cont < 4; cont++){
    console.log(`Nome: ${alunos[cont]} - nota: ${alunos[cont]}`);
}

console.log(alunos.length); // quando eu chamo o ".length", eu estou perguntando qual o tamanho do meu vetor.

for( let cont = 0; cont < alunos.length; cont++){

}

// foreach
