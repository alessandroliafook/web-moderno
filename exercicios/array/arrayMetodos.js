const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

let piloto = pilotos.pop() // remove o ultimo, massa quebrou o carro!

console.log(pilotos)
console.log(piloto)

pilotos.push('Verstappen')   // insere no final
console.log(pilotos)

piloto = pilotos.shift() // remove o primeiro
console.log(pilotos)
console.log(piloto)

pilotos.unshift('Hamilton') // insere no inicio
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array no intervalo sem incluir o ultimo
console.log(algunsPilotos2)