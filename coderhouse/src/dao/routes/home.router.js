import { Router } from 'express';
import {getProducts} from '../modules/ProductManager.js';

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

export default router;