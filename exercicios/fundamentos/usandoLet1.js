let numero = 1

{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)


// prioriza o escopo mais próximo
let num = 1

{
    let num2 = 2
    console.log('dentro = ', num)
}

console.log('fora = ', num)