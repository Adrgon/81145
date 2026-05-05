const express = require("express")
const exphbs = require("express-handlebars")
const productoRoutes = require("./routes/productoRoutes")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(express.urlencoded({extended: true}))

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// Rutas
app.use("/productos", productoRoutes)
app.get("/", (req, res)=> res.redirect("/productos"))

app.listen(3000, ()=> console.log("http://localhost:3000"))
