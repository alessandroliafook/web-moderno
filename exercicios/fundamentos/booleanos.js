let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'  ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // avalia o valor da atribuição

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0)) // avalia o valor da atribuição

console.log('para finalizar...')
console.log(('' || null || 0 || 'epa' || 1)) // imprime o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') // avaliar o valor padrão em caso de vazio

nome = ('' || 'Alessandro') // declaração com valor padrão
console.log(nome)