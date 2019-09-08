let valor // não inicializada
console.log(valor)
    // console.log(valor2) // erro de referência pois a variável não foi definida ainda

valor = null
console.log(valor) // ausência de valor, mas foi definida
    // console.log(valor.toString()) // Erro! O null não tem referência então dá erro

const produto = {}
console.log(produto.preco)
    // console.log(produto.preco.a) // Erro! O preco não está definido!

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco // deletando o atributo preço
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)