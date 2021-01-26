const gulp = require('gulp')
// Possível importar a biblioteca interna como variável
// const series = gulp.series

const {series, parallel} = require('gulp')

/* É possível criar funções seguindo o modelo arrow */
const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

/* A assinatura deve ter uma função callback que será
    inserida pelo gulp no momento de */
function copiar(cb) {

    console.log('Tareafa de copiar!')
    // define os arquivos que serão objeto de operação
    gulp
        /* É possível passar o caminho dos arquivos de forma individual, 
            listando em um array, ou passar um critério de busca */
        // .src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .src('pastaA/**/*.txt')
        /*permite aplicar transformações nos arquivos que foram passados
            as transformações podem ser encadeadas*/
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

/* Para finalizar a configuração da execução é 
    necessário exportar as funções definidas 
    utilizando o padrão commons do nodeJs.
    A porta de entrada das tasks que devem ser
    executadas é o atributo default, sendo ele
    um requisito da ferramenta */
module.exports.default = series(
    parallel(antes1, antes2), // é possível organizar a execução mesclando parallel e series
    copiar,
    fim)
