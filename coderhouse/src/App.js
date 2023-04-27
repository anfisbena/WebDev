//QUEDE MIN 48:14 https://coderhouse.zoom.us/rec/play/820r32gA7IHdJEQxjSiD3ApkLAzzHo_hcDn3j9T2nUMEpyuUsZ-6NC4jBkV2-hXpA4DbypSO-y6XgYgk.Rs45uQz5f3U4yoKB?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fcoderhouse.zoom.us%2Frec%2Fshare%2FAQ7SVY_SCuuN_ops_KmjNJep121uuNB1m75mS-XeZk9QqgmBIakFj1CHWSF3-WqP.oBWQwBOlRGGF5Ype

import express from 'express';
import {engine} from 'express-handlebars';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import __dirname from './utils.js';
import socket from './socket.js'
import {loadDatabase,loadLogin} from './mongoDB.js';
import homeRouter from '../src/dao/mongo/routes/home.router.js'
import realTimeProducts from '../src/dao/mongo/routes/realtimeproducts.router.js'
import productRouter from '../src/dao/mongo/routes/product.router.js';
import userRouter from '../src/dao/mongo/routes/users.router.js';
import messageRouter from '../src/dao/mongo/routes/messages.router.js';
import viewsRouter from '../src/dao/mongo/routes/views.router.js';
import chatRouter from '../src/dao/mongo/routes/chats.router.js';
import cartRouter from '../src/dao/mongo/routes/carts.router.js';



//Declaracion de Express
const app=express()
app.use(express.json()) //sistema de json
app.use(express.urlencoded({extended:true}));
app.use(loadLogin) //sistema de logueo
app.use(cookieParser('C0d3rH0u$3')); //sistema de cookies
app.use(express.static(`${__dirname}/public`)); //declaracion de folder public
app.use(morgan('dev')) //sistema de logueo de peticiones http

//Configuracion de handlebars
app.engine('handlebars',engine())
app.set('views',`${__dirname}/views`)
app.set('view engine','handlebars')

//Declaracion de rutas
app.use('/',homeRouter)
app.use('/api/chats',chatRouter)
app.use('/api/messages',messageRouter)
app.use("/api/products",productRouter)
app.use('/',userRouter)
app.use('/api/carts',cartRouter)
app.use("/realtimeproducts",realTimeProducts)
app.use('/views',viewsRouter)


//Cargar base de datos
loadDatabase();

//setup de server
const PUERTO=8080;
const httpServer=app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`)) 

//configuracion de socket
socket.connect(httpServer);
