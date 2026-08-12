class Pessoa {
    nome;
    idade;

    // método construct (ajuda a criar objetos)
    constructor(nome, idade){
        this.nome = nome;
        this.idade = nome;
    }

    //método comum
    apresentar(){
        console.log(`Olá! Meu nome é: ${this.nome}!`)
    }
} // fim da classe pessoa

// instanciar objeto usando o construct
let pessoa1 = new Pessoa("Roberto", 33);

console.log(pessoa1);

pessoal.apresentar() // não terminado