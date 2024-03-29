const express = require('express') // biblioteca para tratamento de requisição
const app = express()
const bodyParser = require('body-parser') // biblioteca para tratamento do corpo da requisição


app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns, Usuário Incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, Usuário Alterado!</h1>')
})

app.listen(3003)