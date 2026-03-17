// clases

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Lucia", 28);
persona1.saludar();

// Explicacion simple de lo visto:
// 1) Una clase es un molde para crear objetos con propiedades y metodos.
// 2) El constructor se ejecuta al crear una instancia con new.
// 3) this apunta al objeto creado y permite guardar datos propios.
// 4) Los metodos definen comportamientos que usan esos datos.
