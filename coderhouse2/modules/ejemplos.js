import ProductManager from './ProductManager.js';
import userManager from './userManager.js';
import express from 'express';

const app=express()
const userPath='./database/users.json';
const productPath='./database/products.json';


const product=new ProductManager(productPath)
// product.getProducts()
product.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
// product.getProductsById(1)
// product.updateProduct(1,'producto prueba ACTUALIZADO','Este es un producto prueba ACTUALIZADO',200,'Sin imagen','abc123',25)

const user=new userManager(userPath);
// user.addUser({"nombre":"coño","apellido":"Perez","nombreUsuario":'juanperez',"contrasena":'1234'})



//server con nodemon
// const server=http.createServer((request,response)=>{
//   response.end('Mi primer hola mundo desde backend!')
// })

// server.listen(8080,()=>{
//   console.log('Servidor escuchando en el puerto 8080')
// })

//crea GET http con dos variables, requirement y response, se pueden crear tantas como se necesiten… el '/' significa que desde el root…
app.get('/',(req,res)=>{
  res.json({
    message:"ey buddy"
  })
})
app.get('/products',(req,res)=>{
  res.json(product.getProducts())
})

//hace que el servidor escuche en puerto 3000 y a la vez le da un lugar para ejecutarse
app.listen(3000,()=>console.log('Servidor express en puerto 3000'))