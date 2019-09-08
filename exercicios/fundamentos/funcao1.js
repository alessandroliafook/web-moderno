// Função sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2)
imprimeSoma(2, 10, 4, 5, 6, 7)
imprimeSoma()

// Função com retorno
function soma(a, b = 1) { // atribuindo valor padrão a 'b'
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())