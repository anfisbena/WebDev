import express from 'express';

const app=express()

app.get('/',(req,res)=>{
  res.send("BIENVENIDO")
  })
app.get('/products',(req,res)=>{
  res.json({caca:"caca"})
})

//hace que el servidor escuche en puerto 3000 y a la vez le da un lugar para ejecutarse
app.listen(8080,()=>console.log('Servidor express en puerto 3000'))