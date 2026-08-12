/* Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
das 5 pessoas cadastradas.
*/

let pessoas = [
    {nome: "ana", profissao: "odontologia", cadastro: true},
    {nome: "paulo", profissao: "engenharia cicil", cadastro: false},
    {nome: "carol", profissao: "biologia", cadastro: true},
    {nome: "beatriz", profissao: "arquitetura", cadastro: false},
    {nome: "luiz", profissao: "dentista", cadastro: true}
];

// console.log(pessoas);

// console.log(`a primeira pessoa cadastrada é: ${pessoas[0].nome}`);

for(let cont = 0; cont < pessoas.length; cont++){
    console.log(`O nome do canditado é: ${pessoas[cont].nome}`);
    console.log(`profissão do canditado: ${pessoas[cont].profissao}`);
    if(pessoas[cont].cadastro === true){
        console.log("Situação do canditado: CADASTRADO\n");
    }else{
        console.log("Situação do canditado: NÃO ESTÁ CADASTRADO!\n");
    }
}