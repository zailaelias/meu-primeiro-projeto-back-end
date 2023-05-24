const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Audrey Tang",
        imagem: "https://www.vodafone-institut.de/wp-content/uploads/2020/01/AudreyTangGemeinfrei_schmal-661x1024.jpg",
        minibio: "Ministra Digital"
    },
    {
        nome: "Iana Chan",
        imagem:"https://www.nexojornal.com.br/incoming/imagens/Favoritos-Iana-Chan/alternates/SQUARE_640/Favoritos%20-%20Iana%20Chan",
        minibio: "Fundadora da Programaria"
    },
    {
        nome: "Nina da Hora",
        imagem: "https://conteudo.imguol.com.br/c/noticias/47/2020/07/12/ana-carolina-da-hora-hackear-o-racismo-1594591816588_v2_4x3.jpg",
        minibio: "Hacker antirracista"
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)