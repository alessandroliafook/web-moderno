const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 8.7, bolsista: true}
]

const bolsistas = a => a.bolsista

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

//Desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

const des1 = alunos.map(bolsistas).reduce(todosBolsistas)
const des2 = alunos.map(bolsistas).reduce(algumBolsista)

console.log(des1, des2)