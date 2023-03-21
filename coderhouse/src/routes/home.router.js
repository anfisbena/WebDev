import {Router} from 'express';
import ProductManager from '../modules/ProductManager.js';

const router = Router();
const ProdMan=new ProductManager('./src/database/productos.json')

//GET
router.get('/',async(req,res)=>{
  const productos=await ProdMan.getProducts()
  let limit=req.query.limit;
  let productLimit=productos.slice(0,limit||productos.length)
  return res.render('home',{product:productLimit})
})




export default router;