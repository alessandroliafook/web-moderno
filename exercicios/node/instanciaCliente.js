
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// chamar a função para garantir o recebimento do objeto
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')() 

contadorA.inic()
contadorA.inic()
console.log(contadorA.valor, contadorB.valor)

contadorC.inic()
console.log(contadorC.valor, contadorD.valor)
