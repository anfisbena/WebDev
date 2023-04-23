import express from 'express';
import __dirname from './utils.js';
import {engine} from 'express-handlebars';
import socket from './socket.js'
import cookieParser from 'cookie-parser';
import {loadDatabase,loadLogin} from './mongoDB.js';
import homeRouter from '../src/dao/mongo/routes/home.router.js'
import realTimeProducts from '../src/dao/mongo/routes/realtimeproducts.router.js'
import productRouter from '../src/dao/mongo/routes/product.router.js';
import userRouter from '../src/dao/mongo/routes/users.router.js';
import messageRouter from '../src/dao/mongo/routes/messages.router.js';
import viewsRouter from '../src/dao/mongo/routes/views.router.js';
import chatRouter from '../src/dao/mongo/routes/chats.router.js';
import cartRouter from '../src/dao/mongo/routes/carts.router.js';
import Sessions from './dao/mongo/routes/session.router.js';


//Declaracion de Express
const app=express()
app.use(express.json()) //sistema de json
app.use(express.urlencoded({extended:true}));
app.use(loadLogin) //sistema de logueo
app.use(cookieParser('C0d3rH0u$3')); //sistema de cookies
app.use(express.static(`${__dirname}/public`)); //declaracion de folder public

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

//Declaracion de rutas
app.use('/',homeRouter)
app.use('/api/chats',chatRouter)
app.use('/api/messages',messageRouter)
app.use("/api/products",productRouter)
app.use('/api/users',userRouter)
app.use('/api/carts',cartRouter)
app.use('/login',Sessions)
app.use("/realtimeproducts",realTimeProducts)
app.use('/views',viewsRouter)


//Cargar base de datos
loadDatabase();

//setup de server
const PUERTO=8080;
const httpServer=app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`)) 

//configuracion de socket
socket.connect(httpServer);






//////////////QYEDE MINUTO 26