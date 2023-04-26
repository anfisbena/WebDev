import { Router } from 'express';
import {getUsers,createUser} from '../managers/users.manager.js';


const router = Router();

// router.get('/:id', async (req, res) => {
//   const query={'_id':`${req.params.id}`};
//   const options=
//   {
//     lean:           true,
//     limit:          parseInt(req.query.limit)||25,
//     page:           parseInt(req.query.page)||1,
//   };
//   const data = await getUsers(query,options)
//   return res.render('users', 
//   {
//     title:          'Users',
//     users:          data.payload.docs,
//     currentPage:    data.page,
//     totalPages:     data.totalPages,
//     hasPrevPage:    data.prevLink,
//     hasNextPage:    data.nextLink,
//   });
// })


router.get('/login', (req, res) => {
  try{
    return res.render('login',{
      title:'Login',
    })
  }
  catch(err){console.log(err)}
})

router.post('/login',async (req, res) => {
  try{
    const query=
    {
      'email':`${req.body.email}`,
      'password':`${req.body.password}`,
    }||{};
    const options=
    {
      lean:           true,
      limit:          parseInt(req.query.limit)||25,
      page:           parseInt(req.query.page)||1,
    };
    
    const response = await getUsers(query,options)

    if(response.status===400){return res.status(response.status).send({status:response.status,payload:response.payload})}
    else{
      req.session.user={
        first_name:response.payload.docs[0].first_name,
        last_name:response.payload.docs[0].last_name,
        email:response.payload.docs[0].email,
        role:response.payload.docs[0].role
      }
      return res.status(response.status).send({status:response.status,payload:req.session.user})
    }
  }
  catch(err){console.log(err)}
})

router.get('/register', (req, res) => {
  try{
    return res.render('register',{
      title:'Register',
    })
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
  res.render('profile',{
    title:'Profile',
    user:req.session.user
  })
})


export default router;