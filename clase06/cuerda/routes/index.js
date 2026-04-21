const express = require('express');

/** Rutas de la página de entrada y enlaces. */
const home = express.Router();
home.get('/', (_req, res) => {
  res.render('index', { title: 'Tira la cuerda' });
});

/** Rutas del juego: visor y equipos. */
const juego = express.Router();
juego.get('/visor', (_req, res) => {
  res.render('visor', {
    title: 'Visor — Tira la cuerda',
    bodyClass: 'page-visor',
  });
});
juego.get('/rojo', (_req, res) => {
  res.render('rojo', { title: 'Equipo rojo', bodyClass: 'page-rojo' });
});
juego.get('/azul', (_req, res) => {
  res.render('azul', { title: 'Equipo azul', bodyClass: 'page-azul' });
});

const router = express.Router();
router.use(home);
router.use(juego);

module.exports = router;
