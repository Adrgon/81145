const Producto = require("../models/Producto")

const parseErrors = (error) => {
  const errors = {}
  if(error.errors) {
    for (let field in err.errors){
      errors[field] = err.errors[field].message
    }
  }
  return errors
}

const createNotFoundError = () => {
  const error = new Error("Producto no encontrado")
  error.status = 404
  return error
}


exports.getAll = async (req, res) => {
  console.log("GET /productos");
  const productos = await Producto.find().lean()
  res.render("productos/list", { productos })
};

exports.createForm = (req, res) => {
  res.render("productos/create", {error: {}, data: {} })
};

exports.create = async (req, res) => {
  // guardar el produto en la base de datos
  try {
    console.log(req.body)
    await Producto.create(req.body)
    res.redirect("/productos")
  }catch (error){
    console.log("hubo un error")
    res.send({})
  }
};

exports.editForm = async (req, res) => {
  const producto = await Producto.findById(req.params.id).lean()
  
  if(!producto){
    throw createNotFoundError()
  }
  console.log(producto)
  res.render("productos/edit", { producto, errors: {} })
};

exports.update =  async(req, res) => {
  try {
  const producto =  await Producto.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true, 
    new: true,
  })

  if(!producto){
    throw createNotFoundError()
  }

  res.redirect("/productos")
}catch (error) {
  if(error.name !== "ValidationError") {
    throw error
  }
  const errores = parseErrors(error)
  const proucto = {...req.body, _id: req.params.id}

  res.render("productos/edit", {
    producto,
    errors
  })
}
};



exports.delete = async(req, res) => {  
  const producto = await Producto.findByIdAndDelete(req.params.id)

  if(!producto){
    throw new Error("Producto no encontrado")
  }
    res.redirect("/productos")
}
