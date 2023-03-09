import express from 'express';
import ProductManager from '../modules/ProductManager.js';

//Declaracion de variables
const app=express()
const ProdMan=new ProductManager('./database/products.json')
let caca=async()=>{try{await ProdMan.getProducts()}catch(err){console.log(err)}}
console.log(caca())
// ProdMan.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)




app.get('/bienvenida',(req,res)=>res.send('<h1 style="color:blue">LISTA usuarios</h1>'))
app.get('/usuario',(req,res)=>res.send())


app.listen(8080,()=>console.log('te escucho en el 8080 papu'))