// Padrão de criação de classe
class Pessoa {

    constructor(nome) { this.nome = nome }

    // O contexto dessa função é o escopo da chamada do construtor
    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Padrão factory de criação de objeto
const criarPessoa = nome => {
    return {
        // O objeto tem ciência do escopo léxico onde foi declarado!
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = criarPessoa('João')
p2.falar()