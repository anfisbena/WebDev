import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.render('chat', {
    title: 'chat',
    products: []
  });
});

export default router;