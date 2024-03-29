// Object.preventExtensions - não pode adicionar atributos mas pode modificar ou remover
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha escolar branca"
delete produto.tag

console.log(produto)

// Object.seal - não adiciona nem remove atributos, mas pode modificar
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silvia'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = selado + valores constantes
