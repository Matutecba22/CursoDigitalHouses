const express = require ('express');
const app = express();
const path = require('path');
app.use(express.static('public'))




app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
})

app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

// app.listen(3030, () => {
//     console.log('El servidor esta funcionando en el puerto 3000');
// })
app.listen(process.env.PORT || 3000, function () {
    console.log('El servidor esta funcionando en el puerto 3000');
})