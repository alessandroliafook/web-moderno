const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//Object.prototype.nome = 'Carro' //é possível modificar o prototype
console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(volvo.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(volvo.__proto__ === ferrari.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)