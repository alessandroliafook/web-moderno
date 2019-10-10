// pessoa -> 123 (posição de memória) -> {...} atribuição por referência
const pessoa = {nome: 'João'}

// é possível modificar os atributos internos do objeto referenciado
pessoa.nome = 'Pedro' 
console.log(pessoa)

// pessoa <- 456 <- {...} modificar a referência não é possível
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // bloqueia qualquer modificação na referência
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})

pessoaConstante.nome = 'Maria'
pessoaConstante.end = 'Rua ABC'
delete pessoaConstante.nome
console.log(pessoaConstante)
