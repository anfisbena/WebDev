import {Router} from 'express';
import CartManager from '../modules/CartManager.js';

const router = Router();
const CartMan=new CartManager('./src/database/carrito.json')

router.get('/',async(req,res)=>{
  const productos=await CartMan.getCart()
  return res.json(productos)
})

router.post('/:cid/products/:pid',async(req,res)=>{
  let cid=parseInt(req.params.cid);
  let pid=parseInt(req.params.pid);
  let addNewProduct=await CartMan.addProduct(cid,pid)
  if (addNewProduct==='error'){
    return res
      .status(420)
      .send('Faltan datos')
  }
  return res
    .status(201)
    .send(`Producto agregado con exito al carrito`)
})

export default router;