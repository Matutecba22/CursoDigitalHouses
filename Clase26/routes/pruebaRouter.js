const express = require('express');
const router = express.Router();
const pruebaController = require('../controller/pruebaController')

const { body } = require('express-validator');

const validacionUsuario = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio').bail()
   .isLength({min:3}).withMessage(' El nombre es muy corto').bail(),
   body('edad').notEmpty().withMessage('La edad es obligatoria').bail()
   .isInt().withMessage('Tiene q ser un Numero'),
   body('email').notEmpty().withMessage('El email es obligatorio').bail()
   .isEmail().withMessage('Ingrese un email valido')


];


router.get('/',pruebaController.index);
router.post('/',validacionUsuario,pruebaController.create);
router.get('/perfil',validacionUsuario,pruebaController.perfil);

module.exports= router;