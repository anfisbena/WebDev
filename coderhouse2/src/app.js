//quede 1:04

import express from 'express';
import ProductManager from '../modules/ProductManager.js';

//Declaracion de variables
const app=express()
const ProdMan=new ProductManager('./database/products.json')
const PUERTO=8080;


app.get('/products',async(req,res)=>{
  const productos=await ProdMan.getProducts()

  let limit=req.query.limit;
  let productLimit=productos.slice(0,limit||productos.length)

  res.json(productLimit)
})

app.get('/products/:pid',async(req,res)=>{
  let id=parseInt(req.params.pid)
  let response=await ProdMan.getProductsById(id)
  
  res.json(response)
})

app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))