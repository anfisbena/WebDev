import Users from '../models/users.model.js';
import { ErrorCreateUser } from './ErrorHandler.js';
import {createCart} from './carts.manager.js';
import {hash,compare} from '../../../utils.js';


export const getUsers=async(credentials)=>{
  try{

    const result=await Users.findOne({email:credentials.email})
    if(!result){
      return {status:400,error:'usuario no encontrado'}
    }
    else if(!compare(result,credentials.password)){
      return {status:400,result:'error',error:'contraseña incorrecta'}
    }
    else{
      return {status:200,result:'ok',payload:result}
    }
  }
  catch(error){
    console.log(error);
  }
}

export const createUser=async(user)=>{
  try{
    const userExist=await Users.findOne({email:user.email})
    const error=ErrorCreateUser(user.first_name,user.last_name,user.email,userExist)
    if(error){
      return {status:error.status,result:error.result,error:error.error}}
    else{
      const newUser=
      {
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email,
        password:hash(user.password),
      };
      const userCreated = await Users.create(newUser);
      await createCart(userCreated._id)
      return {status:201,result:'ok',payload:'user created'};      
    }
  }
  catch(error){
    return {status:500,result:'error',payload:'error en servidor'}
  }
}

export default {getUsers,createUser}