// Sistema de modulas do CommonsJs
// const Pessoa = require('./pessoa')

// Sistema de modulos do EcmaScripta
import Pessoa from './pessoa'
import './modulos/moduloA'

/* ele irá procurar o arquivo index.js 
dentro do diretório ./assets para realizar 
o carregamento */
import './assets' 

const atendente = new Pessoa
console.log(atendente.cumprimentar())