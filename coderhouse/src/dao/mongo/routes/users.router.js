import { Router } from 'express';
import {getUsers,createUser} from '../managers/users.manager.js';


const router = Router();

// router.get('/', async (req, res) => {
//   const query=req.query.query||{};
//   const options=
//   {
//     lean:           true,
//     limit:          parseInt(req.query.limit)||25,
//     page:           parseInt(req.query.page)||1,
//   };
//   const data = await getUsers(query,options)
//   return res.render('users', 
//     {
//       title:        'Users',
//       users:        data.payload.docs,
//       currentPage:  data.page,
//       totalPages:   data.totalPages,
//       hasPrevPage:  data.prevLink,
//       hasNextPage:  data.nextLink,
//     }
//   );
// });

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

// router.post('/', async (req, res) => {
//   const response = await createUser(req.body);
//   return res.status(response.status).send({status:response.status,payload:response.payload})
// })


router.get('/login', (req, res) => {
  return res.render('login',{
    title:'Login',
  })
})

router.post('/login',async (req, res) => {
  const cookieUser = req.body.email;
  const query={
    'email':`${req.body.email}`,
    'password':`${req.body.password}`,
  };
  const options=
  {
    lean:           true,
    limit:          parseInt(req.query.limit)||25,
    page:           parseInt(req.query.page)||1,
  };
  const data = await getUsers(query,options)
  console.log(data)
  res.cookie('CoderCookie',cookieUser,{maxAge:10000});
  return res.render('login', 
  {
    title:          'Users',
    users:          data.payload.docs,
    currentPage:    data.page,
    totalPages:     data.totalPages,
    hasPrevPage:    data.prevLink,
    hasNextPage:    data.nextLink,
  });
})

router.get('/register', (req, res) => {
  return res.render('register',{
    title:'Register', 
  })}
);

router.post('/register', async (req, res) => {
  const response=await createUser(req.body);
  return res.status(response.status).send({status:response.status,payload:response.payload})
})




export default router;