// console.log(global)
// O freeze é usado para garantir que o objeto não poderá sofrer modificação
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})