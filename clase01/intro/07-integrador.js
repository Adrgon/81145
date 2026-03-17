class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarProducto() {
    console.log(`Producto: ${this.nombre} - Precio: $${this.precio}`);
  }
}

function aplicarDescuento(precio, descuento) {
  if (descuento > precio) {
    throw new Error("El descuento no puede ser mayor que el precio");
  }

  return precio - descuento;
}

try {
  const producto1 = new Producto("Teclado", 15000);

  producto1.mostrarProducto();

  const precioFinal = aplicarDescuento(producto1.precio, 2000);

  console.log(`Precio final: $${precioFinal}`);
} catch (error) {
  console.log("Ocurrió un error");
  console.log(error.message);
}
