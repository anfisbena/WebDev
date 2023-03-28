import { Router } from 'express';
import { uploader } from '../utils.js';
import ProductManager from '../modules/ProductManager.js';

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
  if (!req.files.length) {
    return res.status(400).send('No se subió ninguna imagen');
  }
  const filenames = req.files.map((file) => file.filename);
  const newProduct = req.body;
  const addNewProduct = await productManager.addProduct(newProduct, filenames);
  if (addNewProduct==='faltan datos') {
    return res.status(400).send(addNewProduct);
  }

  return res.status(201).send('Producto agregado con éxito.');
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