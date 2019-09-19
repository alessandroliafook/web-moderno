function soma1() {

    let soma = 0

    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma1())
console.log(soma1(1))
console.log(soma1(1.1, 2.2, 3.3))

console.log(soma1(1.1, 2.2, 'Teste'))
console.log(soma1('a', 'b', 'c'))