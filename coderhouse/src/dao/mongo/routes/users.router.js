import { Router } from 'express';
import {getUsers,createUser} from '../modules/usersManager.js';

const router = Router();

router.get('/', async (req, res) => {
  const response = await getUsers();
  return res.status(response.status).send({status:response.status,payload:response.payload})
});


router.post('/', async (req, res) => {
  const response = await createUser(req.body);
  return res.status(response.status).send({status:response.status,payload:response.payload})
})

export default router;