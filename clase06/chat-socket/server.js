import express from "express";
import { createServer } from "http";
import { Server } from "socket.io"

const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static("public"))

// Desarrollo de socket.io

io.on("connection", (socket) => {
    console.log("🟢 Cliente conectado", socket.id)

    socket.on("mensaje", (data)=> {
        if(!data.texto.trim()) return;
        io.emit("mensaje", data)
    })

    socket.on("disconnect", () => {
        console.log("🔴 Cliente desconectado")
    })
})


httpServer.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`)
})
