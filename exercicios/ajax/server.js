const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const multer = require('multer')

let id = 0

// Configuração do armazenamento
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) return res.end('Ocorreu um erro.')

        res.end('Concluído com sucesso.')
    })
})

/* Necessário ter o body-parser configurado para
    possibilitar a interpretação dos dados que são 
    recebidos da requisição*/
app.post('/formulario', (req, res) => {

    res.send({
        ...req.body,
        id: ++id
    })
})

app.get('/parOuImpar', (req, res) => {
    /* formas de realizar a leitura de dados recebidos
        - req.body (Nesse caso a informação está no corpo da requisição)
        - req.query (Nesse caso a url deve conter a informação = /parOuImpar?numero=3)
        - req.params (Nesse caso a url deve conter a informação = /parOuImpar/:numero)
    */
    const par = parseInt(req.query.numero) % 2 == 0

    res.send({
        resultado: par ? 'par' : 'impar'
    })

})

// configuração de endpoint para teste
// app.get('/teste', (req, resp) => resp.send('Ok'))

app.listen(8080, () => console.log('Executando...'))