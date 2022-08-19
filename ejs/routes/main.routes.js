const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');

router.get('/',mainController.index);

router.get('/registro',mainController.register);

router.get('/tags',mainController.login);

router.get('/parametroscompartidos',mainController.parametros);

module.exports = router

