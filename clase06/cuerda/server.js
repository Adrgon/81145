const http = require('http');
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const { Server } = require('socket.io');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const META = parseInt(process.env.META || '200', 10);

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

/** Desplazamiento de la cuerda respecto al centro (solo servidor). No se envía al cliente. */
let tension = 0;
let estado = 'esperando';
let ganador = null;

/** Estado público: ventaja (lado + puntos) y tensión plana (misma info para el cliente). */
function paqueteEstado() {
  let ventaja = { lado: 'empate', puntos: 0 };
  if (tension < 0) ventaja = { lado: 'rojo', puntos: -tension };
  else if (tension > 0) ventaja = { lado: 'azul', puntos: tension };
  return {
    ventaja,
    tension,
    estado,
    ganador,
    meta: META,
  };
}

function emitirEstado() {
  io.emit('estado', paqueteEstado());
}

function resetPartida() {
  tension = 0;
  estado = 'esperando';
  ganador = null;
  emitirEstado();
}

function aplicarVictoria() {
  if (tension <= -META) {
    estado = 'terminado';
    ganador = 'rojo';
    return true;
  }
  if (tension >= META) {
    estado = 'terminado';
    ganador = 'azul';
    return true;
  }
  return false;
}

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

io.on('connection', (socket) => {
  socket.emit('estado', paqueteEstado());

  socket.on('iniciar', () => {
    if (estado !== 'esperando') return;
    estado = 'jugando';
    emitirEstado();
  });

  socket.on('tirar', (payload) => {
    if (estado !== 'jugando') return;
    const equipo = payload && payload.equipo;
    if (equipo === 'rojo') tension -= 1;
    else if (equipo === 'azul') tension += 1;
    else return;
    aplicarVictoria();
    emitirEstado();
  });

  socket.on('reiniciar', () => {
    resetPartida();
  });
});

httpServer.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
