import { Router } from "express";
import { getCarts,addCartItem } from "../modules/cartsManager.js";

const router = Router();

router.get("/", async (req, res) => {
  const {query,limit,page,sort} = req.query;
  const queryObject=query||{};
  const options={
    lean:true,
    limit: parseInt(limit)||2,
    page: parseInt(page)||1,
    sort:sort?{price:sort}:{}
  }
  const response = await getCarts(queryObject, options);
  return res.render('cart', {
    title: 'product',
    products: response
  });
});

router.post("/:cid/products/:pid", async (req, res) => {
  const {cid,pid} = req.params;
  const {quantity} = req.body;
  const response = await addCartItem(cid,pid,quantity);
  return res.status(response.status).send({status:response.status,payload:'Producto Agregado'})
});

router.put("/:cid/products/:pid", async (req, res) => {})

router.delete("/:cid/products/:pid", async (req, res) => {
  const {cid,pid} = req.params;
  const response = await deleteCartItem(cid,pid);
  return res.status(response.status).send({status:response.status,payload:'Producto Eliminado'})
})

export default router;