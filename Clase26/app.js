const express = require('express');
const app = express();
const path = require('path');
const router=require('./routes/pruebaRouter');
const session = require('express-session');
app.use(express.static(path.join(__dirname + 'public')));
// app.use(express.static('public'));

const puertoNro = 3030;

app.use(express.urlencoded({extended:false}))
app.use(session({secret : 'Va lo que quieras'}))

app.set( "view engine", "ejs");

app.use('/',router);

app.listen(puertoNro , ()=> {
    console.log('Servidor corriendo en el puerto ' + puertoNro);
})
