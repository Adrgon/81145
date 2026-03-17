//console.log("Bienvenidos a Backend I")
var alumnos;

console.log(alumnos)
//console.log(curso)

let curso = "Backend I" // permite modificar el valor de la variable
const instructor = "Adrian L Gonzalez"  // No se puede modificar el valor de una constante

var alumnos = 30 // var es una forma antigua de declarar variables, se recomienda usar let o const


console.log("El curso es: " + curso)
console.log("El instructor es: " + instructor)
console.log("El número de alumnos es: " + alumnos)

//Datos Primitivos

let texto = "Hola"
let numero = 10
let booleano = true
let nulo = null // 
let indefinido

console.log(typeof texto)
console.log(typeof numero)
console.log(typeof booleano)

console.log(typeof nulo)
console.log(typeof indefinido)


// Datos no primitivos

let arreglo = [1, 2, 3, 4, 5]
let objeto = { nombre: "Adrian", edad: 30 }

console.log(typeof arreglo)
console.log(typeof objeto)

// los tipios no primitivos se almacenan en memoria 
// como referencias, mientras que los tipos primitivos 
// se almacenan como valores. Esto significa que 
// cuando se asigna un tipo no primitivo a una variable, 
// se está asignando una referencia a la ubicación 
// de memoria donde se encuentra el valor, 
// mientras que cuando se asigna un tipo primitivo 
// a una variable, se está asignando el valor 
// directamente a la variable.

let a = 1
let b = a // b es una copia de a, no una referencia

console.log(a) // 1
console.log(b) // 1

a = 2

console.log(a) // 2
console.log(b) // 1, b no cambia porque es una copia de a, no una referenc


let obj = { x: 5 }
let obj2 = obj // obj2 es una referencia a obj

console.log(obj.x) // 5
console.log(obj2.x) // 5

obj.x = 10

console.log(obj.x) // 10
console.log(obj2.x) // 10, obj2 cambia porque es una referencia a obj


// Explicacion simple de lo visto:
// 1) var, let y const: var es antigua; let permite cambiar el valor; const no.
// 2) Tipos primitivos: string, number, boolean, null, undefined. Se guardan como valores.
// 3) Tipos no primitivos: arrays y objetos. Se guardan como referencias.
// 4) Copia vs referencia: con primitivos se copia el valor; con objetos/arreglos se comparte la referencia.
// 5) typeof: sirve para ver el tipo de un dato.
