// declarando um objeto chamado aluno EM TYPESCRIPT
// o padrão para testar em typescript use npx tsx e o nome do arquivo.
let aluno: {nome: string; idade: number; ativo: boolean} = {
    nome: "joao",
    idade: 20,
    ativo: true
};

console.log(aluno); // exibe o objeto
//----------------------------------------
console.log(aluno.nome);
//----------------------------------------
console.log(`Nome do aluno: ${aluno.nome}`);
//----------------------------------------
console.log(`idade: ${aluno.idade}`);
//----------------------------------------
console.log(`Situação: ${aluno.ativo}`);
//----------------------------------------
if(aluno.ativo === true){
    console.log("Situação: ativo");
}else{
    console.log("Situação: Inativo");
}//---------------------------------------
if(aluno.idade < 22){
    console.log("Situação: ativo");
}else{
    console.log("Situação: Inativo");
}