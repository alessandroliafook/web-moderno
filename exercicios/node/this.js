console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// o this muda dentro da função, pois ele passa a apontar para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()