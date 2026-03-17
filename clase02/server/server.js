import { timeStamp } from 'node:console'
import http from 'node:http'
import { createServer } from 'node:http'

const PORT = process.env.PORT ?? 8080

//console.log(http)


const server = createServer((req, res)=>{
    //console.log(req)
    //console.log(res)
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    console.log(req.method)
/*     if(req.method === 'GET'){
        res.end(JSON.stringify({mensaje: 'Hola Mundo'}))
    }else {
        res.end(JSON.stringify({mensaje: 'Metodo no soportado'}))
    } */

    if(req.url === '/'){
        res.end(JSON.stringify({mensaje: 'Ruta raiz'}))
    }else {
        res.end(JSON.stringify({mensaje: '404 Not Found'}))
    }
/*     res.end(JSON.stringify({mensaje: 'Servidor basico con ES Modules (ESM)',
        ruta: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    })) */

})

server.listen(PORT, ()=>{
    console.log('Servidor corriendo en puerto ' + PORT)
})
