function real(partes, ...valores) {
    let resultado = []

    valores.forEach((valor, indice) => {

        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`

        resultado.push(partes[indice], valor)
    })

    if(partes.length > valores.length)
        resultado.push(partes.slice((valores.length), partes.length))

    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)