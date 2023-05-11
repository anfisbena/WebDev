//QUEDE MIN 1:11 https://coderhouse.zoom.us/rec/play/bx8ojQOC9lWn5TXOshjwkQAfdbM5p2IoaeX0FBSoes_khA_XNaJyJqUF-YtPpFl0syZvR8mS4IJ6Dir6.3VMNZzqe69HRpQLI?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fcoderhouse.zoom.us%2Frec%2Fshare%2FlDebcjWgPmqfCsEecSRPR1iDqE6LKy1bNIBEatadGdqE84SBE9zXGlu4B3eS-lo1.ALVwmc_mgZTJZjY8

import express from 'express';
import {engine} from 'express-handlebars';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import passport from 'passport';
import initalizePassport from './auth/passport.js';
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


//Declaracion de Express y middlewares
const app=express()
app.use(express.json()) //sistema de json
app.use(express.urlencoded({extended:true}));
app.use(loadLogin) //sistema de logueo
app.use(cookieParser('C0d3rH0u$3')); //sistema de cookies
app.use(express.static(`${__dirname}/public`)); //declaracion de folder public
app.use(morgan('dev')) //sistema de logueo de peticiones http
initalizePassport(); //Carga la estrategia de autenticacion
app.use(passport.initialize())//Carga Passport
app.use(passport.session())//Carga la sesion del usuario

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


//setup de server
loadDatabase();
const PUERTO=8080;
const httpServer=app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`)) 

//configuracion de socket
socket.connect(httpServer);