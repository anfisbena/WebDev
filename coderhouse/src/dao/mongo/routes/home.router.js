import { Router } from 'express';
import {getProducts} from '../modules/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
  const data = await getProducts()
  const {totalDocs,page,totalPages,nextPage,prevPage,pagingCounter} = data
  const products = data.docs;
  const limit = parseInt(req.query.limit);
  const productLimit = limit ? products.slice(0,limit) : products;

  return res.render('home', {
    title: 'Home',
    products: productLimit,
    props:totalDocs
  });
});

export default router;