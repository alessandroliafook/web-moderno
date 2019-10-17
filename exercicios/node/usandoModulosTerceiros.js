// segue uma ordem de busca na hora do import
// primeiro realiza busca local depois busca
// no diretório node_modules e depois vai 
// subindo na hierarquia de diretórios
const _ = require('lodash')

setInterval(() => console.log(_.random(500, 600)), 2000)