const express = require('express')
const router = express.Router()
const ctrl = require("../controllers/productoController")


router.get("/", ctrl.getAll)
router.get("/create", ctrl.createForm)
router.post("/", ctrl.create)
router.get("/edit/:id", ctrl.editForm);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete)


module.exports = router
