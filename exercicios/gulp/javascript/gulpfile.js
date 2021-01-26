const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJS(cb) {

    /* A ordem de execução das bibliotecas pode 
        afetar o resultado final.
        É possível definir como retorno a execução
        da função. */
    return gulp
        .src('src/**/*.js')
        /* Configurando o babel */
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        /* É possível capturar eventos e realizar o tratamento */
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

/* Ou definir a chamada da função de callback para 
    notificar o gulp do fim da execução */
function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

/* Pode usar qualquer um dos dois a depender da finalidade da execução */
exports.default = series(transformacaoJS, fim)
// exports.default = parallel(transformacaoJS, fim)