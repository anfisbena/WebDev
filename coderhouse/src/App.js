import express from 'express';
import homeRouter from './routes/home.router.js'
import realTimeProducts from './routes/realtimeproducts.router.js'
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';
import __dirname from './utils.js';
import {engine} from 'express-handlebars';
import socket from './socket.js'


//Declaracion de Express
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//Declaracion de rutas
app.use(express.static(`${__dirname}/public`)); //declaracion de folder public
app.use('/',homeRouter)
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)
app.use("/realtimeproducts",realTimeProducts)

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

//configuracion de server
const PUERTO=8080;
const httpServer=app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`)) 

//configuracion de socket
socket.connect(httpServer);