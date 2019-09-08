// novo recurso ES 2015
// Desestruturando Objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)

const { nome, idade } = pessoa

console.log(pessoa)
console.log(nome, idade)

const { nome: n, idade: i } = pessoa

console.log(pessoa)
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const{conta: {ag, num}} = pessoa // Erro! Não é possível acessar attr de um objeto undefined ou null