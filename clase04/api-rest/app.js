// modulos de node
const fs = require('fs')
const path = require('path')
//const http = require('http')
// modulos externos
const express = require('express')

//console.log(express)

const ARCHIVO_PRODUCTOS = path.join(__dirname, 'productos.json')
const app = express() // crea la apllicacion 
//console.log('-----------------------------')

//console.log(app)
const PORT = 3000

app.use(express.json()) // permite que podamos recibir datos en JSON

// Funcionalidades CRUD (Create, Read, Update, Delete)
function leerProductos() {
    try {
        const data = fs.readFileSync(ARCHIVO_PRODUCTOS, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return []
    }
}

function guardarProductos(productos){
    fs.writeFileSync(ARCHIVO_PRODUCTOS, JSON.stringify(productos, null, 2))
}

function obtenerSiguienteId(productos){
    if(productos.length === 0) return 1
    return Math.max(...productos.map( producto => producto.id)) + 1
}



// Enrutado 

app.get('/',(req, res) => {
    res.status(200).json({
        mensaje: 'API de productos funcionando', 
        endpoints: {
            listar: "GET /productos",
            detealle: "GET /productos/:id",
            crear: "POST /productos",
            actualizar: "PUT /productos/:id",
            eliminar: "DELETE /productos/:id"
        }
    })
})

app.get('/productos', (req, res)=>{
    try {
        const productos = leerProductos();
        res.status(200).json(productos);
    }catch(error) {
        res.status(500).json({'error': 'Error al leer los productos'})
    }
})

app.get('/productos/:id', (req, res)=>{
    try {
        const id = Number(req.params.id)
        if(Number.isNaN(id)){
            return res.status(400).json({error: 'ID inválido'})
        }
        // agregar todos las validaciones que se me ocurrar
        
        const productos = leerProductos() 
        const producto = productos.find( item => item.id === id)

        if(!producto){
            return res.status(404).json({})
        }
        res.status(200).json(producto)
    }catch (error) {
        res.status(500).json({error: 'Error al leer el producto'})
    }
})


app.post('/productos', (req, res)=>{
    try {
        const {nombre, precio} = req.body

        if(!nombre || precio === undefined) {
            return res.status(400).json({
                error: 'Faltan datos obligatorios: nombre y precio'
            })
        }
        if(typeof nombre !== 'string' || nombre.trim() === ''){
            return res.status(400).json({
                error: 'El nombre debe ser un texto vslido'
            })
        }

        // validar de precion sea un numero positivo

        const productos = leerProductos()

        const nuevoProducto = {
            id: obtenerSiguienteId(productos),
            nombre: nombre.trim(),
            precio
        }

        productos.push(nuevoProducto)
        guardarProductos(productos)

        res.status(201).json({
            mensaje: 'Producto agregado exitosamente',
            data: nuevoProducto
        })
    } catch(error){
        res.status(500).json({'error': 'Error al crear el producto'})
    }
})

app.put('/productos/:id', (req, res)=>{
    try {
        const id = Number(req.params.id)
        const {nombre, precio} = req.body

        if(Number.isNaN(id)){
            return res.status(400).json({error: 'ID inválido'})
        }
        if(nombre !== undefined && (typeof nombre !== 'string' || nombre.trim() === '')){
            return res.status(400).json({
                error: 'El nombre debe ser un texto vslido'
            })
        }

        const productos = leerProductos()
        const productoIndex = productos.findIndex( item => item.id === id)

        if(productoIndex === -1){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        if(nombre !== undefined) productos[productoIndex].nombre = nombre.trim()
        if(precio !== undefined) productos[productoIndex].precio = precio

        guardarProductos(productos)

        res.status(200).json({
            mensaje: 'Producto actualizado exitosamente',
            data: productos[productoIndex]
        })
    } catch(error){
        res.status(500).json({error: 'Error al actualizar el producto'})    
    }
})

app.delete('/productos/:id', (req, res)=>{
    try {
        const id = Number(req.params.id)
        // validaciones 

        const productos = leerProductos()
        const productoExiste = productos.some(item => item.id === id)

        if(!productoExiste){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        const productosFiltrados = productos.filter( item => item.id !== id)
        guardarProductos(productosFiltrados)
            
        res.status(200).json({mensaje: 'Producto eliminado exitosamente'})
    } catch(error){
        res.status(500).json({})
    }
})


app.use((req, res ) =>{
    res.status(404).json({error: "Ruta no encontrada"})
})

//console.log(express)

app.listen(PORT, () => {
    console.log(`Servidor funcionando http://localhost:${PORT}`)
})
