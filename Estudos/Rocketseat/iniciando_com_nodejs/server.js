const http = require('http')
http.createServer((req,res) => {

    if(req.url === '/produto') {
        res.end(JSON.stringify({
            message : "Roda do Produto"
        }))
    }
    if(req.url === '/usuarios') {
        res.end(JSON.stringify({
            message : "Rota de usuario"
        }))
    }

    res.end(JSON.stringify({
        message : "Rotas"
    }))

}).listen(8002, ()=> console.log("Servidor Rodando"))
