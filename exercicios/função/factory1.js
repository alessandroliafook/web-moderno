// criação basica de objeto
const prod1 = {
    nome: '...',
    preco: 45
}

// função factory
// cria novo objeto a cada chamada da função
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())