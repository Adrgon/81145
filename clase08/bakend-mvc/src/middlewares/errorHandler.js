const config = require("../config/config")


const notFound = (req, res, next) => {
    const error = new Error("Ruta no encontrada");
    error.status = 404
    next(error)
    
}

const errorHandler = (err, req, res, next) => {
    console.log(err)
}


module.exports = {
    notFound,
    errorHandler
}
