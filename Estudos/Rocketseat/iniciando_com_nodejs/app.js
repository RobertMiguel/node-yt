const express = require("express")
const { randomUUID } = require("crypto")
const { request } = require("http")
const app = express()

app.use(express.json)

const products = []

/* 
    POST => inserir dados
    GET => Buscar um/mais dados
    PUT => Alterar dados
    DELETE => Remover dados
*/

app.post("/products", (req,res)=> {

    const product = { name, price, id : randomUUID()}
    

    const {  name, price } = req.body
    products.push(product)
    console.log(body)
    return res.json(product)
})

app.get("/products", (req, res)=> {
    return res.json(products)
})

app.get("/producst/:id", (req,res)=> {
    const {id} = req.params
    const product = products.find(product => product.id === id)
    return res.json()
})

app.put("/products/:id",(req,res)=> {
    const { id } = req.params
    const { name, price} = req.body

    const productIndex = products.findIndex(product=> product === product.id)

    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return res.json({ message : "Produto alterado com sucesso" })
})

app.delete("/products/:id", (req,res)=> {
    const { id } = req.params
    const productIndex = products.findIndex(product=> product === product.id)
    products.splice(productIndex,1)
    return res.json("Produto removido com sucesso")
})

app.listen(8002, ()=> console.log("Servidor rodando na porta 8002"))
