import Messages from '../models/messages.model.js';

export const getMessages = async () =>await Messages.paginate({},{lean:true,limit:10,page:1});
export const createMessages=async(message)=>await Messages.create(message);