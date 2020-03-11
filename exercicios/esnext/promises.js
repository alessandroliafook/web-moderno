function falarDepoisDe(segundos, frase) {
    // resolve sucesso na promessa
    // reject erro na promessa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // apenas considera o 1 parametro, caso deseje passar mais de 1
            // deve utilizar um objeto ou outra estrutura de dados
            resolve(frase, 'abc') 
        }, segundos * 1000)
    })
}

// encadear os then faz com que a saida da anterior seja a entrada da próxima
falarDepoisDe(3, 'Que legal!')
    .then((frase, abc) => {
        console.log(abc) // valor indefinido pois a função retornar apenas a 1 variável
        return frase.concat('?!?')
    })
    .then(outraFrase => console.log(outraFrase))
    // tratar o caso do reject, se não existir vai lançar exceção
    .catch(e => console.log(e)) 