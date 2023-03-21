//quede 1:35'
import express from 'express';
import homeRouter from './routes/home.router.js'
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import {engine} from 'express-handlebars';
import __dirname from './utils.js';

//Declaracion de variables Express
const app=express()
const PUERTO=8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
//declaracion de folder public
app.use(express.static(`${__dirname}/public`));

app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

app.use('/',homeRouter)

app.get('/realtimeproducts',(req,res)=>{
  res.render('realtimeproducts')
})



app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))



