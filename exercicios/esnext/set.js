const times = new Set()

times.add('Vasco')
// o resultado final irá considerar todas as adições
times.add('São Paulo').add('Palmeiras').add('Corinthians') 
times.add('Flamengo')
times.add('Vasco') // set não admite repetição, logo essa operação não o altera

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // case sensitive
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)