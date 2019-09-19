console.log(soma(3, 4))

// function declaration
// A única que pode ser chamada no código antes da declaração
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression
// O nome da função aparece no stack de erro
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))