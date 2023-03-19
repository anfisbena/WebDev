//quede 17'
//https://coderhouse.zoom.us/rec/play/Xk7S2HWlCjsvLQCxBk1eJUW9w8jGVie8GhwGup6hv2urTawmpYrL167sLV3nIKqleXIZLndinaeT53yu.UCEWXnL3yPHZN_uE?continueMode=true&_x_zm_rtaid=bRTrC4xCRZGDCMF4pLw3Qg.1678843228165.06e1601619e578f3f769a0c9ffeff4d1&_x_zm_rhtaid=99
import express from 'express';
import productRouter from './routes/product.router.js';
import cartRouter from './routes/cart.router.js';

//Declaracion de variables Express
const app=express()
const PUERTO=8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'));
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)


app.listen(PUERTO,()=>console.log(`te escucho👂 en ↪ http://localhost:${PUERTO}`))



