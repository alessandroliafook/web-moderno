// Padrão de função construtora de um objeto
function Pessoa(nome) { 
    
    this.nome = nome 

    // O contexto dessa função é o escopo da chamada do construtor
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa('João')
p1.falar()