import { Router } from 'express';
import CartManager from '../modules/CartManager.js';

const router = Router();
const cartManager = new CartManager('./src/database/carrito.json');

router.get('/:cid', async (req, res) => {
  const cid = req.params.cid;
  const cart = await cartManager.getCartById(cid);
  if (cart === 'Id no existe') {
    return res.status(404).send('Id no encontrado');
  }
  return res.json(cart);
});

router.post('/', async (req, res) => {
  await cartManager.addCart();
  return res.status(201).send('Carrito agregado con éxito.');
});

router.put('/:cid/products/:pid', async (req, res) => {
  const cid = parseInt(req.params.cid);
  const pid = parseInt(req.params.pid);
  const addNewProduct = await cartManager.addProduct(cid, pid);
  if (addNewProduct === 'error') {
    return res.status(400).send('Error al modificar carrito, revisa tus valores.');
  }
  return res.status(201).send('Producto agregado con éxito al carrito.');
});

export default router;