import { Router } from 'express';
import {getProducts} from '../modules/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
  const query=req.query.query||{};
  const options={
    lean:true,
    limit: parseInt(req.query.limit)||2,
    page: parseInt(req.query.page)||1,
    sort:req.query.sort?{price:req.query.sort}:{}
  }
  const data = await getProducts(query,options)
  return res.render('home', {
    title: 'Home',
    products: data.payload.docs
  });
});


export default router;