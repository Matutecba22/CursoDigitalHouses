const express = require('express')
const app = express();

const mainRoutes = require('./routes/main.routes');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',mainRoutes);




app.listen(3030, () => {
    console.log('Servidor funcionando en el puerto 3030');
})