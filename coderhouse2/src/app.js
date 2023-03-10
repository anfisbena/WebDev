import express from 'express';
import ProductManager from '../modules/ProductManager.js';

//Declaracion de variables
const app=express()
const ProdMan=new ProductManager('./database/products.json')
const PUERTO=8080;


app.get('/products',async(req,res)=>{
  let limit=req.query.limit;
  const productos=await ProdMan.getProducts()
  let productLimit=productos.slice(0,limit||productos.length)
  res.json(productLimit)
})
app.get('/products/:pid',
async(req,res)=>{
  let id=parseInt(req.params.pid)
  res.json(await ProdMan.getProductsById(id))
})

app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))