const express = require('express');

const app = express();

const mainRouter = require('./router/index.router');
app.use(express.static(__dirname + '/public'))
app.use('/', mainRouter);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
})