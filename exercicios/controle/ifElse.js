const imprimeResultado = function(nota) {
    if (nota > 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimeResultado(10)
imprimeResultado(4)
imprimeResultado('Epa!') // Não vai lançar erro, pois a linguagem é fracamente tipada!