import Messages from '../models/messages.model.js';

export const getMessages = async () =>{
  try{
    await Messages.paginate({},{lean:true,limit:10,page:1});}
  catch(err){
    console.log(err);
  }
}

export const createMessages=async(message)=>{
  try{
    await Messages.create(message);
  }
  catch(err){
    console.log(err)
  }
}