const express = require('express')
const router = express.Router();

const mainController = require('../controller/main.controller')

router.get('/', mainController.home);
router.get('/about', mainController.about);

module.exports = router;