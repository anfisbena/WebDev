import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const users = await userModel.find();
  return res.status(200).json({ result: 'Success', payload: users });
});

router.post('/', async (req, res) => {
  let {first_name,last_name,email}=req.body;
  if(
    !first_name||
    !last_name||
    !email
  )
  {return res.status(400).json({result:'Error',message:'Missing data.'})}
  let user=await userModel.create(
    {
      first_name,
      last_name,
      email
    }
  );
  return res.send({status:'Success',payload:user})
})

export default router;