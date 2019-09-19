// Closure é o escopo criado quando a função é criada
// Esse escopo permite a função acessar variáveis externas a função

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())