const fs = require('fs')

// __dirname está presente em todos os arquivos do node e
// contem o diretório atual relativo ao arquivo em que é chamado
const caminho = __dirname + '/arquivo.json'

//sincrono... trava o event loop até o final de sua execução
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err === null) {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

const config = require('./arquivo.json')
console.log(config.db)

//leitura de diretório com os arquivos presentes no diretório
fs.readdir(__dirname, (err, arquivos) => {
    if(err === null) {
        console.log('Conteúdo da pasta...')
        console.log(arquivos)
    }
})