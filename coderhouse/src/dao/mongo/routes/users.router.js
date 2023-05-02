import { Router } from 'express';
import {getUsers,createUser,updateUser} from '../managers/users.manager.js';
import passport from 'passport';

const router = Router();

router.get('/github', passport.authenticate('github',{scope:['user:email']}),(req,res)=>{
  res.redirect('/')
});

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

router.post('/login',passport.authenticate('login',{failureRedirect:'/failLogin'}),async (req, res) => {
  req.session.user={
    first_name:req.user.first_name,
    last_name:req.user.last_name,
    email:req.user.email,
    role:req.user.role,
  }
  res.cookie('coderUser',req.session.user,{maxAge:1000*60*60*24})
  return res.send({status:req.status,message:'User logged in',payload:req.user})
})

router.get('/failLogin',(req,res)=>{
  return res.send({status:'status',error:'Authentication error'})
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

router.post('/register', passport.authenticate('register',{failureRedirect:'/failRegister'}),async (req, res) => {
  return res.send({status:'status',message:'User created'})
})

router.get('/failRegister',(req,res)=>{
  return res.send({status:'status',error:'Authentication error'})
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

router.get('/recover', (req, res) => {
  try{
    res.render('recover',{
      title:'Recover'
    })
  }
  catch(err){console.log(err)}
});

router.post('/recover', async (req, res) => {
  try{
    const response=await updateUser(req.body);
    return res.status(response.status).send({status:response.status,error:response.error})
  }
  catch(err){console.log(err)}
})

export default router;