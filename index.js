const express = require('express')
const app = express()
const articles = require('./articles.json')

// Middleware
app.use(express.json())

app.get('/articles', (req,res) => {
    res.status(200).json(articles)
})

app.get('/articles/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const article = articles.find(article => article.id === id)
    res.status(200).json(article)
})

app.post('/articles', (req,res) => {
    articles.push(req.body)
    res.status(200).json(articles)
})

app.put('/articles/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let article = articles.find(article => article.id === id)
    article.name =req.body.name,
        article.city =req.body.city,
        article.type =req.body.type,
        res.status(200).json(article)
})

app.delete('/articles/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let article = articles.find(article => article.id === id)
    articles.splice(articles.indexOf(article),1)
    res.status(200).json(articles)
})

app.listen(8090, () => {
    console.log("Serveur à l'écoute")
})
