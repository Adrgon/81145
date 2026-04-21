//console.log("Implementando Socket.io")
const socket = io();

const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const chat = document.querySelector("#chat")

const nombre = prompt("Ingrese su nombre")

// enviar mensajes del servidor
btn.addEventListener('click', ()=> {
    const mensaje = input.value;
    if(!mensaje.trim()) return;
    socket.emit('mensaje', {
        usuario: nombre,
        texto: mensaje
    })
    input.value = "";
})
// recibir mensajes del servidor

socket.on("mensaje", (msg)=>{
    const p = document.createElement('p')
    p.textContent = `${msg.usuario}: ${msg.texto}`;
    chat.appendChild(p)
})

socket.on('connect', ()=> {
    console.log("Cliente conectado", socket.id)
})
