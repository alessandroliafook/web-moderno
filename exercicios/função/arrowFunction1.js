let dobro = function(a) {
    return 2 * a
}
console.log(dobro(2))

dobro = (a) => { return 2 * a }
console.log(dobro(2))

dobro = a => 2 * a // return é implícito
console.log(dobro(2))

let ola = function() {
    return 'Olá!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!' // possui um parâmetro

console.log(ola())