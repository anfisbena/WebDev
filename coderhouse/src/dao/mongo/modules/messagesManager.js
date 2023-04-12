import Messages from '../models/Message.model.js';

export const getMessages = async () =>await Messages.find().lean();
export const createMessages=async(message)=>await Messages.create(message);