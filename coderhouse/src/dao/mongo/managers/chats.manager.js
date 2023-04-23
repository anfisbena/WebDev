import Chats from '../models/chats.model.js';

export const getChats= async () =>{
  try{
    await Chats.paginate({},{lean:true,limit:10,page:1});
  }
  catch(err){
    console.log(err);
  }
}
export const createChat=async(chat)=>{
  try{
    const createdChat=await Chats.create(chat);
    return {status:200,result:'ok',payload:createdChat};
  }
  catch(err){
    console.log(err)
  }
}

export const addUser=async(chatId,userId)=>{
  try {
    const updatedChat = await Chats.updateOne(
      { _id: chatId },
      { $addToSet: { users: [userId] } }
    );
    return {status:200,result:'ok',payload:updatedChat};
  } catch (error) {
    console.log(error);
  }
};