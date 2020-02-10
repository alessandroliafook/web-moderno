const fs = require('fs')

const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos) // Converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {

    // const produto = {
    //     nome: req.body.nome,
    //     preco: req.body.preco
    // }

    // console.log(produto)
    
    // res.send(bancoDeDados.salvarProduto(produto))

    res.send({teste: 'foi'})
})
app.listen(porta, () => console.log(`Servidor está executando na porta ${porta}.`))