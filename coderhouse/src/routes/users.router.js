import { Router } from 'express';
import Users from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await Users.find();
  res.status(200).send({ result: 'Success', payload: users });
});


router.post('/', async (req, res) => {
  let {first_name,last_name,email}=req.body;
  if(
    !first_name||
    !last_name||
    !email
  )
  { return res.status(400).send({status:"error",error:"Incomplete Values"})}
  let user=await Users.create(
    {
      first_name,
      last_name,
      email
    }
  );
  return res.send({status:'Success',payload:user})
})




export default router;