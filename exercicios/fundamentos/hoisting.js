console.log('a = ', a)
var a = 2 // cria a variável undefined no início do código devido ao hoisting
console.log('a = ', a)

function teste() {
    console.log('a = ', a)
    var a = 3 // cria a variável undefined no início do código
    console.log('a = ', a)
}

teste()

// console.log('a = ', b) // Erro! Gera erro, pois não existe hoisting para let!
var b = 4 // cria a variável undefined no início do código
console.log('a = ', b)