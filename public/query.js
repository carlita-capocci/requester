const enviar= document.getElementById('enviar');
const destino= document.getElementById('destino');
const consulta= document.getElementById('consulta');
const respuesta= document.getElementById('respuesta');

enviar.addEventListener('click', ()=>{
    fetch('/query', {
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            destino: JSON.parse(destino.value),
            consulta: consulta.value
        })

    }).then((res)=>{
        return res.json()
    }).then((res) =>{
        respuesta.innerHTML= (JSON.stringify(res, null, ' '));
    })
})