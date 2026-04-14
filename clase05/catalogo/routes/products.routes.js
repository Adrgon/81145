const express = require('express');
const router = express.Router()

router.get("/", (req, res)=> {
    const products = [
      { name: "Mouse inalámbrico", price: 29.99, img: "" },
      { name: "Teclado mecánico", price: 29.99, img: "" },
      { name: "Monitor 4K", price: 29.99, img: "" },
      { name: "Auriculares gaming", price: 29.99, img: "" },
      { name: "Webcam HD", price: 29.99, img: "" },
      { name: "Silla ergonómica", price: 29.99, img: "" },
    ];
    res.render("products", {products})
})

module.exports = router
