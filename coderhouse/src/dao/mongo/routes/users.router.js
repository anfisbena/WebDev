import { Router } from 'express';
import {getUsers,createUser} from '../managers/users.manager.js';

const router = Router();

router.get('/', async (req, res) => {
  const query=req.query.query||{};
  console.log(query);
  const options=
  {
    lean:true,
    limit: parseInt(req.query.limit)||25,
    page: parseInt(req.query.page)||1,
  };
  const data = await getUsers(query,options)

  return res.render('users', 
    {
      title:        'Users',
      users:        data.payload.docs,
      currentPage:  data.page,
      totalPages:   data.totalPages,
      hasPrevPage:  data.prevLink,
      hasNextPage:  data.nextLink,
    }
  );
});

router.get('/:id', async (req, res) => {
  const query={'_id':`${req.params.id}`};
  const options=
  {
    lean:true,
    limit: parseInt(req.query.limit)||25,
    page: parseInt(req.query.page)||1,
  };
  const data = await getUsers(query,options)
  const product_id= data.payload.docs.map(element => {
    return element.cart
  });
  console.log(product_id);

  return res.render('users', 
  {
    title:        'Users',
    users:        data.payload.docs,
    currentPage:  data.page,
    totalPages:   data.totalPages,
    hasPrevPage:  data.prevLink,
    hasNextPage:  data.nextLink,
  }
);
})



router.post('/', async (req, res) => {
  const response = await createUser(req.body);
  return res.status(response.status).send({status:response.status,payload:response.payload})
})

export default router;