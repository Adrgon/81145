const express = require("express")
const exphbs = require("express-handlebars")
const mothodOverride = require("method-override")

const productoRoutes = require("./routes/productoRoutes")
const connectDB = require("./config/db")
const config = require("./config/config")

const {notFound, errorHandler} = require("./middlewares/errorHandler")

const app = express()

connectDB()

app.use(express.urlencoded({extended: true}))
app.use(mothodOverride("_method"))

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// Rutas
app.use("/productos", productoRoutes)
app.get("/", (req, res)=> res.redirect("/productos"))

app.use(notFound)
app.use(errorHandler)

app.listen(config.port, ()=> console.log(`http://localhost:${config.port}`))
