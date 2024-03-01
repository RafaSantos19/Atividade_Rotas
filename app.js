const express = require('express')
const app = express()
const port = 8081

app.get("/",(req, res) => {
    res.send("Main")
    console.log("Página principal")
})

app.get("/contato",(req, res) => {
    res.send("Contatos")
})

app.get("/cadastrar",(req, res) => {
    res.send("Página de cadastro")
})

app.get("/produto/:item/:quantidade",(req, res) => {
    res.send(`Página de produtos: ${req.params.item} | Qauntidade: ${req.params.item}`)
})

// app.get("/carro/:modelo/:ano/:cor",(req, res) => {
//     res.send(`Página de carros - Modelo: ${req.params.modelo} | Ano: ${req.params.ano} | Cor: ${req.params.cor}`)
// })



app.listen(port,() => {
    console.log(`port: ${port}!`)
})



