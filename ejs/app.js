const express = require('express')
const app = express();

const mainRoutes = require('./routes/main.routes');

app.use(express.static('public'));

app.set("view engine","ejs")

app.use('/',mainRoutes);


app.listen(3030, () => {
    console.log('Servidor funcionando en el puerto 3030');
})