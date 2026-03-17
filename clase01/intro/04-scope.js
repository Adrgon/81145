// Scope

let mensajeGlobal = "Soy global";

function mostrarMensaje() {
  let mensajeLocal = "Soy local";

  console.log(mensajeGlobal);
  console.log(mensajeLocal);
}

mostrarMensaje();

// Explicacion simple de lo visto:
// 1) Scope es el alcance de una variable (donde puede usarse).
// 2) Variables globales se pueden usar en todo el archivo.
// 3) Variables locales solo existen dentro de la funcion donde se declaran.

