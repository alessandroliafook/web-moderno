const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // define se o atributo vai ser listado na função keys
    writable: false, // define se o valor do atributo pode ser modificado após a execução da função
    value: '01/01/2019' // define o valor atribuído ao objeto
})

pessoa.dataNascimento = '01/01/2017'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAscript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
// sobrescreve valor dos atributos na ordem que os objetos estiverem nos parametros
const obj = Object.assign(dest, o1, o2) 
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

