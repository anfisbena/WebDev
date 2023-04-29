import { Router } from 'express';
import {getUsers,createUser} from '../managers/users.manager.js';


const router = Router();

router.get('/login', (req, res) => {
  try{
    if(!req.cookies.coderUser){
      return res.render('login',{
        title:'Login',
      })
    }
    else{
      return res.redirect('/')
    }
  }
  catch(err){console.log(err)}
})

router.post('/login',async (req, res) => {
  try{
    const response = await getUsers(req.body);
    if(response.status===400){
      return res.status(response.status).send({status:response.status,error:response.error})
    }
    else{
      req.session.user=
      {
        first_name:response.payload.first_name,
        last_name:response.payload.last_name,
        email:response.payload.email,
        role:response.payload.role
      }
      res.cookie('coderUser',req.session.user)
      return res.status(response.status).send({status:response.status,payload:response.payload})
    }
  }
  catch(err){console.log(err)}
})

router.get('/register', (req, res) => {
  try{
    if(!req.cookies.coderUser){
      return res.render('register',{
        title:'Register',
      })}
    else{
      return res.redirect('/profile')
    }
  }
  catch(err){console.log(err)}
});

router.post('/register', async (req, res) => {
  try{
    const response=await createUser(req.body);
    return res.status(response.status).send({status:response.status,payload:response.payload})
  }
  catch(err){console.log(err)}
})

router.get('/profile', (req, res) => {
  const user=req.cookies.coderUser;
  if(!user){return res.redirect('/login')}
  res.render('profile',{
    title:'Profile',
    user:req.cookies.coderUser
  })
})

router.get('/logout', (req, res) => {
  try{
    res.clearCookie('coderUser')
    return res.redirect('/login')
  }
  catch(err){console.log(err)}
})

export default router;