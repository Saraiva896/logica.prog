// declarando um objeto chamado aluno 
let aluno = {
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
if(aluno === true){
    console.log("Situação: ativo");
}else{
    console.log("Situação: Inativo");
}//---------------------------------------
if(aluno.idade < 22){
    console.log("Situação: ativo");
}else{
    console.log("Situação: Inativo");
}

//exemplo notação de colchetes
let propriedade = "nome";
console.log(aluno[propriedade]); // João
//-------------------------------------
console.log(aluno["idade"]); // 20

//declarando novo objeto 
let produto = {
    nome: "notebook",
    preco: 3000
};

console.log(produto);
// modificando o preço do notebook
produto.preco = 2800;
console.log(produto);

//adicionar uma nova propriedade ( uma nova chave )
produto.estoque = 15
console.log(produto);
