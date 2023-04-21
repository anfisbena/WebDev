import { Router } from 'express';
import {getProducts,getMetrics} from '../modules/ProductManager.js';

const router = Router();

router.get('/', async (req, res) => {
  const metrics =await getMetrics();
  console.log(metrics)
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
    products: data.payload.docs,
    currentPage:data.page,
    totalPages:data.totalPages,
    hasPrevPage:data.prevLink,
      hasNextPage:data.nextLink,
  });
});


export default router;