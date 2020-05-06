const express= require('express');
const app= express();
const port= 3000;
const bodyParser = require('body-parser');


const mysql= require('mysql');
app.use(bodyParser.json());

app.use(express.static('./public'));


app.get('/ping', (request, response)=>{
    response.send('pong');
})


app.post('/query', (req,res)=>{
    const consulta= req.body.consulta;
    const destino= req.body.destino;
    const connection= mysql.createConnection({
        host: destino.host,
        user: destino.user,
        password: destino.password,
        database: destino.database
    });
    connection.query(consulta, (error, result, field)=>{
        res.json(result)
    })
    
})



app.listen (port,()=>{
    console.log(`El servidor esta escuchando en ${port}`);
})

