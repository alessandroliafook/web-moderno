// let e const
{
    var a = 2 // escopo de arquivo
    let b = 3 // escopo de bloco
}

console.log(a)
// console.log(b) // vai dar erro 

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r" // Caminhando na string como array
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] //ignorando um valor do array
console.log(x, y)

const { idade: i, nome } = {nome: 'Ana', idade: 9} // renomeado o atributo
console.log(i, nome)
