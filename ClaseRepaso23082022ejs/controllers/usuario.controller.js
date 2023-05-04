

const usuariosControllers = {
    lista: (req,res) => {
        let usuarios = [
             {id: 1, nombre: 'Matias'},
             {id: 2, nombre: 'Paula'},
             {id: 3, nombre: 'Tommas'},
             {id: 4, nombre: 'Matilda'},
             {id: 5, nombre: 'Benjamin'},
             {id: 6, nombre: 'Julian'},
        ]
        res.render('usuario/lista',{usuarios:usuarios});
    }


}

module.exports = usuariosControllers;