import { Router } from 'express';
import { uploader } from '../utils.js';
import ProductManager from '../modules/ProductManager.js';
import {ErrorUploadFile} from '../modules/ErrorHandler.js'

const router = Router();
const productManager = new ProductManager('./src/database/productos.json');

//GET
router.get('/', async (req, res) => {
  const productos = await productManager.getProducts();
  const limit = parseInt(req.query.limit);
  const productLimit = limit ? productos.slice(0, limit) : productos;

  return res.json(productLimit);
});

router.get('/:pid', async (req, res) => {
  const id = parseInt(req.params.pid);
  const response = await productManager.getProductById(id);
  if (!response) {
    return res.status(404).send('Id no existe');
  }
  return res.json(response);
});

//POST
router.post('/', uploader.array('thumbnails', 3), async (req, res) => {
  const {title,description,price,code,stock}=req.body
  const thumbnails=req.files.map((file)=>file.filename)
  const error=ErrorUploadFile(title,description,price,code,stock,thumbnails)
  if(error){return res.status(error.status).send({status:errorHandler.status,payload:errorHandler.payload})}
  else{await productManager.addProduct({title,description,price,code,stock}, filenames)}
  
  return res.status(200).send('Producto agregado con éxito.');
});

//PUT
router.put('/:pid', async (req, res) => {
  const updatedProduct = req.body;
  const id = parseInt(req.params.pid);
  const updateProduct = await productManager.updateProduct(id, updatedProduct);
  if (!updateProduct) {
    return res.status(404).send('Id no existe');
  }
  return res.status(200).send('Producto actualizado con éxito.');
});

//DELETE
router.delete('/:pid', async (req, res) => {
  const id = parseInt(req.params.pid);
  const deleteProduct = await productManager.deleteProduct(id);
  if (!deleteProduct) {
    return res.status(404).send('Id no existe');
  }
  return res.status(200).send('Producto eliminado con éxito.');
});

export default router;