const fs = require('fs')

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//app.use(bodyParser.json()) // recebe um JSON no body da requisição
app.use(bodyParser.urlencoded({extended: true})) // trata o body com urlencoded

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {

//    const produto = req.body // aproveitar JSON do body
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    } // urlenconded de tratamento
    console.log(produto)

    res.send(bancoDeDados.salvarProduto(produto))
})

app.put('/produtos/:id', (req, res, next) => {

    //    const produto = req.body // aproveitar JSON do body
        const produto = {
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        } // urlenconded de tratamento

        console.log(produto)
    
        res.send(bancoDeDados.salvarProduto(produto))
    })

app.delete('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.excluirProduto(req.params.id))
})

app.listen(porta, () => console.log(`Servidor está executando na porta ${porta}.`))