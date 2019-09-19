const valor = 'Global'

// contexto léxico mesmo quando usa o bind
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

const obj = { valor: 'Objeto' }

minhaFuncao()
exec()

const funcDeObj = minhaFuncao.bind(obj)
funcDeObj()