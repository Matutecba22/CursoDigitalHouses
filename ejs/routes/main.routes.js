const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');

router.get('/',mainController.index);

router.get('/registro',mainController.register);

router.get('/tags',mainController.login);

router.get('/parametroscompartidos',mainController.parametros);

router.get('/search',mainController.search);

router.post('/registro',mainController.create);

router.get('/edit/:idUser',mainController.edit);

router.put('/edit',(req,res) =>{
    res.send('VOY POR PUT!!!! HEEEE');

router.delete('/delete',(req,res)=>{
        res.send('VOY POR DELETE!!!! VAMOOOOOSSSS')
    })
});

module.exports = router

