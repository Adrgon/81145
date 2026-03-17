// funcioens y scope
function saludar() {
  console.log("Hola estudiantes");
}

saludar();

// Funciones con parametros

function saludarPersona(nombre) {
  console.log(`Hola ${nombre}`);
}

saludarPersona("Marta");
saludarPersona("Juan");

// Funciones con retorno

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado);

// Arrow Functions

const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(4, 2));

// Arrow function con un solo parametro (sin parentesis)
const cuadrado = n => n * n;
console.log(cuadrado(5));

// Arrow function sin parametros
const obtenerSaludo = () => "Hola desde una arrow";
console.log(obtenerSaludo());

// Arrow function con retorno implicito (sin llaves)
const sumarRapido = (a, b) => a + b;
console.log(sumarRapido(10, 2));

// Arrow function con retorno de objeto (entre parentesis)
const crearPersona = (nombre, edad) => ({ nombre: nombre, edad: edad });
console.log(crearPersona("Ana", 28));

// Arrow function con varios usos: parametros por defecto
const saludarConCurso = (nombre, curso = "Backend I") => {
  return `Hola ${nombre}, bienvenid@ a ${curso}`;
};
console.log(saludarConCurso("Luis"));
console.log(saludarConCurso("Sofi", "NodeJS"));

// Explicacion simple de lo visto:
// 1) Funciones: se declaran con function o con arrow (=>) y pueden reutilizarse.
// 2) Parametros: son los valores que recibe la funcion para trabajar.
// 3) Retorno: una funcion puede devolver un valor con return.
// 4) Arrow functions: permiten sintaxis corta y retorno implicito en una sola linea.
// 5) Retorno de objetos: se usa ({ ... }) para no confundir con el bloque de codigo.
