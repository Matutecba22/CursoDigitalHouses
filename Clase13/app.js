const express = require('express');
const app = express();
app.use(express.static('public'));



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

app.listen(3030, ()=>{
    console.log('Servidor funcionando en puerto 3030');
});