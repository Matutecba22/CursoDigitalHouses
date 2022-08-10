const express = require ('express');
const app = express();
const path = require('path');
let saludo = 'Hola Como estas ?';
const puerto = 3000;

app.use(express.static(path.join(__dirname,'/public')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
app.get('/viewport',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/viewport.html'))
})
app.get('/consigna',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/consigna.html'))
})
app.get('/mercadoliebre',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/mercadoliebre.html'))
})

app.listen(puerto,()=>{
    console.log('funcionando en el puerto ' + puerto );
})