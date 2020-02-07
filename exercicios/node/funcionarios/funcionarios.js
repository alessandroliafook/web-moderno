const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const ehMulher = funcionario => funcionario.genero =='F'
const ehChines = funcionario => funcionario.pais == 'China'
const menorSalario = (funcEscolhido, func) => funcEscolhido.salario < func.salario ? funcEscolhido : func

axios.get(url).then(response => {

    const funcionarios = response.data
    // console.log(funcionarios)

    let desafio = funcionarios
                    .filter(ehMulher)
                    .filter(ehChines)
                    .reduce(menorSalario)
    
    console.log(desafio)
})