let comparaComThis = function(param) {
    console.log(this === param)
}

// criar variáveis dentro de uma função as insere no escopo global
comparaComThis(global)

// considera o contexto léxico e o this se refere ao modulo
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// devido ao contexto léxico a função arrow pertence ao módulo
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this) // modulo atual do código é o this
comparaComThisArrow(module.exports)

// a função bind chamada sobre uma arrow function não modifica sua
// propriedade de contexto léxico
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)