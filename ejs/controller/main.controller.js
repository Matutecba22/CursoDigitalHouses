const express= require('express');
const { search } = require('../routes/main.routes');

const controller = {
    index: (req,res) => {
        res.render('index');
    },
    register: (req,res) => {
            res.render('Registro');
    },
    login : (req,res) => {
        res.render('tags');
    },
    parametros : (req,res) => {
        let usuarios = [ 
            {id : 1 , name: 'Matias'},
            {id : 2 , name: 'Paula'},
            {id : 3 , name: 'Tomas'},
            {id : 4 , name: 'Matilda'},
            {id : 5 , name: 'Benjamin'},
            {id : 6 , name: 'Julian'}

        ];
        res.render('parametroscompartidos',{'usuarios': usuarios})
    },
    search : (req,res) => {
        let loQueBuscoElUsuario = req.query.search;
        
        let usuarios = [ 
            {id : 1 , name: 'Matias'},
            {id : 2 , name: 'Paula'},
            {id : 3 , name: 'Tomas'},
            {id : 4 , name: 'Matilda'},
            {id : 5 , name: 'Benjamin'},
            {id : 6 , name: 'Julian'}

        ];

        let resultadoUsuarios = [];

        for (let i = 0 ; i < usuarios.length; i++){
            if (usuarios[i].name.includes(loQueBuscoElUsuario)){
                resultadoUsuarios.push(usuarios[i]); 
            }
        }
        res.render('resultadoUsuarios',{resultadoUsuarios : resultadoUsuarios});
    },
    create: (req, res) => {
            let usuario = { 
                  nombre : req.body.name, // nombre del input en el html
                  edad : req.body.edad ,
                  email : req.body.email 

                }
        // console.log('body',req.body);
    //   res.send(usuario)
      res.redirect('/parametroscompartidos')
    },
    edit : (req,res) => {
        let idUser =req.params.idUser;

        let usuarios = [ 
            {id : 1 , name: 'Matias'},
            {id : 2 , name: 'Paula'},
            {id : 3 , name: 'Tomas'},
            {id : 4 , name: 'Matilda'},
            {id : 5 , name: 'Benjamin'},
            {id : 6 , name: 'Julian'}

        ];

        let usuarioAeditar = usuarios[idUser]
        // res.send(usuarioAeditar)
        res.render('edicionUsuarios',{usuarioAeditar:usuarioAeditar})
    }
}

module.exports=controller;