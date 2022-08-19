const express= require('express');

const controller = {
    index: (req,res) => {
        res.render('index');
    },
    register: (req,res) => {
            res.render('Registro');
    },
    login : (req,res) => {
        res.render('tags')
    },
    parametros : (req,res) => {
        let usuarios = [
            'Matias',
            'Paula',
            'Tomas',
            'Matilda',
            'Benjamin',
            'Julian',
            'Mauricio'

        ]
        res.render('parametroscompartidos',{'usuarios': usuarios})
    }

}

module.exports=controller;