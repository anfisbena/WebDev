import Users from '../models/users.model.js';
import { ErrorCreateUser } from './ErrorHandler.js';
import {createCart} from './carts.manager.js';

export const getUsers=async(query,options)=>{
  try{
    const result=await Users.paginate(query,options)
    if(result.totalDocs!==0){
      return {
        status:200,
        payload:result,
        totalPages:result.totalPages,
        prevPage:result.prevPage,
        nextPage:result.nextPage,
        page:result.page,
        hasPrevPage:result.hasPrevPage||null,
        hasNextPage:result.hasNextPage||null,
        prevLink:result.prevPage?`http://localhost:8080/api/users?page=${result.prevPage}`:null,
        nextLink:result.nextPage?`http://localhost:8080/api/users?page=${result.nextPage}`:null
      }
    }
    else{
      return {
        status:404,
        payload:'No se encontraron usuarios',
        totalPages:result.totalPages,
        prevPage:result.prevPage,
        nextPage:result.nextPage,
        page:result.page,
        hasPrevPage:result.hasPrevPage||null,
        hasNextPage:result.hasNextPage||null,
        prevLink:result.prevPage?`http://localhost:8080/api/users?page=${result.prevPage}`:null,
        nextLink:result.nextPage?`http://localhost:8080/api/users?page=${result.nextPage}`:null
      }
    }
  }
  catch(error){
    console.log(error);
  }
}

export const createUser=async(user)=>{
  try{
    const error=ErrorCreateUser(user.first_name,user.last_name,user.email)
    if(error){
      return {status:error.status,result:error.result,payload:error.payload}}
    else{
      const userCreated = await Users.create(user);
      await createCart(userCreated._id)
      return {status:200,result:'ok',payload:userCreated};      
    }
  }
  catch(error){
    return {status:404,result:'error',payload:'Verifica tu correo, ya esta registrado'}
  }
}

export default {getUsers,createUser}