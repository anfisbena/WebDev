import {Router} from 'express';
import ProductManager from '../modules/ProductManager.js';

const router = Router();
const ProdMan=new ProductManager('./src/database/cart.json')

router.get('/',async(req,res)=>{
  const productos=await ProdMan.getProducts()
  let limit=req.query.limit;
  let productLimit=productos.slice(0,limit||productos.length)
  return res.json(productLimit)
})

router.get('/:cid',async(req,res)=>{
  let id=parseInt(req.params.cid)
  let response=await ProdMan.getProductsById(id)
  return res.json(response)
})

router.post('/:cid/products/:pid',async(req,res)=>{
  let newProduct= req.body
  let addNewProduct=await ProdMan.addProduct(newProduct)
  if (addNewProduct==='error'){
    return res
      .status(420)
      .send('Faltan datos')
  }
  return res
    .status(201)
    .send(`Producto agregado con exito`)
})

router.put('/:cid',async(req,res)=>{
  let updatedProduct=req.body;
  let id=parseInt(req.params.cid)
  let updateProduct=await ProdMan.updateProduct(id,updatedProduct)
  if (updateProduct==='Id no existe'){
    return res
      .status(420)
      .send('Id no existe')
  }
  return res
    .status(201)
    .send(`Producto actualizado con exito`)
})

router.delete('/:cid',async(req,res)=>{
  let id=parseInt(req.params.cid)
  let deleteProduct=await ProdMan.deleteProduct(id)
  if (deleteProduct==='Id no existe'){
    return res
      .status(420)
      .send('Id no existe')
  }
  return res
    .status(201)
    .send(`Producto eliminado con exito`)
})

export default router;