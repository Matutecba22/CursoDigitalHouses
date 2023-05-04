const express = require('express');

const usuariosControllers = require("../controllers/usuario.controller") //ojo va con ..

const router = express.Router();

router.get('/', usuariosControllers.lista)


module.exports = router;