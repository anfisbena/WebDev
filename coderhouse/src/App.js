//quede 1:04
import express from 'express';
import ProductManager from '../modules/ProductManager.js';

//Declaracion de variables Express
const app=express()
const PUERTO=8080;
app.use(express.json())
//Declaracion de variables ProductManager
const ProdMan=new ProductManager('./database/products.json')
const root='/api/products'

//GET
app.get(root,async(req,res)=>{
  const productos=await ProdMan.getProducts()
  let limit=req.query.limit;
  let productLimit=productos.slice(0,limit||productos.length)
  return res.json(productLimit)
})

app.get(root+'/:pid',async(req,res)=>{
  let id=parseInt(req.params.pid)
  let response=await ProdMan.getProductsById(id)
  return res.json(response)
})

//POST
app.post(root,async(req,res)=>{
  let newProduct= req.body
  let addNewProduct=await ProdMan.addProduct(newProduct)
  if (addNewProduct===420){
    return res
      .status(420)
      .send('Faltan datos')
  }
  return res
    .status(201)
    .send(`Producto agregado con exito`)
})

app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))



