const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    //console.log(req)
    if(req.url === "/"){
        res.end("Home")
    }else if(req.url === "/notas"){
        const data = fs.readFileSync('notas.json', 'utf-8')
        res.end(data);
    }else {
        res.end("404 Not Found")
    }
})

//console.log(server)


server.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto ')
});
