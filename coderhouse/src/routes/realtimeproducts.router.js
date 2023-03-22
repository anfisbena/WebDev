import {Router} from 'express';


const router = Router();

//GET
router.get('/realtimeproducts',async(req,res)=>{

  return res.render('realtimeproducts',{})
})




export default router;