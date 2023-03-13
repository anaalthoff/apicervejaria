const express = require('express')
const bodyParser = require('body-parser')
const database = require('./banco')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/buscar-nome/:nome', (req, res) => {
    const nome = req.params.nome
    // 'resultado' é necessário quando pegar infos, quando envia, não precisa
    database.query("SELECT * FROM cervejaria WHERE nome = $1", [nome]).then((resultado) => {
        res.status(200).send(resultado.rows[0])
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
});

app.get('/buscar-nac/:nacionalidade', (req, res) => {
    const nacionalidade = req.params.nacionalidade
    database.query("SELECT * FROM cervejaria WHERE nacionalidade = $1", [nacionalidade]).then((resultado) => {
        res.status(200).send(resultado.rows)
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/maior-abv', (req, res) => {
    database.query("SELECT * FROM cervejaria ORDER BY abv DESC").then((resultado) => {
        res.status(200).send(resultado.rows)
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/buscar-tipo/:tipo', (req, res) => {
    const tipo = req.params.tipo
    database.query("SELECT * FROM cervejaria WHERE tipo = $1", [tipo]).then((resultado) => {
        res.status(200).send(resultado.rows)
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.get('/buscar-nome-parcial/:nome', (req, res) => {
    const nome = "%" + req.params.nome + "%"
    database.query("SELECT * FROM cervejaria WHERE nome LIKE $1", [nome]).then((resultado) => {
        res.status(200).send(resultado.rows)
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}.`)
})