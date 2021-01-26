const gulp = require('gulp')
const parallel = gulp.parallel
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(uglifycss({'uglyComments': true}))
                .pipe(concat('estilo.min.css'))
                .pipe(gulp.dest('build/css'))
}

function moveHTML(){
    return gulp.src('src/**/*.html')
                .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, moveHTML)