const Producto = require("../models/Producto")

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
  console.log(producto)
  res.render("productos/edit", { producto, errors: {} })
};

exports.update = (req, res) => {

};



exports.delete = async(req, res) => {
    await Producto.findByIdAndDelete(req.params.id)
    res.redirect("/productos")
}
