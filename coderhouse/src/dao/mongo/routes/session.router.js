import {Router} from 'express';

const router = Router();

router.post('/register', (req, res) => {
  return res.render('login')}
);

router.post('/login', (req, res) => {
  const {username,password}=req.body;
  console.log(username,password)
  return res.render('login',{
    title:'Login',
  })
})

export default router;