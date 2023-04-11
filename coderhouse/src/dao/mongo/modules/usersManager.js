import Users from '../models/user.model.js';
import { ErrorCreateUser } from './ErrorHandler.js';

const defaultFunction=()=>'please provide a function to handle the error'

export const getUsers=async()=>{
  try{
    const users = await Users.find();
    return {status:200,result:'ok',payload:users};
  }
  catch(error){
    return {status:404,result:'error',payload:'no se encontraron usuarios'}
  }
}

export const createUser=async(user)=>{
  try{
    const error=ErrorCreateUser(user.first_name,user.last_name,user.email)
    if(error){
      return {status:error.status,result:error.result,payload:error.payload}}
    else{
      const userCreated = await Users.create(user);
      return {status:200,result:'ok',payload:userCreated};      
    }
  }
  catch(error){
    return {status:404,result:'error',payload:'no se pudo crear el usuario'}
  }
}

export default defaultFunction