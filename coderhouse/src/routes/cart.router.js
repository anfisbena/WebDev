import {Router} from 'express';
import CartManager from '../modules/CartManager.js';

const router = Router();
const CartMan=new CartManager('./src/database/carrito.json')

router.get('/:cid',async(req,res)=>{
  let cid=req.params.cid
  const cart=await CartMan.getCartById(cid)
  if(cart==='Id no existe'){
    return res
      .status(420)
      .send('Id no encontrado')
  }
  return res.json(cart)
})

router.post('/',async(req,res)=>{
  CartMan.addCart()
  return res
    .status(201)
    .send(`Carrito agregado con exito`)
})


router.put('/:cid/products/:pid',async(req,res)=>{
  let cid=parseInt(req.params.cid);
  let pid=parseInt(req.params.pid);
  let addNewProduct=await CartMan.addProduct(cid,pid)
  if (addNewProduct==='error'){
    return res
      .status(420)
      .send('Error al modificar Carrito, revisa tus valores')
  }
  return res
    .status(201)
    .send(`Producto agregado con exito al carrito`)
})

export default router;