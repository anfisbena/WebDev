//quede 1:35'
import express from 'express';
import homeRouter from './routes/home.router.js'
import realTimeProducts from './routes/realtimeproducts.router.js'
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import {engine} from 'express-handlebars';
import __dirname from './utils.js';

//Declaracion de variables Express
const app=express()
const PUERTO=8080;

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`)); //declaracion de folder public
app.use('/',homeRouter)
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)




app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))



