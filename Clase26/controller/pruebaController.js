const { validationResult } = require('express-validator');


const pruebaController = {
    index: (req, res) => {
        res.render('input')
    },
    create: (req, res) => {

const errores = validationResult(req)

req.session.color = req.body.color
console.log(errores);


        // console.log(req.body);
        res.render('input', { usuario: req.body, errores : errores.errors });
    },
    perfil:(req,res) => {
        const color = req.session.color
        res.render('perfil', {color:color})
    }
}
module.exports = pruebaController