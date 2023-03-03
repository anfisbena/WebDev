import express from 'express';

const app=express();

app.get("/saludo",(req,res)=>{
  res.send(<p>ss</p>)
});

app.listen(8080,()=>{
  console.log("Servidor arriba en el puerto :8080")
})