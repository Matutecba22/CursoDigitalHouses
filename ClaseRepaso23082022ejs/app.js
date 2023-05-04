const express = require ('express');
const app = express ();

const usuariosRouter = require('./routes/usuario.routes')

app.use('/',usuariosRouter)

app.set( "view engine", "ejs") // primero parametro le decimos que vamos a usar un motor de plantilla
//en el segundo que motor de plantilla

app.listen (3030, () =>{
    console.log('Corriendo en el puerto 3000');
}
    )