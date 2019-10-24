require('./global')

console.log(MinhaApp.saudacao())

// caso o objeto não esteja construido com o freeze, o atributo será modificado
MinhaApp.nome = 'Eita!'

console.log(MinhaApp.nome)