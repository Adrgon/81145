const express = require('express');
const router = express.Router();

const upload = require("../middlewares/upload.meddleware");

router.get("/", (req, res)=> {
    res.render("upload")
})

router.post("/", upload.single("file"), (req, res) => {
    res.send("Archivo subido correctamente")
})

module.exports = router;
