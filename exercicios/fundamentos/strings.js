const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Nao gera erro, mas imprime vazio
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substr(1))
console.log(escola.substr(0, 3)) // aberto no inicio e fechado no final

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))