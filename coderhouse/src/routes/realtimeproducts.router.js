import { Router } from 'express';
import ProductManager from '../modules/ProductManager.js';

const router = Router();
const productManager = new ProductManager('./src/database/productos.json');

router.get('/', async (req, res) => {
  const productos = await productManager.getProducts();
  const limit = parseInt(req.query.limit);
  const productLimit = limit ? productos.slice(0, limit) : productos;

  return res.render('realTimeProducts', {
    title: 'Real Time Products',
    products: productLimit
  });
});

export default router;