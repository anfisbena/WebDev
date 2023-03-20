//quede 1:35'
import express from 'express';
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import {engine} from 'express-handlebars';
import __dirname from './utils.js';

//Declaracion de variables Express
const app=express()
const PUERTO=8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/',express.static(`${__dirname}/public`));
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))



