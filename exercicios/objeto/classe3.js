class Pessoa {}
function Constructor() {}

p1 = new Pessoa
p2 = {}
p3 = new Constructor

console.log(typeof p1 === typeof p2)
console.log(typeof p1 === typeof p3)

// Mas a herança funciona de forma diferente, os filhos carregam os atributos dos pais
// como padrão no caso da class, e nos demais isso não acontece