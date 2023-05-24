const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Audrey Tang',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Audrey_tang_089_%2825378300354%29_%28cropped%29.jpg/1200px-Audrey_tang_089_%2825378300354%29_%28cropped%29.jpg',
    minibio: 'Ministra Digital'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)