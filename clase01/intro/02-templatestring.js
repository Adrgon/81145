// Template Strings

let nombre = "Frida"
const curso = "Backend con NodeJS"
console.log("Hola " + nombre + ", bienvenid@ al curso de " + curso) // concatenación tradicional
console.log(`Hola ${nombre}, bienvenid@ al curso de ${curso}`);  
console.log(`Hola ${1+1}, bienvenid@ al curso de ${curso}`)  

// Explicacion simple de lo visto:
// 1) Template strings usan backticks (`) y permiten interpolar variables con ${}.
// 2) Reemplazan la concatenacion con + y hacen el texto mas legible.
// 3) Dentro de ${} puedes poner expresiones, no solo variables.


