const express= require('express');
const app= express();
const port= 3000;

const mysql= require('mysql');




app.get('/ping', (request, response)=>{
    response.send('pong');
})

app.get('/', (request, response)=>{
    response.send('home');
})

app.post('/query', (req,res)=>{
    const connection= mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'carla123',
        database: 'carlita'
    });
    connection.query('select * from generos', (error, result, field)=>{
        res.json(result)
    })
    
})



app.listen (port,()=>{
    console.log(`El servidor esta escuchando en ${port}`);
})

