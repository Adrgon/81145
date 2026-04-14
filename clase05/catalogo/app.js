const express = require('express')

const path = require('path')
const { engine } = require('express-handlebars')

const notFoundMeddleware = require('./middlewares/notFound')
const errorHandler = require("./middlewares/errorHandler")


const homeRouter = require("./routes/home.routes")
const productsRouter = require("./routes/products.routes")
const uploadsRouter = require("./routes/uploads.routes")
const e = require('express')

const app = express()
const PORT = 9000


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// Vistas

app.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
}))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

// Rutas
app.use('/', homeRouter)
app.use('/products', productsRouter)
app.use('/uploads', uploadsRouter)


app.use(notFoundMeddleware);
app.use(errorHandler);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
