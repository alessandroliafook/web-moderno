const tecnologias = new Map();
tecnologias.set('react', {framework: false}) // método para inserir um valor no mapa
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react')) //método para recuperar o valor correspondente a chave

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]) // cada lista interna representa um registro no map [chave, valor]

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
}) // callback para percorrer os elementos do mapa

console.log(chavesVariadas.has(123)) // verificar se uma chave está presente no mapa

// método para remover um elemento do mapa pela chave 
// retorna booleano representando o sucesso da operação
chavesVariadas.delete(123)

console.log(chavesVariadas.has(123)) // verificar se uma chave está presente no mapa

console.log(chavesVariadas.size) // método que recupera o tamanho do mapa

// a chave deve ser única, logo a inserção um valor diferente com a mesma chave
// resulta em substituição do mais antigo pelo mais recente
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
// porém ela aceita repetição nos valores, permitindo que chaves diferentes tenham
// valores iguais
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)