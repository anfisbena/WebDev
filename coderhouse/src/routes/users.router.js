import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await userModel.find();
    return res.status(200).json({ result: 'Success', payload: users });
  } catch (error) {
    console.log(`Cannot get user: ${error}`);
    return res.status(500).json({ result: 'Error', message: 'Cannot get users.' });
  }
});

export default router;