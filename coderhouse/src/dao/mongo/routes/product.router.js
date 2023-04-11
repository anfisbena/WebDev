import { Router } from 'express';
import { uploader } from '../../../utils.js';
import {getProducts,getProductsById,addProduct,updateProduct,deleteProduct} from '../modules/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
  const productos = await getProducts();
  const limit = parseInt(req.query.limit);
  const productLimit = limit ? productos.slice(0, limit) : productos;

  return res.render('home', {
    title: 'Home',
    products: productLimit
  });
});

router.get('/:pid', async (req, res) => {
  const id = req.params.pid;
  const response = await getProductsById(id);
  return res.render('home', {
    title: 'product',
    products: response
  });
});

router.post('/', uploader.array('thumbnails', 3), async (req, res) => {
  const {title,description,code,price,status,stock,category}=req.body
  const thumbnails=req.files.map((file)=>file.filename)
  const response=await addProduct(title,description,code,price,status,stock,category,thumbnails)

  return res.status(response.status).send({status:response.status,payload:response.payload})
})

router.put('/:pid',async (req, res) => {
  const id = req.params.pid;
  const {title,description,code,price,status,stock,category}=req.body
  const response=await updateProduct(id,title,description,code,price,status,stock,category)
  return res.status(response.status).send({status:response.status,payload:response.payload})
});

router.delete('/:pid', async (req, res) => {
  const id = req.params.pid;
  const response = await deleteProduct(id);
  return res.status(response.status).send({status:response.status,payload:response.payload})
});

  export default router;