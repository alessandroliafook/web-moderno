const pessoa = {
    saudacao: 'Bom dia!',
    // sintaxe es2015 para criar função
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// a função não está mais vinculada ao objeto o que gera um conflito entre
// os paradigmas funcional e OO
const falar = pessoa.falar
falar()

// a função bind realiza o vinculo de escopo entre a função que está chamando 
//ela e o parametro passado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// a chamada anterior não modifica a função base
const falar2 = pessoa.falar
falar2()