// Função em JS é First-Class Object (Citzens)
// Higher-Order function

// criar de forma literal
// função sempre retorna undefined caso não exista uso da palavra reservada return
// uso de bloco/chaves é obrigatório neste tipo de função
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
// referenciar as funções sem parênteses não as invoca, mas passa sua referência.
const array = [function(a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

// Uma função pode conter/ retornar outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)