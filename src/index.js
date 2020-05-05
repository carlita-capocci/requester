const express= require('express');
const app= express();
const port= 3000;



app.get('/ping', (request, response)=>{
    response.send('pong');
})

app.get('/', (request, response)=>{
    response.send('home');
})




app.listen (port,()=>{
    console.log(`El servidor esta escuchando en ${port}`);
})

