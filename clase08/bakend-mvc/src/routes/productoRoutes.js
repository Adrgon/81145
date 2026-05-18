const express = require('express')
const router = express.Router()
const ctrl = require("../controllers/productoController")
const catchAsync = require('../utils/catchAsync')


router.get("/", catchAsync(ctrl.getAll));
router.get("/create", ctrl.createForm)
router.post("/", catchAsync(ctrl.create));
router.get("/edit/:id", ctrl.editForm);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete)


module.exports = router
