// É criado com um objeto padrão
console.log(module.exports)

console.log(module.exports === this)
// o objeto exports tem a referência inicial para o objeto do module.exports
console.log(module.exports === exports) 

this.a = 1
exports.b = 2
module.exports.c = 3

// Ao modificar a referência do exports para o null a comparação não é mais válida
exports = null

// portanto o objeto module.exports não sofre alteração em razão da atribuição
console.log(module.exports)

console.log(module.exports === exports)

exports = { nome: 'Teste' }
console.log(module.exports === exports)