const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: [true, "El nombre es obligatorio"],
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
        trim: true,
    }, 
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        min: [0, "El precio no puede ser negativo"],
    }, 
    stock: {
        type: Number,
        required: [true, "El stock es obligatorio"],
        min: [0, "El stock no puede ser negativo"],
    }
})

module.exports = mongoose.model("Producto", productoSchema)
