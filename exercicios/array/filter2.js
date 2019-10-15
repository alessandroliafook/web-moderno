Array.prototype.filter2 = function(callback, thisArg) {

    newArray = []

    for(let i = 0; i < this.length; i++) {

        if(thisArg != null && 
            callback.apply(thisArg))
            newArray.push(this[i])

        else if(callback(this[i], i, this, thisArg))
            newArray.push(this[i])
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

const ehFragil = produto => produto.fragil
const ehCaro = produto => produto.preco >= 500

const resultado = produtos.filter2(ehFragil).filter2(ehCaro)
console.log(resultado)